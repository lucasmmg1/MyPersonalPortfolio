let websiteContent;
let selectedSection;

function SetupSection()
{
    websiteContent = document.getElementById("websiteContent");
    SetupSelectedSection();
}

function SetupSelectedSection()
{
    for (let pageId of pagesIds)
    {
        if (pageId !== `${selectedPageId}`) continue;

        selectedSection = websiteContent.appendChild(document.createElement("div"));
        selectedSection.id = `${pageId}Section`;
        UpdateSectionContent();


        websiteContent.classList.remove("FadeOut");
        websiteContent.classList.add("FadeIn");
        selectedSection.classList.add("row", "mx-0", "my-0", "justify-content-center", "align-items-center");

        break;
    }
}
function UpdateSelectedSection()
{
    websiteContent.classList.remove("FadeIn");
    websiteContent.classList.add("FadeOut");

    setTimeout
    (
        () =>
        {
            websiteContent.removeChild(selectedSection);
            SetupSelectedSection();
        },
        1000
    );
}
function UpdateSectionContent()
{
    switch (selectedPageId)
    {
        case "Bio":
            ShowBio();
            break;

        case "Projetos":
            ShowProjects();
            break;
    }
}