selector_to_html = {"a[href=\"#omvendte-proportionale-funktioner\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">11.3.1. </span>Omvendte proportionale funktioner<a class=\"headerlink\" href=\"#omvendte-proportionale-funktioner\" title=\"Permalink til denne overskrift\">#</a></h2><p>Inddrag eksempler fra andre fagomr\u00e5der fx fysik</p>", "a[href=\"#asymptoter\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">11.3. </span>Asymptoter<a class=\"headerlink\" href=\"#asymptoter\" title=\"Permalink til denne overskrift\">#</a></h1><h2><span class=\"section-number\">11.3.1. </span>Omvendte proportionale funktioner<a class=\"headerlink\" href=\"#omvendte-proportionale-funktioner\" title=\"Permalink til denne overskrift\">#</a></h2><p>Inddrag eksempler fra andre fagomr\u00e5der fx fysik</p>"}
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
