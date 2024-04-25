# Tallet 0 og negative tal

## Tallet 0
Hvis du ikke har nogle bananer, så kan vi kvantificere det til, at du har nul bananer. Nul er tallet for *ingenting*. Det er et meget vigtigt tal for både talteorien og mængdeteorien. Nul er det, der adskiller alle positive og negative tal fra hinanden og nul bærer egenskaber, som vi kommer til at bruge til at bevise nogle af de sætninger, som du skal lære her. Vi har samlet nogle af egenskaberne nedenfor:

```{prf:egenskaber}
:label: nulegenskab

For et vilkårligt tal $a$ har $0$ følgende egenskaber:

1. $$a + (-a) = 0 \tag{nulreglen}\label{nulreglen}$$
2. $$a + 0 = a$$
3. $$a \cdot 0 = 0$$

```

Den første egenskab kaldes *nulreglen* og eftersom den har et navn, så kan du sikkert forestille dig, at den vil vise sig brugbar senere. Egenskaben siger nemlig, at hvis vi tager et tal og lægger det {prf:ref}`modsatte tal <modsattal>` til (eller trækker det samme tal fra), så ender vi op med ingenting. Men for, at vi kan snakke om modsatte tal, så bliver vi også nødt til at vide, hvordan vi håndterer dem.

(negativetal)=
## Negative tal

De negative tal skal repræsentere idéen om modsatte tal. Hvis du får penge ind, så er det modsatte at give penge væk. Den pengestrøm kan beskrives i to modsatte bevægelser. Hvis du får penge ind, så bliver din bankkonto større, og hvis du giver penge væk, så bliver din bankkonto mindre. Denne strøm kan nedskrives matematisk med brugen af negative tal, og netop derfor er de så anvendelige. De finder sig faktisk også anvendelige på temperaturskalaerne.

Lad os vende tilbage til begrebet *modsatte tal*. Det modsatte tal af $4$ er $-4$, og det ved vi som en konsekvens af nulreglen. Hvad er det modsatte tal af $-2$? Igen kan vi bruge nulreglen til at vise, at det modsatte tal af $-2$ er $2$. Derfor har vi følgende definition af et modsat tal:

```{prf:definition} Modsat tal
:label: modsattal

Lad $a$ være et vilkårligt tal. Da er $b$ det modsatte tal af $a$, hvis det opfylder $\ref{nulreglen}$

$$

    a + b = 0

$$ 

```

Definitionen på et modsat tal kan umiddelbart virke unødvendig abstrakt, men formuleringen er vigtig, da det er den måde, du skal vænne dig til at læse forskellige matematiske sætninger. Men vi kan ud fra definitionen aflede, at det modsatte tal af $a$, er $-a$. Vi kan prøve at indsætte $b=-a$ i {prf:ref}`Definition 1.1<modsattal>`, og så kan vi direkte se, at nulreglen jo netop er opfyldt og derved er $-a$ det modsatte tal af $a$. Ligeledes vil det modsatte tal af $-a$ være $-(-a)=a$.

Kigger vi på en tallinje, så befinder alle de negative tal sig til venstre for 0. Når vi regner med de negative tal, så skal vi være ekstra opmærksomme, da der ikke helt gælder de samme regler, som når vi regner med positive tal. Vi starter med at kigge på addition og subtraktion af negative tal. 

### Addition og subtraktion med negative tal

Husk, at når vi lægger noget til (addition), så svarer det til at gå til højre på tallinjen, og når vi trækker noget fra (subtraktion), så svarer det til at gå til venstre på tallinjen.

```{prf:regneregler} Addition og subtraktion

Lad $a$, $b$ og $c$ være vilkårlige tal, da gælder

1. $a + (-b) = a - b$
2. $a - (-b) = a + b$
3. $a - (b + c) = a - b - c$

```

Lad os bruge regnereglerne. Lad os sige, at $a = 3$ og $b = 8$, så har vi

&nbsp; &nbsp; 1. $3 + (-8) = 3 - 8$

Vi kan vise dette ved at betragte tilfældet $3 + (-8)$ og $3 - 8$ på samme tallinje, og hvis vi havner samme sted, så ved vi, at udtrykkene er identiske.

```{figure} negativetal1.gif
---
scale: 50 %
align: center
---
```

Begge udtryk er lig $-5$, så ergo er udtrykkene identiske.

&nbsp; &nbsp; 2. $3 - (-8) = 3 + 8$

Vi ved, at $3 - (-8)$ kan læses som "forskellen" mellem 3 og -8 eftersom et minusstykke angiver en differens, der er afledt af den engelske "difference". Netop denne fortolkning kan vi vise på en tallinje. Husk, at de positive og negative tal adskilles af 0, så den samlede afstand (eller forskel) mellem $3$ og $-8$, må være afstanden fra $3$ til $0$ og fra $0$ til $-8$

