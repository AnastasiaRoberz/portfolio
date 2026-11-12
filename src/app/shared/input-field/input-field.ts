import {
    ChangeDetectorRef,
    Component,
    computed,
    effect,
    inject,
    input,
    signal,
} from '@angular/core';
import { ControlValueAccessor, NgControl, ReactiveFormsModule } from '@angular/forms';
import { ErrorService } from '../../services/error.service';

let nextId = 0;

@Component({
    imports: [ReactiveFormsModule],
    selector: 'app-input-field',
    styleUrl: './input-field.scss',
    templateUrl: './input-field.html',
})
export class InputField implements ControlValueAccessor {
    public readonly errorService = inject(ErrorService);
    private readonly ngControl = inject(NgControl);

    private readonly cdr = inject(ChangeDetectorRef);

    private onChange: (value: string) => void = () => {};

    protected onTouched: () => void = () => {};

    protected value: string = '';

    public readonly fieldId = input<string>(`app-input-${nextId++}`);

    public readonly label = input<string>();

    public readonly type = input<'input' | 'textarea'>('input');

    public readonly isValid = signal<boolean>(false);

    public readonly requiredKey = input<string>('required');

    public icon = computed(() => (this.isValid() ? 'icon-valid' : 'icon-invalid'));

    constructor() {
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
        this.initControlEventsEffect();
    }

    private initControlEventsEffect(): void {
        effect((onCleanUp) => {
            const ctrl = this.ngControl.control;
            if (ctrl) {
                const sub = ctrl.events.subscribe(() => {
                    this.isValid.set(ctrl.valid);
                    this.cdr.markForCheck();
                });
                onCleanUp(() => sub.unsubscribe());
            }
        });
    }

    public writeValue(value: string): void {
        this.value = value ?? '';
        this.cdr.markForCheck();
    }

    public registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    protected onInput(event: Event): void {
        const inputElement = event.target as HTMLInputElement | HTMLTextAreaElement;
        this.value = inputElement.value;
        this.onChange(this.value);
    }

    /**
     * Returns the error message to display below the field.
     *
     * @returns Validation error message string, or `null` if valid/untouched.
     */
    protected showError(): string | null {
        const ctrl = this.ngControl.control;
        if (!ctrl || !ctrl.invalid || !ctrl.touched) return null;
        const errors = ctrl.errors?.['required'] ? { [this.requiredKey()]: true } : ctrl.errors;
        return this.errorService.getErrorMessage(errors, this.label() ?? '');
    }
}
