<script>
	import data from '../assets/data'

	let width = 600
	let height = 600
</script>

<div class="container" bind:clientHeight={height} bind:clientWidth={width}>
	<svg>
	</svg>
</div>

<style>
	.container {
		margin-inline: auto;
		max-width: 700px;
	}

	svg {
		overflow: visible;
		height: 600px;
		position: relative;
		width: 100%;
	}
</style>
