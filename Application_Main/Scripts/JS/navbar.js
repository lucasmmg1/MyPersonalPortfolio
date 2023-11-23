let selectedPageId = "Bio";

function UpdateSelectedPageId(id)
{
    selectedPageId = id;
}
function UpdateSelectedNavbarOption()
{
    let navbarOptionsElement = document.getElementById("NavbarOptions");

    for (let navbarOption of navbarOptionsElement.children)
    {
        navbarOption.classList.remove("selected");
        navbarOption.classList.add("deselected");

        if (navbarOption.id !== selectedPageId) continue;
        navbarOption.classList.remove("deselected");
        navbarOption.classList.add("selected");
    }
}