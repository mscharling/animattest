selector_to_html = {"a[href=\"#forskellige-differentialligninger\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">32.8.3. </span>Forskellige differentialligninger<a class=\"headerlink\" href=\"#forskellige-differentialligninger\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#lineaere-forste-ordens-differentialligninger\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">32.8. </span>Line\u00e6re f\u00f8rste ordens differentialligninger<a class=\"headerlink\" href=\"#lineaere-forste-ordens-differentialligninger\" title=\"Permalink til denne overskrift\">#</a></h1><h2><span class=\"section-number\">32.8.1. </span>Homogenitet<a class=\"headerlink\" href=\"#homogenitet\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#homogenitet\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">32.8.1. </span>Homogenitet<a class=\"headerlink\" href=\"#homogenitet\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#panserformlen\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">32.8.2. </span>Panserformlen<a class=\"headerlink\" href=\"#panserformlen\" title=\"Permalink til denne overskrift\">#</a></h2>"}
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
