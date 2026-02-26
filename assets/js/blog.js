// Pagination configuration
const POSTS_PER_PAGE = 10
let allPosts = []

// Load posts from JSON
async function loadPosts() {
  try {
    const response = await fetch('assets/js/posts-meta.json')
    if (!response.ok) throw new Error('Failed to load posts')
    allPosts = await response.json()
  } catch (error) {
    console.error('Error loading posts:', error)
    document.querySelector('.posts').innerHTML = '<p>Error loading posts.</p>'
  }
  renderBlogPosts(1)
}

function renderBlogPosts(page = 1) {
  const startIndex = (page - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const postByNewest = allPosts.reverse()
  const postsToShow = postByNewest.slice(startIndex, endIndex)
  const totalPages = Math.ceil(postByNewest.length / POSTS_PER_PAGE)

  const postsContainer = document.querySelector('.posts')
  postsContainer.innerHTML = ''

  postsToShow.forEach((post) => {
    const postUrl = post.file
    const article = `
      <article>
        <header>
          <span class="date">${post.date}</span>
          <h2>
            <a href="${postUrl}">
              ${post.title}
            </a>
          </h2>
        </header>

        <a href="${postUrl}" class="image fit">
          <img src="${post.image}" alt="${post.title}" />
        </a>

        <p>${post.excerpt}</p>

        <ul class="actions special">
          <li><a href="${postUrl}" class="button">Read More</a></li>
        </ul>
      </article>
    `
    postsContainer.innerHTML += article
  })

  renderPagination(page, totalPages)
}

function renderPagination(currentPage, totalPages) {
  const paginationContainer = document.getElementById('pagination')

  if (totalPages <= 1) {
    paginationContainer.innerHTML = ''
    return
  }

  let paginationHTML = '<ul class="pagination">'

  if (currentPage > 1) {
    paginationHTML += `<li><a href="#" class="previous" data-page="${currentPage - 1}">Prev</a></li>`
  }

  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      paginationHTML += `<li><span class="page active">${i}</span></li>`
    } else {
      paginationHTML += `<li><a href="#" class="page" data-page="${i}">${i}</a></li>`
    }
  }

  if (currentPage < totalPages) {
    paginationHTML += `<li><a href="#" class="next" data-page="${currentPage + 1}">Next</a></li>`
  }

  paginationHTML += '</ul>'
  paginationContainer.innerHTML = paginationHTML

  document.querySelectorAll('.pagination a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const page = parseInt(e.target.getAttribute('data-page'))
      renderBlogPosts(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  })
}

document.addEventListener('DOMContentLoaded', loadPosts)
