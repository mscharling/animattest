selector_to_html = {"a[href=\"#ligninger-og-uligheder\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3. </span>Ligninger og uligheder<a class=\"headerlink\" href=\"#ligninger-og-uligheder\" title=\"Permalink til denne overskrift\">#</a></h1><p>Mange af de sp\u00f8rgsm\u00e5l eller problemer, som du m\u00f8der i hverdagen, kan oftest l\u00f8ses med en simpel ligning. Det kr\u00e6ver oftest ikke, at du formaliserer dem, for de fleste af problemer kan blot l\u00f8ses med lidt tankekraft.</p><p>M\u00e5ske har du st\u00f8dt p\u00e5 f\u00f8lgende problemer:</p>"}
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
