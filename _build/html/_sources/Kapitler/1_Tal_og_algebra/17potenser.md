(potenser)=
# Potenser

Potenser er også tal, som du lærte om i folkeskolen. Potenser er blot en måde at forkorte regnerække hvor samme tal ganges sammen flere gange.

```{figure} potens.png
---
scale: 50 %
align: center
---
```

En potens består af et *grundtal* og en *eksponent*. Grundtallet er det tal, der ganges med, og eksponenten er antallet af gange grundtallet ganges med sig selv.

```{prf:definition} Potenser

Lad $a$ være et vilkårligt tal. Da er

$$

    a^n = \underbrace{a\cdot a \cdot a \cdots a}_{n\ \text{gange}}

$$

tallet $a$ i $n$'te potens.


```


Måske har du også arbejdet med regnereglerne for potenser i folkeskolen og måske endda bevist en af dem. Det er en god øvelse, hvilket vi også vil gøre her:

```{prf:regneregler} Potenser

$$

    a^p\cdot a^q = a^{p+q}
    \tag{P1}\label{p1}

$$

$$

    a^p \cdot b^p = (ab)^p
    \tag{P2}\label{p2}
    
$$

$$

    (a^p)^q = a^{pq}
    \tag{P3}\label{p3}
    
$$

$$

    \frac{a^p}{a^q} = a^{p-q}
    \tag{P4}\label{p4}
    
$$

$$

    \frac{a^p}{b^p} = \bigg( \frac{a}{b} \bigg)^p
    \tag{P5}\label{p5}
    
$$

```

Regneregel $\eqref{p1}$ siger, at hvis vi ganger to potenser med samme grundtal, så kan vi lægge deres eksponenter sammen. Beviset for denne er forholdsvis simpel, da det falder direkte ud af definitionen af potenser:

$$

    a^p \cdot a^q = \underbrace{\underbrace{a \cdot a \cdots a}_{p\ \text{gange}} \cdot \underbrace{a \cdot a \cdots a}_{q\ \text{gange}}}_{p+q\ \text{gange}} = a^{p+q}.

$$

Regneregel $\eqref{p2}$ siger, at hvis vi ganger to potenser med forskellige grundtal, men samme eksponenter, så kan vi opløfte produktet af grundtallene til eksponenten. Denne regneregel kan let vises ved brug af kommutativiteten af gange. 

$$

    a^p \cdot b^p = \underbrace{a \cdot a \cdots a}_{p\ \text{gange}} \cdot \underbrace{b \cdot b \cdots b}_{p\ \text{gange}} = \underbrace{ab \cdot ab \cdots ab}_{p\ \text{gange}} = (ab)^p

$$

Regneregel $\eqref{p3}$ siger, at hvis vi opløfter en potens til et eller andet tal, så svarer det til at gange de to eksponenter. Ligesom for Regneregel $\eqref{p1}$ kan denne regneregel let vises ved brug af definitionen af en potens:

$$

    (a^p)^q = (\underbrace{a \cdot a \cdots a}_{p\ \text{gange}})^q = \underbrace{\underbrace{a \cdot a \cdots a}_{p\ \text{gange}} \cdot \underbrace{a \cdot a \cdots a}_{p\ \text{gange}} \cdots \underbrace{a \cdot a \cdots a}_{p\ \text{gange}}}_{q\ \text{gange}} = \underbrace{a \cdot a \cdot a \cdots a}_{p\cdot q\ \text{gange}}
= a^{pq}

$$

Regneregel $\eqref{p4}$ siger, at hvis vi betragter en brøk af to potenser med samme grundtal, så kan vi beholde grundtallet og trække nævnerens eksponent fra tællerens. Vi viser denne regneregel for $p>q$, dvs. eksponenten i tælleren er et større tal end eksponenten i nævneren:

$$

    \frac{a^p}{a^q} = \frac{\overbrace{\overbrace{a\cdot a\cdots  a}^{p-q\ \text{gange}} \cdot \cancel{a} \cdot \cancel{a} \cdots \cancel{a}}^{p\ \text{gange}}}{\underbrace{\cancel{a}\cdot \cancel{a} \cdots \cancel{a}}_{q\ \text{gange}}} =\frac{\overbrace{a\cdot a \cdots  a}^{p-q\ \text{gange}}}{1} = a^{p-q}

