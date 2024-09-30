selector_to_html = {"a[href=\"#equation-eq-residualer\"]": "<div class=\"math notranslate nohighlight\" id=\"equation-eq-residualer\">\n\\[    z_i = y_i - f(x_i).\\]</div>", "a[href=\"#residualernes-vigtige-rolle\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.3.1. </span>Residualernes vigtige rolle<a class=\"headerlink\" href=\"#residualernes-vigtige-rolle\" title=\"Permalink til denne overskrift\">#</a></h2><p>Residualerne er helt centrale, n\u00e5r det kommer til at skulle evaluere, hvor god vores model er p\u00e5 vores data. Vi kr\u00e6ver en bestemt opf\u00f8rsel af residualerne for at konkludere, at en model er god til at beskrive sammenh\u00e6ngen i vores data.</p><p><strong>Residualerne skal v\u00e6re s\u00e5 sm\u00e5 som muligt</strong></p>", "a[href=\"#residualer\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.3. </span>Residualer<a class=\"headerlink\" href=\"#residualer\" title=\"Permalink til denne overskrift\">#</a></h1><p>Vi forts\u00e6tter med at betragte datas\u00e6ttet</p>", "a[href=\"#equation-eq-model-med-residualer\"]": "<div class=\"math notranslate nohighlight\" id=\"equation-eq-model-med-residualer\">\n\\[    y_i = f(x_i) + z_i.\\]</div>", "a[href=\"simpel-lineaer-regression.html#equation-eq-mindste-kvadraters-metode\"]": "<div class=\"math notranslate nohighlight\" id=\"equation-eq-mindste-kvadraters-metode\">\n\\[    (y_1 - f(x_1))^2 + (y_2 - f(x_2))^2 + \\cdots + (y_n - f(x_n))^2 = \\sum_{i=1}^n (y_i - f(x_i))^2,\\]</div>"}
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
