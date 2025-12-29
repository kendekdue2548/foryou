// ฟังก์ชันสร้างหัวใจตก (❤) ให้ดูนุ่มนวลและโรแมนติก
function createFallingHeart() {
    const container = document.getElementById('heart-rain');
    if (!container) return; // ป้องกัน Error หากไม่มี Element นี้ในหน้าเว็บ

    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.innerHTML = '❤';
    
    // สุ่มตำแหน่งแนวราบ (0-100vw)
    heart.style.left = Math.random() * 100 + 'vw';
    
    // สุ่มขนาดให้เม็ดเล็กดูสวย (6px - 14px)
    const size = Math.random() * 8 + 6 + 'px';
    heart.style.fontSize = size;
    
    // สุ่มระยะเวลาการตก (4 - 7 วินาที)
    const duration = Math.random() * 3 + 4 + 's';
    heart.style.animationDuration = duration;
    
    // สุ่มความโปร่งใสให้ดูมีมิติ
    heart.style.opacity = Math.random() * 0.5 + 0.2;

    container.appendChild(heart);

    // ลบออกเมื่อตกจบเพื่อไม่ให้หนักเครื่อง
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// ฟังก์ชันสร้างจุดดาวระยิบระยับ (Stars) ที่พื้นหลัง
function createStars() {
    const starContainer = document.getElementById('stars');
    if (!starContainer) return;

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

// --- เรียกใช้งานฟังก์ชันที่เหลืออยู่ ---
createStars();
setInterval(createFallingHeart, 250); // สร้างหัวใจตกต่อเนื่องทุก 0.25 วินาที

// (ลบส่วน drawEnvelope และ window.onresize ออกเรียบร้อยแล้ว)
