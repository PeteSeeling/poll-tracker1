


const form = document.getElementById('form');
const optionATitleEl = document.getElementById('option-a-title');
const optionAVotesEl = document.getElementById('option-a-votes');
const optionBTitleEl = document.getElementById('option-b-title');
const optionBVotesEl = document.getElementById('option-b-votes');
const pollQuestionEl = document.getElementById('poll-question');

const optionAAddButton = document.getElementById('option-a-add');
const optionASubtractButton = document.getElementById('option-a-subtract');
const optionBAddButton = document.getElementById('option-b-add');
const optionBSubtractButton = document.getElementById('option-b-subtract');
const closePollButton = document.getElementById('close-poll');
const startPollButton = document.getElementById('start-poll');
const pastPollsEl = document.getElementById('past-polls');


let question = '';
let optionAVotes = 0;
let optionBVotes = 0;
let optionATitle = '';
let optionBTitle = '';

const pastPollsArray = [];
//add votes to option A
optionAAddButton.addEventListener('click', () => {
    optionAVotes++;

    optionAVotesEl.textContent = optionAVotes;
});
//add votes to option B
optionBAddButton.addEventListener('click', () => {
    optionBVotes++;

    optionBVotesEl.textContent = optionBVotes;
});
//Subtract votes to option A
optionASubtractButton.addEventListener('click', () => {
    optionAVotes--;

    optionAVotesEl.textContent = optionAVotes;
});
//Subtract votes to option B
optionBSubtractButton.addEventListener('click', () => {
    optionBVotes--;

    optionBVotesEl.textContent = optionBVotes;
});

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const data = new FormData(form);
    question = data.get('question');
    optionATitle = data.get('option-a');
    optionBTitle = data.get('option-b');
   
    pollQuestionEl.textContent = question;
    optionATitleEl.textContent = optionATitle;
    optionBTitleEl.textContent = optionBTitle;
});
startPollButton.addEventListener('click', () => {
    displayCurrentPoll();
   
 
});


closePollButton.addEventListener('click', () => {
    form.reset();

    const poll = makePoll();
    pastPollsArray.push(poll);
    resetState();
   

    displayCurrentPoll();
    
   
    displayAllPolls();
         
  
}
);
   



function makePoll(){
    
    return {
        question: question,
        optionATitle: optionATitle,
        optionBTitle: optionBTitle,
        optionAVotes: optionAVotes,
        optionBVotes: optionBVotes,
    };}

function resetState(){
    question = '';
    optionATitle = '';
    optionBTitle = '';
    optionAVotes = 0;
    optionBVotes = 0;
  
  
}


function displayAllPolls(){
    
    for (let pastPoll of pastPollsArray){
        const pastPollEl = renderPastPoll(pastPoll);

        pastPollsEl.append(pastPollEl);
    }
    
  
}
function renderPastPoll(pastPoll){
   

    const container = document.createElement('div');
    const pQuestionEl = document.createElement('p');
    const pOptionATitleEl = document.createElement('p');
    const pOptionBTitleEl = document.createElement('p'); const pOptionAVotesEl = document.createElement('p');
    const pOptionBVotesEl = document.createElement('p');

    container.classList.add('past-poll');
    pQuestionEl.textContent = pastPoll.question;
    pOptionATitleEl.textContent = pastPoll.optionATitle;
    pOptionBTitleEl.textContent = pastPoll.optionBTitle;
    pOptionAVotesEl.textContent = pastPoll.optionAVotes;
    pOptionBVotesEl.textContent = pastPoll.optionBVotes;

 

    container.append(pQuestionEl, pOptionATitleEl, pOptionAVotesEl, pOptionBTitleEl, pOptionBVotesEl);
    pastPollsEl.append(container);
    return container;


}
function displayCurrentPoll(){

    pollQuestionEl.textContent = question;
    optionATitleEl.textContent = optionATitle;
    optionBTitleEl.textContent = optionBTitle;
    optionAVotesEl.textContent = optionAVotes;
    optionBVotesEl.textContent = optionBVotes;
    
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
