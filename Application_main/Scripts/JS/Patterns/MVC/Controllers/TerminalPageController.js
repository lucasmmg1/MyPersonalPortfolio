class TerminalPageController
{
    static terminalContent;
    static terminalWindow;
    static terminalHead;
    static terminalContent;
    static terminalGreetings;
    static terminalHelper;

    static Setup()
    {
        this.SetupTerminalInterface();
        this.SetupTerminalCommands();
        this.SetupTerminalOrder();
    }

    static SetupTerminalOrder()
    {
        let children = [];
        $("div").find(`[data-index=0]`).remove();

        for (let child of document.getElementsByClassName('terminal-scroller')[0].children)
        {
            children.push(child);
            document.getElementsByClassName('terminal-scroller')[0].removeChild(child)
        }

        document.getElementsByClassName('terminal-scroller')[0].appendChild(this.terminalGreetings);
        document.getElementsByClassName('terminal-scroller')[0].appendChild(this.terminalHelper);
        for (let i = 0; i < children.length; i++)
        {
            document.getElementsByClassName('terminal-scroller')[0].appendChild(children[i]);
        }
    }
    static SetupTerminalCommands()
    {
        let currentCommand = 0;
        let typewriter = new Typewriter(this.terminalGreetings, {loop: false, delay: 25, cursor: "",});

        let onCreateTextNodeEvent = () =>
        {
            for (let i = 0; i < Object.keys(Language.availableLanguages).length; i++)
            {
                let languageDiv = this.terminalHelper.appendChild(document.createElement("div"));
                languageDiv.classList.add("row");
                let typewriter = new Typewriter(languageDiv, {loop: false, delay: 25, cursor: ""});
                typewriter.typeString(`${Object.keys(Language.availableLanguages)[i]}: ${Object.values(Language.availableLanguages)[i]}`).start();
            }

            typewriter = null;
        };
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

        $(this.terminalContent).terminal
        (
            {
                ajuda: function ()
                {
                    this.echo("sentido_da_vida: explica qual é o sentido da vida.");
                    this.echo("executar_ordem: executa uma ordem.");
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
                apt: function()
                {
                    this.echo("Sorry, this is not a linux terminal!");
                    onCommandSuccess(2);
                },
                vim: function()
                {
                    this.echo("Sorry, this is not a linux terminal!");
                    onCommandSuccess(2);
                },
                sudo: function()
                {
                    this.echo("Sorry, this is not a linux terminal!");
                    onCommandSuccess(2);
                },
                sentido_da_vida: function()
                {
                    this.echo("De acordo com Douglas Adams, o sentido da vida, do universo e tudo mais é 42.")
                    onCommandSuccess(2);
                },
                meaning_of_life: function()
                {
                    this.echo("According to Douglas Adams, the meaning of life, the universe and everything is 42.")
                    onCommandSuccess(2);
                },
                executar_ordem: function(order)
                {
                    if (order === undefined)
                    {
                        onCommandError(`Erro: Número de parâmetros incorreto!`);
                        return;
                    }

                    let str = "Sim, meu mestre. Agora, cada um dos jedi é um inimigo da república.";

                    if (order != 66)
                        str = `Executando ordem '${order}'.`;

                    this.echo(str);
                    onCommandSuccess(2);
                },
                execute_order: function(order)
                {
                    if (order === undefined)
                    {
                        onCommandError(`Error: Wrong number of parameters!`);
                        return;
                    }

                    let str = "Yes, my lord. Now, every single jedi is an enemy of the republic.";

                    if (order != 66)
                        str = `Executing order '${order}'.`;

                    this.echo(str);
                    onCommandSuccess(2);
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
                    window.location = "../../../../HTML/portfolio.html";
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
                    window.location = "../../../../HTML/portfolio.html";
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
                onInit: function(term) 
                {
                    term.echo(typewriter.typeString(Language.GetElementByLanguage("k_TerminalPage_TerminalGreeting") + Constants.generalContent["k_TerminalPage_TerminalLanguageWarning"]).callFunction(onCreateTextNodeEvent).start());
                },
            }
        );
    }
    static SetupTerminalInterface()
    {
        document.body.classList.add("bgcolor_F7F7F7", "m-0", "p-0");

        this.terminalContent = document.body.appendChild(document.createElement("div"));
        this.terminalContent.classList.add("d-flex", "w-100", "h-100", "m-0", "p-0");
        this.terminalWindow = this.terminalContent.appendChild(document.createElement("div"));
        this.terminalWindow.classList.add("m-auto", "p-0");
        this.terminalWindow.id = "TerminalWindow";
        this.terminalHead = this.terminalWindow.appendChild(document.createElement("div"));
        this.terminalHead.classList.add("text-center", "bgcolor_0E1013", "rounded-top", "text-cream");
        this.terminalContent = this.terminalWindow.appendChild(document.createElement("div"));
        this.terminalContent.classList.add("w-100", "h-100", "m-0", "ps-2", "pt-2", "bgcolor_300A25", "text-white");
        this.terminalHead.innerHTML = "~./index.html";
        this.terminalGreetings = this.terminalContent.appendChild(document.createElement("div"));
        this.terminalGreetings.classList.add("row", "mx-0", "mt-0", "mb-3", "p-0");
        this.terminalHelper = this.terminalContent.appendChild(document.createElement("div"));
        this.terminalHelper.classList.add("row", "mx-0", "mt-0", "mb-4", "p-0");
    }
}

currentPage = PageType.TerminalPage;
main();