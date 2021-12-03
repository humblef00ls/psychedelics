<script>
	let adjs = ["Condensed", "Conflicting", "Confusing"];
	import { page } from "$app/stores";
	import { fly,fade } from 'svelte/transition';
	let curridx = 0;
	let curradjs = [adjs[curridx]];
	let box;
	let box2;
	let y = 0;
	let y2 = 0;
	let last = 0;
	$: frac = Math.min(y / (box ? box.clientHeight : 1), 1);
	$: flip = last - y >= 0 && frac < 0.99 ? false : true;
	$: sector = Math.round(box2 ? y2 / box2.clientHeight : 0);

	import { time_periods } from "$store";
	import { onMount } from "svelte";

	import Header from "$lib/Header.svelte";
	import Timeline from "$lib/Timeline.svelte";
	onMount(() => {
		let f = setInterval(() => {
			curridx = (curridx + 1) % adjs.length;
			curradjs = [adjs[curridx]];
		}, 2000);

		return () => {
			clearInterval(f);
		};
	});

	function shadower(node) {
		if (node.clientHeight < node.scrollHeight) {
			node.classList.add("shadow-bottom");
			node.addEventListener("scroll", () => {
				if (node.clientHeight + node.scrollTop >= node.scrollHeight) {
					node.classList.add("shadow-top");
					node.classList.remove("shadow-bottom");

					node.classList.remove("shadow-both");
				} else if (node.scrollTop == 0) {
					node.classList.add("shadow-bottom");
					node.classList.remove("shadow-top");
					node.classList.remove("shadow-both");
				} else {
					node.classList.add("shadow-both");
				}
			});
		}
	}
	let imgx = undefined
	let descx = undefined
	let refx = undefined
	function handleIMG(e){
		imgx = e.target.src
		descx = e.target.alt
		refx = e.target.dataset.ref

		console.log(imgx,refx)
		// e.target.classList.toggle('magx') 

	}
</script>

<svelte:head>
	<title>History of Psychedelics</title>
