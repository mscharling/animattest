selector_to_html = {"a[href=\"#differentialligninger\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">32. </span>Differentialligninger<a class=\"headerlink\" href=\"#differentialligninger\" title=\"Permalink til denne overskrift\">#</a></h1><p>Matematik er meget mere end blot tal og ligninger. Det handler om at beskrive, hvordan ting i vores verden \u00e6ndrer sig - over tid, i rummet eller p\u00e5 anden vis. For eksempel, hvordan bev\u00e6ger en bil sig, n\u00e5r man accelererer? Hvordan \u00e6ndrer en populations st\u00f8rrelse sig over tid? Hvordan afk\u00f8les en kop kaffe? Alle disse eksempler handler om \u00e6ndringer, og for at beskrive dem matematisk bruger vi differentialligninger.</p><p>Dette kapitel vil introducere dig til de grundl\u00e6ggende id\u00e9er bag differentialligninger. Vi vil se p\u00e5 simple eksempler, l\u00e6re metoder til at l\u00f8se dem og unders\u00f8ge, hvordan disse l\u00f8sninger kan hj\u00e6lpe os med at forst\u00e5 verden omkring os.</p>"}
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
