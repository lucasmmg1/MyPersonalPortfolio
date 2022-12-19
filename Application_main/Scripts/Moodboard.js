const numberOfImagesPerRow = 3;

function InstantiateMoodboard(content, imagePath, numberOfMoodboardRows, contentAction)
{
    for (let i = numberOfMoodboardRows; i > 0; i--)
        InstantiateMoodboardRow(content, imagePath, i, contentAction);
}


function InstantiateMoodboardRow(content, imagePath, currentMoodboardRow, contentAction)
{
    let instantiationId = 0;
    let itemId = numberOfImagesPerRow * currentMoodboardRow;
    let moodboardRow = content.appendChild(document.createElement("div"));
    moodboardRow.classList.add("row", "m-0", "p-0");

    for (let i = itemId; i > itemId - 3; i--)
    {
        setTimeout(() => DecideImageSize(moodboardRow, currentMoodboardRow, itemId, imagePath, i, contentAction), 100 * instantiationId);
        instantiationId++;
    }
}
function DecideImageSize(content, currentMoodboardRow, itemId, imagePath, imageName, contentAction)
{
    let isImageBig = (currentMoodboardRow % 2 === 0 && imageName === itemId - 2) || (currentMoodboardRow % 2 === 1 && imageName === itemId);
    let isRowEven = (currentMoodboardRow % 2 === 0 && imageName === itemId - 2);
    let size = isImageBig ? "col-6" : "col-3";
    let timeout = isImageBig ?  isRowEven ? 30 : 10 : isRowEven ? 10 : 30;

    CheckIfImageExists(`${imagePath}${imageName}.png`,
    function()
    {
        setTimeout(function()
        {
            InstantiateImage(content, imagePath, imageName, size, contentAction);
        }, timeout);
    },
    function ()
    {
        let placeholder = content.appendChild(document.createElement("div"));
        placeholder.classList.add(size);
    })
}
function InstantiateImage(content, imagePath, imageName, imageSize, contentAction)
{
    let link = content.appendChild(document.createElement("a"));
    let img = link.appendChild(document.createElement("img"));

    link.type = "button";
    link.classList.add(imageSize, "p-1");
    link.dataset.bsToggle = "modal";
    link.dataset.bsTarget = "#modalContent";
    link.onclick = function()
    {
        contentAction(imageName);
    };

    img.src = `${imagePath}${imageName}.png`;
    img.classList.add("w-100");
    img.alt = "";
}

function CheckIfImageExists(url, OnImageLoadSucceeded, OnImageLoadFailed)
{
    let img = new Image();
    img.onload = OnImageLoadSucceeded;
    img.onerror = OnImageLoadFailed;

    img.src = url;
}