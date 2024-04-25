(broeker)=
# Brøker
Som du nok husker tilbage fra folkeskolen, så er brøker en anden måde at skrive et divisionsstykke på. Men faktisk, så er selve brøken en form for et tal. Tal, der kan skrives som en brøk, kaldes et rationale tal og det kan du læse mere om i {ref}`Kapitel 2<maengdeteori_i>`. Vi kommer til at bruge begge måder at tolke en brøk på. Som oftest vil vi skrive divisionsstykker som en brøk, og ligeledes vil vi nogen gange skrive visse decimaltal som brøker. 

```{figure} broek.png
---
scale: 50 %
align: center
---
```

En brøk består af et tal over brøkstregen, *tælleren*, og et tal under brøkstregen, *nævneren*, der skal være forskellig fra 0. Det er vigtigt, at du kan finde ud af at regne med brøker, da vi kommer til at arbejde meget med disse. Derfor får du lige regnereglerne for brøkregning her:

```{prf:regneregler} Brøker

$$

    \frac{a}{b} = \frac{a\cdot c}{b\cdot c} \quad \frac{a}{b} = \frac{a:c}{b:c} = \frac{\frac{a}{c}}{\frac{b}{c}}
    \label{b0}\tag{B0}

$$

$$

    \frac{a}{n} \pm \frac{b}{n} = \frac{a \pm b}{n}
    \tag{B1}\label{b1}

$$

$$

    \frac{a}{b} \pm \frac{c}{d} = \frac{ad \pm bc}{bd}
    \tag{B2}\label{b2}
    
$$

$$

    \frac{a}{b} \cdot c = \frac{ac}{b} = c \cdot \frac{a}{b}
    \tag{B3}\label{b3}
    
$$

$$

    \frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd}
    \tag{B4}\label{b4}
    
$$

$$

    \frac{a}{b} : c = \frac{\frac{a}{b}}{c} = \frac{a}{bc} \quad c : \frac{a}{b} = \frac{c}{\frac{a}{b}} = \frac{bc}{a}
    \tag{B5}\label{b5}
    
$$

$$

    \frac{a}{b} : \frac{c}{d} = \frac{\frac{a}{b}}{\frac{c}{d}} = \frac{ad}{bc}
    \tag{B6}\label{b6}
    
$$

```

Regneregel $\eqref{b0}$ er den måde, som vi forlænger og forkorter en brøk på. Den bliver ret vigtig i de senere kapitler. Idéen med reglen er, at vi kan gange (eller dividere) alt med 1 uden, at det ændrer noget. For eksempel

$$

    \frac{1}{2} \cdot 1 = \frac{1}{2}

$$

eller

$$

    a \cdot 1 = a.

$$

Så vi kan tydelig vis se, at der ikke ændres på noget i udtrykket, når vi ganger med 1. Selve 1-tallet kan vi forklæde, som $\frac{c}{c}$, hvilket er det, som vi gør i regnereglen. Lad os overbevise os selv om dette. Hvor mange gange går 10 op i 10? Det gør det én gang, dvs.

$$

    \frac{10}{10} = 1

$$

Hvor mange gange går 34 og i 34? Det gør det én, dvs.

$$

    \frac{34}{34} = 1
    
$$

Hvor mange gange går $x$ op i $x$? Det gør det selvfølgelig også én gang, dvs. $\frac{x}{x}=1$ og det kan vi samle i regnereglen som $\frac{c}{c}=1$. Derfor kan vi forklæde vores 1-tal på den måde og derfor gælder $\eqref{b0}$.

Regnereglerne $\eqref{b1}$ og $\eqref{b2}$ er addition og subtraktion med og uden fællesnævner henholdsvis. 

Regnereglerne $\eqref{b3}$ og $\eqref{b4}$ er multiplikation af en brøk med et vilkårligt tal og multiplikation af to brøker.

Regnereglen $\eqref{b5}$ er division af en brøk med et vilkårligt tal og division af et vilkårligt tal med en brøk. Det kan være, at du undrer dig over, at man kan lave brøker i brøker, men husk på, at brøker jo altså bare en anden måde at skrive et divisionsstykke på.

Regnereglen $\eqref{b6}$ er division af en brøk med en brøk. Denne regel kaldes også "Junglereglen". Man kan forestille sig, hvordan nævneren i $\frac{c}{d}$ svinger sig op i tælleren på $\frac{a}{b}$ og tælleren i $\frac{c}{d}$ svinger sig op i nævneren på $\frac{a}{b}$. 

Lad os kigge på nogle eksempler:

