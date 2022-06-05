export default function(min: number, max: number) {
  const offset = max - min
  return Math.random() * offset + min
}
