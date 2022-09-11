import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks'
  m.reply('Proses...')
  let res = `https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=941dce43fc0a344ceb536d7a&text=${response}`
  conn.sendFile(m.chat, res, 'neon.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['lighttext'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(lighttext)$/i

export default handler