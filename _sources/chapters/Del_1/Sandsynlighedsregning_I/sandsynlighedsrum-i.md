# Sandsynlighedsrum

Et sandsynlighedsrum er en kompliceret matematisk konstruktion, der formaliserer eksperimentet. I målteorien består et matematisk rum af tre elementer - og et sandsynlighedsrum består af følgende:

1. Et udfaldsrum $U$, der er mængden af eksperimentets udfald.
2. Et hændelsesrummet $\mathcal{H}$, der er mængden af samtlige hændelser i eksperimentets udfaldsrum. 
3. En sandsynlighedsfunktion $\mathbb{P}(\,\cdot\,)$, der kan tildele en sandsynlighed, et tal mellem 0 og 1, til enhver hændelse i hændelsesrummet.

Vi skriver normalt et sandsynlighedsrum som tripletten $(U,\mathcal{H},\mathbb{P})$, men vi vil i vores gennemgang ignorere hændelsesrummet $\mathcal{H}$ idet, at det er en meget abstrakt konstruktion. Hændelsesrummet er nemlig en mængde af mængder, også kaldt en *$\sigma$-algebra* (læses sigma-algebra) og er ikke noget, som vi vil beskæftige os med i denne bog. Vi vil derfor kun fortsætte med dubletten $(U,\mathbb{P})$ som sandsynlighedsrummet. Det leder os til definitionen:

```{prf:definition}
:label: endeligt-sandsynlighedsrum

Lad $U=\{u_1,u_2,\dots,u_n\}$ være udfaldsrummet for et eksperiment, og $p_1,p_2\dots,p_n$ være de tilhørende sandsynligheder,

$$

    \mathbb{P}(u_1)=p_1,\ \mathbb{P}(u_2)=p_2,\ \dots,\ \mathbb{P}(u_n)=p_n,

$$

sådan at

1. sandsynlighederne $p_1,p_2,\dots,p_n\in[0,1]$, og 
2. sandsynlighederne $p_1+p_2+\cdots+p_n = 1$.

Da kaldes $(U,\mathbb{P})$ et *endeligt sandsynlighedsrum*.

```

Husk, at punkt 1 i {prf:ref}`endeligt-sandsynlighedsrum<endeligt-sandsynlighedsrum>` betyder blot, at alle sandsynlighederne skal være et tal mellem 0 og 1, hvor 0 og 1 er inkluderet. Hvis én af sandsynlighederne er lig 1, så må de resterende naturligvis være 0, for ellers gælder punkt 2 ikke.

Vi kalder sandsynlighedsrummet i {prf:ref}`endeligt-sandsynlighedsrum<endeligt-sandsynlighedsrum>` for *endeligt*, da udfaldsrummet består af et endeligt antal udfald. Vi vil senere beskæftige os med sandsynlighedsfordelinger, der har uendeligt mange udfald, hvilket giver anledning til en anden version af {prf:ref}`endeligt-sandsynlighedsrum<endeligt-sandsynlighedsrum>`.

Hvis $p_1,p_2,\dots,p_n$ alle er lig hinanden, da har vi med et *symmetrisk sandsynlighedsrum* at gøre:

```{prf:definition}
:label: symmetrisk-sandsynlighedsrum

Lad $U=\{u_1,u_2,\dots,u_n\}$ være udfaldsrummet for et eksperiment, og $p_1,p_2\dots,p_n$ være de tilhørende sandsynligheder. Hvis 

$$

    p_1 = p_2 = \cdots = p_n = \frac{1}{n},

$$

da kaldes $(U,\mathbb{P})$ et *symmetrisk sandsynlighedsrum*.

```

For eksperimentet med kortspillets kulører (uden jokere), da har vi udfaldsrummet $U=\{\text{♠},\text{♥},\text{♣},\text{♦} \}$. Sandsynligheden for at trække et kort, der er en hjerter, er statistisk set $\frac{13}{52}=\frac{1}{4}$, og det passer præcis med, at det er ét udfald af fire mulige udfald:

$$

    \mathbb{P}(\text{♥}) = \frac{1}{4}.

$$

I et symmetrisk sandsynlighedsrum har vi dermed også, at sandsynligheden for en hændelse $A$ bestående af $k$ gunstige udfald ud af $n$ mulige udfald i udfaldsrummet $U$ er 

$$

    \mathbb{P}(A) = \frac{1}{n} + \frac{1}{n} + \cdots + \frac{1}{n} = \frac{k}{n}.

$$

Dette er den mere formalistiske version af {eq}`apriorissh`.

## Opgaver
