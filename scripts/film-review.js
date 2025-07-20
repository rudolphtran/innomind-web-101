// Film Review Website JavaScript

// Sample movie data
const moviesData = [
    {
        id: 1,
        title: "Epic Adventure Quest",
        genre: "action",
        rating: 8.5,
        year: 2024,
        image: "./images/11.jpg",
        reviewer: "Sarah Johnson",
        date: "Dec 10, 2024",
        preview: "An incredible journey that keeps you on the edge of your seat from start to finish. The action sequences are brilliantly choreographed and the character development is outstanding..."
    },
    {
        id: 2,
        title: "Romantic Moonlight",
        genre: "drama",
        rating: 9.2,
        year: 2024,
        image: "./images/12.jpg",
        reviewer: "Michael Chen",
        date: "Dec 8, 2024",
        preview: "A beautifully crafted love story that touches the heart. The cinematography is breathtaking and the performances are deeply moving..."
    },
    {
        id: 3,
        title: "Comedy Central",
        genre: "comedy",
        rating: 7.8,
        year: 2024,
        image: "./images/13.jpg",
        reviewer: "Emma Davis",
        date: "Dec 5, 2024",
        preview: "Hilarious from beginning to end! The writing is sharp, the timing is perfect, and the cast delivers exceptional comedic performances..."
    },
    {
        id: 4,
        title: "Horror Nightmare",
        genre: "horror",
        rating: 8.1,
        year: 2024,
        image: "./images/14.jpg",
        reviewer: "David Wilson",
        date: "Dec 3, 2024",
        preview: "A spine-chilling horror experience that masterfully builds tension. The psychological elements are expertly woven throughout..."
    },
    {
        id: 5,
        title: "Drama Chronicles",
        genre: "drama",
        rating: 9.0,
        year: 2024,
        image: "./images/15.jpg",
        reviewer: "Lisa Anderson",
        date: "Dec 1, 2024",
        preview: "A powerful dramatic piece that explores complex human emotions. The storytelling is compelling and the character arcs are beautifully developed..."
    },
    {
        id: 6,
        title: "Action Heroes",
        genre: "action",
        rating: 8.7,
        year: 2024,
        image: "./images/16.jpg",
        reviewer: "James Taylor",
        date: "Nov 28, 2024",
        preview: "Non-stop action with incredible stunts and visual effects. The plot is engaging and the pacing is perfect throughout..."
    },
    {
        id: 7,
        title: "Fantasy World",
        genre: "action",
        rating: 8.9,
        year: 2024,
        image: "./images/17.jpg",
        reviewer: "Amanda White",
        date: "Nov 25, 2024",
        preview: "A magical journey into a fantastical world filled with wonder and adventure. The world-building is exceptional and immersive..."
    },
    {
        id: 8,
        title: "Sci-Fi Future",
        genre: "action",
        rating: 8.3,
        year: 2024,
        image: "./images/18.jpg",
        reviewer: "Ryan Martinez",
        date: "Nov 22, 2024",
        preview: "A thought-provoking science fiction film that explores the future of humanity. The visual effects are stunning and the concept is original..."
    },
    {
        id: 9,
        title: "Mystery Solved",
        genre: "drama",
        rating: 8.6,
        year: 2024,
        image: "./images/20.jpg",
        reviewer: "Jessica Brown",
        date: "Nov 20, 2024",
        preview: "An intriguing mystery that keeps you guessing until the very end. The plot twists are cleverly executed and the resolution is satisfying..."
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const searchInput = document.getElementById('searchInput');
const reviewsGrid = document.getElementById('reviewsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const addReviewBtn = document.getElementById('addReviewBtn');
const addReviewModal = document.getElementById('addReviewModal');
const closeModal = document.querySelector('.close');
const reviewForm = document.getElementById('reviewForm');
const starRating = document.querySelectorAll('.star-rating i');

// State variables
let currentFilter = 'all';
let currentPage = 1;
const itemsPerPage = 6;
let filteredMovies = [...moviesData];
let userRating = 0;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Search functionality
    searchInput.addEventListener('input', handleSearch);

    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });

    // Load more button
    loadMoreBtn.addEventListener('click', loadMoreReviews);

    // Modal functionality
    addReviewBtn.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalHandler);
    window.addEventListener('click', outsideClickHandler);

    // Review form
    reviewForm.addEventListener('submit', handleReviewSubmission);

    // Star rating
    starRating.forEach((star, index) => {
        star.addEventListener('click', () => setRating(index + 1));
        star.addEventListener('mouseover', () => highlightStars(index + 1));
    });

    document.querySelector('.star-rating').addEventListener('mouseleave', () => {
        highlightStars(userRating);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });

    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);

    // Load initial reviews
    loadReviews();
}

