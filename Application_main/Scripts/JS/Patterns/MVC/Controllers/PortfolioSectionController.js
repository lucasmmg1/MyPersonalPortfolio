class PortfolioSectionController
{
    static Setup()
    {
        switch (PortfolioPageController.selectedPageId)
        {
            case "Bio":
                PortfolioBioSubsectionController.Setup();
                break;

            case "Projetos":
                PortfolioProjectsSubsectionController.Setup();
                break;

            case "Blog":
                break;

            default:
                break;
        }
    }
    static Show()
    {
        switch (PortfolioPageController.selectedPageId)
        {
            case "Bio":
                PortfolioBioSubsectionController.Show();
                break;

            case "Projetos":
                PortfolioProjectsSubsectionController.Show();
                break;

            case "Blog":
                break;

            default:
                break;
        }
    }
}