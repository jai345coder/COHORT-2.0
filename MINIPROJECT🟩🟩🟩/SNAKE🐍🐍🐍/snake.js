// ===== Snake Game =====

// get grid element
let grid = document.querySelector('#grid');
let score  = document.querySelector('#score');
let ScorCount =0;
// size of each block
const BlockWidth = 30;
const BlockHeight = 30;

// grid row/column count
const MaxCol = Math.floor(grid.clientWidth / BlockWidth);
const MaxRow = Math.floor(grid.clientHeight / BlockHeight);

// to store all blocks by index
const blocks = [];

// initial snake
let snake = [
    { x: 1, y: 3 },
    { x: 1, y: 4 },
    { x: 1, y: 5 }
];

let direction = "right";

// create grid blocks
for (let row = 0; row < MaxRow; row++) {
    for (let col = 0; col < MaxCol; col++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.style.border = "1px solid black";
        blocks[`${row}-${col}`] = block;
        grid.appendChild(block);
    }
}

// random fruit (fixed dimension bug)
let fruit = {
    x: Math.floor(Math.random() * MaxRow),
    y: Math.floor(Math.random() * MaxCol)
};

// render snake on screen
function render() {
    snake.forEach(part => {
        blocks[`${part.x}-${part.y}`].classList.add("fill");
    });
}

// place fruit once (not every frame)
blocks[`${fruit.x}-${fruit.y}`].classList.add("fruit");


// ==== Main Game Loop ====
let startGame = setInterval(() => {

    let head;

    // movement logic
    if (direction == "left") head = { x: snake[0].x, y: snake[0].y - 1 };
    if (direction == "right") head = { x: snake[0].x, y: snake[0].y + 1 };
    if (direction == "up") head = { x: snake[0].x - 1, y: snake[0].y };
    if (direction == "down") head = { x: snake[0].x + 1, y: snake[0].y };

    // boundary check (fixed >= bug)
    if (head.x < 0 || head.x >= MaxRow || head.y < 0 || head.y >= MaxCol) {
        clearInterval(startGame);
        alert("Game Over");
        return;
    }

    // check fruit eating
    if (head.x === fruit.x && head.y === fruit.y) {
score.innerText = ++ScorCount;

        blocks[`${fruit.x}-${fruit.y}`].classList.remove("fruit");

        // generate new fruit (fixed logic)
        fruit = {
            x: Math.floor(Math.random() * MaxRow),
            y: Math.floor(Math.random() * MaxCol)
        };

        blocks[`${fruit.x}-${fruit.y}`].classList.add("fruit");

        snake.unshift(head); // extend snake
    } else {
        snake.unshift(head);
        snake.pop(); // remove tail (normal move)
    }

    // clear previous fill
    document.querySelectorAll(".fill").forEach(block => {
        block.classList.remove("fill");
    });

    render();
}, 200);


// ==== Controls ====
// prevent reverse direction (game-breaking bug fix)
document.addEventListener("keydown", e => {
    if (e.key == "ArrowLeft" && direction !== "right") direction = "left";
    if (e.key == "ArrowRight" && direction !== "left") direction = "right";
    if (e.key == "ArrowUp" && direction !== "down") direction = "up";
    if (e.key == "ArrowDown" && direction !== "up") direction = "down";
});






























































