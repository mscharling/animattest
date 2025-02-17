selector_to_html = {"a[href=\"#opgaver\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.2.3. </span>Opgaver<a class=\"headerlink\" href=\"#opgaver\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#hvilken-approksimation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.2.2. </span>Hvilken approksimation?<a class=\"headerlink\" href=\"#hvilken-approksimation\" title=\"Permalink til denne overskrift\">#</a></h2><p>Det er altid et godt sp\u00f8rgsm\u00e5l at stille sig selv i situationer, hvor det kan v\u00e6re oplagt at bruge approksimationer, om hvilken approksimation man skal bruge. Regner vi f.eks. gangestykket</p>", "a[href=\"#approksimationens-afvigelse\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.2.1. </span>Approksimationens afvigelse<a class=\"headerlink\" href=\"#approksimationens-afvigelse\" title=\"Permalink til denne overskrift\">#</a></h2><p>Bruger vi approksimationer, s\u00e5 kan det v\u00e6re en god id\u00e9 at vide, hvor meget vores approksimation afviger fra det rigtige resultat. Her snakker vi om <em>den absolutte afvigelse</em> og <em>den relative afvigelse</em>.</p><p>Den absolutte afvigelse angiver, hvor langt v\u00e6k vores approksimation ligger fra vores rigtige tal p\u00e5 tallinjen. Kigger vi p\u00e5 eksemplet fra f\u00f8r med sodavanden og tyggegummipakkerne, s\u00e5 kan vi se, at vores overslagsregning gav resultatet 40 kr., men at det rigtige resultat var 37,97 kr., hvilket giver en absolut afvigelse p\u00e5 2,03 kr.</p>", "a[href=\"#approksimationer\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.2. </span>Approksimationer<a class=\"headerlink\" href=\"#approksimationer\" title=\"Permalink til denne overskrift\">#</a></h1><p>N\u00e5r vi arbejder med tal, s\u00e5 kan det nogle gange v\u00e6re meningsfuldt at bruge approksimationer. Approksimationer, eller tiln\u00e6rmelser, danner vi, n\u00e5r vi runder tal op eller ned og alt efter, hvor meget vi afrunder jo grovere en approksimation f\u00e5r vi.</p><p>Vi bruger ofte approksimationer, n\u00e5r vi laver overslagsregning p\u00e5 en indk\u00f8bstur i supermarkedet, s\u00e5 ikke vi bliver overraskede over, hvor meget vi handler for. Det er oftest nemmere at l\u00e6gge runde tal sammen end kommatal. F.eks. hvis vi k\u00f8ber en sodavand til 19,99 kr. og to pakker tyggegummi til stykprisen 8,99 kr., s\u00e5 skal vi i alt af med</p>"}
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
