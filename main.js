onload = () => {
    document.body.classList.remove("container");

    const audio = document.getElementById("bg-music");
    const playButton = document.getElementById("play-button");
    let isMusicPlaying = false; // Track music state

    playButton.addEventListener("click", () => {
        toggleMusic();
        showNewMessage();
    });

    function toggleMusic() {
        if (!audio) return;

        if (isMusicPlaying) {
            audio.pause();
            playButton.classList.remove("pulsing");
        } else {
            audio.play();
            playButton.classList.add("pulsing");
        }
        isMusicPlaying = !isMusicPlaying;
    }

    function hideFlowersAndShowNote() {
        const flowers = document.querySelector(".flowers");
        if (flowers) {
            flowers.style.transition = "opacity 1s ease-out";
            flowers.style.opacity = "0";

            setTimeout(() => {
                flowers.style.display = "none";
            }, 1000);
        }

        if (!document.getElementById("messageContainer")) {
            const messageContainer = document.createElement("div");
            messageContainer.id = "messageContainer";
           
            messageContainer.style.transition = "opacity 1s ease-in";

            const Note = document.createElement('div');
            Note.innerText = "Happy Valentine's Day  Sarah";
            Note.style.fontSize = '65px';
            Note.style.fontFamily = 'Tangerine';
            Note.style.color = 'white';
            Note.style.textAlign = 'center';
            Note.style.marginTop = '20px';
            Note.style.position = 'fixed';
            Note.style.top = '20%';
            Note.style.left = '50%';
            Note.style.transform = 'translate(-50%, -50%)';
            Note.style.zIndex = '1000';
           

            const Note2 = document.createElement('div');
            Note2.innerText = "Lookin in your eyes that day on the dinner table, I just knew that you are the closest I will ever come to magic.";
            Note2.style.fontSize = '45px';
            Note2.style.fontFamily = 'Tangerine';
            Note2.style.color = 'white';
            Note2.style.textAlign = 'center';
            Note2.style.marginTop = '20px';
            Note2.style.position = 'fixed';
            Note2.style.top = '50%';
            Note2.style.left = '50%';
            Note2.style.transform = 'translate(-50%, -50%)';
            Note2.style.zIndex = '1000';

            const Note3 = document.createElement('div');
            Note3.innerText = "Click on the heart -------->>";
            Note3.style.fontSize = '35px';
            Note3.style.fontFamily = 'Tangerine';
            Note3.style.color = 'white';
            Note3.style.textAlign = 'center';
            Note3.style.marginTop = '20px';
            Note3.style.position = 'fixed';
            Note3.style.top = '80%';
            Note3.style.left = '50%';
            Note3.style.transform = 'translate(-50%, -50%)';
            Note3.style.zIndex = '1000';

            messageContainer.appendChild(Note);
            messageContainer.appendChild(Note2);
            messageContainer.appendChild(Note3);
            document.body.appendChild(messageContainer);
        }
    }

    function createStyledNote(text, fontSize) {
        const note = document.createElement("div");
        note.innerText = text;
        note.style.fontSize = fontSize;
        note.style.fontFamily = "Tangerine";
        note.style.marginTop = "20px";
        note.style.textAlign = "center";
        return note;
    }

    function showNewMessage() {
        const existingMessage = document.getElementById("messageContainer");

        if (existingMessage) {
            existingMessage.style.transition = "opacity 1s ease-out";
            existingMessage.style.opacity = "0";

            setTimeout(() => {
                existingMessage.remove();
                setTimeout(displayFinalMessage, 200); // Wait before displaying the final message
            }, 1000);
        } else {
            displayFinalMessage();
        }
    }

    function displayFinalMessage() {

        

        const newMessage = document.createElement("div");
        newMessage.innerText = "Maybe we talk less, but when we do, I feel heard, I feel someone who cares, I just feel special. \n\n Maybe im the luckiest person alive, maybe I'm not. But from the bottom my heart, I dedicate this song to you.\n\n Stay Blessed Sarah.";
        newMessage.style.fontSize = "50px";
        newMessage.style.fontFamily = "Tangerine";
        newMessage.style.color = "white";
        newMessage.style.textAlign = "center";
        newMessage.style.position = "fixed";
        newMessage.style.top = "50%";
        newMessage.style.left = "50%";
        newMessage.style.transform = "translate(-50%, -50%)";
        newMessage.style.zIndex = "1000";
        newMessage.style.opacity = "0";
        newMessage.style.transition = "opacity 1s ease-in";

        document.body.appendChild(newMessage);
        

        setTimeout(() => {
            newMessage.style.opacity = "1"; // Fade in effect
        }, 100);
    }

    setTimeout(hideFlowersAndShowNote, 8000);
};
