class ProjectView
{
    static tags = [];
    static previewType;
    static navbarPreviewFileSize;
    static searchPreviewFileSize;
    static previewFileType;
    static navbarPreviewFilePath;
    static searchPreviewFilePath;
    static numberOfSlides;
    static carouselContentPath;
    static lastEditedKey;
    static descriptionTitleKey;
    static descriptionParagraphKey;
    static modalDialogSize;

    constructor(tags, previewType = undefined, navbarPreviewFileSize = undefined, previewFileType = undefined, navbarPreviewFilePath = undefined, searchPreviewFilePath = undefined, numberOfSlides = undefined, carouselContentPath = undefined, lastEditedKey = undefined, descriptionTitleKey = undefined, descriptionParagraphKey = undefined, modalDialogSize = undefined)
    {
        this.tags = tags;
        this.previewType = previewType;
        this.navbarPreviewFileSize = navbarPreviewFileSize;
        this.searchPreviewFileSize = "col-3";
        this.previewFileType = previewFileType;
        this.navbarPreviewFilePath = navbarPreviewFilePath;
        this.searchPreviewFilePath = searchPreviewFilePath;
        this.numberOfSlides = numberOfSlides;
        this.carouselContentPath = carouselContentPath;
        this.lastEditedKey = lastEditedKey;
        this.descriptionTitleKey = descriptionTitleKey;
        this.descriptionParagraphKey = descriptionParagraphKey;
        this.modalDialogSize = modalDialogSize;
    }
}