(faktoriseringogkvadratkomplettering)=
# Faktorisering og kvadratkomplettering

To vigtige discipliner, som du skal blive komfortabel med er *faktorisering* og *kvadratkomplettering*. Du har allerede stødt på begrebet faktorisering i {ref}`Kapitel 1.3<regnearterne>`. Kvadratkomplettering er egentlig også faktorisering, som du vil se, men metoden er så vigtig, at vi tildeler emnet et kapitel for sig selv.

## Faktorisering

Faktorisering er et begreb, der dækker over, at vi kan nedbryde et matematisk udtryk til faktorer, der ganget sammen, giver det oprindelige udtryk. Ved blot at betragte et udtryk, så kan vi nogen gange være heldig at se, at nogen af leddene i udtrykket har noget til fælles, som vi netop kan "faktorisere ud". Kig for eksempel på udtrykket

$$

    16b + 40.

$$

Her kan vi se, at de to led har det til fælles, at de er et multiplum af 4. Det betyder, at ved at gange noget bestemt med 4, så kan vi få leddet: $16b$ er jo netop $4\cdot 4b$ og $40$ er jo $4\cdot 10$. Ergo har vi

$$

    16b+40 = 4\cdot 4b + 4 \cdot 10.

$$

Eftersom de to led har $4$-tallet til fælles, så kan vi faktorisere $4$ ud foran en parentes og få:

$$
    
    16b + 40 = 4(4b+10)

$$

Faktorisering har vist sig anvendelig i flere henseender. Vi kommer til at bruge det senere, når vi skal kigge på polynomier.

Nogle af de opgaver, som du kommer til at støde på, kan det også være en idé at benytte faktorisering. Især, hvis du skal reducere lidt mere komplicerede udtryk med brøker.

```{prf:eksempel}

Lad os reducere udtrykket

$$

    \frac{x^2+2x}{x}.

$$

Vi bemærker, at $x^2 = x\cdot x$ og $2x = x\cdot 2$, så vi kan faktorisere et $x$ ud foran en parentes:

$$

    \frac{x^2+2x}{x} = \frac{x(x+2)}{x}

$$

Nu kan vi se, at det $x$, som vi ganger på parentesen, går ud med det $x$, som der står i nævneren. Vi får altså:

$$

    \frac{x^2+2x}{x} = x+2.

$$

```

Faktorisering har vist sig at være en meget gavnlig discplin, der blandt andet benyttes i Aritmetikkens fundamentalsætning og Algebraens fundamentalsætning. Det er ikke umiddelbart sætninger, som vi behøver at stifte yderligere bekendtskab med nu. Men Aritmetikkens fundamentalsætning dækker groft sagt over, at vi kan skrive ethvert heltal større end 1 som et produkt af primtal. For eksempel kan vi skrive 15 som produktet mellem 3 og 5, som begge er primtal. Algebraens fundamentalsætning vil vi vende tilbage til, når vi skal snakke om polynomier. 

## Kvadratkomplettering

Kvadratkomplettering er egentlig en direkte oversættelse af det engelske begreb "completing the squares". Vi introducerer begrebet her, selvom det først viser sin særlige anvendelighed, når vi skal arbejde med andengradspolynomier. Læser vi {prf:ref}`1. kvadratsætning<k1>`, så kan vi læse identiteten som $(a+b)^2$ er lig med $a^2 + b^2 + 2ab$, men vi kan også læse den omvendt, nemlig $a^2 + b^2 + 2ab$ er lig med $(a+b)^2$. Det er netop idéen med kvadratkomplettering. Vi vil altså omskrive udtryk sådan, at vi kan identificerer kvadratet på et led, kvadratet på et andet led og eventuelt det dobbelte produkt og dernæst bruge den tilhørende kvadratsætning til omskrivningen.

Vi vil arbejde med udtryk, hvor vi direkte kan bruge en af kvadratsætningerne, men vi vil også møde udtryk, hvor vi bliver nødt til at lægge "0" til. Det lyder umiddelbart mærkeligt, at vi skal lægge "0" til. Men, det er faktisk en meget anvendelig teknik, som benyttes i mange elementer af matematikken. Vi vil støde på denne teknik i senere kapitler også.

Lad os kigge på to eksempler:

