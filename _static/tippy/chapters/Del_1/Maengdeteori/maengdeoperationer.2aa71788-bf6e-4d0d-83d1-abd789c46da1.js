selector_to_html = {"a[href=\"#opgaver\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.3.1. </span>Opgaver<a class=\"headerlink\" href=\"#opgaver\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#maengdeoperationer\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.3. </span>M\u00e6ngdeoperationer<a class=\"headerlink\" href=\"#maengdeoperationer\" title=\"Permalink til denne overskrift\">#</a></h1><p>Ligesom vi har regneoperationer for tal, som du jo nu ved kan inddeles i talm\u00e6ngderne), s\u00e5 har vi ogs\u00e5 \u00bbregneoperationer\u00ab for samlinger af tal eller andre elementer, nemlig m\u00e6ngdeoperationer. Vi skal l\u00e6re f\u00f8lgende m\u00e6ngdeoperationer at kende:</p>"}
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
