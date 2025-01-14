selector_to_html = {"a[href=\"../../Del_1/Tal_og_algebra/potenser.html#potenser\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.7. </span>Potenser<a class=\"headerlink\" href=\"#potenser\" title=\"Permalink til denne overskrift\">#</a></h1><p>Potenser er ogs\u00e5 tal, som du l\u00e6rte om i folkeskolen. Potenser er blot en m\u00e5de at forkorte regner\u00e6kke hvor samme tal ganges sammen flere gange.</p>", "a[href=\"#equation-eq-mindste-kvadraters-metode\"]": "<div class=\"math notranslate nohighlight\" id=\"equation-eq-mindste-kvadraters-metode\">\n\\[    \\text{RSS} = (y_1 - f(x_1))^2 + (y_2 - f(x_2))^2 + \\cdots + (y_n - f(x_n))^2 = \\sum_{i=1}^n (y_i - f(x_i))^2,\\]</div>", "a[href=\"../../Del_3/Regression_II/multipel-lineaer-regression.html#ch-multipel-lineaer-regression\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">34.6. </span>Multiple line\u00e6r regression<a class=\"headerlink\" href=\"#multiple-lineaer-regression\" title=\"Permalink til denne overskrift\">#</a></h1>", "a[href=\"../../Del_1/Analytisk_plangeometri/analytisk-plangeometri.html#ch-analytisk-plangeometri\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">6. </span>Analytisk plangeometri<a class=\"headerlink\" href=\"#analytisk-plangeometri\" title=\"Permalink til denne overskrift\">#</a></h1>", "a[href=\"#simpel-lineaer-regression\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.2. </span>Simpel line\u00e6r regression<a class=\"headerlink\" href=\"#simpel-lineaer-regression\" title=\"Permalink til denne overskrift\">#</a></h1><p>Lad os forts\u00e6tte med at betragte et datas\u00e6t p\u00e5 formen</p>", "a[href=\"#equation-eq-simpel-lineaer-regression\"]": "<div class=\"math notranslate nohighlight\" id=\"equation-eq-simpel-lineaer-regression\">\n\\[    y = \\beta_0 + \\beta_1 x,\\]</div>", "a[href=\"#equation-eq-simpel-lineaer-regression-fx\"]": "<div class=\"math notranslate nohighlight\" id=\"equation-eq-simpel-lineaer-regression-fx\">\n\\[    f(x) = \\beta_0 + \\beta_1 x,\\]</div>", "a[href=\"#mindste-kvadraters-metode\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.2.1. </span>Mindste kvadraters metode<a class=\"headerlink\" href=\"#mindste-kvadraters-metode\" title=\"Permalink til denne overskrift\">#</a></h2><p>Mindste kvadraters metode handler om at finde den linje, der passer bedst til vores datapunkter, ved at minimere summen af de kvadrerede lodrette afstande mellem linjen og datapunkterne.</p><p>Lad os betragte datas\u00e6ttet</p>"}
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
