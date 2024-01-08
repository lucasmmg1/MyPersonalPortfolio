class Language
{
    static codes = [];

    static Store(filename)
    {
        let url = new URL(filename, window.location.href);
        let params = {field: "code", table: 'Language'};
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
                    for (let code of data.data)
                        Language.codes.push(code["code"].toLowerCase());
                    break;
                case 'error':
                    Language.codes = [];
                    break;
            }
        })
        .catch(error =>
        {
            console.error('Error:', error);
        });
        return promise;
    }

    static GetCurrentLanguage()
    {
        return localStorage.getItem("language");
    }
    static SetCurrentLanguage(languageCode)
    {
        localStorage.setItem("language", languageCode);
    }
}