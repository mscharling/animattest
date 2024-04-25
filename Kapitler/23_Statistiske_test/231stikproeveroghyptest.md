# Stikprøver og hypotesetest

## Stikprøve
Du stødte også på begrebet "stikprøve" tilbage i {ref}`grundlaeggendebegreber`, men vi vil i dette afsnit grave lidt dybere for at udvide vores forståelse af dette begreb. 

I en verden, hvor data er overalt, er det essentielt at forstå, hvordan vi indsamler og analyserer disse informationer. Statistikken giver os værktøj til at gøre netop dette. I Danmark indsamler Danmarks Statistik omfattende data om befolkningen, alt fra fødselstal til økonomiske nøgletal, hvilket giver en unik indsigt i samfundets tilstand og udvikling. 

Stikprøver er en vigtig del af statistisk analyse, da de giver os mulighed for at drage konklusioner om en større gruppe uden at skulle undersøge alle dens medlemmer. Men, stikprøven skal være repræsentativ! Det vil sige, at en egenskab ved stikprøven afspejler den samme egenskab i hele populationen. 

Der findes mange eksempler på repræsentative stikprøver i dagligdagen. For eksempel, når du tager til lægen, så er det nok med lidt blod fra et prik i din finger til at vurdere dine infektionstal, og om du er syg. Ligeledes, når forskere undersøger vandkvaliteten i en stor sø, så er det nok at tage vandprøver fra forskellige steder i søen, i stedet for at analysere hele vandmassen. Eller, et firma, der ønsker at forstå forbrugernes præferencer, kan selvfølgelig ikke interviewe hver eneste potentielle kunde. I stedet foretager de en meningsmåling blandt en repræsentativ stikprøve af befolkningen for at få indsigt i forbrugertendenser. 

Men ikke alle stikprøver bliver skabt lige. Når vi udfører en meningsmåling, er det afgørende, at stikprøven ikke er skævt fordelt, for eksempel med hensyn til køn, alder eller geografisk placering, da det kan give et misvisende billede af den samlede populations holdninger. Derfor bruger vi forskellige metoder til at sikre, at vores stikprøver er repræsentative, herunder tilfældige, systematiske og stratificerede stikprøver. 

* Tilfældig stikprøve: Der udvælges data efter et tilfældighedsprincip. Et eksempel på dette kunne være en meningsmåling sendt ud gennem e-boks, hvor hvert CPR-nummer har lige sandsynlighed for at blive trukket.
* Systematiske stikprøver: Der udvælges data efter et fast system. Et eksempel på dette kunne være hver hundrede rejsende, der går gennem sikkerhedskontrollen i lufthavnen, trækkes til side til bagagekontrol.
* Stratificeret stikprøve: Populationen inddeles i forskellige undergrupper, kendt som strata, baseret på specifikke karakteristika, og derefter udtage stikprøver fra hver af disse grupper. Et eksempel på dette kunne være en national meningsmåling, hvor befolkningen kan inddeles i strata baseret på alder, køn, geografisk placering osv. Fra hvert stratum trækkes derefter en tilfældig stikprøve. Dette sikrer, at alle relevante undergrupper er repræsenteret i stikprøven, hvilket øger nøjagtigheden og relevansen af resultaterne, da det afspejler den samlede populations sammensætning.

## Nulhypotese

Eftersom teorien bag hypotesetest er relativt abstrakt, vil vi starte med et eksempel. 

```{prf:eksempel} Skæv mønt
:label: hypotesetest_moent

Forestil dig, at du vil teste, om en mønt er skæv eller ej. Hvis mønten er skæv, betyder det, at sandsynligheden for at få enten plat eller krone er højere end den anden. Du starter med at kaste mønten 50 gange for at se fordelingen af plat og krone. I et hypotesetest sætter du en nulhypotese op, der angives med $H_0$: 

$$

    H_0 :\ \text{Mønten er fair.}

$$

Når man arbejder med hypotesetest, så testes nulhypotesen op mod en alternativ hypotese, som kan være sand, hvis nulhypotesen forkastes. I dette tilfælde vil det være oplagt med den alternative hypotese $H_a$:

$$

    H_a :\ \text{Mønten er skæv.}

$$

Hvis antallet af kroner falder markant uden for et forventet interval, for eksempel væsentligt færre eller flere kroner end 25, afviser du nulhypotesen og accepterer den alternative hypotese. Således afgør du, baseret på dit data, om mønten sandsynligvis er skæv.

```

