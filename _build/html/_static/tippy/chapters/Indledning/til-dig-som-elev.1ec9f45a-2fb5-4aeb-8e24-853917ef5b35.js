selector_to_html = {"a[href=\"#til-dig-som-elev\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Til dig som elev<a class=\"headerlink\" href=\"#til-dig-som-elev\" title=\"Permalink til denne overskrift\">#</a></h1><p>Du skal nu i gang med matematik p\u00e5 gymnasieniveau. Du vil nok lynhurtigt m\u00e6rke et spring i niveau fra folkeskole til uanset, om du skal have Matematik C, B eller A. Men det er okay, for matematik p\u00e5 gymnasiet er ogs\u00e5 helt anderledes. Der er meget mere l\u00e6sning og bevisf\u00f8ring.</p><p>Du skal til at \u00bbl\u00e6se\u00ab matematik, i stedet for at \u00bbhave\u00ab matematik. Det er derfor lidt mere ligesom at skulle l\u00e6re et nyt fremmedsprog. Du vil komme til at skulle bruge et helt nyt sprog for at formidle matematikken og ligeledes l\u00e6se den. Du kan derfor ikke forvente, n\u00e5r du l\u00e6ser et afsnit f\u00f8rste gang, at du vil forst\u00e5 det hele. Det er en del af charmen. Det er derfor en god id\u00e9, at du s\u00e6tter dig godt ind i de formuleringer og de gloser, der er benyttet i bogen her. Det kan hj\u00e6lpe dig rigtig meget med at udvide dit matematiske sprog. Mange glemmer nemlig, at matematikken ogs\u00e5 ligger i sproget. Du har m\u00e5ske f\u00e5et at vide: \u00bbPr\u00f8v at l\u00e6se opgaven h\u00f8jt for dig selv\u00ab eller \u00bbpr\u00f8v at l\u00e6s det igen\u00ab. Det er netop for at give dig en id\u00e9 om, at sproget kan hj\u00e6lpe din matematiske forst\u00e5else p\u00e5 vej.</p>"}
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
