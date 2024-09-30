selector_to_html = {"a[href=\"#sekant-og-tangent\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">19.3. </span>Sekant og tangent<a class=\"headerlink\" href=\"#sekant-og-tangent\" title=\"Permalink til denne overskrift\">#</a></h1><p>Inden vi skal i gang med tre-trinsreglen, s\u00e5 skal vi blive bekendt med, hvad en sekant og en tangent er.</p>"}
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
