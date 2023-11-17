<script>
    import { onMount } from "svelte";
    
    export let InputName, InputId, InputPlaceholder, InputText, LabelValue;

    onMount(() => {
        console.log("Js is enabled on: " + document.URL)
        
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
    }
    
    </script>
    
    <form on:submit|preventDefault={handleSubmit}>
        <label class="subtitle-medium" for="{InputId}">{LabelValue}</label>
        <div>
            <!-- Met de bind:value  -->
            <input class="searchBar" bind:value={InputText} name="{InputName}" id="{InputId}" type="search" placeholder="{InputPlaceholder}" >
            <button type="submit" id="searchButton" title="Search"></button>
        </div>
    </form>
    
    <style>
        form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: .7em;
        }
    
        label {
            padding-left: .2em;
        }
    
        div:nth-of-type(1) {
            display: flex;
            flex-flow: row;
            gap: 1em;
        }
    
        input:nth-of-type(1) {
            width: 100%;
            font-size: 1.2rem;
            padding: 0.2em;
            padding: 2vh;
            border-radius: 20px;
            border: none;
            box-shadow: var(--box-shadow);
        }

        /* Hele enge code */
        input:nth-of-type(1):not(input:nth-of-type(1):placeholder-shown) {
            background-color: var(--button-background-color);
            transition: ease-in-out .3s;
        }

        input:nth-of-type(1):hover, input:nth-of-type(1):focus {
            transition: ease .4s;
            outline: 1px solid var(--button-background-color);
        }

        button{
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