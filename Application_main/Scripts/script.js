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
}