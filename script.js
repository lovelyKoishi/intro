console.log("woshihuanni");
const image = document.getElementById('miku');
let time = 0;

function updateImageSize() {
    const amplitude = 20; // 振幅，可以调整以控制变化幅度
    const period = 1000; // 周期，可以调整以控制变化速度
    const size = 200 + amplitude * Math.cos(2 * Math.PI * time / period);
    image.style.width = `${size}px`;
    time += 5;
    let rotationAngle = (time * 0.05) % 360;
    image.style.transform = `rotate(${rotationAngle}deg)`;
    requestAnimationFrame(updateImageSize);
}

updateImageSize();