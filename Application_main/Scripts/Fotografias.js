let fotografiasDivision;

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
    InstantiateMoodboard(fotografiasDivision, `./Recursos/Imagens/Fotografias/_Thumbnails`, 1);
}