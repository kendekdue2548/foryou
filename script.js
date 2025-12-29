function createHeartFrame() {
    const container = document.getElementById('heart-frame-container');
    const totalHearts = 60; // เพิ่มจำนวนเพื่อให้จุดเรียงต่อกันสวยขึ้น
    const screenWidth = window.innerWidth / 2;
    const screenHeight = window.innerHeight / 2;
    
    // ขยายค่า scale จาก 15 เป็น 22 เพื่อให้กรอบขยับห่างจากข้อความ
    const scale = 22; 

    for (let i = 0; i < totalHearts; i++) {
        const t = (i / totalHearts) * Math.PI * 2;
        
        // สูตร Heart Curve
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

        const heart = document.createElement('div');
        heart.className = 'frame-heart';
        heart.innerHTML = '♡';
        
        heart.style.left = (screenWidth + x * scale) + 'px';
        heart.style.top = (screenHeight + y * scale) + 'px';
        
        container.appendChild(heart);
    }
}

function createFallingHeart() {
    const container = document.getElementById('heart-rain');
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 8 + 6 + 'px'; // เล็กจิ๋วตามสั่ง
    heart.style.animationDuration = Math.random() * 3 + 5 + 's';
    heart.style.opacity = Math.random() * 0.4 + 0.2;
    container.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 8000);
}

// เริ่มทำงาน
createHeartFrame();
setInterval(createFallingHeart, 250);

// ปรับตำแหน่งกรอบอัตโนมัติเมื่อย่อหน้าจอ
window.onresize = () => {
    document.getElementById('heart-frame-container').innerHTML = '';
    createHeartFrame();
};
