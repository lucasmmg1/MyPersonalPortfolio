class PortfolioBioSubsectionController
{
    static firstSectionRow;
    static secondSectionRow;
    static upperLeftDivision;
    static upperRightDivision;
    static lowerLeftDivision;
    static lowerRightDivision;
    static lowerCenterDivision;

    static Setup()
    {
        this.SetupBioContent();
    }
    static Show()
    {
        document.getElementById('websiteTopNavbar').scrollIntoView({behavior: 'smooth'});
        ModalView.Delete();
        this.ShowBioContent();
    }
    static SetupBioContent()
    {
        this.firstSectionRow = PortfolioPageController.selectedSection.appendChild(document.createElement("div"));
        this.secondSectionRow = PortfolioPageController.selectedSection.appendChild(document.createElement("div"));
        this.upperLeftDivision = this.firstSectionRow.appendChild(document.createElement("div"));
        this.upperRightDivision = this.firstSectionRow.appendChild(document.createElement("div"));
        this.lowerLeftDivision = this.secondSectionRow.appendChild(document.createElement("div"));
        this.lowerRightDivision = this.secondSectionRow.appendChild(document.createElement("div"));
        this.lowerCenterDivision = this.secondSectionRow.appendChild(document.createElement("div"));

        this.firstSectionRow.classList.add("d-flex", "flex-row", "row", "w-75", "mx-0", "mt-0", "mb-5", "p-0");
        this.secondSectionRow.classList.add("d-flex", "flex-row", "row", "w-100", "mx-0", "mt-4", "mb-0", "p-0", "text-justify", "KeepCalm", "text-opaque-light");
        this.secondSectionRow.id = "BioSectionFooter";
        this.upperLeftDivision.classList.add("d-flex", "flex-column", "col-5", "m-auto", "px-3", "py-0");
        this.upperRightDivision.classList.add("d-flex", "flex-column", "col-5", "m-auto", "p-0", "KeepCalm");
        this.lowerLeftDivision.classList.add("d-flex", "flex-column", "col-6", "mx-0", "mt-2", "mb-0", "p-0");
        this.lowerRightDivision.classList.add("d-flex", "flex-column", "col-6", "mx-0", "mt-2", "mb-0", "p-0");
        this.lowerCenterDivision.classList.add("d-flex", "flex-column", "col-12", "m-auto", "p-0");
    }
    static ShowBioContent()
    {
        let bioPicture;
        let paragraphHeader, paragraphSection, paragraphFooter;
        let paragraphTitle, paragraphSubtitle, paragraphContent, paragraphLink;
        let paragraphLeft, paragraphRight, paragraphCenter;
        let downloadSection, downloadImage, downloadLink;

        bioPicture = this.upperLeftDivision.appendChild(document.createElement("img"));
        paragraphHeader = this.upperRightDivision.appendChild(document.createElement("div"));
        paragraphSection = this.upperRightDivision.appendChild(document.createElement("div"));
        paragraphFooter = this.upperRightDivision.appendChild(document.createElement("div"));
        paragraphTitle = paragraphHeader.appendChild(document.createElement("h3"));
        paragraphSubtitle = paragraphHeader.appendChild(document.createElement("h6"));
        paragraphContent = paragraphSection.appendChild(document.createElement("p"));
        paragraphLink = paragraphFooter.appendChild(document.createElement("a"));
        paragraphLeft = this.lowerLeftDivision.appendChild(document.createElement("p"));
        paragraphRight = this.lowerRightDivision.appendChild(document.createElement("p"));
        paragraphCenter = this.lowerCenterDivision.appendChild(document.createElement("p"));
        downloadSection = this.lowerCenterDivision.appendChild(document.createElement("div"))
        downloadImage = downloadSection.appendChild(document.createElement("img"));
        downloadLink = downloadSection.appendChild(document.createElement("a"))

        bioPicture.classList.add("w-100", "rounded-2");
        bioPicture.src = "./Application_main/Sprites/Pages/Bio/sprt_UI_FotoPerfil.png";
        paragraphHeader.classList.add("m-0", "p-0", "text-start");
        paragraphSection.classList.add("mx-0", "mt-4", "mb-0", "p-0", "text-justify");
        paragraphFooter.classList.add("m-0", "p-0", "text-end");
        paragraphTitle.classList.add("m-0", "p-0", "text-opaque-dark");
        paragraphTitle.innerHTML = Constants.generalContent["k_PortfolioPage_BioTitle"];
        paragraphTitle.id = "BioTitle";
        paragraphSubtitle.classList.add("m-0", "p-0", "text-opaque-light");
        paragraphSubtitle.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_BioSubtitle");
        paragraphSubtitle.id = "BioSubtitle";
        paragraphContent.classList.add("m-0", "p-0", "text-opaque-light");
        paragraphContent.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_BioUpperParagraph");
        paragraphLink.classList.add("m-0", "p-0", "link-dark");
        paragraphLink.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_BioReadMoreLink");
        paragraphLink.href = "#BioSectionFooter";
        paragraphLeft.classList.add("w-75", "mt-5", "mb-1", "p-0", "mx-auto");
        paragraphLeft.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_BioBottomLeftParagraph");
        paragraphRight.classList.add("w-75", "mt-5", "mb-1", "p-0", "mx-auto");
        paragraphRight.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_BioBottomRightParagraph");
        paragraphCenter.classList.add("w-100", "mt-4", "mb-2", "p-0", "mx-auto", "text-center");
        paragraphCenter.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_BioBottomMiddleParagraph");
        downloadSection.classList.add("w-25", "mt-3", "mb-5", "p-0", "mx-auto", "bgcolor_F7F7F7", "rounded-3", "link-primary");
        downloadImage.classList.add("w-10", "my-3", "ms-5", "me-4", "text-start");
        downloadImage.src = "./Application_main/Sprites/Pages/Bio/sprt_UI_PDFLogo.png";
        downloadLink.classList.add("w-25", "ms-5", "me-3", "text-end");
        downloadLink.innerHTML = "curriculum-lucas.pdf";
        downloadLink.target = "_blank";
        downloadLink.href = "./Application_main/Arquivos/curriculum-lucas.pdf";
        downloadLink.download = "curriculum-lucas.pdf";
    }
}