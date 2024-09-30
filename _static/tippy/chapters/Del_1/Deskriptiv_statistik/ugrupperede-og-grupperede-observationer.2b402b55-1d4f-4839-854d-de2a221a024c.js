selector_to_html = {"a[href=\"grundlaeggende-begreber-deskriptiv-statistik.html#grundlaeggendebegreber\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.1. </span>Grundl\u00e6ggende begreber<a class=\"headerlink\" href=\"#grundlaeggende-begreber\" title=\"Permalink til denne overskrift\">#</a></h1><p>N\u00e5r du arbejder med statistik, s\u00e5 er der en masse begreber, du skal have styr p\u00e5. De er vigtige for at kunne formidle, hvad det er for noget statistik, som man laver og arbejder med.</p>", "a[href=\"#ugrupperede-og-grupperede-observationer\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12.2. </span>Ugrupperede og grupperede observationer<a class=\"headerlink\" href=\"#ugrupperede-og-grupperede-observationer\" title=\"Permalink til denne overskrift\">#</a></h1><p>I sidste kapitel introducerede vi begreberne <em>hyppighed</em>, <em>frekvens</em>, <em>kumuleret hyppighed</em> og <em>kumuleret frekvens</em> for ugrupperede observationer. N\u00e5r vi indsamler data, er det som udgangspunkt r\u00e5 observationer, der ikke er grupperede. Hvis vi samler nogle af vores observationer i grupper, s\u00e5 har vi med <em>grupperede observationer</em> at g\u00f8re. Det er altid en vurderingssag og man b\u00f8r n\u00f8je t\u00e6nke over, hvordan man grupperer sin data.</p><p>Vi vil kun fokusere p\u00e5 gruppering af <em>numeriske observationer</em>, alts\u00e5 n\u00e5r datas\u00e6ttet udelukkende best\u00e5r af tal. Det betyder nemlig, at hvis vi grupperer s\u00e5danne observationer, s\u00e5 vil vi inddele dem i intervaller.</p>"}
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