$$

Regneregel $\eqref{p5}$ siger, at hvis vi dividerer to potenser med forskellige grundtal, men samme eksponent, så kan vi dividere grundtallene og beholde eksponenten. Vi kan vise reglen ved at bruge, hvordan vi ganger brøker sammen:

$$

    \frac{a^p}{b^p} = \frac{\overbrace{a\cdot a \cdots a}^{p\ \text{gange}}}{\underbrace{b\cdot b\cdots b}_{p\ \text{gange}}} = \underbrace{\frac{a}{b}\cdot \frac{a}{b} \cdots \frac{a}{b}}_{p\ \text{gange}} = \bigg( \frac{a}{b} \bigg)^p

$$

```{exercise} 
:class: dropdown

Tag et stykke papir og en blyant. Læs hvert bevis for regnereglerne $\eqref{p1}$-$\eqref{p5}$ og vis dem for dig selv, mens du forklarer, hvad du gør.
    
```

Lad os betragte to særtilfælde for Regneregel $\eqref{p4}$:

```{prf:eksempel} $a^0 = 1$ altid
:label: a0er1

En regneregel mere kunne være $a^0=1$, men det er egentlig blot et resultat af Regneregel $\eqref{p4}$, hvor eksponenterne $p=q$ er det samme tal. Antag, at $p=q$, da har vi

$$

    \frac{a^p}{a^q} = \frac{a^p}{a^p} = \frac{\overbrace{a\cdot \cancel{a} \cdots \cancel{a}}^{p\ \text{gange}}}{\underbrace{a \cdot \cancel{a} \cdots \cancel{a}}_{p\ \text{gange}}} = \frac{a}{a} = 1 

$$

Vi kan allerede se, at det giver 1 ved første lighedstegn, da vi kommer til at få det samme tal $a^p$ i tælleren og nævneren. Det så vi i {ref}`Kapitel 1.6<broeker>`. Men her brugte vi jo egentlig bare definitionen af en potens. Bruger vi Regneregel $\eqref{p4}$ i dette tilfælde, så får vi

$$

    \frac{a^p}{a^q} = \frac{a^p}{a^p} = a^{p-p} = a^0.

$$

Sammensætter vi nu vores to resultater, så har vi at 

$$

    a^0 = 1 \tag{P6}\label{p6}
    
$$ 

```

```{prf:eksempel} $a^{-n} = \frac{1}{a^n}$
:label: p7

Vi kan også have eksponenter, der er negative. Også denne regneregel er et resultat af Regneregel $\eqref{p4}$, hvor eksponenten for potensen i tælleren er 0. Fra {prf:ref}`a0er1<a0er1>` ved vi, at tælleren vil være lig med 1. Reglen falder derfor ret direkte ud:

$$

    \frac{a^0}{a^n} = \frac{1}{a^n}

$$

Men også fra Regneregel $\eqref{p4}$:

$$

    \frac{a^0}{a^n} = a^{0-n} = a^{-n}.

$$

Altså har vi 

$$

    a^{-n} = \frac{1}{a^n} \tag{P7}\label{p7}
    
$$

```

Fra {prf:ref}`p7<p7>` har vi derfor også, at en brøk på formen $\frac{1}{a}$ kan skrives som

$$

    \frac{1}{a} = a^{-1}.

$$

Vi behøver dog ikke et 1-tal i tælleren for at have denne relation. Det kunne være hvilket som helst tal. Lad os kalde tallet $n$. I det tilfælde vil vi få

$$

    \frac{n}{a} = na^{-1}

$$

```{exercise}
:class: dropdown

Bevis, at $\frac{n}{a} = na^{-1}$.

<details>
<summary>Hint</summary>
<p>

Brug at $\frac{n}{a}=\frac{n\cdot 1}{a}$ og en kendt brøkregneregel.

</p>
</details>
    
```

