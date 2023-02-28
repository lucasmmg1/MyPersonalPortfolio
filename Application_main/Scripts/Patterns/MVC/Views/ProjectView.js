class ProjectView
{
    static tags = [];
    static previewType;
    static previewFileSize;
    static previewFileType;
    static previewFilePath;
    static carouselSize;
    static numberOfSlides;
    static carouselContentPath;
    static descriptionSize;
    static descriptionTitleKey;
    static descriptionParagraphKey;
    static modalDialogSize;

    constructor(tags, previewType = undefined, previewImageSize = undefined, previewFileType = undefined, previewFilePath = undefined, carouselSize = undefined, numberOfSlides = undefined, carouselContentPath = undefined, descriptionSize = undefined, descriptionTitleKey = undefined, descriptionParagraphKey = undefined, modalDialogSize = undefined)
    {
        this.tags = tags;
        this.previewType = previewType;
        this.previewFileSize = previewImageSize;
        this.previewFileType = previewFileType;
        this.previewFilePath = previewFilePath;
        this.carouselSize = carouselSize;
        this.numberOfSlides = numberOfSlides;
        this.carouselContentPath = carouselContentPath;
        this.descriptionSize = descriptionSize;
        this.descriptionTitleKey = descriptionTitleKey;
        this.descriptionParagraphKey = descriptionParagraphKey;
        this.modalDialogSize = modalDialogSize;
    }
}