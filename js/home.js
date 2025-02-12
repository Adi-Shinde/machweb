// // Wait for the DOM to load before executing scripts
// document.addEventListener("DOMContentLoaded", () => {
//   /* ===============================
//      Section 1: Fade-In Animation
//   =============================== */
//   const sections = document.querySelectorAll(".fade-in");

//   const observerOptions = {
//     threshold: 0.3, // Trigger when 30% of the section is visible
//   };

//   const sectionObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("fade-in-visible");
//         observer.unobserve(entry.target); // Stop observing once animation triggers
//       }
//     });
//   }, observerOptions);

//   sections.forEach((section) => {
//     sectionObserver.observe(section);
//   });

//   /* ===============================
//      Section 2: Accordion Functionality
//   =============================== */
//   const accordions = document.querySelectorAll(".accordion-header");

//   accordions.forEach((header) => {
//     header.addEventListener("click", () => {
//       const content = header.nextElementSibling;
//       const isActive = header.classList.contains("active");

//       // Close all active accordions
//       document
//         .querySelectorAll(".accordion-header.active")
//         .forEach((activeHeader) => {
//           activeHeader.classList.remove("active");
//           activeHeader.nextElementSibling.style.maxHeight = null;
//         });

//       // Toggle current accordion
//       if (!isActive) {
//         header.classList.add("active");
//         content.style.maxHeight = content.scrollHeight + "px";
//       }
//     });
//   });

//   /* ===============================
//      Section 3: Responsive Dropdown Menu
//   =============================== */
//   const dropdowns = document.querySelectorAll(".dropdown");

//   dropdowns.forEach((dropdown) => {
//     const menu = dropdown.querySelector(".dropdown-menu");

//     dropdown.addEventListener("mouseenter", () => {
//       menu.style.display = "block";
//     });

//     dropdown.addEventListener("mouseleave", () => {
//       menu.style.display = "none";
//     });
//   });

//   /* ===============================
//      Section 4: Smooth Scroll for Navigation Links
//   =============================== */
//   // const navLinks = document.querySelectorAll(".nav-list a");

//   // navLinks.forEach((link) => {
//   //   link.addEventListener("click", (event) => {
//   //     event.preventDefault();
//   //     const targetId = link.getAttribute("href").slice(1);
//   //     const targetSection = document.getElementById(targetId);

//   //     if (targetSection) {
//   //       window.scrollTo({
//   //         top: targetSection.offsetTop,
//   //         behavior: "smooth",
//   //       });
//   //     }

//   //     // Close the navigation menu after clicking a link
//   //     const headerNav = document.querySelector(".header-nav");
//   //     if (headerNav.classList.contains("visible")) {
//   //       headerNav.classList.remove("visible");
//   //     }
//   //   });
//   // });

//   /* ===============================
//      Section 5: Responsive Navbar Toggle
//   =============================== */
//   const navToggle = document.createElement("button");
//   navToggle.classList.add("nav-toggle");
//   navToggle.textContent = "☰";

//   const headerNav = document.querySelector(".header-nav");
//   headerNav.parentElement.insertBefore(navToggle, headerNav);

//   navToggle.addEventListener("click", () => {
//     headerNav.classList.toggle("visible");
//   });

//   // Close Navbar when clicking outside of it
//   document.addEventListener("click", (event) => {
//     const isClickInsideNav = headerNav.contains(event.target);
//     const isClickNavToggle = navToggle.contains(event.target);

//     if (
//       !isClickInsideNav &&
//       !isClickNavToggle &&
//       headerNav.classList.contains("visible")
//     ) {
//       headerNav.classList.remove("visible");
//     }
//   });

//   /* ===============================
//      Section 6: Additional Responsive Navbar Toggle
//   =============================== */
//   const navToggleButton = document.querySelector(".nav-toggle");

//   navToggleButton.addEventListener("click", () => {
//     headerNav.classList.toggle("visible");
//   });

//   document.addEventListener("click", (event) => {
//     const isClickInsideNav = headerNav.contains(event.target);
//     const isClickNavToggle = navToggleButton.contains(event.target);

//     if (
//       !isClickInsideNav &&
//       !isClickNavToggle &&
//       headerNav.classList.contains("visible")
//     ) {
//       headerNav.classList.remove("visible");
//     }
//   });

//   /* ===============================
//      Section 7: Hyperlinks with Redirection
//   =============================== */

//   // Redirect 'Home' to ./index.html
//   // redirectTo(".nav-list li:nth-child(1)", "./index.html");

//   // Redirect 'About' submenu items to ./html/aboutMACH.html
//   // redirectTo(".dropdown-menu li a[href='#aboutMACH']", "./html/aboutMACH.html");
//   // redirectTo(".dropdown-menu li a[href='#aboutMACH']", "./html/aboutMACH.html");
//   // redirectTo(".dropdown-menu li a[href='#ourTeam']", "./html/aboutMACH.html");
//   // redirectTo(".dropdown-menu li a[href='#becomemember']","./html/aboutMACH.html");

