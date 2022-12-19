let modelagensDivision;

function ShowModelagens()
{
    SetupModelagensStructure();
    SetupModelagensContent();
}


function SetupModelagensStructure()
{
    modelagensDivision = projectsSection.appendChild(document.createElement("div"));
    modelagensDivision.classList.add("row", "w-100", "m-0", "p-0");
}
function SetupModelagensContent()
{
    InstantiateMoodboard(modelagensDivision, `./Application_main/Sprites/Pages/Projects/Modelagens/_Thumbnails/Thumbnail`, 2, SetupModelagensModalContent);
}
function SetupModelagensModalContent(modalId)
{
    let carouselSize, numberOfSlides, carouselContentPath;
    let descriptionSize, descriptionTitle, descriptionParagraph;
    document.body.style.overflow = "hidden";

    switch (parseInt(modalId))
    {
        case 1:
            modalDialogSize = "modal-lg";
            carouselSize = "col-7";
            numberOfSlides = 9;
            carouselContentPath = `./Application_main/Sprites/Pages/Projects/Modelagens/Rosquinha/Rosquinha`;
            descriptionSize = "col-5";
            descriptionTitle = USED_PROJECTS_MODELAGENS_DONUT_TITLE;
            descriptionParagraph = USED_PROJECTS_MODELAGENS_DONUT_DESCRIPTION;
            break;

        case 2:
            modalDialogSize = "modal-lg";
            carouselSize = "col-7";
            numberOfSlides = 6;
            carouselContentPath = `./Application_main/Sprites/Pages/Projects/Modelagens/Hamburguer/Hamburguer`;
            descriptionSize = "col-5";
            descriptionTitle = USED_PROJECTS_MODELAGENS_HAMBURGUER_TITLE;
            descriptionParagraph = USED_PROJECTS_MODELAGENS_HAMBURGUER_DESCRIPTION;
            break;

        case 3:
            modalDialogSize = "modal-2xl";
            carouselSize = "col-7";
            numberOfSlides = 3;
            carouselContentPath = `./Application_main/Sprites/Pages/Projects/Modelagens/Sabre de Luz/Sabre`;
            descriptionSize = "col-5";
            descriptionTitle = USED_PROJECTS_MODELAGENS_SABREDELUZ_TITLE;
            descriptionParagraph = USED_PROJECTS_MODELAGENS_SABREDELUZ_DESCRIPTION;
            break;

        case 4:
            modalDialogSize = "modal-lg";
            carouselSize = "col-7";
            numberOfSlides = 15;
            carouselContentPath = `./Application_main/Sprites/Pages/Projects/Modelagens/Tie Fighter/TieFighter`;
            descriptionSize = "col-5";
            descriptionTitle = USED_PROJECTS_MODELAGENS_TIEFIGTHER_TITLE;
            descriptionParagraph = USED_PROJECTS_MODELAGENS_TIEFIGHTER_DESCRIPTION;
            break;

        case 5:
            modalDialogSize = "modal-lg";
            carouselSize = "col-7";
            numberOfSlides = 1;
            carouselContentPath = `./Application_main/Sprites/Pages/Projects/Modelagens/Ilusao/Ilusao`;
            descriptionSize = "col-5";
            descriptionTitle = USED_PROJECTS_MODELAGENS_ILUSAODEOTICA_TITLE;
            descriptionParagraph = USED_PROJECTS_MODELAGENS_ILUSAODEOTICA_DESCRIPTION;
            break;

        default:
            break;
    }

    modalDialogPNL.classList.add(modalDialogSize);
    SetupModalCarousel(carouselSize, numberOfSlides, carouselContentPath);
    SetupModalDescription(descriptionSize, descriptionTitle, descriptionParagraph);
}