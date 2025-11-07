const chessboard = document.querySelector(".chessboard");
const oddrow = `<div class="square"></div>
<div class="square dark"></div>`.repeat(4);
const evenrow = `<div class="square dark"></div><div class="square"></div>`.repeat(4);

const completHTML = `${oddrow}${evenrow}`.repeat(4);

chessboard.innerHTML = completHTML;

