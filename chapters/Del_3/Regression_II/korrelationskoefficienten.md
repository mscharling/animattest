# Korrelationskoefficienten II

I {numref}`Kapitel %s<ch-korrelationskoefficienten_i>` stiftede vi bekendtskab med korrelationskoefficienten $\rho$. Vi vil i dette kapitel forsøge at komme denne størrelse lidt nærmere matematisk og ligeledes se, hvordan denne kan estimeres med data.

# Kovarians

I {numref}`Kapitel %s<ch-momenter>` lærte vi om momenterne for en stokastisk variabel med en underliggende sandsynlighedsfordeling. Når vi arbejder med to variabler simultant, så kan det være, at variablerne varierer med hinanden. Det var blandt andet det, som vi så i {prf:ref}`hoejde-og-skostoerrelse-scatter` med elevers højde og skostørrelse. Bruger vi terminologien fra {numref}`Kapitel %s<ch-stokastiske-variabler-ii>`, så var undersøgelsen fra {prf:ref}`hoejde-og-skostoerrelse-scatter` observationer, eller snarere *realisationer*, fra to stokastiske variabler $(X,Y)$. Vi kender ikke de sande fordelinger bag disse to variabler, men vi kan estimere dem med antagelser og data.

Lad $X$ og $Y$ være to stokastiske variabler, da er kovariansen mellem disse givet ved

$$

    \text{Cov}(X,Y) = \mathbb{E}[(X-\mathbb{E}[X])(Y - \mathbb{E}[Y])].

$$ (eq:kovarians1)

Ganger vi de to parenteser sammen og bruger regnereglerne for første momentet, får vi, at kovariansen også kan skrives som

$$

    \text{Cov}(X,Y) = \mathbb{E}[XY] - (\mathbb{E}[X]\mathbb{E}[Y])^2.

$$ (eq:kovarians2)

Vi regner korrelationskoefficienten som

$$

    \rho = \text{Corr}(X,Y) = \frac{\text{Cov}(X,Y)}{\sqrt{\text{Var}(X)\text{Var}(Y)}}.

$$ (eq:korrelationskoefficienten-def)

Den sande korrelation mellem de to variabler er altså bestemt af momenterne for de underliggende fordelinger.

## Estimation af korrelationskoefficient

Som vi lærte i Kapitel ??.?, så kan vi estimere vores momenter for stokastiske variabler empirisk.

Lad $x_1,x_2,\dots,x_n$ være realiserede observationer fra en stokastisk variabel $X$. Da har vi følgende estimatorer for momenterne for $X$:

$$

    \mathbb{E}[X]:\qquad \bar{x} = \frac{1}{n}\sum_{i=1}^n x_i,

$$ (eq:foerste-moment-est)

$$

    \text{Var}(X):\qquad \hat{\sigma}^2 = \frac{1}{n}\sum_{i=1}^n (\bar{x}-x_i)^2.

$$ (eq:andet-moment-est)

Ligning {eq}`eq:foerste-moment-est` er gennemsnittet, som er den empiriske estimator for middelværdien og {eq}`eq:andet-moment-est` er stikprøvevariansen, som er den empiriske estimator for variansen. Kigger vi på {eq}`eq:kovarians2`, bliver det også klart, at den empiriske estimator for kovariansen er:

$$

    \text{Cov}(X,Y):\qquad \widehat{\text{Cov}}(X,Y) = \frac{1}{n}\sum_{i=1}^n (\bar{x}-x_i)(\bar{y}-y_i).

$$ (eq:kovarians-moment-est)

Nu har vi alt, hvad vi skal bruge for at kunne estimere korrelationskoefficienten empirisk. Indsætter vi disse estimatorer, får vi den empiriske estimator for korrelationskoefficienten:

$$

    \hat{\rho} = \frac{\widehat{\text{Cov}}(X,Y)}{\sqrt{\hat{\sigma}^2_X \hat{\sigma}^2_Y}}.

$$ (eq:korrelationskoefficient-est)

Det er også denne formel, som dit CAS-værktøj bruger for at udregne korrelationskoefficienten for din data.