const localVideo = document.querySelector(".local-video");
const remoteVideo = document.querySelector(".remote-video");
const endCallBtn = document.querySelector(".end-call-btn");

navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    localVideo.srcObject = stream;
  })
  .catch((error) => {
    console.error("Error al obtener el stream:", error);
  });

endCallBtn.addEventListener("click", () => {
  localVideo.srcObject.getTracks().forEach((track) => {
    track.stop();
  });
  localVideo.style.display = "none";
  remoteVideo.style.display = "none";
  alert("Llamada Finalizada");
});
