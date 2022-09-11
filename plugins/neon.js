import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Proses...')
  let res = `https://api.lolhuman.xyz/api/textprome/neon?nama=${response[0]}&apikey=LolHuman`
  conn.sendFile(m.chat, res, 'neon.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['neon'].map(v => v + ' <text>')
handler.tags = ['textprome']
handler.command = /^(neon)$/i

export default handler