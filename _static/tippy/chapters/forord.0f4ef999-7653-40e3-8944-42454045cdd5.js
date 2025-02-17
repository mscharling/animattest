selector_to_html = {"a[href=\"#forord\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Forord<a class=\"headerlink\" href=\"#forord\" title=\"Permalink til denne overskrift\">#</a></h1><p>Rejs ind i matematikkens fascinerende verden p\u00e5 en ny og innovativ m\u00e5de med AniMAT. Denne bog er designet til at bringe matematik til live, og at g\u00f8re den tilg\u00e6ngelig og engagerende for elever p\u00e5 alle gymnasielle niveauer og uddannelsesretninger, herunder STX, HHX og HTX.</p><p>AniMAT st\u00e5r for Animeret Matematik, og det er netop, hvad du vil opleve p\u00e5 siderne i denne bog. Vi bl\u00e6ser liv i matematikken med levende animationer, der erstatter stilst\u00e5ende billeder, og giver en dybere og mere interaktiv forst\u00e5else af de matematiske koncepter. Animationerne er designet til at illustrere de matematiske id\u00e9er p\u00e5 en m\u00e5de, der taler direkte til den visuelle og intuitive forst\u00e5else.</p>"}
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
