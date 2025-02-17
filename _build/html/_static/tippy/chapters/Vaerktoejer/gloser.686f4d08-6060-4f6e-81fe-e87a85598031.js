selector_to_html = {"a[href=\"#term-empirisk\"]": "<dt id=\"term-empirisk\">empirisk</dt><dd><p>N\u00e5r noget er bygget p\u00e5 faktiske observationer.</p></dd>", "a[href=\"#term-central-tendens\"]": "<dt id=\"term-central-tendens\">central tendens</dt><dd><p>Et m\u00e5l for central tendens fors\u00f8ger at beskrive et datas\u00e6t ved at finde den centrale placering af observationerne. Gennemsnittet, medianen og typetallet er eksempler p\u00e5 s\u00e5danne m\u00e5l.</p></dd>", "a[href=\"#gloser\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Gloser<a class=\"headerlink\" href=\"#gloser\" title=\"Permalink til denne overskrift\">#</a></h1>", "a[href=\"#term-kvantificere\"]": "<dt id=\"term-kvantificere\">kvantificere</dt><dd><p>At oms\u00e6tte noget s\u00e5 det kan t\u00e6lles eller m\u00e5les.</p></dd>", "a[href=\"#term-redundant\"]": "<dt id=\"term-redundant\">redundant</dt><dd><p>N\u00e5r noget er lige gyldigt.</p></dd>"}
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
