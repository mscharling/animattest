selector_to_html = {"a[href=\"#logaritmiske-koordinatsystemer\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Logaritmiske koordinatsystemer<a class=\"headerlink\" href=\"#logaritmiske-koordinatsystemer\" title=\"Permalink til denne overskrift\">#</a></h2><p>Lad os starte med at huske, hvordan vi definerede en klasse af logaritmer <span class=\"math notranslate nohighlight\">\\(\\log_a\\)</span> i Kapitel 1.xx</p>", "a[href=\"#simpel-ikke-lineaer-regression\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Simpel ikke-line\u00e6r regression<a class=\"headerlink\" href=\"#simpel-ikke-lineaer-regression\" title=\"Permalink til denne overskrift\">#</a></h1><p>Vi vil i dette kapitel unders\u00f8ge, n\u00e5r en line\u00e6r model ikke er nok til at forklare sammenh\u00e6ngen mellem to variabler. Her vil vi se nyttigheden i at kigge p\u00e5 <em>log-transformeret</em> data, hvilket betyder, at vi tager logaritmen p\u00e5 vores observationer i data. Vi vil se, at hvis vi observerer en line\u00e6r sammenh\u00e6ng i vores data, hvor vi kun log-transformerer <span class=\"math notranslate nohighlight\">\\(y\\)</span>-v\u00e6rdierne, s\u00e5 vil en eksponentiel regressionsmodel v\u00e6re passende, hvorimod hvis vi log-transformerer b\u00e5de <span class=\"math notranslate nohighlight\">\\(x\\)</span>-v\u00e6rdierne og <span class=\"math notranslate nohighlight\">\\(y\\)</span>-v\u00e6rdierne, s\u00e5 vil en potens regressionsmodel v\u00e6re passende. Dette leder os naturligt ind p\u00e5 logaritmiske koordinatsystemer.</p>", "a[href=\"#simpel-eksponentiel-regression\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Simpel eksponentiel regression<a class=\"headerlink\" href=\"#simpel-eksponentiel-regression\" title=\"Permalink til denne overskrift\">#</a></h2>"}
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
