selector_to_html = {"a[href=\"../Tal_og_algebra/kvadratsaetninger.html#k1\"]": "<div class=\"proof s\u00e6tning admonition\" id=\"k1\">\n<p class=\"admonition-title\"><span class=\"caption-number\">S\u00e6tning 1.3 </span> (1. kvadrats\u00e6tning)</p>\n<section class=\"s\u00e6tning-content\" id=\"proof-content\">\n<p>Lad <span class=\"math notranslate nohighlight\">\\(a\\)</span> og <span class=\"math notranslate nohighlight\">\\(b\\)</span> v\u00e6re vilk\u00e5rlige tal, da g\u00e6lder f\u00f8lgende identitet:</p>\n<div class=\"math notranslate nohighlight\">\n\\[    (a+b)^2 = a^2 + b^2 + 2ab\n    \\tag{K1} \\]</div>\n</section>\n</div>", "a[href=\"#lighed-ligevaegtsprincip-og-aekvivalens\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3.1. </span>Lighed, ligev\u00e6gtsprincip og \u00e6kvivalens<a class=\"headerlink\" href=\"#lighed-ligevaegtsprincip-og-aekvivalens\" title=\"Permalink til denne overskrift\">#</a></h1><p>Ligninger er matematiske udtryk, der indeholder et lighedstegn og en ubekendt, som er den, vi er interesseret i at bestemme. Oftest kalder vi den ubekendte for <span class=\"math notranslate nohighlight\">\\(x\\)</span>. For eksempel er</p>"}
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
