function question1Click(){
    let container = document.querySelector("#question1Doc");
    if (container.querySelector('div')){
        container.innerHTML = "";
    }
    else{
        let newElement = document.createElement('div');
        newElement.setAttribute('class', "py-5 px-4 bg-[#fefae0] border-x-2 border-b-2 rounded-b-2xl border-black self-center");
        let newTextElement = document.createElement('p');
        newTextElement.setAttribute('class', "self-center")
        newTextElement.textContent = "Nope! There are tons of positions in marketing and event plannning that do not require you know how to play an instrument!";
        newElement.appendChild(newTextElement);
        container.appendChild(newElement);

        document.querySelector("#question2Doc").innerHTML = "";
        document.querySelector("#question3Doc").innerHTML = "";
        document.querySelector("#question4Doc").innerHTML = "";
    }
}
function question2Click(){
    let container = document.querySelector("#question2Doc");
    if (container.querySelector('div')){
        container.innerHTML = "";
    }
    else{
        let newElement = document.createElement('div');
        newElement.setAttribute('class', "py-5 px-4 bg-[#fefae0] border-x-2 border-b-2 rounded-b-2xl border-black self-center");
        let newTextElement = document.createElement('p');
        newTextElement.textContent = "2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
        newElement.appendChild(newTextElement);
        container.appendChild(newElement);

        document.querySelector("#question1Doc").innerHTML = "";
        document.querySelector("#question3Doc").innerHTML = "";
        document.querySelector("#question4Doc").innerHTML = "";
    }
}
function question3Click(){
    let container = document.querySelector("#question3Doc");
    if (container.querySelector('div')){
        container.innerHTML = "";
    }
    else{
        let newElement = document.createElement('div');
        newElement.setAttribute('class', "py-5 px-4 bg-[#fefae0] border-x-2 border-b-2 rounded-b-2xl border-black self-center");
        let newTextElement = document.createElement('p');
        newTextElement.textContent = "3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
        newElement.appendChild(newTextElement);
        container.appendChild(newElement);

        document.querySelector("#question1Doc").innerHTML = "";
        document.querySelector("#question2Doc").innerHTML = "";
        document.querySelector("#question4Doc").innerHTML = "";
    }
}
function question4Click(){
    let container = document.querySelector("#question4Doc")
    if (container.querySelector('div')){
        container.innerHTML = "";
    }
    else{
        let newElement = document.createElement('div');
        newElement.setAttribute('class', "py-5 px-4 bg-[#fefae0] border-x-2 border-b-2 rounded-b-2xl border-black self-center");
        let newTextElement = document.createElement('p');
        newTextElement.textContent = "4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
        newElement.appendChild(newTextElement);
        container.appendChild(newElement);

        document.querySelector("#question1Doc").innerHTML = "";
        document.querySelector("#question2Doc").innerHTML = "";
        document.querySelector("#question3Doc").innerHTML = "";

    }
}