```{prf:eksempel}

Lad os reducere følgende udtryk:

$$

    \frac{2x}{5} + \frac{x}{2}

$$

Vi bruger vores brøkregneregler:

$$

    \frac{2x}{5} + \frac{x}{2} \stackrel{\text{$\eqref{b2}$}}{=} \frac{2\cdot 2x+5x}{5\cdot 2} = \frac{4x+5x}{10} = \frac{9x}{10}

$$

Afslutningsvis kan vi konkludere, at det oprindelige udtryk kan reduceres til:

$$

    \frac{2x}{5} + \frac{x}{2} = \frac{9x}{10}

$$

```

Du kommer også til at skulle håndtere sværere udtryk.

```{prf:eksempel}

Lad os reducere følgende udtryk:

$$

    \frac{3x^2+9x}{x+3} + 2x

$$

Vi ser, at vi kan faktorisere $3x$ ud i tælleren og få:

$$

    \frac{3x^2+9x}{x+3} + 2x = \frac{3x\cancel{(x+3)}}{\cancel{x+3}} + 2x = 3x+2x = 5x,

$$

Ved at faktorisere nævneren kan vi se, at udtrykket i parentesen passer med det, der står i nævneren, hvorfor de går ud med hinanden. Afslutningsvis kan vi konkludere, at det oprindelige udtryk kan reduceres til:

$$

    \frac{3x^2+9x}{x+3} + 2x = 5x

$$

```

```{prf:eksempel}

Lad os reducere følgende udtryk:

$$

    \frac{4a+2b}{2} - \frac{2a-3b}{3}

$$

Vi kan se, at vi skal skabe fælles nævner:

$$
\begin{align*}
    \frac{4a+2b}{2} - \frac{2a - 3b}{3} &\stackrel{\text{$\eqref{b2}$}}{=} \frac{3(4a+2b)-2(2a-3b)}{2\cdot3} \\
    &= \frac{12a+6b-4a+6b}{6} \\
    &= \frac{8a+12b}{6} \\
    &\stackrel{\text{$\eqref{b1}$}}{=} \frac{8a}{6} + \frac{12b}{6} \\
    &\stackrel{\text{$\eqref{b0}$}}{=} \frac{8a:2}{6:2} + \frac{12b:6}{6:6} \\
    &= \frac{4a}{3} + 2b
\end{align*}
$$

Afslutningsvis kan vi konkludere, at det oprindelige udtryk kan reduceres til:

$$

    \frac{4a+2b}{2} - \frac{2a-3b}{3} = \frac{4a}{3} + 2b

$$

```

```{prf:eksempel} 
:label: broekhard

Lad os reducere følgende udtryk:

$$

    \frac{2a+1}{b}+\frac{1}{2b}-\frac{b-4ab}{2b^2} - \frac{2ab}{2b^2}

$$

Ved første øjekast, så ser dette jo totalt uoverskueligt ud, men vi skal bare gøre én ting ad gangen. Vi kan starte med at se, at vi kan bruge regneregel $\eqref{b1}$ på

$$ 

    -\frac{b-4ab}{2b^2} - \frac{2ab}{2b^2}

$$

og reducere:

$$

    -\frac{b-4ab}{2b^2} - \frac{2ab}{2b^2} \stackrel{\text{$\eqref{b1}$}}{=} \frac{-(b-4ab)-2ab}{2b^2} = \frac{-b+4ab-2ab}{2b^2} = \frac{-b-2ab}{2b^2} = \frac{-(b+2ab)}{2b^2}.

$$

Her brugte vi også vores viden omkring minusparenteser. Vi samler nu det oprindelige udtryk til:

$$

    \frac{2a+1}{b} + \frac{1}{2b} - \frac{b+2ab}{2b^2}

$$

Lad os nu kigge på:

$$

    \frac{2a+1}{b} + \frac{1}{2b}

$$

og indse, at vi får en fællesnævner $2b$, hvis vi forlænger første led med $2$:

$$

    \frac{2a+1}{b} - \frac{1}{2b} \stackrel{\text{$\eqref{b0}$}}{=} \frac{2(2a+1)}{2b} + \frac{1}{2b}  \stackrel{\text{$\eqref{b1}$}}{=} \frac{2(2a+1)+1}{2b} = \frac{4a+2+1}{2b} = \frac{4a+3}{2b}

$$

Vi indsætter nu også dette i det gamle udtryk:

$$

    \frac{4a+3}{2b}-\frac{b+2ab}{2b^2}

$$

Igen kan vi indse, at vi får en fællesnævner $2b^2$, hvis vi forlænger første led med $b$:

$$
\begin{align*}
    \frac{4a+3}{2b} - \frac{b+2ab}{2b^2} &\stackrel{\text{$\eqref{b0}$}}{=} \frac{b(4a+3)}{2b\cdot b} - \frac{b+2ab}{2b^2} \\
    &\stackrel{\text{$\eqref{b1}$}}{=} \frac{b(4a+3)-(b+2ab)}{2b^2} \\
    &= \frac{4ab+3b-b-2ab}{2b^2} \\
    &= \frac{2ab+2b}{2b^2}
\end{align*}
$$

Vores oprindelige udtryk er nu blevet reduceret til

$$

    \frac{2ab+2b}{2b^2},

$$

hvilket jo ser pænt ud, men er vi færdige med at reducere? Nej, vi kan se, at vi kan faktorisere et $b$ ud i tælleren, som vil gå ud med et af de $b$'er, der er i nævneren:

$$

    \frac{2ab+2b}{2b^2} = \frac{b(2a+2)}{2b^2} = \frac{2a+2}{2b} 

$$

$b$'et i tælleren spiser et af $b$'erne, der er ganget på i nævneren, for husk nu, at $b^2 = b\cdot b$. Er vi færdige nu? Nej, for vi kan faktisk også faktorisere et $2$-tal ud i tælleren:

$$

    \frac{2a+2}{2b} = \frac{2(a+1)}{2b} = \frac{a+1}{b} 

$$

De sidste to steps kunne vi også have gjort i ét step, hvor vi faktoriserede $2b$ ud. Men, her er det gjort opdelt, så du vænner dig til idéen om at faktorisere noget ud i tælleren, så det går ud med noget fra nævneren. 

Afslutningsvis kan vi konkludere, at det oprindelige udtryk kan reduceres til:

$$

    \frac{2a+1}{b}+\frac{1}{2b}-\frac{b-4ab}{2b^2} - \frac{2ab}{2b^2} = \frac{a+1}{b} 

$$

```

