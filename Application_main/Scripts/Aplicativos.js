let aplicativosDivision;

function ShowAplicativos()
{
    SetupAplicativosStructure();
    SetupAplicativosContent();
}


function SetupAplicativosStructure()
{
    aplicativosDivision = projectsSection.appendChild(document.createElement("div"));
    aplicativosDivision.classList.add("row", "w-100", "m-0", "p-0");
}
function SetupAplicativosContent()
{
    let instantiationOrder = 0;
    let currentRow = 2;

    for (let i = modelagensSize; i > 0; i--)
    {
        let imageSize = currentRow % 2 === 0 && i === 3 * currentRow - 2 || currentRow % 2 !== 0 && i === 3 * currentRow ? 'col-6' : 'col-3';
        InstantiateMoodboardImageProject(aplicativosDivision, instantiationOrder, `./Application_main/Sprites/Pages/Projects/Aplicativos/_Thumbnails`, `Thumbnail${i}.png`, imageSize, SetupAplicativosModalContent);
        instantiationOrder++;

        if ((i - 1) % 3 === 0)
            currentRow--;
    }
}
function SetupAplicativosModalContent(modalId)
{
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