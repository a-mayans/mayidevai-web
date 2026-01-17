import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  // --- CORS ---
  const headers = {
    "Access-Control-Allow-Origin": "https://mayidevai.com",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // Preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: "Method Not Allowed",
    };
  }

  try {
    const response = await fetch(
      "https://workflows.n8nmayidevai.site/webhook/lead-web",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: event.body,
      }
    );

    const text = await response.text();

    return {
      statusCode: response.status,
      headers,
      body: text,
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers,
      body: "Internal error",
    };
  }
};
