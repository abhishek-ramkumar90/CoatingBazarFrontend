# CoatingBazar

## Environment variables

This Vite app reads its order email API URL from an environment variable:

- `VITE_ORDER_EMAIL_API_URL`
- `VITE_ENQUIRE_EMAIL_API_URL`

Local development values are in `/.env.development`.
Production values are in `/.env.production`.

## Render deployment

For Render, set this environment variable on the frontend service before the build runs:

- `VITE_ORDER_EMAIL_API_URL=https://coating-bazaar-api.onrender.com/coatingbazar/api/email/send`
- `VITE_ENQUIRE_EMAIL_API_URL=https://coating-bazaar-api.onrender.com/coatingbazar/api/email/enquire`

Render will use it during the production build.
