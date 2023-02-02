let processingDivision;
let processingSize = 1;
function ShowProcessing()
{
    SetupProcessingStructure();
    SetupProcessingContent();
}

function SetupProcessingStructure()
{
    processingDivision = projectsSection.appendChild(document.createElement("div"));
    processingDivision.classList.add("row", "w-100", "m-0", "p-0");
}
function SetupProcessingContent()
{
    let instantiationOrder = 0;

    for (let i = processingSize; i > 0; i--)
    {
        InstantiateMoodboardVideoProject(processingDivision, instantiationOrder, `./Application_main/Sprites/Pages/Projects/Processing/_Thumbnails`, `Thumbnail${i}.mp4`, "col-3", SetupModelagensModalContent);
        instantiationOrder++;
    }
}

function SetupProcessingModalContent()
{

}