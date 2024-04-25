(grundlaeggendebegreber)=
# Grundlæggende begreber

Når du arbejder med statistik, så er der en masse begreber, du skal have styr på. De er vigtige for at kunne formidle, hvad det er for noget statistik, som man laver og arbejder med.

## Data og observationer
For at kunne udføre deskriptiv statistik, så bliver vi nødt til at have en samling af information at lave det på. Samling af information kaldes også *data*, der både kan bestå af tal, ord eller billeder. For at få data laver man ofte en dataindsamling. Det kan ske gennem undersøgelser, hvor man forinden har defineret den data, som man er interesseret i. Derfor bliver data ofte en masse målinger af bestemte variabler. Målingerne, som vi får ind kalder vi også for *datapunkter* eller *observationer*. Det er observationerne, som vi bruger til at sige noget om det data, der er blevet indsamlet. 

## Population og stikprøve

Forestil dig nu igen, at du ønsker at sige noget om den gennemsnitlige højde for elever på din skole. I stedet for at måle højden på alle eleverne på din skole, så kunne man nøjes med at måle eleverne for en klasse på hver årgang. Vi skelner her mellem *populationen* og en *stikprøve*. Du er interesseret i at sige noget generelt om alle eleverne på din skole, der er populationen, men du udtager kun en klasse fra hver årgang, der agerer din stikprøve. 

```{exercise}
:class: dropdown

I det tænkte eksempel nævnes det, at vi kunne nøjes med at måle eleverne for en klasse på hver årgang. Hvorfor er det en god idé?

```

Den gruppe, som vi er interesseret i at sige noget omkring, kalder vi altså *populationen* og de personer, der optræder i vores undersøgelse, kalder vi *stikprøven*. 

## Hyppighed og frekvens

To begreber, du sikkert også har stødt på i folkeskolen, er hyppighed og frekvens. Datasættet for vores stikprøve indeholder en masse observationer, og der er det af stor betydning for de forskellige statistiske deskriptorer, hvad hyppigheden og frekvensen for en observation er. 

Forestil dig, at du har indsamlet observationerne 

$$

    x_1,x_2,...,x_n.

$$ 

Her er $x$'erne blot pladsholdere for vores observationer. Det betyder også, at vi godt kan have, at $x_1 = x_2 = x_6 = x_{11}$, altså fire af den samme observation. Af dette datasæt kan vi se, at vi har $n$ observationer. Vi siger derfor, at $n$ er stikprøvens størrelse. Hyppigheden af hver observation benævner vi 

$$

    h_i = h(x_i),

$$

der blot fortæller, hvor mange gange observationen forekommer i stikprøven. Du kan derfor tænke på $h$ som værende en funktion, der tæller hvor mange gange observationen $x_i$ fremkommer i hele stikprøven. 

Vi definerer frekvensen som den relative forekomst af en observation:

$$

    f_i = \frac{h_i}{n} \tag{11.1}\label{a0}

$$

Dvs. frekvensen er den brøkdel eller procentdel, som en observation forekommer i stikprøven. Hvis en observation har frekvens 50 %, så betyder det, at 50 % af vores stikprøve består af den observation. 

```{prf:eksempel} Karakterer
:label: karakterereksempel
En klasse med 20 elever har fået følgende karakterer i Matematik B:

$$

    4, 4, 10, 02, 12, 12, 7, 7, 7, 12, 4, 10, 7, 7, 02, 7, 10, 10, 7, 7

$$

Vi kan se, at de forskellige observationer er: $02, 4, 7, 10, 12$. Vi kan nu opstille en hyppighedstabel, der viser hyppigheden $h_i$ af hver observation og frekvensen $f_i$. 

| Observation $(x_i)$   | Hyppighed $(h_i)$   | Frekvens $(f_i)$               |
| --------------------- | ------------------- | ------------------------------ |
| $02$                  | $2$                 | $\frac{2}{20} = 0{,}1$         |
| $4$                   | $3$                 | $\frac{3}{20} = 0{,}15$        |
| $7$                   | $8$                 | $\frac{8}{20} = 0{,}4$         |
| $10$                  | $4$                 | $\frac{4}{20} = 0{,}2$         |
| $12$                  | $3$                 | $\frac{3}{20} = 0{,}15$        |
| **I alt**             | $20$                | $1$                            |


```

For at lave en kobling til den lidt mere abstrakte repræsentation af observationerne fra før, så kan vi lade $x_1 = 02$, $x_2 = 4$, $x_3 = 7$, $x_4 = 10$ og $x_5 = 12$ i {prf:ref}`karakterereksempel<karakterereksempel>` fra før. 

## Kumuleret frekvens

Den kumuleret frekvens kaldes også den summeret frekvens, og er blot frekvensen lagt sammen med summen af de foregående frekvenser. Den kumuleret frekvens for en observation er derfor andelen af observationer i stikprøven, der er mindre end eller lig med observationen. Vi benævner den kumuleret frekvens med $F_i$ og definerer den som:

$$

    F_i = F_{i-1} + f_i \tag{11.2}\label{a1}

$$

Dette er et eksempel på det, der kaldes en *rekursionsligning* og vi kan se, at 

$$
\begin{align*}
F_i     &= F_{i-1} + f_i \\
        &= \underbrace{F_{i-2} + f_{i-1}}_{=F_{i-1}} + f_i \\
        &= \underbrace{F_{i-3} + f_{i-2}}_{=F_{i-2}} + f_{i-1} + f_i \\
        &\ \ \vdots \\
        &= f_1 + f_2 + \cdots + f_{i-2} + f_{i-1} + f_i 
\end{align*}
$$

