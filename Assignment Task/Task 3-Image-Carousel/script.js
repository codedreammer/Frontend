let images = [
    "Image/img-1.jpg", "Image/img-2.jpg", "Image/img-3.jpg", "Image/img-4.jpg"
];

let index = 0;
let slide = document.getElementById("slide");
let dots = document.querySelectorAll(".dot");
slide.src = images[index];

function show() {
    slide.src = images[index];
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

document.getElementById("nextBtn").onclick = () => {
    index = (index + 1) % images.length;
    show();
};

document.getElementById("prevBtn").onclick = () => {
    index = (index - 1 + images.length) % images.length;
    show();
};

let auto = setInterval(() => {
    index = (index + 1) % images.length;
    show();
}, 3000);

// Dot indicators
dots.forEach((dot, i) => {
    dot.onclick = () => {
        index = i;
        show();
    };
});

// BONUS: Pause on hover
slide.onmouseover = () => clearInterval(auto);
slide.onmouseout = () => {
    clearInterval(auto);
    auto = setInterval(() => {
        index = (index + 1) % images.length;
        show();
    }, 3000);
};
