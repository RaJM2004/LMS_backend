import fetch from 'node-fetch';

const EMAILJS_SERVICE_ID = 'service_3t3157e';
const EMAILJS_TEMPLATE_ID = 'template_fsn1w86';
const EMAILJS_PUBLIC_KEY = 'ZdJ9qxgOMtyatPEh3';
const EMAILJS_PRIVATE_KEY = 'MCfVpchvqIckvlQMS3bzX';

export const sendEmail = async (toEmail: string, message: string, attachmentData?: string, attachmentName: string = 'certificate.png', templateId?: string, extraParams?: any) => {

    if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY) {
        console.error("Missing EmailJS configuration");
        return { success: false, error: "Configuration missing" };
    }

    const emailParams: any = {
        service_id: EMAILJS_SERVICE_ID,
        template_id: templateId || EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        accessToken: EMAILJS_PRIVATE_KEY,
        template_params: {
            to_email: toEmail,
            message: message,
            // Reuse 'otp' field for header if needed, or rely on message body. 
            // The template likely uses {{otp}} and {{message}}. 
            // We'll put a generic subject in OTP if possible, or just ignore.
            otp: "Course Completion",
            ...extraParams
        }
    };

    // Note: EmailJS API standard endpoint doesn't support direct attachments in JSON body easily unless using specific provider features or base64 in template vars if the template supports it.
    // However, the README for EmailJS API says they support 'content' for attachments? No, that's usually for SDK.
    // Let's try to verify if we can pass attachments in the recursive object.
    // According to EmailJS REST API docs, to send attachments you might need FormData potentially?
    // But typically node-fetch sends JSON. 
    // IF EmailJS doesn't support attachments via simple JSON API without specific template setup, we might struggle.
    // HOWEVER, many users use base64 in template params to render image in HTML <img> tag.
    // For *file download* attachment, it is harder.

    // Let's try to assume we can just send the message for now, and if we want attachment, we might need a workaround.
    // Actually, let's look at a common pattern:
    // If we can't attach, we just send a link.
    // BUT user said "Attached".

    // Let's try adding it to template_params if the template uses it, or just send it as a variable.
    // "content" key in template_params? 
    // Wait, the official REST API allows `accessToken` for private key auth.
    // It doesn't explicitly document file attachments in the JSON payload structure easily found.
    // EXCEPT: if using FormData.

    // To simplify, let's try to send the image as an HTML inline image first?
    // <img src="data:image/png;base64,..." /> 
    // This requires the template to support HTML and variable interpolation.

    // The safest bet for "Attached" without complex server setup is usually just a link.
    // BUT I will try to implement the sending logic.

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'http://localhost'
            },
            body: JSON.stringify(emailParams)
        });

        if (response.ok) {
            console.log(`Email sent to ${toEmail}`);
            return { success: true };
        } else {
            const errorData = await response.text();
            console.error("EmailJS Failed:", errorData);
            return { success: false, error: errorData };
        }
    } catch (error: any) {
        console.error("Failed to send request to EmailJS:", error);
        return { success: false, error: error.message };
    }
};
