# En kort introduktion til integralregning
Integralregning kan virke som en kompleks gren af matematik, men det er et utroligt nyttigt værktøj i mange anvendelser, herunder sandsynlighedsregning. I dette kapitel vil vi se, hvordan integralregning kan hjælpe os med at forstå tæthedsfunktioner og fordelingsfunktioner i sandsynlighedsregning. 

## Hvad er et integral?
I enkelte termer er et integral en måde på at finde arealet under en kurve i et bestemt område. Dette område kan repræsentere mange forskellige ting, afhængig af konteksten, men i sandsynlighedsregning er det ofte sandsynligheden for, at en stokastisk variabel falder inden for et bestemt interval. Vi vender tilbage til dette i senere afsnit.

```{figure} integral_areal.png
:width: 60%
```

Matematisk skriver vi det *bestemte integral* som:

$$

    \int_a^b f(x)\ \text{d}x.

$$

Her er $\int$ integraltegnet, som sammen det afgrænsede område, vist med $a$ og $b$, angiver, at vi vil finde arealet under funktionen $f$ af netop det afgrænsede område. Ligesom i Kapitel xx (Differentialregning) angiver $\text{d}x$, den infinitesimale ændring i $x$. 

## Stamfunktion
Faktisk er integralregning den "modsatte regneoperation" af differentiation. I differentialregning ønskede vi at finde en afledet funktion ud fra en givet funktion. I integralregning har man givet en funktion, som man antager allerede er en afledet funktion. Med integralregning vil vi gerne finde den funktion, som vores givne funktion er afledet fra. Denne funktion kaldes *stamfunktionen*. Stamfunktioner betegnes med store bogstaver, så hvis vores oprindelige funktion er $f$, så betegner vi dens stamfunktion(er) med $F$. Det vil sige, at hvis $F$ er stamfunktion til $f$, så får vi $f$ ved at differentiere $F$, med andre ord

$$

    F'(x) = f(x).

$$

Hvis vi har givet funktionen $f(x)=2x+4$, så kan vi gætte på, at en stamfunktion til $f$ er

$$

    F(x) = x^2 + 4x.

$$

Dette kan vi kontrollere ved at anvende "integrationstesten", hvor vi blot differentierer stamfunktionen for at se, om vi får vores oprindelige funktion:

$$

    F'(x) = (x^2 + 4x)' = (x^2)' + (4x)' = 2x + 4 = f(x).

$$

Hermed har vi vist, at $F(x)=x^2+4x$ er en stamfunktion til $f$. Men bemærk her, at vi skriver "en stamfunktion". Faktisk findes der uendeligt mange stamfunktioner til $f$. Et andet validt eksempel på en stamfunktion kunne være $F(x) = x^2+4x+5$, for hvad sker der, når vi differentierer konstanter? 

$$

    F'(x) = (x^2 + 4x + 5)' = (x^2)' + (4x)' + (5)' = 2x + 4 + 0 = 2x + 4 = f(x).

$$

Funktionen $f(x)=2x+4$ har uendeligt mange stamfunktioner, der adskilles ved den konstant, der lægges til. Derfor kan vi angive samtlige stamfunktioner på én gang ved at lægge en såkaldt *arbitrær* konstant $k$ til:

$$

    F(x) = x^2 + 4x + k.

$$

At konstanten er arbitrær, betyder blot at den kan være hvad som helst, med andre ord, $k\in\mathbb{R}$.

Når vi finder samtlige stamfunktioner til en funktion, så svarer det faktisk til at beregne det *ubestemte integral*, hvor vi ikke angiver et integrationsområde, som ved det bestemte integral:

$$

    F(x) = \int f(x)\ \text{d}x.

$$

Vi skal altid huske at lægge den arbitrære konstant til, når vi finder samtlige stamfunktioner til en funktion!

Nedenfor er en liste over stamfunktioner til forskellige funktioner:

| Funktion $f(x)$  | Stamfunktion $F(x)$      |
| ---------------- | -------------------      | 
| $c$              | $cx+k$                   |
| $ax^n$           | $\frac{a}{n+1}x^{n+1}+k$ |
| $\frac{a}{x}$    | $a\,\ln(\lvert x \rvert)+k$          |
| $ba^x$           | $\frac{b}{\ln(a)} a^x+k$ |
| $\text{e}^{bx}$  | $b\text{e}^{bx}+k$       |
| $\ln(x)$         | $x\ln(x)-x+k$            |

## Infinitesimalregnings Hovedsætning
Vi vil nu sammensætte det, som vi har lært omkring ubestemte og bestemte integraler. 

```{prf:sætning}
:label: infinitesimalregningenshovedsaetning

Hvis $F$ er stamfunktion til $f$, det vil sige, at den opfylder relationen $F'(x)=f(x)$, og $f$ er kontinuert på intervallet $[a,b]$, da gælder 

$$

    \int_a^b f(x)\ \text{d}x = F(b)-F(a).

$$

```

Dette er en hel central sætning i hele infinitesimalregningen. Det betyder nu også, at vi har en måde at beregne arealet under kurver ved brug af stamfunktioner. Dette bliver vigtigt i vores videre forståelse af sandsynlighedsteorien. 

```{prf:eksempel}
:label: arealunderkurve

Areal under $f(x)=-2x^2 - 8x + 2$

```
