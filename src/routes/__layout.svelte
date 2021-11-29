<script>
	import '../app.css';
   
</script>


<main>
	
	
	<slot />
</main>

<style>

	.logo {
		fill: var(--section-f);
		position: fixed;
		opacity: 0.75;
		height: 120vh;
		top: 0px;
		left: 0px;
		transform: translate(-30%, 0%);
		z-index: -1;
	}
	main {
		position: fixed;
		top: 0px;
		left: 0px;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}
</style>
