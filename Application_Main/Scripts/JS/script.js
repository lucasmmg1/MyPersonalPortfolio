let fields =
[
    "k_Navbar_Title",
    "k_Navbar_BioOption",
    "k_Navbar_ProjectsOption",
    "k_BioPage_Title",
    "k_BioPage_Subtitle",
    "k_BioPage_SmallDescription",
    "k_BioPage_ReadMore",
    "k_BioPage_BigLeftDescription",
    "k_BioPage_BigRightDescription",
    "k_BioPage_BigMiddleDescription",
];

$(document).ready(function()
{
    for (let field of fields)
    {
        $.ajax
        ({
            url: "../PHP/RetrieveData.php",
            method: "GET",
            data:
            {
                field: field,
                language: "en-us"
            },
            success: function(data)
            {
                if (data.status === "success")
                {
                    SetupField(field, data.data);
                }
                else
                {

                }
            },
            error: function(error)
            {

            }
        });
    }
});

function SetupField(fieldName, data)
{
    switch (fieldName)
    {
        case "k_Navbar_Title":
            let navbarTitleElement = document.getElementById("NavbarTitle");
            let navbarTitleTypewriter = new Typewriter(navbarTitleElement, {loop: false, delay: 85});
            navbarTitleTypewriter.typeString(data).start();
            break;

        case "k_Navbar_BioOption": case "k_Navbar_ProjectsOption":
            let navbarOptionsElement = document.getElementById("NavbarOptions");
            let option = navbarOptionsElement.appendChild(document.createElement("button"));
            option.classList.add("row", "position-relative", "navbar-link");
            option.id = data;
            option.addEventListener('click', () =>
            {
                if (option.id === selectedPageId) return;
                UpdateSelectedPageId(option.id);
                UpdateSelectedNavbarOption();
            },
            true);
            let placeholderTMP = option.appendChild(document.createElement("p"));
            placeholderTMP.classList.add("m-0", "p-0", "opacity-0");
            placeholderTMP.innerHTML = `${data}`;
            let definitiveTMP = option.appendChild(document.createElement("p"));
            definitiveTMP.classList.add("m-0", "p-0", "position-absolute", "navbar-overlay");
            let navbarOptionsTypewriter = new Typewriter(definitiveTMP, {loop: false, cursor: "", delay: 85});
            navbarOptionsTypewriter.typeString(data).start();
            UpdateSelectedNavbarOption();
            break;

        case "k_BioPage_Title":
            let bioTitle = document.getElementById("BioTitle");
            bioTitle.innerHTML = data;
            break;

        case "k_BioPage_Subtitle":
            let bioSubtitle = document.getElementById("BioSubtitle");
            bioSubtitle.innerHTML = data;
            break;

        case "k_BioPage_SmallDescription":
            let bioSmallDescription = document.getElementById("BioSmallDescription");
            bioSmallDescription.innerHTML = data;
            break;

        case "k_BioPage_ReadMore":
            let bioReadMore = document.getElementById("BioReadMore");
            bioReadMore.innerHTML = data;
            break;

        case "k_BioPage_BigLeftDescription":
            let bioBigLeftDescription = document.getElementById("BioBigLeftDescription");
            bioBigLeftDescription.innerHTML = data;
            break;

        case "k_BioPage_BigRightDescription":
            let bioBigRightDescription = document.getElementById("BioBigRightDescription");
            bioBigRightDescription.innerHTML = data;
            break;

        case "k_BioPage_BigMiddleDescription":
            let bioBigMiddleDescription = document.getElementById("BioBigMiddleDescription");
            bioBigMiddleDescription.innerHTML = data;
            break;
    }
}