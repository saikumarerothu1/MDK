/**
 * Unified validation for Customer Create form.
 * Fields: FCCreateFirstName, FCCreateLastName, FCCreatePhone,
 *         FCCreateEmail, FCCreateDOB, FCCreateCountry
 * @param {IClientAPI} context
 */
export default function CustomerCreateValidation(context) {

    // ── Read & trim field values ──
    let firstName = context.evaluateTargetPath('#Control:FCCreateFirstName/#Value');
    let lastName  = context.evaluateTargetPath('#Control:FCCreateLastName/#Value');
    let phone     = context.evaluateTargetPath('#Control:FCCreatePhone/#Value');
    let email     = context.evaluateTargetPath('#Control:FCCreateEmail/#Value');
    let dob       = context.evaluateTargetPath('#Control:FCCreateDOB/#Value');
    let country   = context.evaluateTargetPath('#Control:FCCountry/#Value');

    firstName = firstName ? firstName.trim() : '';
    lastName  = lastName  ? lastName.trim()  : '';
    phone     = phone     ? phone.trim()     : '';
    email     = email     ? email.trim()     : '';

    // ── Regex patterns ──
    const nameRegex  = /^[A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF' \-.]+$/;
    const phoneRegex = /^\+?\d{7,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let title   = '';
    let message = '';

    // ── First Name ──
    if (!firstName) {
        title   = 'Validate First Name';
        message = 'First Name is required.';
    } else if (firstName.length < 2) {
        title   = 'Validate First Name';
        message = 'First Name must be at least 2 characters.';
    } else if (firstName.length > 50) {
        title   = 'Validate First Name';
        message = 'First Name must not exceed 50 characters.';
    } else if (!nameRegex.test(firstName)) {
        title   = 'Validate First Name';
        message = 'First Name may only contain letters, apostrophes, hyphens, dots, and spaces.';
    }

    // ── Last Name ──
    else if (!lastName) {
        title   = 'Validate Last Name';
        message = 'Last Name is required.';
    } else if (lastName.length < 2) {
        title   = 'Validate Last Name';
        message = 'Last Name must be at least 2 characters.';
    } else if (lastName.length > 50) {
        title   = 'Validate Last Name';
        message = 'Last Name must not exceed 50 characters.';
    } else if (!nameRegex.test(lastName)) {
        title   = 'Validate Last Name';
        message = 'Last Name may only contain letters, apostrophes, hyphens, dots, and spaces.';
    }

    // ── Phone ──
    else if (!phone) {
        title   = 'Validate Phone';
        message = 'Phone number is required.';
    } else if (!phoneRegex.test(phone)) {
        title   = 'Validate Phone';
        message = 'Phone must be 7-15 digits with an optional leading +. No spaces or dashes.';
    }

    // ── Email ──
    else if (!email) {
        title   = 'Validate Email';
        message = 'Email address is required.';
    } else if (!emailRegex.test(email)) {
        title   = 'Validate Email';
        message = 'Please enter a valid email address (e.g., name@example.com).';
    }

    // ── DOB ──
    else if (!dob) {
        title   = 'Validate DOB';
        message = 'Date of Birth is required.';
    } else {
        let dobDate = new Date(dob);
        let today   = new Date();
        today.setHours(0, 0, 0, 0);

        if (isNaN(dobDate.getTime())) {
            title   = 'Validate DOB';
            message = 'Please select a valid Date of Birth.';
        } else if (dobDate >= today) {
            title   = 'Validate DOB';
            message = 'Date of Birth cannot be today or a future date.';
        }
    }

    // ── Country ──
    if (!message) {
        // ListPicker returns an array — check if user selected anything
        if (!country || (Array.isArray(country) && country.length === 0)) {
            title   = 'Validate Country';
            message = 'Please select a Country.';
        }
    }

    // ── Show error OR proceed ──
    if (message) {
        return context.executeAction({
            "Name": "/demoapp/Actions/ValidationFailure.action",
            "Properties": {
                "Title": title,
                "Message": message
            }
        });
    }

    // ✅ All validations passed → Create entity
    return context.executeAction('/demoapp/Actions/Customers_CreateEntity.action');
}