```{prf:eksempel}
:label: negativegrundtal

Det er vigtigt, at vi holder styr på, hvad vores grundtal er. Især, når vi har med negative tal at gøre. Lad os kigge på tilfældet, hvor grundtallet er negativt og potensen er negativ. Se forskellen mellem

$$

    (-2)^2 = (-2) \cdot (-2) = 4

$$

$$

    -2^2 = -1\cdot 2^2 = -1 \cdot 2 \cdot 2 = -4

$$

Det er derfor meget vigtigt, at vi skelner mellem, hvornår der er minus foran potensen, altså selve tallet, og hvornår grundtallet er negativt, hvilket skrives i en parentes. 

```

```{exercise}
:class: dropdown

Find følgende potenser:

&nbsp; &nbsp; a) $-3^2$ \
&nbsp; &nbsp; b) $(-3)^2$ \
&nbsp; &nbsp; c) $-3^3$ \
&nbsp; &nbsp; d) $(-3)^3$ 
    
```

I tilfælde, hvor grundtallet er negativt, så kan vi hurtigt finde ud af, om potensen vil være et negativt eller positivt tal ved at kigge på, om eksponenten er et lige eller ulige tal. 

```{prf:sætning}
:label: negativegrundtalthm

Betragt potensen $(-a)^n$, hvor $-a$ er et negativt tal. Da gælder følgende udsagn:

* Hvis $n$ er et lige tal, så vil potensen være positiv, $(-a)^n>0$.

* Hvis $n$ er et ulige tal, så vil potensen være negativ, $(-a)^n<0$.

```

<details style = "margin-block-end: 1em">

<summary>Bevis</summary>

<p>

Måden vi vil bevise sætningen på, er ved at huske, at et negativt tal er egentlig blot 

$$

    -a=-1\cdot a,

$$ 

hvor $a$ er positivt. For eksempel $-4 = -1 \cdot 4$. Vi vil bruge, at 

$$

    (-1)\cdot (-1) = 1

$$ 

og at et positivt tal ganget et positivt tal altid er et positiv tal. Det er almen viden. Det betyder, at vi kan nøjes med at vise sætningen på $a=1$, dvs. vi betragter potensen $(-1)^n$. Afslutningsvis ved vi så, at 

$$

    (-a)^n = (-1\cdot a)^n

$$ 

og her har vi en potensregneregel, der giver, at 

$$

    (-1 \cdot a)^n = (-1)^n\cdot a^n.

$$

Eftersom $a$ er positiv (for $-a$ er jo negativ), så vil det være nok at kigge på, hvordan potensen $(-1)^n$ ser ud. 

```{prf:bevis}
:class: text

Fra {ref}`Kapitel 1.1<negativetal>` ved vi, at et negativt tal gange et negativt tal vil være positivt, så

$$

    (-1)^2 = (-1)\cdot (-1) = 1.

$$

Vi viser første punkt: Antag $n$ er et {prf:ref}`lige tal<ligeoguligetal>`. Det betyder, at vi kan skrive $n=2m$, hvor $m$ er et heltal forskelligt fra 0. Ved brug af vores potensregneregler får vi så

$$

    (-1)^n = (-1)^{2m} \stackrel{\text{$\eqref{p3}$}}{=} \big( (-1)^2 \big)^m = 1^m = 1,

$$

hvilket viser, at potensen er positiv.

Vi viser anden punkt: Antag $n$ er et {prf:ref}`ulige tal<ligeoguligetal>`. Det betyder nu, at vi kan skrive $n=2m-1$, hvor $m$ stadig er et heltal forskelligt fra 0. Ved brug af vores potenseregneregler får vi 

$$

    (-1)^n = (-1)^{2m-1} \stackrel{\text{$\eqref{p4}$}}{=} \frac{(-1)^{2m}}{(-1)^1} \stackrel{\text{$\eqref{p3}$}}{=} \frac{\big( (-1)^2 \big)^m}{-1} = \frac{1^m}{-1} = \frac{1}{-1} = -1,

$$

hvilket viser, at potensen er negativ. 

Afslutningsvis har vi fra {ref}`Kapitel 1.1<negativetal>`, at $-a=-1\cdot a$ og ved brug af Regneregel $\eqref{p2}$ har vi

$$

    (-a)^n = (-1\cdot a)^n \stackrel{\text{$\eqref{p2}$}}{=} (-1)^n \cdot a^n.

$$

Her bruger vi nu blot det, som vi har vist for $(-1)^n$ for de to tilfælde til at konkludere sætningen. 

```
</p>

