import type { Handler } from "@netlify/functions";
import crypto from "crypto";

export const handler: Handler = async (event) => {
  try {
    // Solo aceptamos POST
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: "Method Not Allowed",
      };
    }

    const secret = process.env.N8N_WEBHOOK_SECRET;

    if (!secret) {
      console.error("Missing N8N_WEBHOOK_SECRET");
      return {
        statusCode: 500,
        body: "Server misconfigured",
      };
    }

    const signature = event.headers["x-webhook-signature"];
    const body = event.body || "";

    if (!signature) {
      return {
        statusCode: 401,
        body: "Missing signature",
      };
    }

    // Generar HMAC SHA256
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(body, "utf8");
    const expectedSignature = hmac.digest("hex");

    if (signature !== expectedSignature) {
      console.warn("Invalid signature");
      return {
        statusCode: 401,
        body: "Invalid signature",
      };
    }

    // Reenviar a n8n
    const response = await fetch(
      "https://workflows.n8nmayidevai.site/webhook/lead-web",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
