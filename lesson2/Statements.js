const instr = ['Back', 'Back', 'Back', 'Back', 'Forward', 'Left', 'Right', 'Right'];

var x = 0
var y = 0
var tempArr = []

tempArr.push([x,y])

instr.forEach(function (item) {
    if (item === 'Forvard') {
      x++
      tempArr.push([x,y])
    } else if (item === 'Back') {
      x--
      tempArr.push([x,y])
    }
    else if (item === 'Right') {
      y++
      tempArr.push([x,y])
    } else if (item === 'Left') {
      y--
      tempArr.push([x,y])
    }
  console.log(tempArr);
})
