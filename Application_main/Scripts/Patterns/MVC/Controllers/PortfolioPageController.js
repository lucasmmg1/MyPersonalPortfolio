class PortfolioPageController
{
    static pagesIds = ["Bio", "Projetos"];
    static selectedPageId;
    static websiteNavbar;
    static selectedSection;

    static Setup()
    {
        this.selectedPageId = this.pagesIds[0];

        this.SetupHeader();
        this.SetupNavbar();
        this.SetupSection();
    }
    static SetupHeader()
    {
        this.SetupHeaderTitle();
    }
    static SetupNavbar()
    {
        this.SetupLanguageDropdown();
        this.SetupNavbarOptions();
        this.UpdateSelectedNavbarOption();
    }
    static SetupSection()
    {
        this.SetupSectionContent();
        this.UpdateSelectedSectionContent();
    }
    static SetupHeaderTitle()
    {
        let websiteHeader = document.getElementById('websiteHeader');
        let title = websiteHeader.appendChild(document.createElement("h1"));
        title.classList.add("mx-auto", "mt-0", "mb-0", "p-0", "line-height-1", "text-opaque-dark");
        title.id = "TituloIndex";

        let typewriter = new Typewriter(title, {loop: false, delay: 85});
        typewriter.typeString(Language.GetElementByLanguage("k_PortfolioPage_BodyHeader")).start();
    }
    static SetupLanguageDropdown()
    {
        let dropdownMenuButton = document.getElementById("dropdownMenuButton");
        dropdownMenuButton.innerHTML = Language.GetCurrentLanguage();
        let dropdownMenuContent = document.getElementById("dropdownMenuContent");

        for (let languageCode of Object.keys(Language.availableLanguages))
        {
            if (languageCode === Language.GetCurrentLanguage()) continue;
            let nonActiveLanguageOption = dropdownMenuContent.appendChild(document.createElement('button'));
            nonActiveLanguageOption.classList.add('dropdown-item', 'Calibri');
            nonActiveLanguageOption.onclick = function()
            {
                Language.SetCurrentLanguage(languageCode);
                document.location.reload();
            };

            nonActiveLanguageOption.innerHTML = languageCode;
        }
    }
    static SetupNavbarOptions()
    {
        this.websiteNavbar = document.getElementById("websiteMiddleNavbar");

        for (let i = 0; i < this.pagesIds.length; i++)
        {
            let navbarOption = this.websiteNavbar.appendChild(document.createElement("button"));
            navbarOption.classList.add("row", "position-relative", "navbar-link");
            navbarOption.id = `${this.pagesIds[i]}Navbar`;
            navbarOption.addEventListener('click', () =>
            {
                if (navbarOption.id === `${this.selectedPageId}Navbar`) return;
                this.UpdateSelectedPageId(i);
                this.UpdateSelectedNavbarOption();
                this.UpdateSelectedSectionOption();
            },
            true);

            let placeholderTMP = navbarOption.appendChild(document.createElement("p"));
            placeholderTMP.classList.add("m-0", "p-0", "opacity-0");
            placeholderTMP.innerHTML = `${Language.GetElementByLanguage("k_PortfolioPage_NavbarOptions")[i]}`;

            let definitiveTMP = navbarOption.appendChild(document.createElement("p"));
            definitiveTMP.classList.add("m-0", "p-0", "position-absolute", "navbar-overlay");
            let typewriter = new Typewriter(definitiveTMP, {loop: false, cursor: "", delay: 85});
            typewriter.typeString(`${Language.GetElementByLanguage("k_PortfolioPage_NavbarOptions")[i]}`).start();
        }
    }
    static SetupSectionContent()
    {
        this.websiteContent = document.getElementById("websiteContent");
        this.selectedSection = this.websiteContent.appendChild(document.createElement("div"));

        this.websiteContent.classList.add("row", "mx-0", "my-0");
        this.selectedSection.classList.add("row", "vw-100", "vh-100", "m-0", "p-0", "justify-content-center", "FadeIn");
    }
    static UpdateSelectedPageId(index)
    {
        this.selectedPageId = this.pagesIds[index];
    }
    static UpdateSelectedNavbarOption()
    {
        for (let navbarOption of this.websiteNavbar.children)
        {
            navbarOption.classList.remove("selected");
            navbarOption.classList.add("deselected");

            if (navbarOption.id !== `${this.selectedPageId}Navbar`) continue;
            navbarOption.classList.remove("deselected");
            navbarOption.classList.add("selected");
        }
    }
    static UpdateSelectedSectionOption()
    {
        this.selectedSection.classList.remove("FadeIn");
        this.selectedSection.classList.add("FadeOut");

        setTimeout
        (
            () =>
            {
                while (this.selectedSection.firstChild)
                    this.selectedSection.removeChild(this.selectedSection.lastChild);

                this.UpdateSelectedSectionContent();
                this.selectedSection.classList.remove("FadeOut");
                this.selectedSection.classList.add("FadeIn");
            },
            1000
        );
    }
    static UpdateSelectedSectionContent()
    {
        PortfolioSectionController.Setup();
        PortfolioSectionController.Show();
    }
}

currentPage = "PortfolioPage";
main();