```{prf:eksempel}
:label: komplettering1

Vi skal kvadratkompletere udtrykket

$$

    64 + 9a^2 - 48a.
    
$$

Vi starter med at finde ud af, hvilken kvadratsætning udtrykket kunne ligne. Vi kan se, at det ligner {prf:ref}`2. kvadratsætning<k2>`. For at få det til at ligne kvadratsætningen vil vi faktorisere hvert led:

$$
\begin{align*}
    9a^2 + 64 - 48a &= 3^2 a^2 + 8^2 - 2\cdot 24\cdot a \\
        &= (3a)^2 + 8^2 - 2\cdot 3 \cdot 8 \cdot a \\
        &= (3a)^2 + 8^2 - 2\cdot 3a\cdot 8
\end{align*}
$$

Vi kan se at første led i kvadratsætningen bliver $3a$ og andet led i kvadratsætningen bliver $8$, da

$$

    (3a)^2 + 8^2 - 2\cdot 3a\cdot 8 = (3a-8)^2 
    
$$

og samler vi alle lighederne, så har vi altså

$$

    64 + 9a^2 - 48a = (3a-8)^2.

$$

```

```{prf:eksempel}
:label: komplettering2

Vi skal kvadratkompletere udtrykket

$$

    4x^2 + 8x + 6.
    
$$

Vi starter med at finde ud af, hvilken kvadratsætning udtrykket kunne ligne. Vi kan se, at det ligner {prf:ref}`1. kvadratsætning<k1>`. For at få det til at ligne kvadratsætningen vil vi faktorisere hvert led:

$$
\begin{align*}
     4x^2 + 6 + 8x &= 2^2 x^2 + 6 + 2\cdot 4x\\
        &= (2x)^2 + 6 + 2\cdot 2x \cdot 2\\
\end{align*}
$$

Af det sidste led kan vi faktisk se hvilke led, der skal indgå i vores kvadratsætning. Husk, at sætningen siger jo "(...) plus det dobbelte produkt af de to led". Vi kan derfor se, at det ene led skal være $2x$ og det andet led skal være $2$. Men, vi har et problem, for $6 \neq 2^2$. Vi skal her bruge, at vi kan lægge "0" til. 

Vi vil kamuflere vores "0" som $2-2$, da $2-2 = 0$. Dernæst vil vi samle $6-2 = 4$, da $4 = 2^2$. Vi får nu:

$$
\begin{align*}
    (2x)^2 + 6 + 2\cdot 2x \cdot 2 + \underbrace{2 - 2}_{=0} &= (2x)^2 + \underline{6-2} + 2\cdot 2x \cdot 2 + 2 \\
        &= (2x)^2 + \underline{4} + 2\cdot 2x \cdot 2 + 2 \\
        &= \underbrace{(2x)^2 + 2^2 + 2\cdot 2x \cdot 2}_{=(2x+2)^2} + 2 \\
\end{align*}
$$

Som vi kan se, så har vi, at de første led giver 

$$ 

    (2x)^2 + 2^2 + 2\cdot 2x \cdot 2 = (2x+2)^2.
    
$$

Samler vi alle lighederne, så har vi altså

$$

    4x^2 + 8x + 6 = (2x+2)^2 + 2.

$$

```

## Opgaver

```{prf:opgave}

Faktorisér og reducér udtrykkene:

&nbsp; &nbsp; a) $\frac{x^2 - x - 6}{x+2}$ \
&nbsp; &nbsp; b) $\frac{x^2 + 2x}{(x+2)(x-5)}$ \
&nbsp; &nbsp; c) $\frac{x^2 - 4x - 5}{x^2 - 5x}$ \
&nbsp; &nbsp; d) $\frac{4x^2 + 4xy + y^2}{4x^2-y^2}$ 

```

```{prf:opgave}

Kvadratkomplettér udtrykkene:

&nbsp; &nbsp; a) $x^2 + 4 + 4x$ \
&nbsp; &nbsp; b) $49 + b^2 - 14b$ \
&nbsp; &nbsp; c) $9x^2 + 4y^2 + 12xy$ \
&nbsp; &nbsp; d) $6a^2 - 100b^2 + 3a^2 + 19b^2$ 

```

```{prf:opgave}

Kvadratkomplettér udtrykkene:

&nbsp; &nbsp; a) $a^2 + 20 + 8a$ \
&nbsp; &nbsp; b) $25y^2 + 9z^2 + 20yz$ \
&nbsp; &nbsp; c) $x^2 + 9 - 8x$ \
&nbsp; &nbsp; d) $1 + 64x^2 - 8x$ 

```