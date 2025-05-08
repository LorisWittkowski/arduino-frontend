const API_URL = "https://arduino-backend.onrender.com/distance"; // <– DEINE URL

async function fetchDistance() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    document.getElementById("dist").textContent = data.distance ?? '...';
  } catch (err) {
    document.getElementById("dist").textContent = 'Fehler';
  }
}

setInterval(fetchDistance, 1000);
