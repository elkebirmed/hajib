import { getParentByLevel } from "./utils";

function modifyDOM() {
  const spanElements = document.querySelectorAll<HTMLSpanElement>("span");

  for (const spanElement of spanElements) {
    const text = spanElement.innerText;

    if (text.includes("اقتراحات قد تعجبك")) {
      const container = getParentByLevel(spanElement, 7);
      const content = getParentByLevel(spanElement, 6);

      if (container && content) {
        container.classList.add("hajib-fb-rm-container");
        content.innerHTML = `🩹 ${chrome.i18n.getMessage("suggestionRemoved")}`;
      }
    }

    if (text.includes("مُموَّل")) {
      const container = getParentByLevel(spanElement, 7);
      const content = getParentByLevel(spanElement, 6);

      if (container && content) {
        container.classList.add("hajib-fb-rm-container");
        content.innerHTML = `💰 ${chrome.i18n.getMessage("adRemoved")}`;
      }
    }

    if (text.includes("ريلز ومقاطع الفيديو القصيرة")) {
      const container = getParentByLevel(spanElement, 9);
      const content = getParentByLevel(spanElement, 8);

      if (container && content) {
        container.classList.add("hajib-fb-rm-container");
        content.innerHTML = `🕶 ${chrome.i18n.getMessage("reelRemoved")}`;
      }
    }
  }

  const videoElements = document.querySelectorAll<HTMLVideoElement>("video");

  for (const videoElement of videoElements) {
    videoElement.classList.add("hajib-fb-video-container");

    videoElement.addEventListener("playing", () => {
      videoElement.classList.add("hajib-fb-video-container_playing");
    });

    videoElement.addEventListener("pause", () => {
      videoElement.classList.remove("hajib-fb-video-container_playing");
    });
  }
}

function observeDOM() {
  modifyDOM();

  const observer = new MutationObserver(modifyDOM);
  observer.observe(document, { childList: true, subtree: true });
}

observeDOM();
