class ModalView
{
    static modalDialogSize;
    static modalPNL;
    static modalDialogPNL;
    static modalContentPNL;
    static carouselPNL;
    static carouselIndicatorsPNL;
    static carouselInnerPNL;
    static descriptionPNL;
    static descriptionTitleTMP;
    static descriptionParagraphTMP;

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
        ModalView.descriptionTitleTMP.innerHTML = ModalView.descriptionParagraphTMP.innerHTML = "";
        ModalView.modalDialogPNL.classList.remove(ModalView.modalDialogSize);

        while (ModalView.carouselIndicatorsPNL.firstChild)
            ModalView.carouselIndicatorsPNL.removeChild(ModalView.carouselIndicatorsPNL.lastChild);

        while (ModalView.carouselInnerPNL.firstChild)
            ModalView.carouselInnerPNL.removeChild(ModalView.carouselInnerPNL.lastChild);
    }

    static Setup()
    {
        this.SetupModalBody();
        this.SetupModalCarousel();
        this.SetupModalDescription();
    }
    static Show()
    {
        this.ShowModalCarousel();
        this.ShowModalDescription();
    }
    static SetupModalBody()
    {
        this.modalPNL = document.body.appendChild(document.createElement("div"));
        this.modalDialogPNL = this.modalPNL.appendChild(document.createElement("div"));
        this.modalContentPNL = this.modalDialogPNL.appendChild(document.createElement("div"));

        this.modalPNL.classList.add("modal", "fade");
        this.modalPNL.id = "modalContent";
        this.modalPNL.role = "dialog";
        this.modalDialogPNL.classList.add("modal-dialog", "modal-dialog-centered");
        this.modalContentPNL.classList.add("row", "d-flex", "flex-row", "m-0", "p-0", "modal-content");

        $(this.modalPNL).on('hide.bs.modal', function ()
        {
            document.body.style.overflow = "auto";
            setTimeout(ModalView.Reset, 500);
        });
    }
    static SetupModalCarousel()
    {
        let carouselPreviousBTN, carouselNextBTN, carouselPreviousButtonIconIMG, carouselPreviousButtonOverlayTMP, carouselNextButtonIconIMG, carouselNextButtonOverlayTMP;

        this.carouselPNL = this.modalContentPNL.appendChild(document.createElement("div"));
        this.carouselIndicatorsPNL = this.carouselPNL.appendChild(document.createElement("div"));
        this.carouselInnerPNL = this.carouselPNL.appendChild(document.createElement("div"));
        carouselPreviousBTN = this.carouselPNL.appendChild(document.createElement("button"));
        carouselNextBTN = this.carouselPNL.appendChild(document.createElement("button"));
        carouselPreviousButtonIconIMG = carouselPreviousBTN.appendChild(document.createElement("span"));
        carouselPreviousButtonOverlayTMP = carouselPreviousBTN.appendChild(document.createElement("span"));
        carouselNextButtonIconIMG = carouselNextBTN.appendChild(document.createElement("span"));
        carouselNextButtonOverlayTMP = carouselNextBTN.appendChild(document.createElement("span"));

        this.carouselPNL.classList.add("m-0", "p-0", "carousel", "slide");
        this.carouselPNL.id = "modalCarousel";
        this.carouselPNL.dataset.bsRide = "carousel";
        this.carouselIndicatorsPNL.classList.add("carousel-indicators");
        this.carouselInnerPNL.classList.add("carousel-inner");
        carouselPreviousBTN.classList.add("carousel-control-prev");
        carouselPreviousBTN.type = "button";
        carouselPreviousBTN.dataset.bsTarget = "#modalCarousel";
        carouselPreviousBTN.dataset.bsSlide = "prev";
        carouselNextBTN.classList.add("carousel-control-next");
        carouselNextBTN.type = "button";
        carouselNextBTN.dataset.bsTarget = "#modalCarousel";
        carouselNextBTN.dataset.bsSlide = "next";
        carouselPreviousButtonIconIMG.classList.add("carousel-control-prev-icon");
        carouselPreviousButtonIconIMG.ariaHidden = "true";
        carouselPreviousButtonOverlayTMP.classList.add("sr-only");
        carouselPreviousButtonOverlayTMP.innerHTML =  Language.GetElementByLanguage("k_PortfolioPage_ProjectsCarouselPreviousButton");
        carouselNextButtonIconIMG.classList.add("carousel-control-next-icon");
        carouselNextButtonIconIMG.ariaHidden = "true";
        carouselNextButtonOverlayTMP.classList.add("sr-only");
        carouselNextButtonOverlayTMP.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_ProjectsCarouselNextButton");
    }
    static SetupModalDescription()
    {
        let buttonRow, closeButton;

        this.descriptionPNL = this.modalContentPNL.appendChild(document.createElement("div"));
        buttonRow = this.descriptionPNL.appendChild(document.createElement("div"));
        this.descriptionTitleTMP = this.descriptionPNL.appendChild(document.createElement("h4"));
        this.descriptionParagraphTMP = this.descriptionPNL.appendChild(document.createElement("p"));
        closeButton = buttonRow.appendChild(document.createElement("button"));

        this.descriptionPNL.classList.add("m-0", "p-0");
        this.descriptionPNL.id = "modalDescription";
        buttonRow.classList.add("m-0", "p-0", "w-100", "text-end");
        this.descriptionTitleTMP.classList.add("mx-0", "my-4", "p-0", "text-center");
        this.descriptionParagraphTMP.classList.add("m-5", "p-0", "text-justify");
        closeButton.classList.add("m-0", "p-0");
        closeButton.innerHTML = "&times;"
        closeButton.type = "button";
        closeButton.dataset.dismiss="modal";
    }
    static ShowModalCarousel(carouselSize, numberOfSlides, carouselContentPath)
    {
        this.carouselPNL.classList.add(carouselSize);

        for (let i = 0; i < numberOfSlides; i++)
        {
            let slideIndicator = this.carouselIndicatorsPNL.appendChild(document.createElement("button"));
            let slidePNL = this.carouselInnerPNL.appendChild(document.createElement("div"));
            let slideIMG = slidePNL.appendChild(document.createElement("img"));

            slideIndicator.type = "button";
            slideIndicator.dataset.bsTarget = "#modalCarousel";
            slideIndicator.dataset.bsSlideTo = `${i}`;
            slidePNL.classList.add("carousel-item");
            slideIMG.classList.add("d-block", "w-100")
            slideIMG.src = `${carouselContentPath}${i + 1}.png`;
            slideIMG.alt = "Slide";

            if (i !== 0) continue;
            slidePNL.classList.add("active");
            slideIndicator.classList.add("active");
        }
    }
    static ShowModalDescription(descriptionSize, descriptionTitle, descriptionParagraph)
    {
        this.descriptionPNL.classList.add(descriptionSize);
        this.descriptionTitleTMP.innerHTML = Language.GetElementByLanguage(descriptionTitle);
        this.descriptionParagraphTMP.innerHTML = Language.GetElementByLanguage(descriptionParagraph);
    }
}