// Navigation Functions
function handleSmoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    // Close mobile menu if open
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
}

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    }
}

// Search and Filter Functions
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm === '') {
        filteredMovies = moviesData.filter(movie => 
            currentFilter === 'all' || movie.genre === currentFilter
        );
    } else {
        filteredMovies = moviesData.filter(movie => {
            const matchesSearch = movie.title.toLowerCase().includes(searchTerm) ||
                                movie.reviewer.toLowerCase().includes(searchTerm) ||
                                movie.genre.toLowerCase().includes(searchTerm);
            
            const matchesFilter = currentFilter === 'all' || movie.genre === currentFilter;
            
            return matchesSearch && matchesFilter;
        });
    }
    
    currentPage = 1;
    loadReviews();
}

function handleFilter(e) {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    e.target.classList.add('active');
    
    currentFilter = e.target.getAttribute('data-filter');
    currentPage = 1;
    
    // Filter movies
    const searchTerm = searchInput.value.toLowerCase();
    
    if (currentFilter === 'all') {
        filteredMovies = searchTerm === '' 
            ? [...moviesData]
            : moviesData.filter(movie => 
                movie.title.toLowerCase().includes(searchTerm) ||
                movie.reviewer.toLowerCase().includes(searchTerm) ||
                movie.genre.toLowerCase().includes(searchTerm)
            );
    } else {
        filteredMovies = moviesData.filter(movie => {
            const matchesFilter = movie.genre === currentFilter;
            const matchesSearch = searchTerm === '' || 
                movie.title.toLowerCase().includes(searchTerm) ||
                movie.reviewer.toLowerCase().includes(searchTerm) ||
                movie.genre.toLowerCase().includes(searchTerm);
            
            return matchesFilter && matchesSearch;
        });
    }
    
    loadReviews();
}

