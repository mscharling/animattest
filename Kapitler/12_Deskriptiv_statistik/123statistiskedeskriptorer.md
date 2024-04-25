(statistiskedeskriptorer)=
# Statistiske deskriptorer

I deskriptiv statistik benytter vi os af deskriptorer til at sige noget om vores datasæt. Deskriptorerne er nogle mål, der samler vores observationer og giver os et enkelt tal, der kan hjælpe os med at sige noget om vores data. Vi vil i dette kapitel introducere de forskellige deskriptorer.

Vi deler vores statistiske deskriptorer op i to grupper, nemlig *positionsmål* og *spredningsmål*. Vi har følgende positionsmål:

* Største- og mindsteværdi
* Gennemsnit
* Typetal
* Kvartiler
* Fraktiler

Positionsmålene fortæller noget om, hvor store observationerne er i vores datasæt.

Vi har følgende spredningsmål:

* Variationsbredde
* Kvartilafstand
* Stikprøvevarians
* Spredning

Spredningsmålene fortæller noget om, hvor spredte observationerne er fra hinanden i vores datasæt.

## Ugrupperet observationer

### Mindste- og størsteværdi

Mindste- og størsteværdien er statistiske deskriptorer, der som navnet indikerer, fortæller hvad datasættets mindste og største observation er. Disse deskriptorer giver en idé om det spænd vores observationer befinder sig i og afstanden mellem disse kalder vi for *variationsbredden*. 

Vi kan ved hjælp af $\min$- og $\max$-funktionerne finde den mindste og største værdi blandt observationerne. Funktionen $\min$ giver den mindste værdi, der inputtes i funktionen og $\max$ giver den største værdi, der inputtes i funktionen. 

Givet er stikprøven

$$

    x_1,x_2,...,x_n.

$$

Heriblandt findes den observation, der har den mindste værdi, og den observation, der har den største værdi. Oftest kan vi ret hurtigt afgøre ud fra et lille datasæt, hvad den mindste og største værdi er. Men, matematisk er disse defineret ved:

Mindsteværdien er givet ved:

```{math} 
:label: a60
:name: a60

x_{\text{min}} = \min\{x_1,x_2,...,x_n\} = \min_{i=1,2,...,n}\{x_i\} 
    
```

Størsteværdien er givet ved: 

$$

    x_{\text{max}} = \max\{x_1,x_2,...,x_n\} = \max_{i=1,2,...,n}\{x_i\} 
    
$$ (a61)

### Variationsbredde

Variationsbredden er den statistiske deskriptor, der beskriver afstanden mellem datasættets mindste- og størsteværdi. Vi benævner variationsbredden med $R$ for det engelske *range*:

$$

    R = x_{\text{max}} - x_{\text{min}} \tag{11.9}\label{a62}

$$

```{prf:eksempel} Karakterer - fortsat
:label: karakterereksempel21

Du får lige karaktererne igen:
 
 $$

    4, 4, 10, 02, 12, 12, 7, 7, 7, 12, 4, 10, 7, 7, 02, 7, 10, 10, 7, 7

$$
 
Ved blot at aflæse datasættet kan vi se, at mindsteværdien er $x_{\text{min}} = 2$ og størsteværdien er $x_{\text{max}} = 12$. Bemærk, at vi skriver $2$ for karakteren $02$. Men for at vise brugen af {eq}`a60` og {eq}`a61`, så kan vi indsætte de distinkte værdier fra vores datasæt:

$$

    x_{\text{min}} = \min\{2,4,7,10,12\} = 2

$$

$$

    x_{\text{max}} = \max\{2,4,7,10,12\} = 12

$$

Derfor bliver variationsbredden:

$$

    R = 12 - 2 = 10

$$

De laveste og højeste karakterer afviger med $10$ fra hinanden.

```

Du kan bruge variationsbredden til at sige, hvad dine observationer højst afviger fra hinanden med og i hvilket interval de befinder sig i. For alle observationerne $x_1,x_2,...,x_n$ gælder:

$$

    x_{\text{min}} \leq x_i \leq x_{\text{max}},\qquad i=1,2,...,n

$$

