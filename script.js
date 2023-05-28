document.getElementById("videoForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
 
  var videoUrl = document.getElementById("videoUrl").value;
  
  playVideoInVRChat(videoUrl);
});
