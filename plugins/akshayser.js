const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/p2TmSNm.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Akshayser bot created by unnisettan*
*Creator number : wa.me/917907531097?text=Hi%20bro%20Iam%20from20%github20%*

*Bot setting video : available soon*

*ɢᴜᴛʜᴜʙ ʟɪɴᴋ  :    https://github.com/unnisettanop/Akshayser*

*ᴀᴜᴅɪᴏ ᴄᴏᴍᴍᴀɴᴅs :    

*sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅs :  

*ғᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɪɴsᴛᴀɢʀᴀᴍ : https://Instagram.com/unnisettan_5

*For More Updates Subscribe The Channel ☝*
`}) 

}));
