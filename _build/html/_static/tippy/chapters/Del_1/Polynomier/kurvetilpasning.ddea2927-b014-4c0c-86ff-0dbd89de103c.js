selector_to_html = {"a[href=\"#taylor\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10.4.1. </span>Taylor<a class=\"headerlink\" href=\"#taylor\" title=\"Permalink til denne overskrift\">#</a></h2><p>Intro, kommer til diff.regning II</p>", "a[href=\"#kurvetilpasning\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">10.4. </span>Kurvetilpasning<a class=\"headerlink\" href=\"#kurvetilpasning\" title=\"Permalink til denne overskrift\">#</a></h1><h2><span class=\"section-number\">10.4.1. </span>Taylor<a class=\"headerlink\" href=\"#taylor\" title=\"Permalink til denne overskrift\">#</a></h2><p>Intro, kommer til diff.regning II</p>"}
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
