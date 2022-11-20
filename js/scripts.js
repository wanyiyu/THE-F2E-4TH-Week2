const indexbtn = document.querySelector("#indexbtn");
const indexbtn2 = document.querySelector("#indexbtn2");
const mainbtn = document.querySelector("#mainbtn");
const mainbtn2 = document.querySelector("#mainbtn2");
// const historybtn = document.querySelector("#historybtn");

const indexSection = document.getElementById("index-section");
const mainSection = document.getElementById("main-section");
const historySection = document.getElementById("history-section");

indexbtn.addEventListener("click", () => {
    // indexSection.style.display = "block";
    // mainSection.style.display = "none";
    // historySection.style.display = "none";
    parent.location.reload();
});
indexbtn2.addEventListener("click", () => {
    // indexSection.style.display = "block";
    // mainSection.style.display = "none";
    // historySection.style.display = "none";
    parent.location.reload();
});
mainbtn.addEventListener("click", () => {
    indexSection.style.display = "none";
    mainSection.style.display = "block";
    historySection.style.display = "none";
});
mainbtn2.addEventListener("click", () => {
    indexSection.style.display = "none";
    mainSection.style.display = "block";
    historySection.style.display = "none";
});
// historybtn.addEventListener("click", () => {
//     indexSection.style.display = "none";
//     mainSection.style.display = "none";
//     historySection.style.display = "block";
// });

const tosign = document.querySelector('#toSign');
const toputsign = document.querySelector('#toPutSign');
const signSelect = document.querySelector('#signSelectBtn');
const part1 = document.getElementById("part-1");
const part2 = document.getElementById("part-2");
const downloadpdf = document.getElementById("download");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");


tosign.addEventListener("click", () => {
    part1.style.display = "none";
    part2.style.display = "block";
    dot1.style.backgroundColor = "var(--bs-body-bg-light)";
    dot1.style.color = "var(--bs-primary)";
    dot1.innerHTML = "V";
    dot2.style.backgroundColor = "var(--bs-primary)";
    dot2.style.color = "var(--bs-secondary)";
});

toputsign.addEventListener("click", () => {
    part1.style.display = "block";
    part2.style.display = "none";
    tosign.style.display = "none";
    downloadpdf.style.display = "block";
    dot2.style.backgroundColor = "var(--bs-body-bg-light)";
    dot2.style.color = "var(--bs-primary)";
    dot2.innerHTML = "V";
    dot3.style.backgroundColor = "var(--bs-primary)";
    dot3.style.color = "var(--bs-secondary)";
});
signSelect.addEventListener("click", () => {
    part1.style.display = "block";
    part2.style.display = "none";
    tosign.style.display = "none";
    downloadpdf.style.display = "block";
    dot2.style.backgroundColor = "var(--bs-body-bg-light)";
    dot2.style.color = "var(--bs-primary)";
    dot2.innerHTML = "V";
    dot3.style.backgroundColor = "var(--bs-primary)";
    dot3.style.color = "var(--bs-secondary)";
});