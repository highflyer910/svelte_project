import { writable } from 'svelte/store';

const PollStore = writable([
     {
      id: 1,
      question: 'Python or JavaScript',
      answerA: 'Python',
      answerB: 'JavaScript',
      votesA: 23,
      votesB: 12,
     },
  ]);



  export default PollStore;