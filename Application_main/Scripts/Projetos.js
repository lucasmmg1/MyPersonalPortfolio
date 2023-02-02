let projectsDivision, projectsNavbar, projectsSection;
let projectsNavbarCategoriesItems = [];
let projectsNavbarSoftwaresItems = [];
let selectedOptionId;


function ShowProjects()
{
    selectedSection.classList.add("row", "w-85", "mt-5", "mx-auto", "p-0");
    projectsDivision = selectedSection.appendChild(document.createElement("div"));
    projectsDivision.classList.add("row", "w-100", "vh-100", "m-0", "p-0");

    SetupProjectsNavbar();
    InstantiateModal(document.body);
    selectedOptionId = projectsNavbarCategoriesItems[0].id;
    UpdateSelectedNavbarCategory();
    SetupProjectsSection();

    document.getElementById('websiteMiddleNavbar').scrollIntoView({behavior: 'smooth'});
}
function SetupProjectsNavbar()
{
    projectsNavbar = projectsDivision.appendChild(document.createElement("div"));
    let projectsNavbarSearch = projectsNavbar.appendChild(document.createElement("div"));
    let projectsNavbarSearchOutline = projectsNavbarSearch.appendChild(document.createElement("div"));
    let projectsNavbarSearchInput = projectsNavbarSearchOutline.appendChild(document.createElement("input"));
    let projectsNavbarSearchButton = projectsNavbarSearch.appendChild(document.createElement("button"));
    let projectsNavbarSearchButtonLink = projectsNavbarSearchButton.appendChild(document.createElement("i"));
    let hr = projectsNavbar.appendChild(document.createElement("hr"));

    projectsNavbar.classList.add("col-lg-3", "mt-5", "p-0");
    projectsNavbarSearch.classList.add("KeepCalm", "d-flex", "w-75", "m-0", "px-0", "pt-2", "pb-0", "input-group");
    projectsNavbarSearchOutline.classList.add("form-outline", "w-85");
    projectsNavbarSearchInput.classList.add("form-control");
    projectsNavbarSearchInput.id = "projectsSearchForm";
    projectsNavbarSearchInput.type = "search";
    projectsNavbarSearchInput.placeholder = "Pesquisar";
    projectsNavbarSearchButton.classList.add("btn", "btn-primary", "w-15");
    projectsNavbarSearchButton.type = "button";
    projectsNavbarSearchButtonLink.classList.add("fas", "fa-search");
    hr.classList.add("w-85", "mt-3", "mb-0", "p-0");

    SetupProjectsNavbarCategories();
    SetupProjectsNavbarSoftwares();
}
function SetupProjectsSection()
{
    projectsSection = projectsDivision.appendChild(document.createElement("div"));
    projectsSection.classList.add("col-lg-9", "mt-5", "p-0", "FadeIn");
    projectsSection.id = "ProjectsMoodboard";

    UpdateSelectedSectionCategoryContent();
}
function SetupProjectsNavbarCategories()
{
    let projectsNavbarCategoriesTitle = projectsNavbar.appendChild(document.createElement("div"));
    let projectsNavbarCategoriesTitleTMP = projectsNavbar.appendChild(document.createElement("p"));
    let hr = projectsNavbar.appendChild(document.createElement("hr"));
    let projectsNavbarCategories = projectsNavbar.appendChild(document.createElement("div"));

    projectsNavbarCategoriesTitle.classList.add("row", "mx-0", "mt-4", "mb-0", "p-0");
    projectsNavbarCategoriesTitleTMP.classList.add("row", "flex-row", "m-0", "p-0");
    projectsNavbarCategoriesTitleTMP.innerHTML = "Categorias";
    hr.classList.add("w-75", "m-0", "p-0");
    projectsNavbarCategories.classList.add("list-groups", "mx-0", "mt-2", "mb-0", "p-0", "w-75");

    for (let i = 0; i < Constants.PROJECTS_CATEGORIES_QUANTITIES.length; i++)
    {
        let projectsNavbarCategoriesItem = projectsNavbarCategories.appendChild(document.createElement("div"))
        let projectsNavbarItemName = projectsNavbarCategoriesItem.appendChild(document.createElement("div"));
        let projectsNavbarItemQuantity = projectsNavbarCategoriesItem.appendChild(document.createElement("div"));
        let projectsNavbarItemNameTMP = projectsNavbarItemName.appendChild(document.createElement("button"));
        let projectsNavbarItemQuantityTMP = projectsNavbarItemQuantity.appendChild(document.createElement("p"));

        projectsNavbarCategoriesItem.classList.add("row", "m-0", "p-0");
        projectsNavbarItemName.classList.add("col-6", "m-0", "p-0","Calibri");
        projectsNavbarItemNameTMP.classList.add("row", "flex-row", "m-0", "p-0");
        projectsNavbarItemNameTMP.id = `Projetos${PROJECTS_CATEGORIES_NAMES_PT[i]}Navbar`;
        projectsNavbarItemNameTMP.innerHTML = USED_PROJECTS_CATEGORIES_NAMES[i];
        projectsNavbarItemQuantity.classList.add("col-6", "m-0", "px-3", "py-0", "Calibri");
        projectsNavbarItemQuantityTMP.classList.add("row", "flex-row-reverse", "m-0", "p-0");
        projectsNavbarItemQuantityTMP.id = `Projetos${Constants.PROJECTS_CATEGORIES_QUANTITIES[i]}Navbar`;
        projectsNavbarItemQuantityTMP.innerHTML = Constants.PROJECTS_CATEGORIES_QUANTITIES[i];

        projectsNavbarItemNameTMP.addEventListener("click",() =>
        {
            selectedOptionId = projectsNavbarItemNameTMP.id;
            document.getElementById('websiteMiddleNavbar').scrollIntoView({behavior: 'smooth'});
            UpdateProjects();
        });
        projectsNavbarCategoriesItems.push(projectsNavbarItemNameTMP);
    }
}
function SetupProjectsNavbarSoftwares()
{
    let projectsNavbarSoftwaresTitle = projectsNavbar.appendChild(document.createElement("div"));
    let projectsNavbarSoftwaresTitleTMP = projectsNavbar.appendChild(document.createElement("p"));
    let hr = projectsNavbar.appendChild(document.createElement("hr"));
    let projectsNavbarSoftwares = projectsNavbar.appendChild(document.createElement("div"));

    projectsNavbarSoftwaresTitle.classList.add("row", "mx-0", "mt-5", "mb-0", "p-0");
    projectsNavbarSoftwaresTitleTMP.classList.add("row", "flex-row", "m-0", "p-0");
    projectsNavbarSoftwaresTitleTMP.innerHTML = "Softwares";
    hr.classList.add("w-75", "m-0", "p-0");
    projectsNavbarSoftwares.classList.add("list-groups", "mx-0", "mt-2", "mb-0", "p-0", "w-75");

    for (let i = 0; i < Constants.PROJECTS_SOFTWARES_QUANTITIES.length; i++)
    {
        let projectsNavbarSoftwaresItem = projectsNavbarSoftwares.appendChild(document.createElement("div"))
        let projectsNavbarItemName = projectsNavbarSoftwaresItem.appendChild(document.createElement("div"));
        let projectsNavbarItemQuantity = projectsNavbarSoftwaresItem.appendChild(document.createElement("div"));
        let projectsNavbarItemNameTMP = projectsNavbarItemName.appendChild(document.createElement("button"));
        let projectsNavbarItemQuantityTMP = projectsNavbarItemQuantity.appendChild(document.createElement("p"));

        projectsNavbarSoftwaresItem.classList.add("row", "m-0", "p-0");
        projectsNavbarItemName.classList.add("col-6", "m-0", "p-0","Calibri");
        projectsNavbarItemNameTMP.classList.add("row", "flex-row", "m-0", "p-0");
        projectsNavbarItemNameTMP.id = `Projetos${PROJECTS_SOFTWARES_NAMES_PT[i]}Navbar`;
        projectsNavbarItemNameTMP.innerHTML = USED_PROJECT_SOFTWARES_NAMES[i];
        projectsNavbarItemQuantity.classList.add("col-6", "m-0", "px-3", "py-0", "Calibri");
        projectsNavbarItemQuantityTMP.classList.add("row", "flex-row-reverse", "m-0", "p-0");
        projectsNavbarItemQuantityTMP.id = `Projetos${Constants.PROJECTS_SOFTWARES_QUANTITIES[i]}Navbar`;
        projectsNavbarItemQuantityTMP.innerHTML = Constants.PROJECTS_SOFTWARES_QUANTITIES[i];

        projectsNavbarItemNameTMP.addEventListener("click",() =>
        {
            selectedOptionId = projectsNavbarItemNameTMP.id;
            document.getElementById('websiteMiddleNavbar').scrollIntoView({behavior: 'smooth'});
            UpdateProjects();
        });
        projectsNavbarSoftwaresItems.push(projectsNavbarItemNameTMP);
    }
}


