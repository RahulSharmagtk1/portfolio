import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

serve(async (req) => {
    // ✅ CORS preflight
    if (req?.method === "OPTIONS") {
        return new Response("ok", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "*",
            },
        });
    }

    try {
        const { name, email, message } = await req?.json();

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
        }

        const RESEND_API_KEY = Deno?.env?.get("RESEND_API_KEY");

        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "onboarding@resend.dev",
                to: "onboarding@resend.dev",
                subject: `New Contact Form Submission from ${name}`,
                html: `
          <div style="font-family: monospace; background: #0a0e1a; color: #00FF87; padding: 24px; border-radius: 8px; border: 1px solid #00FF8733;">
            <h2 style="color: #00FF87; margin-top: 0;">New Contact Form Message</h2>
            <p><strong style="color: #00D4FF;">Name:</strong> <span style="color: #ffffff;">${name}</span></p>
            <p><strong style="color: #00D4FF;">Email:</strong> <span style="color: #ffffff;">${email}</span></p>
            <p><strong style="color: #00D4FF;">Message:</strong></p>
            <p style="color: #ffffff; background: #ffffff10; padding: 12px; border-radius: 4px; border-left: 3px solid #00FF87;">${message?.replace(/\n/g, "<br>")}</p>
          </div>
        `,
            }),
        });

        const data = await res?.json();

        if (!res?.ok) {
            throw new Error(data.message || "Failed to send email");
        }

        return new Response(JSON.stringify({ success: true, id: data.id }), {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    }
});
