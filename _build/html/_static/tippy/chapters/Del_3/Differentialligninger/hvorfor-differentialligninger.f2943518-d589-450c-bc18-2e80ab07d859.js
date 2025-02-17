selector_to_html = {"a[href=\"#hvorfor-differentialligninger\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">32.1. </span>Hvorfor differentialligninger?<a class=\"headerlink\" href=\"#hvorfor-differentialligninger\" title=\"Permalink til denne overskrift\">#</a></h1><p>Vi har jo egentlig allerede v\u00e6ret lidt inde p\u00e5 titlens sp\u00f8rgsm\u00e5l i introduktionen til dette kapitel. Vi vil bruge differentialligningerne til at opstille ligninger for, hvordan \u00e6ndringer i en variabel afh\u00e6nger af \u00e6ndringer i en anden variabel.</p><p>En differentialligning er en ligning, hvor den ukendte st\u00f8rrelse ikke er et tal, men en funktion. Det nye i differentialligninger er, at vi ikke blot er interesserede i selve funktionen, men ogs\u00e5 i, hvordan funktionen \u00e6ndrer sig. Denne \u00e6ndring beskrives ved hj\u00e6lp af funktionens afledede.</p>", "a[href=\"#dynamikker\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">32.1.1. </span>Dynamikker<a class=\"headerlink\" href=\"#dynamikker\" title=\"Permalink til denne overskrift\">#</a></h2><p>N\u00e5r vi arbejder med differentialligninger, vil vi ofte bruge notationen <span class=\"math notranslate nohighlight\">\\(y\\prime\\)</span> i stedet for <span class=\"math notranslate nohighlight\">\\(\\frac{\\text{d}y}{\\text{d}x}\\)</span>. Det er dog vigtigt at huske, at <span class=\"math notranslate nohighlight\">\\(y\\prime\\)</span> og <span class=\"math notranslate nohighlight\">\\(\\frac{\\text{d}y}{\\text{d}x}\\)</span> angiver det samme, nemlig den afledede af <span class=\"math notranslate nohighlight\">\\(y\\)</span> med hensyn til <span class=\"math notranslate nohighlight\">\\(x\\)</span>. For eksempel:</p>", "a[href=\"#equation-eq-dynamik\"]": "<div class=\"math notranslate nohighlight\" id=\"equation-eq-dynamik\">\n\\[    $\\text{d}y = 2x\\,\\text{d}x.\\]</div>", "a[href=\"../Differentialregning_II/differentialregning-ii.html#ch-differentialregning-ii\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">29. </span>Differentialregning II<a class=\"headerlink\" href=\"#differentialregning-ii\" title=\"Permalink til denne overskrift\">#</a></h1>", "a[href=\"../../Del_2/Differentialregning/differentialregning-i.html#ch-differentialregning-i\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">19. </span>Differentialregning I<a class=\"headerlink\" href=\"#differentialregning-i\" title=\"Permalink til denne overskrift\">#</a></h1><p>En meget vigtig disciplin inden for matematikken er differentialregningen. Differentialregning g\u00e5r ud p\u00e5 at unders\u00f8ge, hvor hurtigt en funktion vokser eller aftager i et bestemt punkt. Det bruges is\u00e6r til funktionsanalyse. Her er vi interesseret i at sige noget om en funktions udvikling, som indeb\u00e6rer</p>"}
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
