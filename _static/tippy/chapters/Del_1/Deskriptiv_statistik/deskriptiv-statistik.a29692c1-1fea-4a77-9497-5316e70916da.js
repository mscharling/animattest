selector_to_html = {"a[href=\"#deskriptiv-statistik\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">12. </span>Deskriptiv statistik<a class=\"headerlink\" href=\"#deskriptiv-statistik\" title=\"Permalink til denne overskrift\">#</a></h1><p>Har du indsamlet noget data og \u00f8nsker at sige noget ud fra det, s\u00e5 kommer du ikke uden om statistikken. Vi vil i dette kapitel fokusere p\u00e5 den deskriptive del af statistikken, hvilket er den, som du bruger til at beskrive data.</p><p>Lad os sige, at du har indsamlet data om h\u00f8jden p\u00e5 din studiegruppe, s\u00e5 kan det v\u00e6re relevant at sige noget generelt om datas\u00e6ttet. M\u00e5ske beh\u00f8ver du ikke statistik til lige netop det datas\u00e6t, men hvis det nu var h\u00f8jden af alle elever p\u00e5 hele din skole, s\u00e5 bliver alle tallene sv\u00e6re at forholde sig til p\u00e5 \u00e9n gang. Derfor er det godt at have en v\u00e6rkt\u00f8js\u00e6ske med forskellige m\u00e5l, som du kan bruge til at sige noget ud fra dit datas\u00e6t. I den har du for eksempel \u00bbgennemsnit\u00ab. Den kan du sikkert huske fra folkeskolen. Det er muligvis en af de mest brugte deskriptorer ude i den virkelige verden. Men, der findes selvf\u00f8lgelig mange flere v\u00e6rkt\u00f8jer i den kasse.</p>"}
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
