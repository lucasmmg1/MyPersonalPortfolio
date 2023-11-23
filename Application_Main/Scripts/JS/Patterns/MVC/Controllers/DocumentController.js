class DocumentController
{
    static Setup()
    {
        if (Language.GetCurrentLanguage() === null)
            Language.SetCurrentLanguage(Object.keys(Language.availableLanguages)[0]);

        document.documentElement.lang = Language.GetCurrentLanguage();
    }
}