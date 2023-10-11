<script>
    export let data;
    import { onMount } from "svelte";
    const { teams } = data


    onMount(() => {


    //GLOBAL VARIABLES//    

    const searchTeamInput = document.getElementById('search-team')

    //FUNCTIONS//
    function searchTeams(){
        let input, filter, list, team, p, i, txtValue;
        input = document.getElementById("search-team");
        filter = input.value.toLowerCase();
        list = document.querySelector(".team-results");
        team = document.querySelectorAll(".team")

        for (i = 0; i < team.length; i++) {
        p = team[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            team[i].style.display = "flex";
        } else {
            team[i].style.display = "none";
        }
    }
    }

    //EVENT LISTENERS//
    searchTeamInput.addEventListener('keyup', searchTeams);
    })

</script>

<main>
    <header>
        <h2>Add Match</h2>
        <p class="subtitle-medium">Add your match</p>
    </header>

    <section class="wrapper">
            <article>
                <div class="selected-team">
                    <p class="subtitle-large">Team A</p>
                </div>
                <div>
                    <form>
                        <input type="text" id="search-team" name="search-team" placeholder="Search team...">
                    </form>
                        <div class="team-results">
                            {#each teams as team}
                                <div class="team">
                                    <img src="/images/raimon.png" alt="Raimon Logo">
                                    <p>{team.name}</p>
                                </div>
                            {/each}
                        </div>
                </div>
            </article>
                <p class="subtitle-medium">vs</p>
            <article>
                <div class="selected-team">
                    <p class="subtitle-large">Team B</p>
                </div>
                <div>
                    <form>
                        <input type="text" id="search-team" name="search-team" placeholder="Search team...">
                    </form>
                        <div class="team-results">
                            {#each teams as team}
                                <div class="team">
                                    <img src="/images/raimon.png" alt="Raimon Logo">
                                    <p>{team.name}</p>
                                </div>
                            {/each}
                        </div>
                </div>
            </article>
    </section>
    <button>Next</button>
</main>

<style>
    
    .wrapper{
        display: flex;
        flex-direction: row;
        gap: 2rem;
        max-width: 80%;
    }

    article{
        width: 25rem;
    }

    .selected-team{
        width: 100%;
        padding: 2vh;
        background-color: var(--input-background-color);
        color: var(--primary-font-color);
        border-radius: 20px;
        box-shadow: var(--box-shadow);
        text-align: center;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        margin-bottom: 0.5rem;
    }

    .team-results{
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        flex-grow: 2;
        overflow-y: scroll;
        padding: 0.5rem 0 2rem 0;
    }

    .team{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 40%;
        background-color: white;
        border-radius: 20px;
        box-shadow: var(--box-shadow);
        padding: 1.5rem 1rem;
        font-family: var(--secondary-font-family);
        text-align: center;
    }

    .team img{
        width: 50%;
    }

    button{
        position: absolute;
        left: 3.5rem;
        bottom: 3.5rem;
        width: fit-content;
    }

</style>
