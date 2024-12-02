const potatoURL = chrome.runtime.getURL("src/potato.png");

document.querySelectorAll("img").forEach((img) => {
  img.src = potatoURL;
  img.srcset = potatoURL;
});
