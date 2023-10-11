<main>
    <header>
        <h2>Create Tournament</h2>
        <p class="subtitle-medium">Create a tournament</p>
    </header>
    <section class="wrapper">
        <section>
                <form>
                    <input type="text" id="name" name="name" placeholder="Tournament name...">
                    <div class="date-fields">
                        <input type="date" id="date" name="date" placeholder="dd-mm-jjjj">
                        <input type="text" id="location" name="location" placeholder="Location...">
                    </div>
                    <a href="/matches/new" class="custom-add-match">
                        <div class="add-match">
                            <img src="/images/add-image-icon.svg" alt="add button">
                            <p class="small-text">Add match</p>
                        </div>
                    </a>
                </form>
                <button>Next</button>
        </section>  
        <section class="empty-state">
            <div class="no-matches-found">
                <p class="empty-text">There are currently no matches found</p>
            </div>
            <div class="no-matches-found">
                <p class="empty-text">...</p>
            </div>
            <div class="no-matches-found">
                <p class="empty-text">...</p>
            </div>
            <div class="no-matches-found">
                <p class="empty-text">...</p>
            </div>
            <div class="no-matches-found">
                <p class="empty-text">...</p>
            </div>
            <div class="no-matches-found">
                <p class="empty-text">...</p>
            </div>
            <div class="no-matches-found">
                <p class="empty-text">...</p>
            </div>
        </section>
    </section>
</main>

<style>

    .wrapper{
        display: flex;
        gap: 2rem;
    }

     form{
        display: flex;
        flex-direction: column;
        width: 40vw;
        gap: 1rem;
    }

    .small-text{
        font-family: var(--primary-font-family);
        font-weight: bold;
        color: var(--primary-font-color);
    }

    .date-fields{
        width: 100%;
        display: flex;
        gap: 1rem;
    }

    .add-match{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input{
        width: 100%;
    }

    .custom-add-match{
        display: flex;
        justify-content: center;
        background-color: var(--input-background-color);
        border-radius: 15px;
        box-shadow: var(--box-shadow);
        padding: 1.5rem 0;
    }

    .empty-state{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .no-matches-found{
        width: 40vw;
        background-color: var(--input-background-color);
        padding: 2vh;
        border-radius: 20px;
        box-shadow: var(--box-shadow);
        opacity: 0.4;
    }

    .empty-text{
        font-size: 1.2rem;
        font-style: italic;
        font-family: var(--tertiary-font-family);
        font-weight: 300;
        color: var(--primary-font-color);
        text-align: center;
    }

    button{
        position: absolute;
        left: 3.5rem;
        bottom: 3.5rem;
        width: fit-content;
    }

</style>