document.addEventListener("DOMContentLoaded", () => {

    /* 🎂 BIRTHDAY (27 FEB 2026, 12:00 AM IST) */
    const birthday = new Date("2026-02-27T00:00+05:30").getTime();

    const countdown = document.getElementById("countdown");
    const message = document.getElementById("message");
    const slideshow = document.querySelector(".slideshow");
    const letterBtn = document.getElementById("letterBtn");

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    const music = document.getElementById("music");
    const musicBtn = document.getElementById("musicBtn");

    let started = false;

    /* ⏱ COUNTDOWN */
    function updateCountdown() {
        const diff = birthday - Date.now();

        if (diff <= 0) {
            if (started) return;
            started = true;

            countdown.classList.add("hidden");
            message.classList.remove("hidden");
            slideshow.classList.remove("hidden");
            letterBtn.classList.remove("hidden");

            return;
        }

        days.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        hours.innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
        minutes.innerText = Math.floor((diff / (1000 * 60)) % 60);
        seconds.innerText = Math.floor((diff / 1000) % 60);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    /* 📸 SLIDESHOW */
    const photos = [
        { src: "photos/photo1.jpeg", text: "Memory 1 ❤️" },
        { src: "photos/photo2.jpeg", text: "Memory 2 💕" },
        { src: "photos/photo3.jpeg", text: "Memory 3 💖" },
        { src: "photos/photo4.jpeg", text: "Memory 4 💞" },
        { src: "photos/photo5.jpeg", text: "Memory 5 ❤️" },
        { src: "photos/photo6.jpeg", text: "Memory 6 💕" },
        { src: "photos/photo7.jpeg", text: "Memory 7 💖" },
        { src: "photos/photo8.jpeg", text: "Memory 8 💞" },
        { src: "photos/photo9.jpeg", text: "Memory 9 ❤️" },
        { src: "photos/photo10.jpeg", text: "Memory 10 💕" }
    ];

    let index = 0;
    const img = document.getElementById("slideImage");
    const cap = document.getElementById("caption");

    setInterval(() => {
        if (!started) return;

        img.style.opacity = 0;

        setTimeout(() => {
            index = (index + 1) % photos.length;
            img.src = photos[index].src;
            cap.innerText = photos[index].text;
            img.style.opacity = 1;
        }, 600);

    }, 4000);
});

/* 💌 LETTER */
function openLetter() {
    const letter = document.getElementById("letter");
    const btn = document.getElementById("letterBtn");

    letter.classList.remove("hidden");
    btn.classList.add("hidden");

    setTimeout(() => {
        letter.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
}

/* 🎶 MUSIC (FIXED & SAFE) */
function playMusic() {
    const music = document.getElementById("music");
    const btn = document.getElementById("musicBtn");

    if (music.paused) {
        music.play()
            .then(() => {
                btn.innerText = "💖 Pause Song";
            })
            .catch(err => {
                console.log("Music play blocked:", err);
            });
    } else {
        music.pause();
        btn.innerText = "🎶 Play Our Song";
    }
}

/* 💖 FLOATING HEARTS */
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = ["💖","💕","💗","💞"][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";
    heart.style.animationDuration = (6 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}, 500);


