/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ORDER_EMAIL_API_URL?: string;
  readonly  VITE_ENQUIRY_EMAIL_API_URL?:string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

