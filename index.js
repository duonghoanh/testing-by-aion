document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("input", updateCard);
    });

    function updateCard() {
        const fullName = document.querySelector("input[name='fullName']").value;
        const nickname = document.querySelector("input[name='nickname']").value;
        const position = document.querySelector("input[name='position']").value;
        const phone = document.querySelector("input[name='phone']").value;
        const email = document.querySelector("input[name='email']").value;
        const address = document.querySelector("input[name='address']").value;
        const website = document.querySelector("input[name='website']").value;

        document.querySelector(".profile-info-details_name").textContent = fullName;
        document.querySelector(".profile-info-details_position").textContent = position;
        document.querySelector(".profile-info-details_phone span").nextSibling.textContent = ` ${phone}`;
        document.querySelector(".profile-info-details_email span").nextSibling.textContent = ` ${email}`;
        document.querySelector(".profile-info-details_address span").nextSibling.textContent = ` ${address}`;
        document.querySelector(".profile-info-details_website span").nextSibling.textContent = ` ${website}`;
    }
});

