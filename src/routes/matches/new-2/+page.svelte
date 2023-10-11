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
        </article>
                <p class="subtitle-medium">vs</p>
        <article>
            <div class="selected-team">
                <p class="subtitle-large">Team B</p>
            </div>
        </article>
    </section>
    <section class="inputs-info-match">
        <input type="text" id="date" name="date" placeholder="Date of match...">
        <input type="date" id="time" name="time" placeholder="Time of match...">
        <input type="text" id="match-location" name="match-location" placeholder="Match location...">
    </section>

    <p class="subtitle-small">Division</p>

    <section class="divisions">
        <div class="type-division">
            <p class="subtitle-medium">Men</p>
        </div>
        <div class="type-division">
            <p class="subtitle-medium">Woman</p>
        </div>
        <div class="type-division">
            <p class="subtitle-medium">Mixed</p>
        </div>
    </section>

    <p class="subtitle-small">Round</p>

    <section class="divisions">
        <div class="type-division">
            <p class="subtitle-medium">Qualifier</p>
        </div>
        <div class="type-division">
            <p class="subtitle-medium">Group Stage</p>
        </div>
        <div class="type-division">
            <p class="subtitle-medium">Quarter Final</p>
        </div>
        <div class="type-division">
            <p class="subtitle-medium">Semi Final</p>
        </div>
        <div class="type-division">
            <p class="subtitle-medium">Final</p>
        </div>
    </section>

    <a href="matches/new" class="return-button">Return</a>
    <button>Save</button>

</main>

<style>

    .wrapper{
        display: flex;
        flex-direction: row;
        gap: 2rem;
        max-width: 80%
    }

    article{
        width: 25rem;
    }

    .selected-team{
        width: 100%;
        padding: 2vh;
        background-color: var(--selected-background-color);
        color: var(--primary-font-color);
        border-radius: 20px;
        box-shadow: var(--box-shadow);
        text-align: center;
        margin-bottom: 2rem;
    }

    .inputs-info-match{
        display: flex;
        max-width: 80%;
        gap: 1rem;
    }

    .inputs-info-match input{
        width: 100%;
    }

    .subtitle-small{
        margin: 1rem 0rem;
    }

    .type-division{
        width: 100%;
        padding: 2vh;
        background-color: var(--input-background-color);
        color: var(--primary-font-color);
        border-radius: 20px;
        box-shadow: var(--box-shadow);
        text-align: center;
    }

    .divisions{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        max-width: 80%
    }

    .return-button{
        position: absolute;
        left: 3.5rem;
        bottom: 3.5rem;
        width: fit-content;
        background-color: transparent;
        color: var(--button-background-color);
        border-radius: 25px;
        padding: 0.7rem 1.2rem;
        cursor: pointer;
        border: solid 2px var(--button-background-color);
        font-family: var(--secondary-font-family);
        font-weight: 700;
        font-size: 1rem;
    }

    button{
        position: absolute;
        left: 10rem;
        bottom: 3.5rem;
        width: fit-content;
        border: solid 2px var(--button-background-color);
    }

</style>