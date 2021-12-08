
const formEl = document.getElementById('form');
const optionATitleEl = document.getElementById('option-a-title');
const optionAVotesEl = document.getElementById('option-a-votes');
const optionBTitleEl =  document.getElementById('option-b-title');
const optionBVotesEl = document.getElementById('option-b-votes');

const optionAAddButton = document.getElementById('option-a-button');
const optionASubtractButton = document.getElementById('option-a-subtract');
const optionBAddButton = document.getElementById('option-b-button');
const optionBSubtractButton = document.getElementById('option-b-subtract');
const closePollButton = document.getElementById('close-poll');
const startPollButton = document.getElementById('start-poll');

let question = '';
let optionAVotes = 0;
let optionBVotes = 0;
let optionATitle = '';
let optionBTitle = '';

const pastPollsArray = [];

optionAAddButton.addEventListener('click', () => {
  optionAVotes++;
  
  optionAVotesEl.textContent = optionAVotes;
})


// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state