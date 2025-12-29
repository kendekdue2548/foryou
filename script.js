function createHeartFrame() {
    const container = document.getElementById('heart-frame-container');
    container.innerHTML = ''; // ล้างค่าเก่าก่อนสร้างใหม่
    
    const totalHearts = 50; 
    const screenWidth = window.innerWidth / 2;
    const screenHeight = window.innerHeight / 2;
    
    // ปรับ scale เป็น 28 เพื่อขยายกรอบให้กว้างพ้นตัวหนังสือ
    const scale = 28; 

    for (let i = 0; i < totalHearts; i++) {
        const t = (i / totalHearts) * Math.PI * 2;
        
        // สูตร Heart Curve
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

        const heart = document.createElement('div');
        heart.className = 'frame-heart';
        heart.innerHTML = '♡';
        
        // ขยับแกน Y ลงมานิดหน่อย (+20) เพื่อให้ข้อความอยู่กึ่งกลางรูปหัวใจพอดี
        heart.style.left = (screenWidth + x * scale) + 'px';
        heart.style.top = (screenHeight + y * scale + 20) + 'px';
        
        container.appendChild(heart);
    }
}

function createFallingHeart() {
    const container = document.getElementById('heart-rain');
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 8 + 6 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 5 + 's';
    heart.style.opacity = Math.random() * 0.4 + 0.2;
    container.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 8000);
}

// เริ่มการทำงาน
createHeartFrame();
setInterval(createFallingHeart, 250);

// ปรับขนาดตามหน้าจอ
window.onresize = () => {
    createHeartFrame();
};
