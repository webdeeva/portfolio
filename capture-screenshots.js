// capture-screenshots.js
var page = require("webpage").create();

page.viewportSize = { width: 1440, height: 900 };

var targets = [
  // syrn.ai
  { url: "https://syrn.ai/", out: "public/screenshots/syrn-ai.png" },

  // sov.social
  { url: "https://sov.social/", out: "public/screenshots/sov-social.png" },

  // Zyn Virtual
  { url: "https://zynvirtual.vercel.app/", out: "public/screenshots/zynvirtual.png" },

  // Zyn Spaces
  { url: "https://zynspaces.vercel.app/", out: "public/screenshots/zynspaces.png" },

  // The Hadal Store
  { url: "https://lighthearted-figolla-69cd34.netlify.app/", out: "public/screenshots/hadal-store.png" },

  // BSB Corporate Cleaning
  { url: "https://bsbcorporatecleaning.com/", out: "public/screenshots/bsb-corporate-cleaning.png" },

  // Aurazen
  { url: "https://aurazen.co/", out: "public/screenshots/aurazen.png" },

  // I Ching AI
  { url: "https://ichingai.app/", out: "public/screenshots/iching-ai.png" },

  // Aquarius Maximus
  { url: "https://www.aquariusmaximus.com/", out: "public/screenshots/aquariusmaximus.png" },

  // Symphonious Liger
  { url: "https://symphonious-liger-c12f0c.netlify.app/", out: "public/screenshots/symphonious-liger.png" },

  // Emotion Island
  { url: "https://emotionisland.netlify.app/", out: "public/screenshots/emotion-island.png" }
];

function capture(index) {
  if (index >= targets.length) {
    console.log("All screenshots captured.");
    phantom.exit();
    return;
  }

  var target = targets[index];
  console.log("Opening " + target.url);

  page.open(target.url, function (status) {
    if (status !== "success") {
      console.log("Unable to load " + target.url);
      capture(index + 1);
    } else {
      // Wait for the page to fully render
      window.setTimeout(function () {
        page.render(target.out);
        console.log("Saved " + target.out);
        capture(index + 1);
      }, 10000); // increased timeout for slow-loading sites
    }
  });
}

capture(0);
