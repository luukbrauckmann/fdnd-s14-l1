<script>
    export let data
    const { players } = data
    import { onMount } from 'svelte';

    onMount(() => {


    //Search player function
    const searchPlayerInput = document.getElementById('search-player')

    function searchTeams(){
        let input, filter, list, player, p, i, txtValue;
        input = document.getElementById("search-player");
        filter = input.value.toLowerCase();
        list = document.querySelector(".all-players");
        player = document.querySelectorAll(".player")
        for (i = 0; i < player.length; i++) {
        p = player[i].querySelectorAll(".searchTag")[0]; 
        txtValue = p.textContent || p.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            player[i].style.display = "flex";
        } else {
            player[i].style.display = "none";
        }
    }
    }

    searchPlayerInput.addEventListener('keyup', searchTeams);

    })

</script>

<main>
    <h2>All Players</h2>
    <p class="subtitle-medium">View all players</p>
    <form>
        <input type="text" id="search-player" name="search-player" placeholder="Search player...">
    </form>
    <section class="all-players">
        {#each players as player}
            <div class="player">
                <!-- <img src="/images/raimon.png" alt="Raimon Logo"> -->
                <div class="player-name">
                    <p class="searchTag">{player.firstname} {player.lastname}</p>
                </div>
                <div class="player-info">
                    <p>{player.date_of_birth}</p>
                    |
                    <p>{player.country.name}</p>
                    |
                    <p>{player.gender}</p>
                    |
                    <p>{player.country.region}</p>
                </div>
            </div>
        {/each}
    </section>
    <button>Create your team</button>
</main>

<style>

    main{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .all-players{
        border-radius: 20px;
        max-height: 50vh;
        width: 75vw;
        overflow-y: scroll;
    }

    .player{
        display: flex;
        gap: 1rem;
        border-bottom: 1px solid var(--sub-text-color);
        padding: 1rem 1.5rem;
        background-color: var(--element-background-color);
    }

    .player-name{
        display: flex;
        gap: 0.4rem;
        width: 25vw;
        font-family: var(--primary-font-family);
        font-weight: 800;
        color: var(--primary-font-color)
    }

    .player-info{
        display: flex;
        gap: 0.5rem;
        font-family: var(--secondary-font-family);
        font-weight: 800;
        color: var(--sub-text-color);
    }

    input{
        width: 30vw;
    }

    button{
        position: absolute;
        width: fit-content;
        bottom: 3.5rem;
        left: 3.5rem;
    }
    
</style>