// DOM elements acces 
const heartCountEl = document.getElementById("heart-count");
const pointsCountEl = document.getElementById("points-count");
const copyCountEl = document.getElementById("copy-count");
const callHistoryEl = document.getElementById("call-history");
const clearHistoryBtn = document.getElementById("clear-history");

// Initial values acces
let hearts = parseInt(heartCountEl.textContent);
let points = parseInt(pointsCountEl.textContent);
let copies = parseInt(copyCountEl.textContent);

// All cards gula ekhane
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const copyBtn = card.querySelector(".copy-btn");
  const callBtn = card.querySelector(".call-btn");
  const heartBtn = card.querySelector(".heart-btn");
  const phoneNumberEl = card.querySelector(".phone-number");
  const phoneNumber = phoneNumberEl.textContent;

 // Button:Copy 
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(phoneNumber).then(() => {
    copies += 1;
    copyCountEl.textContent = copies;

    // Div:Notification 
    const toast = document.createElement("div");
    toast.textContent = "Copied!";
    toast.className = "absolute bg-green-500 text-white px-2 py-1 rounded shadow text-sm";
    
    // Button 
    copyBtn.parentElement.style.position = "relative";
    
    // Button pop up 
    toast.style.bottom = "100%"; 
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.marginBottom = "4px";

    copyBtn.parentElement.appendChild(toast);

    // 1.5 sec por remove
    setTimeout(() => {
      toast.remove();
    }, 1500);
  });
});

  // Button:Call
  callBtn.addEventListener("click", () => {
    if (points < 20) {
      alert("Not enough points to make a call!");
      return;
    }

    const confirmCall = confirm(`Emergency-Service.netlify.app.says 
Do you want to call ${phoneNumber}?`);
    if (confirmCall) {
      points -= 20;
      pointsCountEl.textContent = points;
      

      // Add to call history as a card
      const time = new Date().toLocaleTimeString();
      const historyCard = document.createElement("div");
      historyCard.className = "bg-white shadow-lg rounded-xl p-3 mb-2";
     historyCard.innerHTML = `
  <p class="font-semibold text-sm mb-1">${card.querySelector("h2").textContent}</p>
  <div class="flex justify-between items-center text-sm font-medium">
    <span>${phoneNumber}</span>
    <span>${time}</span>
  </div>
`;
      callHistoryEl.appendChild(historyCard);
    }
  });


  // Heart button
  heartBtn.addEventListener("click", () => {
    hearts += 1;
    heartCountEl.textContent = hearts;
  });
});


// Clear history
clearHistoryBtn.addEventListener("click", () => {
  callHistoryEl.innerHTML = "";
});
