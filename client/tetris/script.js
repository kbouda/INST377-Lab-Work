document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const squares = Array.from(document.querySelectorAll('.grid div'))
  const scoreDisplay = document.querySelector('#score')
  const StartBtn = document.querySelector('#start_button')
  const width = 10

  //Tetrominoes
  const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const zTetromino = [
    [0, width, width+1, width*2+1]
    [width+1, width+2, width*2, width*2+1]
    [0, width, width+1, width*2+1]
    [width+1, width+2, width*2, width*2+1]

  ]

  const tTeromino = [
    [1, width, width+1, width+2]
    [1, width+1, width+2, width*2+1]
    [width, width+1, width+2, width*2+1]
    [1, width, width+1, width*2+1]

  ]

  const 





})
