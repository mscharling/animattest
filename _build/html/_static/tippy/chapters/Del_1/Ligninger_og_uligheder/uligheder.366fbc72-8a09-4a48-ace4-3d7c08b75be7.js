selector_to_html = {"a[href=\"#uligheder\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3.7. </span>Uligheder<a class=\"headerlink\" href=\"#uligheder\" title=\"Permalink til denne overskrift\">#</a></h1><p>Vi har indtil videre kun arbejdet med ligninger, hvor vi har et lighedstegn mellem de to udtryk, som vi \u00f8nsker, der skal v\u00e6re lig hinanden. Men i stedet med et lighedstegn, s\u00e5 kan vi erstatte det med et ulighedstegn - og s\u00e5 er det en ulighed, som vi skal l\u00f8se. Vi har f\u00f8lgende uligheder, som vi skal have styr p\u00e5:</p>", "a[href=\"lighed-og-ligevaegt.html#lighedogligevaegt\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3.1. </span>Lighed, ligev\u00e6gtsprincip og \u00e6kvivalens<a class=\"headerlink\" href=\"#lighed-ligevaegtsprincip-og-aekvivalens\" title=\"Permalink til denne overskrift\">#</a></h1><p>Ligninger er matematiske udtryk, der indeholder et lighedstegn og en ubekendt, som er den, vi er interesseret i at bestemme. Oftest kalder vi den ubekendte for <span class=\"math notranslate nohighlight\">\\(x\\)</span>. For eksempel er</p>", "a[href=\"#losning-af-uligheder\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3.7.1. </span>L\u00f8sning af uligheder<a class=\"headerlink\" href=\"#losning-af-uligheder\" title=\"Permalink til denne overskrift\">#</a></h2><p>I <a class=\"reference internal\" href=\"lighed-og-ligevaegt.html#lighedogligevaegt\"><span class=\"std std-numref\">Kapitel 3.1</span></a> havde vi det, som vi kaldte for \u00bbelement\u00e6re operationer\u00ab, der bruges til at l\u00f8se en ligning. Regneoperationerne for l\u00f8sning af uligheder minder meget om dem for ligninger, men med sm\u00e5 afvigelser:</p>"}
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
