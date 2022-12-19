function SetupHeader()
{
    SetupHeaderTitle();
}

function SetupHeaderTitle()
{
    let websiteHeader = document.getElementById('websiteHeader');
    let title = websiteHeader.appendChild(document.createElement("h1"));
    let typewriter = new Typewriter(title, {loop: false, delay: 85});
    title.classList.add("mx-auto", "mt-0", "mb-0", "p-0", "line-height-1", "text-opaque-dark");
    title.id = "TituloIndex";

    typewriter.typeString(USED_HEADER_TITLE).start();
}