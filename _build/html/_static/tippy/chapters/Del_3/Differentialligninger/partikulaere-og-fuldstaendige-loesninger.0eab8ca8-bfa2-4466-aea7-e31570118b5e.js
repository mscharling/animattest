selector_to_html = {"a[href=\"#partikulaere-og-fuldstaendige-losninger\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">32.2. </span>Partikul\u00e6re og fuldst\u00e6ndige l\u00f8sninger<a class=\"headerlink\" href=\"#partikulaere-og-fuldstaendige-losninger\" title=\"Permalink til denne overskrift\">#</a></h1><p>N\u00e5r vi l\u00f8ser differentialligninger, kan det v\u00e6re under givne <em>bibetingelser</em>. En bibetingelse er noget, som funktionen ogs\u00e5 skal opfylde, n\u00e5r vi finder funktionen, der l\u00f8ser differentialligningen. Et eksempel kunne v\u00e6re, at funktionen skal sk\u00e6re <span class=\"math notranslate nohighlight\">\\(y\\)</span>-aksen i et bestemt punkt.</p><p>L\u00f8ser vi en differentialligning uden at tage hensyn til bibetingelser, f\u00e5r vi en familie af funktioner, der alle kan opfylde differentialligningen. Denne kalder vi den <em>fuldst\u00e6ndige l\u00f8sning</em>. N\u00e5r vi derimod tilf\u00f8jer bibetingelser og bruger dem til at finde \u00e9n specifik funktion i denne familie, kalder vi det en <em>partikul\u00e6r l\u00f8sning</em>.</p>"}
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
