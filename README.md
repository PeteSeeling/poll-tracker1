## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this?** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
6 buttons

option A add button
Why? 💥💥💥 Add event listener to increment the vote count for option A in the current poll
option B add button
Why? 💥💥💥 Add event listener to increment the vote count for option B in the current poll
option A subtract/undo button
Why? 💥💥💥 Add event listener to decrement the vote count for option A in the current poll
option B subtract/undo buttons
Why? 💥💥💥 Add event listener to decrement the vote count for option B in the current poll
create poll form
Why? Add 'submit' listener to (not a click listener) to the form itself!
three inputs (question, option 1, option 2)
Why? Figure out the user's question and options
Why? 💥💥💥 On submit, update the current poll question and options, and reflect that in the DOM
1 'close poll' button
Why?
💥💥💥
Append the current poll to the past polls state []
"Update the list"
clear DOM of the list
Use a for loop to loop through all past polls, create some DOM and display each past poll in the list
Clear out/reset current poll state and DOM.
current poll section
Why? a bunch of empty divs that we will inject state into (question, options, and vote totals)
empty div for closed polls history/list (for appending to)
Why? A place to put the histry
User should be able to . . .	
Visit the deployed pages on GitHub pages, with link in the About section of the Github repo	2
Events	
On load, see a form and empty current poll div	2
On submit, add the poll options and question to the current poll div	2
On clicking add or subtract, increment and decrement the correct poll votes in the current poll div	2
On clicking finish, empty the current poll div and add the current poll to the "past polls" div. All past polls should be visible in this div by looping through and calling renderPoll with each poll.	4
Functions	
IMPURE: displayCurrentPoll() : mutates DOM to display current state of current poll	2
IMPURE: displayAllPolls() : clears out DOM and appends to poll div using current state of past polls	1
IMPURE: makePoll() : poll object derived from state` | 1
PURE: renderPoll(poll) : returns DOM node	2
PURE: renderOption(name, score) : return DOM node


Add 6 buttons
 2 add. X
  -add event listener to increas vote count
 2 subtract. X
   -add event listener to subtract from vote count
 1 close poll button. add event listener to close poll
 1 create poll button

 POLL FORM
 3 input ( question, option 1, option 2)
 1 creat poll button. add event listener to create current poll, use Submit button for form. 

 CURRENT POLL SECTION
 empty divs to inject state( question, option1,2, and vote totals
 )
 empty div for closed polls / history .append

 close poll button. event listeer. 