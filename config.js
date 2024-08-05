//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/5dc19c829ebb2ae0ecb6e.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "2349159896402";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUp4UXFjUE1OZjJZNklrd0thb2N6cVZjMVNKaVN6d1JwL1BTZGtxN1hHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSE40L1N3UUFFQ0ZTaG5wZVhBazQ2Z2k5eDBrTytmOG1wTlpHQ1VTaWF5az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTzFTaTFKbFNyUEdVZ3Y3SXJnZmVOUDBvK2EvVGtnalp4TDFuNkxQOFVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTeWFFWk8ydEFiNEY5YXFSR1RUNldJTGxJc0UzY0ZMYWNZZDNEU1BJYzFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlQYUNtNzAxNzV1NEVvWlBJb3J0YkthNGdCVHRWdlphckFIUU5pb3Jja2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNmNXZOaWVIdndpdDlVTGlBSmhQZklHR2plNjZYbWdscm5sQWdESEdNVWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBIZzZseExjYldoTXkxSTZleFZiVHlIaTd0eHJ5Zis5UzhudlZXTk9VTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVFsQitMVFcwRFlmNHJZZTVXT2x0VnNjSWVnZFBGOXNjUzU5UkJPY2pEYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNhdE8xYmFLeC9aVnVzc3g0QS9VMks5K3JQTko5SlF3YkNpeTd3WTR1Z2xoNzJpZUFpbmE1U3J5QVVCNzB0RXQ2Um9qVEY1L0M2R0RrR01qazR5VUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6IjNjY1dXeFJXUUVQWHc2eFhmVlNtOWMzUXN5THl4SlFMNkJqQ24vVDlyNmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkpXd0pRckdnU1k2ZGljSnU4bkR1bGciLCJwaG9uZUlkIjoiMjNkMzkzZDEtZDNiNy00NmU0LThjN2EtNGVlMTllYjM4NTUyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBCNUNjUy9odWFxMXo3REk0Y0NqelFpaTNSND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBM05NV3hSZW9lTHlBQUhBTDNvKzlIbUpYckk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM1BZN1oxQ0giLCJtZSI6eyJpZCI6IjIzNDkxNTk4OTY0MDI6M0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXk0M3ZBQ0VOYmF2clVHR0NrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieElldjN1ZHQ1d01yZ2I5ZG53VlphTnNGS1V6T0FTc0xyUldTN25OUThsUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibWRNVUZSQlhkZldCS1pPRDE0MlNGZjJqOXpUa1BuUEFHTVlCVjVhdHd5ZlBoOUgvT1Z3bFdUNDVqTjdhWWpwTDJPNVNidWY4UkhQVDJoM2dlTXhHaVE9PSIsImRldmljZVNpZ25hdHVyZSI6InN4c3NYalZFMkw0OVBocHNVY0NrNXZYdlRDMzBzcGFZSjZDZ3lZM3F1ZGlWOG1IcXRZOUVLcGtSTEJvR0VPeGlqNjNBMk9MUHVwWXdZak5EWmhjMUJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTE1OTg5NjQwMjozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNTSHI5N25iZWNESzRHL1haOEZXV2piQlNsTXpnRXJDNjBWa3U1elVQSlUifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjc4OTIxOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNM2UifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Bot Made By Ademola❤️🔐",
  author: process.env.PACK_AUTHER || "ADE❤️🔐",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ADEMOLA❤️🔐",
  ownername: process.env.OWNER_NAME || "Ademola💚🔐",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
