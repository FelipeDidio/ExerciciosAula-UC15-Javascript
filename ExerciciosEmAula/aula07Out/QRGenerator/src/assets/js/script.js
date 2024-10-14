const wrapper = document.querySelector(".wrapper");
const form = wrapper.querySelector("form");
const qrInput = document.querySelector("#qrInput");
const generateBtn = form.querySelector("button");
const qrImg = wrapper.querySelector(".qr-code img");
let preValue;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let qrValue = qrInput.value.trim();

  if (!qrValue || preValue == qrValue) {
    alert("Preencha o campo para gerar o QR-Code");
    return;
  }
  preValue = qrValue;
  generateBtn.innerText = "Gerando QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "QR Code Gerado";
    qrImg.removeAttribute("aria-hidden");
  });
});

qrInput.addEventListener("Keyup", () => {
  if (!qrInput.value.trim()) {
    wrapper.classList.remove("active");
    preValue = "";
    generateBtn.innerHTML = "Gerar QR Code";
  }
});
