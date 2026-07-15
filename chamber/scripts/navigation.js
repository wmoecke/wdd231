const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-navigation");
const themeButton = document.querySelector("#theme-button");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", `${isOpen}`);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
