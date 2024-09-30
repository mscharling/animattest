selector_to_html = {"a[href=\"#hvad-er-et-integral\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">33.5.1. </span>Hvad er et integral?<a class=\"headerlink\" href=\"#hvad-er-et-integral\" title=\"Permalink til denne overskrift\">#</a></h2><p>I enkelte termer er et integral en m\u00e5de p\u00e5 at finde arealet under en kurve i et bestemt omr\u00e5de. Dette omr\u00e5de kan repr\u00e6sentere mange forskellige ting, afh\u00e6ngig af konteksten, men i sandsynlighedsregning er det ofte sandsynligheden for, at en stokastisk variabel falder inden for et bestemt interval. Vi vender tilbage til dette i senere afsnit.</p>", "a[href=\"#stamfunktion\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">33.5.2. </span>Stamfunktion<a class=\"headerlink\" href=\"#stamfunktion\" title=\"Permalink til denne overskrift\">#</a></h2><p>Faktisk er integralregning den \u00bbmodsatte regneoperation\u00ab af differentiation. I differentialregning \u00f8nskede vi at finde en afledet funktion ud fra en givet funktion. I integralregning har man givet en funktion, som man antager allerede er en afledet funktion. Med integralregning vil vi gerne finde den funktion, som vores givne funktion er afledet fra. Denne funktion kaldes <em>stamfunktionen</em>. Stamfunktioner betegnes med store bogstaver, s\u00e5 hvis vores oprindelige funktion er <span class=\"math notranslate nohighlight\">\\(f\\)</span>, s\u00e5 betegner vi dens stamfunktion(er) med <span class=\"math notranslate nohighlight\">\\(F\\)</span>. Det vil sige, at hvis <span class=\"math notranslate nohighlight\">\\(F\\)</span> er stamfunktion til <span class=\"math notranslate nohighlight\">\\(f\\)</span>, s\u00e5 f\u00e5r vi <span class=\"math notranslate nohighlight\">\\(f\\)</span> ved at differentiere <span class=\"math notranslate nohighlight\">\\(F\\)</span>, med andre ord</p>", "a[href=\"#en-kort-introduktion-til-integralregning\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">33.5. </span>En kort introduktion til integralregning<a class=\"headerlink\" href=\"#en-kort-introduktion-til-integralregning\" title=\"Permalink til denne overskrift\">#</a></h1><p>Integralregning kan virke som en kompleks gren af matematik, men det er et utroligt nyttigt v\u00e6rkt\u00f8j i mange anvendelser, herunder sandsynlighedsregning. I dette kapitel vil vi se, hvordan integralregning kan hj\u00e6lpe os med at forst\u00e5 t\u00e6thedsfunktioner og fordelingsfunktioner i sandsynlighedsregning.</p>", "a[href=\"#infinitesimalregnings-hovedsaetning\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">33.5.3. </span>Infinitesimalregnings Hoveds\u00e6tning<a class=\"headerlink\" href=\"#infinitesimalregnings-hovedsaetning\" title=\"Permalink til denne overskrift\">#</a></h2><p>Vi vil nu sammens\u00e6tte det, som vi har l\u00e6rt omkring ubestemte og bestemte integraler.</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,
                onShow(instance) {MathJax.typesetPromise([instance.popper]).then(() => {});},
            });
        };
    };
    console.log("tippy tips loaded!");
};
