// Load reusable components - inline HTML approach
;(function () {
  const basePath = document.querySelector('[data-base-path]')?.dataset.basePath || ''

  // Navigation HTML
  const navHTML = `
    <nav id="nav">
      <ul class="links">
        <li><a href="${basePath}index.html">Home</a></li>
        <li><a href="${basePath}book.html">Book</a></li>
        <li><a href="${basePath}course.html">Course</a></li>
        <li><a href="${basePath}library.html">Real‑Time React</a></li>
        <li><a href="${basePath}blog.html">Blog</a></li>
        <li><a href="${basePath}about.html">About</a></li>
        <li><a href="${basePath}contact.html">Contact</a></li>
      </ul>
      <ul class="icons">
        <li><a href="https://github.com/ricardosaumeth" target="_blank" rel="noopener noreferrer" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
        <li><a href="https://www.linkedin.com/in/ricardo-saumeth-0baba982/" target="_blank" rel="noopener noreferrer" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
      </ul>
    </nav>
  `

  // Footer HTML
  const footerHTML = `
    <footer id="footer">
      <section class="split contact">
        <section>
          <h3>Email</h3>
          <p><a href="mailto:hello@ricardosaumeth.com">hello@ricardosaumeth@com</a></p>
        </section>
        <section>
          <h3>Links</h3>
          <ul class="icons alt">
            <li><a href="https://github.com/ricardosaumeth" target="_blank" rel="noopener noreferrer" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
            <li><a href="https://www.linkedin.com/in/ricardo-saumeth-0baba982/" target="_blank" rel="noopener noreferrer" class="icon brands alt fa-linkedin"><span class="label">LinkedIn</span></a></li>
          </ul>
        </section>
      </section>
    </footer>
    <div id="copyright">
      <ul>
        <li>© 2026 Ricardo Saumeth</li>
        <li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
      </ul>
    </div>
  `

  // Load navigation
  const navPlaceholder = document.querySelector('[data-component="nav"]')
  if (navPlaceholder) {
    navPlaceholder.outerHTML = navHTML

    // Set active page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html'
    document.querySelectorAll('#nav .links a').forEach((link) => {
      const href = link.getAttribute('href').replace(basePath, '')
      if (href === currentPage) {
        link.parentElement.classList.add('active')
      }
    })
  }

  // Load footer
  const footerPlaceholder = document.querySelector('[data-component="footer"]')
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = footerHTML
  }
})()
