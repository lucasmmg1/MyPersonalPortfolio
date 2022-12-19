let firstSectionRow, secondSectionRow;
let upperLeftDivision, upperRightDivision;
let lowerLeftDivision, lowerRightDivision, lowerCenterDivision;

function ShowBio()
{
    if (modalPNL != null)
        DeleteModal();

    SetupBioStructure();
    SetupBioSectionUpperLeftDivision();
    SetupBioSectionUpperRightDivision();
    SetupBioSectionLowerDivision();

    document.getElementById('websiteTopNavbar').scrollIntoView({behavior: 'smooth'});
}


function SetupBioStructure()
{
    firstSectionRow = selectedSection.appendChild(document.createElement("div"));
    secondSectionRow = selectedSection.appendChild(document.createElement("div"));
    upperLeftDivision = firstSectionRow.appendChild(document.createElement("div"));
    upperRightDivision = firstSectionRow.appendChild(document.createElement("div"));
    lowerLeftDivision = secondSectionRow.appendChild(document.createElement("div"));
    lowerRightDivision = secondSectionRow.appendChild(document.createElement("div"));
    lowerCenterDivision = secondSectionRow.appendChild(document.createElement("div"));

    firstSectionRow.classList.add("d-flex", "flex-row", "row", "w-75", "mx-0", "mt-0", "mb-5", "p-0");
    secondSectionRow.classList.add("d-flex", "flex-row", "row", "w-100", "mx-0", "mt-4", "mb-0", "p-0", "text-justify", "KeepCalm", "text-opaque-light");
    upperLeftDivision.classList.add("d-flex", "flex-column", "col-5", "m-auto", "px-3", "py-0");
    upperRightDivision.classList.add("d-flex", "flex-column", "col-5", "m-auto", "p-0", "KeepCalm");
    lowerLeftDivision.classList.add("d-flex", "flex-column", "col-6", "mx-0", "mt-2", "mb-0", "p-0");
    lowerRightDivision.classList.add("d-flex", "flex-column", "col-6", "mx-0", "mt-2", "mb-0", "p-0");
    lowerCenterDivision.classList.add("d-flex", "flex-column", "col-12", "m-auto", "p-0");
}

function SetupBioSectionUpperLeftDivision()
{
    let bioPicture;

    bioPicture = upperLeftDivision.appendChild(document.createElement("img"));
    bioPicture.src = "./Application_main/Sprites/Pages/Bio/sprt_UI_FotoPerfil.png";
    bioPicture.classList.add("w-100", "rounded-2");
}
function SetupBioSectionUpperRightDivision()
{
    let paragraphHeader, paragraphSection, paragraphFooter;
    let paragraphTitle, paragraphSubtitle, paragraphContent, paragraphLink;

    paragraphHeader = upperRightDivision.appendChild(document.createElement("div"));
    paragraphHeader.classList.add("m-0", "p-0", "text-start");

    paragraphSection = upperRightDivision.appendChild(document.createElement("div"));
    paragraphSection.classList.add("mx-0", "mt-4", "mb-0", "p-0", "text-justify");

    paragraphFooter = upperRightDivision.appendChild(document.createElement("div"));
    paragraphFooter.classList.add("m-0", "p-0", "text-end");

    paragraphTitle = paragraphHeader.appendChild(document.createElement("h3"));
    paragraphTitle.classList.add("m-0", "p-0", "text-opaque-dark");
    paragraphTitle.innerHTML = USED_BIO_TITLE;
    paragraphTitle.id = "BioTitle";

    paragraphSubtitle = paragraphHeader.appendChild(document.createElement("h6"));
    paragraphSubtitle.classList.add("m-0", "p-0", "text-opaque-light");
    paragraphSubtitle.innerHTML = USED_BIO_SUBTITLE;
    paragraphSubtitle.id = "BioSubtitle";

    paragraphContent = paragraphSection.appendChild(document.createElement("p"));
    paragraphContent.classList.add("m-0", "p-0", "text-opaque-light");
    paragraphContent.innerHTML = USED_SMALL_BIO_CONTENT;

    paragraphLink = paragraphFooter.appendChild(document.createElement("a"));
    paragraphLink.classList.add("m-0", "p-0", "link-dark");
    paragraphLink.innerHTML = USED_LINK_BIO_CONTENT;
    paragraphLink.href = "#BioSectionFooter";
}

function SetupBioSectionLowerDivision()
{
    let paragraphLeft, paragraphRight, paragraphCenter;
    let downloadSection, downloadImage, downloadLink;


    paragraphLeft = lowerLeftDivision.appendChild(document.createElement("p"));
    paragraphRight = lowerRightDivision.appendChild(document.createElement("p"));
    paragraphCenter = lowerCenterDivision.appendChild(document.createElement("p"));
    downloadSection = lowerCenterDivision.appendChild(document.createElement("div"))
    downloadImage = downloadSection.appendChild(document.createElement("img"));
    downloadLink = downloadSection.appendChild(document.createElement("a"))

    paragraphLeft.classList.add("w-75", "mt-5", "mb-1", "p-0", "mx-auto");
    paragraphRight.classList.add("w-75", "mt-5", "mb-1", "p-0", "mx-auto");
    paragraphCenter.classList.add("w-100", "mt-4", "mb-2", "p-0", "mx-auto", "text-center");
    downloadSection.classList.add("w-25", "mt-3", "mb-5", "p-0", "mx-auto", "bgcolor_F7F7F7", "rounded-3", "link-primary");
    downloadImage.classList.add("w-10", "my-3", "ms-5", "me-4", "text-start");
    downloadLink.classList.add("w-25", "ms-5", "me-3", "text-end");

    paragraphLeft.innerHTML = USED_BIG_BIO_LEFT_CONTENT;
    paragraphRight.innerHTML = USED_BIG_BIO_RIGHT_CONTENT;
    paragraphCenter.innerHTML = USED_BIG_BIO_CENTER_CONTENT;
    downloadLink.innerHTML = "curriculum-lucas.pdf";

    secondSectionRow.id = "BioSectionFooter";

    downloadImage.src = "./Application_main/Sprites/Pages/Bio/sprt_UI_PDFLogo.png";
    downloadLink.target = "_blank";
    downloadLink.href = "./Application_main/Arquivos/curriculum-lucas.pdf";
    downloadLink.download = "curriculum-lucas.pdf";
}