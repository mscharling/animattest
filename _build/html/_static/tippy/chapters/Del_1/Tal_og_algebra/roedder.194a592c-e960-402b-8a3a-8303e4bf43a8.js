selector_to_html = {"a[href=\"potenser.html#potenser\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.7. </span>Potenser<a class=\"headerlink\" href=\"#potenser\" title=\"Permalink til denne overskrift\">#</a></h1><p>Potenser er ogs\u00e5 tal, som du l\u00e6rte om i folkeskolen. Potenser er blot en m\u00e5de at forkorte regner\u00e6kke hvor samme tal ganges sammen flere gange.</p>", "a[href=\"potenser.html#negativegrundtalthm\"]": "<div class=\"proof s\u00e6tning admonition\" id=\"negativegrundtalthm\">\n<p class=\"admonition-title\"><span class=\"caption-number\">S\u00e6tning 1.6 </span></p>\n<section class=\"s\u00e6tning-content\" id=\"proof-content\">\n<p>Betragt potensen <span class=\"math notranslate nohighlight\">\\((-a)^n\\)</span>, hvor <span class=\"math notranslate nohighlight\">\\(-a\\)</span> er et negativt tal. Da g\u00e6lder f\u00f8lgende udsagn:</p>\n<ul class=\"simple\">\n<li><p>Hvis <span class=\"math notranslate nohighlight\">\\(n\\)</span> er et lige tal, s\u00e5 vil potensen v\u00e6re positiv, <span class=\"math notranslate nohighlight\">\\((-a)^n&gt;0\\)</span>.</p></li>\n<li><p>Hvis <span class=\"math notranslate nohighlight\">\\(n\\)</span> er et ulige tal, s\u00e5 vil potensen v\u00e6re negativ, <span class=\"math notranslate nohighlight\">\\((-a)^n&lt;0\\)</span>.</p></li>\n</ul>\n</section>\n</div>", "a[href=\"#opgaver\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.8.1. </span>Opgaver<a class=\"headerlink\" href=\"#opgaver\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"../../../notebooktest/test.html#roedder\"]": "<div class=\"proof definition admonition\" id=\"roedder\">\n<p class=\"admonition-title\"><span class=\"caption-number\">Definition 1.5 </span> (R\u00f8dder)</p>\n<section class=\"definition-content\" id=\"proof-content\">\n<p>Lad <span class=\"math notranslate nohighlight\">\\(a\\)</span> v\u00e6re et vilk\u00e5rligt tal. Hvis <span class=\"math notranslate nohighlight\">\\(b\\)</span> opfylder</p>\n<div class=\"math notranslate nohighlight\">\n\\[    \\sqrt[n]{a} = b \\ \\text{n\u00e5r}\\ b^n = a,\\]</div>\n<p>s\u00e5 kalder vi <span class=\"math notranslate nohighlight\">\\(b\\)</span> den <span class=\"math notranslate nohighlight\">\\(n\\)</span>\u2019te rod af <span class=\"math notranslate nohighlight\">\\(a\\)</span>.</p>\n</section>\n</div>", "a[href=\"#rodder\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.8. </span>R\u00f8dder<a class=\"headerlink\" href=\"#rodder\" title=\"Permalink til denne overskrift\">#</a></h1><p>Ligesom minus er det modsatte af plus, division er det modsatte af multiplikation, s\u00e5 er r\u00f8dder det modsatte af potenser.</p>"}
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
