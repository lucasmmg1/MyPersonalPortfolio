class PortfolioBioSubsectionController
{
    static bioSectionUpper;
    static bioSectionUpperLeft;
    static bioSectionUpperRight;
    static bioSectionFooter;
    static bioSectionFooterLeft;
    static bioSectionFooterRight;
    static bioSectionFooterCenter;

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
        this.bioSectionUpper = PortfolioPageController.selectedSection.appendChild(document.createElement("div"));
        this.bioSectionUpper.classList.add("d-flex", "row", "w-75", "mx-0", "mt-0", "mb-5", "p-0", "align-items-center", "justify-content-center");
        this.bioSectionUpper.id = "BioSectionUpper";
        this.bioSectionUpperLeft = this.bioSectionUpper.appendChild(document.createElement("div"));
        this.bioSectionUpperLeft.classList.add("mx-auto", "px-3", "py-0");
        this.bioSectionUpperLeft.id = "BioSectionUpperLeft";
        this.bioSectionUpperRight = this.bioSectionUpper.appendChild(document.createElement("div"));
        this.bioSectionUpperRight.classList.add("mx-auto", "p-0", "KeepCalm");
        this.bioSectionUpperRight.id = "BioSectionUpperRight";
        this.bioSectionFooter = PortfolioPageController.selectedSection.appendChild(document.createElement("div"));
        this.bioSectionFooter.classList.add("d-flex", "row", "w-100", "mx-0", "mt-4", "mb-0", "p-0", "text-justify", "justify-content-center", "KeepCalm", "text-opaque-light");
        this.bioSectionFooter.id = "BioSectionFooter";
        this.bioSectionFooterLeft = this.bioSectionFooter.appendChild(document.createElement("div"));
        this.bioSectionFooterLeft.classList.add("m-0", "p-0");
        this.bioSectionFooterLeft.id = "BioSectionFooterLeft";
        this.bioSectionFooterRight = this.bioSectionFooter.appendChild(document.createElement("div"));
        this.bioSectionFooterRight.classList.add("m-0", "p-0");
        this.bioSectionFooterRight.id = "BioSectionFooterRight";
        this.bioSectionFooterCenter = this.bioSectionFooter.appendChild(document.createElement("div"));
        this.bioSectionFooterCenter.classList.add("m-auto", "p-0");
    }
    static ShowBioContent()
    {
        let bioPicture, paragraphHeader, paragraphSection, paragraphFooter, bioTitle, bioSubtitle, bioSmallDescription, paragraphLink, paragraphLeft, paragraphRight, paragraphCenter, downloadSection, downloadImage, downloadLink;

        bioPicture = this.bioSectionUpperLeft.appendChild(document.createElement("img"));
        bioPicture.classList.add("w-100", "rounded-2");
        bioPicture.src = "./Application_main/Sprites/Pages/Bio/sprt_UI_FotoPerfil.png";
        paragraphHeader = this.bioSectionUpperRight.appendChild(document.createElement("div"));
        paragraphHeader.classList.add("m-0", "p-0", "text-start");
        paragraphSection = this.bioSectionUpperRight.appendChild(document.createElement("div"));
        paragraphSection.classList.add("mx-0", "mt-4", "mb-0", "p-0", "text-justify");
        paragraphFooter = this.bioSectionUpperRight.appendChild(document.createElement("div"));
        paragraphFooter.classList.add("m-0", "p-0", "text-end");
        bioTitle = paragraphHeader.appendChild(document.createElement("h3"));
        bioTitle.classList.add("m-0", "p-0", "text-opaque-dark");
        bioTitle.innerHTML = Constants.generalContent["k_PortfolioPage_BioTitle"];
        bioTitle.id = "BioTitle";
        bioSubtitle = paragraphHeader.appendChild(document.createElement("h6"));
        bioSubtitle.classList.add("m-0", "p-0", "text-opaque-light");
        bioSubtitle.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_BioSubtitle");
        bioSubtitle.id = "BioSubtitle";
        bioSmallDescription = paragraphSection.appendChild(document.createElement("p"));
        bioSmallDescription.classList.add("m-0", "p-0", "text-opaque-light");
        bioSmallDescription.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_BioUpperParagraph");
        bioSmallDescription.id = "BioUpperDescription";
        paragraphLink = paragraphFooter.appendChild(document.createElement("a"));
        paragraphLink.classList.add("m-0", "p-0", "link-dark");
        paragraphLink.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_BioReadMoreLink");
        paragraphLink.href = "#BioSectionFooter";
        paragraphLeft = this.bioSectionFooterLeft.appendChild(document.createElement("p"));
        paragraphLeft.classList.add("w-75", "m-0", "p-0", "mx-auto");
        paragraphLeft.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_BioBottomLeftParagraph");
        paragraphLeft.id = "BioFooterLeftDescription"
        paragraphRight = this.bioSectionFooterRight.appendChild(document.createElement("p"));
        paragraphRight.classList.add("w-75", "m-0", "p-0", "mx-auto");
        paragraphRight.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_BioBottomRightParagraph");
        paragraphRight.id = "BioFooterRightDescription";
        paragraphCenter = this.bioSectionFooterCenter.appendChild(document.createElement("p"));
        paragraphCenter.classList.add("w-75", "mt-4", "mb-2", "p-0", "mx-auto", "text-center");
        paragraphCenter.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_BioBottomMiddleParagraph");
        paragraphCenter.id = "BioFooterCenterDescription";
        downloadSection = this.bioSectionFooterCenter.appendChild(document.createElement("div"))
        downloadSection.classList.add("w-30", "mt-3", "mb-5", "p-0", "mx-auto", "bgcolor_F7F7F7", "rounded-3", "link-primary", "text-center");
        downloadImage = downloadSection.appendChild(document.createElement("img"));
        downloadImage.classList.add("w-10", "mx-1", "my-0", "p-0");
        downloadImage.src = "./Application_main/Sprites/Pages/Bio/sprt_UI_PDFLogo.png";
        downloadLink = downloadSection.appendChild(document.createElement("a"))
        downloadLink.classList.add("mx-1", "my-0", "p-0");
        downloadLink.innerHTML = "curriculum-lucas.pdf";
        downloadLink.target = "_blank";
        downloadLink.href = "./Application_main/Arquivos/curriculum-lucas.pdf";
        downloadLink.download = "curriculum-lucas.pdf";
    }
}