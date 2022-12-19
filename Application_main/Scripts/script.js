function main()
{
    SetupDocument();
    SetupHead();
    SetupHeader();
    SetupNavbar();
    SetupSection();
}

function update()
{
    UpdateSelectedPageNavbar();
    UpdateSelectedSection();
}

main();