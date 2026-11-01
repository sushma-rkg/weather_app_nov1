const UNAVAILABLE = "The weather service is unavailable right now. Please try again later.";

const form = document.querySelector(".pill");
const input = form.querySelector("input");
const output = document.querySelector(".output");

let latestSearch = 0;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function tile(label, value, className) {
  const node = el("div", className ? "tile " + className : "tile");
  node.append(el("small", "", label), value);
  return node;
}

// Turns "2026-11-01 14:30" into a date and a time like "2:30 pm"
function formatTime(text) {
  const m = /(\d+)-(\d+)-(\d+) (\d+):(\d+)/.exec(text);
  if (!m) return { date: text, time: text };
  const [, year, month, day, hour, minute] = m.map(Number);
  const date = new Date(year, month - 1, day).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const time = (hour % 12 || 12) + ":" + String(minute).padStart(2, "0") + (hour < 12 ? " am" : " pm");
  return { date, time };
}

function showMessage(text) {
  output.replaceChildren(el("p", "message", text));
}

function showWeather(w) {
  const when = formatTime(w.localTime);

  const place = el("div", "place");
  place.append(el("h2", "", w.city + ", " + w.country), el("p", "", when.date + ", " + when.time));

  const icon = el("img");
  icon.src = w.icon;
  icon.alt = w.description;
  const sky = el("div", "tile sky");
  sky.append(icon, w.description);

  const tiles = el("div", "tiles");
  tiles.append(
    tile("Temperature", Math.round(w.temperatureC) + "°C", "temp"),
    sky,
    tile("Feels like", Math.round(w.feelsLikeC) + "°C"),
    tile("Humidity", w.humidity + "%"),
    tile("Wind", Math.round(w.windKph) + " km/h " + w.windDirection),
    tile("Local time", when.time)
  );

  output.replaceChildren(place, tiles);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const thisSearch = ++latestSearch;

  try {
    const response = await fetch("/api/weather?city=" + encodeURIComponent(input.value.trim()));
    const data = await response.json();
    if (thisSearch !== latestSearch) return;
    if (response.ok) {
      showWeather(data);
    } else {
      showMessage(data.message || UNAVAILABLE);
    }
  } catch (error) {
    if (thisSearch !== latestSearch) return;
    showMessage(UNAVAILABLE);
  }
});
