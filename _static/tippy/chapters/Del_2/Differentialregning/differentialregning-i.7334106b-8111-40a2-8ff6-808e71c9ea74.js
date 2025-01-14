selector_to_html = {"a[href=\"#differentialregning-i\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">19. </span>Differentialregning I<a class=\"headerlink\" href=\"#differentialregning-i\" title=\"Permalink til denne overskrift\">#</a></h1><p>En meget vigtig disciplin inden for matematikken er differentialregningen. Differentialregning g\u00e5r ud p\u00e5 at unders\u00f8ge, hvor hurtigt en funktion vokser eller aftager i et bestemt punkt. Det bruges is\u00e6r til funktionsanalyse. Her er vi interesseret i at sige noget om en funktions udvikling, som indeb\u00e6rer</p>"}
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
