
    // Constants
    const COLORS = ['#6C5DD3', '#000000', '#333333', '#F7F7F7', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FDCB6E', '#6C5CE7', '#00B894'];
    const FONTS = ['Poppins', 'Arial', 'Helvetica', 'Georgia', 'Times New Roman', 'Courier New', 'Verdana', 'Tahoma'];

    // DOM Elements
    const tabBtns = document.querySelectorAll('.tabbar__item');
    const tabContents = document.querySelectorAll('.tab-content');
    const socialBtns = document.querySelectorAll('.social-btn');
    const socialInputs = document.getElementById('socialInputs');
    const colorOptions = document.querySelector('.color-options');
    const fontSelect = document.getElementById('fontSelect');
    const signaturePreview = document.getElementById('signaturePreview');
    const copySignatureBtn = document.getElementById('copySignature');

    // State
    let activeColor = '#6C5DD3';
    let activeFont = 'Poppins';
    let activeSocials = [];

    // Functions
    function init() {
        setupTabs();
        setupSocialButtons();
        setupColorPicker();
        setupFontPicker();
        setupInputListeners();
        updateSignaturePreview();
    }

    function setupTabs() {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    function setupSocialButtons() {
        socialBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const social = btn.getAttribute('data-social');
                btn.classList.toggle('active');
                if (btn.classList.contains('active')) {
                    activeSocials.push(social);
                    addSocialInput(social);
                } else {
                    activeSocials = activeSocials.filter(s => s !== social);
                    removeSocialInput(social);
                }
                updateSignaturePreview();
            });
        });
    }

    function addSocialInput(social) {
        const input = document.createElement('input');
        input.type = 'url';
        input.id = `${social}Input`;
        input.placeholder = `${social.charAt(0).toUpperCase() + social.slice(1)} URL`;
        input.addEventListener('input', updateSignaturePreview);
        socialInputs.appendChild(input);
    }

    function removeSocialInput(social) {
        const input = document.getElementById(`${social}Input`);
        if (input) {
            input.remove();
        }
    }

    function setupColorPicker() {
        COLORS.forEach(color => {
            const colorOption = document.createElement('div');
            colorOption.classList.add('color-option');
            colorOption.style.backgroundColor = color;
            colorOption.addEventListener('click', () => {
                document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('active'));
                colorOption.classList.add('active');
                activeColor = color;
                updateSignaturePreview();
            });
            colorOptions.appendChild(colorOption);
        });
    }

    function setupFontPicker() {
        FONTS.forEach(font => {
            const option = document.createElement('option');
            option.value = font;
            option.textContent = font;
            fontSelect.appendChild(option);
        });
        fontSelect.addEventListener('change', (e) => {
            activeFont = e.target.value;
            updateSignaturePreview();
        });
    }

    function setupInputListeners() {
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', updateSignaturePreview);
        });
    }

    function updateSignaturePreview() {
        const fullName = document.getElementById('fullName').value;
        const jobTitle = document.getElementById('jobTitle').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const website = document.getElementById('website').value;

        let signatureHTML = `
            <div style="font-family: ${activeFont}, sans-serif; color: #333333;">
                <h2 style="color: ${activeColor}; margin-bottom: 5px;">${fullName}</h2>
                <p style="margin-bottom: 10px;">${jobTitle}</p>
                <p style="margin-bottom: 5px;">📞 ${phone}</p>
                <p style="margin-bottom: 5px;">✉️ ${email}</p>
                <p style="margin-bottom: 5px;">📍 ${address}</p>
                <p style="margin-bottom: 10px;">🌐 ${website}</p>
                <div style="display: flex; gap: 10px;">
        `;

        activeSocials.forEach(social => {
            const url = document.getElementById(`${social}Input`).value;
            signatureHTML += `<a href="${url}" style="color: ${activeColor};" target="_blank">${social.charAt(0).toUpperCase() + social.slice(1)}</a>`;
        });

        signatureHTML += `
                </div>
            </div>
        `;

        signaturePreview.innerHTML = signatureHTML;
    }

    copySignatureBtn.addEventListener('click', () => {
        const range = document.createRange();
        range.selectNode(signaturePreview);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        alert('Chữ ký đã được sao chép vào clipboard!');
    });

    // Initialize the application
    init();