ved blot at indsætte udtrykket for $F_i$ fra $\eqref{a1}$, hvor vi gennemløber vores forskellige $i$'er. Udtrykket ved sidste lighed er en sum af (potentielt) mange led og, som vi har fået etableret, så kan matematikere godt lide at være dovne. Vi skriver disse sum-rækker som:

$$

    F_i = f_1 + f_2 + \cdots + f_{i-2} + f_{i-1} + f_i = \sum_{k=1}^{i} f_k \tag{11.3}\label{a2}

$$

Vi kan også definere det, som vi kalder *kumuleret hyppighed*, der blot er hyppigheden lagt sammen med summen af de foregående hyppigheder. Den kumuleret hyppighed benævner vi med $H_i$ og er defineret som:

$$

    H_i = H_{i-1} + h_i \tag{11.4}\label{a3}

$$

Dette er ligeså et eksempel på en rekursionsligning og vi kan på samme måde som før vise, at 

$$ 

    H_i = h_1 + h_2 + \cdots + h_{i-1} + h_i = \sum_{k=1}^i h_k \tag{11.5}\label{a4}

$$

```{exercise}
:class: dropdown

Vis, at du kan komme frem til identiteten i $\eqref{a4}$ ved brug af samme fremgangsmetode som i udledningen af identiteten i $\eqref{a2}$.

```

Går vi tilbage til den måde, som vi definerede frekvens på i $\eqref{a0}$, så kan vi se, at vi kan udtrykke den kumuleret frekvens ved hjælp af den kumuleret hyppighed. Vi kan se, at 

$$

    F_i = \sum_{k=1}^{i} f_k = \sum_{k=1}^{i} \frac{h_k}{n}. 

$$

Vi kan nu faktorisere $\frac{1}{n}$ ud foran vores sum, så vi får

$$

    F_i = \frac{1}{n}\sum_{k=1}^{i} h_k = \frac{H_i}{n} \tag{11.6}\label{a5},

$$

hvor $H_k$ er den kumuleret hyppighed. Vi har derfor flere måder at udregne den kumuleret frekvens på. Det er ikke altid lige interessant at finde den kumuleret hyppighed, så oftest vil du kunne nøjes med at finde den kumuleret frekvens. Øvelsen her viser dog, at når vi summerer vores frekvenser, så kan vi stadig skrive den kumuleret frekvens på fuldstændig samme form som selve frekvensen:

$$

    f_i = \frac{h_i}{n}\qquad\qquad F_i = \frac{H_i}{n}

$$

```{exercise}
:class: dropdown

Vi har påstået, at 

$$

    \sum_{k=1}^{i} \frac{h_k}{n} = \frac{1}{n} \sum_{k=1}^{i} h_k,

$$ 

hvilket kan fås ved faktorisering. Vis ved at skrive summen ud, at dette er rigtigt.

<details>
<summary>Hint</summary>
<p>

Kig på summen:

$$

    \sum_{k=1}^{i} \frac{h_k}{n} = \frac{h_1}{n} + \frac{h_2}{n} + \cdots + \frac{h_{i-1}}{n} + \frac{h_i}{n}

$$

</p>
</details>

```

```{prf:eksempel} Karakterer - fortsat
:label: karakterereksempel2
Vi fortsætter med datasættet fra {prf:ref}`karakterereksempel<karakterereksempel>` og udvider vores tabel med den kumuleret frekvens. Den kumuleret frekvens af vores første observation er blot lig frekvensen, så $F_1 = 0{,}1$. Nu kan vi bruge vores formel. 

$$
\begin{align*}
    F_2 &= F_1 + f_2 = 0{,}1 + 0{,}15 = 0{,}25 \\
    F_3 &= F_2 + f_3 = 0{,}25 + 0{,}4 = 0{,}65 \\
    F_4 &= F_3 + f_4 = 0{,}65 + 0{,}2 = 0{,}85 \\
    F_5 &= F_4 + f_5 = 0{,}85 + 0{,}15 = 1 
\end{align*}
$$

| Observation $(x_i)$   | Hyppighed $(h_i)$   | Frekvens $(f_i)$               | Kumuleret frekvens $(F_i)$ |
| --------------------- | ------------------- | ------------------------------ | -------------------------- |
| $02$                  | $2$                 | $\frac{2}{20} = 0{,}1$         | $0{,}1$                    |
| $4$                   | $4$                 | $\frac{4}{20} = 0{,}2$         | $0{,}1 + 0{,}15 = 0{,}25$    |
| $7$                   | $7$                 | $\frac{7}{20} = 0{,}35$        | $0{,}25 + 0{,}4 = 0{,}65$  |
| $10$                  | $4$                 | $\frac{4}{20} = 0{,}2$         | $0{,}65 + 0{,}2 = 0{,}85$  |
| $12$                  | $3$                 | $\frac{3}{20} = 0{,}15$        | $0{,}85 + 0{,}15 = 1$      |
| **I alt**             | $20$                | $1$                            |                            |

```

Som du kan se af {prf:ref}`karakterereksempel2<karakterereksempel2>`, så har den højeste observation en kumuleret frekvens på $1$. Det er vigtigt. Den kumuleret frekvens af observationen $12$ skal selvfølgelig være $1$, da alle observationer er mindre end eller lig med $12$ og derfor udgør hele vores datasæt. Derudover kan vi af skemaet aflæse, at 65 % af eleverne har fået $7$ eller derunder osv. 

Den kumuleret frekvens vil vise sig vigtig, når vi senere snakker sumkurver og kvartiler. Vi vil møde noget lignende, når vi snakker fordelingsfunktioner i sandsynlighedsteorien.

## Opgaver

