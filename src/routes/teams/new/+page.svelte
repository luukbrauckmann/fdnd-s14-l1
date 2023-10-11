<main>
    <header>
        <h2>Create Team</h2>
        <p class="subtitle-medium">Create your team</p>
    </header>
    <section>
        <form>
            <input type="text" id="team-name" name="team-name" placeholder="Team name...">
            <input type="text" id="country-name" name="country-name" placeholder="Country of origin...">
            <label class="custom-file-upload">
                <input type="file" id="add-logo" name="add-logo">
                <div>
                    <img src="/images/add-image-icon.svg" alt="add button">
                    <p class="logo-text">Add logo</p>
                </div>
                </label>
            <a href="/teams/new-progress">
                <button>Next</button>
            </a>
        </form>
    </section>
</main>

<style>

    form{
        display: flex;
        flex-direction: column;
        max-width: 25rem;
        gap: 1rem;
    }

    .logo-text{
        font-family: var(--primary-font-family);
        font-weight: bold;
        color: var(--primary-font-color);
    } 
   
    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input[type="file"]{
        display: none;
    }

    .custom-file-upload{
        display: flex;
        justify-content: center;
        background-color: var(--input-background-color);
        border-radius: 15px;
        box-shadow: var(--box-shadow);
        padding: 1.5rem 0;
    }

    button{
        position: absolute;
        left: 3.5rem;
        bottom: 3.5rem;
        width: fit-content;
    }

</style>