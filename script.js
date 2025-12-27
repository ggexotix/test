document.addEventListener("DOMContentLoaded", () => {

    // ===== BIRTHDAY COUNTDOWN =====
    const birthday = new Date("2025-12-25T00:00:00").getTime();

    const countdownEl = document.getElementById("countdown");
    const messageEl = document.getElementById("message");
    const slideshowEl = document.querySelector(".slideshow");

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    let slideshowStarted = false;

    function updateCountdown() {
        const now = Date.now();
        const diff = birthday - now;

        if (diff <= 0) {
            countdownEl.classList.add("hidden");
            messageEl.classList.remove("hidden");
            slideshowEl.classList.remove("hidden");
            slideshowStarted = true;
            return;
        }

        daysEl.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        hoursEl.innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
        minutesEl.innerText = Math.floor((diff / (1000 * 60)) % 60);
        secondsEl.innerText = Math.floor((diff / 1000) % 60);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ===== PHOTO SLIDESHOW =====
    const photos = [
        { src: "photos/photo1.jpeg", text: "Our first beautiful memory ❤️" },
        { src: "photos/photo2.jpeg", text: "Every moment with you is special 💕" },
        { src: "photos/photo3.jpeg", text: "Forever us 💖" },
        { src: "photos/photo4.jpeg", text: "You are my everything 💖" },
        { src: "photos/photo5.jpg", text: "Our first beautiful memory ❤️" },
        { src: "photos/photo6.jpeg", text: "You and me forever 💕" },
        { src: "photos/photo7.jpeg", text: "Making memories with you 💖" },
        { src: "photos/photo8.jpeg", text: "My heart belongs to you 💞" }
    ];

    let photoIndex = 0;
    const slideImage = document.getElementById("slideImage");
    const caption = document.getElementById("caption");

    setInterval(() => {
        if (!slideshowStarted) return;
        photoIndex = (photoIndex + 1) % photos.length;
        slideImage.src = photos[photoIndex].src;
        caption.innerText = photos[photoIndex].text;
    }, 4000);

});

// ===== MUSIC CONTROL =====
function playMusic() {
    const music = document.getElementById("music");
    const btn = document.querySelector("button");

    music.volume = 0.7;

    if (music.paused) {
        music.play();
        btn.innerText = "⏸ Pause Music";
    } else {
        music.pause();
        btn.innerText = "▶️ Play Music";
    }
}

// ===== FLOATING HEARTS EFFECT =====
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = ["💖","💕","💗","💓","💞"][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (16 + Math.random() * 20) + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}, 300);