Det er det eneste variationsbredden fortæller. Det siger ikke så meget om dine andre observationer. For det kan være, at din mindste- og størsteværdi er to ekstreme observationer, der egentlig "ligger ret langt væk" fra resten af observationerne. 

Så, for at introducere nogle spredningsmål, der også tager højde for observationerne i mellem ydrepunkterne, har vi brug for *gennemsnittet*.

### Gennemsnit

Den statistiske deskriptor, som de fleste nok kender, er *gennemsnittet*. Den kaldes også for *middelværdi* eller *middeltal*. Det skyldes, at gennemsnittet er en nem størrelse at beregne og fortolke på. Gennemsnittet er et tal, der beskriver den centrale tendens for datasættet og fortæller noget om observationernes vægtet forekomst. Observationer der forekommer flere gange vil derfor trække gennemsnittet i retning af de observationers værdier. 

Vi betragter stikprøven

$$

    x_1,x_2,...,x_n.

$$ 

Vi beregner gennemsnittet ved:

$$

    \bar{x} = \frac{x_1 + x_2 + \cdots + x_n}{n} = \frac{1}{n} \sum_{i=1}^{n} x_i \tag{11.10}\label{a6}

$$

$\bar{x}$ er altså symbolet for stikprøvens gennemsnit. 

```{prf:eksempel} Karakterer - fortsat
:label: karakterereksempel3

Lad os beregne gennemsnittet. Bemærk igen, at vi skriver $2$ for karakteren $02$:
 
 $$
 \begin{align*}
    \bar{x} &= \frac{4+4+10+2+12+12+7+7+7+12+4+10+7+7+2+7+10+10+7+7}{20} \\
        &= \frac{148}{20} \\
        &= 7{,}4
 \end{align*}
 $$

Vi har altså, at eleverne i gennemsnit har fået ca. $7$. 

```

Når vi betragter et datasæt som $x_1,x_2,...,x_n$, så er der jo, som sagt, ikke noget, der forhindrer nogle af observationerne i at være ens. Vi kan derfor også bruge hyppigheden eller frekvensen af observationerne i datasættet til at udregne gennemsnittet:

$$

    \bar{x} = \frac{h_1 x_1 + h_2 x_2 + \cdots + h_n x_n}{n} = \frac{1}{n}\sum_{i=1}^{n} h_i x_i \tag{11.11}\label{a7}

$$

Eller:

$$

    \bar{x} = f_1 x_1 + f_2 x_2 + \cdots + f_n x_n = \sum_{i=1}^{n} f_i x_i \tag{11.12}\label{a8}

$$

```{exercise}
:class: dropdown

Vis, at gennemsnittet beregnet ved hjælp af hyppigheden og gennemsnittet beregnet ved hjælp af frekvensen er identiske. Dvs. vis

$$

    \bar{x} = \frac{1}{n}\sum_{i=1}^{n} h_i x_i = \sum_{i=1}^{n} f_i x_i.

$$ 

<details>
<summary>Hint</summary>
<p>

Gå tilbage til $\eqref{a7}$ og betragt udtrykket

$$

    \frac{h_1 x_1 + h_2 x_2 + \cdots + h_n x_n}{n}.

$$

Hvordan var det, at frekvens er defineret? 

</p>
</details>

```

```{prf:eksempel} Karakterer - fortsat
:label: karakterereksempel4

Vi fortsætter fra {prf:ref}`karakterereksempel3<karakterereksempel3>` og bruger de nye måder at regne gennemsnit på. For at bruge $\eqref{a7}$ og $\eqref{a8}$, så er det en god idé at have opstillet en hyppighedstabel over datasættet. Det har vi fra {prf:ref}`karakterereksempel<karakterereksempel>`:

| Observation $(x_i)$   | Hyppighed $(h_i)$   | Frekvens $(f_i)$               |
| --------------------- | ------------------- | ------------------------------ |
| $02$                  | $2$                 | $\frac{2}{20} = 0{,}1$         |
| $4$                   | $3$                 | $\frac{3}{20} = 0{,}15$        |
| $7$                   | $8$                 | $\frac{8}{20} = 0{,}4$         |
| $10$                  | $4$                 | $\frac{4}{20} = 0{,}2$         |
| $12$                  | $3$                 | $\frac{3}{20} = 0{,}15$        |
| **I alt**             | $20$                | $1$                            |

Vi får:
 
$$
\begin{align*}
    \bar{x} &= \frac{2\cdot 2 + 3 \cdot 4 + 8 \cdot 7 + 4 \cdot 10 + 3 \cdot 12}{20} \\
        &= \frac{148}{20} \\
        &= 7{,}4
\end{align*}
$$

Eller 

$$
\begin{align*}
    \bar{x} &= 0{,}1\cdot 2 + 0{,}15 \cdot 4 + 0{,}4 \cdot 7 + 0{,}2 \cdot 10 + 0{,}15 \cdot 12 \\
        &= 7{,}4
\end{align*}
$$

Dette kaldes også et *vejet gennemsnit* af det reduceret datasæt med de distinkte observationer $02,4,7,10,12$. Det kaldes vejet gennemsnit, da vi vægter observationen $02$ med 10 %, $4$ med 15 %, $7$ med 40 % osv.

Alle tre måder giver samme resultat, hvilket var det, som vi også regnede med. 

```

