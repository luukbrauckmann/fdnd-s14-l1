<script>
	import { onMount } from 'svelte';

	export let InputPlaceholder, InputText, LabelValue;

	onMount(() => {
		let jsEnabled = true;
		// Progressive Enhancement -Als er live naar resultaten gezocht kan worden.
		// Zo niet, laat dan de zoek knop zien.
		if (jsEnabled) {
			let searchButton = document.querySelector('#searchButton');
			searchButton.setAttribute('hidden', 'true');
			console.log(searchButton);
		}
	});

	function handleSubmit() {
		// Schrijf nieuwe zoekfunctie op een progressive enhance methoder
		console.log('form was not submitted');
	}
</script>

<!-- Zoek formulier -->
<form on:submit|preventDefault={handleSubmit} name="searchForm">
	<section>
		<div class="input-container" />
		<!-- Deze twee velden kunnen misschien in een aparte component   -->
		<input
			class="searchBar"
			bind:value={InputText}
			name="searchBar"
			id="searchBar"
			type="search"
			placeholder={InputPlaceholder}
		/>
		<label class="" for="searchBar">{LabelValue}</label>
	</section>
	<button type="submit" id="searchButton" title="Search" />
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		padding: 0.5rem 1rem;
		overflow: auto;
		padding-top: 1.5rem;
	}

	div {
		position: relative;
		width: 100%;
	}

	label {
		position: absolute;
		top: 1rem;
		left: 1.5rem;
		transition: 0.3s ease-in-out;
		cursor: text;
	}
	input {
		padding: 1rem 1.5rem;
		border-radius: 0.9rem;
		/* border: 3px solid white; */
		border: none;
		outline: 3px solid white;
		outline-offset: -3px;
		box-shadow: var(--box-shadow);
		font-size: 1rem;
		width: 100%;
		color: var(--text-color);
	}

	div input:focus ~ label,
	div input:not(:placeholder-shown) ~ label {
		top: -1.3rem;
		font-size: 12px;
	}

	.active label {
		top: -1.3rem;
		font-size: 12px;
	}

	button {
		width: 3em;
		border: hidden;
		background-color: rgba(0, 0, 0, 0);
		background-image: url(../images/search.svg);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: 50%;
	}

	button:hover {
		cursor: pointer;
	}
</style>
