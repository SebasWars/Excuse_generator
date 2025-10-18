const GENERATE_EXCUSE_BTN = document.querySelector(".generate_btn");
const WHO_IS_FOR = document.getElementById("who_options");
const HOW_SERIOU_IS = document.getElementById("serious_option");

const EXCUSE_OUTPUT = document.querySelector(".answer_section");

const delayExcuse = {
  what: [
    "ran into a small issue",
    "had an unexpected situation",
    "got delayed with something",
    "had a quick errand to handle",
    "was held up for a bit",
    "needed to sort something out",
    "had to take care of something last minute",
    "got caught up with something at home",
    "had a small setback",
    "needed a few extra minutes before leaving",
  ],

  when: [
    "earlier today",
    "this morning",
    "before heading out",
    "a little while ago",
    "just as I was about to leave",
    "on my way",
    "right before my commute",
    "not long ago",
    "a few minutes ago",
  ],

  action: [
    "I'm on my way now",
    "already heading there",
    "trying to get there as soon as possible",
    "sorting it out quickly",
    "should be moving shortly",
    "getting back on track",
    "shouldn’t be much longer",
    "wrapping it up now",
    "making my way there",
    "almost ready to go",
  ],

  because: [
    "something came up unexpectedly",
    "there was a small delay",
    "I had to handle something personal",
    "things took a bit longer than planned",
    "I ran into a quick complication",
    "timing didn’t go as expected",
    "there were a few things to fix first",
    "I had to wait for a moment",
    "plans shifted slightly",
    "a few things overlapped",
  ],

  extra: [
    "shouldn’t take long",
    "will be there soon",
    "appreciate your patience",
    "sorry for the delay",
    "on my way now",
    "should be there shortly",
    "thanks for understanding",
    "almost there",
    "just a few more minutes",
    "should be all good soon",
  ],
};

const workExcuse = {
  what: [
    "got delayed finishing a task",
    "had to recheck something",
    "ran into a small issue with the report",
    "needed to adjust some details",
    "was waiting for a confirmation",
    "had to review some data again",
    "got caught up in another task",
    "had a few things overlap",
    "needed extra time to wrap something up",
    "had to handle something unexpected",
  ],

  when: [
    "earlier today",
    "this morning",
    "yesterday afternoon",
    "right before the deadline",
    "before submitting",
    "while reviewing everything",
    "as I was finishing up",
    "a short while ago",
    "during the final check",
    "just before sending it out",
  ],

  action: [
    "I'm finalizing it now",
    "just putting the last details together",
    "making sure everything’s correct",
    "wrapping it up as we speak",
    "double-checking the info before sending",
    "finishing the final touches",
    "almost ready to send",
    "reviewing it one more time",
    "cleaning up a few details",
    "making sure it's all consistent",
  ],

  because: [
    "something didn’t match up correctly",
    "I wanted to make sure it was accurate",
    "a few details needed clarification",
    "there were some last-minute changes",
    "some parts took longer than expected",
    "I had to verify a few things first",
    "some information came in late",
    "it required a few adjustments",
    "the system was acting up for a bit",
    "I needed to confirm something before sending",
  ],

  extra: [
    "shouldn’t take long",
    "will send it shortly",
    "almost done with it",
    "thanks for the patience",
    "apologies for the slight delay",
    "should be ready any minute",
    "wrapping it up soon",
    "just making sure it’s solid",
    "appreciate your understanding",
    "almost there",
  ],
};

const socialExcuse = {
  what: [
    "had something come up last minute",
    "got caught up with a few things",
    "needed to take care of something",
    "ran into a small situation at home",
    "ended up with another plan overlapping",
    "had to stay longer somewhere",
    "got really tired after the day",
    "needed a bit of downtime",
    "had to handle a quick errand",
    "lost track of time with something else",
  ],

  when: [
    "this afternoon",
    "a little earlier",
    "just a while ago",
    "right before heading out",
    "today after work",
    "earlier than expected",
    "around the same time we planned",
    "not long ago",
    "before I could leave",
    "a few minutes ago",
  ],

  action: [
    "trying to sort it out quickly",
    "won’t make it in time",
    "might have to skip this one",
    "seeing if I can still make it",
    "will probably have to catch up next time",
    "trying to fix things but it’s taking a bit",
    "might need to stay in tonight",
    "seeing how things go first",
    "figuring out if I can still go",
    "might need to rain check",
  ],

  because: [
    "things got a bit messy",
    "I’ve been running around all day",
    "something came up unexpectedly",
    "plans got mixed up",
    "I got delayed with other stuff",
    "I need to handle something before heading out",
    "I’m feeling a bit off",
    "timing didn’t work out well",
    "I’ve got a few things to finish first",
    "the day just ran away from me",
  ],

  extra: [
    "hope that’s okay",
    "we’ll catch up soon",
    "sorry about that",
    "let’s plan again soon",
    "thanks for understanding",
    "hope it’s not a big deal",
    "next one’s on me",
    "really wanted to make it though",
    "promise I’ll show up next time",
    "let me know how it goes",
  ],
};

const funnyBecause = [
  "my cat decided to sit on my keys and wouldn’t move",
  "the universe clearly had other plans for me today",
  "I accidentally locked myself out while taking out the trash",
  "I was abducted by the comfort of my couch",
  "my coffee betrayed me and spilled everywhere",
  "the Wi-Fi went on vacation without telling me",
  "I forgot where I put my motivation",
  "my phone thought it was a good time to update for 40 minutes",
  "a bird stole part of my breakfast and I had to recover emotionally",
  "I entered an unplanned staring contest with my wall — and lost",
  "the weather decided to do its own thing",
  "I took a short nap and accidentally time-traveled",
  "my brain decided to buffer mid-task",
  "I got stuck in an intense debate with my pet about who owns the bed",
  "a sudden existential crisis delayed my plans",
  "I was waiting for a sign from the universe, but it sent me spam instead",
  "my laptop updated itself into oblivion",
  "my neighbor’s drama got too interesting to ignore",
  "the floor decided to attack my toe again",
  "I got distracted by a perfectly unimportant idea and couldn’t recover",
];

const getRandomNumber = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const generateExcuse = (obj) => {
  let what = getRandomNumber(obj.what);
  let when = getRandomNumber(obj.when);
  let because = getRandomNumber(obj.because);
  let action = getRandomNumber(obj.action);
  let extra = getRandomNumber(obj.extra);

  let notSerious = getRandomNumber(funnyBecause);

  return (EXCUSE_OUTPUT.innerHTML = `I ${what} ${when}, Because ${
    HOW_SERIOU_IS.value === "Enough" ? because : notSerious
  }, I ${action}. ${extra}`);
};

const printExcuse = () => {
  const context = WHO_IS_FOR.value;
  if (context === "Work Duties") {
    generateExcuse(workExcuse);
  } else if (context === "Delay") {
    generateExcuse(delayExcuse);
  } else if (context === "Meet with friends") {
    generateExcuse(socialExcuse);
  }
  if (context === "Choose a context") {
    alert("Please choose a context to create an excuse");
    return;
  }
};

GENERATE_EXCUSE_BTN.addEventListener("click", () => {
  printExcuse();
});