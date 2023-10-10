<script>

    const players = Array.from({ length: 20 }, (_, index) => ({
        jersey_number: index + 1,
        name: 'Hendrik Peters',
        goals: 1,
        assists: 2,
        blocks: 3,
        turnovers: 4,
    }))
</script>

<section class="page">
    <header class="page__header">
        <h1>Commentator Dashboard</h1>
    </header>

    <div class="page__content">
        <section class="team">
            <header class="team__header">
                <h2>
                    <img src="/images/raimon.png" alt="" height="32" width="32">
                    <span>Raimon</span>
                </h2>

                <p>Engeland | London</p>
            </header>

            <div class="team__content">
                <table>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Goals</th>
                            <th>Assists</th>
                            <th>Blocks</th>
                            <th>Turnovers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each players as player }
                            <tr>
                                <td>
                                    <span class="jersey-number">{ player.jersey_number }</span>
                                </td>
                                <td>{ player.name }</td>
                                <td>
                                    <span class="statistic-goals">{ player.goals }</span>
                                </td>
                                <td>
                                    <span class="statistic-assists">{ player.assists }</span>
                                </td>
                                <td>
                                    <span class="statistic-blocks">{ player.blocks }</span>
                                </td>
                                <td>
                                    <span class="statistic-turnovers">{ player.turnovers }</span>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </section>

        <section class="statistics">
            <header class="statistics__header">
                <h2>Statistics</h2>
            </header>

            <div class="statistics__content">

            </div>

        </section>

        <section class="team">
            <header class="team__header">
                <h2>
                    <img src="/images/chaos-angel-zero.png" alt="" height="32" width="32">
                    <span>Royal Academy</span>
                </h2>
                
                <p>India | Mumbai</p>
            </header>

            <div class="team__content">
                <table>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Goals</th>
                            <th>Assists</th>
                            <th>Blocks</th>
                            <th>Turnovers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each players as player }
                            <tr>
                                <td>
                                    <span class="jersey-number">{ player.jersey_number }</span>
                                </td>
                                <td>{ player.name }</td>
                                <td>
                                    <span class="statistic-goals">{ player.goals }</span>
                                </td>
                                <td>
                                    <span class="statistic-assists">{ player.assists }</span>
                                </td>
                                <td>
                                    <span class="statistic-blocks">{ player.blocks }</span>
                                </td>
                                <td>
                                    <span class="statistic-turnovers">{ player.turnovers }</span>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </section>

    </div>
</section>

<style>
    .page {
        margin-right: calc(10% + 2rem);
        height: 100vh;
    }

    .page__header,
    .statistics__header h2,
    .team__content table thead {
        clip: rect(0 0 0 0); 
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap; 
        width: 1px;
    }

    .page__content {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
        padding: 1rem;
    }

    .team {
        display: flex;    
        flex-flow: column nowrap;
        gap: 1rem;
    }

    .team__header,
    .statistics__header {
        background: white;
        padding: 1rem;
        border: 1px solid white;
        border-radius: 1rem;
    }

    .team__header h2,
    .team__header p,
    .statistics__header h2 {
        font-size: 1.5rem;
        display: flex;
        gap: .5rem;
        align-items: center;
    }

    .team:last-child .team__header h2,
    .team:last-child .team__header p {
        flex-flow: row-reverse;
    }

    .team__content {
        flex: 1;
    }

    .team__content table {
        width: 100%;
        height: 100%;
        border-collapse: collapse;
        border: 1px solid transparent;
        border-radius: 1rem;
        background: white;
    }

    .team__content table tr {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        border-bottom: 1px solid #D3D3D3;
    }

    .team__content table tr:last-child {
        border-bottom: none;
    }

    .team:last-child .team__content table tr {
        flex-flow: row-reverse nowrap;
    }

    .team__content table td {
        padding: .5rem;
    }

    .team__content table td:nth-child(2) {
        flex: 1;
    }

    .team:last-child .team__content table td:nth-child(2) {
        text-align: right;
    }

    .jersey-number,
    [class^="statistic-"] {
        --size: 2.125rem;
        display: inline-block;
        padding: .5rem;
        width: var(--size);
        height: var(--size);
        text-align: center;
        border-radius: calc(1rem - .5rem);
        border: 1px solid black;
        line-height: 1;
        vertical-align: middle;
    }

    [class^="statistic-"] {
        --color: white;

        color: white;
        background: var(--color);
        border-color: var(--color);
    }

    .statistic-goals {
        --color: #18D02B;
    }

    .statistic-assists {
        --color: #2974E4;
    }

    .statistic-blocks {
        --color: #ED4444;
    }
    
    .statistic-turnovers {
        --color: #FFC738;
    }

    [class^="statistic-"]:empty {
        --color: #F4F5FA;
    }

</style>
