selector_to_html = {"a[href=\"#rodder\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10.1.1. </span>R\u00f8dder<a class=\"headerlink\" href=\"#rodder\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#andengradspolynomiet\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10.1. </span>Andengradspolynomiet<a class=\"headerlink\" href=\"#andengradspolynomiet\" title=\"Permalink til denne overskrift\">#</a></h1><h2><span class=\"section-number\">10.1.1. </span>R\u00f8dder<a class=\"headerlink\" href=\"#rodder\" title=\"Permalink til denne overskrift\">#</a></h2>"}
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