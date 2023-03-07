class ProjectView
{
    static tags = [];
    static previewType;
    static previewFileSize;
    static previewFileType;
    static previewFilePath;
    static numberOfSlides;
    static carouselContentPath;
    static descriptionTitleKey;
    static descriptionParagraphKey;
    static modalDialogSize;

    constructor(tags, previewType = undefined, previewImageSize = undefined, previewFileType = undefined, previewFilePath = undefined, numberOfSlides = undefined, carouselContentPath = undefined, descriptionTitleKey = undefined, descriptionParagraphKey = undefined, modalDialogSize = undefined)
    {
        this.tags = tags;
        this.previewType = previewType;
        this.previewFileSize = previewImageSize;
        this.previewFileType = previewFileType;
        this.previewFilePath = previewFilePath;
        this.numberOfSlides = numberOfSlides;
        this.carouselContentPath = carouselContentPath;
        this.descriptionTitleKey = descriptionTitleKey;
        this.descriptionParagraphKey = descriptionParagraphKey;
        this.modalDialogSize = modalDialogSize;
    }
}