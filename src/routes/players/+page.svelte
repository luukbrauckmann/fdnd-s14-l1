<script>
    export let data
    const { players } = data
</script>


<section class="all-players">
    {#each players as player}
        <div>
            <img src="/images/raimon.png" alt="Raimon Logo">
            <p>{player.firstname}</p>
            <p>{player.lastname}</p>
            <p>{player.gender}</p>
            <p>{player.country.name}</p>
            <p>{player.country.region}</p>
            <p>{player.date_of_birth}</p>
            
        </div>
    {/each}
</section>