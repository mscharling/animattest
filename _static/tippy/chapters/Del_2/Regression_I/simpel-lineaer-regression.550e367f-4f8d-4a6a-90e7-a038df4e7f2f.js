selector_to_html = {"a[href=\"#equation-eq-simpel-lineaer-regression-fx\"]": "<div class=\"math notranslate nohighlight\" id=\"equation-eq-simpel-lineaer-regression-fx\">\n\\[    f(x) = \\beta_0 + \\beta_1 x,\\]</div>", "a[href=\"#simpel-lineaer-regression\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.2. </span>Simpel line\u00e6r regression<a class=\"headerlink\" href=\"#simpel-lineaer-regression\" title=\"Permalink til denne overskrift\">#</a></h1><p>Lad os forts\u00e6tte med at betragte et datas\u00e6t p\u00e5 formen</p>", "a[href=\"#equation-eq-simpel-lineaer-regression\"]": "<div class=\"math notranslate nohighlight\" id=\"equation-eq-simpel-lineaer-regression\">\n\\[    y = \\beta_0 + \\beta_1 x,\\]</div>", "a[href=\"#mindste-kvadraters-metode\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.2.1. </span>Mindste kvadraters metode<a class=\"headerlink\" href=\"#mindste-kvadraters-metode\" title=\"Permalink til denne overskrift\">#</a></h2><p>Mindste kvadraters metode handler om at finde den linje, der passer bedst til vores datapunkter, ved at minimere summen af de kvadrerede lodrette afstande mellem linjen og datapunkterne.</p><p>Lad os betragte datas\u00e6ttet</p>", "a[href=\"#equation-eq-mindste-kvadraters-metode\"]": "<div class=\"math notranslate nohighlight\" id=\"equation-eq-mindste-kvadraters-metode\">\n\\[    \\text{RSS} = (y_1 - f(x_1))^2 + (y_2 - f(x_2))^2 + \\cdots + (y_n - f(x_n))^2 = \\sum_{i=1}^n (y_i - f(x_i))^2,\\]</div>"}
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
