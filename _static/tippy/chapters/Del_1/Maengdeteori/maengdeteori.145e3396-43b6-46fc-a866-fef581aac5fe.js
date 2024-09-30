selector_to_html = {"a[href=\"#maengdeteori-i\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2. </span>M\u00e6ngdeteori I<a class=\"headerlink\" href=\"#maengdeteori-i\" title=\"Permalink til denne overskrift\">#</a></h1><p>N\u00e5r vi i daglig tale snakker om m\u00e6ngder, s\u00e5 forst\u00e5r vi, at vi snakker om en samling af ting, personer, m.m.</p><p>For eksempel havde du sikkert forskelligt slags leget\u00f8j, da du var mindre. M\u00e5ske havde du LEGO, Playmobil, Pok\u00e9mon og Schleich. Samler vi disse, s\u00e5 ville de passe godt under \u00bbm\u00e6ngden af leget\u00f8j\u00ab.</p>"}
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
