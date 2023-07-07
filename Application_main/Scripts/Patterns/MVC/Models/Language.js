class Language
{
    static availableLanguages = ['pt-BR', 'en-US'];

    static GetElementByLanguage(key)
    {
        let returnValue;

        switch (document.documentElement.lang)
        {
            case "pt-BR":
                returnValue = Constants.ptBrContent[key];
                break;

            case "en-US":
                returnValue = Constants.enUsContent[key];
                break;

            default:
                break;
        }

        return returnValue;
    }

    static GetCurrentLanguage()
    {
        return localStorage.getItem("language");
    }
    static SetCurrentLanguage(currentLanguage)
    {
        localStorage.setItem("language", currentLanguage);
    }
}