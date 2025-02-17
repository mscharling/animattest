selector_to_html = {"a[href=\"#equation-eq-forklaringsgrad\"]": "<div class=\"math notranslate nohighlight\" id=\"equation-eq-forklaringsgrad\">\n\\[    R^2 = 1 - \\frac{\\text{RSS}}{\\text{TSS}}\\]</div>", "a[href=\"#forklaringsgrad-i\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.4. </span>Forklaringsgrad I<a class=\"headerlink\" href=\"#forklaringsgrad-i\" title=\"Permalink til denne overskrift\">#</a></h1><p>Skal vi evaluere en model, kan vi bruge <em>forklaringsgraden</em> eller <em>R-i-anden v\u00e6rdien</em>, <span class=\"math notranslate nohighlight\">\\(R^2\\)</span>. Nogle steder vil du ogs\u00e5 m\u00f8de denne st\u00f8rrelse under navnet <em>determinationskoefficienten</em>.</p><p>Forklaringsgraden er et m\u00e5l for modellens GOF (Goodness Of Fit). Der er flere m\u00e5der at definere denne st\u00f8rrelse p\u00e5. Den m\u00e5de, som vi vil besk\u00e6ftige os med, relaterer summen af de kvadrerede residualer, <span class=\"math notranslate nohighlight\">\\(\\text{RSS}\\)</span>, og den totale kvadratsum, <span class=\"math notranslate nohighlight\">\\(\\text{TSS}\\)</span> (Total Sum of Squares), med hinanden. Den totale kvadratsum er defineret ved</p>", "a[href=\"#equation-eq-total-sum-of-squares\"]": "<div class=\"math notranslate nohighlight\" id=\"equation-eq-total-sum-of-squares\">\n\\[    \\text{TSS} = (y_1 - \\bar{y})^2 + (y_2 - \\bar{y})^2 + \\cdots + (y_n - \\bar{y})^2 = \\sum_{i=1}^n (y_i - \\bar{y})^2,\\]</div>"}
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
