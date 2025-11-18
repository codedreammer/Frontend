let textArea = document.getElementById("textArea");
let charCount = document.getElementById("charCount");
let max = 100;

textArea.addEventListener("input", () => {
    let left = max - textArea.value.length;

    charCount.textContent = `Characters left: ${left}`;

    if (left <= 0) charCount.style.color = "red";
    else if (left <= 20) charCount.style.color = "red";
    else if (left <= 50) charCount.style.color = "orange";
    else charCount.style.color = "green";
});