**Bemærk:** Vi har med vilje gennem dette afsnit holdt os til navnet *gennemsnit*. Det skyldes, at vi i senere kapitler vil møde navnet *middelværdi* i en anden sammenhæng. 

### Typetal
Typetallet er den statistiske deskriptor, der fortæller hvilken observation, der optræder flest gange i vores datasæt. På engelsk kaldes typetallet for *mode*. 

Vi kan også for denne deskriptor opstille en funktion over datasættet. Vi kan bruge $\arg\,\max$-funktionen:

$$

    x_{\text{mode}} = \underset{i=1,2,...,n}{\arg\,\max} \{x_i\mid h(x_i)\} \tag{11.13}\label{11.13}

$$

Den minder om $\max$-funktionen, som vi brugte for størsteværdi-deskriptoren. Husk, at $h_i = h(x_i)$ er hyppigheden for den $i$'te observation. Funktionen går ind og kigger på, hvornår er hyppigheden af observationerne størst og i stedet for at give os den største værdi, som $\max{h_i}$ ville gøre, så går $\arg$-funktionen ind og finder den observation med størst hyppighed. Derfor har vi den lodrette streg, der adskiller $x_i$ og $h(x_i)$. Vi fortæller hvilket argument, $x_i$, der skal kigges på og hvilken funktion, der maksimeres over. Ergo, så returnerer $\arg\,\max$-funktionen altså observationen med den største hyppighed - eller de observationer med den største hyppigheder. 

```{prf:eksempel} Karakterer - fortsat
:label: karakterereksempel5

Fra {prf:ref}`karakterereksempel<karakterereksempel>` har vi hyppighedstabellen, som du kan genfinde ovenfor. Vi kan direkte se, at $x_{\text{mode}} = 7$, da hyppigheden for observationen $7$ er $8$, $h(7)=8$, og større end de andre.

$$ 
    
    x_{\text{mode}} = {\arg\,\max} \{2, 4, 7, 10, 12 \mid h(2), h(4), h(7), h(10), h(12)\} = 7

$$

```

### Median
I folkeskolen lærte du sikkert i statistik, at medianen er den statistiske deskriptor, der giver den midterste observation i det ordnede datasæt. Så, hvis vi har et datasæt med ni observationer $x_1,x_2,...,x_9$, så kan vi ordne observationerne:

$$

    x_{(1)}\leq x_{(2)}\leq \cdots \leq x_{(9)}

$$

Her er $x_{(i)}$ de ordnede observationer. Et hurtigt eksempel på, hvordan denne opstilling skal forstås: Forstil dig, at vi har et datasæt med observationerne:

$$

    9, 1, 2, 1, 3, 5, 11, 4, 4 

$$

Altså, er vores rå datasæt $x_1 = 9$, $x_2 = 1$, $x_3 = 2$ osv. hele vejen op til $x_9 = 4$. Det ordnede datasæt vil være:

$$

    1, 1, 2, 3, 4, 4, 4, 9, 11

$$

Nu er vores ordnede datasæt $x_{(1)} = 1$, $x_{(2)} = 1$, $x_{(3)} = 2$ osv. hele vejen op til $x_{(9)} = 11$. Den midterste observation i det ordnede datasæt er $4$:

