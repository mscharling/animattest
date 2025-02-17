selector_to_html = {"a[href=\"#histogram\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.4.1. </span>Histogram<a class=\"headerlink\" href=\"#histogram\" title=\"Permalink til denne overskrift\">#</a></h2><p>Histrogrammer bruges til at vise, hvordan vores data er fordelt. Vi laver et histogram ud fra vores hyppighedstabel. Ud af <span class=\"math notranslate nohighlight\">\\(x\\)</span>-aksen har vi vores observationer og op af <span class=\"math notranslate nohighlight\">\\(y\\)</span>-aksen kan vi enten have hyppigheden eller frekvensen.</p>", "a[href=\"#deskriptive-plots\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.4. </span>Deskriptive plots<a class=\"headerlink\" href=\"#deskriptive-plots\" title=\"Permalink til denne overskrift\">#</a></h1><p>Mange gange kan det v\u00e6re mere overskueligt at opstille plots for vores datas\u00e6t og bruge dem til at sige noget omkring vores observationer. Vi vil igen introducere de forskellige plots for vores ugrupperet observationer og senere se, hvordan nogen af plotsne ser ud for grupperet observationer.</p>"}
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
