# 📧 CARA SETUP EMAIL FORM (EmailJS)

## Langkah-langkah Setup:

### 1️⃣ Daftar EmailJS
- Buka https://www.emailjs.com/
- Klik "Sign Up" dan buat akun gratis
- Verifikasi email Anda

### 2️⃣ Tambahkan Email Service
- Login ke dashboard EmailJS
- Klik "Add New Service"
- Pilih provider email Anda (Gmail/Outlook/Yahoo/dll)
- Ikuti instruksi untuk connect email
- Catat **Service ID** Anda (contoh: service_abc1234)

### 3️⃣ Buat Email Template
- Klik tab "Email Templates"
- Klik "Create New Template"
- Isi template dengan format ini:

**Subject:**
```
Pesan Baru dari {{name}} - Portfolio fanskey
```

**Content:**
```
Anda menerima pesan baru dari portfolio website:

Nama: {{name}}
Email: {{email}}

Pesan:
{{message}}

---
Dikirim dari: Portfolio Website
```

- Save template dan catat **Template ID** (contoh: template_xyz5678)

### 4️⃣ Dapatkan Public Key
- Klik tab "Account"
- Scroll ke "API Keys"
- Copy **Public Key** Anda (contoh: abcd1234efgh5678)

### 5️⃣ Update Kode Website

#### A. Tambahkan EmailJS Library di index.html
Tambahkan SEBELUM tag `<script src="script.js"></script>`:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script src="script.js"></script>
```

#### B. Update script.js
Buka file `script.js`, cari bagian EMAIL FORM SUBMISSION, lalu:

1. Uncomment baris ini (hapus //) dan ganti dengan Public Key Anda:
```javascript
emailjs.init('YOUR_PUBLIC_KEY'); // Ganti YOUR_PUBLIC_KEY
```

2. Ganti email tujuan di line `to_email`:
```javascript
to_email: 'email-anda@gmail.com' // GANTI dengan email Anda
```

3. Uncomment blok kode EmailJS (hapus /* dan */) dan isi dengan ID Anda:
```javascript
await emailjs.send(
    'service_abc1234',      // Service ID Anda
    'template_xyz5678',     // Template ID Anda
    formData
);
```

4. Comment atau hapus blok "Demo mode"

### 6️⃣ Testing
- Buka website Anda
- Isi form contact
- Klik "Kirim Pesan"
- Cek inbox email Anda!

---

## 🎯 Contoh Kode Lengkap (script.js):

```javascript
// Initialize EmailJS dengan Public Key Anda
emailjs.init('abcd1234efgh5678');

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        to_email: 'fanskey@gmail.com' // Email Anda
    };
    
    submitBtn.textContent = 'Mengirim...';
    submitBtn.disabled = true;
    
    try {
        await emailjs.send(
            'service_abc1234',      // Service ID Anda
            'template_xyz5678',     // Template ID Anda
            formData
        );
        
        alert('✅ Terima kasih! Pesan Anda berhasil dikirim.');
        contactForm.reset();
        
    } catch (error) {
        console.error('Error:', error);
        alert('❌ Maaf, terjadi kesalahan. Silakan coba lagi.');
    } finally {
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
    }
});
```

---

## ⚠️ Catatan Penting:
- EmailJS gratis untuk 200 email/bulan
- Jangan share Public Key di tempat publik (tapi di website OK)
- Email akan dikirim dari EmailJS, bukan dari form visitor
- Template bisa diubah kapan saja di dashboard EmailJS

## ❓ Troubleshooting:
- **Email tidak masuk**: Cek spam folder
- **Error 401**: Public Key salah
- **Error 404**: Service ID atau Template ID salah
- **CORS Error**: Pastikan domain website terdaftar di EmailJS

---

Selamat! Form email Anda sudah siap! 🎉
