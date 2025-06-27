const themeBtn = document.getElementById("theme-btn");
const siteTitle = document.getElementById("site-title");
const searchBtn = document.getElementById("search-btn");
const results = document.getElementById("results");
const trainListSection = document.getElementById("train-list");
const summarySection = document.getElementById("booking-summary");
const summaryContent = document.getElementById("summary-content");

const trains = [
  { name: "Express 101", time: "06:00 AM", price: 499 },
  { name: "SuperFast 202", time: "09:30 AM", price: 699 },
  { name: "Night Rider 303", time: "10:00 PM", price: 899 }
];

// 1. Toggle dark mode
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 2. Search trains and display results
searchBtn.addEventListener("click", () => {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("travel-date").value;
  const name = document.getElementById("passenger-name").value;

  if (!date || !name) {
    alert("Please enter name and date.");
    return;
  }

  // Change text dynamically
  siteTitle.textContent = `🚆 Trains from ${from} to ${to}`;

  results.innerHTML = "";
  trainListSection.classList.remove("hidden");

  trains.forEach((train, index) => {
    const div = document.createElement("div");
    div.className = "train";
    div.innerHTML = `
      <h3>${train.name}</h3>
      <p>Time: ${train.time}</p>
      <p>Price: ₹${train.price}</p>
      <button onclick="bookTrain(${index})">Book Now</button>
    `;
    results.appendChild(div);
  });
});

// 3. Book Train
function bookTrain(index) {
  const train = trains[index];
  const passenger = document.getElementById("passenger-name").value;
  const date = document.getElementById("travel-date").value;

  summarySection.classList.remove("hidden");

  // Add new HTML element dynamically
  summaryContent.innerHTML = `
    <p><strong>Passenger:</strong> ${passenger}</p>
    <p><strong>Train:</strong> ${train.name}</p>
    <p><strong>Time:</strong> ${train.time}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Total Fare:</strong> ₹${train.price}</p>
    <p style="color: green; font-weight: bold;">✅ Booking Confirmed!</p>
  `;
}
