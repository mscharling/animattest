selector_to_html = {"a[href=\"#tvaervektor\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7.1.5. </span>Tv\u00e6rvektor<a class=\"headerlink\" href=\"#tvaervektor\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#stedvektor\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7.1.3. </span>Stedvektor<a class=\"headerlink\" href=\"#stedvektor\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#nulvektor\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7.1.2. </span>Nulvektor<a class=\"headerlink\" href=\"#nulvektor\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#mellem-to-punkters-vektor\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7.1.4. </span>Mellem to punkters-vektor<a class=\"headerlink\" href=\"#mellem-to-punkters-vektor\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#vektorer\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7.1. </span>Vektorer<a class=\"headerlink\" href=\"#vektorer\" title=\"Permalink til denne overskrift\">#</a></h1><h2><span class=\"section-number\">7.1.1. </span>Hvad er en vektor?<a class=\"headerlink\" href=\"#hvad-er-en-vektor\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#hvad-er-en-vektor\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7.1.1. </span>Hvad er en vektor?<a class=\"headerlink\" href=\"#hvad-er-en-vektor\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#enhedsvektor\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">7.1.6. </span>Enhedsvektor<a class=\"headerlink\" href=\"#enhedsvektor\" title=\"Permalink til denne overskrift\">#</a></h2>"}
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
