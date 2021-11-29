<script>
    // your script goes here

    import { time_periods } from "$store";
    import { onMount } from "svelte";
    export let sector = 0;
    export let y
    export let h
    const handleclick = (i) => {

        h.scrollTop = (h.clientHeight * i) + 1;

    }
    onMount(() => {

    });
   
</script>

<ul>
    <span class="linex" />

    {#each time_periods as time_period, i}
        <li >
            <span class="dotx"  class:activex={ i == sector } />
                
            
            <div href={`/#${time_period.title.split(" ").join("")}`} class:active={ i == sector } on:click={()=>handleclick(i)}>
                {time_period.title}<span class="date">{time_period.time}</span></div
            >
        </li>
    {/each}
</ul>

<style>
    .linex{
        position: absolute;
        top:50px;
        left:37.5px;
        width:5px;
        background: white;
        display: block;
        height:calc(100% - 100px);
        opacity: .5;
        z-index: -1;
    }
    .dotx{
      
    height: 15px;
    width: 15px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: -20px;
    border-radius: 50%;
    transform: translate3d(-50%, -50%, 0px) scale(.9);
    z-index: -1;
    transform-origin: center;
    opacity: .8;
    transition: all .25s ease-out;
    }
  
    ul {
        color: white;
    position: relative;
    list-style-type: none;
    display: flex;
    padding: 30px;
    padding-left: 60px;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100vh;
    justify-content: space-between;
    transform: translate3d(calc(12vw), calc(-8vw), 0px)

    }
    li {
        font-size: 1.3rem;

        font-weight: 400;
        position: relative;
        /* transform: scale(.9); */
    }
    .date{
        font-size: .9rem;
        opacity: 0.7;
        font-size: italic;
        font-weight: 400;
        letter-spacing: 1px;
        display: block;

            
    }
    div{
        text-decoration: none;
        color: white;
        transform: scale(.9);
        opacity: .8;
        display: block;
        transform-origin: center left;
        transition-duration: 250ms;
        transition-timing-function: ease-out;
        cursor: pointer;
    }
    div:hover{
        transform: scale(1);
        opacity: 1;
    }
    .active{
        transform: scale(1);
        opacity: 1;
    }
    .activex{
        transform:  translate3d(-50%, -50%, 0px) scale(1);
        opacity: 1;
    }
</style>
