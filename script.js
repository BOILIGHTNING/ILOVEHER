document.addEventListener("DOMContentLoaded", function () {
    const forgiveBtn = document.getElementById("forgiveBtn");
    const transitionScreen = document.getElementById("transitionScreen");
    const kissAnimation = document.getElementById("kissAnimation");
    const kissSound = document.getElementById("kissSound");
    const finalMessage = document.getElementById("finalMessage");
    const message = document.querySelector(".message");
    const bouquet = document.querySelector(".bouquet");

    forgiveBtn.addEventListener("click", function () {
        // Hide "I'm sorry..." text
        message.style.opacity = "0";

        // Hide bouquet and forgive button
        bouquet.style.visibility = "hidden";
        forgiveBtn.style.visibility = "hidden";

        // Fade to black
        transitionScreen.style.visibility = "visible";
        transitionScreen.style.opacity = "1";

        setTimeout(() => {
            // Show the kiss animation
            kissAnimation.style.visibility = "visible";
            kissAnimation.style.opacity = "1";
            kissSound.play();

            setTimeout(() => {
                // Show the love message
                kissAnimation.style.opacity = "0";
                setTimeout(() => {
                    kissAnimation.style.visibility = "hidden";
                    transitionScreen.style.opacity = "0";
                    transitionScreen.style.visibility = "hidden";
                    finalMessage.style.display = "block";
                }, 1000);
            }, 2000);
        }, 2000);
    });
});
