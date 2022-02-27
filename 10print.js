const w = process.stdout.columns
const blocks = ['▚', '▞','▝','▟']

function draw () {
  setTimeout(draw, 1000/10)
  let output = '\x1b[103m\x1b[91m'
  for(i = 0; i < w ; i++) {
    let r = Math.floor(Math.random() * blocks.length)
    output += blocks[r]
  }
  console.log(output)
}

draw ()
