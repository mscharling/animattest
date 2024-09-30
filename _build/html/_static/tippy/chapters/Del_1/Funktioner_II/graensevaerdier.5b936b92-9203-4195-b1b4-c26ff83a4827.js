selector_to_html = {"a[href=\"#asymptoter\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">11.2.2. </span>Asymptoter<a class=\"headerlink\" href=\"#asymptoter\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#hojre-og-venstre-graensevaerdier\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">11.2.1. </span>H\u00f8jre og venstre gr\u00e6nsev\u00e6rdier<a class=\"headerlink\" href=\"#hojre-og-venstre-graensevaerdier\" title=\"Permalink til denne overskrift\">#</a></h2><p>Vi skal v\u00e6re opm\u00e6rksomme p\u00e5, at gr\u00e6nsev\u00e6rdier godt kan v\u00e6re forskellige fra hinanden, alt efter hvilken side, vi betragter gr\u00e6nsen fra. Et godt eksempel er hyperblen givet ved forskriften</p>", "a[href=\"#graensevaerdier\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">11.2. </span>Gr\u00e6nsev\u00e6rdier<a class=\"headerlink\" href=\"#graensevaerdier\" title=\"Permalink til denne overskrift\">#</a></h1><p>Et helt centralt begreb inden for matematikken er gr\u00e6nsev\u00e6rdier. Gr\u00e6nsev\u00e6rdien af en funktion eller et udtryk er den v\u00e6rdi, som man opn\u00e5r, n\u00e5r man lader inputv\u00e6rdien g\u00e5 mod en eller anden v\u00e6rdi. Derfor kan man se gr\u00e6nsev\u00e6rdien, som v\u00e6rende det bedste bud p\u00e5 en v\u00e6rdi for et udtryk, n\u00e5r man f\u00f8lger udtrykkets udvikling indtil det punkt. En gr\u00e6nsev\u00e6rdi for en funktion skrives oftest</p>"}
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
