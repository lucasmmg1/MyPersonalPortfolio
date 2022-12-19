let aplicativosDivision;

function ShowAplicativos()
{
    SetupAplicativosStructure();
    SetupAplicativosContent();
}


function SetupAplicativosStructure()
{
    aplicativosDivision = projectsSection.appendChild(document.createElement("div"));
    aplicativosDivision.classList.add("col-12", "w-100", "m-0", "p-0");
}
function SetupAplicativosContent()
{
    InstantiateMoodboard(aplicativosDivision, `./Application_main/Sprites/Pages/Projects/Aplicativos/_Thumbnails/Thumbnail`, 2, SetupAplicativosModalContent);
}
function SetupAplicativosModalContent(modalId)
{t
    let carouselSize, numberOfSlides, carouselContentPath;
    let descriptionSize, descriptionTitle, descriptionParagraph;
    document.body.style.overflow = "hidden";

    switch (parseInt(modalId))
    {
        case 1:
            descriptionTitle = USED_PROJECTS_APLICATIVOS_ROXSTAR_TITLE;
            descriptionParagraph = USED_PROJECTS_APLICATIVOS_ROXSTAR_DESCRIPTION;
            break;

        case 2:
            descriptionTitle = USED_PROJECTS_APLICATIVOS_TURMADAMONICA_TITLE;
            descriptionParagraph = USED_PROJECTS_APLICATIVOS_TURMADAMONICA_DESCRIPTION;
            break;

        case 3:
            descriptionTitle = USED_PROJECTS_APLICATIVOS_GALINHAPINTADINHA_TITLE;
            descriptionParagraph = USED_PROJECTS_APLICATIVOS_GALINHAPINTADINHA_DESCRIPTION;
            break;

        case 4:
            descriptionTitle = USED_PROJECTS_APLICATIVOS_MUNDOBITA_TITLE;
            descriptionParagraph = USED_PROJECTS_APLICATIVOS_MUNDOBITA_DESCRIPTION;
            break;

        default:
    }

    modalDialogPNL.classList.add(modalDialogSize);
    SetupModalCarousel();
    SetupModalDescription(descriptionTitle, descriptionParagraph);
}