class Terminal
{
    static results =
    {
        "k_TerminalPage_TerminalGreeting": "",
        "k_TerminalPage_TerminalAsciiSubtitle": "",
        "k_TerminalPage_TerminalAsciiTitle": ""
    }

    static Setup()
    {
        let SetupTerminal = () =>
        {
            let currentCommand = 0;

            let onCommandSuccess = sumDelta =>
            {
                currentCommand += currentCommand === 0 ? sumDelta : sumDelta + 1;
                let currentCommandText = currentCommand.toString();
                document.querySelector(`[data-index="${currentCommandText}"]`).classList.add("mb-3");
            }
            let onCommandError = error =>
            {
                let errorMessage = document.getElementsByClassName("terminal-output")[0].appendChild(document.createElement("p"));
                errorMessage.innerHTML = error;
                errorMessage.classList.add("text-red");
                currentCommand += 1;
            }

            let terminalInput = document.getElementById("TerminalContentPNL");
            $(terminalInput).terminal
            (
                {
                    help: function(argument)
                    {
                        console.log(Language.codes)

                        let message = "JQuery terminal, version 2.37.2 <https://terminal.jcubic.pl>.\nCopyright (c) 2010-2023 Jakub T. Jankiewicz <https://jcubic.pl/me>.\nReleased under the MIT license.\n\n";

                        switch (argument)
                        {
                            case undefined:
                                message += "cat\ndog\nbear\nstart\ncl [code]\nhelp [command]";
                                this.echo(message);
                                onCommandSuccess(1);
                                break;
                            case "cat":
                                message += "cat: shows a random cat image.";
                                this.echo(message);
                                onCommandSuccess(1);
                                break;
                            case "dog":
                                message += "dog: shows a random dog image.";
                                this.echo(message);
                                onCommandSuccess(1);
                                break;
                            case "bear":
                                message += "bear: shows a random bear image.";
                                this.echo(message);
                                onCommandSuccess(1);
                                break;
                            case "start":
                                message += "start: starts the portfolio.";
                                this.echo(message);
                                onCommandSuccess(1);
                                break;
                            case "cl":
                                message += "cl: changes the language of the page.\n\t[code] = en | pt";
                                this.echo(message);
                                onCommandSuccess(1);
                                break;
                            case "help":
                                message += "help: shows the help message.\n\t[command] = cat | dog | bear | start | cl";
                                this.echo(message);
                                onCommandSuccess(1);
                                break;
                            default:
                                onCommandError(`Erro: Comando '${argument}' não encotrado!`);
                                break;
                        }
                    },
                    cat: function()
                    {
                        let randomId = Math.floor(Math.random() * 1001);
                        let imgSrc = `https://placekitten.com/${randomId}/${randomId}`;

                        let img = $(`<img src = ${imgSrc}>`);
                        $(img).attr("width", 300);
                        img.on('load', this.resume);
                        this.pause();
                        this.echo(img);
                        onCommandSuccess(1);
                    },
                    dog: function()
                    {
                        let randomId = Math.floor(Math.random() * 1001);
                        let imgSrc = `https://place-puppy.com/${randomId}x${randomId}`;

                        let img = $(`<img src = ${imgSrc}>`);
                        $(img).attr("width", 300);
                        img.on('load', this.resume);
                        this.pause();
                        this.echo(img);
                        onCommandSuccess(1);
                    },
                    bear: function()
                    {
                        let randomId = Math.floor(Math.random() * 1001);
                        let imgSrc = `https://placebear.com/${randomId}/${randomId}`;

                        let img = $(`<img src = ${imgSrc}>`);
                        $(img).attr("width", 300);
                        img.on('load', this.resume);
                        this.pause();
                        this.echo(img);
                        onCommandSuccess(1);
                    },
                    start: function()
                    {
                        window.location = "https://lucasmartinmacedo.com/portfolio";
                    },
                    cl: function(languageCode)
                    {
                        if (languageCode === undefined)
                        {
                            onCommandError(`Error: Wrong number of parameters!`);
                            return;
                        }

                        for (let code of Language.codes)
                        {
                            if (languageCode.toLowerCase() !== code) continue;
                            Language.SetCurrentLanguage(languageCode.toLowerCase());
                            break;
                        }

                        setTimeout(() =>
                        {
                            document.location.reload();
                        }, 100);
                    }
                },
                {
                    onCommandNotFound: function(command)
                    {
                        onCommandError(`Erro: Comando '${command}' não encotrado!`);
                    },

                    prompt: '$ ',
                    checkArity: false,
                    greetings: false,
                }
            );

            Terminal.Store().then(() => Terminal.Assign());
        }

        Language.Store("Assets/Application_Main/Scripts/PHP/Queries/RetrieveLanguageData.php").then(() => SetupTerminal());
    }

