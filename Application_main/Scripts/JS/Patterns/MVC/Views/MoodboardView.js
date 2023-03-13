class MoodboardView
{
    static Create(instantiationOrder, content, project, moodboardType, contentAction)
    {
        setTimeout(() =>
        {
            if (project.navbarPreviewFilePath === undefined)
            {
                let placeholder = content.appendChild(document.createElement("div"));
                placeholder.classList.add("col-3");
                return;
            }

            setTimeout(function()
            {
                MoodboardView.InstantiateMedia(content, project, contentAction, moodboardType);
            }, instantiationOrder * 10);
        })
    }
    static InstantiateMedia(content, project, contentAction, moodboardType)
    {
        let projectPNL = content.appendChild(document.createElement("div"));
        projectPNL.classList.add("m-0", "p-1");

        let projectBTN = projectPNL.appendChild(document.createElement("a"));
        projectBTN.type = "button";
        projectBTN.classList.add("overlay", "m-0", "p-0");
        projectBTN.dataset.bsToggle = "modal";
        projectBTN.dataset.bsTarget = "#modalContent";
        projectBTN.onclick = function()
        {
            contentAction(project);
        };

        let projectIMG = projectBTN.appendChild(document.createElement(project.previewType));
        if (projectIMG === undefined) return;
        projectIMG.classList.add("w-100");
        projectIMG.alt = "";

        switch (moodboardType)
        {
            case MoodboardType.Navbar:
                projectPNL.classList.add(project.navbarPreviewFileSize);
                projectIMG.src = `${project.navbarPreviewFilePath}${project.previewFileType}`;
                break;

            case MoodboardType.Search:
                projectPNL.classList.add(project.searchPreviewFileSize);
                projectIMG.src = `${project.searchPreviewFilePath}${project.previewFileType}`;
                break;
        }
    }
}