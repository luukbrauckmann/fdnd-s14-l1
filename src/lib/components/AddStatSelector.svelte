<script>
    export let players;
    export let headingText;
    export let backgroundColor;
</script>
  
<section>
    <h3 style={`background-color: ${backgroundColor};`}>{headingText}</h3>
    <ol>
        {#each players as player}
            <li>{player.firstname} {player.lastname}</li>
        {/each}
    </ol>
</section>


<style>

section{
    overflow: hidden;
}

h3{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-radius: 5px;
    font-family: 'Sora', sans-serif;
    color: white;
}

ol{
    height: 100%;
    overflow-y: auto;
}

li{
    font-family: 'Sora', sans-serif;
    padding: 0.5rem;
    border-bottom: 1px solid var(--button-background-color);
}

</style>