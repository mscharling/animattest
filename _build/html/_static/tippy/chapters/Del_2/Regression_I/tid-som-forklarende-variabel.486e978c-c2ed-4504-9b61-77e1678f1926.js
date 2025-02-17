selector_to_html = {"a[href=\"#opgaver\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.5.1. </span>Opgaver<a class=\"headerlink\" href=\"#opgaver\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#tid-som-forklarende-variabel\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.5. </span>Tid som forklarende variabel<a class=\"headerlink\" href=\"#tid-som-forklarende-variabel\" title=\"Permalink til denne overskrift\">#</a></h1><p>Rigtig mange datas\u00e6t g\u00e5r ud p\u00e5 at unders\u00f8ge, hvordan vores responsvariabel <span class=\"math notranslate nohighlight\">\\(y_i\\)</span> udvikler sig over tid. Det kunne for eksempel v\u00e6re, hvordan befolkningstilv\u00e6ksten udvikler sig for hvert \u00e5r, der g\u00e5r. Uden at r\u00f8be for meget, s\u00e5 er en eksponentiel model god til at beskrive en s\u00e5dan udvikling. Det vil vi se p\u00e5 i <code class=\"xref std std-numref docutils literal notranslate\"><span class=\"pre\">Kapitel</span> <span class=\"pre\">%s</span></code>.</p><p>Vi vil ben\u00e6vne tid med <span class=\"math notranslate nohighlight\">\\(t\\)</span>. Unders\u00f8ger vi et s\u00e5dan datas\u00e6t, kan vi forestille os, at det har formen</p>"}
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
