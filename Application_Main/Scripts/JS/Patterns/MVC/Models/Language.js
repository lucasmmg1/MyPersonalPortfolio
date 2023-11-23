class Language
{
    static availableLanguages =
    {
        "pt-br" : "português brasileiro",
        "en-us" : "american english",
    };

    static GetElementByLanguage(key)
    {
        let returnValue;

        switch (document.documentElement.lang)
        {
            case "pt-br":
                returnValue = Constants.ptBrContent[key];
                break;

            case "en-us":
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
    static SetCurrentLanguage(languageCode)
    {
        localStorage.setItem("language", languageCode);
    }
}