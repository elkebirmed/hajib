import { getParentByLevel } from "./utils";

function modifyDOM() {
  const buttonElements =
    document.querySelectorAll<HTMLElement>("div[role=button]");

  for (const buttonElement of buttonElements) {
    const text = buttonElement.innerText;

    if (text.includes("Follow")) {
      const container = getParentByLevel(buttonElement, 7);
      const content = getParentByLevel(buttonElement, 6);

      if (container && content) {
        container.classList.add("hajib-ig-rm-container");
        content.innerHTML = `🩹 ${chrome.i18n.getMessage("suggestionRemoved")}`;
      }
    }
  }
}

function observeDOM() {
  modifyDOM();

  const observer = new MutationObserver(modifyDOM);
  observer.observe(document, { childList: true, subtree: true });
}

observeDOM();
