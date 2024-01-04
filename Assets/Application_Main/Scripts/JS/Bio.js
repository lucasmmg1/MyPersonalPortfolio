class Bio
{
    static results =
    {
        "k_BioPage_Title" : "",
        "k_BioPage_Subtitle" : "",
        "k_BioPage_SmallDescription" : "",
        "k_BioPage_ReadMore" : "",
        "k_BioPage_BigLeftDescription" : "",
        "k_BioPage_BigRightDescription" : "",
        "k_BioPage_BigMiddleDescription" : "",
    };

    static Setup()
    {
        fetch('../HTML/Bio.html')
        .then(response => response.text())
        .then(data =>
        {
            document.querySelector('#BioContainer').innerHTML = data;
            Bio.Store().then(() => Bio.Assign().then(() => Bio.Show()));
        })
        .catch(error =>
        {
            console.error('Error in promise chain:', error);
        });
    }
    static Store()
    {
        let promises = [];
        for (let field of  Object.keys(Bio.results))
        {
            let url = new URL('Queries/RetrieveBioPageData.php', window.location.href);
            let params = {field: field, table: 'Bio', language: Language.GetCurrentLanguage()};
            url.search = new URLSearchParams(params).toString();

            let promise = fetch(url, {method: 'GET'})
            .then(response =>
            {
                switch (response.ok)
                {
                    case true:
                        return response.json();
                    case false:
                        throw new Error("Network response was not ok.");
                }
            })
            .then(data =>
            {
                switch (data.status)
                {
                    case 'success':
                        Bio.results[field] = data.data;
                        break;
                    case 'error':
                        Bio.results[field] = "";
                        break;
                }
            })
            .catch(error =>
            {
                console.error('Error:', error);
            });

            promises.push(promise);
        }
        return Promise.all(promises);
    }
    static Assign()
    {
        let promise = Promise.resolve();
        for (let [key, value] of Object.entries(Bio.results))
        {
            switch (key)
            {
                case "k_BioPage_Title":
                    let bioTitle = document.getElementById("BioTitle");
                    bioTitle.innerHTML = value;
                    break;

                case "k_BioPage_Subtitle":
                    let bioSubtitle = document.getElementById("BioSubtitle");
                    bioSubtitle.innerHTML = value;
                    break;

                case "k_BioPage_SmallDescription":
                    let bioSmallDescription = document.getElementById("BioSmallDescription");
                    bioSmallDescription.innerHTML = value;
                    break;

                case "k_BioPage_ReadMore":
                    let bioReadMore = document.getElementById("BioReadMore");
                    bioReadMore.innerHTML = value;
                    break;

                case "k_BioPage_BigLeftDescription":
                    let bioBigLeftDescription = document.getElementById("BioBigLeftDescription");
                    bioBigLeftDescription.innerHTML = value;
                    break;

                case "k_BioPage_BigRightDescription":
                    let bioBigRightDescription = document.getElementById("BioBigRightDescription");
                    bioBigRightDescription.innerHTML = value;
                    break;

                case "k_BioPage_BigMiddleDescription":
                    let bioBigMiddleDescription = document.getElementById("BioBigMiddleDescription");
                    bioBigMiddleDescription.innerHTML = value;
                    break;
            }
        }
        return promise;
    }
    static Show()
    {
        let bio = document.getElementById("bio");
        bio.classList.remove("opacity-0");
        bio.classList.add("FadeIn");
    }
}