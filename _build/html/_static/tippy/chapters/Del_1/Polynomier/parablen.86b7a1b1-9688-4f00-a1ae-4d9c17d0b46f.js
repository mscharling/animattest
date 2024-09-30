selector_to_html = {"a[href=\"#koefficienternes-betydning\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10.2.1. </span>Koefficienternes betydning<a class=\"headerlink\" href=\"#koefficienternes-betydning\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#tre-punkter\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10.2.3. </span>Tre punkter<a class=\"headerlink\" href=\"#tre-punkter\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#parablen\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10.2. </span>Parablen<a class=\"headerlink\" href=\"#parablen\" title=\"Permalink til denne overskrift\">#</a></h1><h2><span class=\"section-number\">10.2.1. </span>Koefficienternes betydning<a class=\"headerlink\" href=\"#koefficienternes-betydning\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#toppunktet\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10.2.2. </span>Toppunktet<a class=\"headerlink\" href=\"#toppunktet\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#braendpunktet\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10.2.4. </span>Br\u00e6ndpunktet<a class=\"headerlink\" href=\"#braendpunktet\" title=\"Permalink til denne overskrift\">#</a></h2>"}
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
