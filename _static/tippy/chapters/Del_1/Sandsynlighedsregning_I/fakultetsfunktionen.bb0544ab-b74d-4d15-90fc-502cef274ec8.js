selector_to_html = {"a[href=\"#fakultetsfunktionen\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">13.4. </span>Fakultetsfunktionen<a class=\"headerlink\" href=\"#fakultetsfunktionen\" title=\"Permalink til denne overskrift\">#</a></h1><p>Inden vi skal til at introducere kombinationer og permutationer, s\u00e5 f\u00e5r vi brug for en vigtig funktion nemlig <em>fakultetsfunktionen</em>. Denne er defineret ved:</p>", "a[href=\"#opgaver\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">13.4.1. </span>Opgaver<a class=\"headerlink\" href=\"#opgaver\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#equation-fakultetsidentitet\"]": "<div class=\"math notranslate nohighlight\" id=\"equation-fakultetsidentitet\">\n\\[    n! = n (n-1)!\\]</div>", "a[href=\"#equation-fakultetsfunktion\"]": "<div class=\"math notranslate nohighlight\" id=\"equation-fakultetsfunktion\">\n\\[    n! = n\\cdot (n-1) \\cdot (n-2) \\cdots 3 \\cdot 2 \\cdot 1, \\qquad n\\in\\mathbb{N}.\\]</div>"}
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
