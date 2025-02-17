selector_to_html = {"a[href=\"#tid-som-forklarende-variabel\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.5. </span>Tid som forklarende variabel<a class=\"headerlink\" href=\"#tid-som-forklarende-variabel\" title=\"Permalink til denne overskrift\">#</a></h1><p>Rigtig mange datas\u00e6t g\u00e5r ud p\u00e5 at unders\u00f8ge, hvordan vores responsvariabel <span class=\"math notranslate nohighlight\">\\(y_i\\)</span> udvikler sig over tid. Det kunne for eksempel v\u00e6re, hvordan befolkningstilv\u00e6ksten udvikler sig for hvert \u00e5r, der g\u00e5r. Uden at r\u00f8be for meget, s\u00e5 er en eksponentiel model god til at beskrive en s\u00e5dan udvikling. Det vil vi se p\u00e5 i <a class=\"reference internal\" href=\"simpel-ikke-lineaer-regression.html#simpel-ikke-lineaer-regression\"><span class=\"std std-numref\">Kapitel 25.6</span></a>.</p><p>Vi vil ben\u00e6vne tid med <span class=\"math notranslate nohighlight\">\\(t\\)</span>. Unders\u00f8ger vi et s\u00e5dan datas\u00e6t, kan vi forestille os, at det har formen</p>", "a[href=\"simpel-ikke-lineaer-regression.html#simpel-ikke-lineaer-regression\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.6. </span>Simpel ikke-line\u00e6r regression<a class=\"headerlink\" href=\"#simpel-ikke-lineaer-regression\" title=\"Permalink til denne overskrift\">#</a></h1><p>Vi vil i dette kapitel unders\u00f8ge, n\u00e5r en line\u00e6r model ikke er nok til at forklare sammenh\u00e6ngen mellem to variabler. Her vil vi se nyttigheden i at kigge p\u00e5 <em>log-transformeret</em> data, hvilket betyder, at vi tager logaritmen p\u00e5 vores observationer i data. Vi vil se, at hvis vi observerer en line\u00e6r sammenh\u00e6ng i vores data, hvor vi kun log-transformerer <span class=\"math notranslate nohighlight\">\\(y\\)</span>-v\u00e6rdierne, s\u00e5 vil en eksponentiel regressionsmodel v\u00e6re passende, hvorimod hvis vi log-transformerer b\u00e5de <span class=\"math notranslate nohighlight\">\\(x\\)</span>-v\u00e6rdierne og <span class=\"math notranslate nohighlight\">\\(y\\)</span>-v\u00e6rdierne, s\u00e5 vil en potens regressionsmodel v\u00e6re passende. Dette leder os naturligt ind p\u00e5 logaritmiske koordinatsystemer.</p>"}
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
