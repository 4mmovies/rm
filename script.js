function redirectToLink() {
    // Remplacez l'URL ci-dessous par l'URL vers laquelle vous souhaitez rediriger
    var linkUrl = "https://maglit.me/k327";
    window.open(linkUrl, '_blank');
}

document.addEventListener("DOMContentLoaded", function () {
const videoURLs = [
    'https://dft3r5.zbigz.com/core2/zstream.php?dl=c_h81RN5qsH3NhIeULt_YljZsTING9cftm52IBb_L_OdiQufOPersXISI9mWz_R-lVCXsvI8k2vywBbROAqSIGqGUrjolu1VTyrCtlpGpdlkPQA8SR2_IdUpbHZcGPnweW9T9mFlcdXKm8G0MsxvNB2me-I76xb5M9CT-ZffJ6GfrBCz7JsHze_7dUcn1xs4dJyaUgi4xEPjbh9nVQemLz9-hrsKRa7XSI-lHd7IRZTRLA6rfrU6pEWoem71G6t79NiYaMZpaQnx4v3sHYawfRA3BYH98hVatH2uTS61hmZxOjMdNB5hR9EJeVh9Tz7QTNjGCFj8Qrvjv1KwE2WdeOLFup-2aOtoWYJij6t0ntkePgKiienFEYk%3D',
];

let currentVideoIndex = 0;
const videoElement = document.getElementById('videoElement');
const sourceElement = videoElement.querySelector('source');

function loadVideo(index) {
    if (index >= 0 && index < videoURLs.length) {
        const videoURL = videoURLs[index];
        sourceElement.src = videoURL;
        videoElement.load();
        videoElement.play();
        currentVideoIndex = index;
    }
}
loadVideo(currentVideoIndex);

});

// Définir le tableau des clés de confirmation
let confirmationKeys = ['M61KJ38GN59XC40PR27QI30FS25UB68AH17D'];
let passwordConfirmed = false;

// Vérifier si la clé est déjà confirmée
document.addEventListener("DOMContentLoaded", function () {
    const lastClosedTime = localStorage.getItem("lastClosedTime");
    if (!lastClosedTime || (Date.now() - parseInt(lastClosedTime) > 48 * 60 * 60 * 1000)) {
        setTimeout(function () {
            document.getElementById('passwordModal').style.display = 'none';
        }, 50000);
    } else {
        enableDownload();
        enableIframeContainerIfConfirmed();
    }
});

function closeModal() {
    document.getElementById('passwordModal').style.display = 'none';
    localStorage.setItem("lastClosedTime", Date.now().toString());
    enableDownloadIfConfirmed();
    enableIframeContainerIfConfirmed();
}

function enableDownloadIfConfirmed() {
    // Vérifier si la clé est déjà confirmée
    if (localStorage.getItem("downloadConfirmed")) {
        enableDownload();
    }
}

// Fonction pour vérifier et confirmer le mot de passe
function confirmPassword() {
    if (!passwordConfirmed) {
        let enteredPassword = document.getElementById('passwordInput').value;

        // Vérifier si le mot de passe est dans le tableau des clés de confirmation
        if (confirmationKeys.includes(enteredPassword)) {
            alert('The key has been successfully confirmed! 48 hours unlimited access. The window will close automatically.');
            enableDownload();
            passwordConfirmed = true; // Marquer le mot de passe comme confirmé
            closeModal();

            // Afficher la classe "iframe-container"
            enableIframeContainer();
        } else {
            alert('Invalid key entered');
        }
    }
}

// Fonction pour simuler le collage de la clé depuis le Presse-papiers
function pasteKey() {
    if (!passwordConfirmed) {
        navigator.clipboard.readText().then(function(pastedText) {
            document.getElementById('passwordInput').value = pastedText;
        });
    }
}

// Fonction pour activer le téléchargement
function enableDownload() {
    var videoElement = document.getElementById("videoElement");
    videoElement.removeAttribute("oncontextmenu");
    videoElement.removeAttribute("controlsList");

    // Vérifie si le message a déjà été affiché après un rechargement
    if (!sessionStorage.getItem("downloadEnabledMessageShown")) {
        alert("Success! Download enabled in the three dots below.");
        sessionStorage.setItem("downloadEnabledMessageShown", "true");
    }

    // Stocker l'état du téléchargement dans le localStorage
    localStorage.setItem("downloadConfirmed", "true");
}

