function SetCurrentLanguage(currentLanguage)
{
    localStorage.setItem("language", currentLanguage);
}

function GetCurrentLanguage()
{
    return localStorage.getItem("language");
}