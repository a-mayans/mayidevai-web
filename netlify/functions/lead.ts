import type { Handler } from "@netlify/functions";
import crypto from "crypto";

export const handler: Handler = async (event) => {
  try {
    console.log("===== Incoming request =====");
    console.log("Method:", event.httpMethod);
    console.log("Headers:", JSON.stringify(event.headers, null, 2));
    console.log("Raw body:", event.body);

    // Solo aceptamos POST
    if (event.httpMethod !== "POST") {
      console.warn("Rejected: not POST");
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

    const signature =
      event.headers["x-webhook-signature"] ||
      event.headers["X-Webhook-Signature"];

    const body = event.body || "";

    if (!signature) {
      console.warn("Missing x-webhook-signature header");
      return {
        statusCode: 401,
        body: "Missing signature",
      };
    }

    console.log("Received signature:", signature);

    // Generar HMAC SHA256
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(body, "utf8");
    const expectedSignature = hmac.digest("hex");

    console.log("Expected signature:", expectedSignature);

    if (signature !== expectedSignature) {
      console.warn("Invalid signature");
      return {
        statusCode: 401,
        body: "Invalid signature",
      };
    }

    console.log("Signature valid. Forwarding to n8n...");

    const N8N_URL = "https://workflows.n8nmayidevai.site/webhook/lead-web";
    console.log("n8n URL:", N8N_URL);
    console.log("Forwarding body:", body);

    const response = await fetch(N8N_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    const text = await response.text();

    console.log("n8n response status:", response.status);
    console.log("n8n response body:", text);

    return {
      statusCode: response.status,
      body: text,
    };
  } catch (err) {
    console.error("Unhandled exception:", err);
    return {
      statusCode: 500,
      body: "Internal error",
    };
  }
};
