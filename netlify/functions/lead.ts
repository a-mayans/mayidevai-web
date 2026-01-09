import type { Handler } from "@netlify/functions";
import crypto from "crypto";

export const handler: Handler = async (event) => {
  try {
    console.log("Incoming request");

    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const secret = process.env.N8N_WEBHOOK_SECRET;

    if (!secret) {
      console.error("Missing N8N_WEBHOOK_SECRET");
      return { statusCode: 500, body: "Server misconfigured" };
    }

    const body = event.body || "";

    console.log("Body:", body);

    // Generar firma HMAC aquí (servidor)
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(body, "utf8");
    const signature = hmac.digest("hex");

    console.log("Generated signature:", signature);

    // Enviar a n8n
    const N8N_URL = "https://workflows.n8nmayidevai.site/webhook/lead-web";

    const response = await fetch(N8N_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-webhook-signature": signature,
      },
      body,
    });

    const text = await response.text();

    console.log("n8n status:", response.status);
    console.log("n8n response:", text);

    return {
      statusCode: response.status,
      body: text,
    };
  } catch (err) {
    console.error("Error:", err);
    return { statusCode: 500, body: "Internal error" };
  }
};
