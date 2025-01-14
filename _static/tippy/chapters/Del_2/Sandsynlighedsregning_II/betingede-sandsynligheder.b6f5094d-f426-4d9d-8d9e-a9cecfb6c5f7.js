selector_to_html = {"a[href=\"#loven-om-total-sandsynlighed\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">20.3.1. </span>Loven om total sandsynlighed<a class=\"headerlink\" href=\"#loven-om-total-sandsynlighed\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#betingede-sandsynligheder\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">20.3. </span>Betingede sandsynligheder<a class=\"headerlink\" href=\"#betingede-sandsynligheder\" title=\"Permalink til denne overskrift\">#</a></h1><h2><span class=\"section-number\">20.3.1. </span>Loven om total sandsynlighed<a class=\"headerlink\" href=\"#loven-om-total-sandsynlighed\" title=\"Permalink til denne overskrift\">#</a></h2>"}
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
