let projectsDivision, projectsNavbar, projectsSection;
let projectsNavbarCategoriesItems = [];
let selectedProjectId;

function ShowProjects()
{
    selectedSection.classList.add("row", "w-85", "mt-5", "mx-auto", "p-0");
    projectsDivision = selectedSection.appendChild(document.createElement("div"));
    projectsDivision.classList.add("row", "w-100", "vh-100", "m-0", "p-0");

    SetupProjectsNavbar();
    InstantiateModal(document.body);
    selectedProjectId = projectsNavbarCategoriesItems[0].id;
    UpdateSelectedNavbarCategory();
    SetupProjectsSection();

    document.getElementById('websiteMiddleNavbar').scrollIntoView({behavior: 'smooth'});
}
function SetupProjectsNavbar()
{
    projectsNavbar = projectsDivision.appendChild(document.createElement("div"));
    projectsNavbar.classList.add("col-lg-3", "mt-5", "p-0");

    let projectsNavbarSearch = projectsNavbar.appendChild(document.createElement("div"));
    let projectsNavbarSearchOutline = projectsNavbarSearch.appendChild(document.createElement("div"));
    let projectsNavbarSearchInput = projectsNavbarSearchOutline.appendChild(document.createElement("input"));
    let projectsNavbarSearchButton = projectsNavbarSearch.appendChild(document.createElement("button"));
    let projectsNavbarSearchButtonLink = projectsNavbarSearchButton.appendChild(document.createElement("i"));
    let hr = projectsNavbar.appendChild(document.createElement("hr"))
    let projectsNavbarCategories = projectsNavbar.appendChild(document.createElement("div"));

    projectsNavbarSearch.classList.add("KeepCalm", "d-flex", "w-75", "m-0", "px-0", "pt-2", "pb-0", "input-group");
    projectsNavbarSearchOutline.classList.add("form-outline", "w-85");
    projectsNavbarSearchInput.classList.add("form-control");
    projectsNavbarSearchButton.classList.add("btn", "btn-primary", "w-15");
    projectsNavbarSearchButtonLink.classList.add("fas", "fa-search");
    hr.classList.add("w-85", "mt-3", "mb-0", "p-0");
    projectsNavbarCategories.classList.add("list-groups", "m-0", "p-0", "w-75");

    projectsNavbarSearchInput.type = "search";
    projectsNavbarSearchButton.type = "button";

    projectsNavbarSearchInput.id = "projectsSearchForm";
    projectsNavbarSearchInput.placeholder = "Pesquisar";

    for (let i = 0; i < USED_PROJECTS_CATEGORIES_QUANTITIES.length; i++)
    {
        let projectsNavbarCategoriesItem = projectsNavbarCategories.appendChild(document.createElement("div"))
        let projectsNavbarItemName = projectsNavbarCategoriesItem.appendChild(document.createElement("div"));
        let projectsNavbarItemQuantity = projectsNavbarCategoriesItem.appendChild(document.createElement("div"));
        let projectsNavbarItemNameText = projectsNavbarItemName.appendChild(document.createElement("button"));
        let projectsNavbarItemQuantityText = projectsNavbarItemQuantity.appendChild(document.createElement("p"));

        projectsNavbarCategoriesItem.classList.add("row", "m-0", "p-0");

        projectsNavbarItemName.classList.add("col-6", "my-1", "mx-0", "p-0","Calibri");
        projectsNavbarItemNameText.classList.add("row", "flex-row", "m-0", "p-0");
        projectsNavbarItemNameText.id = `Projetos${PROJECTS_CATEGORIES_NAMES_PT[i]}Navbar`;
        projectsNavbarItemNameText.innerHTML = USED_PROJECTS_CATEGORIES_NAMES[i];

        projectsNavbarItemQuantity.classList.add("col-6", "my-1", "mx-0", "px-3", "py-0", "Calibri");
        projectsNavbarItemQuantityText.classList.add("row", "flex-row-reverse", "m-0", "p-0");
        projectsNavbarItemQuantityText.id = `Projetos${USED_PROJECTS_CATEGORIES_QUANTITIES[i]}Navbar`;
        projectsNavbarItemQuantityText.innerHTML = USED_PROJECTS_CATEGORIES_QUANTITIES[i];

        projectsNavbarItemNameText.addEventListener("click",() =>
        {
            selectedProjectId = projectsNavbarItemNameText.id;
            document.getElementById('websiteMiddleNavbar').scrollIntoView({behavior: 'smooth'});
            UpdateProjects();
        });
        projectsNavbarCategoriesItems.push(projectsNavbarItemNameText);
    }
}
function SetupProjectsSection()
{
    projectsSection = projectsDivision.appendChild(document.createElement("div"));
    projectsSection.classList.add("col-lg-9", "mt-5", "p-0", "FadeIn");
    projectsSection.id = "ProjectsMoodboard";
    UpdateSelectedSectionCategoryContent();
}


function UpdateSelectedNavbarCategory()
{
    for (let projectsNavbarCategoriesItem of projectsNavbarCategoriesItems)
    {
        projectsNavbarCategoriesItem.classList.add("deselected");

        if (projectsNavbarCategoriesItem.id === selectedProjectId)
        {
            projectsNavbarCategoriesItem.classList.remove("deselected");
            projectsNavbarCategoriesItem.classList.add("selected");
        }
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
    switch (selectedProjectId)
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
    }
}

function UpdateProjects()
{
    UpdateSelectedNavbarCategory();
    UpdateSelectedSectionCategory();
}