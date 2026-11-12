import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    NgControl,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ResponsiveService } from '../../../services/responsive.service';
import {
    customMailValidator,
    customNameValidator,
    generalCustomValidators,
} from '../../../utils/custom-validators';
import { InputField } from '../../../shared/input-field/input-field';
import { ErrorService } from '../../../services/error.service';

@Component({
    imports: [TranslatePipe, ReactiveFormsModule, InputField],
    selector: 'app-contact',
    styleUrl: './contact.scss',
    templateUrl: './contact.html',
})
export class Contact {
    fb = inject(FormBuilder);
    http = inject(HttpClient);
    responsive = inject(ResponsiveService);
    errorService = inject(ErrorService);

    isSubmitting = signal<boolean>(false);
    statusMessage = '';

    msgForm = this.fb.group({
        name: ['', [Validators.required, generalCustomValidators(), customNameValidator()]],
        mail: ['', [Validators.required, customMailValidator()]],
        message: ['', [Validators.required, Validators.minLength(10)]],
        privacy: [false, Validators.requiredTrue],
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
        if (this.msgForm.invalid || this.isSubmitting()) return;

        this.isSubmitting.set(true);
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
                this.isSubmitting.set(false);
            },
            error: () => {
                this.statusMessage = 'Netzwerkfehler.';
                this.isSubmitting.set(false);
            },
        });
    }

    protected showError(ctrl: AbstractControl | null): string | null {
        if (!ctrl || !ctrl.invalid || !ctrl.touched) return null;
        const errors = ctrl.errors?.['required'] ? { requiredPrivacy: true } : ctrl.errors;
        return this.errorService.getErrorMessage(errors, '');
    }
}
