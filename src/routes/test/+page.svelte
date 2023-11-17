<script>
    import AddStatSelector from "../../lib/components/AddStatSelector.svelte";
    import Nav from "../../lib/components/Nav.svelte";
    export let data;
</script>


<main>
    {#if false}
         <Nav />
    {/if}

    <section>
        <AddStatSelector players={data.players} headingText="Scored By:" backgroundColor="var(--scored-by-color)"/>
        <AddStatSelector players={data.players} headingText="Assist By:" backgroundColor="var(--assist-by-color)"/>
        <AddStatSelector players={data.players} headingText="Turnover By:" backgroundColor="var(--turnover-by-color)"/>
        <AddStatSelector players={data.players} headingText="Block By:" backgroundColor="var(--block-by-color)"/>
    </section>
</main>

<style>

    main{
        padding: 0;
    }

    section{
        display: flex;
        flex-wrap: wrap;
        padding: 2rem;
        gap: 5rem;
        width: 100%;
        height: 90vh;
        background-color: white;
    }

    @media only screen and (min-width: 1000px){
        section{
            display: grid;
            gap: 1rem;
            width: 60%;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }
    }



</style>
