class Bio
{
    static results =
    {
        "k_BioPage_Title": "",
        "k_BioPage_Subtitle": "",
        "k_BioPage_SmallDescription": "",
        "k_BioPage_ReadMore": "",
        "k_BioPage_Topics": ""
    };

    static selectedTopic;

    static Setup()
    {
        fetch('Assets/Application_Main/Scripts/HTML/Bio.html')
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
            let url = new URL('Assets/Application_Main/Scripts/PHP/Queries/RetrieveBioPageData.php', window.location.href);
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
        let AssignBioTitle = (value) =>
        {
            let promise = new Promise((resolve) =>
            {
                let bioTitle = document.getElementById("BioSectionHeaderTitleTMP");
                bioTitle.innerHTML = value;
                resolve();
            });
            return promise;
        }
        let AssignBioSubtitle = (value) =>
        {
            let promise = new Promise((resolve) =>
            {
                let bioSubtitle = document.getElementById("BioSectionHeaderSubtitleTMP");
                bioSubtitle.innerHTML = value;

                setTimeout(function()
                {
                    resolve();
                }, 500);
            });
            return promise;
        }
        let AssignBioSmallDescription = (value) =>
        {
            let promise = new Promise((resolve) =>
            {
                let bioSmallDescription = document.getElementById("BioSectionHeaderDescriptionTMP");
                bioSmallDescription.innerHTML = value;
                resolve();
            });
            return promise;
        }
        let AssignBioReadMore = (value) =>
        {
            let promise = new Promise((resolve) =>
            {
                let bioReadMore = document.getElementById("BioSectionHeaderReadMoreTMP");
                bioReadMore.innerHTML = value;
                resolve();
            });
            return promise;
        }
        let AssignTopics = (value) =>
        {
            let bioSectionFooterLeftPNL = document.getElementById("BioSectionFooterLeftPNL");
            let topicAnswerTMP = document.getElementById("TopicAnswerTMP");
            let topics = JSON.parse(value);

            for (let i = 0; i < topics.length; i++)
            {
                let topicPNL = bioSectionFooterLeftPNL.appendChild(document.createElement("button"));
                topicPNL.classList.add("d-flex", "flex-row", "w-100", "m-0", "p-2", "rounded-1")
                let topicQuestionMarkPNL = topicPNL.appendChild(document.createElement("div"));
                topicQuestionMarkPNL.classList.add("d-flex", "flex-row", "w-5", "h-100", "m-0", "p-3", "align-items-center", "justify-content-start", "Cabin-Bold", "tmpcolor_9f0000", "topic-question-mark");
                let topicDescriptionPNL = topicPNL.appendChild(document.createElement("div"));
                topicDescriptionPNL.classList.add("d-flex", "flex-row", "w-90", "h-100", "m-0", "p-3", "align-items-center", "Cabin-Medium", "tmpcolor_d1d2cf", "topic-description");
                let topicDescriptionTMP = topicDescriptionPNL.appendChild(document.createElement("p"));
                topicDescriptionTMP.classList.add("m-0", "p-0");
                topicDescriptionTMP.innerHTML = topics[i].topic;
                let topicArrowPNL = topicPNL.appendChild(document.createElement("div"));
                topicArrowPNL.classList.add("d-none", "flex-row", "w-5", "h-100", "m-0", "p-3", "align-items-center", "justify-content-center", "tmpcolor_232323", "topic-arrow");
                let topicArrowIconIMG = topicArrowPNL.appendChild(document.createElement("i"));
                topicArrowIconIMG.classList.add("fas", "fa-chevron-right");
                if (i === 0)
                {
                    topicPNL.classList.add("bgcolor_f7f7f7");
                    topicDescriptionPNL.classList.remove("tmpcolor_d1d2cf");
                    topicDescriptionPNL.classList.add("tmpcolor_232323");
                    topicAnswerTMP.innerHTML = topics[i].description;
                    topicArrowPNL.classList.remove("d-none");
                    topicArrowPNL.classList.add("d-flex");
                    Bio.selectedTopic = topicPNL;
                }
                topicPNL.addEventListener("click", function()
                {
                    Bio.selectedTopic.classList.remove("bgcolor_f7f7f7");
                    Bio.selectedTopic.querySelector(".topic-description").classList.remove("tmpcolor_232323");
                    Bio.selectedTopic.querySelector(".topic-description").classList.add("tmpcolor_d1d2cf");
                    Bio.selectedTopic.querySelector(".topic-arrow").classList.remove("d-flex");
                    Bio.selectedTopic.querySelector(".topic-arrow").classList.add("d-none");
                    topicPNL.classList.add("bgcolor_f7f7f7");
                    topicDescriptionPNL.classList.remove("tmpcolor_d1d2cf");
                    topicDescriptionPNL.classList.add("tmpcolor_232323");
                    topicAnswerTMP.classList.remove("FadeIn");
                    topicAnswerTMP.classList.add("opacity-0");
                    let parser = new DOMParser();
                    let doc = parser.parseFromString(topics[i].description, 'text/html');
                    let imgs = doc.querySelectorAll('img');

                    let promises = Array.from(imgs).map(img =>
                    {
                        return new Promise(resolve =>
                        {
                            let image = new Image();
                            image.onload = resolve;
                            image.src = img.src;
                        });
                    });

                    if (promises.length === 0) promises.push(Promise.resolve());

                    Promise.all(promises).then(() =>
                    {
                        topicAnswerTMP.innerHTML = topics[i].description;
                        setTimeout(function()
                        {
                            topicAnswerTMP.classList.remove("opacity-0");
                            topicAnswerTMP.classList.add("FadeIn");
                        }, 50);
                    });
                    topicArrowPNL.classList.remove("d-none");
                    topicArrowPNL.classList.add("d-flex");
                    Bio.selectedTopic = topicPNL;
                });
            }
        }
        let AssignBioPicture = () =>
        {
            let promise = new Promise((resolve) =>
            {
                let bioPicture = document.getElementById("BioPictureIMG");
                bioPicture.onload = function()
                {
                    resolve();
                };
                bioPicture.src = "/cdn/_uploads/images/SVXn1wEqDFZ19kbMHE8x9W2A58T8CaaL.webp";
            });
            return promise;
        }

        let promises = [];
        for (let [key, value] of Object.entries(Bio.results))
        {
            switch (key)
            {
                case "k_BioPage_Title":
                    promises.push(AssignBioTitle(value));
                    break;
                case "k_BioPage_Subtitle":
                    promises.push(AssignBioSubtitle(value));
                    break;
                case "k_BioPage_SmallDescription":
                    promises.push(AssignBioSmallDescription(value));
                    break;
                case "k_BioPage_ReadMore":
                    promises.push(AssignBioReadMore(value));
                    break;
                case "k_BioPage_Topics":
                    promises.push(AssignTopics(value));
                    break;
            }
        }
        promises.push(AssignBioPicture());
        return Promise.all(promises);
    }
    static Show()
    {
        let bio = document.getElementById("bio");
        bio.classList.remove("opacity-0");
        bio.classList.add("FadeIn");
    }
}