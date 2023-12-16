const video = document.querySelector(".bg-video");
const btn = document.querySelector(".control-btn");
const switchBtn = document.querySelector(".switch");

window.addEventListener("DOMContentLoaded", () => {
    video.playbackRate = 0.4;
})

btn.addEventListener("click" ,() => {
    switchBtn.classList.toggle("pause");

    if(video.playbackRate > 0) {
        video.playbackRate = 0;
    } else {
        video.playbackRate = 0.4;
    }
})