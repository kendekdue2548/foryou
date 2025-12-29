function drawEnvelope() {
    const container = document.getElementById('envelope-container');
    container.innerHTML = '';
    const screenWidth = window.innerWidth / 2;
    const screenHeight = window.innerHeight / 2;
    
    // ปรับขนาดซองให้พอดีกับหน้าจอ
    const width = window.innerWidth < 600 ? 300 : 450;
    const height = 280;
    const step = 22; 

    function addDot(x, y) {
        const dot = document.createElement('div');
        dot.className = 'envelope-dot';
        dot.innerHTML = '♡';
        dot.style.left = (screenWidth + x) + 'px';
        dot.style.top = (screenHeight + y + 20) + 'px';
        container.appendChild(dot);
    }

    // วาดขอบสี่เหลี่ยม
    for (let x = -width/2; x <= width/2; x += step) {
        addDot(x, -height/2);
        addDot(x, height/2);
    }
    for (let y = -height/2; y <= height/2; y += step) {
        addDot(-width/2, y);
        addDot(width/2, y);
    }

    // วาดฝาซองจดหมาย
    for (let x = -width/2; x <= width/2; x += step) {
        let y = (Math.abs(x) / (width/2)) * (height/3) - (height/2);
        addDot(x, y);
    }
}

function createFallingHeart() {
    const container = document.getElementById('heart-rain');
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 10 + 5 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    heart.style.opacity = Math.random() * 0.6 + 0.2;
    container.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 7000);
}

// สร้างจุดดาวระยิบระยับที่พื้นหลัง
function createStars() {
    const starContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = '#fff';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.opacity = Math.random();
        star.style.borderRadius = '50%';
        starContainer.appendChild(star);
    }
}

// เรียกใช้ทั้งหมด
drawEnvelope();
createStars();
setInterval(createFallingHeart, 200);

window.onresize = drawEnvelope;
