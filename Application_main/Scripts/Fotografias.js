let fotografiasDivision;
let fotografiasSize;

function ShowFotografias()
{
    SetupFotografiasStructure();
    SetupFotografiasContent();
}
function SetupFotografiasStructure()
{
    fotografiasDivision = selectedSection.appendChild(document.createElement("div"));
    fotografiasDivision.classList.add("row", "w-75", "m-0", "p-0");
}
function SetupFotografiasContent()
{
    let instantiationOrder = 0;
    let currentRow = 2;

    for (let i = fotografiasSize; i > 0; i--)
    {
        let imageSize = currentRow % 2 === 0 && i === 3 * currentRow - 2 || currentRow % 2 !== 0 && i === 3 * currentRow ? 'col-6' : 'col-3';
        InstantiateMoodboardImageProject(fotografiasDivision, instantiationOrder, `./Application_main/Sprites/Pages/Projects/Fotografias/_Thumbnails`, `Thumbnail${i}.png`, imageSize, SetupFotografiasModalContent);
        instantiationOrder++;

        if ((i - 1) % 3 === 0)
            currentRow--;
    }
}
function SetupFotografiasModalContent(modalId)
{
    let carouselSize, numberOfSlides, carouselContentPath;
    let descriptionSize, descriptionTitle, descriptionParagraph;
    document.body.style.overflow = "hidden";

    switch (parseInt(modalId))
    {
        default:
            break;
    }

    modalDialogPNL.classList.add(modalDialogSize);
    SetupModalCarousel();
    SetupModalDescription(descriptionTitle, descriptionParagraph);
}
