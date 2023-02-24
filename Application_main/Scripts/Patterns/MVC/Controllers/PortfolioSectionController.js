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

            default:
                break;
        }
    }
}