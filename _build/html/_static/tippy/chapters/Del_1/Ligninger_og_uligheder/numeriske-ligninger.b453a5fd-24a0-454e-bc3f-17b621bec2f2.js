selector_to_html = {"a[href=\"#opgaver\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3.8.1. </span>Opgaver<a class=\"headerlink\" href=\"#opgaver\" title=\"Permalink til denne overskrift\">#</a></h2>", "a[href=\"#numeriskvaerdi\"]": "<div class=\"proof definition admonition\" id=\"numeriskvaerdi\">\n<p class=\"admonition-title\"><span class=\"caption-number\">Definition 3.1 </span> (Numerisk v\u00e6rdi)</p>\n<section class=\"definition-content\" id=\"proof-content\">\n<p>Lad <span class=\"math notranslate nohighlight\">\\(a\\)</span> v\u00e6re et vilk\u00e5rligt tal. Da er</p>\n<div class=\"math notranslate nohighlight\">\n\\[\\begin{split}    |a| =   \\begin{cases}\n            a, &amp;\\text{n\u00e5r}\\ a\\geq 0 \\\\\n            -a, &amp;\\text{n\u00e5r}\\ a&lt;0\n            \\end{cases}. \\end{split}\\]</div>\n<p>den <em>numeriske v\u00e6rdi</em> at tallet <span class=\"math notranslate nohighlight\">\\(a\\)</span>.</p>\n</section>\n</div>", "a[href=\"#numeriske-ligninger\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3.8. </span>Numeriske ligninger<a class=\"headerlink\" href=\"#numeriske-ligninger\" title=\"Permalink til denne overskrift\">#</a></h1><p>Inden du kan komme i gang med at arbejde med numeriske ligninger, skal du stifte bekendtskab med begrebet <em>numerisk v\u00e6rdi</em>. Hvis du husker tilbage til vores snak om tallenes udvikling fra <a class=\"reference internal\" href=\"../Maengdeteori/talmaengder.html#talmaengder\"><span class=\"std std-numref\">Kapitel 2.2</span></a>, s\u00e5 var tallet <span class=\"math notranslate nohighlight\">\\(0\\)</span> kerneelementet for udvidelsen af tallinjen med de negative tal. <span class=\"math notranslate nohighlight\">\\(0\\)</span> skiller de positive og negative tal fra hinanden og vi definerer den numeriske v\u00e6rdi af et tal, som v\u00e6rende afstanden fra <span class=\"math notranslate nohighlight\">\\(0\\)</span> ud til tallet. Formelt skriver det som</p>", "a[href=\"uligheder.html#uligheder\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3.7. </span>Uligheder<a class=\"headerlink\" href=\"#uligheder\" title=\"Permalink til denne overskrift\">#</a></h1><p>Vi har indtil videre kun arbejdet med ligninger, hvor vi har et lighedstegn mellem de to udtryk, som vi \u00f8nsker, der skal v\u00e6re lig hinanden. Men i stedet med et lighedstegn, s\u00e5 kan vi erstatte det med et ulighedstegn - og s\u00e5 er det en ulighed, som vi skal l\u00f8se. Vi har f\u00f8lgende uligheder, som vi skal have styr p\u00e5:</p>", "a[href=\"#numeriskeksempel2\"]": "<div class=\"proof eksempel admonition\" id=\"numeriskeksempel2\">\n<p class=\"admonition-title\"><span class=\"caption-number\">Eksempel 3.15 </span></p>\n<section class=\"eksempel-content\" id=\"proof-content\">\n<p>Lad os l\u00f8se den numeriske ligning</p>\n<div class=\"math notranslate nohighlight\">\n\\[    |6-4x| = |5x-3|.\\]</div>\n<p>For at komme videre betragter vi de numeriske v\u00e6rdier af de to udtryk p\u00e5 begge sider af lighedstegnet. P\u00e5 venstresiden har vi</p>\n<div class=\"math notranslate nohighlight\">\n\\[\\begin{split}    |6-4x| =\n            \\begin{cases}\n            6-4x, &amp;\\text{n\u00e5r}\\ 6-4x\\geq 0 \\\\\n            -(6-4x), &amp;\\text{n\u00e5r}\\ 6-4x &lt; 0\n            \\end{cases}.\n            \n\\end{split}\\]</div>\n<p>Vi kan dog omskrive ulighederne. Vi kan skrive <span class=\"math notranslate nohighlight\">\\(6-4x\\geq 0\\)</span> som <span class=\"math notranslate nohighlight\">\\(x\\leq \\frac{3}{2}\\)</span> og <span class=\"math notranslate nohighlight\">\\(6-4x&lt;0\\)</span> som <span class=\"math notranslate nohighlight\">\\(x&gt;\\frac{3}{2}\\)</span>, og derfor:</p>\n<div class=\"math notranslate nohighlight\">\n\\[\\begin{split}    |6-4x| =\n            \\begin{cases}\n            6-4x, &amp;\\text{n\u00e5r}\\ x\\leq \\frac{3}{2} \\\\\n            -(6-4x), &amp;\\text{n\u00e5r}\\ x &gt; \\frac{3}{2}\n            \\end{cases}.\n            \n\\end{split}\\]</div>\n<p>Ligeledes har vi h\u00f8jresiden af vores ligning</p>\n<div class=\"math notranslate nohighlight\">\n\\[\\begin{split}    |5x-3| =\n            \\begin{cases}\n            5x-3, &amp;\\text{n\u00e5r}\\ 5x-3\\geq 0 \\\\\n            -(5x-3), &amp;\\text{n\u00e5r}\\ 5x-3 &lt; 0\n            \\end{cases},\n            \n\\end{split}\\]</div>\n<p>hvor vi kan skrive <span class=\"math notranslate nohighlight\">\\(5x-3 \\geq 0\\)</span> som <span class=\"math notranslate nohighlight\">\\(x\\geq \\frac{3}{3}\\)</span> og <span class=\"math notranslate nohighlight\">\\(5x-3 &lt; 0\\)</span> som <span class=\"math notranslate nohighlight\">\\(x&lt;\\frac{3}{5}\\)</span>, s\u00e5</p>\n<div class=\"math notranslate nohighlight\">\n\\[\\begin{split}    |5x-3| =\n            \\begin{cases}\n            5x-3, &amp;\\text{n\u00e5r}\\ x\\geq\\frac{3}{5} \\\\\n            -(5x-3), &amp;\\text{n\u00e5r}\\ x &lt; \\frac{3}{5}\n            \\end{cases}.\\end{split}\\]</div>\n<p>Vi har alts\u00e5 figuren:</p>\n<figure class=\"align-center\">\n<a class=\"reference internal image-reference\" href=\"../../../_images/numeriskeksempel2.png\"><img alt=\"../../../_images/numeriskeksempel2.png\" src=\"../../../_images/numeriskeksempel2.png\" style=\"width: 481.6px; height: 128.0px;\"/></a>\n</figure>\n<p>Bem\u00e6rk her, at vi f\u00e5r tre intervaller, som vi skal kigge p\u00e5. Vi har</p>\n<ul class=\"simple\">\n<li><p><span class=\"math notranslate nohighlight\">\\(x &lt; \\frac{3}{5}\\)</span></p></li>\n<li><p><span class=\"math notranslate nohighlight\">\\(x \\geq \\frac{3}{5}\\)</span> og <span class=\"math notranslate nohighlight\">\\(x \\leq \\frac{3}{2}\\)</span>, dvs. <span class=\"math notranslate nohighlight\">\\(\\frac{3}{5} \\leq x \\leq \\frac{3}{2}\\)</span></p></li>\n<li><p><span class=\"math notranslate nohighlight\">\\(x &gt; \\frac{3}{2}\\)</span></p></li>\n</ul>\n<p>Vi kan nu l\u00f8se ligningen inden for hvert interval:</p>\n<div class=\"sphinx-bs container pb-4 docutils\">\n<div class=\"row docutils\">\n<div class=\"d-flex col-lg-6 col-md-6 col-sm-6 col-xs-12 p-2 docutils\">\n<div class=\"card w-100 shadow docutils\">\n<div class=\"card-body docutils\">\n<p class=\"card-text\"><strong>Interval:</strong> <span class=\"math notranslate nohighlight\">\\(x &lt; \\frac{3}{5}\\)</span></p>\n<div class=\"math notranslate nohighlight\">\n\\[\\begin{split}\n\\begin{align*}\n&amp;                   &amp;           6-4x &amp;= -(5x-3) \\\\\n&amp;\\Leftrightarrow    &amp;           6-4x &amp;= -5x+3 \\\\\n&amp;\\Leftrightarrow    &amp;           -4x+5x &amp;= 3 - 6 \\\\\n&amp;\\Leftrightarrow    &amp;           x &amp;= -3 \n\\end{align*}\n\\end{split}\\]</div>\n<p class=\"card-text\">Vi kan se, at l\u00f8sningen <span class=\"math notranslate nohighlight\">\\(x=-3\\)</span> ligger i intervallet <span class=\"math notranslate nohighlight\">\\(x &lt; \\frac{3}{5}\\)</span> og dermed accepteres denne l\u00f8sning.</p>\n</div>\n</div>\n</div>\n<div class=\"d-flex col-lg-6 col-md-6 col-sm-6 col-xs-12 p-2 docutils\">\n<div class=\"card w-100 shadow docutils\">\n<div class=\"card-body docutils\">\n<p class=\"card-text\"><strong>Interval:</strong> <span class=\"math notranslate nohighlight\">\\(\\frac{3}{5} \\leq x \\leq \\frac{3}{2}\\)</span></p>\n<div class=\"math notranslate nohighlight\">\n\\[\\begin{split}\n\\begin{align*}\n&amp;                   &amp;           6-4x &amp;= 5x-3 \\\\\n&amp;\\Leftrightarrow    &amp;           6+3 &amp;= 5x+4x \\\\\n&amp;\\Leftrightarrow    &amp;           9 &amp;= 9x \\\\\n&amp;\\Leftrightarrow    &amp;           x &amp;= 1 \n\\end{align*}\n\\end{split}\\]</div>\n<p class=\"card-text\">Vi kan se, at l\u00f8sningen <span class=\"math notranslate nohighlight\">\\(x=1\\)</span> ligger i intervallet <span class=\"math notranslate nohighlight\">\\(\\frac{3}{5} \\leq x \\leq \\frac{3}{2}\\)</span> og dermed accepteres denne l\u00f8sning.</p>\n</div>\n</div>\n</div>\n<div class=\"d-flex col-lg-6 col-md-6 col-sm-6 col-xs-12 p-2 docutils\">\n<div class=\"card w-100 shadow docutils\">\n<div class=\"card-body docutils\">\n<p class=\"card-text\"><strong>Interval:</strong> <span class=\"math notranslate nohighlight\">\\(x &gt; \\frac{3}{2}\\)</span></p>\n<div class=\"math notranslate nohighlight\">\n\\[\\begin{split}\n\\begin{align*}\n&amp;                   &amp;           -(6-4x) &amp;= 5x-3 \\\\\n&amp;\\Leftrightarrow    &amp;           -6+4x &amp;= 5x-3 \\\\\n&amp;\\Leftrightarrow    &amp;           -6+3 &amp;= 5x-4x \\\\\n&amp;\\Leftrightarrow    &amp;           x &amp;= -3 \n\\end{align*}\n\\end{split}\\]</div>\n<p class=\"card-text\">Vi kan se, at l\u00f8sningen <span class=\"math notranslate nohighlight\">\\(x=-3\\)</span> ikke ligger i intervallet <span class=\"math notranslate nohighlight\">\\(x &gt; \\frac{3}{2}\\)</span> og dermed accepteres denne l\u00f8sning ikke.</p>\n</div>\n</div>\n</div>\n</div>\n</div>\n<p>Vi f\u00e5r dermed, at l\u00f8sningerne til vores numeriske ligning er <span class=\"math notranslate nohighlight\">\\(x=1\\)</span> <span class=\"math notranslate nohighlight\">\\(\\vee\\)</span> <span class=\"math notranslate nohighlight\">\\(x=-3\\)</span>.</p>\n</section>\n</div>", "a[href=\"../Maengdeteori/talmaengder.html#talmaengder\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.2. </span>Talm\u00e6ngder<a class=\"headerlink\" href=\"#talmaengder\" title=\"Permalink til denne overskrift\">#</a></h1><p>I Kapitel 1 l\u00e6rte vi en masse om tal og approksimationer. Men snakken er ikke f\u00e6rdig endnu. I m\u00e6ngdeteorien inddeler vi tallene i det, som vi kalder <em>talm\u00e6ngder</em>. Inddelingen af tal skyldes b\u00e5de talhistorie, men ogs\u00e5 f\u00e6lles egenskaber ved tallene.</p><p>Inden vi g\u00e5r mere teoretisk til v\u00e6rks, s\u00e5 gennemg\u00e5r vi en historie, som kunne have v\u00e6ret motivation til udviklingen af disse inddelinger.</p>"}
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