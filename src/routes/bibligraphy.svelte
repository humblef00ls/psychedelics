<script>
    import Header from "$lib/Header.svelte";
    import { bib } from "$store";

</script>
<main>
    <Header flip={true} w={true} />
    {#each bib as b}
        <h4>{b.section}</h4>
        {#each b.items as item}
        <p>
            {item}
           </p>
        {/each}

    {/each}
</main>

<style>
    h4{
        color: #000;
        font-size: 2.4rem;
        font-weight: 600;
        margin: 15px;
        letter-spacing: 3px;
    }

 
    main {


        display: flex;
        flex-direction: column;
    
        padding: 50px 80px;
        padding-top: 120px;
        background: white;
        transition: 300ms ease-out;
        height: 100vh;
        overflow: auto;
    }
    p{

       
        margin: 5px;
        margin-left: 15px;
        color: #000;
    }
</style>
