// aboutMACH.js
document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
     Section: Responsive Navbar Toggle
  =============================== */
  const navToggle = document.querySelector(".nav-toggle");
  // Use the .nav-list element for the mobile menu
  const mobileNav = document.querySelector(".nav-list");

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", (e) => {
      // Prevent the event from bubbling up so it doesn't immediately close the menu
      e.stopPropagation();
      mobileNav.classList.toggle("visible");
    });

    // Close the mobile menu when clicking outside of it
    document.addEventListener("click", (event) => {
      const isClickInside =
        mobileNav.contains(event.target) || navToggle.contains(event.target);
      if (!isClickInside && mobileNav.classList.contains("visible")) {
        mobileNav.classList.remove("visible");
      }
    });
  }

  /* ===============================
     Section: Responsive Dropdown Menu
  =============================== */
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    const menu = dropdown.querySelector(".dropdown-menu");

    // For desktop: show/hide on hover
    dropdown.addEventListener("mouseenter", () => {
      menu.style.display = "block";
    });
    dropdown.addEventListener("mouseleave", () => {
      menu.style.display = "none";
    });

    // For touch devices: toggle on click
    dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    });
  });

  /* ===============================
     Section: (Optional) Other Redirections
  =============================== */
  // Example: Redirect buttons if needed.
  const aboutTeamBtn = document.getElementById("aboutTeamBtn");
  if (aboutTeamBtn) {
    aboutTeamBtn.addEventListener("click", () => {
      window.location.href = "/html/MeetOurTeam.html";
    });
  }

  const galleryBtn = document.querySelector(".btn-secondary");
  if (galleryBtn) {
    galleryBtn.addEventListener("click", () => {
      window.location.href = "/html/Gallery.html";
    });
  }

  const contactBtn = document.querySelector(".contactbttn");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      window.location.href = "/html/Contact.html";
    });
  }
});
