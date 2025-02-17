selector_to_html = {"a[href=\"#opgaver\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.4.1. </span>Opgaver<a class=\"headerlink\" href=\"#opgaver\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#intervaller\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.4. </span>Intervaller<a class=\"headerlink\" href=\"#intervaller\" title=\"Permalink til denne overskrift\">#</a></h1><p>Intervaller er ogs\u00e5 en samling af tal mellem to ydre punkter. Det betyder faktisk, at intervaller er m\u00e6ngder p\u00e5 vores tallinje.</p><p>Nedenfor har vi det, som vi kalder <em>begr\u00e6nset</em> intervaller:</p>", "a[href=\"#inteksempel2\"]": "<div class=\"proof eksempel admonition\" id=\"inteksempel2\">\n<p class=\"admonition-title\"><span class=\"caption-number\">Eksempel 2.7 </span></p>\n<section class=\"eksempel-content\" id=\"proof-content\">\n<p>Et andet eksempel med et interval og elementer.</p>\n</section>\n</div>"}
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
