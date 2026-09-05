document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('solid');
    } else {
      header.classList.remove('solid');
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  // Contact form (client-side only — no backend attached)
  var form = document.getElementById('contact-form');
  if (form) {
    var msg = document.getElementById('form-msg');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailOk) {
        msg.textContent = 'Please enter your name and a valid email address before sending.';
        msg.classList.add('show');
        return;
      }

      msg.textContent = 'Thank you, ' + name + '. Your enquiry has been noted — we reply within one business day. (This form is not yet connected to an inbox; wire it up to your email service or a form endpoint to receive submissions.)';
      msg.classList.add('show');
      form.reset();
    });
  }
});
