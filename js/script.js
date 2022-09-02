const form = document.getElementById('generate-form')
const qr = document.getElementById('qrcode')
const spinner = document.getElementById("spinner")
const pasteBtn = document.getElementById("paste")
const size = document.getElementById('size')


const OnGenerateSubmit = (e) => {
  e.preventDefault();
  clearUI();

  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;

  showSpinner();

  
  setTimeout(() =>{
    hideSpinner();
    qrGenerate(url, size)
  }, 500)


  
}


const qrGenerate = (url, size) => {

  // new QRCode(document.getElementById("qrcode"), url);
  new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: size,
    height: size,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });

}

const showSpinner = () => {
  spinner.classList.remove("hidden");

}
const hideSpinner = () => {
  spinner.classList.add("hidden");

}

const clearUI = () => {
  qr.innerHTML = '';
}

const paste = () => {

  const url = document.getElementById('url');
  navigator.clipboard.readText().then((clipText) => (url.value = clipText));
}
pasteBtn.addEventListener('click', paste);
size.addEventListener('change', () => {
  console.log(size.value)
});
form.addEventListener('submit', OnGenerateSubmit);