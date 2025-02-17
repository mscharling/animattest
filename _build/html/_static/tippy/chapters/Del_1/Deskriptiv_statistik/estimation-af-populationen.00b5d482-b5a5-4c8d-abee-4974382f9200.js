selector_to_html = {"a[href=\"#estimering-af-populationen\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.6. </span>Estimering af populationen<a class=\"headerlink\" href=\"#estimering-af-populationen\" title=\"Permalink til denne overskrift\">#</a></h1><p>Men hvorfor er det egentlig, at vi regner et gennemsnit? Oftest, n\u00e5r vi laver statistiske unders\u00f8gelser, s\u00e5 \u00f8nsker vi jo at sige noget om populationen ved hj\u00e6lp af vores stikpr\u00f8ve. Forestil dig, at populationen har det sande gennemsnit <span class=\"math notranslate nohighlight\">\\(\\mu\\)</span>, der ogs\u00e5 bare er et eller andet tal - men vi kender det ikke. Fra vores stikpr\u00f8ve kan vi finde <em>stikpr\u00f8ve</em>-gennemsnittet, som vi kaldte for <span class=\"math notranslate nohighlight\">\\(\\bar{x}\\)</span>. Vi siger, at <span class=\"math notranslate nohighlight\">\\(\\bar{x}\\)</span> er et <em>estimat</em> for det sande <em>population</em>-gennemsnit <span class=\"math notranslate nohighlight\">\\(\\mu\\)</span>. Distinktionen er vigtig, n\u00e5r du videreformidler dine unders\u00f8gelser. Vi h\u00e5ber selvf\u00f8lgelig p\u00e5, at <span class=\"math notranslate nohighlight\">\\(\\bar{x} \\approx \\mu\\)</span>, men det er ikke sikkert, at det g\u00e6lder.</p>"}
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
