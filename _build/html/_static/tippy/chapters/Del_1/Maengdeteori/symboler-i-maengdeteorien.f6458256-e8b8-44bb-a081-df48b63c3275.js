selector_to_html = {"a[href=\"#element-i-in\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.1.2. </span>Element i <span class=\"math notranslate nohighlight\">\\(\\in\\)</span><a class=\"headerlink\" href=\"#element-i-in\" title=\"Permalink til denne overskrift\">#</a></h2><p>Du har nu m\u00f8dt begrebet element. Men hvis du fortsat er i tvivl, s\u00e5 bruger vi ordet element, om objekterne i m\u00e6ngden.</p><p>Vi har ogs\u00e5 et symbol for at sige om et element er i m\u00e6ngden. Her bruger vi <span class=\"math notranslate nohighlight\">\\(\\in\\)</span>, som betyder \u00bbelement i\u00ab. Vi bruger det p\u00e5 f\u00f8lgende m\u00e5de:</p>", "a[href=\"#maengden\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.1.1. </span>M\u00e6ngden <span class=\"math notranslate nohighlight\">\\(\\{\\ \\}\\)</span><a class=\"headerlink\" href=\"#maengden\" title=\"Permalink til denne overskrift\">#</a></h2><p>N\u00e5r vi opskriver en m\u00e6ngde, s\u00e5 omklamre vi den med tuborg-parenteser { } (eller curly brackets, som de hedder p\u00e5 engelsk).</p><p>F\u00f8r n\u00e6vnte vi nogle leget\u00f8jselementer, nemlig LEGO, Playmobil, Pok\u00e9mon og Schleich. Lad os for nemhedensskyld kalde leget\u00f8jsm\u00e6ngden for <span class=\"math notranslate nohighlight\">\\(L\\)</span>, s\u00e5 kan vi skrive m\u00e6ngden som</p>", "a[href=\"#elementaere-maengdesymboler\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.1. </span>Element\u00e6re m\u00e6ngdesymboler<a class=\"headerlink\" href=\"#elementaere-maengdesymboler\" title=\"Permalink til denne overskrift\">#</a></h1><p>Vi skal nu til at l\u00e6re de symboler, som vi bruger i m\u00e6ngdeteorien, at kende. Du vil komme til at m\u00f8de dem i senere kapitler.</p>", "a[href=\"#delmaengde-af-subseteq\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.1.3. </span>Delm\u00e6ngde af <span class=\"math notranslate nohighlight\">\\(\\subseteq\\)</span><a class=\"headerlink\" href=\"#delmaengde-af-subseteq\" title=\"Permalink til denne overskrift\">#</a></h2><p>Har man to eller flere m\u00e6ngder, der har elementer tilf\u00e6lles, s\u00e5 kan der v\u00e6re tale om en delm\u00e6ngde. Lad os sige, at vi har to personer, der hedder Bo og Lis, og deres leget\u00f8jsm\u00e6ngder lyder s\u00e5ledes:</p>"}
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
