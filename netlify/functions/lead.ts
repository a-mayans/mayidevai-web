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

    const signature = event.headers["x-webhook-signature"];
    const body = event.body || "";

    if (!signature) {
      console.warn("Missing signature");
      return { statusCode: 401, body: "Missing signature" };
    }

    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(body, "utf8");
    const expectedSignature = hmac.digest("hex");

    if (signature !== expectedSignature) {
      console.warn("Invalid signature");
      return { statusCode: 401, body: "Invalid signature" };
    }

    console.info("Valid webhook received");

    const response = await fetch(
      "https://workflows.n8nmayidevai.site/webhook/lead-web",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      }
    );

    console.info("Forwarded to n8n:", response.status);

    const text = await response.text();

    return {
      statusCode: response.status,
      body: text,
    };
  } catch (err) {
    console.error("Function crash:", err);
    return { statusCode: 500, body: "Internal error" };
  }
};
