class MoodboardView
{
    static loadedImages;
    static unloadedProjects = [];

    static Create(instantiationOrder, content, projectView, contentAction)
    {
        this.loadedImages = 0;
        this.unloadedProjects = [];

        setTimeout(() =>
        {
            if (projectView.previewFilePath === undefined)
            {
                let placeholder = content.appendChild(document.createElement("div"));
                placeholder.classList.add("col-3");
                return;
            }

            setTimeout(function()
            {
                MoodboardView.InstantiateMedia(content, projectView, contentAction);
            }, instantiationOrder * 10);
        })
    }
    static InstantiateMedia(content, projectView, contentAction)
    {
        let media;
        let link = content.appendChild(document.createElement("a"));

        link.type = "button";
        link.classList.add(projectView.previewFileSize, "p-1");
        link.dataset.bsToggle = "modal";
        link.dataset.bsTarget = "#modalContent";
        link.onclick = function()
        {
            contentAction(projectView);
        };

        media = link.appendChild(document.createElement(projectView.previewType));
        if (media === undefined) return;
        media.onload = () => this.loadedImages++;
        media.classList.add("w-100");
        media.alt = "";
        media.src = `${projectView.previewFilePath}${projectView.previewFileType}`;

        this.unloadedProjects.push(media);
    }
}