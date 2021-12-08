
import { displayCurrentPoll } from "./utils.js";

const form = document.getElementById('form');
const optionATitleEl = document.getElementById('option-a-title');
const optionAVotesEl = document.getElementById('option-a-votes');
const optionBTitleEl =  document.getElementById('option-b-title');
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
})
//add votes to option B
optionBAddButton.addEventListener('click', () => {
  optionBVotes++;

  optionBVotesEl.textContent = optionBVotes;
})
//Subtract votes to option A
optionASubtractButton.addEventListener('click', () => {
  optionAVotes--;

  optionAVotesEl.textContent = optionAVotes;
})
//Subtract votes to option B
optionBSubtractButton.addEventListener('click', () => {
  optionBVotes--;

  optionBVotesEl.textContent = optionBVotes;
})

form.addEventListener('submit', (e) =>{
  e.preventDefault();

  const data = new FormData(form);
  question = data.get('question');
  optionATitle = data.get("option-a");
  optionBTitle = data.get("option-b");
  
  pollQuestionEl.textContent = question;
  optionATitleEl.textContent = optionATitle;
  optionBTitleEl.textContent = optionBTitle;
})

closePollButton.addEventListener('click', () => {
  form.reset();
})





// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
