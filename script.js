// Dark Mode Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle")
  const body = document.body
  const currentYearSpan = document.getElementById("currentYear")

  // Set current year
  currentYearSpan.textContent = new Date().getFullYear()

  // Check for saved theme preference or default to 'light'
  const savedTheme = localStorage.getItem("theme") || "light"
  body.setAttribute("data-theme", savedTheme)

  // Dark mode toggle event listener
  darkModeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    body.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)

    // Add a little animation to the toggle button
    darkModeToggle.style.transform = "scale(0.9)"
    setTimeout(() => {
      darkModeToggle.style.transform = "scale(1)"
    }, 150)
  })

  // Add smooth scroll behavior for any future anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add hover effects to skill items
  const skillItems = document.querySelectorAll(".skill-item")
  skillItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) scale(1.05)"
    })

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Add click effect to contact links
  const contactLinks = document.querySelectorAll(".contact-item a")
  contactLinks.forEach((link) => {
    link.addEventListener("click", function () {
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 100)
    })
  })
})

// Add some interactive animations
function addInteractiveEffects() {
  // Add parallax effect to sections on scroll
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const sections = document.querySelectorAll(
      ".profile-section, .contact-section, .skills-section, .experience-section, .education-section",
    )

    sections.forEach((section, index) => {
      const rate = scrolled * -0.5
      section.style.transform = `translateY(${rate * 0.1}px)`
    })
  })
}

// Initialize interactive effects
document.addEventListener("DOMContentLoaded", addInteractiveEffects)
