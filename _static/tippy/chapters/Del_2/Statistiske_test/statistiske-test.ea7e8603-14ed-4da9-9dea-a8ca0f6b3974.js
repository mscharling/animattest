selector_to_html = {"a[href=\"#statistiske-test\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">24. </span>Statistiske test<a class=\"headerlink\" href=\"#statistiske-test\" title=\"Permalink til denne overskrift\">#</a></h1><p>Forestil dig, at du st\u00e5r med et datas\u00e6t og \u00f8nsker at komme med mere dybdeg\u00e5ende konklusioner end blot beskrivelser. I kapitlet <deskriptiv statistik=\"\"> besk\u00e6ftigede vi os med, hvordan vi kan bruge forskellige m\u00e5l til at beskrive populationen ud fra en stikpr\u00f8ve. I dette kapitel vil vi kigge p\u00e5, hvordan vi kan bruge statistikken til at tr\u00e6ffe beslutninger, en disciplin, der ogs\u00e5 kaldes statistisk inferens.</deskriptiv></p><p>Lad os sige, at du har m\u00e5linger af blodtryk fra en gruppe mennesker og \u00f8nsker at afg\u00f8re, om et nyt medikament reelt s\u00e6nker blodtrykket. Det er her, statistiske test kommer ind i billedet. Ved hj\u00e6lp af statistiske metoder kan vi afg\u00f8re, om de observerede \u00e6ndringer i dit data er tilf\u00e6ldige, eller om de faktisk afspejler en reel effekt af medicinen.</p>"}
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
