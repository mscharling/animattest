# Stokastiske variabler
Når vi snakker om sandsynligheder, så vil vi gerne kunne formalisere det matematisk. I Kapitel xx (Sandsynlighedsregning I) var vi egentlig ikke særlig formalistiske i det, at vi godt kunne finde på at skrive sandsynligheder som,

$$

    \mathbb{P}(\text{én 6'er}) \quad \text{eller} \quad \mathbb{P}(\text{Plat}).

$$

Det vil vi nu lave om. Vi vil derfor indføre en *stokastisk variabel*, som skal repræsentere det eksperiment eller den sandsynlighed. Dernæst tildeler vi hvert udfald i eksperimentet en numerisk værdi ved hjælp af tal, så vi kan formalisere vores sandsynlighed matematisk. Vi vil oftest bruge store bogstaver til at betegne en stokastisk variabel, for eksempel $X$ eller $Y$. Hvis vi lader $X$ være en stokastisk variabel, der repræsenterer et møntkast, så kunne vi jo formulere vores udfaldsrum $
    U = \{\text{Plat,Krone}\}$ som $U = \{0,1\}$ således, at udfaldet $\text{Krone}$ er det samme som $X=1$. Da vil vi kunne skrive sandsynligheden som

$$

    \mathbb{P}(\text{Krone}) = \mathbb{P}(X=1) = \frac{1}{2}.

$$

At en variabel er stokastisk betyder blot, at variablen er tilfældig. Hvis vi tænker over det, så giver det god mening at sige sådan. Det er en variabel, der antager nogle værdier, der har knyttet en sandsynlighed til sig. En stokastisk variabel bliver dermed til en funktion, hvor vi til hvert udfald i udfaldsrummet har knyttet en numerisk værdi. 

$$

    X(\text{Krone}) = 1 \quad \text{og} \quad X(\text{Plat}) = 0.

$$

## Diskrete og kontinuerte stokastiske variabler
Når vi arbejder med stokastiske variabler skal vi altid overveje, om den er *diskret* eller *kontinuert*. Det er vigtigt at have denne adskilning, da beregninger af sandsynligheder er forskellig i de to tilfælde. Vi siger, at en stokastisk variabel er 

* diskret, når den antager et tælleligt antal værdier, og
* kontinuert, når den antager et overtællig antal værdier.

Bemærk her, at vi bruger begreberne tællelig og overtællelig, som vi stiftede bekendtskab med i Kapitel xx (Uendelighedsbegrebet, Funktioner II). Grunden til, at vi ikke direkte bruger begreberne *endelig* og *uendelig* her, skyldes, at en stokastisk variabel $X$, der antager værdier på alle de naturlige tal $\mathbb{N}=\{1,2,3,\dots\}$, stadig er en diskret variabel. Mængden af naturlige tal $\mathbb{N}$ indeholder uendeligt mange elementer, men *tælleligt* uendeligt mange elementer! Hvis vi derimod har en stokastisk variabel $Y$, der antager værdier på de reelle tal $\mathbb{R}$, så vil den være kontinuert. Det skyldes, at mængden af de reelle tal $\mathbb{R}$ indeholder uendeligt mange elementer, men *overtælleligt* uendeligt mange elementer. Derfor vil en stokastisk variabel, der lever på et interval, også være kontinuert. 

```{prf:eksempel}
:label: disstokvar

Vi konstruerer en stokastisk variabel $X$, der angiver hvilken karakter eleverne i 2.Z har mulighed for at få i den kommende mundtlige eksamen i matematik. Det kunne for eksempel være 

$$

    X(\text{Emma}) = 10,\quad X(\text{Daniel}) = 4,\quad X(\text{Andrea}) = 12, \dots

$$

Denne variabel antager værdier på mængden $\{-3,0,2,4,7,10,12\}$, hvor $0$ svarer til karakteren $00$ og $2$ svarer til $02$. Dette er en tællelig mængde, og dermed er den stokastiske variabel $X$ i dette eksperiment diskret. 

```

```{prf:eksempel}
:label: kontstokvar

Vi konstruerer en stokastisk variabel $X$, der angiver hvilken højde eleverne i 3.Y har. Det kunne for eksempel være 

$$

    X(\text{Celina}) = 163{,}2,\quad X(\text{Mette}) = 162{,}5,\quad X(\text{Victoria}) = 170{,}1, \dots

$$

Denne variabel kan derfor antage værdier i intervallet $[150,195]$. Dette er en overtællelig mængde, og dermed er den stokastiske variabel $X$ i dette eksperiment kontinuert. 

```

