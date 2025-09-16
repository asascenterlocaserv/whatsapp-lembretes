const express = require("express");
const bodyParser = require("body-parser");
const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rota de teste da API
app.get("/", (req, res) => {
  res.send("🚀 API de lembretes via WhatsApp está rodando!");
});

// Configuração do cliente WhatsApp
const client = new Client();

client.on("qr", (qr) => {
  console.log("📱 Escaneie este QR Code para conectar ao WhatsApp:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ Cliente WhatsApp conectado!");
});

// Inicializa WhatsApp
client.initialize();

// Inicializa servidor Express
app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});

