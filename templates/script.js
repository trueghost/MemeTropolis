var countdown = 30; // Initial countdown value in seconds

function updateCountdown() {
    if (countdown > 0) {
        countdown--;
        document.getElementById("countdown").innerText = countdown;
        setTimeout(updateCountdown, 1000); // Update countdown every second (1000 milliseconds)
    } else {
        location.reload();
    }
}

updateCountdown(); // Start the countdown when the page loads

// Fetch meme data using AJAX
function fetchMeme() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://meme-api.com/gimme", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var memePic = response.preview[-1];
            var subreddit = response.subreddit;
            document.getElementById("meme-pic").src = memePic;
            document.getElementById("subreddit").innerText = subreddit;
        }
    };
    xhr.send();
}

fetchMeme(); // Fetch the meme data when the page loads