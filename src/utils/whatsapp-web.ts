const number = process.env.GATSBY_WA_NUMBER

export function getLinkWhastapp(message): string {
  if (!message.length) return ''
  const newMessage = message.split(' ').join('%20')

  return `https://api.whatsapp.com/send?phone=${number}&text=${newMessage}`
}
