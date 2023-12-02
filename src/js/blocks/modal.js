export function showModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    localStorage.setItem("showModal", true);
    
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

export function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

export function modal(triggerSelector, modalSelector, modalTimerId) {
    const btns = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);

    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            showModal(modalSelector, modalTimerId);
        });
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.getAttribute("data-close") == "") {
            closeModal(modalSelector)
        } 
    });

    document.addEventListener("keydown", (e) => {
        if(e.code === "Escape" && modal.classList.contains("show")) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        const showModal = localStorage.getItem("showModal");
        if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1 && !showModal) {
            showModal(modalSelector, modalTimerId);
            document.removeEventListener("scroll", showModalByScroll);
        }
    }

    document.addEventListener("scroll", showModalByScroll);
}