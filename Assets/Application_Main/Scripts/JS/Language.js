class Language
{
    static availableLanguages =
    [
        "pt-br",
        "en-us",
    ];

    static SetupLanguages()
    {
        this.SetCurrentLanguage(this.GetCurrentLanguage() || this.availableLanguages[0]);

        let dropdownMenuButton = document.getElementById("dropdownMenuButton");
        dropdownMenuButton.innerHTML = Language.GetCurrentLanguage();
        let dropdownMenuContent = document.getElementById("dropdownMenuContent");

        for (let languageCode of Language.availableLanguages)
        {
            if (languageCode === this.GetCurrentLanguage()) continue;
            let nonActiveLanguageOption = dropdownMenuContent.appendChild(document.createElement('button'));
            nonActiveLanguageOption.classList.add('dropdown-item', 'Calibri');
            nonActiveLanguageOption.onclick = function()
            {
                Language.SetCurrentLanguage(languageCode);
                document.location.reload();
            };

            nonActiveLanguageOption.innerHTML = languageCode;
        }
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