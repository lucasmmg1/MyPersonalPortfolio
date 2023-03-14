class PortfolioProjectsSubsectionController
{
    static projectsNavbar;
    static moodboardSection;
    static selectedProjectSection;
    static projects;
    static previousSearch;
    static categoryMode;

    static Setup()
    {
        ModalView.Create();
        this.SetupProjects();
        this.SetupProjectsContent();
        this.SetupSelectedProjectContent();
    }
    static Show()
    {
        this.previousSearch = this.projects[0].name;
        this.UpdateProjectsNavbar(this.projects[0].name);
        this.UpdateProjectsContent(this.projects[0].name);
        document.getElementById('websiteMiddleNavbar').scrollIntoView({behavior: 'smooth'});
    }
    static SetupProjects()
    {
        this.projects =
        [
            new CategoryView
            (
                Language.GetElementByLanguage("k_PortfolioPage_ProjectsApps"),
                [Constants.ptBrContent["k_PortfolioPage_ProjectsApps"], Constants.enUsContent["k_PortfolioPage_ProjectsApps"], "aplicações", "app", "aplicativo", "programa", "celular", "cellphone", "apple", "android", "ios", "mobile"],
                CategoryMode.OK,
                ProjectType.Category,
                [
                    new ProjectView(["*"]),
                    new ProjectView(["*"]),
                    new ProjectView(["*", "unity", "unity-3d", "mundo bita", "mundo", "bita", "video", "videos", "criança", "crianças", "infantil", "infantis", "fazendinha", "natureza", "animal", "animais", "amigo", "amigos", "musica", "musicas"], "img", "col-6", ".png", `../../Sprites/Pages/Projects/Aplicativos/a_Thumbnails/Navbar/Thumbnail4`, `../../Sprites/Pages/Projects/Aplicativos/a_Thumbnails/Search/Thumbnail4`, "9", "../../Sprites/Pages/Projects/Aplicativos/Mundo Bita/MundoBita", "k_PortfolioPage_ProjectsMundoBitaUpdate", "k_PortfolioPage_ProjectsMundoBitaTitle", "k_PortfolioPage_ProjectsMundoBitaDescription", "modal-xxl"),
                    new ProjectView(["*", "unity", "unity-3d", "galinha pintadinha", "galinha", "pintadinha", "galinhas", "pitadinhas", "pitinho", "galo", "animal", "animais", "pinto", "galo carijó", "galo", "carijo", "video", "videos", "criança", "crianças", "infatil", "infantis", "musica", "musicas"], "img", "col-6", ".png", `../../Sprites/Pages/Projects/Aplicativos/a_Thumbnails/Navbar/Thumbnail3`, `../../Sprites/Pages/Projects/Aplicativos/a_Thumbnails/Search/Thumbnail3`,  "5", "../../Sprites/Pages/Projects/Aplicativos/Galinha Pintadinha/GalinhaPintadinha", "k_PortfolioPage_ProjectsGalinhaPintadinhaUpdate", "k_PortfolioPage_ProjectsGalinhaPintadinhaTitle", "k_PortfolioPage_ProjectsGalinhaPintadinhaDescription", "modal-xxl"),
                    new ProjectView(["*", "unity", "unity-3d", "turma da mônica", "turma da monica", "turma", "mônica", "monica", "cascão", "cascao", "magali", "cebolinha", "cebola", "monicão", "monicao", "bidu", "louco", "amigos", "crianças", "quadrinho", "quadrinhos", "comic", "comics", "história em quadrinhos", "historia em quadrinhos", "história", "historia", "comic book", "comic books", "infatil", "infatis", "infatojuvenil", "infantojuvenis", "infanto-juvenil", "infanto-juvenis", "melância", "melancia", "coelho", "coelhos", "coelhada", "coelhadas", "sansão", "sansao"], "img", "col-3", ".png", `../../Sprites/Pages/Projects/Aplicativos/a_Thumbnails/Navbar/Thumbnail2`, `../../Sprites/Pages/Projects/Aplicativos/a_Thumbnails/Search/Thumbnail2`,  "10", "../../Sprites/Pages/Projects/Aplicativos/TDM/TDM", "k_PortfolioPage_ProjectsTDMUpdate", "k_PortfolioPage_ProjectsTDMTitle", "k_PortfolioPage_ProjectsTDMDescription", "modal-lg"),
                    new ProjectView(["*", "unity", "unity-3d", "luccas neto", "luccas", "neto", "lucas neto", "lucas", "irmãos neto", "roxteen", "roxstar", "música", "musica", "infatil", "infatojuvenil", "infantojuvenis", "infanto-juvenil", "infanto-juvenis", "infanto juvenil", "infanto juvenis", "infantis", "pvp", "batalha", "multiplayer", "multijogador", "multi-jogador", "multi-jogadores", "multijogadores", "amigos", "musicas", "músicas"], "img", "col-3", ".png", `../../Sprites/Pages/Projects/Aplicativos/a_Thumbnails/Navbar/Thumbnail1`, `../../Sprites/Pages/Projects/Aplicativos/a_Thumbnails/Search/Thumbnail1`,  "10", "../../Sprites/Pages/Projects/Aplicativos/Roxteen Roxstar/RoxteenRoxstar", "k_PortfolioPage_ProjectsRoxteenRoxstarUpdate", "k_PortfolioPage_ProjectsRoxteenRoxstarTitle", "k_PortfolioPage_ProjectsRoxteenRoxstarDescription", "modal-lg"),
                ],
            ),
            new CategoryView
            (
                Language.GetElementByLanguage("k_PortfolioPage_ProjectsGames"),
                [Constants.ptBrContent["k_PortfolioPage_ProjectsGames"], Constants.enUsContent["k_PortfolioPage_ProjectsGames"], "videogame", "videogames", "game", "jogo", "indie", "pc", "computador"],
                CategoryMode.Maintenance,
                ProjectType.Category
            ),
            new CategoryView
            (
                Language.GetElementByLanguage("k_PortfolioPage_Projects3DModels"),
                [Constants.ptBrContent["k_PortfolioPage_Projects3DModels"], Constants.enUsContent["k_PortfolioPage_Projects3DModels"], "render", "modelagem", "renderização", "rendering"],
                CategoryMode.OK,
                ProjectType.Category,
                [
                    new ProjectView(["*"]),
                    new ProjectView(["*", "ilusão de ótica", "ilusão de otica", "ilusao de ótica", "ilusão de otica", "ilusão", "ilusao", "ótica", "otica", "quadrado", "blender", "3d"], "img", "col-3", ".png", `../../Sprites/Pages/Projects/Modelagens/a_Thumbnails/Navbar/Thumbnail5`, `../../Sprites/Pages/Projects/Modelagens/a_Thumbnails/Search/Thumbnail5`,  "1", "../../Sprites/Pages/Projects/Modelagens/Ilusao/Ilusao", "k_PortfolioPage_ProjectsOpticalIllusionUpdate", "k_PortfolioPage_ProjectsOpticalIllusionTitle", "k_PortfolioPage_ProjectsOpticalIllusionDescription", "modal-lg"),
                    new ProjectView(["*", "blender", "3d", "starwars", "star wars", "star", "wars", "guerra nas estrelas", "guerra", "estrelas", "guerras", "estrela", "nave", "tie fighter", "tie", "fighter", "cruzador imperial", "cruzador", "imperial", "nave de guerra", "warship", "império galáctico", "imperio galáctico", "império galactico", "imperio galactico", "império galático", "império galatico", "imperio galático", "imperio galatico", "império", "imperio", "galáctico", "galactico", "galático", "galatico"], "img", "col-6", ".png", `../../Sprites/Pages/Projects/Modelagens/a_Thumbnails/Navbar/Thumbnail4`, `../../Sprites/Pages/Projects/searchPreviewPlaceholder`,  "15", "../../Sprites/Pages/Projects/Modelagens/Tie Fighter/TieFighter", "k_PortfolioPage_ProjectsTieFighterUpdate", "k_PortfolioPage_ProjectsTieFighterTitle", "k_PortfolioPage_ProjectsTieFighterDescription", "modal-xl"),
                    new ProjectView(["*", "sabre", "luz", "luke", "guerra", "estrelas", "guerras", "estrela", "blender", "3d", "light saber", "lightsaber", "luke skywalker", "skywalker", "star wars", "guerra nas estrelas", "sabre de luz", "arma", "espada", "lase", "kyber kristal", "kyber", "guerra", "nas", "estrelas", "star", "wars"], "img", "col-6", ".png", `../../Sprites/Pages/Projects/Modelagens/a_Thumbnails/Navbar/Thumbnail3`,  `../../Sprites/Pages/Projects/searchPreviewPlaceholder`, "3", "../../Sprites/Pages/Projects/Modelagens/Sabre de Luz/Sabre", "k_PortfolioPage_ProjectsLukesLightsaberUpdate", "k_PortfolioPage_ProjectsLukesLightsaberTitle", "k_PortfolioPage_ProjectsLukesLightsaberDescription", "modal-xl"),
                    new ProjectView(["*", "blender", "3d", "hamburguer", "alimento", "alimentos", "food", "foods", "junkfood", "junk food", "comida", "comidas", "ingredientes", "ingrediente", "ingredients", "ingredient", "lettuce", "alface", "alfaces", "fastfood", "fast food", "fast-food", "tomate", "tomato", "tomatos", "tomates", "vegetal", "vegetais", "vegetable", "vegetables", "fruta", "frutas", "fruit", "fruits", "bacon", "cheese", "queijo", "queijos", "pão", "pao", "bread", "mcdonald's", "mc donald's", "mc donalds", "mcdonalds", "mc"], "img", "col-3", ".png", `../../Sprites/Pages/Projects/Modelagens/a_Thumbnails/Navbar/Thumbnail2`, `../../Sprites/Pages/Projects/Modelagens/a_Thumbnails/Search/Thumbnail2`,  "6", "../../Sprites/Pages/Projects/Modelagens/Hamburguer/Hamburguer", "k_PortfolioPage_ProjectsDefaultCube2021HamburguerUpdate", "k_PortfolioPage_ProjectsDefaultCube2021HamburguerTitle", "k_PortfolioPage_ProjectsDefaultCube2021HamburguerDescription", "modal-lg"),
                    new ProjectView(["*", "blender", "3d", "rosquinha", "massa", "massas", "comida", "comidas", "doce", "doces", "candy", "donut", "blender guru", "blender-guru", "blenderguru", "andrew pierce", "andrew", "pierce", "granulado", "sprinkles", "sprinkle", "sparkle", "sparkles", "coffee", "café", "cafe", "bebida", "xícara", "xicara", "xícaras", "xicaras", "cup"], "img", "col-3", ".png", `../../Sprites/Pages/Projects/Modelagens/a_Thumbnails/Navbar/Thumbnail1`, `../../Sprites/Pages/Projects/Modelagens/a_Thumbnails/Search/Thumbnail1`,  "9", "../../Sprites/Pages/Projects/Modelagens/Rosquinha/Rosquinha", "k_PortfolioPage_ProjectsBlenderGuru2019DonutUpdate", "k_PortfolioPage_ProjectsBlenderGuru2019DonutTitle", "k_PortfolioPage_ProjectsBlenderGuru2019DonutDescription", "modal-lg"),
                ],
            ),
            new CategoryView
            (
                Language.GetElementByLanguage("k_PortfolioPage_ProjectsAnimations"),
                [Constants.ptBrContent["k_PortfolioPage_ProjectsAnimations"], Constants.enUsContent["k_PortfolioPage_ProjectsAnimations"]],
                CategoryMode.Maintenance,
                ProjectType.Category
            ),
            new CategoryView
            (
                Language.GetElementByLanguage("k_PortfolioPage_ProjectsPics"),
                [Constants.ptBrContent["k_PortfolioPage_ProjectsPics"], Constants.enUsContent["k_PortfolioPage_ProjectsPics"]],
                CategoryMode.Maintenance,
                ProjectType.Category
            ),
            new CategoryView
            (
                Language.GetElementByLanguage("k_PortfolioPage_ProjectsProcessing"),
                [Constants.ptBrContent["k_PortfolioPage_ProjectsProcessing"], Constants.enUsContent["k_PortfolioPage_ProjectsProcessing"]],
                CategoryMode.Maintenance,
                ProjectType.Software
            ),
        ]
    }
    static SetupProjectsContent()
    {
        function OnSearchInputKeyUp(event)
        {
            for (let category of PortfolioProjectsSubsectionController.projects)
            {
                category.element.classList.remove("enable-link");
                category.element.classList.add("disable-link");
            }

            if (event.keyCode !== 13 || projectsNavbarSearchInput.value === null || projectsNavbarSearchInput.value === "")
            {
                return;
            }

            let str = projectsNavbarSearchInput.value.toLowerCase();
            event.preventDefault();

            if (PortfolioProjectsSubsectionController.previousSearch === str)
            {
                return;
            }

            PortfolioProjectsSubsectionController.UpdateProjectsNavbar(str);
            PortfolioProjectsSubsectionController.UpdateProjectsContent(str);
            PortfolioProjectsSubsectionController.previousSearch = str;
        }

        function OnSearchButtonClicked()
        {
            for (let category of PortfolioProjectsSubsectionController.projects)
            {
                category.element.classList.remove("enable-link");
                category.element.classList.add("disable-link");
            }

            if (projectsNavbarSearchInput.value === null || projectsNavbarSearchInput.value === "")
            {
                return;
            }

            let str = projectsNavbarSearchInput.value.toLowerCase();

            if (PortfolioProjectsSubsectionController.previousSearch === str)
            {
                return;
            }

            PortfolioProjectsSubsectionController.UpdateProjectsNavbar(str);
            PortfolioProjectsSubsectionController.UpdateProjectsContent(str);
            PortfolioProjectsSubsectionController.previousSearch = str;
        }

        function OnNavbarItemClicked(name, id)
        {
            for (let category of PortfolioProjectsSubsectionController.projects)
            {
                category.element.classList.remove("enable-link");
                category.element.classList.add("disable-link");
            }

            let str = name.toLowerCase();
            if (PortfolioProjectsSubsectionController.previousSearch === str) return;
            PortfolioProjectsSubsectionController.previousSearch = str;
            projectsNavbarSearchInput.value = "";
            PortfolioProjectsSubsectionController.UpdateProjectsNavbar(id);
            PortfolioProjectsSubsectionController.UpdateProjectsContent(str);
        }

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
        projectsNavbarSearchInput.addEventListener("keyup", OnSearchInputKeyUp);
        let projectsNavbarSearchButton = projectsNavbarSearch.appendChild(document.createElement("button"));
        projectsNavbarSearchButton.classList.add("btn", "btn-primary");
        projectsNavbarSearchButton.id = "ProjectsNavbarSearchButton";
        projectsNavbarSearchButton.type = "button";
        projectsNavbarSearchButton.addEventListener("click", OnSearchButtonClicked);
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

        for (let category of this.projects)
        {
            let projectsNavbarCategoriesItem;

            switch (category.type)
            {
                case ProjectType.Category:
                    projectsNavbarCategoriesItem = projectsNavbarCategories.appendChild(document.createElement("div"));
                    break;

                case ProjectType.Software:
                    projectsNavbarCategoriesItem = projectsNavbarSoftwares.appendChild(document.createElement("div"));
                    break;
            }

            projectsNavbarCategoriesItem.classList.add("d-flex", "flex-row", "m-0", "p-0", "Calibri");
            let projectsNavbarItemName = projectsNavbarCategoriesItem.appendChild(document.createElement("div"));
            projectsNavbarItemName.classList.add("col-10", "m-0", "p-0", "text-start");
            let projectsNavbarItemNameTMP = projectsNavbarItemName.appendChild(document.createElement("button"));
            projectsNavbarItemNameTMP.classList.add("m-0", "p-0");
            projectsNavbarItemNameTMP.id = category.name;
            projectsNavbarItemNameTMP.innerHTML = category.name;
            projectsNavbarItemNameTMP.addEventListener("click", () => OnNavbarItemClicked(category.name, projectsNavbarItemNameTMP.id));
            let projectsNavbarItemQuantity = projectsNavbarCategoriesItem.appendChild(document.createElement("div"));
            projectsNavbarItemQuantity.classList.add("col-2", "m-0", "p-0", "text-end");
            let projectsNavbarItemQuantityTMP = projectsNavbarItemQuantity.appendChild(document.createElement("p"));
            projectsNavbarItemQuantityTMP.classList.add("m-0", "p-0");
            projectsNavbarItemQuantityTMP.innerHTML = category.projects === undefined ? "?" : category.projects.length;
            category.element = projectsNavbarItemNameTMP;
        }

        this.moodboardSection = projectsSection.appendChild(document.createElement("div"));
        this.moodboardSection.classList.add("mx-auto", "my-0", "p-0", "FadeIn");
        this.moodboardSection.id = "ProjectsMoodboard";
    }
    static SetupSelectedProjectContent()
    {
        this.selectedProjectSection = this.moodboardSection.appendChild(document.createElement("div"));
        this.selectedProjectSection.classList.add("row", "w-100", "mx-0", "mt-5", "mb-0", "p-0");
        this.selectedProjectSection.id = "CurrentProject";
    }
    static ShowSelectedProjectContent(categoryMode, results, moodboardType)
    {
        function OnProjectsNotFound(selectedProjectSection)
        {
            let placeholderPNL = selectedProjectSection.appendChild(document.createElement("div"));
            let placeholderIMG = placeholderPNL.appendChild(document.createElement("img"));
            let placeholderTitleTMP = placeholderPNL.appendChild(document.createElement("h3"));
            let placeholderDescriptionTMP = placeholderPNL.appendChild(document.createElement("p"));

            placeholderPNL.classList.add("w-75", "m-auto");

            placeholderIMG.classList.add("w-50");
            placeholderIMG.src = "../../Sprites/Pages/Projects/projectsNotFound.gif";

            placeholderTitleTMP.classList.add("mx-auto", "mt-5", "mb-0", "p-0", "text-opaque-dark");
            placeholderTitleTMP.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_ProjectsNotFoundTitle");

            placeholderDescriptionTMP.classList.add("mx-auto", "mt-4", "mb-0", "p-0", "w-85", "text-opaque-light");
            placeholderDescriptionTMP.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_ProjectsNotFoundDescription");
        }
        function OnProjectsUnderMaintenance(selectedProjectSection)
        {
            let placeholderPNL = selectedProjectSection.appendChild(document.createElement("div"));
            let placeholderIMG = placeholderPNL.appendChild(document.createElement("img"));
            let placeholderTitleTMP = placeholderPNL.appendChild(document.createElement("h4"));
            let placeholderDescriptionTMP = placeholderPNL.appendChild(document.createElement("p"));

            placeholderPNL.classList.add("w-75", "m-auto");

            placeholderIMG.classList.add("w-50");
            placeholderIMG.src = "../../Sprites/Pages/Projects/projectsUnderDevelopment.gif";

            placeholderTitleTMP.classList.add("mx-auto", "mt-5", "mb-0", "p-0", "text-opaque-dark");
            placeholderTitleTMP.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_ProjectsUnderMaintenanceTitle");

            placeholderDescriptionTMP.classList.add("mx-auto", "mt-2", "mb-0", "p-0", "w-85", "text-opaque-light");
            placeholderDescriptionTMP.innerHTML = Language.GetElementByLanguage("k_PortfolioPage_ProjectsUnderMaintenanceDescription");
        }
        function OnProjectsFound(selectedProjectSection, moodboardType)
        {
            for (let result of results)
            {
                let instantiationOrder = 0;

                function ShowSelectedProjectModalContent()
                {
                    ModalView.ShowImageModal(result.modalDialogSize, result.numberOfSlides, result.carouselContentPath, result.lastEditedKey, result.descriptionTitleKey, result.descriptionParagraphKey);
                }

                MoodboardView.Create(instantiationOrder, selectedProjectSection, result, moodboardType, ShowSelectedProjectModalContent);
                instantiationOrder++;
            }
        }

        switch (categoryMode)
        {
            case CategoryMode.Maintenance:
                OnProjectsUnderMaintenance(this.selectedProjectSection);
                break;

            case CategoryMode.OK:
                if (results === null || results.length === 0)
                {
                    OnProjectsNotFound(this.selectedProjectSection);
                    break;
                }
                OnProjectsFound(this.selectedProjectSection, moodboardType);
                break;
        }

        setTimeout
        (
            () =>
            {
                this.moodboardSection.classList.remove("FadeOut");
                this.moodboardSection.classList.add("FadeIn");

                setTimeout(() =>
                {
                    for (let category of PortfolioProjectsSubsectionController.projects)
                    {
                        category.element.classList.remove("disable-link");
                        category.element.classList.add("enable-link");
                    }
                }, 1000);
            },
            550
        )
    }

    static UpdateProjectsNavbar(id)
    {
        this.categoryMode = CategoryMode.OK;

        for (let category of this.projects)
        {
            category.element.classList.remove("selected");
            category.element.classList.remove("deselected");
            category.element.classList.add("deselected");
        }

        for (let category of this.projects)
        {
            if (category.tags === undefined) continue;
            for (let tag of category.tags)
            {
                if (tag.toLowerCase() !== id.toLowerCase()) continue;
                category.element.classList.remove("deselected");
                category.element.classList.add("selected");
                this.categoryMode = category.mode;
                return;
            }
        }
    }
    static UpdateProjectsContent(word)
    {
        let results = [];
        let moodboardType = MoodboardType.Navbar;
        this.moodboardSection.classList.remove("FadeIn");
        this.moodboardSection.classList.add("FadeOut");

        loop1:
        for (let category of this.projects)
        {
            moodboardType = MoodboardType.Navbar;
            if (category.tags === undefined) continue;
            loop2:
            for (let tag of category.tags)
            {
                if (tag.toLowerCase() !== word.toLowerCase() || category.projects === undefined) continue;
                loop3:
                for (let project of category.projects)
                    results.push(project)
                break loop1;
            }

            moodboardType = MoodboardType.Search;
            if (category.projects === undefined) continue;
            loop2:
            for (let project of category.projects)
            {
                if (project.tags === undefined) continue;
                loop3:
                for (let tag of project.tags)
                {
                    if (tag.toLowerCase() !== word.toLowerCase()) continue;
                    results.push(project);
                }
            }
        }

        setTimeout
        (
            () =>
            {
                while (this.selectedProjectSection.firstChild)
                    this.selectedProjectSection.removeChild(this.selectedProjectSection.lastChild);

                this.ShowSelectedProjectContent(this.categoryMode, results, moodboardType);
            },
            850
        );
    }
}