</details>


## Ti'er potens

Når vi arbejder med meget store eller meget små tal, så kan det være en idé at have en anden måde at angive dem på. Hvis vi for eksempel arbejdede med en opgave, hvor vi skulle regne med Jordens masse, der er 

$$

    5.972.370.000.000.000.000.000.000\ \text{kg},

$$

så ville vi nok i længden blive træt af at skulle skrive hele det tal ned hver gang. Derfor arbejder vi oftest i disse tilfælde med ti'er potenser, hvor grundtallet er 10. Vi ved jo nemlig, at 

$$
\begin{align*}
    10^1 &= 10 \\
    10^2 &= 10 \cdot 10 = 100 \\
    10^3 &= 10 \cdot 10 \cdot 10 = 1000 \\
    10^4 &= 10 \cdot 10 \cdot 10 \cdot 10 = 10000 \\
         &\vdots
\end{align*}
$$

Det smarte her er, at antallet af 0'er bag 1-tallet svarer til tallet i eksponenten. For eksempel $10^{\underline{4}} = 1\underline{0000}$. 

Vi kan derfor også skrive tallet

$$

    30.000 = 3 \cdot 10.000 = 3 \cdot 10^4

$$

eller en approksimation for Jordens masse

$$

    6.000.000.000.000.000.000.000.000\ \text{kg} = 6\cdot 10^{24}\ \text{kg}.

$$

Dette er begge eksempler på, hvordan vi kan angive store tal ved hjælp af ti'er potenser og begge er eksempler på tal skrevet med *videnskabelig notation*. Videnskabelig notation er en måde at angive tal på og har formen

$$

    a \cdot 10^b.

$$

På nogle lommeregnere vil du også møde notationen $6\text{e}24$, der angiver det samme. 

Helt analogt gælder det for meget små tal. 

$$
\begin{align*}
    10^{-1} &= \frac{1}{10} = 0{,}1 \\
    10^{-2} &= \frac{1}{10^2} = \frac{1}{100} = 0{,}01 \\
    10^{-3} &= \frac{1}{10^3} = \frac{1}{1000} = 0{,}001 \\
    10^{-4} &= \frac{1}{10^4} = \frac{1}{10000} = 0{,}0001 \\
         &\vdots
\end{align*}
$$

Her svarer den negative eksponent til antallet af 0'er foran 1-tallet. Vi har også videnskabelig notation i disse tilfælde. For eksempel kan vi skrive $0{,}00025 = 2{,}5\cdot 10^{-4}$ eller $2{,}5\text{e}{-4}$.

### SI-præfikser

En særlig anvendelse af ti'er potenser kan findes ved angivelser af måleenheder. Vi arbejder som oftest med enheder fra SI-systemet, der er en samling af syv grundlæggende SI-enheder:

| Størrelse             | Grundenhed            | Symbol            |
| --------------------- | --------------------- | ----------------- |
| Længde                | Meter                 | $\text{m}$        |
| Masse                 | Gram                  | $\text{g}$        |
| Tid                   | Sekund                | $\text{s}$        |
| Elektrisk strøm       | Ampere                | $\text{A}$        |
| Temperatur            | Kelvin                | $\text{K}$        |
| Stofmængde            | Mol                   | $\text{mol}$      |
| Lysstyrke             | Candela               | $\text{cd}$       |

Hvis du har Fysik A, B eller C, så kommer du sikkert til at arbejde med enhederne $\text{A}$, $\text{K}$ og måske $\text{cd}$ og hvis du har Kemi A, B eller C, så kommer du helt sikkert til at arbejde med $\text{mol}$ og $\text{K}$. Det er ikke så tit, at vi vil støde på disse i hverken Matematik A, B eller C. 

