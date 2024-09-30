# Tre-trinsreglen

Vi vil, inden vi opskriver tre-trinsreglen, gå i dybden med elementerne af reglen.

Givet er funktionen $f$, og vi er interesseret i at finde tangentens hældning i $(x_0,f(x_0))$. Vi vælger dernæst et vilkårligt nabopunkt, som vi kalder $(x,f(x))$, og kigger på afstanden mellem vores to $x$-koordinater, $x_0$ og det vilkårlige $x$. Denne afstand kalder vi $\Delta x$:

$$

    \Delta x = x - x_0

$$

$\Delta$ er et græsk bogstav og udtales "delta" og bruges især i sammenhænge med afstande. Det betyder også, at vores vilkårlige punkt $x$ kan udtrykkes i termer af vores interessante punkt $x_0$ plus en eller anden afstand $\Delta x$:

$$

    x = x_0 + \Delta x

$$

På den måde bliver vores vilkårlige nabopunkt til $(x_0+\Delta x, f(x_0+\Delta x))$. 

## Funktionstilvækst

Vi har nu to punkter: Det interessante punkt $(x_0, f(x_0))$ og det vilkårlige nabopunkt $(x_0+\Delta x, f(x_0+\Delta x))$. Ligesom vi kan betragte en afstand mellem vores $x$-koordinater, så kan vi også betragte afstanden mellem de korresponderende funktionsværdier. Denne afstand vil vi kalde $\Delta y$ og benævne *funktionstilvæksten*:

$$

    \Delta y = f(x_0+\Delta x) - f(x_0)

$$

## Differenskvotient

Mellem vores to punkter kan vi trække en sekant. Fra forrige afsnit ved vi, at sekantens hældningskoefficient kan findes ved to-punktsformlen:

$$

    a = \frac{f(x_2)-f(x_1)}{x_2-x_1}

$$

Bemærk, at både tæller og nævner er afstande. Sammenholder vi formlen med vores opsætning, så får vi, at sekantens hældningskoefficient kan findes ved

$$

    a = \frac{\Delta y}{\Delta x} = \frac{f(x_0+\Delta x)-f(x_0)}{\Delta x},

$$

hvor vi har indsat funktionstilvæksten fra før. Vi kalder 

$$

    \frac{\Delta y}{\Delta x} = \frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}

$$

for *differenskvotienten* og er altså blot hældningen for den sekant, der går gennem de to punkter $(x_0,f(x_0))$ og $(x_0+\Delta x,f(x_0+\Delta x))$.

## Differentialkvotient

Nu vil vi betragte sekanten, når vi lader nabopunktet bevæge sig mod vores interessante punkt, $(x_0,f(x_0))$. Til sidst, når punkterne ligger oven i hinanden, så vil sekanten blive til en tangent i punktet. Ligesom vi ikke kan adskille $1$ fra $0{,}999...$, så vil vi i stedet lade nabopunktet komme infinitesimalt tæt på det interessante punkt. Måden vi gør det, er ved at lade afstanden $\Delta x$ blive mindre og mindre, og til sidst infinitesimal. Sagt på en anden måde, vi vil lade $\Delta x$ gå mod 0. 

Eftersom det er tangenthældningen i punktet $(x_0,f(x_0))$, vi er interesseret i, så skal vi altså blot betragte differenskvotienten $\frac{\Delta y}{\Delta x}$, når $\Delta x$ går mod 0:

$$

    \lim_{\Delta x \rightarrow 0} \frac{\Delta y}{\Delta x}

$$

Denne grænse kaldes for *differentialkvotienten*. Tangentens hældning til grafen i $x_0$ vil også afhænge af, hvad det interessante punkt er. Derfor er differentialkvotienten igen en funktion:

$$

    f'(x_0) = \lim_{\Delta x \rightarrow 0} \frac{\Delta y}{\Delta x} 

$$

Vi udtaler $f'(x_0)$ som "$f$ mærke af $x_0$". $f'(x_0)$ er altså tangentens hældning til grafen i punktet $(x_0,f(x_0))$. Men eftersom vi kan betragte ethvert punkt på grafen, så får vi altså funktionen $f'(x)$, som vi kalder den *afledte funktion*. 

## Tre-trinsreglen

Vi kan nu samle de ovenstående afsnit i vores tre-trinsregel:

```{prf:regneregler} Tre-trinsreglen

**Trin 1:** Funktionstilvækst

$$

    \Delta y = f(x_0 + \Delta x) - f(x_0)

$$ 

**Trin 2:** Differenskvotient

$$

    \frac{\Delta y}{\Delta x} = \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}

$$

**Trin 3:** Differentialkvotient

$$

    f'(x_0) = \lim_{\Delta x \rightarrow 0} \frac{\Delta y}{\Delta x} 

$$

```

Lad os kigge på nogle eksempler.

```{prf:eksempel}

Givet er funktionen $f(x)=x^2$ og vi skal bestemme tangentens hældning i $(2,f(2))$. 

Vi bruger tre-trinsreglen direkte med $x_0$ og kan derefter indsætte $x_0 = 2$. 

**Trin 1:** Funktionstilvækst

$$
\begin{align*}
\Delta y &= f(x_0 + \Delta x) - f(x_0) \\
    &= (x_0 + \Delta x)^2 - x_0^2 \\
    &= \cancel{x_0^2} + \Delta x^2 + 2x_0\Delta x \cancel{- x_0^2} \\
    &= \Delta x^2 + 2x_0 \Delta x
\end{align*}
$$

**Trin 2:** Differenskvotient

$$
\begin{align*}
\frac{\Delta y}{\Delta x} &= \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x} \\
    &= \frac{\Delta x^2 + 2x_0 \Delta x}{\Delta x} \\
    &= \frac{\cancel{\Delta x} (\Delta x + 2x_0)}{\cancel{\Delta x}} \\
    &= \Delta x+2x_0 
\end{align*}
$$

**Trin 3:** Differentialkvotient

$$
f'(x_0) &= \lim_{\Delta x \rightarrow 0} \frac{\Delta y}{\Delta x} \\
    &= \lim_{\Delta x \rightarrow 0} \Delta x+2x_0 \\
    &= 2x_0
$$

Dermed er funktionen, der beskriver tangenthældningerne til grafen for $f$, givet ved $f'(x)=2x$. Tangentens hældning i $(2,f(2))$ må derfor være $f'(2)=2\cdot 2 = 4$.

```