selector_to_html = {"a[href=\"#bias\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.7. </span>Bias<a class=\"headerlink\" href=\"#bias\" title=\"Permalink til denne overskrift\">#</a></h1><p>Det er altid vigtigt at t\u00e6nke n\u00f8je over, om stikpr\u00f8ven er repr\u00e6sentativ i forhold til populationen. Hvis du \u00f8nsker at sige noget om den gennemsnitlige skost\u00f8rrelse p\u00e5 din skole best\u00e5ende af piger og drenge, s\u00e5 giver det ikke mening kun at m\u00e5le skost\u00f8rrelser for din studiegruppe. For det kan v\u00e6re, at I er en gruppe best\u00e5ende kun af piger - og de har generelt mindre f\u00f8dder end drenge. Jeres bud p\u00e5 en gennemsnitlig skost\u00f8rrelse for hele skolen vil derfor v\u00e6re misvisende. Populationen best\u00e5r jo ogs\u00e5 af drenge. Jeres stikpr\u00f8ve b\u00f8r derfor ogs\u00e5 indeholde skost\u00f8rrelser for drenge.</p><p>Det er ogs\u00e5 vigtigt at t\u00e6nke over stikpr\u00f8vens st\u00f8rrelse. Vi kan som oftest ikke lave beskrivende statistik p\u00e5 et datas\u00e6t kun best\u00e5ende af tre observationer. Det er altid en vurderingssag, hvor stort et datas\u00e6t, man har brug for - men som hovedregel skal du altid have mindst fem observationer for kunne lave statistik. Igen, det er vigtigt, at du vurderer, din stikpr\u00f8ve er repr\u00e6senterer din population godt.</p>"}
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
