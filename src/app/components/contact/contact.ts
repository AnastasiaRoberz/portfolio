import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ErrorHandling } from '../error-handling/error-handling';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
    imports: [RouterLink, TranslatePipe, ReactiveFormsModule, ErrorHandling],
    selector: 'app-contact',
    styleUrl: './contact.scss',
    templateUrl: './contact.html',
})
export class Contact {
    fb = inject(FormBuilder);
    http = inject(HttpClient);
    responsive = inject(ResponsiveService);

    isSubmitting = false;
    statusMessage = '';

    msgForm = this.fb.group({
        name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        mail: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', [Validators.required, Validators.minLength(10)]),
        privacy: new FormControl(false, Validators.requiredTrue),
    });

    get name() {
        return this.msgForm.get('name');
    }

    get mail() {
        return this.msgForm.get('mail');
    }

    get message() {
        return this.msgForm.get('message');
    }

    get privacy() {
        return this.msgForm.get('privacy');
    }

    onSubmit(): void {
        if (this.msgForm.invalid || this.isSubmitting) return;

        this.isSubmitting = true;
        this.statusMessage = 'Sende Nachricht...';

        const payload = {
            ...this.msgForm.value,
            access_key: 'cdf4b948-6298-49a2-b22e-10fb9fd94f5a',
        };

        this.http.post('https://api.web3forms.com/submit', payload).subscribe({
            next: (response: any) => {
                if (response.success) {
                    this.statusMessage = 'Nachricht erfolgreich gesendet!';
                    this.msgForm.reset();
                } else {
                    this.statusMessage = 'Fehler beim Senden.';
                }
                this.isSubmitting = false;
            },
            error: () => {
                this.statusMessage = 'Netzwerkfehler.';
                this.isSubmitting = false;
            },
        });
    }
}