function UpdateSelectedNavbarCategory()
{
    for (let projectsNavbarCategoriesItem of projectsNavbarCategoriesItems)
        projectsNavbarCategoriesItem.classList.add("deselected");
    for (let projectsNavbarSoftwaresItem of projectsNavbarSoftwaresItems)
        projectsNavbarSoftwaresItem.classList.add("deselected");

    for (let projectsNavbarCategoriesItem of projectsNavbarCategoriesItems)
    {
        if (projectsNavbarCategoriesItem.id !== selectedOptionId) continue;
        projectsNavbarCategoriesItem.classList.remove("deselected");
        projectsNavbarCategoriesItem.classList.add("selected");
        return;
    }
    for (let projectsNavbarSoftwaresItem of projectsNavbarSoftwaresItems)
    {
        if (projectsNavbarSoftwaresItem.id !== selectedOptionId) continue;
        projectsNavbarSoftwaresItem.classList.remove("deselected");
        projectsNavbarSoftwaresItem.classList.add("selected");
        return;
    }
}
function UpdateSelectedSectionCategory()
{
    projectsSection.classList.remove("FadeIn");
    projectsSection.classList.add("FadeOut");

    setTimeout
    (
        () =>
        {
            projectsDivision.removeChild(projectsSection);
            SetupProjectsSection();
        },
        750
    );
}
function UpdateSelectedSectionCategoryContent()
{
    switch (selectedOptionId)
    {
        case "ProjetosAplicativosNavbar":
            ShowAplicativos();
            break;

        case "ProjetosJogosNavbar":
            break;

        case "ProjetosModelagensNavbar":
            ShowModelagens();
            break;

        case "ProjetosAnimaçõesNavbar":
            break;

        case "ProjetosFotografiasNavbar":
            break;

        case "ProjetosProcessingNavbar":
            ShowProcessing();
            break;
    }
}


function UpdateProjects()
{
    UpdateSelectedNavbarCategory();
    UpdateSelectedSectionCategory();
}