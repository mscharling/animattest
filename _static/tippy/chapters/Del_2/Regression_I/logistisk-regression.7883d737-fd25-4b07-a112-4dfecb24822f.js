selector_to_html = {"a[href=\"#logistisk-regression\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">25.8. </span>Logistisk regression<a class=\"headerlink\" href=\"#logistisk-regression\" title=\"Permalink til denne overskrift\">#</a></h1><p>I dette afsnit vil vi betragte en slags eksponentiel model med en \u00f8vre gr\u00e6nse. En normal eksponentiel regression antager, at din responsvariabel bliver ved med at udvikle sig eksponentielt. Det vil nok i en r\u00e6kke tilf\u00e6lde ikke v\u00e6re korrekt. Lad os tage udgangspunkt i et eksempel.</p><p>I 2020 kom COVID-19 til Danmark og smitten med corona-virussen spredte sig hurtigt. For at l\u00e6gge en d\u00e6mper p\u00e5 smitten, lukkede man landet ned og holdte folket hjemme i videst muligt omfang. Det hele handlede om at f\u00e5 det danske sundhedsv\u00e6sen til at kunne f\u00f8lge med - p\u00e5 samme tid med, at vi passede p\u00e5 de udsatte borgere. Under tiden kunne vaccinen f\u00e6rdigudviklet. Den m\u00e5de, som man s\u00e5 smitten sprede sig p\u00e5, fulgte eksponentiel v\u00e6kst. Men, ville det give mening at modellere det som eksponentiel v\u00e6kst? Nej, ikke rigtigt. Vi er jo ikke en ubegr\u00e6nset menneskeskare, s\u00e5 p\u00e5 et tidspunkt vil der ikke v\u00e6re flere at kunne smitte. Der er jo en naturligt \u00f8vre gr\u00e6nse p\u00e5 smitten, nemlig antallet af indbyggere i Danmark. Derfor giver det mere mening at kigge p\u00e5 en logistisk v\u00e6kst, der ligner eksponentiel v\u00e6kst til et punkt, hvorefter den begynder at flade ud - meget som vi ville forvente en kurve over antal smittede ville se ud, hvis ikke regeringen kom med tiltag for at d\u00e6mpe smitten.</p>"}
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
