function checkPassword() {
    let p = document.getElementById("password").value;

    if (p === "pandu" || p === "sahasra"|| p == "prnds") {
        document.getElementById("success").style.display = "block";
        setTimeout(() => {
            window.location.href = "surprise.html";
        }, 1500);
    } else {
        document.getElementById("error").style.display = "block";
    }
}

/* HEARTS */
const container = document.querySelector(".hearts");
if (container) {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        const emojis = ["💖","💗","✨","💕"];
        heart.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

        heart.style.left = Math.random()*100 + "vw";
        heart.style.fontSize = (Math.random()*20+10)+"px";

        container.appendChild(heart);

        setTimeout(()=>heart.remove(),5000);
    },300);
}

/* GIFTS */
function openGift(el) {
    el.classList.add("open");
    document.getElementById("music").play();
}

/* TYPING */
const text = "You made my college life beautiful and unforgettable ❤️.I will cherish your friendship for lifetime... I LOVE YOU😘🫂";
let i = 0;
function type() {
    if (document.getElementById("typingText") && i < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(i);
        i++;
        setTimeout(type,50);
    }
}
type();