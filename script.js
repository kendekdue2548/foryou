function createHeartFrame() {
    const container = document.getElementById('heart-frame-container');
    container.innerHTML = ''; 
    
    // 1. ลดจำนวนหัวใจลงเหลือ 36 เพื่อไม่ให้เบียดกันจนซ้อนทับ
    const totalHearts = 36; 
    const screenWidth = window.innerWidth / 2;
    const screenHeight = window.innerHeight / 2;
    
    // 2. ปรับขนาด scale เป็น 32 เพื่อให้กรอบใหญ่พ้นตัวหนังสือ
    const scale = 32; 

    for (let i = 0; i < totalHearts; i++) {
        const t = (i / totalHearts) * Math.PI * 2;
        
        // สูตร Heart Curve (เนียนกว่าเดิม)
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

        const heart = document.createElement('div');
        heart.className = 'frame-heart';
        heart.innerHTML = '♡';
        
        // 3. ปรับตำแหน่งแกน Y ให้สมดุล (+30) เพื่อไม่ให้ส่วนโค้งบนทับ "Happy New Year"
        heart.style.left = (screenWidth + x * scale) + 'px';
        heart.style.top = (screenHeight + y * scale + 30) + 'px';
        
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
