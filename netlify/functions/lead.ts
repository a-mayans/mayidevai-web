import type { Handler } from "@netlify/functions";
import crypto from "crypto";

export const handler: Handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const secret = process.env.N8N_WEBHOOK_SECRET;
    if (!secret) {
      console.error("Missing N8N_WEBHOOK_SECRET");
      return { statusCode: 500, body: "Server misconfigured" };
    }

    const body = event.body || "";

    // Firmamos AQUÍ (Netlify → n8n)
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(body, "utf8");
    const signature = hmac.digest("hex");

    const response = await fetch(
      "https://workflows.n8nmayidevai.site/webhook/lead-web",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-webhook-signature": signature,
        },
        body,
      }
    );

    const text = await response.text();

    return {
      statusCode: response.status,
      body: text,
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: "Internal error",
    };
  }
};