Går vi tilbage til {prf:ref}`broekhard<broekhard>`, så er det vigtigt, at du husker: Tal går først ud med hinanden, når "der ganges"

$$

    \frac{2b+2}{2b} \neq 2

$$

men

$$

    \frac{2b \cdot 2}{2b} = 2.

$$

## Opgaver

```{prf:opgave}

Reducer følgende udtryk og forklar undervejs hvilke regneregler, du bruger:

&nbsp; &nbsp; a) $\frac{2x}{3} + \frac{3x}{2}$ \
&nbsp; &nbsp; b) $\frac{3x}{2} + \frac{7x}{2} - x$ \
&nbsp; &nbsp; c) $\frac{x}{2} + \frac{x}{4} + x$ \
&nbsp; &nbsp; d) $\frac{x+2}{2} + \frac{2x}{4}$ 

```

```{prf:opgave}

Reducer følgende udtryk og forklar undervejs hvilke regneregler, du bruger:

&nbsp; &nbsp; a) $2x\cdot\frac{3}{2}$ \
&nbsp; &nbsp; b) $9\cdot\frac{2x^2}{3}$ \
&nbsp; &nbsp; c) $\frac{3x}{2}:x$ \
&nbsp; &nbsp; d) $\frac{x}{2}\cdot\frac{2x}{4}$ 

```

```{prf:opgave}

Reducer følgende udtryk og forklar undervejs hvilke regneregler, du bruger:

&nbsp; &nbsp; a) $\frac{x^2+4x}{x}$ \
&nbsp; &nbsp; b) $\frac{2x+4x^2}{2x}$ \
&nbsp; &nbsp; c) $\frac{3x^3-9x^2+3x}{x}$ \
&nbsp; &nbsp; d) $\frac{8x+2}{x+4}$ 

```

```{prf:opgave}

Reducer følgende udtryk og forklar undervejs hvilke regneregler, du bruger:

&nbsp; &nbsp; a) $\frac{3a+4b}{2}+\frac{2a}{4}$ \
&nbsp; &nbsp; b) $\frac{a-3b+1}{3}+\frac{a+2}{3}$ \
&nbsp; &nbsp; c) $\frac{-2(a-b)}{4}+\frac{3a-2b}{3}$ \
&nbsp; &nbsp; d) $\frac{3(3b-a)+2a}{2}+\frac{2b}{4}$ 

```

```{prf:opgave}

Reducer følgende udtryk og forklar undervejs hvilke regneregler, du bruger:

&nbsp; &nbsp; a) $\frac{1}{a}+\frac{1}{2a}+\frac{3}{2a}$ \
&nbsp; &nbsp; b) $\frac{2a}{4}+\frac{a}{2b}-\frac{ab}{4b}$ \
&nbsp; &nbsp; c) $\frac{3}{2}+\frac{6(a+ab)}{2ab}+\frac{12b}{4a}$ \
&nbsp; &nbsp; d) $\frac{4a}{2b}+\frac{a-6b}{6b^2}-\frac{4}{b}$ 

```