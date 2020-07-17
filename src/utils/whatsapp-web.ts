const number = process.env.GATSBY_WA_NUMBER

export function getLinkWhastapp(message): string {
  if (!message.length) return ''
  message = message.split(' ').join('%20')

  return `https://api.whatsapp.com/send?phone=${number}&text=${message}`
}
