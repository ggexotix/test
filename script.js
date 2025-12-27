document.addEventListener("DOMContentLoaded", () => {

    // 🧪 TEST MODE: 10 seconds
    const birthday = Date.now() + 10000;

    const countdownEl = document.getElementById("countdown");
    const messageEl = document.getElementById("message");
    const slideshowEl = document.querySelector(".slideshow");

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    let started = false;

    function updateCountdown() {
        const diff = birthday - Date.now();

        if (diff <= 0) {
            if (started) return;
            started = true;

            countdownEl.classList.add("hidden");
            messageEl.classList.remove("hidden");
            slideshowEl.classList.remove("hidden");

            messageEl.style.animation = "fadeIn 2s ease forwards";
            slideshowEl.style.animation = "fadeIn 2.5s ease forwards";
            return;
        }

        daysEl.innerText = Math.floor(diff / (1000*60*60*24));
        hoursEl.innerText = Math.floor((diff / (1000*60*60)) % 24);
        minutesEl.innerText = Math.floor((diff / (1000*60)) % 60);
        secondsEl.innerText = Math.floor((diff / 1000) % 60);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    const photos = [
        { src: "photos/photo1.jpeg", text: "Memory 1 ❤️" },
        { src: "photos/photo2.jpeg", text: "Memory 2 💕" },
        { src: "photos/photo3.jpeg", text: "Memory 3 💖" },
        { src: "photos/photo4.jpeg", text: "Memory 4 💞" },
        { src: "photos/photo5.jpeg", text: "Memory 5 ❤️" },
        { src: "photos/photo6.jpeg", text: "Memory 6 💕" },
        { src: "photos/photo7.jpeg", text: "Memory 7 💖" },
        { src: "photos/photo8.jpeg", text: "Memory 8 💞" }
    ];

    let i = 0;
    const img = document.getElementById("slideImage");
    const cap = document.getElementById("caption");

    setInterval(() => {
        if (!started) return;
        img.style.opacity = 0;

        setTimeout(() => {
            i = (i + 1) % photos.length;
            img.src = photos[i].src;
            cap.innerText = photos[i].text;
            img.style.opacity = 1;
        }, 600);
    }, 4000);
});

function playMusic() {
    const music = document.getElementById("music");
    const btn = document.querySelector("button");

    if (music.paused) {
        music.volume = 0;
        music.play();
        btn.innerText = "⏸ Pause Music";
        let v = 0;
        const f = setInterval(() => {
            v += 0.05;
            music.volume = v;
            if (v >= 0.7) clearInterval(f);
        }, 200);
    } else {
        music.pause();
        btn.innerText = "🎶 Play Our Song";
    }
}

setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = ["💖","💕","💗","💞"][Math.floor(Math.random()*4)];
    h.style.left = Math.random()*100 + "vw";
    h.style.fontSize = (18 + Math.random()*20) + "px";
    h.style.animationDuration = (6 + Math.random()*4) + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 9000);
}, 500);
