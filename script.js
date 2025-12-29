// 1. สร้างกรอบรูปหัวใจจากตัวอักษร ♡
function createHeartFrame() {
    const container = document.getElementById('heart-frame-container');
    const totalHearts = 40; // จำนวนดวงหัวใจที่นำมาเรียง
    const screenWidth = window.innerWidth / 2;
    const screenHeight = window.innerHeight / 2;
    const scale = 15; // ขนาดของกรอบหัวใจ

    for (let i = 0; i < totalHearts; i++) {
        const t = (i / totalHearts) * Math.PI * 2;
        
        // สูตรคำนวณตำแหน่งรูปหัวใจ (Heart Curve Equation)
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

        const heart = document.createElement('div');
        heart.className = 'frame-heart';
        heart.innerHTML = '♡';
        
        // วางตำแหน่งกึ่งกลางหน้าจอ
        heart.style.left = (screenWidth + x * scale) + 'px';
        heart.style.top = (screenHeight + y * scale) + 'px';
        
        container.appendChild(heart);
    }
}

// 2. สร้างหัวใจสีขาวตกลงมา (แบบเดิม)
function createFallingHeart() {
    const container = document.getElementById('heart-rain');
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 8 + 8 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    container.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 7000);
}

// เรียกใช้งาน
createHeartFrame();
setInterval(createFallingHeart, 200);

// ปรับขนาดกรอบเมื่อเปลี่ยนขนาดหน้าจอ
window.onresize = () => {
    document.getElementById('heart-frame-container').innerHTML = '';
    createHeartFrame();
};
