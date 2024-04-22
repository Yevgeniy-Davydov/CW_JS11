import { form } from "./holidaysTab.js";

export function showAlert(message, timeout = 2000) {
  const div = document.createElement("div");
  div.className = "alert";
  div.innerHTML = message;

  form.append(div);

  setTimeout(hideAlert, timeout);
}
export function hideAlert() {
  const alerBlock = document.querySelector(".alert");
  if (alerBlock) {
    alerBlock.remove();
  }
}