    static Store()
    {
        let promises = [];
        for (let field of Object.keys(Terminal.results))
        {
            let url = new URL('Assets/Application_Main/Scripts/PHP/Queries/RetrieveTerminalPageData.php', window.location.href);
            let params = {field: field, table: 'Terminal', language: Language.GetCurrentLanguage()};
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
                        Terminal.results[field] = data.data;
                        break;
                    case 'error':
                        Terminal.results[field] = "";
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
        let AssignTerminalAsciiTitle = (value) =>
        {
            let terminalContentPNL = document.getElementById("TerminalContentPNL");
            let terminalScroller = terminalContentPNL.querySelector(".terminal-scroller");
            let terminalAsciiTitlePNL = terminalScroller.insertBefore(document.createElement("div"), terminalScroller.firstChild);
            terminalAsciiTitlePNL.classList.add("d-flex", "flex-column", "mx-0", "mt-3", "mb-0", "p-0", "tmpcolor_d1d2cf");
            terminalAsciiTitlePNL.id = "TerminalAsciiTitlePNL";
            let terminalAsciiTitleTMP = terminalAsciiTitlePNL.appendChild(document.createElement("pre"));
            terminalAsciiTitleTMP.classList.add("m-0", "p-0", "tmpcolor_d1d2cf");
            terminalAsciiTitleTMP.id = "TerminalAsciiTitleTMP";
            terminalAsciiTitleTMP.innerHTML = value;
        }
        let AssignTerminalAsciiSubtitle = (value) =>
        {
            let terminalContentPNL = document.getElementById("TerminalContentPNL");
            let terminalScroller = terminalContentPNL.querySelector(".terminal-scroller");
            let terminalAsciiSubtitlePNL = terminalScroller.insertBefore(document.createElement("div"), terminalScroller.firstChild);
            terminalAsciiSubtitlePNL.classList.add("d-flex", "flex-column", "mx-0", "mt-0", "mb-3", "p-0", "tmpcolor_d1d2cf");
            terminalAsciiSubtitlePNL.id = "TerminalAsciiSubtitlePNL";
            let terminalAsciiSubtitleTMP = terminalAsciiSubtitlePNL.appendChild(document.createElement("h6"));
            terminalAsciiSubtitleTMP.classList.add("mx-2", "my-1", "p-0", "Cabin-Medium", "tmpcolor_d1d2cf");
            terminalAsciiSubtitleTMP.id = "TerminalAsciiSubtitleTMP";
            terminalAsciiSubtitleTMP.innerHTML = `<i>${value}</i>`;
        }
        let AssignTerminalGreeting = (value) =>
        {
            let terminalContentPNL = document.getElementById("TerminalContentPNL");
            let terminalScroller = terminalContentPNL.querySelector(".terminal-scroller");
            let terminalGreetingPNL = terminalScroller.insertBefore(document.createElement("div"), terminalScroller.firstChild);
            terminalGreetingPNL.classList.add("d-flex", "flex-row", "mx-2", "my-3", "p-0", "tmpcolor_d1d2cf", "Calibri");
            terminalGreetingPNL.id = "TerminalGreetingPNL";
            let terminalGreetingTMP = terminalGreetingPNL.appendChild(document.createElement("p"));
            terminalGreetingTMP.classList.add("m-0", "p-0", "tmpcolor_d1d2cf");
            let typewriter = new Typewriter(terminalGreetingTMP, {loop: false, delay: 50});
            let valueWithoutTags = value.replace(/(<([^>]+)>)/gi, "");
            typewriter.typeString(valueWithoutTags).callFunction(() => {terminalGreetingTMP.innerHTML = value}).start();
        }

        let promise = Promise.resolve();
        for (let [key, value] of Object.entries(Terminal.results))
        {
            switch (key)
            {
                case "k_TerminalPage_TerminalAsciiTitle":
                    AssignTerminalAsciiTitle(value);
                    break;
                case "k_TerminalPage_TerminalAsciiSubtitle":
                    AssignTerminalAsciiSubtitle(value);
                    break;
                case "k_TerminalPage_TerminalGreeting":
                    AssignTerminalGreeting(value);
                    break;
            }
        }

        return promise;
    }
}

Terminal.Setup();