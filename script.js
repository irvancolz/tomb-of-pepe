const toggle = document.getElementById("toggle");
const popup = document.querySelector(".topnav_mobile_list");

toggle.addEventListener("click", () => {
  const isOpen = popup.getAttribute("data-open") == "true";
  if (!isOpen) {
    popup.setAttribute("data-open", true);
    return;
  }
  popup.setAttribute("data-open", false);
});
