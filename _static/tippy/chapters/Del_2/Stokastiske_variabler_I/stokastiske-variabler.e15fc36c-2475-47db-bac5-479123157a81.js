selector_to_html = {"a[href=\"#diskrete-og-kontinuerte-stokastiske-variabler\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">21.1.1. </span>Diskrete og kontinuerte stokastiske variabler<a class=\"headerlink\" href=\"#diskrete-og-kontinuerte-stokastiske-variabler\" title=\"Permalink til denne overskrift\">#</a></h2><p>N\u00e5r vi arbejder med stokastiske variabler skal vi altid overveje, om den er <em>diskret</em> eller <em>kontinuert</em>. Det er vigtigt at have denne adskilning, da beregninger af sandsynligheder er forskellig i de to tilf\u00e6lde. Vi siger, at en stokastisk variabel er</p>", "a[href=\"#stokastiske-variabler\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">21.1. </span>Stokastiske variabler<a class=\"headerlink\" href=\"#stokastiske-variabler\" title=\"Permalink til denne overskrift\">#</a></h1><p>N\u00e5r vi snakker om sandsynligheder, s\u00e5 vil vi gerne kunne formalisere det matematisk. I Kapitel xx (Sandsynlighedsregning I) var vi egentlig ikke s\u00e6rlig formalistiske i det, at vi godt kunne finde p\u00e5 at skrive sandsynligheder som,</p>"}
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
