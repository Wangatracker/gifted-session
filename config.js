const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '.env'),
  quiet: true,
  override: false,
});

module.exports = {
    PORT: process.env.PORT || 50900,
    SESSION_PREFIX: process.env.SESSION_PREFIX || "Megan~",
    GC_JID: process.env.GC_JID || "Bfr7VjAkxCfHMmpKuIXyt1",
    DATABASE_URL: process.env.DATABASE_URL || "",
    BOT_REPO: process.env.BOT_REPO || "https://github.com/mauricegift/atassa",
    WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029Vb7FYNA8qIzs2P5dcE37",
    MSG_FOOTER: process.env.MSG_FOOTER || "> *created by wanga*",
};
