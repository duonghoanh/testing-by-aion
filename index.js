
// active các tab và form thông tin
const tabs = document.querySelectorAll(".tab");
const sidebars = document.querySelectorAll(".sidebar");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    sidebars.forEach((sidebar) => sidebar.classList.remove("active"));
    tab.classList.add("active");
    sidebars[index].classList.add("active");
  });
});

// active tabbar và form thông tin
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#name").addEventListener("input", function (e) {
      document.querySelector(".card h2").textContent = e.target.value;
    });

    // document
    //   .querySelector("#nickname")
    //   .addEventListener("input", function (e) {
    //     document.querySelector(".card h2").textContent = e.target.value;
    //   });

    document
      .querySelector("#position")
      .addEventListener("input", function (e) {
        document.querySelector(".card .position").textContent =
          e.target.value;
      });

    document.querySelector("#phone").addEventListener("input", function (e) {
      document.querySelector(
        ".card .card-text p:nth-child(3)"
      ).textContent = `Điện thoại: ${e.target.value}`;
    });

    document.querySelector("#email").addEventListener("input", function (e) {
      document.querySelector(
        ".card .card-text p:nth-child(4)"
      ).textContent = `Email: ${e.target.value}`;
    });

    document
      .querySelector("#address")
      .addEventListener("input", function (e) {
        document.querySelector(
          ".card .card-text p:nth-child(5)"
        ).textContent = `Địa chỉ: ${e.target.value}`;
      });

    document
      .querySelector("#website")
      .addEventListener("input", function (e) {
        document.querySelector(
          ".card .card-text p:nth-child(6)"
        ).textContent = `Website: ${e.target.value}`;
      });
  });

//   choose icon social
// khi chọn icon social thì choose icon đó và hiển thị input tương ứng
const socialIconsSidebar = document.querySelectorAll(".link-item__icon a");
const socialIconsCard = document.querySelectorAll(".social-icons .social-icon");
const socialInput = document.querySelectorAll(".link-item__input");
const linkSocialCard = document.querySelectorAll(".social-links");

socialIconsSidebar.forEach((socialIcon, index) => {
    socialIcon.addEventListener("click", () => {
       if (socialIcon.classList.contains("active")) {
           socialIcon.classList.remove("active");
           socialIconsCard[index].classList.remove("choose");
           socialIconsCard[index].classList.remove("active");
           linkSocialCard[index].classList.remove("active");
           socialInput[index].value = "";
       } else {
           socialIcon.classList.add("active");
              socialIconsCard[index].classList.add("choose");
              linkSocialCard[index].classList.add("active");
                linkSocialCard[index].textContent = socialInput[index].value;
       }
    });
});


//  thay đổi màu sắc, font form thông tin
const colors = document.querySelectorAll(".color");
colors.forEach((color) => {
    color.addEventListener("click", () => {
        if (color.classList.contains("choose")) {
            color.classList.remove("choose");
        }else {
            colors.forEach((color) => color.classList.remove("choose"));
            color.classList.add("choose");
        }
       

        document.querySelector(".card-text").style.color = color.style.backgroundColor;
    });
});

const fonts = document.querySelectorAll(".font");
fonts.forEach((font) => {
    font.addEventListener("click", () => {
        document.querySelector(".card-text p").style.fontFamily = font.style.fontFamily;
    });
});

// Handle Copy giao diện form thông tin đã làm => paste được qua form Chữ ký sở Gmail
const copySignatureBtn = document.querySelector('.copy-button');
copySignatureBtn.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNode(signaturePreview);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Chữ ký đã được sao chép vào clipboard!');
});
