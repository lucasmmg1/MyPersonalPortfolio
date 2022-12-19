function SetupDocument()
{
    console.log(GetCurrentLanguage());

    if (GetCurrentLanguage() === null)
        SetCurrentLanguage("pt-BR");

    document.documentElement.lang = GetCurrentLanguage();
    SetupContentLanguage(document.documentElement.lang);
}