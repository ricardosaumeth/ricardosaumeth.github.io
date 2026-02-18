// Load reusable components
(async function () {
  const basePath = document.querySelector('[data-base-path]')?.dataset.basePath || '';

  // Load navigation
  const navPlaceholder = document.querySelector('[data-component="nav"]');
  if (navPlaceholder) {
    try {
      const response = await fetch(`${basePath}components/nav.html`);
      const html = await response.text();
      navPlaceholder.outerHTML = html;

      // Set active page
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      document.querySelectorAll('#nav .links a').forEach((link) => {
        if (link.getAttribute('href') === currentPage) {
          link.parentElement.classList.add('active');
        }
      });
    } catch (error) {
      console.error('Failed to load nav:', error);
    }
  }

  // Load footer
  const footerPlaceholder = document.querySelector('[data-component="footer"]');
  if (footerPlaceholder) {
    try {
      const response = await fetch(`${basePath}components/footer.html`);
      const html = await response.text();
      footerPlaceholder.outerHTML = html;
    } catch (error) {
      console.error('Failed to load footer:', error);
    }
  }
})();
