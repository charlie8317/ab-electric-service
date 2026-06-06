/* ============================================================
   A.B ELECTRIC SERVICE — SHARED JAVASCRIPT (js/main.js)
   ============================================================ */

/* --- Navbar: scroll effect + mobile toggle --- */
(function () {
  const navbar   = document.querySelector('.navbar');
  const toggle   = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (toggle) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  // Close menu when a link is clicked
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // Highlight active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();


/* --- Scroll Reveal Animation --- */
(function () {
  const revealEls = document.querySelectorAll('.reveal');

  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay for grid children
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el, i) => {
    el.dataset.delay = el.dataset.delay || (i % 4) * 80;
    observer.observe(el);
  });
})();


/* --- Service Request Form Handler --- */
(function () {
  const form = document.getElementById('serviceRequestForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name    = document.getElementById('reqName')?.value.trim();
    const phone   = document.getElementById('reqPhone')?.value.trim();
    const service = document.getElementById('reqService')?.value;
    const problem = document.getElementById('reqProblem')?.value.trim();
    const address = document.getElementById('reqAddress')?.value.trim();

    if (!name || !phone || !service || !problem || !address) {
      showAlert('Please fill in all required fields.', 'error');
      return;
    }

    // Compose WhatsApp message
    const msg = encodeURIComponent(
      `🔧 *New Service Request — A.B Electric Service*\n\n` +
      `👤 Name: ${name}\n` +
      `📞 Phone: ${phone}\n` +
      `⚡ Service: ${service}\n` +
      `📍 Address: ${address}\n\n` +
      `📝 Problem:\n${problem}`
    );

    window.open(`https://wa.me/918436078538?text=${msg}`, '_blank');
  });
})();


/* --- Training Enquiry Form Handler --- */
(function () {
  const form = document.getElementById('trainingForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name  = document.getElementById('tName')?.value.trim();
    const phone = document.getElementById('tPhone')?.value.trim();
    const msg_t = document.getElementById('tMessage')?.value.trim();

    if (!name || !phone) {
      showAlert('Please enter your name and phone number.', 'error');
      return;
    }

    const msg = encodeURIComponent(
      `📚 *Training Enquiry — A.B Electric Service*\n\n` +
      `👤 Name: ${name}\n` +
      `📞 Phone: ${phone}\n` +
      (msg_t ? `💬 Message: ${msg_t}` : '')
    );

    window.open(`https://wa.me/918436078538?text=${msg}`, '_blank');
  });
})();


/* --- Contact Form Handler --- */
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name  = document.getElementById('cName')?.value.trim();
    const phone = document.getElementById('cPhone')?.value.trim();
    const msg_c = document.getElementById('cMessage')?.value.trim();

    if (!name || !phone) {
      showAlert('Please enter your name and phone number.', 'error');
      return;
    }

    const msg = encodeURIComponent(
      `📬 *Contact Message — A.B Electric Service*\n\n` +
      `👤 Name: ${name}\n` +
      `📞 Phone: ${phone}\n` +
      (msg_c ? `💬 Message: ${msg_c}` : '')
    );

    window.open(`https://wa.me/918436078538?text=${msg}`, '_blank');
  });
})();


/* --- Alert Helper --- */
function showAlert(msg, type) {
  let existing = document.querySelector('.site-alert');
  if (existing) existing.remove();

  const div = document.createElement('div');
  div.className = 'site-alert';
  div.textContent = msg;
  div.style.cssText = `
    position: fixed; top: 80px; left: 50%; transform: translateX(-50%);
    background: ${type === 'error' ? '#ef4444' : '#16a34a'};
    color: #fff; padding: 12px 28px; border-radius: 8px;
    font-family: 'Nunito', sans-serif; font-weight: 700;
    font-size: 0.95rem; z-index: 9999; box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    animation: fadeIn 0.3s ease;
  `;
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 4000);
}


/* --- Scroll-reveal CSS injection --- */
(function () {
  const style = document.createElement('style');
  style.textContent = `
    .reveal {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .reveal.revealed {
      opacity: 1;
      transform: translateY(0);
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translate(-50%, -8px); }
      to   { opacity: 1; transform: translate(-50%, 0); }
    }
  `;
  document.head.appendChild(style);
})();
