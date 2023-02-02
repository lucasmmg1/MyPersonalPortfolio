function InstantiateMoodboardImageProject(content, instantiationOrder, imagePath, imageName, imageSize, contentAction)
{
    setTimeout(() =>
    {
        CheckIfImageExists
        (`${imagePath}/${imageName}`,
            function()
            {
                setTimeout(function()
                {
                    InstantiateImage(content, imagePath, imageName, imageSize, contentAction);
                }, instantiationOrder * 10);
            },
            function ()
            {
                let placeholder = content.appendChild(document.createElement("div"));
                placeholder.classList.add(imageSize);
            }
        )
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

    img.src = `${imagePath}/${imageName}`;
    img.classList.add("w-100");
    img.alt = "";
}
function CheckIfImageExists(url, OnImageLoadSucceeded, OnImageLoadFailed)
{
    let img = document.createElement("img");
    img.onload = OnImageLoadSucceeded;
    img.onerror = OnImageLoadFailed;

    img.src = url;
    img.remove();
}

function InstantiateMoodboardVideoProject(content, instantiationOrder, videoPath, videoName, videoSize, contentAction)
{
    setTimeout(() =>
    {
        CheckIfVideoExists
        (`${videoPath}/${videoName}`,
            function()
            {
                setTimeout(function()
                {
                    console.log("Loaded");
                    InstantiateVideo(content, videoPath, videoName, videoSize, contentAction);
                }, instantiationOrder * 10);
            },
            function ()
            {
                console.log("Failed");
                let placeholder = content.appendChild(document.createElement("div"));
                placeholder.classList.add(videoSize);
            }
        )
    })
}
function InstantiateVideo(content, videoPath, videoName, videoSize, contentAction)
{
    let link = content.appendChild(document.createElement("a"));
    let video = link.appendChild(document.createElement("video"));
    let source = video.appendChild(document.createElement("source"));

    link.type = "button";
    link.classList.add(videoSize, "p-1");
    link.dataset.bsToggle = "modal";
    link.dataset.bsTarget = "#modalContent";
    link.onclick = function()
    {
        contentAction(videoName);
    };

    video.classList.add("w-100");
    video.alt = "";

    source.src = `${videoPath}/${videoName}`;
    source.type = "video/mp4";
}
function CheckIfVideoExists(url, OnVideoLoadSucceeded, OnVideoLoadFailed)
{
    let video = document.createElement("video");
    let source = document.createElement("source");

    video.onloadeddata = OnVideoLoadSucceeded;
    video.onerror = OnVideoLoadFailed;

    video.type = "video/mp4";
    video.src = url;

    source.remove();
    video.remove();
}