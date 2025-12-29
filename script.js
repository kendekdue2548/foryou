function createHeartRain() {
    const container = document.getElementById('heart-container');
    const heart = document.createElement('div');
    
    heart.className = 'falling-heart';
    heart.innerHTML = '❤';
    
    // 1. สุ่มตำแหน่งแนวนอน (0 - 100vw)
    heart.style.left = Math.random() * 100 + 'vw';
    
    // 2. สุ่มขนาดให้เล็ก (8px - 16px)
    const size = Math.random() * 8 + 8 + 'px';
    heart.style.fontSize = size;
    
    // 3. สุ่มความเร็วในการตก (4 - 8 วินาที)
    const duration = Math.random() * 4 + 4 + 's';
    heart.style.animationDuration = duration;
    
    // 4. สุ่มค่าความโปร่งใส (0.3 - 0.8)
    heart.style.opacity = Math.random() * 0.5 + 0.3;

    container.appendChild(heart);

    // ลบ Element ออกหลังจากตกเสร็จเพื่อประหยัด RAM
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// สร้างหัวใจใหม่ทุกๆ 150 มิลลิวินาที
setInterval(createHeartRain, 150);
