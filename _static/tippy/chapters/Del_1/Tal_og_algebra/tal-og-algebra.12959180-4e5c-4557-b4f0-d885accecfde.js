selector_to_html = {"a[href=\"#tal-og-algebra\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1. </span>Tal og algebra<a class=\"headerlink\" href=\"#tal-og-algebra\" title=\"Permalink til denne overskrift\">#</a></h1><p>Det kan virke underligt at skulle l\u00e6re om tal i gymnasiet, n\u00e5r man har brugt mindst ni \u00e5r i folkeskolen p\u00e5 at l\u00e6re at h\u00e5ndtere tal. Men det betyder jo ikke, at du rent faktisk har l\u00e6rt den bagvedliggende talteori, der ligger til grund for de talsystemer, som vi bruger i dag.</p><p>Talteori er teorien om tal og vi kommer ganske kort til at snuse til, hvad den del af matematikken g\u00e5r ud p\u00e5 her. Vi skal f.eks. l\u00e6re forskellen p\u00e5 tallet 3,14 og <span class=\"math notranslate nohighlight\">\\(\\pi\\)</span>, men ogs\u00e5 hvorfor det er vigtigt, at vi har et tal, som repr\u00e6senterer st\u00f8rrelsen \u201dingen ting\u201d.</p>"}
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
