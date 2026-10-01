function showMessage() {

    const message = document.getElementById("message");
    const button = document.getElementById("deployBtn");

    button.innerHTML = "⏳ Deploying...";

    message.classList.remove("show");

    setTimeout(function () {

        message.innerHTML =
            "✓ Deployment is working successfully!";

        message.classList.add("show");

        button.innerHTML = "🚀 Deployment Successful";

    }, 1500);
}


/* 3D Card Effect */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", function(e) {

        const rect = card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 12;

        const rotateY =
            (centerX - x) / 12;

        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)
             scale(1.04)`;
    });

    card.addEventListener("mouseleave", function() {

        card.style.transform =
            "perspective(700px) rotateX(0) rotateY(0) translateY(0) scale(1)";
    });

});