Nulhypotesen formuleres oftest med et udtryk omkring en parameter for populationen. Det kunne være en sandsynlighedsparameter $p$, da kan den formuleres som 

$$

    H_0:\ p=p_0.

$$

Når nulhypotesen er formuleret på den måde, så kan den alternative hypotese formuleres med enten et $\neq$, $>$ eller $<$. Med en alternativ hypotese 

$$

    H_a:\ p\neq p_0,

$$

arbejder vi med et to-sidet hypotesetest. Med en alternativ hypotese

$$

    H_a:\ p>p_0,

$$

eller omvendt, arbejder vi med et et-sidet hypotesetest. En nulhypotese kan også formuleres med $\geq$ eller $\leq$, og i disse tilfælde vil den alternative hypotese blive formuleret med $<$ eller $>$.

Vi ønsker at teste sandsynligheden for at udsagnet i nulhypotesen for at være sand for at kunne afgøre, om nulhypotesen skal accepteres eller afvises. Hvis nulhypotesen afvises, accepterer vi på samme tid den alternative hypotese. 


## Signifikansniveau

Signifikansniveauet benævnes $\alpha$ og er den sandsynlighed, der anvendes til at skelne mellem at acceptere og forkaste nulhypotesen. Inden vi går i gang med et hypotesetest, skal vi bestemme os for et signifikansniveau. Det sættes normaltvist til $0{,}05$, også skrevet som $5\ \%$. Dette niveau kalder vi for et $5\ \%$-signifikansniveau.

Foretages et hypotesetest, hvor nulhypotesen er sand, så betyder et signifikansniveau på $5\ \%$, at hvis testen foretages 100 gange, så vil man komme til fejlagtigt at forkaste nulhypotesen fem gange i gennemsnit. Så, hvis man vælger et lavere signifikansniveau, vil sandsynligheden for at man fejlagtigt forkaster en sand nulhypotese blive mindre. Det kan jo godt give anledning til, at man skal vælge et lavt signifikansniveau, men det er midlertidigt ikke tilfældet. For jo lavere et signifikansniveau, man vælger, jo sværere bliver det også at forkaste en falsk nulhypotese. Sagt med andre ord, et lavt signifikansniveau medfører også, at der er en større sandsynlighed for, at man acceptere en falsk nulhypotese. Man snakker derfor om to typer af fejl:

* Type 1-fejl: Nulhypotesen, $H_0$, forkastes, selv om den er sand. Dette giver anledning til at vælge et lavt signifikansniveau, $\alpha$.
* Type 2-fejl: Nulhypotesen, $H_0$, accepteres, selv om den er falsk. Dette giver anledning til at vælge et højere signifikansniveau, $\alpha$. 


## Kritisk mængde

Den kritiske mængde kan bestemmes, når man ved hvilket test, man ønsker at lave, samt har valgt et signifikansniveau. Den kritiske mængde er mængden af udfald, der er de mindst sandsynlige og kan bruges til at bestemme hvorledes nulhypotesen skal forkastes eller ej. Vi benævner den kritiske mængde med $K$. 

Det modsatte af den kritiske mængde er acceptmængden, der benævnes $A$. Det er altså mængden af udfald, der er de mest sandsynlige. Disse ligger oftest omkring middelværdien. 

Udfaldsrummet, $U$, for en stokastisk variabel i forbindelse med statistiske test kan altså dekomponeres i en kritisk mængde, $K$, og en acceptmængde, $A$,

$$

    U = K \cup A.

$$