function enableIframeContainer() {
    document.querySelector('.iframe-container').style.display = 'block';
    // Stocker l'état de l'iframe-container dans le localStorage
    localStorage.setItem("iframeContainerEnabled", "true");
}

function enableIframeContainerIfConfirmed() {
    // Vérifier si l'iframe-container est déjà activé
    if (localStorage.getItem("iframeContainerEnabled")) {
        enableIframeContainer();
    }
}

function afficherIframe(index) {
    var iframes = document.querySelectorAll('.iframe-wrapper iframe');
        iframes.forEach(function(iframe) {
        iframe.style.display = 'none';
    });

    iframes[index].style.display = 'block';

    setTimeout(function() {
    var nextIndex = (index + 1) % iframes.length;
        afficherIframe(nextIndex);
    }, 20000);
}

window.onload = function() {
    setTimeout(function() {
        afficherIframe(0);
    }, 3000);
};

document.addEventListener('keydown', function (event) {
// Gestionnaire d'événement pour la touche F12 et combinaison spécifique
if (event.key === "F12" || ((event.ctrlKey || event.metaKey) && event.shiftKey && (event.key === "I" || event.key === "J"))) {
    // Supprimer la balise du lecteur vidéo
    if (videoElement) {
        videoElement.parentNode.removeChild(videoElement);
    }
}

// Gestionnaire d'événement pour la combinaison "Ctrl + S"
if (event.ctrlKey && event.key === 'S') {
    sourceElement.src = '';
    videoElement.load();
    alert("Error");
}

// Gestionnaire d'événement pour la combinaison "Ctrl + S" avec suppression après un court délai
if (event.ctrlKey && event.key === "s") {
    event.preventDefault();

    setTimeout(function () {
    if (videoElement) {
        videoElement.parentNode.removeChild(videoElement);
    }
    }, 1);
}

// Gestionnaire d'événement pour la combinaison "Ctrl + Shift + C"
if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'C') {
    // Supprimer la balise du lecteur vidéo
    if (videoElement) {
        videoElement.parentNode.removeChild(videoElement);
    }
}

// Gestionnaire d'événement pour la combinaison "Cmd + Shift + C" (Mac)
if (event.metaKey && event.shiftKey && event.key === 'C') {
    // Supprimer la balise du lecteur vidéo
    if (videoElement) {
        videoElement.parentNode.removeChild(videoElement);
    }
}
});

document.addEventListener("DOMContentLoaded", function () {
const videoContainer = document.getElementById("videoContainer");
});

document.addEventListener("contextmenu", function (event) {
event.preventDefault();

// Récupérer la position du clic
const x = event.clientX;
const y = event.clientY;

// Vérifier si le clic est à l'intérieur ou à l'extérieur du conteneur vidéo
const isInsideVideoContainer = isInside(x, y, videoContainer);

// Supprimer la balise vidéo et son conteneur si le clic droit se produit à l'intérieur ou à l'extérieur du lecteur vidéo
const videoElement = document.getElementById('videoElement');
if (videoElement) {
    videoElement.parentNode.removeChild(videoElement);
}
if (videoContainer && isInsideVideoContainer) {
    videoContainer.parentNode.removeChild(videoContainer);
}
});

function isInside(x, y, element) {
const rect = element.getBoundingClientRect();
return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

document.addEventListener('DOMContentLoaded', function () {
// Récupérez l'élément du lecteur vidéo
var videoContainer = document.getElementById('videoContainer');

// Récupérez l'élément de la fenêtre modale
var modal = document.getElementById('passwordModal');

// Récupérez la hauteur du lecteur vidéo et ajustez la position de la fenêtre modale
function adjustModalPosition() {
    var videoHeight = videoContainer.offsetHeight;
    var modalContent = document.querySelector('.modal-content');
    modalContent.style.top = videoHeight / 2 + 'px';
}
});