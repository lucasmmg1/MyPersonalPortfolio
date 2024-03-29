class Projects
{
    static results =
    {
        "k_ProjectsPage_SearchbarPlaceholder": "",
        "k_ProjectsPage_NavbarCategoriesTitle": "",
        "k_ProjectsPage_NoProjectFoundTitle": "",
        "k_ProjectsPage_NoProjectFoundSubtitle": "",
        "k_ProjectsPage_Projects": [],
    };

    static categories;
    static amounts;
    static defaultCategory = "apps";

    static Setup()
    {
        this.categories = {};
        this.amounts = {};

        fetch('Assets/Application_Main/Scripts/HTML/Projects.html')
        .then(response => response.text())
        .then(data =>
        {
            document.querySelector('#ProjectsContainer').innerHTML = data;
            Projects.Store().then(() => Projects.Assign().then(() => Projects.Show()));
        })
        .catch(error =>
        {
            console.error('Error in promise chain:', error);
        });
    }
    static Store()
    {
        let promises = [];

        for (let field of Object.keys(Projects.results))
        {
            let url = new URL('Assets/Application_Main/Scripts/PHP/Queries/RetrieveProjectsPageData.php', window.location.href);
            let params = {field: field, table: 'Projects', language: Language.GetCurrentLanguage()};
            url.search = new URLSearchParams(params).toString();

            let promise = fetch(url, {method: 'GET'})
            .then(response =>
            {
                switch (response.ok)
                {
                    case true:
                        return response.json();
                    case false:
                        throw new Error("Network response was not ok.");
                }
            })
            .then(data =>
            {
                switch (data.status)
                {
                    case 'success':
                        Projects.results[field] = data.data;
                        break;
                    case 'error':
                        Projects.results[field] = "";
                        break;
                }
            })
            .catch(error =>
            {
                console.error('Error:', error);
            });

            promises.push(promise);
        }
        return Promise.all(promises);
    }
    static Assign()
    {
        let AssignSearchbarValues = (data) =>
        {
            let projectsSearchForm = document.getElementById("projectsSearchForm");
            projectsSearchForm.classList.add("Calibri");
            projectsSearchForm.placeholder = data;
        }
        let AssignNavbarCategoriesTitle = (data) =>
        {
            let projectsNavbarCategoriesTitleTMP = document.getElementById("ProjectsNavbarCategoriesTitleTMP");
            projectsNavbarCategoriesTitleTMP.classList.add("Cabin-Medium");
            projectsNavbarCategoriesTitleTMP.innerHTML = data;
        }

        let promise = Promise.resolve();
        for (let [key, value] of Object.entries(Projects.results))
        {
            switch (key)
            {
                case "k_ProjectsPage_SearchbarPlaceholder":
                    AssignSearchbarValues(value);
                    break;
                case "k_ProjectsPage_NavbarCategoriesTitle":
                    AssignNavbarCategoriesTitle(value);
                    break;
                case "k_ProjectsPage_Projects":
                    this.SetNavbarValues();
                    this.SetProjectValues(this.RetrieveProjectsByCategory(this.defaultCategory), MoodboardType.Navbar);
            }
        }
        return promise;
    }
    static Show()
    {
        let promise = Promise.resolve();
        let projects = document.getElementById("projects");
        projects.classList.remove("opacity-0");
        projects.classList.add("FadeIn");
        return promise;
    }

    static ResetSearchbarValues()
    {
        let projectsSearchForm = document.getElementById("projectsSearchForm");
        projectsSearchForm.classList.remove("border", "border-danger");
    }
    static SetNavbarValues()
    {
        for (let project of JSON.parse(Projects.results["k_ProjectsPage_Projects"]))
        {
            if (project.default_thumbnail === "") continue;

            if (!this.categories.hasOwnProperty(project.category))
                this.categories[project.category] = project.category_pretty;

            this.amounts[project.category] = this.amounts.hasOwnProperty(project.category) ? this.amounts[project.category] + 1: 1;
        }

        let projectsNavbarCategories = document.getElementById("ProjectsNavbarCategories");
        for (let category in this.categories)
        {
            let option = projectsNavbarCategories.appendChild(document.createElement("div"));
            option.classList.add("d-flex", "flex-row", "m-0", "p-0", "Calibri");
            let optionText = option.appendChild(document.createElement("button"));
            optionText.classList.add("w-75", "m-0", "p-0", "text-start");
            optionText.innerHTML = this.categories[category];
            optionText.addEventListener("click", function()
            {
                Projects.ResetSearchbarValues();
                Projects.ResetSearchValues();

                Projects.ResetNavbarValues();
                this.classList.add("selected", "enable-link");

                Projects.ResetProjectsValues();
                Projects.SetProjectValues(Projects.RetrieveProjectsByCategory(category), MoodboardType.Navbar);
            });
            let optionCount = option.appendChild(document.createElement("p"));
            optionCount.classList.add("w-25", "m-0", "p-0", "text-end");
            optionCount.innerHTML = this.amounts[category];
        }
        projectsNavbarCategories.firstChild.firstChild.classList.add("selected", "enable-link");
    }
    static ResetNavbarValues()
    {
        let projectsNavbarCategories = document.getElementById("ProjectsNavbarCategories");
        for (let option of projectsNavbarCategories.children)
            option.firstChild.classList.remove("selected", "enable-link");
    }
    static SetProjectValues(projects, moodboardType)
    {
        let projectsMoodboard = document.getElementById("ProjectsMoodboard");
        if (projects.length === 0)
        {
            let noProjectsFoundPlaceholder = projectsMoodboard.appendChild(document.createElement("div"));
            noProjectsFoundPlaceholder.classList.add("d-flex", "flex-column", "mx-0", "my-5", "p-0", "align-items-center", "justify-content-center");
            let noProjectsFoundPlaceholderIMG = noProjectsFoundPlaceholder.appendChild(document.createElement("img"));
            noProjectsFoundPlaceholderIMG.classList.add("w-25", "mx-0", "mt-0", "mb-2", "p-0");
            noProjectsFoundPlaceholderIMG.src = `https://cdn.lucasmartinmacedo.com/_uploads/images/R89smw4RFiflcQQuvGAeO7KCLvORepBA.gif`;
            let noProjectsFoundPlaceholderTitle = noProjectsFoundPlaceholder.appendChild(document.createElement("h3"));
            noProjectsFoundPlaceholderTitle.classList.add("w-100", "mx-0", "mt-4", "mb-0", "p-0", "text-center", "Cabin-Bold");
            noProjectsFoundPlaceholderTitle.innerHTML = Projects.results["k_ProjectsPage_NoProjectFoundTitle"];
            let noProjectsFoundPlaceholderSubtitle = noProjectsFoundPlaceholder.appendChild(document.createElement("p"));
            noProjectsFoundPlaceholderSubtitle.classList.add("w-50", "m-0", "p-0", "text-center", "tmpcolor_8f8f8f", "Cabin-Medium");
            noProjectsFoundPlaceholderSubtitle.innerHTML = Projects.results["k_ProjectsPage_NoProjectFoundSubtitle"];
            return;
        }

        let promises = [];
        for (let project of projects)
        {
            if (project.default_thumbnail === "") continue;
            promises.push(new Promise(resolve =>
            {
                let projectContainer = projectsMoodboard.appendChild(document.createElement("div"));
                projectContainer.classList.add(project.default_thumbnail_size, "mx-0", "my-0", "p-1");
                projectContainer.classList.remove("col-3", "w-26dot5", "w-46dot5");
                let projectLink = projectContainer.appendChild(document.createElement("a"));
                projectLink.type = "button";
                projectLink.classList.add("overlay", "m-0", "p-0");
                projectLink.dataset.bsToggle = "modal";
                projectLink.dataset.bsTarget = "#modalContent";
                projectLink.onclick = function()
                {
                    let modal = new bootstrap.Modal(document.getElementById('Modal'));
                    modal.show();

                    let modalDialog = document.getElementById("ModalDialog");
                    let modalContent = document.getElementById("ModalContent");
                    modalDialog.classList.remove("modal-dialog-portrait", "modal-dialog-landscape", "modal-dialog-squared");
                    modalContent.classList.remove("modal-content-portrait", "modal-content-landscape", "modal-content-squared");

                    switch (project.modal_orientation)
                    {
                        case "portrait":
                            modalDialog.classList.add("modal-dialog-portrait");
                            modalContent.classList.add("modal-content-portrait");
                            break;
                        case "landscape":
                            modalDialog.classList.add("modal-dialog-landscape");
                            modalContent.classList.add("modal-content-landscape");
                            break;
                        case "squared":
                            modalDialog.classList.add("modal-dialog-squared");
                            modalContent.classList.add("modal-content-squared");
                            break;
                    }

                    let modalContentCarouselIndicators = document.getElementById("ModalContentCarouselIndicators");
                    while (modalContentCarouselIndicators.firstChild)
                        modalContentCarouselIndicators.removeChild(modalContentCarouselIndicators.lastChild);

                    let modalContentCarouselInner = document.getElementById("ModalContentCarouselInner");
                    while (modalContentCarouselInner.firstChild)
                        modalContentCarouselInner.removeChild(modalContentCarouselInner.lastChild);

                    for (let i = 0; i < project.modal_carousel.length; i++)
                    {
                        let carouselElement = project.modal_carousel[i];

                        let carouselIndicator = modalContentCarouselIndicators.appendChild(document.createElement("button"));
                        carouselIndicator.type = "button";
                        carouselIndicator.dataset.bsTarget = "#ModalContentCarousel";
                        carouselIndicator.dataset.bsSlideTo = i;
                        carouselIndicator.setAttribute("aria-label", `Slide ${i + 1}`);

                        let carouselItem = modalContentCarouselInner.appendChild(document.createElement("div"));
                        carouselItem.classList.add("carousel-item");

                        if (i === 0)
                        {
                            carouselIndicator.classList.add("active");
                            carouselItem.classList.add("active");
                        }

                        let carouselItemImage = carouselItem.appendChild(document.createElement("img"));
                        carouselItemImage.classList.add("d-block", "w-100");
                        carouselItemImage.src = carouselElement.img;
                    }

                    let modalContentDescriptionTitle = document.getElementById("ModalContentDescriptionTitle");
                    modalContentDescriptionTitle.innerHTML = project.modal_title;
                    let modalContentDescriptionSubtitle = document.getElementById("ModalContentDescriptionSubtitle");
                    modalContentDescriptionSubtitle.innerHTML = project.modal_subtitle;
                    let modalContentDescriptionDescription = document.getElementById("ModalContentDescriptionDescription");
                    modalContentDescriptionDescription.innerHTML = project.modal_description;

                    let carousel = new bootstrap.Carousel(document.getElementById('ModalContentCarousel'));
                    //carousel.dataset.bsInterval = 5000;
                    carousel.cycle();
                };
                let projectImage = projectLink.appendChild(document.createElement("img"));
                projectImage.classList.add("w-100", "m-0", "p-0");
                let image = new Image();
                image.onload = function()
                {
                    projectImage.src = this.src;
                    resolve();
                    image = null;
                };
                switch (moodboardType)
                {
                    case "Navbar":
                        projectContainer.classList.add(project.default_thumbnail_size);
                        image.src = project.default_thumbnail;
                        break;
                    case "Search":
                        projectContainer.classList.add("col-3");
                        image.src = project.search_thumbnail;
                        break;
                }
            }));
        }

        Promise.all(promises).then(() =>
        {
            projectsMoodboard.classList.add("FadeIn");
            projectsMoodboard.addEventListener('animationend', function()
            {
                this.classList.remove("FadeIn");
            });
            setTimeout(function()
            {
                projectsMoodboard.classList.remove("opacity-0");
            }, 50);
        });
    }
    static ResetProjectsValues()
    {
        let projectsMoodboard = document.getElementById("ProjectsMoodboard");
        projectsMoodboard.classList.add("opacity-0");

        while (projectsMoodboard.firstChild)
            projectsMoodboard.removeChild(projectsMoodboard.lastChild);
    }
    static ResetSearchValues()
    {
        let projectsSearchForm = document.getElementById("projectsSearchForm");
        projectsSearchForm.value = "";
    }
    static RetrieveProjectsByCategory(category)
    {
        let list = [];
        for (let project of JSON.parse(Projects.results["k_ProjectsPage_Projects"]))
        {
            if (project.category === category)
                list.push(project);
        }
        return list;
    }
    static RetrieveProjectsByTag(tag)
    {
        // .replace(/\W/gi, "")  // Remove all non-alphanumeric characters
        // .replace(" ", "")     // Remove all spaces
        // .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove all accents
        // .toLowerCase();       // Convert to lowercase
        let substring = tag.replace(/\W/gi, "").replace(" ", "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        let list = [];
        for (let project of JSON.parse(Projects.results["k_ProjectsPage_Projects"]))
        {
            if (project.tags.some(tag => tag.replace(/\W/gi, "").replace(" ", "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(substring)))
                list.push(project);
        }
        return list;
    }
    static OnSearchButtonPressed()
    {
        Projects.ResetSearchbarValues();

        let projectsSearchForm = document.getElementById("projectsSearchForm");
        if (projectsSearchForm.value === "")
        {
            projectsSearchForm.classList.add("border", "border-danger");
            return;
        }

        Projects.ResetNavbarValues();
        Projects.ResetProjectsValues();
        Projects.SetProjectValues(Projects.RetrieveProjectsByTag(projectsSearchForm.value), MoodboardType.Search);
    }
}