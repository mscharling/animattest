selector_to_html = {"a[href=\"#grundmaengder\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3.2. </span>Grundm\u00e6ngder<a class=\"headerlink\" href=\"#grundmaengder\" title=\"Permalink til denne overskrift\">#</a></h1><p>Noget nyt, som du sikkert ikke har v\u00e6ret vant til at t\u00e6nke over, er hvilke v\u00e6rdier for den ubekendte variable, for eksempel <span class=\"math notranslate nohighlight\">\\(x\\)</span>, n\u00e5r vi arbejder med ligninger. De v\u00e6rdier, som vi m\u00e5 arbejde med, kalder vi ligningens <em>grundm\u00e6ngde</em> og betegnes <span class=\"math notranslate nohighlight\">\\(G\\)</span>. Den skal bestemmes inden, at du g\u00e5r i kast med at l\u00f8se ligningen.</p><p>Forestil dig, at du ikke ved, hvordan du vil l\u00f8se en ligning, men bare pr\u00f8ve at inds\u00e6tte forskellige v\u00e6rdier for <span class=\"math notranslate nohighlight\">\\(x\\)</span> ind i en ligning indtil, at du finder den rigtige v\u00e6rdi. Kigger vi s\u00e5 p\u00e5 ligningen</p>", "a[href=\"#opgaver\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3.2.1. </span>Opgaver<a class=\"headerlink\" href=\"#opgaver\" title=\"Permalink til denne overskrift\">#</a></h2>"}
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