$$

    1, 1, 2, 3, \underset{\uparrow}{4}, 4, 4, 9, 11

$$

Denne definition af medianen giver ikke mening for et lige antal observationer, da vi potentielt kan have to forskellige midterste værdier. I det tilfælde tager vi gennemsnittet af de to som medianen. Det betyder, at vores median kan potentielt være en værdi, som ikke er en af observationerne. Lad os gå tilbage til vores lille eksempel fra før. Introducér et $1$-tal til observationerne, så vores datasæt nu er:

$$

    9, 1, 2, 1, 3, 5, 11, 4, 4, 1

$$

Og det ordnede med de to midterste observationer:

$$

    1, 1, 1, 2, \underset{\uparrow}{3}, \underset{\uparrow}{4}, 4, 4, 9, 11

$$

Gennemsnittet af $3$ og $4$ er $3{,}5$, hvilket tydeligvis ikke er et element i vores datasæt. 

Vi vil definere medianen på en lidt anden måde. Vi lader medianen være den første observation, der har en kumuleret frekvens større end eller lig med 0,5. Det er ækvivalent med, at vælge den midterste observation i et ordnet datasæt. Formelt kan vi også opstille en funktion for medianen for et datasæt $x_1,x_2,...,x_n$:

$$

    x_{\text{median}} = \underset{i=1,2,...,n}{\arg\,\sup} \{x_i \mid F_i \geq 0{,}5\} \tag{11.14}\label{11.14}

$$

$\sup$-funktionen kaldes *supremum* og vælger blot den mindste øvre grænse af det, som vi kigger på. Igen bruger vi $\arg$-funktionen til at få den observation ud, der opfylder, at det er den første observation, der har en kumuleret frekvens større end eller lig 0,5.

Du kommer ikke umiddelbart til at skulle bruge de formelle udtryk for hverken $x_{\text{mode}}$ eller $x_{\text{median}}$. Det er for at vise dig, at der faktisk findes forskrifter for disse størrelser i datasættet. Det nemmeste er selvfølgelig at opstille en hyppighedstabel med kumuleret frekvens for at kunne finde disse størrelser meget nemt. 

```{prf:eksempel} Karakterer - fortsat
:label: karakterereksempel6
Betragt nu den udvidede hyppighedstabel fra {prf:ref}`karakterereksempel2<karakterereksempel2>`:
 
| Observation $(x_i)$   | Hyppighed $(h_i)$   | Frekvens $(f_i)$               | Kumuleret frekvens $(F_i)$ |
| --------------------- | ------------------- | ------------------------------ | -------------------------- |
| $02$                  | $2$                 | $\frac{2}{20} = 0{,}1$         | $0{,}1$                    |
| $4$                   | $4$                 | $\frac{4}{20} = 0{,}2$         | $0{,}1 + 0{,}15 = 0{,}25$    |
| $7$                   | $7$                 | $\frac{7}{20} = 0{,}35$        | $0{,}25 + 0{,}4 = 0{,}65$  |
| $10$                  | $4$                 | $\frac{4}{20} = 0{,}2$         | $0{,}65 + 0{,}2 = 0{,}85$  |
| $12$                  | $3$                 | $\frac{3}{20} = 0{,}15$        | $0{,}85 + 0{,}15 = 1$      |
| **I alt**             | $20$                | $1$                            |                            | 
 
Her kan vi se, at observationen $7$ må være medianen, da det er den første observation, der har en kumuleret frekvens større end eller lig 0,5.

$$

    x_{\text{median}} = 7

$$

```

### Kvartiler og fraktiler
Vi arbejder med tre kvartiler:

* *1. kvartil* eller *nedre kvartil*
* *2. kvartil* eller *median*
* *3. kvartil* eller *øvre kvartil*

Har vi et datasæt og ordner det, så kan vi ved at splitte det op i "fire lige store dele" finde de tre kvartiler. Men for at holde os til vores definition af medianen, så vil vi også definere de andre kvartiler på tilsvarende vis. 

```{figure} kvartil.png
---
scale: 50 %
align: center
---
```

Den nedre kvartil er den observation, der splitter datasættet i de 25 % mindste observationer og 75 % rest. Derfor er 1. kvartilen den første observation, der har en kumuleret frekvens større end eller lig med 0,25. Det kan vi skrive på samme måde som $\eqref{11.14}$:

