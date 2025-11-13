function updateDisplay() {
    const companyName = document.getElementById('companyName').value;
    const email = document.getElementById('email').value;
    const url = document.getElementById('url').value;
    const imageUrl = document.getElementById('imageUrl').value;

    // Update company name
    document.getElementById('displayCompany').textContent = companyName || 'Company Name';
    
    // Update email
    document.getElementById('displayEmail').textContent = email ? `📧 ${email}` : '📧 Email Address';
    
    // Update URL
    document.getElementById('displayUrl').textContent = url ? `🌐 ${url}` : '🌐 Website URL';

    // Handle image URL
    const displayImage = document.getElementById('displayImage');
    const placeholderImage = document.getElementById('placeholderImage');
    
    if (imageUrl) {
        displayImage.src = imageUrl;
        displayImage.style.display = 'block';
        placeholderImage.style.display = 'none';
    } else {
        displayImage.style.display = 'none';
        placeholderImage.style.display = 'flex';
    }
}

// Real-time updates as user types
document.getElementById('companyName').addEventListener('input', updateDisplay);
document.getElementById('email').addEventListener('input', updateDisplay);
document.getElementById('url').addEventListener('input', updateDisplay);
document.getElementById('imageUrl').addEventListener('input', updateDisplay);