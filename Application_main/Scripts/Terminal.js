let terminalContent, terminalWindow, terminalHeader, terminalBody, terminalDescription;
let currentCommand = 0;

function SetupTerminal()
{
    SetupTerminalInterface();
    SetupTerminalCommands();
    SetupTerminalOrder();
}

function SetupTerminalInterface()
{
    document.body.classList.add("bgcolor_F7F7F7");

    terminalContent = document.body.appendChild(document.createElement("div"));
    terminalWindow = terminalContent.appendChild(document.createElement("div"));
    terminalContent.classList.add("d-flex", "w-50","h-100", "mx-auto");
    terminalWindow.classList.add("col", "h-50", "my-auto", "justify-content-center");

    terminalHeader = terminalWindow.appendChild(document.createElement("div"));
    terminalBody = terminalWindow.appendChild(document.createElement("div"));
    terminalHeader.classList.add("text-center", "bgcolor_0E1013", "rounded-top", "text-cream");
    terminalBody.classList.add("w-100", "h-100", "ps-2", "pt-2", "bgcolor_300A25", "text-white");

    terminalHeader.innerHTML = "~./index.html";

    terminalDescription = terminalBody.appendChild(document.createElement("div"));
}
function SetupTerminalCommands()
{
    let typewriter = new Typewriter(terminalDescription, {loop: false, delay: 25, cursor: ""});
    terminalDescription.classList.add("row", "pb-2");

    $(terminalBody).terminal
    ({
        ajuda: function ()
        {
            this.echo("sentido_da_vida: explica qual é o sentido da vida.");
            this.echo("executar_ordem: executa uma ordem.");
            this.echo("gato: mostra uma imagem de um gato.");
            this.echo("cachorro: mostra uma imagem de um cachorro.");
            this.echo("urso: mostra uma imagem de um urso.");
            this.echo("comecar: inicia a experiência.");
            UpdateGivenCommand(7);
        },
        help: function()
        {
            this.echo("sentido_da_vida: explica qual é o sentido da vida.");
            this.echo("executar_ordem: executa uma ordem.");
            this.echo("gato: mostra uma imagem de um gato.");
            this.echo("cachorro: mostra uma imagem de um cachorro.");
            this.echo("urso: mostra uma imagem de um urso.");
            this.echo("comecar: inicia a experiência.");
            UpdateGivenCommand(7);
        },
        apt: function()
        {
            this.echo("Sorry, this is not a linux terminal!");
            UpdateGivenCommand(2);
        },
        vim: function()
        {
            this.echo("Sorry, this is not a linux terminal!");
            UpdateGivenCommand(2);
        },
        sudo: function()
        {
            this.echo("Sorry, this is not a linux terminal!");
            UpdateGivenCommand(2);
        },
        sentido_da_vida: function()
        {
            this.echo("De acordo com Douglas Adams, o sentido da vida, do universo e tudo mais é 42.")
            UpdateGivenCommand(2);
        },
        meaning_of_life: function()
        {
            this.echo("According to Douglas Adams, the meaning of life, the universe and everything is 42.")
            UpdateGivenCommand(2);
        },
        executar_ordem: function(order)
        {
            if (order === undefined)
            {
                ReturnError(`Erro: Número de parâmetros incorreto!`);
                return;
            }

            let str = "Sim, meu mestre. Agora, cada um dos jedi é um inimigo da república.";

            if (order != 66)
                str = `Executando ordem '${order}'.`;

            this.echo(str);
            UpdateGivenCommand(2);
        },
        execute_order: function(order)
        {
            if (order === undefined)
            {
                ReturnError(`Error: Wrong number of parameters!`);
                return;
            }

            let str = "Yes, my lord. Now, every single jedi is an enemy of the republic.";

            if (order != 66)
                str = `Executing order '${order}'.`;

            this.echo(str);
            UpdateGivenCommand(2);
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
            UpdateGivenCommand(2);
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
            UpdateGivenCommand(2);
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
            UpdateGivenCommand(2);
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
            UpdateGivenCommand(2);
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
            UpdateGivenCommand(2);
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
            UpdateGivenCommand(2);
        },
        comecar: function()
        {
            window.location = "./portfolio.html";
        },
        start: function()
        {
            window.location = "./portfolio.html";
        }
    },
    {
        onCommandNotFound: function(command)
        {
            ReturnError(`Erro: Comando '${command}' não encotrado!`);
        },

        prompt: '$ ',
        checkArity: false,
        greetings: typewriter.typeString(TERMINAL_DESCRIPTION_PT).start(),
    });
}
function SetupTerminalOrder()
{
    let children = [];
    $("div").find(`[data-index=0]`).remove();

    for (let child of document.getElementsByClassName('terminal-scroller')[0].children)
    {
        children.push(child);
        document.getElementsByClassName('terminal-scroller')[0].removeChild(child)
    }

    document.getElementsByClassName('terminal-scroller')[0].appendChild(terminalDescription);
    for (let i = 0; i < children.length; i++)
    {
        document.getElementsByClassName('terminal-scroller')[0].appendChild(children[i]);
    }
}

function UpdateGivenCommand(sumDelta)
{
    currentCommand += sumDelta;
    let currentCommandText = currentCommand.toString();
    document.querySelector(`[data-index="${currentCommandText}"]`).classList.add("mb-3");
}
function ReturnError(error)
{
    let errorMessage = document.getElementsByClassName("terminal-output")[0].appendChild(document.createElement("p"));
    errorMessage.innerHTML = error;
    errorMessage.classList.add("text-red");
    currentCommand += 1;
}

SetupTerminal();