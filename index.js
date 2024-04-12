var currentImage = 1;
var contentHobbyActive = false;


function selectContent(contentID){
    var sectionList = document.querySelectorAll("section.content");
    contentHobbyActive = false
    for (let section of sectionList) {
        section.classList.add('hidden');
        let sectionId = section.id.toLowerCase();
        if (sectionId == contentID.toLowerCase()){
            section.classList.remove('hidden');
        }

        if (sectionId == "hobby"){
            contentHobbyActive = true;
        }
    }
}



function switchImage(imageId){
    if (! contentHobbyActive){
        return false;
    }

    currentImage = imageId;
    if (currentImage > 4) {
        currentImage = imageId = 1;
    }
    let images = document.querySelectorAll(".carousel img");
    for (let image of images){
        image.classList.add('hiddenImage');
        image.classList.remove('visible');
    }

    let nextImage = document.getElementById("image"+imageId);
    nextImage.classList.remove('hiddenImage');
    nextImage.classList.add('visible');
    
}
let interval = setInterval(() => {
    switchImage(currentImage + 1);
}, 3000);


function copySample(element){
  if (!element) {
    return;
  }
  let  preElement = element.querySelector("div");
  if (!preElement) {
    return;
  }

  let text = preElement.textContent;
  navigator.clipboard.writeText(text);
}