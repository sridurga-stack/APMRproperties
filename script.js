// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather Icons
    feather.replace();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Here you would typically send the data to your server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your submission! Our team will contact you shortly.');
            this.reset();
        });
    });
    
    // Track CTA button clicks
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            // Here you would typically track this event in your analytics
            console.log('CTA button clicked:', this.textContent.trim());
        });
    });
    
    // Exit intent popup
    let exitIntentTriggered = false;
    
    document.addEventListener('mouseout', function(e) {
        if (!exitIntentTriggered && e.clientY < 0) {
            exitIntentTriggered = true;
            showExitPopup();
        }
    });
    
    function showExitPopup() {
        const popup = document.createElement('div');
        popup.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        popup.innerHTML = `
            <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
                <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <i data-feather="x"></i>
                </button>
                <h3 class="text-xl font-bold text-primary mb-3">Wait — Get the Price Sheet Before You Go!</h3>
                <p class="text-gray-700 mb-4">See available plots, sizes and today's offer in one click.</p>
                <form class="space-y-3">
                    <input type="text" placeholder="Your Name" class="w-full px-4 py-2 border rounded">
                    <input type="tel" placeholder="Mobile Number" class="w-full px-4 py-2 border rounded">
                    <button type="submit" class="w-full bg-secondary text-gray-900 px-4 py-2 rounded font-medium">
                        Get Price Sheet
                    </button>
                </form>
                <p class="text-xs text-gray-500 mt-3">Limited plots. No spam — we only call once.</p>
            </div>
        `;
        
        document.body.appendChild(popup);
        feather.replace();
        
        // Close button functionality
        popup.querySelector('button').addEventListener('click', function() {
            document.body.removeChild(popup);
        });
    }
    
    // Offer popup after 25 seconds
    setTimeout(function() {
        if (!exitIntentTriggered && window.location.pathname === '/' || window.location.pathname.includes('pricing')) {
            showOfferPopup();
        }
    }, 25000);
    
    function showOfferPopup() {
        const popup = document.createElement('div');
        popup.className = 'fixed bottom-4 right-4 bg-white rounded-lg shadow-xl z-50 p-4 max-w-xs';
        popup.innerHTML = `
            <div class="relative">
                <button class="absolute top-0 right-0 text-gray-500 hover:text-gray-700">
                    <i data-feather="x" class="w-4 h-4"></i>
                </button>
                <h3 class="text-lg font-bold text-primary mb-2">Limited Time Offer — Price Revision Soon</h3>
                <p class="text-gray-700 mb-3">Book your site visit now and lock today's pricing.</p>
                <a href="#visit" class="block bg-secondary text-gray-900 px-4 py-2 rounded text-center font-medium">
                    Book Free Site Visit
                </a>
                <p class="text-xs text-gray-500 mt-2">Fast-moving project. Few plots left.</p>
            </div>
        `;
        
        document.body.appendChild(popup);
        feather.replace();
        
        // Close button functionality
        popup.querySelector('button').addEventListener('click', function() {
            document.body.removeChild(popup);
        });
    }
    
    // WhatsApp popup after scrolling 40%
    window.addEventListener('scroll', function() {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        if (scrollPercentage > 40 && !document.querySelector('.whatsapp-popup')) {
            showWhatsAppPopup();
        }
    });
    
    function showWhatsAppPopup() {
        const popup = document.createElement('div');
        popup.className = 'whatsapp-popup fixed bottom-4 left-4 bg-white rounded-lg shadow-xl z-50 p-3 flex items-center';
        popup.innerHTML = `
            <div class="mr-3">
                <h3 class="font-bold text-primary">Have Questions?</h3>
                <p class="text-sm text-gray-700">Chat with us on WhatsApp</p>
            </div>
            <a href="https://wa.me/9177292529" class="bg-green-500 text-white p-2 rounded-full">
                <i data-feather="message-square" class="w-5 h-5"></i>
            </a>
        `;
        
        document.body.appendChild(popup);
        feather.replace();
    }
});
  // coutdown timer
document.addEventListener("DOMContentLoaded", function () {

  // START TIME — change these if you want
  let days = 2;
  let hours = 1;
  let minutes = 30;
  let seconds = 4;

  function updateTimer() {
    const el = document.getElementById("countdown");
    if (!el) return;

    // display current time
    el.textContent = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

    // decrease by 1 second
    seconds--;

    // handle rollovers
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }

    if (minutes < 0) {
      minutes = 59;
      hours--;
    }

    if (hours < 0) {
      hours = 23;
      days--;
    }

    // when finished
    if (days < 0) {
      clearInterval(timer);
      el.textContent = "OFFER ENDED";
    }
  }

  updateTimer();
  const timer = setInterval(updateTimer, 1000);
});

