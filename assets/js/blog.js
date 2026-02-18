// Blog posts data
const blogPosts = [
  {
    title: "The Hardest Problems in Real‑Time Front‑End Engineering",
    date: "February 2026",
    url: "posts/post-real-time-hard-problems.html",
    image: "images/course.png",
    excerpt: "Real‑time systems expose every weakness in your architecture. After a decade building trading dashboards and high‑frequency UIs, these are the five hardest problems engineers face — and the patterns that actually solve them."
  },
  {
    title: "Three Metrics That Matter More Than Core Web Vitals in Trading Apps",
    date: "February 2026",
    url: "posts/post-metrics-that-matter.html",
    image: "images/course.png",
    excerpt: "Core Web Vitals don't measure whether a trading app feels real‑time. These three metrics — data processing latency, connection health, and memory stability — determine whether users trust your UI during long, high‑frequency trading sessions."
  },
  {
    title: "Building High‑Frequency React Architecture",
    date: "January 2026",
    url: "posts/post-react-high-frequency-architecture.html",
    image: "images/course.png",
    excerpt: "How to architect React applications that handle thousands of updates per second without dropping frames. Learn the scheduling patterns, batching strategies, and performance optimizations used in professional trading platforms."
  },
  {
    title: "Memory‑Bounded Arrays: Managing Infinite Streams in Finite Memory",
    date: "January 2026",
    url: "posts/post-memory-bounded-arrays.html",
    image: "images/course.png",
    excerpt: "When dealing with real‑time data streams, memory management becomes critical. Discover how memory‑bounded arrays prevent memory leaks while maintaining smooth UI performance in long‑running applications."
  }
];

// Pagination configuration
const POSTS_PER_PAGE = 2;

function renderBlogPosts(page = 1) {
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const postsToShow = blogPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const postsContainer = document.querySelector('.posts');
  postsContainer.innerHTML = '';

  postsToShow.forEach(post => {
    const article = `
      <article>
        <header>
          <span class="date">${post.date}</span>
          <h2>
            <a href="${post.url}">
              ${post.title}
            </a>
          </h2>
        </header>

        <a href="${post.url}" class="image fit">
          <img src="${post.image}" alt="${post.title}" />
        </a>

        <p>${post.excerpt}</p>

        <ul class="actions special">
          <li><a href="${post.url}" class="button">Read More</a></li>
        </ul>
      </article>
    `;
    postsContainer.innerHTML += article;
  });

  // Render pagination
  renderPagination(page, totalPages);
}

function renderPagination(currentPage, totalPages) {
  const paginationContainer = document.getElementById('pagination');
  
  if (totalPages <= 1) {
    paginationContainer.innerHTML = '';
    return;
  }

  let paginationHTML = '<ul class="pagination">';

  // Previous button
  if (currentPage > 1) {
    paginationHTML += `<li><a href="#" class="previous" data-page="${currentPage - 1}">Prev</a></li>`;
  }

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      paginationHTML += `<li><span class="page active">${i}</span></li>`;
    } else {
      paginationHTML += `<li><a href="#" class="page" data-page="${i}">${i}</a></li>`;
    }
  }

  // Next button
  if (currentPage < totalPages) {
    paginationHTML += `<li><a href="#" class="next" data-page="${currentPage + 1}">Next</a></li>`;
  }

  paginationHTML += '</ul>';
  paginationContainer.innerHTML = paginationHTML;

  // Add event listeners
  document.querySelectorAll('.pagination a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = parseInt(e.target.getAttribute('data-page'));
      renderBlogPosts(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  renderBlogPosts(1);
});
