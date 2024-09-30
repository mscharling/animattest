selector_to_html = {"a[href=\"#maengdeteori-i\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">M\u00e6ngdeteori I<a class=\"headerlink\" href=\"#maengdeteori-i\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#symboler\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Symboler<a class=\"headerlink\" href=\"#symboler\" title=\"Permalink til denne overskrift\">#</a></h1><p>Nedenfor finder du en liste over samtlige symboler tilknyttet de forskellige emner.</p>", "a[href=\"#tal-og-algebra\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tal og algebra<a class=\"headerlink\" href=\"#tal-og-algebra\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#ligninger-og-uligheder\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Ligninger og uligheder<a class=\"headerlink\" href=\"#ligninger-og-uligheder\" title=\"Permalink til denne overskrift\">#</a></h2>"}
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
