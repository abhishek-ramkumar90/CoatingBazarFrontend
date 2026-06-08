const ORDER_EMAIL_API_URL = import.meta.env.VITE_ORDER_EMAIL_API_URL;

if (!ORDER_EMAIL_API_URL) {
  throw new Error("Missing VITE_ORDER_EMAIL_API_URL");
}


export interface SendOrderEmailRequest {
  subject: string;
  quantity: string;
  companyname: string;
  pincode: string;
  contactnumber: string;
  category: string;
  product: string;
  industry: string;
  colour: string;
  chemistry: string;
  finish: string;
  gloss: string;
}

export const sendOrderEmail = async (payload: SendOrderEmailRequest): Promise<void> => {
  const response = await fetch(ORDER_EMAIL_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to send order request");
  }
};

