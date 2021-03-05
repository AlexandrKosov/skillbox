const PROD_URL = 'https://demo-redd-skillbox.herokuapp.com';
const PORT = process.env.PORT || 3001;
const DEV_URL = process.env.DEV_URL || `http://localhost:${PORT}`;
const IS_DEV = process.env.NODE_ENV !== 'production';

export function getUrl() {
    return IS_DEV ? DEV_URL : PROD_URL;
}