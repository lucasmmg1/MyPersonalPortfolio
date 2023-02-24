class DocumentController
{
    static Setup()
    {
        if (Language.GetCurrentLanguage() === null)
            Language.SetCurrentLanguage("pt-BR");

        document.documentElement.lang = Language.GetCurrentLanguage();
    }
}