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
            new ProjectView(["*", "aplicativos"]),
            new ProjectView(["*", "aplicativos"]),
            new ProjectView(["*", "aplicativos"], "img", "col-6", ".png", `./Application_main/Sprites/Pages/Projects/Aplicativos/a_Thumbnails/Thumbnail4`, "0", "", "k_PortfolioPage_ProjectsMundoBitaTitle", "k_PortfolioPage_ProjectsMundoBitaDescription", "modal-lg"),
            new ProjectView(["*", "aplicativos"], "img", "col-6", ".png", `./Application_main/Sprites/Pages/Projects/Aplicativos/a_Thumbnails/Thumbnail3`, "0", "", "k_PortfolioPage_ProjectsGalinhaPintadinhaTitle", "k_PortfolioPage_ProjectsGalinhaPintadinhaDescription", "modal-lg"),
            new ProjectView(["*", "aplicativos"], "img", "col-3", ".png", `./Application_main/Sprites/Pages/Projects/Aplicativos/a_Thumbnails/Thumbnail2`, "0", "", "k_PortfolioPage_ProjectsTDMTitle", "k_PortfolioPage_ProjectsTDMDescription", "modal-lg"),
            new ProjectView(["*", "aplicativos"], "img", "col-3", ".png", `./Application_main/Sprites/Pages/Projects/Aplicativos/a_Thumbnails/Thumbnail1`, "0", "", "k_PortfolioPage_ProjectsRoxteenRoxstarTitle", "k_PortfolioPage_ProjectsRoxteenRoxstarDescription", "modal-lg"),
            new ProjectView(["*", "modelagens"]),
            new ProjectView(["*", "modelagens"], "img", "col-3", ".png", `./Application_main/Sprites/Pages/Projects/Modelagens/a_Thumbnails/Thumbnail5`, "1", "./Application_main/Sprites/Pages/Projects/Modelagens/Ilusao/Ilusao", "k_PortfolioPage_ProjectsOpticalIllusionTitle", "k_PortfolioPage_ProjectsOpticalIllusionDescription", "modal-lg"),
            new ProjectView(["*", "modelagens"], "img", "col-6", ".png", `./Application_main/Sprites/Pages/Projects/Modelagens/a_Thumbnails/Thumbnail4`, "15", "./Application_main/Sprites/Pages/Projects/Modelagens/Tie Fighter/TieFighter", "k_PortfolioPage_ProjectsTieFighterTitle", "k_PortfolioPage_ProjectsTieFighterDescription", "modal-xl"),
            new ProjectView(["*", "modelagens"], "img", "col-6", ".png", `./Application_main/Sprites/Pages/Projects/Modelagens/a_Thumbnails/Thumbnail3`, "3", "./Application_main/Sprites/Pages/Projects/Modelagens/Sabre de Luz/Sabre", "k_PortfolioPage_ProjectsLukesLightsaberTitle", "k_PortfolioPage_ProjectsLukesLightsaberDescription", "modal-xl"),
            new ProjectView(["*", "modelagens"], "img", "col-3", ".png", `./Application_main/Sprites/Pages/Projects/Modelagens/a_Thumbnails/Thumbnail2`, "6", "./Application_main/Sprites/Pages/Projects/Modelagens/Hamburguer/Hamburguer", "k_PortfolioPage_ProjectsDefaultCube2021HamburguerTitle", "k_PortfolioPage_ProjectsDefaultCube2021HamburguerDescription", "modal-lg"),
            new ProjectView(["*", "modelagens"], "img", "col-3", ".png", `./Application_main/Sprites/Pages/Projects/Modelagens/a_Thumbnails/Thumbnail1`, "9", "./Application_main/Sprites/Pages/Projects/Modelagens/Rosquinha/Rosquinha", "k_PortfolioPage_ProjectsBlenderGuru2019DonutTitle", "k_PortfolioPage_ProjectsBlenderGuru2019DonutDescription", "modal-lg"),

            new ProjectView(["*", "processing"], "video", "col-3", ".mp4", `./Application_main/Sprites/Pages/Projects/Processing/a_Thumbnails/Thumbnail1`, "9", "./Application_main/Sprites/Pages/Projects/Modelagens/Rosquinha/Rosquinha", "k_PortfolioPage_ProjectsBlenderGuru2019DonutTitle", "k_PortfolioPage_ProjectsBlenderGuru2019DonutDescription", "modal-lg"),
        ];
    }
    static SetupProjectsContent()
    {
        let projectsSection = PortfolioPageController.selectedSection.appendChild(document.createElement("div"));
        projectsSection.classList.add("d-flex", "mx-0", "mt-5", "mb-0", "p-0");
        projectsSection.id = "ProjectsSection";
        this.projectsNavbar = projectsSection.appendChild(document.createElement("div"));
        this.projectsNavbar.classList.add("mx-auto", "my-0", "p-0");
        this.projectsNavbar.id = "ProjectsNavbar";
        let projectsNavbarSearch = this.projectsNavbar.appendChild(document.createElement("div"));
        projectsNavbarSearch.classList.add("KeepCalm", "m-0", "p-0", "input-group");
        let projectsNavbarSearchOutline = projectsNavbarSearch.appendChild(document.createElement("div"));
        projectsNavbarSearchOutline.classList.add("form-outline");
        projectsNavbarSearchOutline.id = "ProjectsNavbarSearchOutline";
        let projectsNavbarSearchInput = projectsNavbarSearchOutline.appendChild(document.createElement("input"));
        projectsNavbarSearchInput.classList.add("form-control");
        projectsNavbarSearchInput.id = "projectsSearchForm";
        projectsNavbarSearchInput.type = "search";
        projectsNavbarSearchInput.placeholder = "Pesquisar";
        let projectsNavbarSearchButton = projectsNavbarSearch.appendChild(document.createElement("button"));
        projectsNavbarSearchButton.classList.add("btn", "btn-primary");
        projectsNavbarSearchButton.id = "ProjectsNavbarSearchButton";
        projectsNavbarSearchButton.type = "button";
        projectsNavbarSearchButton.addEventListener("click",() =>
        {
            this.UpdateProjectsNavbar("");
            this.UpdateProjectsContent(projectsNavbarSearchInput.value);
        });
        let projectsNavbarSearchButtonLink = projectsNavbarSearchButton.appendChild(document.createElement("i"));
        projectsNavbarSearchButtonLink.classList.add("fas", "fa-search");
        let projectsNavbarSearchHr = this.projectsNavbar.appendChild(document.createElement("hr"));
        projectsNavbarSearchHr.classList.add("mt-3", "mb-0", "p-0");
        projectsNavbarSearchHr.id = "ProjectsNavbarSearchHr";
        let projectsNavbarCategoriesTitle = this.projectsNavbar.appendChild(document.createElement("div"));
        projectsNavbarCategoriesTitle.classList.add("mx-0", "mt-4", "mb-0", "p-0", "text-start");
        let projectsNavbarCategoriesTitleTMP = projectsNavbarCategoriesTitle.appendChild(document.createElement("p"));
        projectsNavbarCategoriesTitleTMP.classList.add("m-0", "p-0");
        projectsNavbarCategoriesTitleTMP.innerHTML = "Categorias";
        let projectsNavbarCategoriesHr = this.projectsNavbar.appendChild(document.createElement("hr"));
        projectsNavbarCategoriesHr.classList.add("m-0", "p-0");
        projectsNavbarCategoriesHr.id = "ProjectsNavbarCategoriesHr";
        let projectsNavbarCategories = this.projectsNavbar.appendChild(document.createElement("div"));
        projectsNavbarCategories.classList.add("list-groups", "mx-0", "mt-2", "mb-0", "p-0");
        projectsNavbarCategories.id = "ProjectsNavbarCategories";

        for (let i = 0; i < Object.values(Constants.ptBrContent["k_PortfolioPage_ProjectsCategories"]).length; i++)
        {
            let projectsNavbarCategoriesItem = projectsNavbarCategories.appendChild(document.createElement("div"));
            projectsNavbarCategoriesItem.classList.add("d-flex", "flex-row", "m-0", "p-0", "Calibri");
            let projectsNavbarItemName = projectsNavbarCategoriesItem.appendChild(document.createElement("div"));
            projectsNavbarItemName.classList.add("col-6", "m-0", "p-0", "text-start");
            let projectsNavbarItemNameTMP = projectsNavbarItemName.appendChild(document.createElement("button"));
            projectsNavbarItemNameTMP.classList.add("m-0", "p-0");
            projectsNavbarItemNameTMP.id = `Projetos${Object.keys(Constants.ptBrContent["k_PortfolioPage_ProjectsCategories"])[i]}Navbar`;
            projectsNavbarItemNameTMP.innerHTML = Object.keys(Language.GetElementByLanguage("k_PortfolioPage_ProjectsCategories"))[i];
            projectsNavbarItemNameTMP.addEventListener("click",() =>
            {
                this.UpdateProjectsNavbar(projectsNavbarItemNameTMP.id);
                this.UpdateProjectsContent(Object.keys(Constants.ptBrContent["k_PortfolioPage_ProjectsCategories"])[i]);
            });
            let projectsNavbarItemQuantity = projectsNavbarCategoriesItem.appendChild(document.createElement("div"));
            projectsNavbarItemQuantity.classList.add("col-6", "m-0", "p-0", "text-end");
            let projectsNavbarItemQuantityTMP = projectsNavbarItemQuantity.appendChild(document.createElement("p"));
            projectsNavbarItemQuantityTMP.classList.add("m-0", "p-0");
            projectsNavbarItemQuantityTMP.id = `Projetos${Object.values(Constants.ptBrContent["k_PortfolioPage_ProjectsCategories"])[i]}Navbar`;
            projectsNavbarItemQuantityTMP.innerHTML = Object.values(Language.GetElementByLanguage("k_PortfolioPage_ProjectsCategories"))[i];
            this.projectNavbarCategoriesItems.push(projectsNavbarItemNameTMP);
        }

        let projectsNavbarSoftwaresTitle = this.projectsNavbar.appendChild(document.createElement("div"));
        projectsNavbarSoftwaresTitle.classList.add("mx-0", "mt-5", "mb-0", "p-0", "text-start");
        let projectsNavbarSoftwaresTitleTMP = projectsNavbarSoftwaresTitle.appendChild(document.createElement("p"));
        projectsNavbarSoftwaresTitleTMP.classList.add("m-0", "p-0");
        projectsNavbarSoftwaresTitleTMP.innerHTML = "Softwares";
        let projectsNavbarSoftwaresHr = this.projectsNavbar.appendChild(document.createElement("hr"));
        projectsNavbarSoftwaresHr.classList.add("m-0", "p-0");
        projectsNavbarSoftwaresHr.id = "ProjectsNavbarSoftwaresHr";
        let projectsNavbarSoftwares = this.projectsNavbar.appendChild(document.createElement("div"));
        projectsNavbarSoftwares.classList.add("list-groups", "mx-0", "mt-2", "mb-0", "p-0");
        projectsNavbarSoftwares.id = "ProjectsNavbarSoftwares";

        for (let i = 0; i < Object.values(Constants.ptBrContent["k_PortfolioPage_ProjectsSoftwares"]).length; i++)
        {
            let projectsNavbarSoftwaresItem = projectsNavbarSoftwares.appendChild(document.createElement("div"));
            projectsNavbarSoftwaresItem.classList.add("d-flex", "flex-row", "m-0", "p-0", "Calibri");
            let projectsNavbarItemName = projectsNavbarSoftwaresItem.appendChild(document.createElement("div"));
            projectsNavbarItemName.classList.add("col-6", "m-0", "p-0", "text-start");
            let projectsNavbarItemNameTMP = projectsNavbarItemName.appendChild(document.createElement("button"));
            projectsNavbarItemNameTMP.classList.add("m-0", "p-0");
            projectsNavbarItemNameTMP.id = `Projetos${Object.keys(Constants.ptBrContent["k_PortfolioPage_ProjectsSoftwares"])[i]}Navbar`;
            projectsNavbarItemNameTMP.innerHTML = Object.keys(Language.GetElementByLanguage("k_PortfolioPage_ProjectsSoftwares"))[i];
            projectsNavbarItemNameTMP.addEventListener("click",() =>
            {
                this.UpdateProjectsNavbar(projectsNavbarItemNameTMP.id);
                this.UpdateProjectsContent(Object.keys(Constants.ptBrContent["k_PortfolioPage_ProjectsSoftwares"])[i]);
            });
            let projectsNavbarItemQuantity = projectsNavbarSoftwaresItem.appendChild(document.createElement("div"));
            projectsNavbarItemQuantity.classList.add("col-6", "m-0", "p-0", "text-end");
            let projectsNavbarItemQuantityTMP = projectsNavbarItemQuantity.appendChild(document.createElement("p"));
            projectsNavbarItemQuantityTMP.classList.add("m-0", "p-0");
            projectsNavbarItemQuantityTMP.id = `Projetos${Object.values(Constants.ptBrContent["k_PortfolioPage_ProjectsSoftwares"])[i]}Navbar`;
            projectsNavbarItemQuantityTMP.innerHTML = Object.values(Language.GetElementByLanguage("k_PortfolioPage_ProjectsSoftwares"))[i];
            this.projectNavbarSoftwaresItems.push(projectsNavbarItemNameTMP);
        }

        this.projectsSection = projectsSection.appendChild(document.createElement("div"));
        this.projectsSection.classList.add("mx-auto", "my-0", "p-0", "FadeIn");
        this.projectsSection.id = "ProjectsMoodboard";
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
                console.log("Loading");
            }, 100);
        }
        while (MoodboardView.loadedImages !== MoodboardView.unloadedProjects.length);
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
        ModalView.ShowImageModal(selectedProject.modalDialogSize, selectedProject.numberOfSlides, selectedProject.carouselContentPath, selectedProject.descriptionTitleKey, selectedProject.descriptionParagraphKey)
    }

    static UpdateProjectsNavbar(id)
    {
        let projects = [];

        for (let projectsNavbarCategoriesItem of this.projectNavbarCategoriesItems)
            projects.push(projectsNavbarCategoriesItem);
        for (let projectsNavbarSoftwaresItem of this.projectNavbarSoftwaresItems)
            projects.push(projectsNavbarSoftwaresItem);
        for (let project of projects)
        {
            project.classList.remove("selected");
            project.classList.remove("deselected");
            project.classList.add(project.id === id ? "selected" : "deselected");
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