const signcanvas = document.querySelector("#signcanvas");
const ctx = signcanvas.getContext("2d");
const clearBtn = document.querySelector(".clear");
const saveBtn = document.querySelector(".save");

// 設定線條的相關數值
ctx.lineWidth = 1;
ctx.lineCap = "round";

// 設置狀態來確認滑鼠 / 手指是否按下或在畫布範圍中
let isPainting = false;

// 取得滑鼠 / 手指在畫布上的位置
function getPaintPosition(e) {
    const canvasSize = signcanvas.getBoundingClientRect();

    if (e.type === "mousemove") {
        return {
            x: e.clientX - canvasSize.left,
            y: e.clientY - canvasSize.top,
        };
    } else {
        return {
            x: e.touches[0].clientX - canvasSize.left,
            y: e.touches[0].clientY - canvasSize.top,
        };
    }
}

// 開始繪圖時，將狀態開啟
function startPosition(e) {
    e.preventDefault();
    isPainting = true;
    document.querySelector('#toPutSign').disabled = false;
}

// 結束繪圖時，將狀態關閉，並產生新路徑
function finishedPosition() {
    isPainting = false;
    ctx.beginPath();

}

// 繪圖過程
function draw(e) {
    // 滑鼠移動過程中，若非繪圖狀態，則跳出
    if (!isPainting) return;

    // 取得滑鼠 / 手指在畫布上的 x, y 軸位置位置
    const paintPosition = getPaintPosition(e);

    // 移動滑鼠位置並產生圖案
    ctx.lineTo(paintPosition.x, paintPosition.y);
    // ctx.scale(1, 1);
    ctx.stroke();

}

// 重新設定畫布
function reset() {
    ctx.clearRect(0, 0, signcanvas.width, signcanvas.height);
}

// event listener 電腦板
signcanvas.addEventListener("mousedown", startPosition);
signcanvas.addEventListener("mouseup", finishedPosition);
signcanvas.addEventListener("mouseleave", finishedPosition);
signcanvas.addEventListener("mousemove", draw);

// event listener 手機板
signcanvas.addEventListener("touchstart", startPosition);
signcanvas.addEventListener("touchend", finishedPosition);
signcanvas.addEventListener("touchcancel", finishedPosition);
signcanvas.addEventListener("touchmove", draw);

clearBtn.addEventListener("click", reset);

//儲存簽名
const showImage = document.querySelector(".mysign");
function saveImage() {
    // 圖片儲存的類型選擇 png ，並將值放入 img 的 src
    const newImg = signcanvas.toDataURL("image/png");
    showImage.src = newImg;
    localStorage.setItem('img', newImg)
}
saveBtn.addEventListener("click", saveImage);

//簽完，下一步
const canvas_toputsign = document.querySelector('#toPutSign');
function saveNewImage() {
    const newImg = signcanvas.toDataURL("image/png");
    localStorage.setItem('imgNew', newImg)
}
canvas_toputsign.addEventListener("click", saveNewImage);