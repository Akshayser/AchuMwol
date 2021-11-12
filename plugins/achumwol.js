const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/nnnHTDn.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*AchuMwol created by Akshayser*
*Creator number : wa.me/917907531097?text=Hi%20Unni%20settan.%20*

*Githublink (Setup)  :    https://github.com/Akshayser/AchuMwol*

*Audio commads :   https://github.com/Akshayser/media/tree/main/uploads*

*Sticker commads : https://github.com/Akshayser/media/tree/main/stickers*

*Video For Setting Bot : Available soon* 

*HAPPY USING ACHUMWOL 💖*
`}) 

}));
