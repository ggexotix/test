document.addEventListener("DOMContentLoaded", () => {

    // 🧪 TEST MODE (10 seconds)
    const birthday = Date.now() + 10000;

    const countdown = document.getElementById("countdown");
    const message = document.getElementById("message");
    const slideshow = document.querySelector(".slideshow");
    const letterBtn = document.getElementById("letterBtn");

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    let started = false;

    function update() {
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

        days.innerText = Math.floor(diff / (1000*60*60*24));
        hours.innerText = Math.floor((diff / (1000*60*60)) % 24);
        minutes.innerText = Math.floor((diff / (1000*60)) % 60);
        seconds.innerText = Math.floor((diff / 1000) % 60);
    }

    update();
    setInterval(update, 1000);

    // SLIDESHOW
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

/* LETTER */
function openLetter() {
    document.getElementById("letter").classList.remove("hidden");
    document.getElementById("letterBtn").classList.add("hidden");
}

/* MUSIC */
function playMusic() {
    const m = document.getElementById("music");
    m.paused ? m.play() : m.pause();
}

/* HEARTS */
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
