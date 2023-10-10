<script>
    export let data
    const { teams } = data
</script>

<main>
    <header>
        <h2>All Teams</h2>
        <p class="subtitle-medium">View all teams</p>
    </header>
    <section>
        <form>
            <input type="search" id="search-term" name="search-term" placeholder="Search team...">
        </form>
    </section>
    <section class="all-teams">
        {#each teams as team}
        <div>
            <img src="/images/raimon.png" alt="Raimon Logo">
            <p>{team.name}</p>
        </div>
        {/each}
    </section>
    <button>Create your tournament</button>
</main>

<style>

    form{
        display: flex;
        flex-direction: column;
        max-width: 25rem;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .all-teams{
        display: flex;
        gap: 1rem;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 8rem;
        height: 8rem;
        background-color: var(--input-background-color);
        border-radius: 15px;
        box-shadow: var(--box-shadow);
    }

    img{
        width: 3.5rem;
        margin-bottom: 0.5rem;
    }

    button{
        position: absolute;
        left: 3.5rem;
        bottom: 3.5rem;
        width: fit-content;
    }
    
</style>