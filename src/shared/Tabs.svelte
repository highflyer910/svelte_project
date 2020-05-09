<script>
	export let items;
	export let activeItem;
</script>


<div class="tabs">
   <ul>
    {#each items as item}
      <li>
      	<div class:active = {item === activeItem}>{item}</div>
      </li>
    {/each}
   </ul>
</div>


<style>
   .active{
   	color: darkred;
   	border-color: 2px solid darkred;
   }
</style>