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
        list = document.querySelector(".add-player-list");
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

    //Save button redirect to "all teams"

    document.querySelector(".save-button").addEventListener('click', () => {
        location.href= "/teams"
    });

    })
</script>

<main>
    <header>
        <h2>Create Team: <span class="header-team-name">Big Waves</span></h2>
    </header>

    <section class="wrapper">
        <div class="current-players">
            <p class="subtitle-medium">Current players in team</p>
            <div class="current-player-list">
                <div class="current-player">
                    <p class="current-player-name">No players has been added to this team</p>
                </div>
            </div>
        </div>
        <div class="add-players">
            <p class="subtitle-medium">Add players to team</p>
            <form>
                <input type="text" id="search-player" name="search-player" placeholder="Search player...">
            </form>
            <div class="add-player-list">
                {#each players as player}
                <div class="player">
                    <p class="searchTag player-name">{player.firstname} {player.lastname}</p>
                </div>
                {/each}
            </div>
        </div>
        <div class="link-wrapper">
            <a href="/teams/new" class="return-link">Return</a>
            <button class="save-button">Save</button>
        </div>
    </section>
</main>


<style>

    .wrapper{
        display: flex;
        gap: 2rem;
    }

    .header-team-name{
        font-size: (1rem, 4.2vw, 4rem);
        font-weight: 400;
    }

    .current-players{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 40%;
    }

    .current-player{
        width: 100%;
        background-color: var(--element-background-color);
        opacity: 0.4;
        padding: 2vh;
        box-shadow: var(--box-shadow);
        border-radius: 20px;
    }

    .current-player-name{
        font-family: var(--secondary-font-family);
        font-size: 16px;
        font-style: italic;
    }

    .add-players{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 50%;
    }

    .add-player-list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        height: 45vh;
        overflow-y: scroll;
        padding: 0.5rem;
    }

    .player{
        display: flex;
        text-align: center;
        align-items: center;
        width: 8rem;
        height: 8rem;
        background-color: var(--element-background-color);
        border-radius: 20px;
        box-shadow: var(--box-shadow);
        font-family: var(--secondary-font-family);
        font-size: 22px;
        padding: 1rem;
    }

    input{
        width: 100%;
    }

    .link-wrapper{
        position: absolute;
        bottom: 3.5rem;
        display: flex;
        gap: 1rem;
    }

    button{
        width: 7rem;
    }

    .return-link{
        background-color: transparent;
        color: var(--button-background-color);
        border-radius: 25px;
        padding: 0.7rem 1.5rem;
        width: 7rem;
        text-align: center;
        cursor: pointer;
        border: 2px solid var(--button-background-color);
        font-family: var(--secondary-font-family);
        font-weight: 700;
        font-size: 1rem;
    }

</style>