</svelte:head>
{#if imgx}
	<div class="magx" transition:fade={{duration:300,opacity:0}} on:click={()=>imgx=undefined}> 
		 <img src={imgx}  class="fullsc"  alt={descx}/>
		 <div class="imgmeta">
			 <p>
			 {descx}
			</p>
			 
			 <a href={refx}>Source</a>
		</div>


	</div>
{/if}
<Header bind:flip />
<main
	bind:this={box}
	on:scroll={() => {
		last = y;
		y = box.scrollTop;
	}}
>
	<section class={`title ${flip ? "tshift" : ""} `}>
		{#each time_periods as time_period,i}
		<div
			class={`bg ${  sector == i && flip? "bgs" : ""} `}
			style={`background-image: url('${time_period.bg}');`}
		/>
		{/each}


		<div class={`ops ${flip ? "showx" : "hidex"}`}>
			<Timeline {sector} y={y2} h={box2} />
		</div>

		<h1 class={`ops ${!flip ? "showx" : "hidex"}`}>
			The
			{#each curradjs as curradj}
				<span class="ch">{curradj}</span>
			{/each}

			History of <span class="ch">Psychedelics</span>
		</h1>
	</section>
	<div class="container" id="home">
		<section class={`thesiser infox ${flip ? "sshift" : ""} `}>
			<p use:shadower class="thesis">
				An abundance of compounds have histories storied by love-hate relationships with different pockets of society. This makes sense. We intuitively understand - even from a young age - that many substances are neither good nor bad: the value they provide depends on how we use them, and also how we view the implications of those uses. We can understand them as pharmakon because we share a common understanding of how their impact changes depending on the context. Psychedelics are different.
				<br><br>
				Psychedelics are mystical and, to a degree, unpredictable. Their effects vary dramatically based on set, setting and the user. Even under comparable circumstances, psychedelic trips may result in radically different experiences. Most importantly, psychedelic trips take place in the mind. The only person truly equipped to report on the effects is the user themself. This makes it incredibly hard to generalize the effects of psychedelics, and to categorize these substances as wholly “good” or “bad,” even when we have full context of their application. 
				<br><br>
				The compound history of fungi-derived psychedelics can appear nonsensical. How is it that the same substances unchanged repeatedly waltz in and out of fashion? We argue that due to the subjective nature of psychedelic trips, widely-held societal beliefs on psychedelics during any snapshot of time are more a reflection of cultural attitudes and impressions of the dominant group/s interacting with psychedelics at that time than of the drugs themselves. 
				<br><br>
				As much as psychedelics are ineffable, they are revealing: they do not explain themselves but they do help us better understand the constructs of the societies in which their users exist. 
				
			</p>
			<div class="scrollx">Scroll to explore</div>
		</section>
	</div>
	<div class="container" id="timeline">
		<section
			class={`infox timeliner ${flip ? "sshift" : ""} `}
			bind:this={box2}
			on:scroll={() => (y2 = box2.scrollTop)}
		>
			{#each time_periods as time_period}
				<div id={time_period.title.split(" ").join("")}>
					<h3 class="sectitle">
						{time_period.title}
						<span class="timex">{time_period.time}</span>
					</h3>
					<article class={`paras  `} use:shadower>
						{#each time_period.content as content}
							{#if content[0] == "$"}
								<p class="img">
									{#each content.split("$").slice(1) as item}

										<img class={`${item[0]=='L' ? 'si' : 'mi' }`}  
										src={item[0]=='L' ?  item.slice(1).split('@')[0] : item.split('@')[0]}
										 on:click={handleIMG} 
										alt={item.split('@')[1]?.split('~')[0]}
										data-ref={item.split('@')[1]?.split('~')[1]}
										/>
									{/each}
								</p>
							{:else}
								<p class="para">{content}</p>
							{/if}
						{/each}
					</article>
				</div>
			{/each}
		</section>
	</div>
</main>

<style>
	.thesis{
		height: 100%;
		overflow-y: auto;
		padding: 1rem;
	}
	.ops {
		position: absolute;
		transition: 500ms ease-out;
	}
	.hidex {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}
	.showx {
		opacity: 1;
	}
	.si{
		max-width:unset;
	}
	.mi{
		max-width: '50%' 
	}
	.magx{
		
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		
		z-index: 100;
	}
	.fullsc{
		height: 80%;
		width: auto;
		max-height: unset;
		max-width: unset;
		position: absolute;
		top: 70px;
		left: 50%;
		transform: translate(-50%, 0%);
		cursor: auto;
	}
	.bg {
		height: 100%;
    	width: 35vw;
    	position: absolute;
    	background-size: cover;
   		background-position: center;
    	background-repeat: no-repeat;
    	z-index: -1;
    	left: 15vw;
		top: 0px;
    	opacity: 0;
    	transition: 400ms ease-out;
	}
	.imgmeta{
		position: absolute;
    bottom: 30px;
    left: 0;
    width: 100%;
    z-index: 102;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
	}

	.imgmeta a{
		color: white;
	}
	.imgmeta p {
		padding: 5px 100px;
		text-align: center;

	}

	.bgs {
		opacity: 0.4;
	}
	.img {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		height: 400px;
		flex-direction: row;
		margin-bottom: 40px;
		margin-top: 40px;
	}
	img {
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
		max-width: 50%;
		height: 90%;
		max-height: 400px;
		cursor: pointer;
	}


	.paras {
		overflow-y: auto;
		height: calc(100vh - 200px);
		margin-top: 15px;
		transition-duration: 300ms;
	}
	.shadow-bottom {
		box-shadow: inset 0 -10px 15px -15px #000000;
	}
	.shadow-top {
		box-shadow: inset 0 10px 15px -15px #000000;
	}
	.shadow-both {
		box-shadow: inset 0 -10px 15px -15px #000000,
			inset 0 10px 5px -10px #000000;
	}
	.para {
		margin: 15px;
	}
	.para:first-child {
		margin-top: 0;
	}
	.sectitle {
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		align-items: center;
	}
	.timex {
		font-size: 0.6em;
		opacity: 0.6;
		margin-left: 10px;
	}
	.timeliner {
		overflow: hidden;
		scroll-snap-type: y mandatory;
		overflow-y: auto;
		height: calc(100vh - 50px);
		margin-top: 50px;
		padding: 0px;
		width: 70vw;
	}
	.infox {
		transform: translate3d(50vw, 0px, 0px);

		transition: transform 400ms ease-out;
	}
	.sshift {
		transform: translate3d(30vw, 0px, 0px);
	}
	.timeliner div {
		font-size: 1.5em;
		margin: 0;

		height: 100%;
		width: 100%;
		scroll-snap-align: center;
		padding: 40px 80px;
	}
	.timeliner div p {
		font-size: 1rem;
	}

	main {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		background-color: var(--text);
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
	}
	.title {
		position: fixed;
		z-index: 4;
		box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
			rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
			rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
		width: calc(50vw);
		transform: translate3d(0%, 0px, 0px);
		transition: transform 400ms ease-out;
	}
	.tshift {
		transform: translate3d(-20vw, 0px, 0px);
	}
	.oshift {
		opacity: 1;
	}
	.container {
		height: 100vh;
		width: 100vw;

		scroll-snap-align: start;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}

	.scrollx {
		position: absolute;
		bottom: 10px;
		left: 0px;
		width: 100%;
		height: 50px;
		text-align: center;
		opacity: 0.5;
		transition-duration: 200ms;
		transition-property: opacity;
		transition-timing-function: ease-out;
		color: var(--back);
	}
	.scrollx:hover {
		opacity: 1;
	}
	.ch {
		color: var(--text);
	}
	h1,
	h2 {
		font-size: 4.4em;
		color: var(--text-inv);
		letter-spacing: 4px;
	}
	h2 {
		font-size: 2.4em;
		text-align: center;
		font-weight: lighter;
		padding: 20px 10px;
	}
	h3 {
		font-size: 2rem;
	}
	section {
		width: 50vw;
		padding: 8vw;
		height: 100%;

		color: var(--back);
	}
	.title {
		background-color: var(--back);
	}
	section p {
		font-size: 1.2em;
		line-height: 1.5em;
		margin-top: 0;
		margin-bottom: 0;
	}
	.thesiser{
		padding: 5vw;
	}
</style>