```{figure} negativetal2.gif
---
scale: 50 %
align: center
---
```

Denne fortolkning giver netop plusset fra reglen, ergo er udtrykkene identiske. 

Lad os introducere $c = 2$, da er

&nbsp; &nbsp; 3. $3 - (8 + 2) = 3 - 8 - 2$

Vi kan også blot regne venstre- og højresiden af ligheden til at konkludere ligheden:

$$
    3 - (8 + 2) = 3 - 10 = -7
$$
$$
    3 - 8 - 2 = -5 - 2 = -7
$$

### Multiplikation og division med negative tal

```{prf:regneregler} Multiplikation og division
:label: negativetalmogd

Lad $a$ og $b$ være vilkårlige tal, da gælder

1. $a \cdot (-b) = -ab$
2. $-a \cdot (-b) = ab$
3. $\frac{-a}{b} = \frac{a}{-b} = -\frac{a}{b}$
4. $\frac{-a}{-b} = \frac{a}{b}$

```

Regnereglerne ovenfor er ligeså meget en påmindelse om, hvordan vi skriver produkter og kvotienter. Hvis vi for eksempel har en ligning $2x+4=1$, så skriver vi jo ikke $2\cdot x$, men blot $2x$. Ligeledes, så skriver vi $\frac{x}{2}$ eller $\frac{1}{2}x$ i stedet for $x : 2$. 

Punkt 1. fra {prf:ref}`Regneregler 1.2<negativetalmogd>` siger vi ofte som "noget negativt gange noget positivt giver noget negativt" eller "minus gange plus giver minus". Punkt 2. siger vi ofte som "noget negativt gange noget negativt giver noget positivt" eller "minus gange minus giver plus". Det samme kan vi sige ved division. Bemærk også i punkt 3., at det er ligegyldigt, om det negative tal er i tælleren eller i nævneren, uanset hvad vil resultatet være noget negativt. 

Vi vil nu vise, hvorfor "minus gange plus giver minus" og "minus gange minus giver plus" er rigtigt. Det viser nemlig en måde at bruge $\ref{nulreglen}$ på.

```{prf:eksempel} "Minus gange plus giver minus"
:label: nulreglen-eksempel1

Lad os sige, at $a=6$ og $b=8$. Fra punkt 1. i {prf:ref}`Regneregler 1.2<negativetalmogd>` har vi, at $6\cdot(-8)=-48$, hvilket giver et negativt resultat. Men hvorfor?

Vi ved, at $8+(-8)=0$ fra $\ref{nulreglen}$. Bruger vi punkt 3. fra {prf:ref}`Egenskaber 1.1<nulegenskab>`, så har vi også, at 

$$

    6 \cdot (8 + (-8)) = 6 \cdot 0 = 0.

$$

Ganger vi på samme tid 6 ind i parentesen, så får vi, at 

$$

    6 \cdot (8 + (-8)) = \underbrace{6\cdot 8}_{=48} + 6 \cdot (-8) = 0.

$$

Vi ser, at $48+6\cdot(-8) = 0$, og den eneste måde det gælder, er hvis $6 \cdot (-8) = -48$ ifølge $\ref{nulreglen}$.

```

```{prf:eksempel} "Minus gange minus giver plus"
:label: nulreglen-eksempel2

Lad os fortsætte med, at $a=6$ og $b=8$. Fra punkt 2. i {prf:ref}`Regneregler 1.2<negativetalmogd>` har vi, at $-6\cdot(-8)=48$, hvilket giver et positivt resultat. Men hvorfor?

Vi ved stadig, at $8+(-8)=0$ fra $\ref{nulreglen}$. Punkt 3. fra {prf:ref}`Egenskaber 1.1<nulegenskab>` giver

$$

    -6 \cdot (8 + (-8)) = -6 \cdot 0 = 0.

$$

Ganger vi på samme tid -6 ind i parentesen, så får vi, at 

$$

    -6 \cdot (8 + (-8)) = \underbrace{-6\cdot 8}_{=-48} -6 \cdot (-8) = 0.

$$

Vi ser, at $-48-6\cdot(-8) = 0$, og den eneste måde det gælder, er hvis $-6 \cdot (-8) = 48$ ifølge $\ref{nulreglen}$.

```

```{exercise}
:class: dropdown

Vis, hvorfor $2\cdot (-6) = -12$ og $-2\cdot (-6) = 12$ ved brug af $\ref{nulreglen}$.

<details>
<summary>Hint</summary>
<p>

Følg de samme steps som i {prf:ref}`nulreglen-eksempel1<nulreglen-eksempel1>` og {prf:ref}`nulreglen-eksempel2<nulreglen-eksempel2>`

</p>
</details>
    
```

```{exercise}
:class: dropdown

Hvad siger {prf:ref}`Regneregler 1.2<negativetalmogd>` punkt 3. og 4. i ord?
    
```

