// ========================================
// LOADING SCREEN
// ========================================
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500); // Loading selama 1.5 detik
});

// ========================================
// SCROLL TO TOP BUTTON
// ========================================
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// DARK/LIGHT MODE TOGGLE
// ========================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = document.querySelector('.theme-icon');

// Load saved theme from localStorage
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
themeIcon.textContent = currentTheme === 'dark' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
});

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
const reveals = document.querySelectorAll('.reveal');

function reveal() {
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Initial check

// ========================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ========================================
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

// ========================================
// EMAIL FORM SUBMISSION (EmailJS)
// ========================================
// INSTRUKSI SETUP EmailJS:
// 1. Daftar di https://www.emailjs.com/
// 2. Buat email service (Gmail/Outlook/dll)
// 3. Buat email template
// 4. Ganti 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', dan 'YOUR_PUBLIC_KEY' di bawah

// Initialize EmailJS (uncomment setelah setup)
// emailjs.init('YOUR_PUBLIC_KEY');

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        to_email: 'fanskey@example.com' // GANTI DENGAN EMAIL ANDA
    };
    
    // Disable button
    submitBtn.textContent = 'Mengirim...';
    submitBtn.disabled = true;
    
    try {
        // METODE 1: Menggunakan EmailJS (Recommended)
        // Uncomment kode di bawah setelah setup EmailJS
        /*
        await emailjs.send(
            'YOUR_SERVICE_ID',      // Ganti dengan Service ID dari EmailJS
            'YOUR_TEMPLATE_ID',     // Ganti dengan Template ID dari EmailJS
            formData
        );
        
        alert('✅ Terima kasih! Pesan Anda berhasil dikirim.');
        contactForm.reset();
        */
        
        // METODE 2: Demo mode (sementara)
        // Hapus ini setelah setup EmailJS
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert(`✅ Demo Mode: Pesan berhasil!\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\n⚠️ Untuk mengirim email sungguhan, setup EmailJS terlebih dahulu (lihat instruksi di script.js)`);
        contactForm.reset();
        
    } catch (error) {
        console.error('Error:', error);
        alert('❌ Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi langsung via email.');
    } finally {
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
    }
});
