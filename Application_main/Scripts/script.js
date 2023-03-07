let currentPage;

function main()
{
    DocumentController.Setup();
    HeadController.Setup();

    switch (currentPage)
    {
        case "TerminalPage":
            TerminalPageController.Setup();
            break;

        case "PortfolioPage":
            PortfolioPageController.Setup();
            break;

        default:
            break;
    }

    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
}