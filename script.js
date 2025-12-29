function drawEnvelope() {
    const container = document.getElementById('envelope-container');
    container.innerHTML = '';
    const screenWidth = window.innerWidth / 2;
    const screenHeight = window.innerHeight / 2;
    
    const width = 400;  // ความกว้างซอง
    const height = 250; // ความสูงซอง
    const step = 25;    // ระยะห่างระหว่างตัว ♡

    function addDot(x, y) {
        const dot = document.createElement('div');
        dot.className = 'envelope-dot';
        dot.innerHTML = '♡';
        dot.style.left = (screenWidth + x) + 'px';
        dot.style.top = (screenHeight + y) + 'px';
        container.appendChild(dot);
    }

    // วาดสี่เหลี่ยมรอบนอก
    for (let x = -width/2; x <= width/2; x += step) {
        addDot(x, -height/2); // บน
        addDot(x, height/2);  // ล่าง
    }
    for (let y = -height/2; y <= height/2; y += step) {
        addDot(-width/2, y); // ซ้าย
        addDot(width/2, y);  // ขวา
    }

    // วาดเส้นทแยงมุมเป็นฝาซองจดหมาย (รูปตัว V)
    for (let x = -width/2; x <= width/2; x += step) {
        // เส้นเฉียงลงมาบรรจบกันตรงกลาง
        let y = (Math.abs(x) / (width/2)) * (height/2) - (height/2);
        addDot(x, y);
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

// เริ่มทำงาน
drawEnvelope();
setInterval(createFallingHeart, 250);

// ปรับขนาดตามหน้าจอ
window.onresize = drawEnvelope;
