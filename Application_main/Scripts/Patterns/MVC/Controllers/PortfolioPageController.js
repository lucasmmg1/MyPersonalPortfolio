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
        let typewriter = new Typewriter(title, {loop: false, delay: 85});
        title.classList.add("mx-auto", "mt-0", "mb-0", "p-0", "line-height-1", "text-opaque-dark");
        title.id = "TituloIndex";

        typewriter.typeString(Language.GetElementByLanguage("k_PortfolioPage_BodyHeader")).start();
    }
    static SetupLanguageDropdown()
    {
        let dropdownMenuButton = document.getElementById("dropdownMenuButton");
        let dropdownMenuContent = document.getElementById("dropdownMenuContent");
        let nonActiveLanguages = Language.availableLanguages.filter(function (value)
        {
            return value !== Language.GetCurrentLanguage()
        });

        dropdownMenuButton.innerHTML = Language.GetCurrentLanguage();

        for (let nonActiveLanguage of nonActiveLanguages)
        {
            let nonActiveLanguageOption = dropdownMenuContent.appendChild(document.createElement('a'));
            nonActiveLanguageOption.classList.add('dropdown-item', 'Calibri');
            nonActiveLanguageOption.onclick = function()
            {
                Language.SetCurrentLanguage(nonActiveLanguage);
                document.location.reload();
            };

            nonActiveLanguageOption.innerHTML = nonActiveLanguage;
        }
    }
    static SetupNavbarOptions()
    {
        this.websiteNavbar = document.getElementById("websiteMiddleNavbar");

        for (let i = 0; i < this.pagesIds.length; i++)
        {
            let navbarOption = this.websiteNavbar.appendChild(document.createElement("button"));
            let typewriter = new Typewriter(navbarOption, {loop: false, cursor: "", delay: 85});

            navbarOption.classList.add("navbar-link", "w-15");
            navbarOption.id = `${this.pagesIds[i]}Navbar`;

            navbarOption.addEventListener('click', () =>
            {
                    this.UpdateSelectedPageId(i);
                    this.UpdateSelectedNavbarOption();
                    this.UpdateSelectedSectionOption();
            },
            true);

            typewriter.typeString(`${Language.GetElementByLanguage("k_PortfolioPage_NavbarOptions")[i]}`).start();
        }
    }
    static SetupSectionContent()
    {
        this.websiteContent = document.getElementById("websiteContent");
        this.selectedSection = this.websiteContent.appendChild(document.createElement("div"));

        this.websiteContent.classList.add("row", "mx-0", "my-0");
        this.selectedSection.classList.add("row", "w-100", "vh-100", "m-0", "p-0", "justify-content-center", "FadeIn");
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