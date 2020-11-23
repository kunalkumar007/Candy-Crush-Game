document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  const width = 8;
  const squares = [];
  const candyColors = ['red', 'yellow', 'orange', 'purple', 'green', 'blue'];

  //create board
  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div');
      square.setAttribute('draggable', true);
      square.setAttribute('id', i);
      let randomColor = Math.floor(Math.random() * candyColors.length);
      square.style.backgroundColor = candyColors[randomColor];

      grid.appendChild(square);
      squares.push(square);
    }
  }
  createBoard();

  //Drag the Candies.
  let colorBeingDragged,
    colorBeingReplaced,
    squareIdBeingDragged,
    squareIdBeingReplaced;

  squares.forEach((square) => square.addEventListener('dragstart', dragStart));
  squares.forEach((square) => square.addEventListener('dragend', dragEnd));
  squares.forEach((square) => square.addEventListener('dragover', dragOver));
  squares.forEach((square) => square.addEventListener('dragenter', dragEnter));
  squares.forEach((square) => square.addEventListener('dragleave', dragLeave));
  squares.forEach((square) => square.addEventListener('drop', dragDrop));

  function dragStart() {
    colorBeingDragged = this.style.backgroundColor;
    squareIdBeingDragged = parseInt(this.id);
    console.log(
      colorBeingDragged,
      squareIdBeingDragged,
      squareIdBeingReplaced,
      'dragStart'
    );
  }

  function dragOver(e) {
    e.preventDefault();
    console.log(this.id, 'dragOVer');
  }

  function dragEnter(e) {
    e.preventDefault();
    console.log(this.id, 'dragEnter');
  }

  function dragLeave() {
    console.log(this.id, 'dragLeave');
  }

  function dragDrop() {
    colorBeingReplaced = this.style.backgroundColor;
    squareIdBeingReplaced = parseInt(this.id);
    console.log(colorBeingReplaced, 'dragDrop');
    this.style.backgroundColor = colorBeingDragged;
    squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced;
  }
  function dragEnd() {
    console.log(this.id, 'dragEnd');
    let validMoves = [
      squareIdBeingDragged - 1,
      squareIdBeingDragged - width,
      squareIdBeingDragged + 1,
      squareIdBeingDragged + width,
    ];
    let validMove = validMoves.includes(squareIdBeingReplaced);

  }
});
