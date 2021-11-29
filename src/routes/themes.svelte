<script>
    import Header from "$lib/Header.svelte";
    import { fade } from 'svelte/transition';
    import { themes } from "$store";
    
    let sec = -1

</script>
{#if sec != -1}
<section transition:fade>
    <h2>{themes[sec].title}</h2>
    <button on:click={() => sec = -1}>
        
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
    {#each themes[sec].content as content}
           <p>{content}</p>
    {/each}
</section>
{/if}
<main>
    <Header flip={true} w={true} />

    {#each themes as theme, i}
        <div
            class="card"
            style={`background-image:url(${theme.bg})`}
            on:click={() => sec = i}
        >
            <h1>
                {theme.title}
            </h1>
        </div>
    {/each}
</main>

<style>
    button{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        position: absolute;
        top: 40px;
        right: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    main {
        display: grid;

        grid-template-columns: 1fr 1fr;
        grid-template-rows: calc(50vh - 25px) calc(50vh - 25px);
        /* grid-gap: 100px;
        grid-column-gap: 150px;
        padding: 100px; */
        padding-top: 50px;
        transition: 300ms ease-out;
    }
    .clx {
        grid-template-columns: 1fr;
        grid-template-rows: calc(100vh - 50px) 1fr 1fr 1fr;
    }
    h1 {
        font-size: 2em;
        font-weight: lighter;
        text-align: center;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        text-transform: uppercase;
        transition: 300ms ease-out;
        text-shadow: 1px 4px 7px rgb(0 0 0);
        backdrop-filter: brightness(0.5);
    }
    .card {
        color: black;
        display: flex;

        background-color: #2c2c2c;

        cursor: pointer;
        transition: 300ms ease-out;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .card:hover {
        opacity: 1;
    }
    .card:hover h1 {
        backdrop-filter: brightness(0.9);
    }
    section{
        position: fixed;
        z-index: 10;
        width: 80vw;
        height: 80vh;
        left: 10vw;
        top: calc(10vh + 50px);
        background: white;
        color: black;
        padding: 45px 60px;
        border-radius: 25px;
        }

        section p{
            margin: 20px;
        }
        h2{
            font-size: 2em;
            font-weight: lighter;
            
        }
</style>
