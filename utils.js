let question = '';
let optionATitle = '';
let optionBTitle = '';


export function displayCurrentPoll(){


    const pollQuestionEl = document.getElementById('poll-question');
    const optionATitleEl = document.getElementById('option-a-title');
    const optionBTitleEl = document.getElementById('option-b-title');

    pollQuestionEl.textContent = question;
    optionATitleEl.textContent = optionATitle;
    optionBTitleEl.textContent = optionBTitle;
    
}

