const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
    navLinks.classList.remove(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  } else {
    navBar.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );

    navLinks.classList.add(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  }
});

// light and dark mode

if (
  localStorage.theme === "dark" ||
  ("theme" in localStorage &&
    window.matchMedia("(prefers-color-scheme:dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
function toggleTheme() {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Submit the form data asynchronously
    let form = event.target;
    let formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        // Check if the response is successful
        if (response.ok) {
          // Clear input fields
          form.reset();
          // Show a success message
          showMessage("Message sent successfully!");
        } else {
          // Show an error message
          showMessage("Error: Message not sent. Please try again later.");
        }
      })
      .catch((error) => {
        // Show an error message if there is an error with the request
        showMessage("Error: " + error.message);
      });
  });

// Function to display a message
function showMessage(message) {
  // Display the message using alert or any other method you prefer
  alert(message);
}
