class Projects
{
    static fields =
    [
        "searchbar_placeholder",
        "projects",
    ];
    static values = {};

    static projects;
    static categories;
    static amounts;
    static defaultCategory = "apps";

    static Setup()
    {
        this.categories = {};
        this.amounts = {};

        fetch('../HTML/Projects.html')
        .then(response => response.text())
        .then(data =>
        {
            document.querySelector('#ProjectsContainer').innerHTML = data;

            let promise = Promise.resolve();
            for (let field of Projects.fields)
            {
                promise = promise.then(function()
                {
                    let url = new URL('../PHP/RetrieveData.php', window.location.href);
                    let params = {field: field, table: 'projects', language: Language.GetCurrentLanguage()};
                    url.search = new URLSearchParams(params).toString();

                    return fetch(url,
                    {
                        method: 'GET',
                    })
                    .then(response => response.json())
                    .then(data =>
                    {
                        if (data.status === 'success')
                            Projects.Set(field, data.data);
                    })
                    .catch(error =>
                    {
                        console.error('Error:', error);
                    });
                });
            }
        });
    }
    static Set(field, data)
    {
        switch (field)
        {
            case "searchbar_placeholder":
                this.SetSearchbarPlaceholder(data);
                break;

            case "projects":
                this.projects = JSON.parse(data);
                this.SetNavbar();
                this.SetProjects(this.RetrieveProjectsByCategory(this.defaultCategory), MoodboardType.Navbar);
        }
    }

    static SetSearchbarPlaceholder(data)
    {
        let projectsSearchForm = document.getElementById("projectsSearchForm");
        projectsSearchForm.placeholder = data;
    }
    static ResetSearchbar()
    {
        let projectsSearchForm = document.getElementById("projectsSearchForm");
        projectsSearchForm.classList.remove("border", "border-danger");
    }
    static SetNavbar()
    {
        for (let project of this.projects)
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
                Projects.ResetSearch();

                Projects.ResetNavbar();
                this.classList.add("selected", "enable-link");

                Projects.ResetProjects();
                Projects.SetProjects(Projects.RetrieveProjectsByCategory(category), MoodboardType.Navbar);
            });
            let optionCount = option.appendChild(document.createElement("p"));
            optionCount.classList.add("w-25", "m-0", "p-0", "text-end");
            optionCount.innerHTML = this.amounts[category];
        }
        projectsNavbarCategories.firstChild.firstChild.classList.add("selected", "enable-link");
    }
    static ResetNavbar()
    {
        let projectsNavbarCategories = document.getElementById("ProjectsNavbarCategories");
        for (let option of projectsNavbarCategories.children)
            option.firstChild.classList.remove("selected", "enable-link");
    }
    static RetrieveProjectsByCategory(category)
    {
        let list = [];
        for (let project of this.projects)
        {
            if (project.category === category)
                list.push(project);
        }
        return list;
    }
    static RetrieveProjectsByTag(tag)
    {
        let list = [];
        for (let project of this.projects)
        {
            if (project.tags.includes(tag))
                list.push(project);
        }
        return list;
    }
    static SetProjects(projects, moodboardType)
    {
        let projectsMoodboard = document.getElementById("ProjectsMoodboard");
        if (projects.length === 0)
        {
            let noProjectsFoundPlaceholder = projectsMoodboard.appendChild(document.createElement("div"));
            noProjectsFoundPlaceholder.classList.add("d-flex", "flex-column", "mx-0", "my-5", "px-0", "py-5", "align-items-center", "justify-content-center");

            let noProjectsFoundPlaceholderIMG = noProjectsFoundPlaceholder.appendChild(document.createElement("img"));
            noProjectsFoundPlaceholderIMG.classList.add("w-35", "m-0", "p-0");
            console.log(`${window.location.origin}/Assets/Projects/NoProjectsFoundPlaceholder.png`)
            noProjectsFoundPlaceholderIMG.src = `${window.location.origin}/Application_Main/Sprites/Pages/Projects/projectsNotFound.gif`;

            let noProjectsFoundPlaceholderTitle = noProjectsFoundPlaceholder.appendChild(document.createElement("p"));
            noProjectsFoundPlaceholderTMP.classList.add("w-35", "m-0", "p-0", "text-center", "Calibri");
            noProjectsFoundPlaceholderTMP.innerHTML = "No projects found";

            return;
        }

        for (let project of projects)
        {
            let projectContainer = projectsMoodboard.appendChild(document.createElement("div"));
            projectContainer.classList.add(project.default_thumbnail_size, "m-0", "p-1");

            if (project.default_thumbnail === "") continue;

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
                    carouselItemImage.src = `${window.location.origin}/${carouselElement.img}`;
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

            let thumbnail;
            projectContainer.classList.remove("col-3", "col-6");
            switch (moodboardType)
            {
                case "Navbar":
                    thumbnail = project.default_thumbnail;
                    projectContainer.classList.add(project.default_thumbnail_size);
                    break;

                case "Search":
                    thumbnail = project.search_thumbnail;
                    projectContainer.classList.add("col-3");
                    break;
            }
            projectImage.src = `${window.location.origin}/${thumbnail}`;
        }
    }
    static ResetProjects()
    {
        let projectsMoodboard = document.getElementById("ProjectsMoodboard");

        projectsMoodboard.classList.add("opacity-0");
        setTimeout(function()
        {
            projectsMoodboard.classList.remove("FadeIn");
        }, 50);

        while (projectsMoodboard.firstChild)
            projectsMoodboard.removeChild(projectsMoodboard.lastChild);

        setTimeout(function()
        {
            projectsMoodboard.classList.remove("opacity-0");
            projectsMoodboard.classList.add("FadeIn");
        }, 100);
    }
    static SetSearch()
    {
        Projects.ResetSearchbar();

        let projectsSearchForm = document.getElementById("projectsSearchForm");
        if (projectsSearchForm.value === "")
        {
            projectsSearchForm.classList.add("border", "border-danger");
            return;
        }

        Projects.ResetNavbar();
        Projects.ResetProjects();


        Projects.SetProjects(Projects.RetrieveProjectsByTag(projectsSearchForm.value), MoodboardType.Search);
    }
    static ResetSearch()
    {
        let projectsSearchForm = document.getElementById("projectsSearchForm");
        projectsSearchForm.value = "";
    }
}