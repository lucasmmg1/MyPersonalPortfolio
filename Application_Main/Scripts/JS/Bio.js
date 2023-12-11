class Bio
{
    static fields =
    [
        "k_BioPage_Title",
        "k_BioPage_Subtitle",
        "k_BioPage_SmallDescription",
        "k_BioPage_ReadMore",
        "k_BioPage_BigLeftDescription",
        "k_BioPage_BigRightDescription",
        "k_BioPage_BigMiddleDescription",
    ];

    static Setup()
    {
        fetch('../HTML/Bio.html')
        .then(response => response.text())
        .then(data =>
        {
            document.querySelector('#BioContainer').innerHTML = data;

            let promise = Promise.resolve();
            for (let field of Bio.fields)
            {
                promise = promise.then(function()
                {
                    let url = new URL('../PHP/RetrieveData.php', window.location.href);
                    let params = {field: field, table: 'bio', language: Language.GetCurrentLanguage()};
                    url.search = new URLSearchParams(params).toString();

                    return fetch(url,
                    {
                        method: 'GET',
                    })
                    .then(response => response.json())
                    .then(data =>
                    {
                        if (data.status === 'success')
                            Bio.Set(field, data.data);
                    })
                    .catch(error =>
                    {
                        console.error('Error:', error);
                    });
                });
            }
        });
    }

    static Set(field, data)
    {
        switch (field)
        {
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
}