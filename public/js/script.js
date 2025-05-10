const images = [
  {
    src: "./images/upgrades/flux-cap.png",
    link: "#",
    alt: "Flux Capacitor image",
    text: "Flux Capacitor"
  },
  {
    src: "./images/upgrades/flame.jpg",
    link: "#",
    alt: "Flame decal image",
    text: "Flame Decals"
  },
  {
    src: "./images/upgrades/bumper_sticker.jpg",
    link: "#",
    alt: "Bumper sticker image",
    text: "Bumper Stickers"
  },
  {
    src: "./images/upgrades/hub-cap.jpg",
    link: "#",
    alt: "Hub caps image",
    text: "Hub Caps"
  }
];

const container = document.getElementById("card-container");

images.forEach(item => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("card-wrapper");

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.alt;

  const a = document.createElement("a");
  a.href = item.link;
  a.textContent = item.text;

  card.appendChild(img);
  wrapper.appendChild(card);
  wrapper.appendChild(a);
  container.appendChild(wrapper);
});