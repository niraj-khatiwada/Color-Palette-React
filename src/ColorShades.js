import chroma from 'chroma-js'

let levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

function colorShades(starterPalette) {
  let newshadesPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  }
  for (let l of levels) {
    newshadesPalette.colors[l] = []
  }
  for (let color of starterPalette.colors) {
    let shadesResult = generateColorShades(color.color, 10).reverse()
    for (let shade in shadesResult) {
      newshadesPalette.colors[levels[shade]].push({
        shadeName: `${color.name}-${levels[shade]}`,
        id: `${color.name}`.toLowerCase().replace(/ /g, '-'),
        hex: shadesResult[shade],
        rgb: chroma(shadesResult[shade]).css(),
        rgba: chroma(chroma(shadesResult[shade]).name()).alpha(0.999999).css(),
      })
    }
  }
  return newshadesPalette
}

function generateShadesRange(hexColor) {
  return [chroma(hexColor).darken(1.4).hex(), '#fff']
}
function generateColorShades(hexColor, numColor) {
  return chroma
    .scale(generateShadesRange(hexColor))
    .mode('lch')
    .colors(numColor)
}

export { colorShades }
