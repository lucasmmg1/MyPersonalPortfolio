let modalDialogSize;
let modalPNL, modalDialogPNL;
let carouselPNL, carouselIndicatorsPNL, carouselInnerPNL;
let descriptionPNL, descriptionTitleTMP, descriptionParagraphTMP;

function InstantiateModal(content)
{
    modalPNL = content.appendChild(document.createElement("div"));
    modalPNL.classList.add("modal", "fade");
    modalPNL.id = "modalContent";
    modalPNL.role = "dialog";
    $(modalPNL).on('hide.bs.modal', function ()
    {
        document.body.style.overflow = "auto";
        setTimeout(ResetModal, 500);
    });

    modalDialogPNL = modalPNL.appendChild(document.createElement("div"));
    modalDialogPNL.classList.add("modal-dialog", "modal-dialog-centered");

    let modalContent = modalDialogPNL.appendChild(document.createElement("div"));
    modalContent.classList.add("row", "d-flex", "flex-row", "m-0", "p-0", "modal-content");

    InstantiateModalCarousel(modalContent);
    InstantiateModalDescription(modalContent);
}
function DeleteModal()
{
    if (modalPNL != null)
        modalPNL.remove();
}
function ResetModal()
{
    let carouselIndicatorsChildren = carouselIndicatorsPNL.children;
    let carouselInnerChildren = carouselInnerPNL.children;

    modalDialogPNL.classList.remove(modalDialogSize);

    for (let i = carouselIndicatorsChildren.length - 1; i >= 0 ; i--)
        carouselIndicatorsChildren[i].remove();

    for (let i = carouselInnerChildren.length - 1; i >= 0 ; i--)
        carouselInnerChildren[i].remove();

    descriptionTitleTMP.innerHTML = "";
    descriptionParagraphTMP.innerHTML = "";
}

function InstantiateModalCarousel(modalBody)
{
    let carouselPreviousBTN, carouselNextBTN, carouselPreviousButtonIconIMG, carouselPreviousButtonOverlayTMP, carouselNextButtonIconIMG, carouselNextButtonOverlayTMP;

    carouselPNL = modalBody.appendChild(document.createElement("div"));
    carouselPNL.classList.add("m-0", "p-0", "carousel", "slide");
    carouselPNL.id = "modalCarousel";
    carouselPNL.dataset.bsRide = "carousel";

    carouselIndicatorsPNL = carouselPNL.appendChild(document.createElement("div"));
    carouselIndicatorsPNL.classList.add("carousel-indicators");

    carouselInnerPNL = carouselPNL.appendChild(document.createElement("div"));
    carouselInnerPNL.classList.add("carousel-inner");

    carouselPreviousBTN = carouselPNL.appendChild(document.createElement("button"));
    carouselPreviousBTN.classList.add("carousel-control-prev");
    carouselPreviousBTN.type = "button";
    carouselPreviousBTN.dataset.bsTarget = "#modalCarousel";
    carouselPreviousBTN.dataset.bsSlide = "prev";

    carouselNextBTN = carouselPNL.appendChild(document.createElement("button"));
    carouselNextBTN.classList.add("carousel-control-next");
    carouselNextBTN.type = "button";
    carouselNextBTN.dataset.bsTarget = "#modalCarousel";
    carouselNextBTN.dataset.bsSlide = "next";

    carouselPreviousButtonIconIMG = carouselPreviousBTN.appendChild(document.createElement("span"));
    carouselPreviousButtonIconIMG.classList.add("carousel-control-prev-icon");
    carouselPreviousButtonIconIMG.ariaHidden = "true";

    carouselPreviousButtonOverlayTMP = carouselPreviousBTN.appendChild(document.createElement("span"));
    carouselPreviousButtonOverlayTMP.classList.add("sr-only");
    carouselPreviousButtonOverlayTMP.innerHTML =  USED_PROJECTS_MODAL_CAROUSEL_PREVIOUS_BUTTON;

    carouselNextButtonIconIMG = carouselNextBTN.appendChild(document.createElement("span"));
    carouselNextButtonIconIMG.classList.add("carousel-control-next-icon");
    carouselNextButtonIconIMG.ariaHidden = "true";

    carouselNextButtonOverlayTMP = carouselNextBTN.appendChild(document.createElement("span"));
    carouselNextButtonOverlayTMP.classList.add("sr-only");
    carouselNextButtonOverlayTMP.innerHTML = USED_PROJECTS_MODAL_CAROUSEL_NEXT_BUTTON;
}
function InstantiateModalDescription(modalBody)
{
    let buttonRow, closeButton;

    descriptionPNL = modalBody.appendChild(document.createElement("div"));
    descriptionPNL.classList.add("m-0", "p-0");
    descriptionPNL.id = "modalDescription";

    buttonRow = descriptionPNL.appendChild(document.createElement("div"));
    buttonRow.classList.add("m-0", "p-0", "w-100", "text-end");

    descriptionTitleTMP = descriptionPNL.appendChild(document.createElement("h4"));
    descriptionTitleTMP.classList.add("mx-0", "my-4", "p-0", "text-center");

    descriptionParagraphTMP = descriptionPNL.appendChild(document.createElement("p"));
    descriptionParagraphTMP.classList.add("m-5", "p-0", "text-justify");

    closeButton = buttonRow.appendChild(document.createElement("button"));
    closeButton.classList.add("m-0", "p-0");
    closeButton.innerHTML = "&times;"
    closeButton.type = "button";
    closeButton.dataset.dismiss="modal";
}


function SetupModalCarousel(carouselSize, numberOfSlides, carouselContentPath)
{
    carouselPNL.classList.add(carouselSize);

    for (let i = 0; i < numberOfSlides; i++)
    {
        let slideIndicator = carouselIndicatorsPNL.appendChild(document.createElement("button"));
        slideIndicator.type = "button";
        slideIndicator.dataset.bsTarget = "#modalCarousel";
        slideIndicator.dataset.bsSlideTo = `${i}`;

        let slidePNL = carouselInnerPNL.appendChild(document.createElement("div"));
        slidePNL.classList.add("carousel-item");

        let slideIMG = slidePNL.appendChild(document.createElement("img"));
        slideIMG.classList.add("d-block", "w-100")
        slideIMG.src = `${carouselContentPath}${i + 1}.png`;
        slideIMG.alt = "Slide";

        if (i === 0)
        {
            slidePNL.classList.add("active");
            slideIndicator.classList.add("active");
        }
    }
}
function SetupModalDescription(descriptionSize, descriptionTitle, descriptionParagraph)
{
    descriptionPNL.classList.add(descriptionSize)
    descriptionTitleTMP.innerHTML = descriptionTitle;
    descriptionParagraphTMP.innerHTML = descriptionParagraph;
}