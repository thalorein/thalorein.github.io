// Check whether we're still transitioning between sections after button click
let isTransitioning = false;
// Check whether current page is homepage, ie. /
const isOnHome = location.pathname === '/' || location.pathname === '{{ site.baseurl }}/';
const sections = [...document.querySelectorAll('.character')];
const navLinks = [...document.querySelectorAll('#site-header a')];

function showSection(id) {
  if (isTransitioning) return;
  isTransitioning = true;

  const next = document.getElementById(id);
  const current = document.querySelector('.character.active');

  if (current && current !== next) {
    // Start fade-out
    requestAnimationFrame(() => {
      current?.classList.remove('active');
    });

    // After fade-out is done, fade-in the new one
    setTimeout(() => {
      requestAnimationFrame(() => {
        next?.classList.add('active');
      });
    }, 800); // match CSS fade-out duration
  } else if (!current) {
    // Fade in the new section
    setTimeout(() => {
      requestAnimationFrame(() => {
        next?.classList.add('active');
      });
    }, 800); // match CSS fade-out duration
  }

  // Update nav highlight
  navLinks.forEach(link =>
    link.classList.toggle('active', link.hash.slice(1) === id)
  );

  // Release lock after both fade out and fade in complete
  setTimeout(() => {
    isTransitioning = false;
  }, 800); // again match CSS duration
}

document.addEventListener('DOMContentLoaded', () => {
  // Handle header link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.hash.slice(1);

      if (isOnHome) {
        history.replaceState(null, '', '#' + id); // update URL
        showSection(id);
      } else {
        // Not on homepage, redirect to home and pass id
        window.location.href = `/#${id}`;
      }
    });
  });

  // On page load, load #home or whatever page is currently on.
  const initial = location.hash.slice(1) || 'home';
  showSection(initial);
});

if (isOnHome) {
  const characterLinks = [...document.querySelectorAll('a.character-link')];

  characterLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.hash.slice(1);
  
      history.replaceState(null, '', '#' + id); // update URL
      showSection(id);
    });
  });
}