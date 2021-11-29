<script>
    import Header from "$lib/Header.svelte";
    import { bib } from "$store";

</script>
<main>
    <Header flip={true} w={true} />
    
        <p>
            What we have established with our timeline is the nonlinear development of our relationship with psychedelics as a society, where it seems like ancient civilisations were more progressive than us today. In order to even think about the future of psychedelics in our lives, we must first ask ourselves what is different now than all the previous times in history? The answer here is certainly more research. While medical research into psychedelics is not a new idea, psychedelic research has been picking up more and more interest after a 25-year hiatus broken by scientists in Germany (Hermle, 1992), the United States (Strassman and Qualls, 1994), and Switzerland (Vollenweider, 1997). There now exists a foundation of human neuroimaging , psychology, and psychopharmacology studies with psychedelics.
        </p>
        <p>
            These foundational studies complement a small number of early phase clinical trials. There are now positive preliminary reports on the safety and tolerability of psilocybin for obsessive compulsive disorder (Moreno et al, 2006), psilocybin, and LSD for end-of-life psychological distress (Gasser et al, 2014), psilocybin for alcohol (Bogenschutz et al, 2015), and tobacco addiction (Johnson et al, 2014) and ayahuasca and psilocybin for major depressive disorder (Osorio Fde et al, 2015). 
        </p>
        <p>

            While psychedelics’ place in everyday society is not likely to change given its non addictive nature and schedule 1 classification, it does certainly seem like the avenue of medicinal use has been revived for psychedelics, and this time standing on the support of entire research departments (Centre for Psychedelic Research, Imperial College of London).
            
        </p>
 
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
        font-size: 1.2rem;
        line-height: 1.5;
        margin: 20px;
    }
</style>
