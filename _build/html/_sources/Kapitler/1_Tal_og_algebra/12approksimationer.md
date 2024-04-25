# Approksimationer

Når vi arbejder med tal, så kan det nogle gange være meningsfuldt at bruge approksimationer. Approksimationer, eller tilnærmelser, danner vi, når vi runder tal op eller ned og alt efter, hvor meget vi afrunder jo grovere en approksimation får vi.

Vi bruger ofte approksimationer, når vi laver overslagsregning på en indkøbstur i supermarkedet, så ikke vi bliver overraskede over, hvor meget vi handler for. Det er oftest nemmere at lægge runde tal sammen end kommatal. F.eks. hvis vi køber en sodavand til 19,99 kr. og to pakker tyggegummi til stykprisen 8,99 kr., så skal vi i alt af med

$$
    19{,}99\,\text{kr.}+2 \cdot 8{,}99\,\text{kr.} = 37{,}97\,\text{kr.}
$$

Det kunne vi have sjusset os frem til ved at lave en overslagsregning ved at runde 19,99 kr. op til 20 kr. og 8,99 kr. op til 9 kr. eller endda op til 10 kr. Så havde regnestykket været meget nemmere at regne i hovedet:

$$
    20\,\text{kr.} + 2 \cdot 10\,\text{kr.} = 40\,\text{kr.}
$$

Kigger vi på de to resultater, så kan vi også se, at 40 kr. er et godt bud på, hvor meget vi handler for. De 40 kr. er netop en approksimation for det samlede beløb. Fordi vi rundede 8,99 kr. op til 10 kr., så får vi selvfølgelig en grovere approksimation af det samlede resultat, end hvis vi havde rundet op til 9 kr.

Vi bruger også approksimationer, når vi snakker om klokken, for selvom klokken nu er 11:32, så kan vi godt finde på at sige: ”Klokken er halv 12”.

```{prf:eksempel}

Tallet 3,14 og tallet $\pi$ er af hver sin natur. Vi siger, at 3,14 er et rational tal, da det kan skrives som brøken

$$
    \frac{314}{100} \text{,}
$$
    
men tallet $\pi$ kan ikke skrives som en brøk og derfor siger vi, at det er irrationalt. Netop disse egenskaber vender vi tilbage til i Kapitel 2.

Vi ved dog, at $\pi$ har de første fire decimaltal 3,1415..., og derfor lærer vi i folkeskolen at 3,14 er en fin nok approksimation af $\pi$. Vi runder af til to decimaler ved at betragte tredje decimal, 1-tallet, og eftersom det er under fem, så runder vi ikke anden decimal op. Så, approksimationen, som vi lærer i folkeskolen skrives

$$
    \pi \approx 3{,}14\text{.}
$$

Her betyder $\approx$ *tilnærmelsesvis* eller *approksimativt*. 
    
```

Faktisk bruger computerprogrammer og lommeregnere også en approksimation af $\pi$, når der ønskes at regne med dette tal. For eftersom $\pi$ ikke kan skrives som en brøk, så har tallet en uendelig decimaludvidelse, hvor decimalerne ikke optræder i et mønster. Computere og lommeregnere bruger i dag så mange decimaler af $\pi$, at approksimationen er så tæt på det rigtige tal, at det ikke spiller en rolle, at det er approksimationen, der anvendes.

## Approksimationens afvigelse

Bruger vi approksimationer, så kan det være en god idé at vide, hvor meget vores approksimation afviger fra det rigtige resultat. Her snakker vi om *den absolutte afvigelse* og *den relative afvigelse*.

Den absolutte afvigelse angiver, hvor langt væk vores approksimation ligger fra vores rigtige tal på tallinjen. Kigger vi på eksemplet fra før med sodavanden og tyggegummipakkerne, så kan vi se, at vores overslagsregning gav resultatet 40 kr., men at det rigtige resultat var 37,97 kr., hvilket giver en absolut afvigelse på 2,03 kr.

$$
    40 \, \text{kr.} - 37{,}97 \, \text{kr.} = 2{,}03 \, \text{kr.}
$$

Den relative afvigelse angiver en procentuel afvigelse fra vores rigtige tal. Den bruger faktisk den absolutte afvigelse, men relaterer det til det rigtige resultat. Kigger vi igen på samme eksempel, så kan vi se, at overslagsregningen giver en relativ afvigelse på ca. 5,35 %.

$$
    \frac{40 \, \text{kr.} - 37{,}97 \, \text{kr.}}{37{,}97 \, \text{kr.}} = \frac{2{,}03 \, \text{kr.}}{37{,}97 \, \text{kr.}} = 0{,}05346326046 \approx 5{,}35 \, \%
$$

Havde vi ikke rundet stykprisen på tyggegummipakkerne op til 10 kr., men rundet op til 9 kr., så ville vi få en mindre grov approksimation, hvilket vi kan måle på afvigelserne.

$$
    38 \, \text{kr.} - 37,97 \, \text{kr.} = 0,03 \, \text{kr.}
$$
$$
    \frac{38 \, \text{kr.} - 37{,}97 \, \text{kr.}}{37{,}97 \, \text{kr.}} = \frac{0{,}03 \, \text{kr.}}{37{,}97 \, \text{kr.}} = 0{,}00079009744 \approx 0{,}08 \, \%
$$

## Hvilken approksimation?

Det er altid et godt spørgsmål at stille sig selv i situationer, hvor det kan være oplagt at bruge approksimationer, om hvilken approksimation man skal bruge. Regner vi f.eks. gangestykket

$$
    2{,}5 \cdot 5{,}25 = 12{,}8625\text{,}
$$

så kan vi se, at vi får fire decimaler, men en god huskeregel i opgaver, hvor der fås flere decimaler end i de angivne tal i opgaven, så kan man runde tallet af, så der er lige så mange decimaler i resultatet. Det betyder, at vi i gangestykket ovenfor kunne runde af til 12,86, eftersom de tal, som vi regner med, kun er angivet med to decimaler. Det er bare vigtigt, at man så skriver, at det er et tilnærmelsesvist rigtigt resultat. Enten kan man skrive: ”Det er ca. 12,86”, eller man kan angive det med symbolet, altså

$$
    2{,}45 \cdot 5{,}25 \approx 12{,}86\text{,}
$$

for på den måde viser du, at du godt ved, at dit resultat, som du har angivet, ikke er fuldstændigt korrekt, men at det er så tæt på, at det godt kan tillades som et svar på opgaven. Afvigelsen er jo relativ lav:

$$
    \frac{12{,}8625 - 12{,}86}{12{,}86} = \frac{0{,}0025}{12{,}8625} = 0{,}00019436345 \approx 0{,}02 \, \%.
$$

## Opgaver

```{prf:opgave}

Find den absolutte og relative afvigelse på approksimationerne

&nbsp; &nbsp; a) $0{,}9 \approx 1$ \
&nbsp; &nbsp; b) $0{,}99 \approx 1$ \
&nbsp; &nbsp; c) $0{,}999 \approx 1$ \
&nbsp; &nbsp; d) $0{,}9999 \approx 1$ 

Hvad kan du konkludere ud fra resultaterne?

```