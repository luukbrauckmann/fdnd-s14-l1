<script>
    export let data
    const { players } = data
</script>


<section class="all-teams">
    {#each players as player}
        <div>
            <img src="/images/raimon.png" alt="Raimon Logo">
            <p>{player.firstname}</p>
            <p>{player.lastname}</p>
            
        </div>
    {/each}
</section>