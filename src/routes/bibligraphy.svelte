<script>
    import Header from "$lib/Header.svelte";
    import { bib } from "$store";

</script>
<main>
    <Header flip={true} w={true} />
    {#each bib as b}
        <p>
         {b}
        </p>
    {/each}
</main>

<style>
 
    main {


        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 80px;
        padding-top: 120px;
        background: white;
        transition: 300ms ease-out;
        height: 100vh;
    }
    p{

        text-align: center;
        padding: 10px;
        color: #000;
    }
</style>
