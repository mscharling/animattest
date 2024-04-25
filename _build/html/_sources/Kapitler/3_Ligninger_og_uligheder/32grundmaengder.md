(grundmaengder)=
# Grundmængder

Noget nyt, som du sikkert ikke har været vant til at tænke over, er hvilke værdier for den ubekendte variable, for eksempel $x$, når vi arbejder med ligninger. De værdier, som vi må arbejde med, kalder vi ligningens *grundmængde* og betegnes $G$. Den skal bestemmes inden, at du går i kast med at løse ligningen.

Forestil dig, at du ikke ved, hvordan du vil løse en ligning, men bare prøve at indsætte forskellige værdier for $x$ ind i en ligning indtil, at du finder den rigtige værdi. Kigger vi så på ligningen

$$

    x-3=2x+9,

$$

så tager det ikke mange forsøg at finde frem til $x=-12$. Vi behøver heller ikke være forsigtig med hvilke værdier for $x$, som vi afprøver. Vi siger, at grundmængden er alle de reelle tal, som jo er alle tal, vi kan komme i tanke om. Vi skriver derfor

$$

    G=\mathbb{R}.

$$

Men har vi en ligning givet ved

$$

    \frac{8}{x} = 2, 

$$

så tager det heller ikke mange forsøg at finde frem til $x=4$. Her skal vi dog være opmærksomme på, hvilke $x$'er vi afprøver! Vi kan nemlig se, at vi har $x$ i nævneren på en brøk i udtrykket på venstresiden, hvilket betyder, at vi potentielt kunne komme til at dividere med 0 - og det må vi jo ikke! Derfor har vi i dette tilfælde faktisk én værdi for $x$, som vi ikke må prøve at indsætte, nemlig $x=0$. Grundmængden her skriver vi

$$

    G=\{x\in\mathbb{R}\mid x\neq 0 \},

$$

som blot betyder, at vi må prøve alle de reelle tal, bortset fra 0. Vi kan også skrive denne grundmængde som

$$

    G=\mathbb{R}\setminus \{0\}.

$$

Husk, når vi arbejder med mængdeoperationer, så virker de kun på mængder. Derfor bliver vi nødt til at pakke 0-tallet ind i en mængde $\{0\}$ og trække denne mængde fra $\mathbb{R}$, så vi netop får en mængde bestående af alle reelle tal uden 0. 

Disse to indledende eksempler skulle gerne give dig en idé om, hvornår vi skal være opmærksomme, når vi arbejder med ligninger. Har vi for eksempel en ligning, der indeholder en brøk med $x$ i nævneren, så skal vi bestemme grundmængden sådan, at vi ikke kan få 0 i nævneren. 

Vi er dog ikke helt færdige... Hvis vi har en ligning, hvor der indgår et udtryk med $x$ under en lige rod, altså en rod med en lige rodeksponent, så skal vi huske, at radikanden ikke kan være negativ. For eksempel

$$

    \sqrt{x} = 2

$$

løses let med $x=4$, men vi kan ikke prøve at indsætte $x=-2$, da $\sqrt{-2}$ ikke findes. Derfor bliver grundmængden til denne ligning

$$

    G = \{x\in\mathbb{R}\mid x\geq 0\}

$$

og betyder blot, at de værdier for $x$, som vi må "lege med" skal være større end eller lig med 0.


```{prf:eksempel}
Lad os bestemme grundmængden for ligningen

$$

    \frac{2}{x-1} = 9.

$$

Vi ser, at vi har en ligning med en brøk i udtrykket på venstresiden, hvor $x$ indgår i nævneren. Vi er derfor interesseret i hvilket $x$, der giver

$$

    x-1 = 0

$$

for vi må jo ikke have 0 i nævneren. Vi ser, at det sker for $x=1$, og derfor bliver ligningens grundmængde

$$

    G = \{x \in \mathbb{R} \mid x\neq 1\}\quad \text{eller}\quad G=\mathbb{R}\setminus\{1\}.

$$



```

```{prf:eksempel}
Lad os bestemme grundmængden for ligningen

$$

    \sqrt{3-x} = 2.

$$

Vi ser, at vi har med en lige rod at gøre i udtrykket på venstresiden. Ergo skal

$$

    3-x\geq 0.

$$

Det kan vi se gælder for $x\leq 3$ og derfor har vi, at grundmængden for denne ligning er givet ved

$$

    G=\{x\in\mathbb{R} \mid x\leq 3\}.

$$


```

```{prf:eksempel}
Lad os bestemme grundmængden for ligningen

$$

    \frac{2}{x-2} + \frac{3}{x+3} = 1.

$$

Vi ser her, at vi har to brøker med $x$ i begge nævnere i udtrykket på venstresiden. Vi har derfor muligvis flere værdier for $x$, der kunne resultere i, at der kommer til at stå 0 i nævnerne. 

$$

    x-2 = 0

$$

gælder for $x=2$ og 

$$

    x+3 = 0

$$

gælder for $x=-3$, så grundmængden for ligningen bliver

$$

    G=\{x\in\mathbb{R} \mid x\neq -3 \vee x\neq 2\}\quad \text{eller}\quad G=\mathbb{R}\setminus\{-3,2\}.

$$

Her betyder $\vee$ *logisk eller* eller *disjunktion*, men kan bruges som et matematisk symbol for "eller" på den måde, som vi har gjort her.
```

## Opgaver

```{prf:opgave}

Bestem grundmængden for følgende udtryk:

&nbsp; &nbsp; a) $3x+4$ \
&nbsp; &nbsp; b) $2(x-1)+x$ \
&nbsp; &nbsp; c) $\frac{1}{x+2}$ \
&nbsp; &nbsp; d) $\frac{3}{2x-7}$ 

```

```{prf:opgave}

Bestem grundmængden for følgende udtryk:

&nbsp; &nbsp; a) $\sqrt{x-6}$ \
&nbsp; &nbsp; b) $\sqrt[3]{x+2}$ \
&nbsp; &nbsp; c) $\frac{3}{\sqrt{x-8}}$ \
&nbsp; &nbsp; d) $\frac{1}{\sqrt{2x+5}}$ 

```

```{prf:opgave}

Bestem grundmængden for følgende udtryk:

&nbsp; &nbsp; a) $\frac{1}{x}+\frac{1}{x+1}$ \
&nbsp; &nbsp; b) $\frac{2x}{3}+\frac{2}{2x+3}$ \
&nbsp; &nbsp; c) $\frac{1}{x}+\sqrt{x-2}$ \
&nbsp; &nbsp; d) $\frac{1}{\sqrt{x+8}}+\frac{1}{4x-1}$ 

```