$$

    Q_1 = \underset{i=1,2,...,n}{\arg\,\sup} \{x_i \mid F_i \geq 0{,}25\} \tag{11.15}\label{11.15}

$$

Medianen har vi defineret i sidste afsnit. Vi skriver, at 2. kvartilen $Q_2 = x_{\text{median}}$.

Den øvre kvartil er den observation, der splitter datasættet i de 75 % mindste observationer og 25 % rest eller ækvivalent; 25 % største observationer og 75 % rest. Derfor er 3. kvartilen den første observation, der har en kumuleret frekvens større end eller lig med 0,75. Det kan vi også skrive på samme måde som $\eqref{11.14}$:

$$

    Q_3 = \underset{i=1,2,...,n}{\arg\,\sup} \{x_i \mid F_i \geq 0{,}75\} \tag{11.16}\label{11.16}

$$

Tekstforklaringen af kvartilerne giver sikkert mere mening end de formelle definitioner. Det er også fint, for igen kan vi blot bruge vores hyppighedstabel med kumuleret frekvens.

```{prf:eksempel} Karakterer - fortsat
:label: karakterereksempel7
Betragt igen den udvidede hyppighedstabel fra {prf:ref}`karakterereksempel2<karakterereksempel2>`, som du også kan finde ovenfor. Vi ser, at $Q_1 = 4$, da det er den første observation, der har kumuleret frekvens større end eller lig med 0,25. Vi ved, at $Q_2 = 7$ fra {prf:ref}`karakterereksempel5<karakterereksempel5>`. Vi ser til sidst, at $Q_3 = 10$, da det er den første observation, der har kumuleret frekvens større end eller lig med 0,75.

$$

    Q_1 = 4 \qquad Q_2 = 7 \qquad Q_3 = 10

$$

```

Kvartilerne er eksempler på *fraktiler*. Ovenfor definerede vi den øvre kvartil, $Q_1$, som værende den observation, der har en kumuleret frekvens større end eller lig med $0{,}25$. Vi kalder derfor den øvre kvartil for 25 %-fraktilen. Men, vi kunne jo også have kigget på en anden kumuleret frekvens. Generelt har vi for fraktilerne, at vi selv kan bestemme den ønsket kumuleret frekvens. 32 %-fraktilen er altså den observation, der adskiller datasættet i de 32 % mindste observationer fra de 68 % største observationer.

Generelt siger vi, at $p\,\%$-fraktilen er observationen $x_{p\,\%}$, der adskiller de $p\,\%$ mindste observationer fra de $(100-p)\,\%$ største observationer. Med vores lidt mere avanceret måde at skrive det på:

$$

    x_{p\,\%} = \underset{i=1,2,...,n}{\arg\,\sup} \{x_i \mid F_i \geq p\,\% \}

$$

For det meste vil det være kvartilerne, der er interessante og derfor vil vi ikke fokusere på de generelle fraktiler for nu.

### Kvartilafstand

Ligesom variationsbredden, så er kvartilafstanden også et spredningsmål og blot afstanden mellem den øvre og nedre kvartil. Vi benævner kvartilafstanden med $R_Q$:

$$

    R_Q = Q_3 - Q_1 \tag{11.17}\label{11.17}

$$

```{exercise}
:class: dropdown

Hvad har kvartilafstand og variationsbredden til fælles? Hvordan er de forskellige? Siger de det samme? Diskutér.

```

### Stikprøvevarians og spredning

De sidste to deskriptorer, som vi skal have styr på, er, stikprøvevarians og spredning. Eftersom spredning er defineret ud fra stikprøvevariansen, starter vi med denne deskriptor. 

Stikprøvevariansen er et meget anvendt spredningsmål, da det kigger på, hvor meget observationerne i gennemsnit afviger fra gennemsnittet. Faktisk er det den kvadratiske afstand fra gennemsnittet. Vi har stikprøven $x_1,x_2,...,x_n$ og definerer:

$$

    s^2 = \frac{(x_1 - \bar{x})^2 + (x_2 - \bar{x})^2 + \cdots + (x_n - \bar{x})^2}{n} = \frac{1}{n}\sum_{i=1}^{n} (x_i - \bar{x})^2 \tag{11.18}\label{11.18}

