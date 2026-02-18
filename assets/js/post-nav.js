// Dynamic post navigation based on posts-meta.json
(async function () {
  try {
    const response = await fetch('../assets/js/posts-meta.json');
    const posts = await response.json();

    // Get current post ID from URL
    const currentFile = window.location.pathname.split('/').pop();
    const currentIndex = posts.findIndex((post) => post.file.includes(currentFile));

    if (currentIndex === -1) return;

    const navContainer = document.querySelector('.actions.special');
    if (!navContainer) return;

    navContainer.innerHTML = '';

    // Previous button
    if (currentIndex > 0) {
      const prevPost = posts[currentIndex - 1];
      const prevFile = prevPost.file.split('/').pop();
      navContainer.innerHTML += `<li><a href="${prevFile}" class="button">← Previous Post</a></li>`;
    }

    // Next button
    if (currentIndex < posts.length - 1) {
      const nextPost = posts[currentIndex + 1];
      const nextFile = nextPost.file.split('/').pop();
      navContainer.innerHTML += `<li><a href="${nextFile}" class="button">Next Post →</a></li>`;
    }

    // Back to blog
    navContainer.innerHTML += `<li><a href="../blog.html" class="button">Back to Blog</a></li>`;
  } catch (error) {
    console.error('Failed to load post navigation:', error);
  }
})();
