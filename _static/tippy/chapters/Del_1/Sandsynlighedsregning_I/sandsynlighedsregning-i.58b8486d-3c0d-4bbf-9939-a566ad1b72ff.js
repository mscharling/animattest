selector_to_html = {"a[href=\"#sandsynlighedsregning-i\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">13. </span>Sandsynlighedsregning I<a class=\"headerlink\" href=\"#sandsynlighedsregning-i\" title=\"Permalink til denne overskrift\">#</a></h1><p>Sandsynlighedsregning er en fascinerende del af matematikken, der spiller en rolle i n\u00e6sten af, hvad vi g\u00f8r i hverdagen, selvom vi ikke altid l\u00e6gger m\u00e6rke til det. Denne gren af matematikken hj\u00e6lper os med at forst\u00e5 og kvantificere usikkerhed og tilf\u00e6ldighed, hvilket er essentielt i mange situationer. Forestil dig disse scenarier:</p>"}
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
