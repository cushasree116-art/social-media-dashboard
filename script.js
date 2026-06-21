// Digital Clock
function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();


// Chart.js
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Followers Growth',
            data: [120, 180, 220, 260, 320, 400, 480],
            borderColor: '#ff4d6d',
            backgroundColor: 'rgba(255,77,109,0.2)',
            borderWidth: 3,
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true
    }
});


// Popup Details
function openModal(platform) {

    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalTitle").innerHTML = platform;

    let details = "";

    if (platform === "Instagram") {
        details =
            "New Followers: 120<br>" +
            "Likes Gained: 350<br>" +
            "Recent Posts: 12<br>" +
            "Engagement Rate: 8%";
    }

    else if (platform === "Twitter") {
        details =
            "Tweets: 65<br>" +
            "Retweets: 120<br>" +
            "Likes: 450<br>" +
            "Trending: #Coding";
    }

    else if (platform === "YouTube") {
        details =
            "New Subscribers: 80<br>" +
            "Views: 12K<br>" +
            "Watch Time: 150 Hours<br>" +
            "Videos: 5";
    }

    else if (platform === "Facebook") {
        details =
            "Page Likes: 500<br>" +
            "Reach: 15K<br>" +
            "Comments: 240<br>" +
            "Shares: 100";
    }

    document.getElementById("modalText").innerHTML = details;
}


// Close Popup
function closeModal() {
    document.getElementById("modal").style.display = "none";
}


// Update Statistics Button
function updateStats() {

    let insta =
        parseInt(document.getElementById("instaFollowers").innerHTML);

    let twitter =
        parseInt(document.getElementById("twitterFollowers").innerHTML);

    let youtube =
        parseInt(document.getElementById("youtubeFollowers").innerHTML);

    let facebook =
        parseInt(document.getElementById("facebookFollowers").innerHTML);

    insta += Math.floor(Math.random() * 100);
    twitter += Math.floor(Math.random() * 80);
    youtube += Math.floor(Math.random() * 120);
    facebook += Math.floor(Math.random() * 90);

    document.getElementById("instaFollowers").innerHTML = insta;
    document.getElementById("twitterFollowers").innerHTML = twitter;
    document.getElementById("youtubeFollowers").innerHTML = youtube;
    document.getElementById("facebookFollowers").innerHTML = facebook;

    // Add activity
    const activity =
        document.getElementById("activityList");

    const li = document.createElement("li");

    li.innerHTML =
        "+" + Math.floor(Math.random() * 100) +
        " new followers added";

    activity.prepend(li);

    // Update chart
    myChart.data.datasets[0].data =
        myChart.data.datasets[0].data.map(
            value => value + Math.floor(Math.random() * 50)
        );

    myChart.update();
}


// Sidebar Navigation
function showSection(sectionId) {

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}


// Dark / Light Mode
function toggleTheme() {

    document.body.classList.toggle("light-mode");
}


// Default Section
window.onload = function () {

    document.getElementById("home").style.display = "grid";
    document.getElementById("charts").style.display = "block";
    document.getElementById("stats").style.display = "block";
    document.getElementById("activity").style.display = "block";
};


// Close popup when clicking outside
window.onclick = function(event) {

    const modal = document.getElementById("modal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
};