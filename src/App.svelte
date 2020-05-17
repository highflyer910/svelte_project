<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import PolList from './components/PolList.svelte';
  import CreatePollForm from './components/CreatePollForm.svelte';
  import Tabs from './shared/Tabs.svelte';

  let items = ['Current Polls', "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => {
     activeItem = e.detail;
  }

  let polls = [
     {
      id: 1,
      question: 'Python or JavaScript',
      answerA: 'Python',
      answerB: 'JavaScript',
      votesA: 23,
      votesB: 12,
     },
  ];

  const handleAdd = (e) => {
    const poll = e.detail;
    polls = [poll, ...polls];
    activeItem = 'Current Polls';

  }
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange}/>
  {#if activeItem === 'Current Polls'}
    <PolList {polls}/>
  {:else if activeItem === 'Add New Poll'}
     <CreatePollForm on:add={handleAdd}/>
  {/if}     
</main>
<Footer />

<style>
   main{
   	max-width: 960px;
   	margin: 40px auto;
   }
</style>