```{prf:eksempel} Skæv mønt (fortsat)
:label: hypotesetest_moent_fortsat

Lad $X$ være en stokastisk variabel, der repræsenterer dit eksperiment. Hvis mønten ikke er skæv, så ved du, at sandsynligheden for at slå krone er $0{,}5$, og at dit eksperiment vil være binomialt. Du kan derfor formulere din nulhypotese som:

$$

    H_0:\ p = 0{,}5.

$$

Den alternative hypotese vil være:

$$

    H_a:\ p \neq 0{,}5.

$$

I dine 50 slag slår du krone 21 gange, men du ved, at under nulhypotesen vil $X\sim\text{Bin}(0{,}5;50)$, da en ikke-skæv mønt har sandsynlighedsparameter $0{,}5$. I eksperimentet svarer udfaldet krone til succes, $X=1$. Baseret på dit eksperiment er sandsynligheden for succes:

$$

    \frac{21}{50} = 0{,}42.

$$

Spørgsmålet er nu, om 21 slag er for langt væk fra 25 slag for at kunne sige, om mønten er skæv. Stikprøven består af 50 slag og den interessante teststørrelse, $x_0$, er antallet af kroner, ergo $x_0=21$. For et signifikansniveau på $5\ \%$ kan den kritiske mængde bestemmes ved at løse for de kritiske værdier $k_1$ og $k_2$ i ligningerne 

$$

    \mathbb{P}(X \leq k_1) \leq \frac{0{,}05}{2}\quad \text{og}\quad \mathbb{P}(X \geq k_2) \leq \frac{0{,}05}{2}. 

$$

Ved brug af et CAS-værktøj fås $k_1 = 17$ og $k_2 = 33$ og den kritiske mængder 

$$

    K = \{ X\leq 17 \}\cup\{ X\geq 33 \} = \{0,1,\dots,17,33,34,\dots,50\}.

$$

Eftersom teststørrelsen $x_0=21$ ikke er i den kritiske mængde, accepterer du nulhypotesen og konkluderer, at mønten ikke er skæv.

```

I dette eksempel arbejder vi med et to-sidet test. Derfor har vi også to kritiske værdier, som vi skal bestemme. Hvis det havde været et en-sidet test, da ville vi kun have én kritisk værdi. For en generel stokastisk variabel $X$ og et vilkårligt signifikansniveau $\alpha$ har vi:

```{panels}

**Venstre-sidet hypotesetest:** $H_a:\ p<p_0$

Den kritiske værdi $k$ skal opfylde 

$$

    \mathbb{P}(X\leq k) \leq \alpha.

$$

---

**Højre-sidet hypotesetest:** $H_a:\ p>p_0$

Den kritiske værdi $k$ skal opfylde 

$$

    \mathbb{P}(X\geq k) \leq \alpha.

$$

---

**To-sidet hypotesetest:** $H_a:\ p\neq p_0$

De kritiske værdier $k_1$ og $k_2$ skal opfylde 

$$

    \mathbb{P}(X\leq k_1) \leq \frac{\alpha}{2}\quad \text{og}\quad \mathbb{P}(X\geq k_2) \leq \frac{\alpha}{2}.

$$

``` 

Udfaldet af testet bestemmes af om teststørrelsen er med i den kritiske mængde eller ej.
* Hvis teststørrelsen er i den kritiske mængde, så forkastes nulhypotesen.
* Hvis teststørrelsen ikke er i den kritiske mængde, så accepteres nulhypotesen.

Den kritiske mængde kan også bruges til at vurdere, hvad sandsynligheden er for at lave en type 1-fejl. 

