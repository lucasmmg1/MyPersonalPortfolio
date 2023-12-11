class Navbar
{
    static fields =
    [
        "k_Navbar_Title",
        "k_Navbar_BioOption",
        "k_Navbar_ProjectsOption",
    ];

    static Setup()
    {
        let promise = Promise.resolve();
        for (let field of Navbar.fields)
        {
            promise = promise.then(function()
            {
                let url = new URL('../PHP/RetrieveData.php', window.location.href);
                let params = {field: field, table: 'navbar', language: Language.GetCurrentLanguage()};
                url.search = new URLSearchParams(params).toString();

                return fetch(url,
                {
                    method: 'GET',
                })
                .then(response => response.json())
                .then(data =>
                {
                    if (data.status === 'success')
                        Navbar.Set(field, data.data);
                })
                .catch(error =>
                {
                    console.error('Error:', error);
                });
            });
        }
    }

    static Set(field, data)
    {
        switch (field)
        {
            case "k_Navbar_Title":
                let navbarTitleElement = document.getElementById("NavbarTitle");
                let navbarTitleTypewriter = new Typewriter(navbarTitleElement, {loop: false, delay: 85});
                navbarTitleTypewriter.typeString(data).start();
                break;

            case "k_Navbar_BioOption":
                let bioOptionContainer = document.getElementById("NavbarOptions");
                let bioOption = bioOptionContainer.appendChild(document.createElement("button"));
                bioOption.classList.add("row", "position-relative", "navbar-link", "selected");
                bioOption.id = data;
                bioOption.addEventListener('click', () =>
                {
                    let projectsOption = document.getElementById("Projetos");

                    projectsOption.classList.remove("selected");
                    projectsOption.classList.add("deselected");
                    bioOption.classList.remove("deselected");
                    bioOption.classList.add("selected");

                    document.querySelector('#ProjectsContainer').innerHTML = '';
                    Bio.Setup();
                }, true);
                let bioOptionPlaceholder = bioOption.appendChild(document.createElement("p"));
                bioOptionPlaceholder.classList.add("m-0", "p-0", "opacity-0");
                bioOptionPlaceholder.innerHTML = `${data}`;
                let bioOptionDefinitive = bioOption.appendChild(document.createElement("p"));
                bioOptionDefinitive.classList.add("m-0", "p-0", "position-absolute", "navbar-overlay");
                let bioOptionTypewriter = new Typewriter(bioOptionDefinitive, {loop: false, cursor: "", delay: 85});
                bioOptionTypewriter.typeString(data).start();
                break;

            case "k_Navbar_ProjectsOption":
                let projectsOptionContainer = document.getElementById("NavbarOptions");
                let projectsOption = projectsOptionContainer.appendChild(document.createElement("button"));
                projectsOption.classList.add("row", "position-relative", "navbar-link", "deselected");
                projectsOption.id = data;
                projectsOption.addEventListener('click', () =>
                {
                    let bioOption = document.getElementById("Bio");

                    bioOption.classList.remove("selected");
                    bioOption.classList.add("deselected");
                    projectsOption.classList.remove("deselected");
                    projectsOption.classList.add("selected");

                    document.querySelector('#BioContainer').innerHTML = '';
                    Projects.Setup();
                }, true);
                let projectsOptionPlaceholder = projectsOption.appendChild(document.createElement("p"));
                projectsOptionPlaceholder.classList.add("m-0", "p-0", "opacity-0");
                projectsOptionPlaceholder.innerHTML = `${data}`;
                let projectsOptionDefinitive = projectsOption.appendChild(document.createElement("p"));
                projectsOptionDefinitive.classList.add("m-0", "p-0", "position-absolute", "navbar-overlay");
                let projectsOptionTypewriter = new Typewriter(projectsOptionDefinitive, {loop: false, cursor: "", delay: 85});
                projectsOptionTypewriter.typeString(data).start();
                break;
        }
    }
}