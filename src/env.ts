import { cleanEnv, str } from 'envalid'

const env = cleanEnv(import.meta.env, {
    VITE_EMAILJS_PUBLIC_KEY: str(),
    VITE_EMAILJS_SERVICE_ID: str(),
    VITE_EMAILJS_TEMPLATE_ID: str(),
});

export default env;