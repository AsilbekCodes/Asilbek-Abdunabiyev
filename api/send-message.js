export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { type, data } = req.body;

    if (!data || !data.name || !data.email) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    let text = "";

    if (type === "service") {
      text =
        `🆕 <b>Yangi xizmat so'rovi</b>\n\n` +
        `👤 Ism: ${data.name}\n` +
        `📧 Email: ${data.email}\n` +
        `📞 Telefon: ${data.phone || "-"}\n` +
        `🛠 Xizmat: ${data.serviceName || "-"}\n` +
        `💰 Narx: ${data.servicePrice || "-"}\n` +
        `💬 Xabar: ${data.message || "-"}`;
    } else {
      text =
        `📩 <b>Yangi murojaat</b>\n\n` +
        `👤 Ism: ${data.name}\n` +
        `📧 Email: ${data.email}\n` +
        `📝 Mavzu: ${data.subject || "-"}\n` +
        `💬 Xabar: ${data.message || "-"}`;
    }

    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    const result = await response.json();

    if (!result.ok) {
      console.error("Telegram error:", result);
      return res.status(500).json({ success: false, message: "Telegram send failed" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
}