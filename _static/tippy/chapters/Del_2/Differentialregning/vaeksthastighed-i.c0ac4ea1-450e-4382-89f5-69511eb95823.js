selector_to_html = {"a[href=\"#vaeksthastighed\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">19.1. </span>V\u00e6ksthastighed<a class=\"headerlink\" href=\"#vaeksthastighed\" title=\"Permalink til denne overskrift\">#</a></h1><p>For at motivere differentialregningen vil vi indledningsvist kigge p\u00e5 nogle af de funktioner, som vi nu har stiftet bekendtskab med. Lad os betragte f\u00f8lgende figur langs <span class=\"math notranslate nohighlight\">\\(x\\)</span>-aksen fra venstre mod h\u00f8jre:</p>"}
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