//   // Redirect 'Projects' submenu items to ./html/aboutMACH.html
//   // redirectTo(".dropdown-menu li a[href='#gare']", "./html/aboutMACH.html");
//   // redirectTo(".dropdown-menu li a[href='#chimera']", "./html/chimera.html");

//   // Redirect 'Sponsorship', 'Gallery', and 'Contact' to ./html/aboutMACH.html
//   // redirectTo(".nav-list li a[href='#sponsorship']", "./html/aboutMACH.html");
//   // redirectTo(".nav-list li a[href='#gallery']", "./html/aboutMACH.html");
//   //  redirectTo(".nav-list li a[href='#cntact']", "./html/aboutMACH.html");

//   // Redirect 'About the Team' to ./html/aboutMACH.html
//   const galleryBtn = document.querySelector(".btn-secondary");
//   if (galleryBtn) {
//     galleryBtn.addEventListener("click", () => {
//       window.location.href = "/html/AboutMach.html";
//     });
//   }
//   // Redirect 'Check Out Our Gallery' to ./html/gallery.html
//   const aboutTeamBtn = document.getElementById("aboutTeamBtn");
//   if (aboutTeamBtn) {
//     aboutTeamBtn.addEventListener("click", () => {
//       window.location.href = "/html/AboutMach.html";
//     });
//   }

//   // Redirect 'Contact Us' to ./html/contact.html
//   const contactBtn = document.querySelector(".contactbttn");
//   if (contactBtn) {
//     contactBtn.addEventListener("click", () => {
//       window.location.href = "./html/contact.html";
//     });
//   }
// });
// Wait for the DOM to load before executing scripts
document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
     Section 1: Fade-In Animation
  =============================== */
  const sections = document.querySelectorAll(".fade-in");

  const observerOptions = {
    threshold: 0.3, // Trigger when 30% of the section is visible
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
        observer.unobserve(entry.target); // Stop observing once animation triggers
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  /* ===============================
     Section 2: Accordion Functionality
  =============================== */
  const accordions = document.querySelectorAll(".accordion-header");

  accordions.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const isActive = header.classList.contains("active");

      // Close all active accordions
      document
        .querySelectorAll(".accordion-header.active")
        .forEach((activeHeader) => {
          activeHeader.classList.remove("active");
          activeHeader.nextElementSibling.style.maxHeight = null;
        });

      // Toggle current accordion
      if (!isActive) {
        header.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  /* ===============================
     Section 3: Responsive Dropdown Menu
  =============================== */
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const menu = dropdown.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseenter", () => {
      menu.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", () => {
      menu.style.display = "none";
    });
  });

  /* ===============================
     Section 4: (Smooth Scroll for Navigation Links)
     [Currently commented out]
  =============================== */
  // const navLinks = document.querySelectorAll(".nav-list a");
  // navLinks.forEach((link) => {
  //   link.addEventListener("click", (event) => {
  //     event.preventDefault();
  //     const targetId = link.getAttribute("href").slice(1);
  //     const targetSection = document.getElementById(targetId);
  //     if (targetSection) {
  //       window.scrollTo({
  //         top: targetSection.offsetTop,
  //         behavior: "smooth",
  //       });
  //     }
  //     // Close the navigation menu after clicking a link
  //     const headerNav = document.querySelector(".header-nav");
  //     if (headerNav.classList.contains("visible")) {
  //       headerNav.classList.remove("visible");
  //     }
  //   });
  // });

  /* ===============================
     Section 5: Responsive Navbar Toggle
  =============================== */
  const navToggle = document.querySelector(".nav-toggle");
  const headerNav = document.querySelector(".header-nav");

  // Only add the navToggle if it exists in the DOM
  if (navToggle && headerNav) {
    navToggle.addEventListener("click", () => {
      headerNav.classList.toggle("visible");
    });

    // Close Navbar when clicking outside of it
    document.addEventListener("click", (event) => {
      const isClickInsideNav = headerNav.contains(event.target);
      const isClickOnToggle = navToggle.contains(event.target);
      if (
        !isClickInsideNav &&
        !isClickOnToggle &&
        headerNav.classList.contains("visible")
      ) {
        headerNav.classList.remove("visible");
      }
    });
  }

  /* ===============================
     Section 7: Hyperlinks with Redirection
  =============================== */
  // Redirect "About the Team" button to the Meet Our Team page.
  const aboutTeamBtn = document.getElementById("aboutTeamBtn");
  if (aboutTeamBtn) {
    aboutTeamBtn.addEventListener("click", () => {
      window.location.href = "/html/MeetOurTeam.html";
    });
  }

  // Redirect "Check Out Our Gallery" button to the Gallery page.
  const galleryBtn = document.querySelector(".btn-secondary");
  if (galleryBtn) {
    galleryBtn.addEventListener("click", () => {  
      window.location.href = "/html/Gallery.html";
    });
  }

  // Redirect "Contact Us" button to the Contact page.
  const contactBtn = document.querySelector(".contactbttn");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      window.location.href = "/html/Contact.html";
    });
  }
});