$$

Her kalder vi sum-elementet $(x_i - \bar{x})^2$ for den kvadratiske afstand for observation $x_i$. Vi kan også udtrykke stikprøvevariansen ved hjælp af frekvensen, ligesom vi gjorde for gennemsnittet:

$$

    s^2 = \sum_{i=1}^{n} f_i (x_i - \bar{x})^2 \tag{11.19}\label{11.19}

$$

```{exercise} 
:class: dropdown

Vis, at du kan omskrive $\eqref{11.18}$ til $\eqref{11.19}$.

```

Måske, du har bemærket, at stikprøvevariansen er defineret "i anden", $s^2$. Spredning derimod er blot kvadratroden af stikprøvevarisen, så vi blot får $s$:

$$

    s = \sqrt{s^2} = \sqrt{\frac{1}{n}\sum_{i=1}^{n} (x_i - \bar{x})^2} \tag{11.20}\label{11.20}

$$

```{exercise} 
:class: dropdown

Vis, at spredningen også kan skrives som:

$$

    s = \frac{1}{\sqrt{n}}\sqrt{\sum_{i=1}^{n} (x_i - \bar{x})^2}

$$

```

Spredningen er derfor også et mål for, hvor meget observationerne i gennemsnit afviger fra gennemsnittet. I stikprøvevariansen kigger vi på den kvadratiske afstand mellem vores observation, $x_i$, og gennemsnittet, $\bar{x}$. Grunden til dette er, at så bliver afstandene positive, da $x^2$ jo kun er en positiv funktion uanset, hvad $x$ er. Derfor skal vi ikke tænke over, at vi kunne have negative elementer i vores sum. Når vi snakker om spredning, så er vi i princippet ligeglad med om det er til højre eller venstre for gennemsnittet. Idéen med spredningen er at transformere afstanden tilbage til "første potens". 

```{prf:eksempel} Karakterer - fortsat
:label: karakterereksempel8

Vi beregner nu stikprøvevariansen og spredningen for datasættet. Vi bruger både $\eqref{11.17}$ og $\eqref{11.18}$ for at vise, at vi får samme resultat. Vi husker, at $\bar{x} = 7{,}4$ fra {prf:ref}`karakterereksempel3<karakterereksempel3>`

$$
\begin{align*}
    s^2 &= \frac{1}{20} \big( (4 - 7{,}4)^2 + (4 - 7{,}4)^2 + (10 - 7{,}4)^2 + (2 - 7{,}4)^2 \\
    &\qquad\qquad + (12 - 7{,}4)^2 + (12 - 7{,}4)^2 + (7 - 7{,}4)^2 + (7 - 7{,}4)^2 \\
    &\qquad\qquad + (7 - 7{,}4)^2 + (12 - 7{,}4)^2 + (4 - 7{,}4)^2 + (10 - 7{,}4)^2 \\
    &\qquad\qquad + (7 - 7{,}4)^2 + (7 - 7{,}4)^2 + (2 - 7{,}4)^2 + (7 - 7{,}4)^2 \\
    &\qquad\qquad + (10 - 7{,}4)^2 + (10 - 7{,}4)^2 + (7 - 7{,}4)^2 + (7 - 7{,}4)^2 \big) \\
    &= 9{,}24
\end{align*}
$$

Eller:

$$
\begin{align*}
    s^2 &= 0{,}1 \cdot (2 - 7{,}4)^2 + 0{,}15 \cdot (4 - 7{,}4)^2 + 0{,}4 \cdot (7 - 7{,}4)^2 \\
        &\qquad + 0{,}2 \cdot (10 - 7{,}4)^2 + 0{,}15 \cdot (12 - 7{,}4)^2 \\
        &= 9{,}24
\end{align*}
$$

Stikprøvevariansen er altså $9{,}24$, eller gennemsnittet af den kvadratiske afstand mellem observationerne og gennemsnittet er $9{,}24$. Dermed bliver spredningen

$$

    s = \sqrt{s^2} = \sqrt{9{,}24} \approx 3{,}04.

$$

```

## Grupperet observationer

### Gennemsnit


## Opgaver


