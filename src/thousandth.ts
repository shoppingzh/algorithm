export default function(val: number) {
  const reverse = String(val).split('').reverse().join('')
  return reverse.replace(/(\d{3})/g, '$1,').replace(/(.*?),?$/g, '$1').split('').reverse().join('')
}