
        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if(navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });

        // Particles.js Configuration
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00D1FF"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00D1FF",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });

        // Scroll Animation
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        fadeElements.forEach(element => {
            fadeObserver.observe(element);
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                nav.style.padding = '15px 10%';
                nav.style.background = 'rgba(10, 25, 47, 0.95)';
            } else {
                nav.style.padding = '20px 10%';
                nav.style.background = 'rgba(10, 25, 47, 0.9)';
            }
        });
    

// Custom Alert Functionality
function showCustomAlert(message) {
  const alertBox = document.getElementById('customAlertOverlay');
  const alertMessage = document.getElementById('customAlertMessage');
  alertMessage.textContent = message;
  alertBox.style.display = 'flex';
}

function closeCustomAlert() {
  document.getElementById('customAlertOverlay').style.display = 'none';
}

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message with animation
        const submitButton = this.querySelector('.submit-btn');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.style.opacity = '0.7';
        
        setTimeout(() => {
            submitButton.textContent = 'Message Sent!';
            submitButton.style.opacity = '1';
            
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.opacity = '1';
                submitButton.style.backgroundColor = '';
                this.reset();
            }, 2000);
        }, 1500);
    });
}
