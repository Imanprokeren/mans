import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Proses...')
  let res = `https://api.lolhuman.xyz/api/textprome/neon?apikey=07c1c8f96a419c66e1ed83e2&text={txt}`
  conn.sendFile(m.chat, res, 'neon.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['neon'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(neon)$/i

export default handler