Du har helt sikkert stødt på enhederne $\text{cm}$, $\text{kg}$ og $\text{ms}$. Dette er alle eksempler, hvor man har brugt SI-præfikser på grundenhederne for at skalere dem. $\text{cm}$ er centi-meter, der betyder *en hundrededel meter*, $\text{kg}$ er kilo-gram, der betyder *tusinde gram* og $\text{ms}$ er mili-sekunder, der betyder *en tusindedel sekund*. Centi, kilo og mili er altså eksempler på SI-præfikser og dem har vi mange flere af:

| Præfiksnavn    | Præfikssymbol    | Ti'er potens  | Decimaltal                        | Navn          |
| -------------- | ---------------- | ------------- | --------------------------------- | ------------- |
| Tera           | $\text{T}$       | $10^{12}$     | $1.000.000.000.000$               | Billion       |
| Giga           | $\text{G}$       | $10^9$        | $1.000.000.000$                   | Milliard      |
| Mega           | $\text{M}$       | $10^6$        | $1.000.000$                       | Million       |
| Kilo           | $\text{k}$       | $10^3$        | $1.000$                           | Tusind        |
| Hekto          | $\text{h}$       | $10^2$        | $100$                             | Hundrede      |
| Deka           | $\text{da}$      | $10^1$        | $10$                              | Ti            |
|                |                  |               |                                   |               |
| Deci           | $\text{d}$       | $10^{-1}$     | $0{,}1$                           | Tiendedel     |
| Centi          | $\text{c}$       | $10^{-2}$     | $0{,}01$                          | Hundrededel   |
| Mili           | $\text{m}$       | $10^{-3}$     | $0{,}001$                         | Tusindedel    |
| Mikro          | $\mu$            | $10^{-6}$     | $0{,}000001$                      | Milliontedel  |
| Nano           | $\text{n}$       | $10^{-9}$     | $0{,}000000001$                   | Milliardtedel |


## Opgaver

```{prf:opgave}

Reducer følgende udtryk og forklar undervejs hvilke regneregler, du bruger:

&nbsp; &nbsp; a) $a^2 \cdot a^3 + b \cdot a$ \
&nbsp; &nbsp; b) $(a\cdot a^2)^3$ \
&nbsp; &nbsp; c) $\frac{a\cdot b^4}{b^2}$ \
&nbsp; &nbsp; d) $a^2 + a^3 \cdot a$ 

```

```{prf:opgave}

Reducer følgende udtryk og forklar undervejs hvilke regneregler, du bruger:

&nbsp; &nbsp; a) $(2a)^3 + 2b - 1$ \
&nbsp; &nbsp; b) $a^2 + a^2 - 3a$ \
&nbsp; &nbsp; c) $(2+a)^2 + 2a $ \
&nbsp; &nbsp; d) $(1-b^2)^2 + 2$ 

```

```{prf:opgave}

Reducer følgende udtryk og forklar undervejs hvilke regneregler, du bruger:

&nbsp; &nbsp; a) $\frac{a^2 + b^3}{ab} + \frac{2a}{b}$ \
&nbsp; &nbsp; b) $\frac{(a+b)^2}{a} + (a-b)^2$ \
&nbsp; &nbsp; c) $(\frac{a}{b})^2 \cdot (a+b)^2 $ \
&nbsp; &nbsp; d) $\frac{1}{a^2} \cdot \frac{a^3}{b^2} - \frac{1}{b^2} $ 

```

```{prf:opgave}

Omskriv følgende tal ved brug af et oplagt SI-præfiks

&nbsp; &nbsp; a) $1.237{,}2\ \text{g}$ \
&nbsp; &nbsp; b) $0{,}0023\ \text{s}$ \
&nbsp; &nbsp; c) $2.562{,}53\ \text{m}$ \
&nbsp; &nbsp; d) $0{,}00000884\ \text{m}$ 

```

```{prf:opgave}

Et rundt bord har en radius på $1{,}22\ \text{m}$. 

Bestem overfladearealet af bordet i henholdsvis $\text{m}^2$, $\text{cm}^2$ og $\text{km}^2$. 

```

```{prf:opgave}

En centicube er defineret ved at have alle siderlængder $1\ \text{cm}$. 

Bestem rumfanget af centicuben i henholdsvis $\text{cm}^3$, $\text{m}^3$, $\text{dm}^3$ og $\text{mm}^3$. 

```

