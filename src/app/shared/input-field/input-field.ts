import { ChangeDetectorRef, Component, effect, inject, input, signal } from '@angular/core';
import { ControlValueAccessor, NgControl, ReactiveFormsModule } from '@angular/forms';

let nextId = 0;

@Component({
    imports: [ReactiveFormsModule],
    selector: 'app-input-field',
    styleUrl: './input-field.scss',
    templateUrl: './input-field.html',
})
export class InputField implements ControlValueAccessor {
    private readonly ngControl = inject(NgControl);

    private readonly cdr = inject(ChangeDetectorRef);

    private onChange: (value: string) => void = () => {};

    protected onTouched: () => void = () => {};

    protected value: string = '';

    public readonly fieldId = input<string>(`app-input-${nextId++}`);

    public readonly label = input<string>();

    public readonly type = input<'input' | 'textarea'>('input');

    public readonly icon = signal<string>('');

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
}