```{prf:eksempel} Skæv mønt (fortsat)
:label: hypotesetest_moent_fortsat2

I {prf:ref}`hypotesetest_moent_fortsat` bestemte vi den kritiske mængde under nulhypotesen, at $X\sim\text{Bin}(0{,}5;50)$. Her fandt vi, at de to kritiske værdier til at være $k_1 = 17$ og $k_2 = 33$ og dermed $K = \{ X\leq 17 \}\cup\{ X\geq 33 \} = \{0,1,\dots,17,33,34,\dots,50\}$. Sandsynligheden for at observere et udfald fra den kritiske mængde er

$$

    \mathbb{P}(X \in K) = \mathbb{P}(X\leq 17) + \mathbb{P}(X\geq 33) \approx 0{,}033.

$$

Denne kan nu bruges til at konkludere, at hvis nulhypotesen er sand, da er sandsynligheden for at begå en type 1-fejl ca. 3,3 \%. 

Lad os nu antage, at nulhypotesen er falsk, og mønten er skæv med sandsynlighedsparameter $p=0{,}6$. Beholder vi nulhypotesen, selvom mønten faktisk er skæv, så begår vi en type 2-fejl. Vi kan beregne sandsynligheden for at begå type 2-fejlen ved at bruge acceptmængden. Først bestemmer vi acceptmængden under den falske hypotese:
 
 $$
 
    A=U \setminus K = \{18,19,\dots,32\}.
 
 $$ 
 
 Husk, at udfaldsmængden for $X$ er antallet af mulige successer i 50 kast, det vil sige $U=\{0,1,\dots,50\}$. Dernæst bruger vi den faktiske fordeling, $\text{Bin}(0{,}6;50) til at beregne sandsynligheden for at observere acceptmængden:
 
 $$
 
    \mathbb{P}(X\in A) = \mathbb{P}(X\leq 32) - \mathbb{P}(X\leq 17) \approx 0{,}763
 
 $$
 
 Sandsynligheden for at begå en type 2-fejl under disse antagelser er ca. 76,3 \%.

```


## $p$-værdi

Et sidste vigtigt begreb for statistiske test er den såkaldte $p$-værdi. Vi kan også afgøre om nulhypotesen skal forkastes på baggrund af denne størrelse. 

$p$-værdien er et mål for, hvor sandsynligt det er at observere en ny stikprøve med en teststørrelse $x_1$, der er mindst lige så ekstrem som den observerede teststørrelse $x_0$, givet nulhypotesen er sand. Den bruges i hypotesetestning til at bestemme, om resultaterne af et eksperiment er *statistiske signifikante*. Når et resultat er statistisk signifikant, betyder det, at resultatet er troværdigt og ikke skyldes held eller tilfældigheder. En lav $p$-værdi indikerer, at resultaterne fra det statistiske test er usædvanlige under nulhypotesen, hvorfor den i det tilfælde oftest forkastes. Jo mindre $p$-værdi, jo mindre troværdig teststørrelse og nulhypotese.

Det er også vigtigt, at man på forhånd har valgt et signifikansniveau, når man beregner $p$-værdien. Som nævnt tidligere, så vælges oftest et signifikansniveau på 5 %. Hvis $p$-værdien er lavere end det valgte signifikansniveau, afvises nulhypotesen, hvilket indikerer, at teststørrelsen sandsynligvis ikke skyldes tilfældigheder. En $p$-værdi højere end signifikansniveauet betyder derimod, at der ikke er tilstrækkelig bevis for at afvise nulhypotesen. Det er ikke et absolut bevis, men en metode, der kan hjælpe med at træffe beslutninger under usikkerhed. 

* Hvis $p$-værdien er mindre end eller lig med det valgte signifikansniveau $\alpha$, forkastes nulhypotesen.
* Hvis $p$-værdien er større end det valgte signifikansniveau $\alpha$, accepteres nulhypotesen.

```{prf:eksempel} Skæv mønt (fortsat)
:label: hypotesetest_moent_fortsat3

I {prf:ref}`hypotesetest_moent_fortsat` brugte vi den kritiske mængde til at konkludere, at nulhypotesen blev accepteret. Vi kan ligeledes vise, at den også accepteres på baggrund af $p$-værdien. Eftersom vi har et to-sidet test, beregner vi $p$-værdien under nulhypotesen som følgende:

$$

    p = 2 \mathbb{P}(X\leq 21) \approx 0{,}322.

$$

Vi får altså en $p$-værdi på omkring 32,2 \%. Med et signifikansniveau på 5 \%, er der ikke tilstrækkeligt bevis for at konkludere, at mønten er skæv. Med andre ord, teststørrelsen på 21 kronekast ud af 50 kast er ikke statistisk signifikant nok til at afvise nulhypotesen om, at mønten er fair. 

Hvis $p$-værdien havde været under 5 \%, ville det have indikeret, at et sådant ekstremt resultat var usandsynligt for en fair mønt, og dermed ville nulhypotesen være blevet afvist til fordel for den alternative hypotese (at mønten er skæv). Men, fordi $p$-værdien i dette tilfælde er over 5 \%, er der ikke tilstrækkeligt bevis for at sige, at mønten ikke er fair. 

```

