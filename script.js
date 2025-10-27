// Shared JavaScript across all pages
console.log('CodeCraft Wizardry Portal loaded');

// Projects data - in a real scenario, this would come from an API
const projects = [
    {
        id: 1,
        title: "3D E-Commerce Experience",
        description: "Immersive WebGL shopping platform with real-time 3D product visualization",
        category: "WebGL",
        image: "http://static.photos/technology/640x360/1",
        technologies: ["Three.js", "React", "Node.js"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Mobile Fitness Tracker",
        description: "Cross-platform mobile app with real-time workout tracking and social features",
        category: "Mobile",
        image: "http://static.photos/wellness/640x360/2",
        technologies: ["React Native", "Firebase", "Redux"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Real-Time Dashboard",
        description: "Full-stack analytics dashboard with live data streaming and interactive charts",
        category: "Full-Stack",
        image: "http://static.photos/finance/640x360/3",
        technologies: ["Vue.js", "Express", "Socket.io"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 4,
        title: "VR Museum Tour",
        description: "Virtual reality museum experience with WebGL rendering and spatial audio",
        category: "WebGL",
        image: "http://static.photos/education/640x360/4",
        technologies: ["A-Frame", "WebXR", "Three.js"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 5,
        title: "Food Delivery Platform",
        description: "Mobile-first food delivery app with real-time order tracking and payment integration",
        category: "Mobile",
        image: "http://static.photos/food/640x360/5",
        technologies: ["Flutter", "Stripe", "MongoDB"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 6,
        title: "AI-Powered Chat System",
        description: "Intelligent chatbot platform with natural language processing and sentiment analysis",
        category: "Full-Stack",
        image: "http://static.photos/technology/640x360/6",
        technologies: ["Next.js", "OpenAI API", "PostgreSQL"],
        liveUrl: "#",
        githubUrl: "#"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    setupContactForm();
    setupSmoothScrolling();
    setupIntersectionObserver();
});

// Load projects into the grid
function loadProjects() {
    const container = document.getElementById('projects-container');
    
    if (!container) return;
    
    container.innerHTML = projects.map(project => `
        <div class="project-card bg-white rounded-2xl shadow-lg overflow-hidden group">
            <div class="relative overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute top-4 right-4">
                    <span class="bg-${getCategoryColor(project.category)}-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ${project.category}
                    </span>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">${project.title}</h3>
                <p class="text-gray-600 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(tech => `
                        <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">${tech}</span>
                    `).join('')}
                </div>
                <div class="flex gap-3">
                    <a href="${project.liveUrl}" class="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 rounded-lg font-semibold transition-colors duration-300">
                        Live Demo
                    </a>
                    <a href="${project.githubUrl}" class="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 text-center py-2 rounded-lg font-semibold transition-colors duration-300">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Get category color
function getCategoryColor(category) {
    const colors = {
        'WebGL': 'purple',
        'Mobile': 'blue',
        'Full-Stack': 'green'
    };
    return colors[category] || 'gray';
}

// Setup contact form
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would send this data to a server
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        form.reset();
    });
}

// Setup smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup intersection observer for animations
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe all project cards and sections
    document.querySelectorAll('.project-card, section').forEach(el => {
        observer.observe(el);
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);