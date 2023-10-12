function enlargeImage(img) {
    // Create a div element for the enlarged image and add necessary styles
    var enlargedDiv = document.createElement("div");
    enlargedDiv.classList.add("enlarged");

    // Create a new image element for the enlarged image
    var enlargedImg = document.createElement("img");
    enlargedImg.src = img.src;

    // Add the enlarged image to the div
    enlargedDiv.appendChild(enlargedImg);

    // Add the div to the document body
    document.body.appendChild(enlargedDiv);

    // Allow users to close the enlarged image by clicking anywhere on it
    enlargedDiv.addEventListener("click", function () {
        // Réduire l'image avec un effet de transition
        enlargedImg.style.transform = "translate(-50%, -50%) scale(0.1)"; // L'effet de zoom final est de 0.1 (très petit)

        // Supprimer le div agrandi après la fin de la transition
        enlargedDiv.addEventListener("transitionend", function () {
            document.body.removeChild(enlargedDiv);
        });
    });

    // Appliquer un léger délai pour activer la transition du zoom
    setTimeout(function () {
        enlargedImg.style.transform = "translate(-50%, -50%) scale(1)"; // L'effet de zoom initial est de 1 (normal)
    }, 0);
}
