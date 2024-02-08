class Header
{
    static Setup()
    {
        Language.Store("Assets/Application_Main/Scripts/PHP/Queries/RetrieveLanguageData.php").then(() =>
        {
            Header.Assign()
            Navbar.Setup();
            Bio.Setup();
        });
    }

    static Assign()
    {
        Header.AssignLanguageCodes(Language.codes);
    }
    static AssignLanguageCodes(value)
    {
        Language.SetCurrentLanguage(Language.GetCurrentLanguage() || value[0]);

        let dropdownMenuButton = document.getElementById("dropdownMenuButton");
        dropdownMenuButton.innerHTML = Language.GetCurrentLanguage();
        let dropdownMenuContent = document.getElementById("dropdownMenuContent");

        for (let languageCode of value)
        {
            if (languageCode === Language.GetCurrentLanguage()) continue;
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
}

Header.Setup();