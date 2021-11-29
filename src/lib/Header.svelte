<script>
    export let flip = 0
    export let w = false
</script>



<header class:hshift={flip} style={`width:${ w ? 100 : 70}vw`}>
<a href="/#home" >Home</a>
<a href="/#timeline" class:active={flip}>Timeline</a>
<a href="/themes" >Themes</a>
<a href="/bibligraphy" >Bibliography</a>
<a href="/conclusion" >Conclusion</a>



</header>
<style>

    header{
        width:70vw;
        height:50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #111;
        position: fixed;
        top: 0px;
        right: 0px;
        z-index: 2;
        transform: translate3d(0px,-100%,0px);
        transition: transform 400ms ease-out;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    }
    .hshift{
        transform: translate3d(0px,0px,0px);

    }
    a{
        text-decoration: none;
        color: var(--text);
        letter-spacing: 2px;
        transition-duration: 200ms;
        transition-timing-function: ease-out;
        opacity: .9;
        

    }
    a:hover{
        transform: scale(1.1);
        opacity: 1;
    }
    .active{
        transform: scale(1.1);
        opacity: 1;
       
    }
  
</style>
