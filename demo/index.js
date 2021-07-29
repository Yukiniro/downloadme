const downloadme = window.downloadme;

const url = "./resource/test1.jpg";
const buttonPath = document.getElementById("download-path");
const buttonUrl = document.getElementById("download-bloburl");
const buttonFile = document.getElementById("download-file");
const buttonBase = document.getElementById("download-base64");

function getImage() {
  return fetch(url)
    .then(data => {
      if (data.status === 200) {
        return data.blob();
      }
    })
    .then(blob => {
      return blob;
    });
}

buttonPath.addEventListener("click", () => {
  downloadme.download(url, { name: "test1.jpg" });
});

buttonFile.addEventListener("click", () => {
  getImage().then(file => {
    downloadme.download(file, { name: "test1.jpg" });
  });
});

buttonUrl.addEventListener("click", () => {
  getImage().then(file => {
    downloadme.download(URL.createObjectURL(file), { name: "test1.jpg" });
  });
});

buttonBase.addEventListener("click", () => {
  downloadme.download(base64, { name: "test1.jpg" });
});