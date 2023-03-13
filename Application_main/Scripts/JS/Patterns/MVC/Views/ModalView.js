class ModalView
{
    static modalDialogSize;
    static modalPNL;
    static modalDialogPNL;
    static modalContentPNL;
    static isResetingModal;

    static Create()
    {
        this.Setup();
    }
    static Delete()
    {
        if (ModalView.modalPNL != null)
            ModalView.modalPNL.remove();
    }
    static Reset()
    {
        this.isResetingModal = true;

        this.modalDialogPNL.classList.remove(this.modalDialogSize);

        while (this.modalContentPNL.firstChild)
            this.modalContentPNL.removeChild(this.modalContentPNL.lastChild);

        this.isResetingModal = false;
    }

    static Setup()
    {
        this.modalPNL = document.body.appendChild(document.createElement("div"));
        this.modalPNL.classList.add("modal", "fade");
        this.modalPNL.id = "modalContent";
        this.modalPNL.tabIndex = -1;
        this.modalPNL.role = "dialog";

        this.modalDialogPNL = this.modalPNL.appendChild(document.createElement("div"));
        this.modalDialogPNL.classList.add("modal-dialog", "modal-dialog-centered");
        this.modalDialogPNL.role = "document";

        this.modalContentPNL = this.modalDialogPNL.appendChild(document.createElement("div"));
        this.modalContentPNL.classList.add("row", "d-flex", "flex-row", "m-0", "p-0", "modal-content");
        this.modalContentPNL.id = "ProjectsModalContent";
    }

    static ShowImageModal(modalDialogSize, numberOfSlides, carouselContentPath, descriptionTitle, descriptionParagraph)
    {
        function OnModalClose()
        {
            document.body.style.overflow = "auto";
            setTimeout(() => ModalView.Reset(), 500);
        }

        let carouselPNL, carouselIndicatorsPNL, carouselInnerPNL, descriptionPNL, descriptionTitleTMP, descriptionParagraphTMP, carouselPreviousBTN, carouselNextBTN, carouselPreviousButtonIconIMG, carouselPreviousButtonOverlayTMP, carouselNextButtonIconIMG, carouselNextButtonOverlayTMP, buttonRow, closeButton;

        this.modalDialogSize = modalDialogSize;
        this.modalDialogPNL.classList.add(this.modalDialogSize);

        carouselPNL = this.modalContentPNL.appendChild(document.createElement("div"));
        carouselPNL.classList.add("m-0", "p-0", "carousel", "slide");
        carouselPNL.id = "ProjectsModalCarousel";
        carouselPNL.dataset.bsRide = "carousel";
        carouselIndicatorsPNL = carouselPNL.appendChild(document.createElement("div"));
        carouselIndicatorsPNL.classList.add("carousel-indicators");
        carouselInnerPNL = carouselPNL.appendChild(document.createElement("div"));
        carouselInnerPNL.classList.add("carousel-inner");
        carouselPreviousBTN = carouselPNL.appendChild(document.createElement("button"));
        carouselPreviousBTN.classList.add("carousel-control-prev");
        carouselPreviousBTN.type = "button";
        carouselPreviousBTN.dataset.bsTarget = "#ProjectsModalCarousel";
        carouselPreviousBTN.dataset.bsSlide = "prev";
        carouselPreviousButtonIconIMG = carouselPreviousBTN.appendChild(document.createElement("span"));
        carouselPreviousButtonIconIMG.classList.add("carousel-control-prev-icon");
        carouselPreviousButtonIconIMG.ariaHidden = "true";
        carouselPreviousButtonOverlayTMP = carouselPreviousBTN.appendChild(document.createElement("span"));
        carouselPreviousButtonOverlayTMP.classList.add("sr-only");
        carouselPreviousButtonOverlayTMP.innerHTML =  Language.GetElementByLanguage("k_PortfolioPage_ProjectsCarouselPreviousButton");
        carouselNextBTN = carouselPNL.appendChild(document.createElement("button"));
        carouselNextBTN.classList.add("carousel-control-next");
        carouselNextBTN.type = "button";
        carouselNextBTN.dataset.bsTarget = "#ProjectsModalCarousel";
        carouselNextBTN.dataset.bsSlide = "next";
        carouselNextButtonIconIMG = carouselNextBTN.appendChild(document.createElement("span"));
        carouselNextButtonIconIMG.classList.add("carousel-control-next-icon");
        carouselNextButtonIconIMG.ariaHidden = "true";
        carouselNextButtonOverlayTMP = carouselNextBTN.appendChild(document.createElement("span"));
        carouselNextButtonOverlayTMP.classList.add("sr-only");
        carouselNextButtonOverlayTMP.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_ProjectsCarouselNextButton");
        descriptionPNL = this.modalContentPNL.appendChild(document.createElement("div"));
        descriptionPNL.classList.add("m-0", "p-0");
        descriptionPNL.id = "ProjectsModalDescription";
        let descriptionHeaderPNL = descriptionPNL.appendChild(document.createElement("div"));
        descriptionHeaderPNL.classList.add("row", "m-0", "p-0", "text-center");
        let closeBTN = descriptionHeaderPNL.appendChild(document.createElement("button"));
        closeBTN.classList.add("w-95", "h3", "m-0", "p-0", "text-end");
        closeBTN.type = "button";
        closeBTN.dataset.dismiss="modal";
        closeBTN.ariaLabel = "Close";
        closeBTN.onclick = () => $("#modalContent").modal("hide");
        let closeBTNSpan = closeBTN.appendChild(document.createElement("span"));
        closeBTNSpan.ariaHidden = true;
        closeBTNSpan.innerHTML = "&times;"
        descriptionTitleTMP = descriptionHeaderPNL.appendChild(document.createElement("h4"));
        descriptionTitleTMP.classList.add("w-100", "mx-0", "my-0", "px-5", "py-0", "text-center");
        descriptionTitleTMP.innerHTML = Language.GetElementByLanguage(descriptionTitle);
        let dateTMP = descriptionHeaderPNL.appendChild(document.createElement("p"));
        dateTMP.classList.add("col-12", "h6", "mx-auto", "mt-1", "mb-0", "p-0", "text-opaque-light");
        dateTMP.innerHTML = "Atualizado em 13/03/2023 as 11h21";
        let descriptionContentPNL = descriptionPNL.appendChild(document.createElement("div"));
        descriptionContentPNL.classList.add("m-0", "p-0");
        descriptionParagraphTMP = descriptionContentPNL.appendChild(document.createElement("p"));
        descriptionParagraphTMP.classList.add("mx-0", "mt-4", "mb-0", "px-5", "py-0", "text-justify");
        descriptionParagraphTMP.innerHTML = Language.GetElementByLanguage(descriptionParagraph);
        let descriptionFooterPNL = descriptionPNL.appendChild(document.createElement("div"));
        descriptionFooterPNL.classList.add("row", "m-0", "p-0", "text-center");

        $("#modalContent").on('hide.bs.modal', OnModalClose);
        $("#ProjectsModalCarousel").carousel("cycle");

        for (let i = 0; i < numberOfSlides; i++)
        {
            let slideIndicator = carouselIndicatorsPNL.appendChild(document.createElement("button"));
            slideIndicator.type = "button";
            slideIndicator.dataset.bsTarget = "#ProjectsModalCarousel";
            slideIndicator.dataset.bsSlideTo = `${i}`;

            let slidePNL = carouselInnerPNL.appendChild(document.createElement("div"));
            slidePNL.classList.add("carousel-item");

            let slideIMG = slidePNL.appendChild(document.createElement("img"));
            slideIMG.classList.add("d-block", "w-100")
            slideIMG.src = `${carouselContentPath}${i + 1}.png`;
            slideIMG.alt = "Slide";

            if (i !== 0) continue;
            slidePNL.classList.add("active");
            slideIndicator.classList.add("active");
        }
    }
}