document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

function analyzeData() {
    let textInput = document.getElementById("textInput").value;
    let imageInput = function analyzeContent() {
    let textInput = document.getElementById("textInput").value;
    let imageInput = document.getElementById("imageInput").files[0];
    let resultText = document.getElementById("resultText");
    let imagePreview = document.getElementById("imagePreview");

    // Show the image preview if an image is uploaded
    if (imageInput) {
        let reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.innerHTML = `<img src="${e.target.result}" width="200px">`;
        };
        reader.readAsDataURL(imageInput);
    } else {
        imagePreview.innerHTML = "";
    }

    if (textInput.trim() === "" && !imageInput) {
        resultText.innerText = "Please enter text or upload an image for analysis.";
        return;
    }

    // Send data to backend (to be implemented)
    fetch("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", {
        method: "POST",
        body: JSON.stringify({ text: textInput }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        resultText.innerText = "Result: " + data.result;
    })
    .catch(error => {
        resultText.innerText = "Error analyzing content.";
        console.error("Error:", error);
    });
}
];
    let resultDiv = document.getElementById("result");
    let loadingDiv = document.getElementById("loading");

    if (textInput.trim() === "" && !imageInput) {
        resultDiv.innerHTML = "❗ Please enter text or upload an image.";
        return;
    }

    resultDiv.innerHTML = "";
    loadingDiv.classList.remove("hidden");

    setTimeout(() => {
        loadingDiv.classList.add("hidden");

        let responses = [
            "✅ No cyberbullying detected. You're safe!",
            "⚠️ Some words may indicate bullying. Please be careful!",
            "❌ High risk of cyberbullying detected! Consider reporting."
        ];

        resultDiv.innerHTML = responses[Math.floor(Math.random() * responses.length)];
    }, 2000);
}
