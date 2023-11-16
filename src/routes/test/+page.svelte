<script>
    import AddStatSelector from "../../lib/components/AddStatSelector.svelte";
    export let data;
</script>


<main>
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
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        padding: 2rem;
        gap: 1rem;
        width: 60%;
        height: 90vh;
        background-color: white;
    }

</style>