Ligesom for den kritiske mængde, kan vi også opstille generelle formler for, hvordan $p$-værdien udregnes under nulhypotesen i de forskellige typer test. Vi lader $X$ være den stokastiske variabel, der ønskes undersøgt under ved et hypotesetest med den observerede teststørrelse $x_0$.

```{panels}

**Venstre-sidet hypotesetest:** $H_a:\ p<p_0$

$$

    p = \mathbb{P}(X\leq x_0).

$$

---

**Højre-sidet hypotesetest:** $H_a:\ p>p_0$

$$

    p = \mathbb{P}(X \geq x_0).

$$

---

**To-sidet hypotesetest:** $H_a:\ p\neq p_0$

$$

    p = 2 \min\{\mathbb{P}(X\leq x_0),\mathbb{P}(X\geq x_0)\}.

$$

Hvis fordelingen af $X$ er symmetrisk omkring dens middelværdi, da kan ovenstående udtryk simplificeres til:

$$

    p = 2 \mathbb{P}(X\leq x_0).

$$

``` 

Såfremt man arbejder med skæve fordelingsantagelser under nulhypotesen, kan den kritiske mængde og $p$-værdien godt give anledning til to forskellige konklusioner vedrørende nulhypotesen. Vi siger, at en fordeling er skæv, når fordelingens median er forskellig fra middelværdien. Lad os kigge på et eksempel, hvor det er tilfældet.

```{prf:eksempel} Skæv mønt (fortsat)
:label: hypotesetest_moent_fortsat3

I {prf:ref}`hypotesetest_moent_fortsat` brugte vi den kritiske mængde til at konkludere, at nulhypotesen blev accepteret. Vi kan ligeledes vise, at den også accepteres på baggrund af $p$-værdien. Eftersom vi har et to-sidet test, beregner vi $p$-værdien under nulhypotesen som følgende:

$$

    p = 2 \mathbb{P}(X\leq 21) \approx 0{,}322.

$$

Vi får altså en $p$-værdi på omkring 32,2 \%. Med et signifikansniveau på 5 \%, er der ikke tilstrækkeligt bevis for at konkludere, at mønten er skæv. Med andre ord, teststørrelsen på 21 kronekast ud af 50 kast er ikke statistisk signifikant nok til at afvise nulhypotesen om, at mønten er fair. 

Hvis $p$-værdien havde været under 5 \%, ville det have indikeret, at et sådant ekstremt resultat var usandsynligt for en fair mønt, og dermed ville nulhypotesen være blevet afvist til fordel for den alternative hypotese (at mønten er skæv). Men, fordi $p$-værdien i dette tilfælde er over 5 \%, er der ikke tilstrækkeligt bevis for at sige, at mønten ikke er fair. 

```


## Opsummering af et hypotesetest

1. Opstil nulhypotesen $H_0$: Nulhypotesen er under den test skal foretages.
   
2. Bestem teststørrelse $x_0$: Teststørrelsen er det tal, der bestemmes ud fra stikprøven og bruges til at afgøre om nulhypotesen skal accepteres eller forkastes.
   
3. Vælg signifikansniveau $\alpha$: Signifikansniveauet anvendes til at skelne mellem, hvornår nulhypotesen skal accepteres eller forkastes.

4.a Bestem den kritiske mængde $K$: Den kritiske mængde indeholder de ekstreme værdier for teststørrelsen under nulhypotesen. Det er altså en samling af de værdier, som teststørrelsen kun med ringe sandsynlighed vil antage, såfremt nulhypotesen er sand. 
   
4.b Bestem $p$-værdien: $p$-værdien angiver, hvor sandsynligt din observerede teststørrelse er under nulhypotesen. 

