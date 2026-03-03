/* ===== MOBILE MENU ADAPTATION ===== */
/* Setup document reference and menu elements */
const doc = document;
const menuOpen = doc.querySelector(".menu");      /* Menu open button */
const menuClose = doc.querySelector(".close");    /* Menu close button */
const overlay = doc.querySelector(".overlay");    /* Overlay menu element */

/* ===== MENU OPEN EVENT ===== */
/* Add click listener to open menu overlay if elements exist */
if (menuOpen && overlay) {
  menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");   /* Show overlay menu */
  });
}

/* ===== MENU CLOSE EVENT ===== */
/* Add click listener to close menu overlay if elements exist */
if (menuClose && overlay) {
  menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active"); /* Hide overlay menu */
  });
}

/* ===== SMOOTH SCROLL FOR ANCHOR LINKS ===== */
/* Handle all internal anchor links for smooth center-scrolling to sections */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  const href = anchor.getAttribute('href');
  /* Skip empty or plain hash links */
  if (!href || href === '#') return;
  
  /* Attach click listener to each anchor link */
  anchor.addEventListener('click', function (e) {
    e.preventDefault();                          /* Prevent default link behavior */
    const target = document.querySelector(href); /* Find target section */
    
    /* Scroll to target with smooth animation, centered in viewport */
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth',                      /* Smooth animation */
        block: 'center'                          /* Center section in viewport */
      });
    }
  });
});
