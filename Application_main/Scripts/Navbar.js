let websiteNavbar;

function SetupNavbar()
{
    SetupLanguageDropdown();
    SetupSelectedNavbar();
    UpdateSelectedPageNavbar();
}

function SetupLanguageDropdown()
{
    let dropdownMenuButton = document.getElementById("dropdownMenuButton");
    let dropdownMenuContent = document.getElementById("dropdownMenuContent");
    let nonActiveLanguages = availableLanguages.filter(function (value)
    {
        return value !== GetCurrentLanguage()
    });

    dropdownMenuButton.innerHTML = GetCurrentLanguage();

    for (let nonActiveLanguage of nonActiveLanguages)
    {
        let nonActiveLanguageOption = dropdownMenuContent.appendChild(document.createElement('a'));
        nonActiveLanguageOption.classList.add('dropdown-item', 'Calibri');
        nonActiveLanguageOption.onclick = function()
        {
            SetCurrentLanguage(nonActiveLanguage);
            document.location.reload();
        };

        nonActiveLanguageOption.innerHTML = nonActiveLanguage;
    }
}
function SetupSelectedNavbar()
{
    websiteNavbar = document.getElementById("websiteMiddleNavbar");

    for (let i = 0; i < pagesIds.length; i++)
    {
        let navbarOption = websiteNavbar.appendChild(document.createElement("button"));
        let typewriter = new Typewriter(navbarOption, {loop: false, cursor: "", delay: 85});

        navbarOption.classList.add("navbar-link", "w-15");
        navbarOption.id = `${pagesIds[i]}Navbar`;

        navbarOption.addEventListener('click', () =>
        {
            selectedPageId = pagesIds[i];
            update();
        },
        true);

        typewriter.typeString(`${USED_NAVBAR_OPTIONS[i]}`).start();
    }
}
function UpdateSelectedPageNavbar()
{
    for (let navbarOption of websiteNavbar.children)
    {
        navbarOption.classList.remove("selected");
        navbarOption.classList.add("deselected");

        if (navbarOption.id !== `${selectedPageId}Navbar`) continue;
        navbarOption.classList.remove("deselected");
        navbarOption.classList.add("selected");
    }
}