let modelagensDivision;
let modelagensSize = 6;

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
    let instantiationOrder = 0;
    let currentRow = 2;

    for (let i = modelagensSize; i > 0; i--)
    {
        let imageSize = currentRow % 2 === 0 && i === 3 * currentRow - 2 || currentRow % 2 !== 0 && i === 3 * currentRow ? 'col-6' : 'col-3';
        InstantiateMoodboardImageProject(modelagensDivision, instantiationOrder, `./Application_main/Sprites/Pages/Projects/Modelagens/_Thumbnails`, `Thumbnail${i}.png`, imageSize, SetupModelagensModalContent);
        instantiationOrder++;

        if ((i - 1) % 3 === 0)
            currentRow--;
    }
}
function SetupModelagensModalContent(modalId)
{
    console.log(modalId);
    let carouselSize, numberOfSlides, carouselContentPath;
    let descriptionSize, descriptionTitle, descriptionParagraph;
    document.body.style.overflow = "hidden";

    switch (modalId)
    {
        case "Thumbnail1.png":
            modalDialogSize = "modal-lg";
            carouselSize = "col-7";
            numberOfSlides = 9;
            carouselContentPath = `./Application_main/Sprites/Pages/Projects/Modelagens/Rosquinha/Rosquinha`;
            descriptionSize = "col-5";
            descriptionTitle = USED_PROJECTS_MODELAGENS_DONUT_TITLE;
            descriptionParagraph = USED_PROJECTS_MODELAGENS_DONUT_DESCRIPTION;
            break;

        case "Thumbnail2.png":
            modalDialogSize = "modal-lg";
            carouselSize = "col-7";
            numberOfSlides = 6;
            carouselContentPath = `./Application_main/Sprites/Pages/Projects/Modelagens/Hamburguer/Hamburguer`;
            descriptionSize = "col-5";
            descriptionTitle = USED_PROJECTS_MODELAGENS_HAMBURGUER_TITLE;
            descriptionParagraph = USED_PROJECTS_MODELAGENS_HAMBURGUER_DESCRIPTION;
            break;

        case "Thumbnail3.png":
            modalDialogSize = "modal-2xl";
            carouselSize = "col-7";
            numberOfSlides = 3;
            carouselContentPath = `./Application_main/Sprites/Pages/Projects/Modelagens/Sabre de Luz/Sabre`;
            descriptionSize = "col-5";
            descriptionTitle = USED_PROJECTS_MODELAGENS_SABREDELUZ_TITLE;
            descriptionParagraph = USED_PROJECTS_MODELAGENS_SABREDELUZ_DESCRIPTION;
            break;

        case "Thumbnail4.png":
            modalDialogSize = "modal-lg";
            carouselSize = "col-7";
            numberOfSlides = 15;
            carouselContentPath = `./Application_main/Sprites/Pages/Projects/Modelagens/Tie Fighter/TieFighter`;
            descriptionSize = "col-5";
            descriptionTitle = USED_PROJECTS_MODELAGENS_TIEFIGTHER_TITLE;
            descriptionParagraph = USED_PROJECTS_MODELAGENS_TIEFIGHTER_DESCRIPTION;
            break;

        case "Thumbnail5.png":
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