import { Service } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Service()
export class ErrorService {
    /**
     * Maps a validation error key to a function that builds the message.
     * The function receives the field label and the error data of the validator
     * (e.g. `{ requiredLength, actualLength }` for `maxLength`).
     */
    private readonly messages: Record<string, (field: string, err: any) => string> = {
        // --- General Custom Validators ---
        onlyWhitespace: (field) => `${field} can't be only spaces.`,

        invisibleCharacters: () => `Invisible or unsupported characters.`,

        forbiddenCharacters: () => `Not allowed: < > { } \\ `,

        invalidEdgeCharacter: (field) => `${field} can't start or end with . or -`,

        consecutiveSpecials: () => `No double spaces, periods or hyphens.`,

        // --- Name Validators ---
        invalidNameChars: () => `Only letters, spaces, - and ' allowed.`,

        // --- Mail Validators ---
        invalidMailFormat: () => `Enter a valid email.`,

        invalidMailDomain: () => `Invalid domain after the @.`,

        // --- Angular standard validator (used for Validators.required) ---
        required: (field) => `${field} is required.`,

        requiredDefault: () => 'This field is required.',

        requiredPrivacy: () => 'Please accept the privacy policy.',
    };

    /**
     * Returns the message for the first error of a control.
     *
     * @param errors - The `errors` object of a form control (`control.errors`).
     * @param fieldName - Label of the field, inserted into messages that mention it.
     * @returns `null` if there are no errors, the matching message for the first error key,
     * or the generic "Invalid input." if no message is registered for that key.
     */
    public getErrorMessage(errors: ValidationErrors | null, fieldName: string): string | null {
        if (!errors) return null;

        const firstKey = Object.keys(errors)[0];
        const errorMsg = this.messages[firstKey];
        return errorMsg ? errorMsg(fieldName, errors[firstKey]) : 'Invalid input.';
    }
}
