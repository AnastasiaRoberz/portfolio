import { ChangeDetectorRef, Component, computed, DestroyRef, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    imports: [TranslatePipe],
    selector: 'app-error-handling',
    styleUrl: './error-handling.scss',
    templateUrl: './error-handling.html',
})
export class ErrorHandling {
    control = input<AbstractControl | null>(null);
    fieldKey = input.required<string>();

    private cdr = inject(ChangeDetectorRef);
    private destroyRef = inject(DestroyRef);

    ngOnInit(): void {
        const ctrl = this.control();
        if (ctrl) {
            ctrl.statusChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
                this.cdr.markForCheck();
            });
        }
    }

    showErrors(): boolean {
        const ctrl = this.control();
        return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
    }

    getErrorKey(): { key: string; value: any } | null {
        const errors = this.control()?.errors;
        if (!errors) return null;

        const errorKey = Object.keys(errors)[0];
        return {
            key: errorKey,
            value: errors[errorKey],
        };
    }
}
