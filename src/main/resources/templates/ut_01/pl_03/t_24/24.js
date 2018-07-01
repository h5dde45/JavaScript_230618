function drawChess() {
    let mainBlock = document.querySelector(".main-block");
    let block;
    let flag = true;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            block = document.createElement("div");
            if (flag) {
                block.className = "block black";
            } else {
                block.className = "block white";
            }
            block.style.backgroundImage="url(24-hours.png)";
            block.style.backgroundPosition=" 20px 20px";

            mainBlock.appendChild(block);
            flag = !flag;
        }
        flag = !flag;
    }
}
drawChess();