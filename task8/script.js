// ===============================
// Reusable Button Component
// ===============================

function createButton({ text, variant, onClick }) {

    const button = document.createElement("button");

    button.textContent = text;

    button.className = `btn ${variant}`;

    button.addEventListener("click", onClick);

    return button;
}

// ===============================
// Button Demo
// ===============================

const buttonDemo = document.getElementById("button-demo");

buttonDemo.appendChild(
    createButton({
        text: "Primary Button",
        variant: "primary",
        onClick: () => alert("Primary Button Clicked")
    })
);

buttonDemo.appendChild(
    createButton({
        text: "Success Button",
        variant: "success",
        onClick: () => alert("Success Button Clicked")
    })
);

buttonDemo.appendChild(
    createButton({
        text: "Danger Button",
        variant: "danger",
        onClick: () => alert("Danger Button Clicked")
    })
);
// ===============================
// Reusable Card Component
// ===============================

function createCard({ title, description, buttonText }) {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;

    const button = createButton({
        text: buttonText,
        variant: "primary",
        onClick: () => alert(`${title} Clicked`)
    });

    card.appendChild(button);

    return card;
}

// ===============================
// Card Demo
// ===============================

const cardDemo = document.getElementById("card-demo");

cardDemo.appendChild(
    createCard({
        title: "HTML",
        description: "Structure of web pages.",
        buttonText: "Learn More"
    })
);

cardDemo.appendChild(
    createCard({
        title: "CSS",
        description: "Styles and layouts for websites.",
        buttonText: "Explore"
    })
);

cardDemo.appendChild(
    createCard({
        title: "JavaScript",
        description: "Adds interactivity to websites.",
        buttonText: "Start"
    })
);
// ===============================
// Reusable Modal Component
// ===============================

function createModal({ title, content }) {

    const modal = document.createElement("div");

    modal.className = "modal";

    modal.innerHTML = `
        <div class="modal-content">
            <h2>${title}</h2>
            <p>${content}</p>
            <button class="btn danger">Close</button>
        </div>
    `;

    const closeBtn = modal.querySelector("button");

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    document.body.appendChild(modal);

    return {
        open() {
            modal.style.display = "flex";
        }
    };

}
// ===============================
// Modal Demo
// ===============================

const modal = createModal({

    title: "Welcome",

    content: "This is a reusable modal component."

});

const modalDemo = document.getElementById("modal-demo");

modalDemo.appendChild(

    createButton({

        text: "Open Modal",

        variant: "primary",

        onClick: () => modal.open()

    })

);

modalDemo.appendChild(

    createButton({

        text: "Open Again",

        variant: "success",

        onClick: () => modal.open()

    })

);// ===============================
// Reusable Toast Component
// ===============================

function createToast({ message }) {

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;

    const container = document.getElementById("toast-container");

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);

}// ===============================
// Toast Demo
// ===============================

const toastDemo = document.getElementById("toast-demo");

toastDemo.appendChild(

    createButton({

        text: "Success Toast",

        variant: "success",

        onClick: () => createToast({

            message: "Data saved successfully!"

        })

    })

);

toastDemo.appendChild(

    createButton({

        text: "Error Toast",

        variant: "danger",

        onClick: () => createToast({

            message: "Something went wrong!"

        })

    })

);

toastDemo.appendChild(

    createButton({

        text: "Info Toast",

        variant: "primary",

        onClick: () => createToast({

            message: "Welcome to the UI Kit!"

        })

    })

);