Tidligere introducerede vi begrebet *modsatte tal*. Det er et vigtigt begreb, som vi bruger, når vi benytter $\ref{nulreglen}$, der i korte træk siger, at summen af et tal og dets modsatte tal er 0. Et tilsvarende begreb findes der for produkter, der kaldes *reciprokke tal*. To tal siges at være hinandens reciprokke, hvis deres produkt er 1. 

```{prf:definition} Reciprok tal
:label: reciproktal

Lad $a$ være et vilkårligt tal forskelligt fra 0. Da er $b$ det reciprokke tal af $a$, hvis det opfylder 

$$

    a \cdot b = 1

$$ 

```

På samme måde, som ved definitionen af et modsat tal, så kan vi vise, at $\frac{1}{a}$ eller $a^{-1}$ er det reciprokke tal af $a$.

$$

    a^{-1} = \frac{1}{a}

$$

Alle tal undtagen nul har en reciprok værdi. Et eksempel på reciprokke tal kunne være $2$ og $0{,}5$ eller $\frac{2}{1}$ og $\frac{1}{2}$. Skriver man et tal som en brøk, så vil man kunne finde dets reciprokke værdi ved at bytte om på tæller og nævner, da

$$

    \frac{a}{b} \cdot \frac{b}{a} = \frac{ab}{ab} = 1

$$

Det betyder, at vi kan vise punkt 3. og 4. fra {prf:ref}`Regneregler 1.2<negativetalmogd>` ved brug af, hvordan multiplikation og division relaterer sig til hinanden. Division er egentlig bare gange med reciprokke tal. 

$$

    \frac{a}{b} = \frac{a \cdot 1}{b} = a \cdot \frac{1}{b}

$$

Her har vi blot brugt en enkelt brøkregneregel efter at indse, at $a=a\cdot 1$. Ved at læse henover lighedstegnene, så ser vi, at $a$ divideret med $b$ er det samme som $a$ gange med det reciprokke tal af $b$. 

```{prf:eksempel}

Vi viser nu punkt 3. fra {prf:ref}`Regneregler 1.2<negativetalmogd>`. Lad os fortsætte med tallene fra {prf:ref}`nulreglen-eksempel1<nulreglen-eksempel1>` og {prf:ref}`nulreglen-eksempel2<nulreglen-eksempel2>`, da har vi, at 

$$

    \frac{-48}{6} = -8,

$$

da $6\cdot (-8) = -48$. På samme måde har vi også, at $\frac{48}{-6} = -8$, da $-6\cdot(-8) = 48$. Netop derfor kan vi generalisere dette ved blot at sætte minusset foran brøken, da det er ligegyldigt, om det indgår i tælleren eller nævneren:

$$

    -\frac{48}{6} = \frac{48}{-6} = \frac{-48}{6} = -8

$$

Ligeledes følger det for punkt 4., at 

$$

    \frac{-48}{-6} = 8,

$$

da $-6\cdot 8 = -48$. På samme måde har vi også, at $\frac{48}{6} = 8$, da $6\cdot 8 = 48$. Ergo

$$

    \frac{-48}{-8} = \frac{48}{6} = 8,

$$

så vi kan sige, at minusserne "går ud med hinanden". 

```

Det sidste, vi vil kommentere på, er når vi har en regnerække, hvor der indgår kun indgår multiplikation med mere end to gangetegn, så har vi følgende sætning.

```{prf:sætning} Regnerækker med gange

 * Hvis regnerækken indeholder et lige antal negative tal, så bliver produktet positivt.
 
 * Hvis regnerækken indeholder et ulige antal negative tal, så bliver produktet negativt. 

```

En sætning helt analogt til denne kan findes for potenser, så beviset for sætningen findes i {ref}`Kapitel 1.6<potenser>`.

## Opgaver
```{prf:opgave}

Udregn følgende udtryk

1. &nbsp; $12-(0{,}2+3)$ 
2. &nbsp; $2-(-8)$ 
3. &nbsp; $-3\cdot(-94)$ 
4. &nbsp; $8\cdot(-24)$ 

```

```{prf:opgave}

Reducér følgende udtryk

1. &nbsp; $-3(a+2b)+2a$ 
2. &nbsp; $a-2b+(a-b-(a+b))$ 
3. &nbsp; $3b+(-2a-b)+2a$ 
4. &nbsp; $-(-2a+b)-(a-3b)$ 

```

```{prf:opgave}

Reducér følgende udtryk

1. &nbsp; $2(a+3(b-a)+3b)-a-2b$ 
2. &nbsp; $3a-(2a-(-b+2(a-2))+2b)$ 
3. &nbsp; $-(-a-(2a+3)+8b-2(2-b))$ 
4. &nbsp; $4a-2(-3(b+2)-a+4(a-b)-(a+2b))$ 

```