// Review Loading Functions
function loadReviews() {
    reviewsGrid.innerHTML = '';
    
    const startIndex = 0;
    const endIndex = currentPage * itemsPerPage;
    const moviesToShow = filteredMovies.slice(startIndex, endIndex);
    
    moviesToShow.forEach((movie, index) => {
        setTimeout(() => {
            const reviewCard = createReviewCard(movie);
            reviewsGrid.appendChild(reviewCard);
            
            // Animate card entrance
            setTimeout(() => {
                reviewCard.style.opacity = '1';
                reviewCard.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
    
    // Show/hide load more button
    if (endIndex >= filteredMovies.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

function loadMoreReviews() {
    currentPage++;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const moviesToShow = filteredMovies.slice(startIndex, endIndex);
    
    moviesToShow.forEach((movie, index) => {
        setTimeout(() => {
            const reviewCard = createReviewCard(movie);
            reviewCard.style.opacity = '0';
            reviewCard.style.transform = 'translateY(20px)';
            reviewsGrid.appendChild(reviewCard);
            
            // Animate card entrance
            setTimeout(() => {
                reviewCard.style.opacity = '1';
                reviewCard.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
    
    // Hide load more button if no more items
    if (endIndex >= filteredMovies.length) {
        loadMoreBtn.style.display = 'none';
    }
}

function createReviewCard(movie) {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.style.transition = 'all 0.3s ease';
    
    const stars = generateStars(movie.rating);
    
    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" loading="lazy">
        <div class="review-card-content">
            <h4>${movie.title}</h4>
            <div class="review-rating">
                <div class="stars">${stars}</div>
                <span>${movie.rating}/10</span>
            </div>
            <p class="review-preview">${movie.preview}</p>
            <div class="review-meta">
                <span>By ${movie.reviewer}</span>
                <span>${movie.date}</span>
            </div>
        </div>
    `;
    
    // Add click handler for card expansion
    card.addEventListener('click', () => showFullReview(movie));
    
    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = (rating / 2) % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

function showFullReview(movie) {
    // Create a modal or expanded view for the full review
    const fullReviewModal = document.createElement('div');
    fullReviewModal.className = 'modal';
    fullReviewModal.style.display = 'block';
    
    fullReviewModal.innerHTML = `
        <div class="modal-content" style="max-width: 800px;">
            <span class="close">&times;</span>
            <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
                <img src="${movie.image}" alt="${movie.title}" style="width: 200px; height: 300px; object-fit: cover; border-radius: 10px;">
                <div>
                    <h2 style="color: #ff6b35; margin-bottom: 1rem;">${movie.title}</h2>
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <div class="stars">${generateStars(movie.rating)}</div>
                        <span style="font-size: 1.2rem; font-weight: 600;">${movie.rating}/10</span>
                    </div>
                    <p style="margin-bottom: 1rem;"><strong>Year:</strong> ${movie.year}</p>
                    <p style="margin-bottom: 1rem;"><strong>Genre:</strong> ${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</p>
                    <p style="margin-bottom: 1rem;"><strong>Reviewed by:</strong> ${movie.reviewer}</p>
                    <p><strong>Date:</strong> ${movie.date}</p>
                </div>
            </div>
            <div>
                <h3 style="color: #ff6b35; margin-bottom: 1rem;">Full Review</h3>
                <p style="line-height: 1.8; margin-bottom: 1rem;">${movie.preview}</p>
                <p style="line-height: 1.8;">This film represents a remarkable achievement in cinema, showcasing exceptional storytelling and masterful direction. The visual composition and sound design work in perfect harmony to create an immersive experience that stays with you long after the credits roll. The performances are nuanced and authentic, bringing depth to characters that feel genuinely human and relatable.</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(fullReviewModal);
    
    // Close modal functionality
    const closeBtn = fullReviewModal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(fullReviewModal);
    });
    
    fullReviewModal.addEventListener('click', (e) => {
        if (e.target === fullReviewModal) {
            document.body.removeChild(fullReviewModal);
        }
    });
}

// Modal Functions
function openModal() {
    addReviewModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModalHandler() {
    addReviewModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    resetForm();
}

function outsideClickHandler(e) {
    if (e.target === addReviewModal) {
        closeModalHandler();
    }
}

// Star Rating Functions
function setRating(rating) {
    userRating = rating;
    highlightStars(rating);
}

function highlightStars(rating) {
    starRating.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Form Functions
function handleReviewSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const movieTitle = document.getElementById('movieTitle').value;
    const reviewerName = document.getElementById('reviewerName').value;
    const reviewText = document.getElementById('reviewText').value;
    
    if (userRating === 0) {
        alert('Please select a rating!');
        return;
    }
    
    // Create new review object
    const newReview = {
        id: moviesData.length + 1,
        title: movieTitle,
        genre: 'drama', // Default genre
        rating: userRating * 2, // Convert 5-star to 10-point scale
        year: new Date().getFullYear(),
        image: './images/' + (Math.floor(Math.random() * 30) + 1) + '.jpg', // Random image
        reviewer: reviewerName,
        date: new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        }),
        preview: reviewText.substring(0, 150) + '...'
    };
    
    // Add to movies data
    moviesData.unshift(newReview);
    filteredMovies.unshift(newReview);
    
    // Show success message
    showSuccessMessage('Review added successfully!');
    
    // Close modal and reset form
    closeModalHandler();
    
    // Reload reviews
    currentPage = 1;
    loadReviews();
}

function resetForm() {
    reviewForm.reset();
    userRating = 0;
    highlightStars(0);
}

function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, #4CAF50, #45a049);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 3000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        transform: translateX(400px);
        transition: all 0.3s ease;
    `;
    successDiv.textContent = message;
    
    document.body.appendChild(successDiv);
    
    // Animate in
    setTimeout(() => {
        successDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        successDiv.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(successDiv)) {
                document.body.removeChild(successDiv);
            }
        }, 300);
    }, 3000);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add some animation on scroll
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    document.querySelectorAll('.review-card, .top-movie-card, .featured-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(animateOnScroll, 1000);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && addReviewModal.style.display === 'block') {
        closeModalHandler();
    }
});

// Enhanced search with debouncing
searchInput.addEventListener('input', debounce(handleSearch, 300));
