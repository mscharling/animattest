selector_to_html = {"a[href=\"grundlaeggende-begreber.html#equation-apriorissh\"]": "<div class=\"math notranslate nohighlight\" id=\"equation-apriorissh\">\n\\[    \\text{sandsynlighed} = \\frac{\\text{antal gunstige udfald}}{\\text{antal mulige udfald}}.\\]</div>", "a[href=\"#opgaver\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">13.2.1. </span>Opgaver<a class=\"headerlink\" href=\"#opgaver\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#endeligt-sandsynlighedsrum\"]": "<div class=\"proof definition admonition\" id=\"endeligt-sandsynlighedsrum\">\n<p class=\"admonition-title\"><span class=\"caption-number\">Definition 13.1 </span></p>\n<section class=\"definition-content\" id=\"proof-content\">\n<p>Lad <span class=\"math notranslate nohighlight\">\\(U=\\{u_1,u_2,\\dots,u_n\\}\\)</span> v\u00e6re udfaldsrummet for et eksperiment, og <span class=\"math notranslate nohighlight\">\\(p_1,p_2\\dots,p_n\\)</span> v\u00e6re de tilh\u00f8rende sandsynligheder,</p>\n<div class=\"math notranslate nohighlight\">\n\\[    \\mathbb{P}(u_1)=p_1,\\ \\mathbb{P}(u_2)=p_2,\\ \\dots,\\ \\mathbb{P}(u_n)=p_n,\\]</div>\n<p>s\u00e5dan at</p>\n<ol class=\"arabic simple\">\n<li><p>sandsynlighederne <span class=\"math notranslate nohighlight\">\\(p_1,p_2,\\dots,p_n\\in[0,1]\\)</span>, og</p></li>\n<li><p>sandsynlighederne <span class=\"math notranslate nohighlight\">\\(p_1+p_2+\\cdots+p_n = 1\\)</span>.</p></li>\n</ol>\n<p>Da kaldes <span class=\"math notranslate nohighlight\">\\((U,\\mathbb{P})\\)</span> et <em>endeligt sandsynlighedsrum</em>.</p>\n</section>\n</div>", "a[href=\"#sandsynlighedsrum\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">13.2. </span>Sandsynlighedsrum<a class=\"headerlink\" href=\"#sandsynlighedsrum\" title=\"Permalink til denne overskrift\">#</a></h1><p>Et sandsynlighedsrum er en kompliceret matematisk konstruktion, der formaliserer eksperimentet. I m\u00e5lteorien best\u00e5r et matematisk rum af tre elementer - og et sandsynlighedsrum best\u00e5r af f\u00f8lgende:</p>"}
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
