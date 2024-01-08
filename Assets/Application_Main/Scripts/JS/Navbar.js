class Navbar
{
    static results =
    {
        "k_Navbar_Title": "",
        "k_Navbar_Options": ""
    };

    static Setup()
    {
        Navbar.Store().then(() => Navbar.Assign());
    }

    static Store()
    {
        let promises = [];
        for (let field of Object.keys(Navbar.results))
        {
            let url = new URL('Queries/RetrieveNavbarPageData.php', window.location.href);
            let params = {field: field, table: 'Navbar', language: Language.GetCurrentLanguage()};
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
                        Navbar.results[field] = data.data;
                        break;
                    case 'error':
                        Navbar.results[field] = "";
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
        let promise = Promise.resolve();
        for (let [key, value] of Object.entries(Navbar.results))
        {
            switch (key)
            {
                case "k_Navbar_Title":
                    Navbar.AssignTitle(value);
                    break;
                case "k_Navbar_Options":
                    Navbar.AssignOptions(value);
                    break;
            }
        }
        return promise;
    }
    static AssignTitle(data)
    {
        let navbarTitleElement = document.getElementById("NavbarTitle");
        let navbarTitleTypewriter = new Typewriter(navbarTitleElement, {loop: false, delay: 85});
        navbarTitleTypewriter.typeString(data).start();
    }
    static AssignOptions(data)
    {
        let json = JSON.parse(data);
        let navbarOptionsPNL = document.getElementById("NavbarOptions");

        for (let i = 0; i < json.length; i++)
        {
            let option = navbarOptionsPNL.appendChild(document.createElement("button"));
            option.classList.add("row", "position-relative", "navbar-link");
            option.classList.add(i === 0 ? "selected" : "deselected");

            option.id = json[i];
            option.addEventListener('click', () =>
            {
                for (let child of navbarOptionsPNL.children)
                {
                    if (child === option) continue;
                    child.classList.remove("selected");
                    child.classList.add("deselected");
                }

                option.classList.remove("deselected");
                option.classList.add("selected");
            }, true);
            let optionPlaceholder = option.appendChild(document.createElement("p"));
            optionPlaceholder.classList.add("m-0", "p-0", "opacity-0");
            optionPlaceholder.innerHTML = `${json[i]}`;
            let optionDefinitive = option.appendChild(document.createElement("p"));
            optionDefinitive.classList.add("m-0", "p-0", "position-absolute", "navbar-overlay", "Calibri");
            let optionTypewriter = new Typewriter(optionDefinitive, {loop: false, cursor: "", delay: 85});
            optionTypewriter.typeString(json[i]).start();
        }

        for (let i = 0; i < navbarOptionsPNL.children.length; i++)
        {
            let child = navbarOptionsPNL.children[i];

            switch (i)
            {
                case 0:
                    child.addEventListener('click', () =>
                    {
                        document.querySelector('#ProjectsContainer').innerHTML = '';
                        Bio.Setup();
                    }, true);
                    break;
                case 1:
                    child.addEventListener('click', () =>
                    {
                        document.querySelector('#BioContainer').innerHTML = '';
                        Projects.Setup();
                    }, true);
                    break;
            }
        }
    }
}

Navbar.Setup();
Bio.Setup();