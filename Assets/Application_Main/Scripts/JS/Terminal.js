class Terminal
{
    static results =
    {
        "k_TerminalPage_TerminalGreeting": "",
        "k_TerminalPage_TerminalHelper": "",
        "k_TerminalPage_TerminalCommands": ""
    }

    static Setup()
    {
        Terminal.Store().then(() => Terminal.Assign());
    }
    static Store()
    {
        let promises = [];
        for (let field of Object.keys(Terminal.results))
        {
            let url = new URL('Assets/Application_Main/Scripts/PHP/Queries/RetrieveTerminalPageData.php', window.location.href);
            let params = {field: field, table: 'Terminal', language: "pt-br"};
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
        let promise = Promise.resolve();
        for (let [key, value] of Object.entries(Terminal.results))
        {
            switch (key)
            {
                case "k_TerminalPage_TerminalGreeting":
                    Terminal.AssignTerminalGreeting(value);
                    break;
                case "k_TerminalPage_TerminalHelper":
                    Terminal.AssignTerminalHelper(value);
                    break;
                case "k_TerminalPage_TerminalCommands":
                    Terminal.AssignTerminalCommands(value);
                    break;
            }
        }
        return promise;
    }
    static AssignTerminalGreeting(value)
    {
        let terminalGreeting = document.getElementById("terminal-greetings");
        let typewriter = new Typewriter(terminalGreeting, {loop: false, delay: 25, cursor: "",});
        typewriter.typeString(value).start();
    }
    static AssignTerminalHelper(value)
    {
        let terminalHelper = document.getElementById("terminal-helper");
        let typewriter = new Typewriter(terminalHelper, {loop: false, delay: 25, cursor: "",});
        typewriter.typeString(value).start();
    }
    static AssignTerminalCommands(value)
    {
        let currentCommand = 0;

        let onCommandSuccess = sumDelta =>
        {
            currentCommand += sumDelta;
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

        let terminalInput = document.getElementById("terminal-input");
        $(terminalInput).terminal
        (
            {
                ajuda: function ()
                {
                    this.echo("gato: mostra uma imagem de um gato.");
                    this.echo("cachorro: mostra uma imagem de um cachorro.");
                    this.echo("urso: mostra uma imagem de um urso.");
                    this.echo("comecar: inicia a experiência.");
                    onCommandSuccess(7);
                },
                help: function()
                {
                    this.echo("sentido_da_vida: explica qual é o sentido da vida.");
                    this.echo("executar_ordem: executa uma ordem.");
                    this.echo("gato: mostra uma imagem de um gato.");
                    this.echo("cachorro: mostra uma imagem de um cachorro.");
                    this.echo("urso: mostra uma imagem de um urso.");
                    this.echo("comecar: inicia a experiência.");
                    onCommandSuccess(7);
                },
                gato: function()
                {
                    let randomId = Math.floor(Math.random() * 1001);
                    let imgSrc = `https://placekitten.com/${randomId}/${randomId}`;

                    let img = $(`<img src = ${imgSrc}>`);
                    $(img).attr("width", 300);
                    img.on('load', this.resume);
                    this.pause();
                    this.echo(img);
                    onCommandSuccess(2);
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
                    onCommandSuccess(2);
                },
                cachorro: function()
                {
                    let randomId = Math.floor(Math.random() * 1001);
                    let imgSrc = `https://place-puppy.com/${randomId}x${randomId}`;

                    let img = $(`<img src = ${imgSrc}>`);
                    $(img).attr("width", 300);
                    img.on('load', this.resume);
                    this.pause();
                    this.echo(img);
                    onCommandSuccess(2);
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
                    onCommandSuccess(2);
                },
                urso: function()
                {
                    let randomId = Math.floor(Math.random() * 1001);
                    let imgSrc = `https://placebear.com/${randomId}/${randomId}`;

                    let img = $(`<img src = ${imgSrc}>`);
                    $(img).attr("width", 300);
                    img.on('load', this.resume);
                    this.pause();
                    this.echo(img);
                    onCommandSuccess(2);
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
                    onCommandSuccess(2);
                },
                comecar: function()
                {
                    window.location = "./Application_main/Scripts/HTML/portfolio.html";
                },
                cl: function(languageCode)
                {
                    if (languageCode === undefined)
                    {
                        onCommandError(`Error: Wrong number of parameters!`);
                        return;
                    }

                    for (let language of Object.keys(Language.availableLanguages))
                    {
                        if (languageCode.toLowerCase() === language)
                            Language.SetCurrentLanguage(languageCode.toLowerCase());
                    }

                    this.echo(Language.GetElementByLanguage("k_TerminalPage_ReloadWarning"));
                    onCommandSuccess(2);

                    setTimeout(() =>
                    {
                        document.location.reload();
                    }, 100);
                },
                start: function()
                {
                    window.location = "./Application_main/Scripts/HTML/portfolio.html";
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
    }
}

Terminal.Setup();