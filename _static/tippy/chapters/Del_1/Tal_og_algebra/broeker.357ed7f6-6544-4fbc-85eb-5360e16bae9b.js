selector_to_html = {"a[href=\"#broker\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.6. </span>Br\u00f8ker<a class=\"headerlink\" href=\"#broker\" title=\"Permalink til denne overskrift\">#</a></h1><p>Som du nok husker tilbage fra folkeskolen, s\u00e5 er br\u00f8ker en anden m\u00e5de at skrive et divisionsstykke p\u00e5. Men faktisk, s\u00e5 er selve br\u00f8ken en form for et tal. Tal, der kan skrives som en br\u00f8k, kaldes et rationale tal og det kan du l\u00e6se mere om i <a class=\"reference internal\" href=\"../Maengdeteori/maengdeteori.html#maengdeteori-i\"><span class=\"std std-numref\">Kapitel 2</span></a>. Vi kommer til at bruge begge m\u00e5der at tolke en br\u00f8k p\u00e5. Som oftest vil vi skrive divisionsstykker som en br\u00f8k, og ligeledes vil vi nogen gange skrive visse decimaltal som br\u00f8ker.</p>", "a[href=\"#opgaver\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.6.1. </span>Opgaver<a class=\"headerlink\" href=\"#opgaver\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#broekhard\"]": "<div class=\"proof eksempel admonition\" id=\"broekhard\">\n<p class=\"admonition-title\"><span class=\"caption-number\">Eksempel 1.14 </span></p>\n<section class=\"eksempel-content\" id=\"proof-content\">\n<p>Lad os reducere f\u00f8lgende udtryk:</p>\n<div class=\"math notranslate nohighlight\">\n\\[    \\frac{2a+1}{b}+\\frac{1}{2b}-\\frac{b-4ab}{2b^2} - \\frac{2ab}{2b^2}\\]</div>\n<p>Ved f\u00f8rste \u00f8jekast, s\u00e5 ser dette jo totalt uoverskueligt ud, men vi skal bare g\u00f8re \u00e9n ting ad gangen. Vi kan starte med at se, at vi kan bruge regneregel <span class=\"math notranslate nohighlight\">\\(\\eqref{b1}\\)</span> p\u00e5</p>\n<div class=\"math notranslate nohighlight\">\n\\[    -\\frac{b-4ab}{2b^2} - \\frac{2ab}{2b^2}\\]</div>\n<p>og reducere:</p>\n<div class=\"math notranslate nohighlight\">\n\\[    -\\frac{b-4ab}{2b^2} - \\frac{2ab}{2b^2} \\stackrel{\\text{$\\eqref{b1}$}}{=} \\frac{-(b-4ab)-2ab}{2b^2} = \\frac{-b+4ab-2ab}{2b^2} = \\frac{-b-2ab}{2b^2} = \\frac{-(b+2ab)}{2b^2}.\\]</div>\n<p>Her brugte vi ogs\u00e5 vores viden omkring minusparenteser. Vi samler nu det oprindelige udtryk til:</p>\n<div class=\"math notranslate nohighlight\">\n\\[    \\frac{2a+1}{b} + \\frac{1}{2b} - \\frac{b+2ab}{2b^2}\\]</div>\n<p>Lad os nu kigge p\u00e5:</p>\n<div class=\"math notranslate nohighlight\">\n\\[    \\frac{2a+1}{b} + \\frac{1}{2b}\\]</div>\n<p>og indse, at vi f\u00e5r en f\u00e6llesn\u00e6vner <span class=\"math notranslate nohighlight\">\\(2b\\)</span>, hvis vi forl\u00e6nger f\u00f8rste led med <span class=\"math notranslate nohighlight\">\\(2\\)</span>:</p>\n<div class=\"math notranslate nohighlight\">\n\\[    \\frac{2a+1}{b} - \\frac{1}{2b} \\stackrel{\\text{$\\eqref{b0}$}}{=} \\frac{2(2a+1)}{2b} + \\frac{1}{2b}  \\stackrel{\\text{$\\eqref{b1}$}}{=} \\frac{2(2a+1)+1}{2b} = \\frac{4a+2+1}{2b} = \\frac{4a+3}{2b}\\]</div>\n<p>Vi inds\u00e6tter nu ogs\u00e5 dette i det gamle udtryk:</p>\n<div class=\"math notranslate nohighlight\">\n\\[    \\frac{4a+3}{2b}-\\frac{b+2ab}{2b^2}\\]</div>\n<p>Igen kan vi indse, at vi f\u00e5r en f\u00e6llesn\u00e6vner <span class=\"math notranslate nohighlight\">\\(2b^2\\)</span>, hvis vi forl\u00e6nger f\u00f8rste led med <span class=\"math notranslate nohighlight\">\\(b\\)</span>:</p>\n<div class=\"math notranslate nohighlight\">\n\\[\\begin{split}\n\\begin{align*}\n    \\frac{4a+3}{2b} - \\frac{b+2ab}{2b^2} &amp;\\stackrel{\\text{$\\eqref{b0}$}}{=} \\frac{b(4a+3)}{2b\\cdot b} - \\frac{b+2ab}{2b^2} \\\\\n    &amp;\\stackrel{\\text{$\\eqref{b1}$}}{=} \\frac{b(4a+3)-(b+2ab)}{2b^2} \\\\\n    &amp;= \\frac{4ab+3b-b-2ab}{2b^2} \\\\\n    &amp;= \\frac{2ab+2b}{2b^2}\n\\end{align*}\n\\end{split}\\]</div>\n<p>Vores oprindelige udtryk er nu blevet reduceret til</p>\n<div class=\"math notranslate nohighlight\">\n\\[    \\frac{2ab+2b}{2b^2},\\]</div>\n<p>hvilket jo ser p\u00e6nt ud, men er vi f\u00e6rdige med at reducere? Nej, vi kan se, at vi kan faktorisere et <span class=\"math notranslate nohighlight\">\\(b\\)</span> ud i t\u00e6lleren, som vil g\u00e5 ud med et af de <span class=\"math notranslate nohighlight\">\\(b\\)</span>\u2019er, der er i n\u00e6vneren:</p>\n<div class=\"math notranslate nohighlight\">\n\\[    \\frac{2ab+2b}{2b^2} = \\frac{b(2a+2)}{2b^2} = \\frac{2a+2}{2b} \\]</div>\n<p><span class=\"math notranslate nohighlight\">\\(b\\)</span>\u2019et i t\u00e6lleren spiser et af <span class=\"math notranslate nohighlight\">\\(b\\)</span>\u2019erne, der er ganget p\u00e5 i n\u00e6vneren, for husk nu, at <span class=\"math notranslate nohighlight\">\\(b^2 = b\\cdot b\\)</span>. Er vi f\u00e6rdige nu? Nej, for vi kan faktisk ogs\u00e5 faktorisere et <span class=\"math notranslate nohighlight\">\\(2\\)</span>-tal ud i t\u00e6lleren:</p>\n<div class=\"math notranslate nohighlight\">\n\\[    \\frac{2a+2}{2b} = \\frac{2(a+1)}{2b} = \\frac{a+1}{b} \\]</div>\n<p>De sidste to steps kunne vi ogs\u00e5 have gjort i \u00e9t step, hvor vi faktoriserede <span class=\"math notranslate nohighlight\">\\(2b\\)</span> ud. Men, her er det gjort opdelt, s\u00e5 du v\u00e6nner dig til id\u00e9en om at faktorisere noget ud i t\u00e6lleren, s\u00e5 det g\u00e5r ud med noget fra n\u00e6vneren.</p>\n<p>Afslutningsvis kan vi konkludere, at det oprindelige udtryk kan reduceres til:</p>\n<div class=\"math notranslate nohighlight\">\n\\[    \\frac{2a+1}{b}+\\frac{1}{2b}-\\frac{b-4ab}{2b^2} - \\frac{2ab}{2b^2} = \\frac{a+1}{b} \\]</div>\n</section>\n</div>", "a[href=\"../Maengdeteori/maengdeteori.html#maengdeteori-i\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2. </span>M\u00e6ngdeteori I<a class=\"headerlink\" href=\"#maengdeteori-i\" title=\"Permalink til denne overskrift\">#</a></h1><p>N\u00e5r vi i daglig tale snakker om m\u00e6ngder, s\u00e5 forst\u00e5r vi, at vi snakker om en samling af ting, personer, m.m.</p><p>For eksempel havde du sikkert forskelligt slags leget\u00f8j, da du var mindre. M\u00e5ske havde du LEGO, Playmobil, Pok\u00e9mon og Schleich. Samler vi disse, s\u00e5 ville de passe godt under \u00bbm\u00e6ngden af leget\u00f8j\u00ab.</p>"}
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