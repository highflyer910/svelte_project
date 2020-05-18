 <script>
 	export let type = 'primary';
 	export let flat = false;
 	export let inverse =  false;
 </script>


<button class:flat={flat} class:inverse={inverse} class={type} on:click>
  <slot></slot>
</button>



<style>
	button{
		border: 0;
		border-radius: 6px;
		cursor: pointer;
		padding: 8px 12px;
	    font-weight: bold;
	    box-shadow: 1px 2px 3px rgba(0,0,0,.2);
	}

	.primary{
		background-color: #C03477;
		color: white;
	}

	.secondary{
		background-color: #45c496;
		color: white;
	}

	.flat{
		box-shadow: none;
	}

	.primary.inverse{
		background-color: white;
		color: #d91b42;
	    border: 1px solid #d91b42;
	}

	.secondary.inverse{
		background-color: white;
		color: #45c496;
		border: 1px solid #45c496;
	}
</style>