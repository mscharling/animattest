# Hvorfor differentialligninger?

Vi har jo egentlig allerede været lidt inde på titlens spørgsmål i introduktionen til dette kapitel. Vi vil bruge differentialligningerne til at opstille ligninger for, hvordan ændringer i en variabel afhænger af ændringer i en anden variabel.

En differentialligning er en ligning, hvor den ukendte størrelse ikke er et tal, men en funktion. Det nye i differentialligninger er, at vi ikke blot er interesserede i selve funktionen, men også i, hvordan funktionen ændrer sig. Denne ændring beskrives ved hjælp af funktionens afledede. 

I {numref}`Kapitel %s<ch-differentialregning-i>` og {numref}`Kapitel %s<ch-differentialregning-ii>` mødte vi størrelsen $\frac{\text{d}y}{\text{d}x}$, kaldet differentialkvotienten. Denne størrelse angiver tangenthældningen i et bestemt punkt $x_0$ ved brug af en grænseværdi-betragtning. Husk, tangenthældningen er jo et udtryk for den infinitesimale ændring i $y$-værdien, $\text{d}y$, pr. infinitesimal ændring i $x$-værdien, $\text{d}x$. Regner vi denne for samtlige punkter på grafen for en funktion, så har vi den afledte funktion.

## Dynamikker

Når vi arbejder med differentialligninger, vil vi ofte bruge notationen $y\prime$ i stedet for $\frac{\text{d}y}{\text{d}x}$. Det er dog vigtigt at huske, at $y\prime$ og $\frac{\text{d}y}{\text{d}x}$ angiver det samme, nemlig den afledede af $y$ med hensyn til $x$. For eksempel:

$$

    y\prime = 2x.

$$

Dette er et simpelt eksempel på en differentialligning. Her ser vi, at ændringen i $y$-variablen afhænger af $x$-variablen. Hvordan ved vi det? Lad os omskrive ligningen ved at bruge notationen $\frac{\text{d}y}{\text{d}x}$:

$$

    \frac{\text{d}y}{\text{d}x} = 2x.

$$

Vi kan nu tænke på differentialligningen på en mere intuitiv måde. Ved at multiplicere begge sider af ligningen med $\text{d}x$ får vi:

$$

    $\text{d}y = 2x\,\text{d}x.

$$ (eq:dynamik)

Dette udtryk kan vi læse som: "Ændringen i $y$-variablen, $\text{d}y$, er lig med 2 gange $x$-variablen gange ændringen i $x$-variablen, $\text{d}x$. Dette er en mere praktisk måde at forstå differentialligninger på - som beskrivelser af, hvordan små ændringer i en variabel hænger sammen med små ændringer i en anden variabel. Differentialligninger på formen {eq}`eq:dynamik` kaldes en *dynamik*. Finder vi funktionen, der løser differentialligningen, da siges den funktion af have dynamikken angivet i {eq}`eq:dynamik`.