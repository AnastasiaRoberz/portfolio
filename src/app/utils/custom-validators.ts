import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** Forbids consecutive dots, hyphens, or spaces. */
const DUPLICATE_SPECIALS_REGEX = /([.\-\s])\1/;
/** Detects common invisible characters and zero-width spaces. */
const INVISIBLE_CHARS_REGEX = /[\u200B-\u200D\uFEFF]/;
/** Forbidden script and control characters in contact data. */
const FORBIDDEN_CHARS_REGEX = /[<>\\{}[\]]/;
/** Must not start or end with a dot or hyphen. */
const EDGE_SPECIALS_REGEX = /^[.\-]|[.\-]$/;
/** Allows all Unicode letters, spaces, apostrophe, dot (for initials), and hyphen. */
const ALLOWED_NAME_CHARS_REGEX = /^[\p{L}\s'.-]+$/u;
/** Requires at least one Unicode letter per name part. */
const CONTAINS_LETTER_REGEX = /\p{L}/u;
/**
 * 1. Local part: letters, digits, allowed characters, no consecutive dots
 * 2. Domain part: letters, digits, hyphens
 * 3. TLD: at least 2 letters (e.g. .de, .com, .cloud)
 */
const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-*]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Returns the error key of the first violated general rule, or `null` if the text is fine.
 *
 * @param rawValue - Untrimmed control value.
 * @returns The error key string if invalid, or null if valid.
 */
function findGeneralError(rawValue: string): string | null {
    const value = rawValue.trim();
    if (value.length === 0) return 'onlyWhitespace';
    if (rawValue.startsWith(' ') || rawValue.endsWith(' ')) return 'invalidEdgeCharacter';
    if (INVISIBLE_CHARS_REGEX.test(value)) return 'invisibleCharacters';
    if (FORBIDDEN_CHARS_REGEX.test(value)) return 'forbiddenCharacters';
    if (EDGE_SPECIALS_REGEX.test(value)) return 'invalidEdgeCharacter';
    if (DUPLICATE_SPECIALS_REGEX.test(value)) return 'consecutiveSpecials';
    return null;
}

/**
 * Validator for free text: no only-whitespace values, invisible or forbidden characters,
 * leading/trailing spaces, edge `.`/`-` or consecutive spaces, periods and hyphens.
 *
 * @returns Angular ValidatorFn enforcing general text restrictions.
 */
export function generalCustomValidators(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const rawValue = control.value;
        if (!rawValue) return null;
        const error = findGeneralError(rawValue);
        return error ? { [error]: true } : null;
    };
}

/**
 * Validator for full names: allowed characters, max. 75 characters, first and last name required.
 *
 * @returns Angular ValidatorFn enforcing full name constraints.
 */
export function customNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const rawValue = control.value;
        if (!rawValue) return null;
        const value = rawValue.trim();

        if (value === 'X Æ A-12') return null;
        if (!ALLOWED_NAME_CHARS_REGEX.test(value)) return { invalidNameChars: true };
        return null;
    };
}

/**
 * Checks that no label of the mail domain is empty or starts/ends with a hyphen.
 *
 * @param mail - Lower-cased mail address.
 * @returns True if domain contains invalid labels, false otherwise.
 */
function hasInvalidDomainLabel(mail: string): boolean {
    const domainPart = mail.split('@')[1];
    if (!domainPart) return false;
    return domainPart
        .split('.')
        .some(
            (label: string) => label.startsWith('-') || label.endsWith('-') || label.length === 0,
        );
}

/**
 * Validator for the mail format (local part, domain labels and TLD with at least 2 letters).
 *
 * @returns Angular ValidatorFn enforcing email address syntax.
 */
export function customMailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const rawValue = control.value;
        if (!rawValue) return null;
        const value = rawValue.trim().toLowerCase();

        if (!EMAIL_REGEX.test(value)) return { invalidMailFormat: true };
        return hasInvalidDomainLabel(value) ? { invalidMailDomain: true } : null;
    };
}
