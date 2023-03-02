class PortfolioProjectsSubsectionController
{
    static projectsNavbar;
    static projectsSection;
    static selectedProjectSection;
    static projectNavbarCategoriesItems = [];
    static projectNavbarSoftwaresItems = [];
    static projects;

    static Setup()
    {
        ModalView.Create();
        this.SetupProjects();
        this.SetupProjectsContent();
        this.SetupSelectedProjectContent();
    }
    static Show()
    {
        this.UpdateProjectsNavbar(this.projectNavbarCategoriesItems[0].id)
        this.UpdateProjectsContent("aplicativos");
        document.getElementById('websiteMiddleNavbar').scrollIntoView({behavior: 'smooth'});
    }
    static SetupProjects()
    {
        this.projects =
        [
            new ProjectView(["aplicativos"]),
            new ProjectView(["aplicativos"]),
            new ProjectView(["aplicativos"], "img", "col-6", ".png", `./Application_main/Sprites/Pages/Projects/Aplicativos/.Thumbnails/Thumbnail4`, "col-6", "0", "", "col-6", "k_PortfolioPage_ProjectsMundoBitaTitle", "k_PortfolioPage_ProjectsMundoBitaDescription", "col-6"),
            new ProjectView(["aplicativos"], "img", "col-6", ".png", `./Application_main/Sprites/Pages/Projects/Aplicativos/.Thumbnails/Thumbnail3`, "col-6", "0", "", "col-6", "k_PortfolioPage_ProjectsGalinhaPintadinhaTitle", "k_PortfolioPage_ProjectsGalinhaPintadinhaDescription", "col-6"),
            new ProjectView(["aplicativos"], "img", "col-3", ".png", `./Application_main/Sprites/Pages/Projects/Aplicativos/.Thumbnails/Thumbnail2`, "col-3", "0", "", "col-6", "k_PortfolioPage_ProjectsTDMTitle", "k_PortfolioPage_ProjectsTDMDescription", "col-6"),
            new ProjectView(["aplicativos"], "img", "col-3", ".png", `./Application_main/Sprites/Pages/Projects/Aplicativos/.Thumbnails/Thumbnail1`, "col-3", "0", "", "col-6", "k_PortfolioPage_ProjectsRoxteenRoxstarTitle", "k_PortfolioPage_ProjectsRoxteenRoxstarDescription", "col-6"),
            new ProjectView(["modelagens"]),
            new ProjectView(["modelagens"], "img", "col-3", ".png", `./Application_main/Sprites/Pages/Projects/Modelagens/.Thumbnails/Thumbnail5`, "col-6", "1", "./Application_main/Sprites/Pages/Projects/Modelagens/Ilusao/Ilusao", "col-6", "k_PortfolioPage_ProjectsMundoBitaTitle", "k_PortfolioPage_ProjectsMundoBitaDescription", "modal-xl"),
            new ProjectView(["modelagens"], "img", "col-6", ".png", `./Application_main/Sprites/Pages/Projects/Modelagens/.Thumbnails/Thumbnail4`, "col-6", "15", "./Application_main/Sprites/Pages/Projects/Modelagens/Tie Fighter/TieFighter", "col-6", "k_PortfolioPage_ProjectsGalinhaPintadinhaTitle", "k_PortfolioPage_ProjectsGalinhaPintadinhaDescription", "modal-xl"),
            new ProjectView(["modelagens"], "img", "col-6", ".png", `./Application_main/Sprites/Pages/Projects/Modelagens/.Thumbnails/Thumbnail3`, "col-6", "3", "./Application_main/Sprites/Pages/Projects/Modelagens/Sabre de Luz/Sabre", "col-6", "k_PortfolioPage_ProjectsTDMTitle", "k_PortfolioPage_ProjectsTDMDescription", "modal-xl"),
            new ProjectView(["modelagens"], "img", "col-3", ".png", `./Application_main/Sprites/Pages/Projects/Modelagens/.Thumbnails/Thumbnail2`, "col-6", "6", "./Application_main/Sprites/Pages/Projects/Modelagens/Hamburguer/Hamburguer", "col-6", "k_PortfolioPage_ProjectsBlenderGuru2019DonutTitle", "k_PortfolioPage_ProjectsBlenderGuru2019DonutDescription", "modal-xl"),
            new ProjectView(["modelagens"], "img", "col-3", ".png", `./Application_main/Sprites/Pages/Projects/Modelagens/.Thumbnails/Thumbnail1`, "col-6", "9", "./Application_main/Sprites/Pages/Projects/Modelagens/Rosquinha/Rosquinha", "col-6", "k_PortfolioPage_ProjectsBlenderGuru2019DonutTitle", "k_PortfolioPage_ProjectsBlenderGuru2019DonutDescription", "modal-lg"),

            new ProjectView(["processing"], "video", "col-3", ".mp4", `./Application_main/Sprites/Pages/Projects/Processing/.Thumbnails/Thumbnail1`, "col-6", "9", "./Application_main/Sprites/Pages/Projects/Modelagens/Rosquinha/Rosquinha", "col-6", "k_PortfolioPage_ProjectsBlenderGuru2019DonutTitle", "k_PortfolioPage_ProjectsBlenderGuru2019DonutDescription", "modal-lg"),
        ];
    }
    static SetupProjectsContent()
    {
        this.projectsNavbar = PortfolioPageController.selectedSection.appendChild(document.createElement("div"));
        let projectsNavbarSearch = this.projectsNavbar.appendChild(document.createElement("div"));
        let projectsNavbarSearchOutline = projectsNavbarSearch.appendChild(document.createElement("div"));
        let projectsNavbarSearchInput = projectsNavbarSearchOutline.appendChild(document.createElement("input"));
        let projectsNavbarSearchButton = projectsNavbarSearch.appendChild(document.createElement("button"));
        let projectsNavbarSearchButtonLink = projectsNavbarSearchButton.appendChild(document.createElement("i"));
        let navbarHr = this.projectsNavbar.appendChild(document.createElement("hr"));
        let projectsNavbarCategoriesTitle = this.projectsNavbar.appendChild(document.createElement("div"));
        let projectsNavbarCategoriesTitleTMP = this.projectsNavbar.appendChild(document.createElement("p"));
        let categoriesHr = this.projectsNavbar.appendChild(document.createElement("hr"));
        let projectsNavbarCategories = this.projectsNavbar.appendChild(document.createElement("div"));
        let projectsNavbarSoftwaresTitle = this.projectsNavbar.appendChild(document.createElement("div"));
        let projectsNavbarSoftwaresTitleTMP = this.projectsNavbar.appendChild(document.createElement("p"));
        let softwaresHr = this.projectsNavbar.appendChild(document.createElement("hr"));
        let projectsNavbarSoftwares = this.projectsNavbar.appendChild(document.createElement("div"));
        this.projectsSection = PortfolioPageController.selectedSection.appendChild(document.createElement("div"));

        this.projectsNavbar.classList.add("col-lg-3", "mt-5", "p-0");
        projectsNavbarSearch.classList.add("KeepCalm", "d-flex", "w-70", "m-0", "px-0", "pt-2", "pb-0", "input-group");
        projectsNavbarSearchOutline.classList.add("form-outline", "w-80");
        projectsNavbarSearchInput.classList.add("form-control");
        projectsNavbarSearchInput.id = "projectsSearchForm";
        projectsNavbarSearchInput.type = "search";
        projectsNavbarSearchInput.placeholder = "Pesquisar";
        projectsNavbarSearchButton.classList.add("btn", "btn-primary", "w-15");
        projectsNavbarSearchButton.type = "button";
        projectsNavbarSearchButton.addEventListener("click",() =>
        {
            console.log("Click");
            this.UpdateProjectsNavbar("");
            this.UpdateProjectsContent(projectsNavbarSearchInput.value);
        });
        projectsNavbarSearchButtonLink.classList.add("fas", "fa-search");

        navbarHr.classList.add("w-75", "mt-3", "mb-0", "p-0");
        projectsNavbarCategoriesTitle.classList.add("row", "mx-0", "mt-4", "mb-0", "p-0");
        projectsNavbarCategoriesTitleTMP.classList.add("row", "flex-row", "m-0", "p-0");
        projectsNavbarCategoriesTitleTMP.innerHTML = "Categorias";
        categoriesHr.classList.add("w-65", "m-0", "p-0");
        projectsNavbarCategories.classList.add("list-groups", "mx-0", "mt-2", "mb-0", "p-0", "w-75");
        projectsNavbarSoftwaresTitle.classList.add("row", "mx-0", "mt-5", "mb-0", "p-0");
        projectsNavbarSoftwaresTitleTMP.classList.add("row", "flex-row", "m-0", "p-0");
        projectsNavbarSoftwaresTitleTMP.innerHTML = "Softwares";
        softwaresHr.classList.add("w-65", "m-0", "p-0");
        projectsNavbarSoftwares.classList.add("list-groups", "mx-0", "mt-2", "mb-0", "p-0", "w-75");
        this.projectsSection.classList.add("col-lg-8", "mt-5", "p-0", "FadeIn");
        this.projectsSection.id = "ProjectsMoodboard";

        for (let i = 0; i < Object.values(Constants.ptBrContent["k_PortfolioPage_ProjectsCategories"]).length; i++)
        {
            let projectsNavbarCategoriesItem = projectsNavbarCategories.appendChild(document.createElement("div"))
            let projectsNavbarItemName = projectsNavbarCategoriesItem.appendChild(document.createElement("div"));
            let projectsNavbarItemQuantity = projectsNavbarCategoriesItem.appendChild(document.createElement("div"));
            let projectsNavbarItemNameTMP = projectsNavbarItemName.appendChild(document.createElement("button"));
            let projectsNavbarItemQuantityTMP = projectsNavbarItemQuantity.appendChild(document.createElement("p"));

            projectsNavbarCategoriesItem.classList.add("row", "m-0", "p-0");
            projectsNavbarItemName.classList.add("col-5", "m-0", "p-0","Calibri");
            projectsNavbarItemNameTMP.classList.add("row", "flex-row", "m-0", "p-0");
            projectsNavbarItemNameTMP.id = `Projetos${Object.keys(Constants.ptBrContent["k_PortfolioPage_ProjectsCategories"])[i]}Navbar`;
            projectsNavbarItemNameTMP.innerHTML = Object.keys(Language.GetElementByLanguage("k_PortfolioPage_ProjectsCategories"))[i];
            projectsNavbarItemQuantity.classList.add("col-5", "m-0", "px-3", "py-0", "Calibri");
            projectsNavbarItemQuantityTMP.classList.add("row", "flex-row-reverse", "m-0", "p-0");
            projectsNavbarItemQuantityTMP.id = `Projetos${Object.values(Constants.ptBrContent["k_PortfolioPage_ProjectsCategories"])[i]}Navbar`;
            projectsNavbarItemQuantityTMP.innerHTML = Object.values(Language.GetElementByLanguage("k_PortfolioPage_ProjectsCategories"))[i];

            projectsNavbarItemNameTMP.addEventListener("click",() =>
            {
                this.UpdateProjectsNavbar(projectsNavbarItemNameTMP.id);
                this.UpdateProjectsContent(Object.keys(Constants.ptBrContent["k_PortfolioPage_ProjectsCategories"])[i]);
            });
            this.projectNavbarCategoriesItems.push(projectsNavbarItemNameTMP);
        }

        for (let i = 0; i < Object.values(Constants.ptBrContent["k_PortfolioPage_ProjectsSoftwares"]).length; i++)
        {
            let projectsNavbarSoftwaresItem = projectsNavbarSoftwares.appendChild(document.createElement("div"))
            let projectsNavbarItemName = projectsNavbarSoftwaresItem.appendChild(document.createElement("div"));
            let projectsNavbarItemQuantity = projectsNavbarSoftwaresItem.appendChild(document.createElement("div"));
            let projectsNavbarItemNameTMP = projectsNavbarItemName.appendChild(document.createElement("button"));
            let projectsNavbarItemQuantityTMP = projectsNavbarItemQuantity.appendChild(document.createElement("p"));

            projectsNavbarSoftwaresItem.classList.add("row", "m-0", "p-0");
            projectsNavbarItemName.classList.add("col-5", "m-0", "p-0","Calibri");
            projectsNavbarItemNameTMP.classList.add("row", "flex-row", "m-0", "p-0");
            projectsNavbarItemNameTMP.id = `Projetos${Object.keys(Constants.ptBrContent["k_PortfolioPage_ProjectsSoftwares"])[i]}Navbar`;
            projectsNavbarItemNameTMP.innerHTML = Object.keys(Language.GetElementByLanguage("k_PortfolioPage_ProjectsSoftwares"))[i];
            projectsNavbarItemQuantity.classList.add("col-5", "m-0", "px-3", "py-0", "Calibri");
            projectsNavbarItemQuantityTMP.classList.add("row", "flex-row-reverse", "m-0", "p-0");
            projectsNavbarItemQuantityTMP.id = `Projetos${Object.values(Constants.ptBrContent["k_PortfolioPage_ProjectsSoftwares"])[i]}Navbar`;
            projectsNavbarItemQuantityTMP.innerHTML = Object.values(Language.GetElementByLanguage("k_PortfolioPage_ProjectsSoftwares"))[i];

            projectsNavbarItemNameTMP.addEventListener("click",() =>
            {
                this.UpdateProjectsNavbar(projectsNavbarItemNameTMP.id);
                this.UpdateProjectsContent(Object.keys(Constants.ptBrContent["k_PortfolioPage_ProjectsSoftwares"])[i]);
            });
            this.projectNavbarSoftwaresItems.push(projectsNavbarItemNameTMP);
        }
    }
    static SetupSelectedProjectContent()
    {
        this.selectedProjectSection = this.projectsSection.appendChild(document.createElement("div"));
        this.selectedProjectSection.classList.add("row", "w-100", "m-0", "p-0");
        this.selectedProjectSection.id = "CurrentProject";
    }
    static ShowSelectedProjectContent(selectedProjects)
    {
        if (selectedProjects === null) return;

        let instantiationOrder = 0;
        for (let selectedProject of selectedProjects)
        {
            MoodboardView.Create(instantiationOrder, this.selectedProjectSection, selectedProject, this.ShowSelectedProjectModalContent);
            instantiationOrder++;
        }

        do
        {
            setTimeout(() =>
            {
                for (let moodboardProject of MoodboardView.unloadedProjects)
                {
                    if (moodboardProject.readyState < 2) continue;
                    MoodboardView.loadedImages++;
                }
            }, 100);
        }
        while (MoodboardView.loadedImages != MoodboardView.unloadedProjects.length);
        MoodboardView.unloadedProjects = [];

        setTimeout
        (
            () =>
            {
                this.projectsSection.classList.remove("FadeOut");
                this.projectsSection.classList.add("FadeIn");
            },
            550
        )
    }
    static ShowSelectedProjectModalContent(selectedProject)
    {
        ModalView.modalDialogSize = selectedProject.modalDialogSize;
        ModalView.modalDialogPNL.classList.add(selectedProject.modalDialogSize);
        ModalView.ShowImageModal(selectedProject.carouselSize, selectedProject.numberOfSlides, selectedProject.carouselContentPath, selectedProject.descriptionSize, selectedProject.descriptionTitleKey, selectedProject.descriptionParagraphKey)
    }

    static UpdateProjectsNavbar(id)
    {
        for (let projectsNavbarCategoriesItem of this.projectNavbarCategoriesItems)
            projectsNavbarCategoriesItem.classList.add("deselected");
        for (let projectsNavbarSoftwaresItem of this.projectNavbarSoftwaresItems)
            projectsNavbarSoftwaresItem.classList.add("deselected");

        for (let projectsNavbarCategoriesItem of this.projectNavbarCategoriesItems)
        {
            if (projectsNavbarCategoriesItem.id !== id) continue;
            projectsNavbarCategoriesItem.classList.remove("deselected");
            projectsNavbarCategoriesItem.classList.add("selected");
            return;
        }
        for (let projectsNavbarSoftwaresItem of this.projectNavbarSoftwaresItems)
        {
            if (projectsNavbarSoftwaresItem.id !== id) continue;
            projectsNavbarSoftwaresItem.classList.remove("deselected");
            projectsNavbarSoftwaresItem.classList.add("selected");
            return;
        }
    }
    static UpdateProjectsContent(word)
    {
        let results = [];
        this.projectsSection.classList.remove("FadeIn");
        this.projectsSection.classList.add("FadeOut");

        for (let project of this.projects)
        {
            if (project.tags === undefined) continue;

            for (let tag of project.tags)
            {
                if (tag.toLowerCase() !== word.toLowerCase()) continue;
                results.push(project);
                break;
            }
        }

        setTimeout
        (
            () =>
            {
                while (this.selectedProjectSection.firstChild)
                    this.selectedProjectSection.removeChild(this.selectedProjectSection.lastChild);

                this.ShowSelectedProjectContent(results);
            },
            850
        );
    }
}