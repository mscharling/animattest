selector_to_html = {"a[href=\"#infinitesimaler\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">19.2. </span>Infinitesimaler<a class=\"headerlink\" href=\"#infinitesimaler\" title=\"Permalink til denne overskrift\">#</a></h1><p>Differentialregningen er en del af infinitesimalregningen og derfor s\u00e5 kan vi ikke g\u00e5 udenom infinitesimalbegrebet. Og som du nok har g\u00e6ttet, s\u00e5 har dette begreb ogs\u00e5 sin relation til uendelighedsbegrebet. Infinitesimal er begrebet for noget, der er uendeligt sm\u00e5t. Infinitesimaler er s\u00e5 sm\u00e5 v\u00e6rdier, at man ikke umiddelbart kan m\u00e5le v\u00e6rdien - p\u00e5 samme m\u00e5de, som man ikke kan m\u00e5le v\u00e6rdien af uendelig. Derfor er infinitesimaler ogs\u00e5 blot et begreb. Id\u00e9en er, at infinitesimalv\u00e6rdien er t\u00e6ttere p\u00e5 0 end ethvert reelt tal, men det er ikke 0.</p><p>Den mest intuitive m\u00e5de, at forst\u00e5 infinitesimalv\u00e6rdien p\u00e5, er ved at t\u00e6nke p\u00e5 forskellen mellem <span class=\"math notranslate nohighlight\">\\(1\\)</span> og\n<span class=\"math notranslate nohighlight\">\\(0{,}999...\\)</span>, alts\u00e5</p>"}
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
