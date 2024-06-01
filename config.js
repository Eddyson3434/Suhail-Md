const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Eddyson:Êddysöñ@cluster0.ysiv0x0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_40_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDg5LFxuICAgICAgICA2MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAzMixcbiAgICAgICAgMTAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NixcbiAgICAgICAgNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDg3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDkxLFxuICAgICAgICAzLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTksXG4gICAgICAgIDcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyLFxuICAgICAgICA4NixcbiAgICAgICAgMjExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidGJpRy9nci9nZzJXeVBJaE1QazV3bHNxNDRSTlErOXczWU8rR3I4NDlVWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTM2NTcwNDIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNEM3Q0IzRTU3REZFMTkyRjdCRUJCNDhENkVENDc1RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcyNjAwNDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTM2NTcwNDIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQ0VGNEYyNDZEQkEzOUY5QjZBRTIxRkIzQjg4RkQzN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcyNjAwNDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ2xtVWxGRUZTbENnbDJnUURkVWdnd1wiLFxuICBcInBob25lSWRcIjogXCJhZWIwNTMxNi03N2RhLTQ5MmEtYWFhZi1jOTc3OTQyMDc4NDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQyLFxuICAgICAgMjM0LFxuICAgICAgMTczLFxuICAgICAgMjQ4LFxuICAgICAgMTkyLFxuICAgICAgMTg4LFxuICAgICAgOCxcbiAgICAgIDI1NCxcbiAgICAgIDU2LFxuICAgICAgNDQsXG4gICAgICAxODUsXG4gICAgICAyMjEsXG4gICAgICAyMzYsXG4gICAgICAxMTgsXG4gICAgICAzMixcbiAgICAgIDIwOCxcbiAgICAgIDIxMixcbiAgICAgIDY5LFxuICAgICAgMjA3LFxuICAgICAgOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg1LFxuICAgICAgNyxcbiAgICAgIDIwMixcbiAgICAgIDEwOSxcbiAgICAgIDE1MyxcbiAgICAgIDEwNyxcbiAgICAgIDE0MCxcbiAgICAgIDE2NSxcbiAgICAgIDUsXG4gICAgICAxMzcsXG4gICAgICAyMTUsXG4gICAgICA0NCxcbiAgICAgIDI0MixcbiAgICAgIDIyNSxcbiAgICAgIDUwLFxuICAgICAgMTkwLFxuICAgICAgMjI0LFxuICAgICAgMjE2LFxuICAgICAgMTE4LFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjdZVFZMUVZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzY1NzA0MjM6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc4MTA4MDkxNDY1OTM0OjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+YkVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lPdzNvd0NFSUNlN2JJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTis1dTNld1hWNnlQa1krb2FPWHZiVmVRR1NnWFVJTFM3T0dGa1dlOHd5MD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVOEpQODFzZjZxcGNRTlFpdUFYUkx6V2hMc3pQbForc1hhTVcxN1g1N1pBT3RCMER1K3pGU1ZXRGxQeDZ5RGZKd0N3ZlFvSiszSWpNbzBEdUcyZlZDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyeGdnMi9Pa3pGTkExQTBwckNrbTRlQnJLbkRaZTJXS0hVWWtRbkZKS1dWY2FkVUZPNUZNaFRiZ3M5MmVZVGdJTlJsakp0bmpSM3dRN0NYVzB2TElodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM2NTcwNDIzOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTcyNjAwMzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIOXNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUg5cy5qc29uIjogIntcImtleURhdGFcIjpcIlhCdmxtMithQnBYbkdMWFVPS2JXeURFK3dwY2JTZ2JrVFNicEkrcFRjMms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTYzNTgyOTc5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcyNjAwMzg1MDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
