# Grænseværdier

Et helt centralt begreb inden for matematikken er grænseværdier. Grænseværdien af en funktion eller et udtryk er den værdi, som man opnår, når man lader inputværdien gå mod en eller anden værdi. Derfor kan man se grænseværdien, som værende det bedste bud på en værdi for et udtryk, når man følger udtrykkets udvikling indtil det punkt. En grænseværdi for en funktion skrives oftest

$$

    \lim_{x \rightarrow x_0} f(x) = L

$$

og læses "grænseværdien af $f(x)$, når $x$ går mod $x_0$, er lig med $L$". Derfor er der også nogle bøger, der i stedet skriver 

$$

    f(x) \rightarrow L,\ \text{når}\ x\rightarrow x_0

$$

da det er mere læsbart; "$f(x)$ går mod $L$, når $x$ går mod $x_0$".

```{prf:definition} Grænseværdi

Lad $f$ være en given funktion. Hvis funktionsværdierne nærmer sig et tal $L$, når $x$ går mod $x_0$, så er $L$ grænseværdien for $f(x)$, når $x\rightarrow x_0$.

```

Skal vi undersøge grænseværdien af et udtryk eller en funktion, så kan det være behjælpeligt at opstille et sillebensdiagram eller betragte dens graf, for at kigge på, hvordan udviklingsforløbet er for udtrykkket eller funktionen. Lad os kigge på et par eksempler:

```{prf:eksempel}

Lad os kigge på udtrykket

$$

    2x-4
    
$$

for $x$ gående mod $2$. Det kan vi skrive som grænsen

$$

    \lim_{x\rightarrow 2} (2x-4) = 0

$$

Bemærk her, at vi aldrig sætter $x=2$, men betragter samtlige tilfælde af $x$, når værdierne nærmer sig $2$.

|   $x$     |   $1$ |   $1{,}5$ |   $1{,}8$ |   $1{,}95$    |   $1{,}999$   |
|-----------|-------|-----------|-----------|---------------|---------------|
|   $2x-4$  |   $-2$|   $-1$    |   $-0{,}4$|   $-0{,}1$    |   $-0{,}002$  |

Derfor er et kvalificeret bud på grænseværdien $0$. I dette tilfælde kan vi også se, at hvis $x=2$, så får vi også $2x-4=0$.

```

```{prf:eksempel}

Lad os kigge på funktionen

$$

    f(x)=\frac{1}{x^2}
    
$$

for $x$ gående mod $0$. Grænsen her er jo netop interessant, da vi ikke kan have $x=0$, men vi kan betragte, hvad der sker med funktionsværdierne, når $x$ nærmer sig $0$.

|   $x$     |   $-1$    |   $-0{,}5$    |   $-0{,}1$    |   $-0{,}01$   |   $0$   | $0{,}01$ |   $0{,}1$ |
|-----------|-----------|---------------|---------------|---------------|---------|---------|-----------|
|   $f(x)$  |   $1$     |   $4$         |   $100$       |   $10000$     | Ikke defineret |  $10000$ | $100$ |

Som tabellen og grafen indikerer, så eksploderer funktionsværdierne helt vildt op ad, når vi nærmer os 0. Grænseværdien er også

$$

    \lim_{x\rightarrow 0} f(x) = \infty

$$

Men, vi kan ikke skrive $f(0) = \infty$! For funktionen er slet ikke defineret i $x=0$. Det giver heller ikke mening at skrive $f(0)=\infty$, for så virker det som om, at vi betragter $\infty$ som et tal. Det ved vi fra forrige afsnit, hvor vi diskuterede netop dette.

```

## Højre og venstre grænseværdier

Vi skal være opmærksomme på, at grænseværdier godt kan være forskellige fra hinanden, alt efter hvilken side, vi betragter grænsen fra. Et godt eksempel er hyperblen givet ved forskriften

$$ 

    f(x) = \frac{1}{x}

$$

Hvis vi betragter grænsen, hvor vi lader $x$ går mod $0$, så får vi forskellige grænser alt efter, om vi går mod $0$ fra højre eller fra venstre. Betragter vi en grænse gående fra højre, så skriver vi

$$

    \lim_{x \rightarrow x_0^+} f(x) \ \text{eller}\ \lim_{x\searrow x_0} f(x)

$$

Ideen med den første skrive måde er, at gående fra højre er det samme som at komme gående fra den positive halvakse og dermed $+$'et, og den anden skrivemåde er gående ned mod, hvilket er ækvivalent til den første ide. Betragter vi en grænse gående fra venstre, så skriver vi

$$

    \lim_{x \rightarrow x_0^-} f(x) \ \text{eller}\ \lim_{x\nearrow x_0} f(x)

$$

Igen, ideen med den første skrive måde er, at gående fra venstre er det samme som at komme gående fra den negative halvakse og dermed $-$'et, og den anden skrivemåde er gående op mod, hvilket er ækvivalent til den første ide.

Nu kan vi prøve at anvende disse grænser på $f(x)=\frac{1}{x}$ til at se

$$

    \lim_{x \rightarrow 0^+} f(x) = \infty \ \text{og} \lim_{x \rightarrow 0^-} f(x) = -\infty

$$

```{figure} 1_x3.png
---
scale: 75 %
align: center
---
```

En grænse er ikke nødvendigvis unik. Her kan vi jo netop se, at alt efter hvilken side, vi går mod $0$, så får vi forskellige grænser. Det er derfor altid en god idé at vurdere de grænser, som du arbejder med.

```{prf:sætning} 

En grænseværdi $L$ for en funktion $f$ er unik i punkter $x_0$, hvis

$$

    \lim_{x \rightarrow x_0^-} f(x) = L = \lim_{x \rightarrow x_0^+} f(x)

$$

og dermed vil

$$

    \lim_{x \rightarrow x_0} f(x) = L.

$$

```

## Asymptoter

