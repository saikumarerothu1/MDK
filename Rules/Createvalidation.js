/**
 * Unified inline validation for all fields.
 * Detects which control triggered and validates accordingly.
 * Shared between Create & Edit pages.
 * @param {IClientAPI} context
 */
export default function InlineValidation(context) {

    let controlName = context.getName();
    let value = context.getValue();
    if (Array.isArray(value)) value = value[0];

    const nameRegex  = /^[A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF' \-.]+$/;
    const phoneRegex = /^\+?\d{7,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let msg = '';
    let text = value ? String(value).trim() : '';

    switch (controlName) {

        // ── First Name (Create & Edit) ──
        case 'FCCreateFirstName':
        case 'FCFirstName':
            if (text.length > 0 && text.length < 4) {
                msg = 'Must be at least 4 characters.';
            } else if (text.length > 10) {
                msg = 'Must not exceed 10 characters.';
            } else if (text.length > 0 && !nameRegex.test(text)) {
                msg = 'Only letters, apostrophes, hyphens, dots, and spaces allowed.';
            }
            break;

        // ── Last Name (Create & Edit) ──
        case 'FCCreateLastName':
        case 'FCLastName':
            if (text.length > 0 && text.length < 5) {
                msg = 'Must be at least 5 characters.';
            } else if (text.length > 10) {
                msg = 'Must not exceed 10 characters.';
            } else if (text.length > 0 && !nameRegex.test(text)) {
                msg = 'Only letters, apostrophes, hyphens, dots, and spaces allowed.';
            }
            break;

        // ── Phone (Create & Edit) ──
        case 'FCCreatePhone':
        case 'FCPhone':
            if (text.length > 0 && !phoneRegex.test(text)) {
                msg = '7–15 digits only, optional leading +. No spaces or letters.';
            }
            break;

        // ── Email (Create & Edit) ──
        case 'FCCreateEmail':
        case 'FCEmail':
            if (text.length > 0 && !emailRegex.test(text)) {
                msg = 'Enter a valid email (e.g., name@example.com).';
            }
            break;

        // ── DOB (Create & Edit) ──
        case 'FCCreateDOB':
        case 'FCDOB':
            if (value) {
                let dobDate = (value instanceof Date) ? value : new Date(value);
                if (isNaN(dobDate.getTime())) {
                    msg = 'Enter a valid date of birth.';
                } else {
                    let today = new Date();
                    today.setHours(0, 0, 0, 0);
                    dobDate.setHours(0, 0, 0, 0);
                    if (dobDate > today) {
                        msg = 'DOB cannot be a future date.';
                    }
                }
            }
            break;

        default:
            break;
    }

    context.setHelperText(msg);
}