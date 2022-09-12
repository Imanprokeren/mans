import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teksnya!'
  m.reply('proses..')
  let res = `https://api.lolhuman.xyz/api/textprome2/glitch?apikey=6e551d9967ff8fe559a7aaa4&text1={response}&text2={response}`
  conn.sendFile(m.chat, res, 'glitch.jpg', `Nih kak`, m, false)
}
handler.help = ['glitch'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(glitch)$/i
handler.limit = false

export default handler
