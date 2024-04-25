# Andengradsligninger

En andengradsligning er en ligning på formen

$$

    ax^2 + bx + c = 0,

$$

hvor $a\neq 0$. Vi kalder det en andengradsligning, eftersom vores ligning indeholder et led, hvor vores ubekendte variabel står i anden potens

$$

    \underline{ax^2} + bx + c = 0.

$$

Det er klart, at $a\neq 0$ skal gælde for, at vi har en andengradsligning. Hvis $a=0$, så havde vi jo blot en almindelig simpel førstegradsligning. 

Når vi arbejder med ligninger af med højere grad, så ordner vi som regel ligningerne sådan, at leddet med den største grad står først. Det betyder, at kigger vi på ligningen

$$

    4 - x^2 + 2x = 0,

$$

så vil vi hellere skrive den som

$$

    -x^2 + 2x + 4 = 0.

$$

Vi har også nogle navne i vores generelle form for andengradsligningen

$$

    ax^2 + bx + c = 0.

$$

Vi kalder $a$ for *koefficienten for andengradsleddet*, $b$ for *koefficienten for førstegradsleddet* og $c$ for konstantleddet. 

Eventuelle løsninger til vores andengradsligning kalder vi for *rødder*. 

```{exercise}
:class: dropdown
 
Nogle steder kalder man også $c$ for *koefficienten for nultegradsleddet*. Hvorfor?

<details>
<summary>Hint</summary>
<p>

Hvorfor holder relationen $c=cx^0$?

</p>
</details>

```

## Løsningsformlen og diskriminanten



Når vi løser andengradsligninger, så er det en god idé at regne diskriminanten først. Diskriminanten er givet ved

$$

    d = b^2 - 4ac

$$

og bestemmer, hvor mange løsninger eller rødder ligningen har. 

Inden vi beskriver, hvordan diskriminanten kan bruges til at finde antallet af rødder, så vil vi opskrive løsningsformlen og udlede denne i beviset, da det er her, at diskriminanten falder ud.

```{prf:sætning} Løsningsformlen for andengradsligninger
:label: loesningandengrad

Givet er en ligning på formen

$$

    ax^2 + bx + c = 0,

$$

hvor $a\neq 0$. Da er løsningen til ligningen givet ved 

$$

    x = \frac{-b \pm \sqrt{d}}{2a},

$$

hvor $d=b^2 - 4ac$ er diskriminanten.

```
<details open style = "margin-block-end: 1em">

<summary>Bevis</summary>

<p> 

I beviset vil vi gerne finde en måde at samle vores $x$ og $x^2$ på en smart måde og her vil vi se, at kvadratkomplettering fra {ref}`Kapitel 1.5<faktoriseringogkvadratkomplettering>` er særlig nyttigt.

```{prf:bevis} 

Betragt andengradsligningen

$$

    ax^2 + bx + c = 0.

$$

For at fjerne vores koefficient for andengradsleddet $a$, så dividerer vi med $a$ på begge sider af lighedstegnet: 

$$

    x^2 + \frac{b}{a}x + \frac{c}{a} = 0

$$

Vi vil nu benytte kvadratkomplettering for at samle to udtryk ved hjælp af {prf:ref}`1. kvadratsætning<k1>`. For at gøre det, så lægger vi $(\frac{b}{2a})^2$ til på begge sider af lighedstegnet:

$$

    x^2 + \frac{b}{a}x + \bigg(\frac{b}{2a}\bigg)^2 + \frac{c}{a} = \bigg(\frac{b}{2a}\bigg)^2

$$

Bemærk nu, at 

$$

    \bigg(x + \frac{b}{2a}\bigg)^2 = x^2 + \bigg(\frac{b}{2a}\bigg)^2 + 2\cdot x \cdot \frac{b}{2a} = x^2 + \frac{b}{a}x + \bigg(\frac{b}{2a}\bigg)^2

$$

hvilket er præcist det, som vi har fra vores tre første led

$$

    \underbrace{x^2 + \frac{b}{a}x + \bigg(\frac{b}{2a}\bigg)^2}_{= (x + \frac{b}{2a})^2} + \frac{c}{a} = \bigg(\frac{b}{2a}\bigg)^2,

$$

Vi har altså nu

$$

    \bigg(x + \frac{b}{2a}\bigg)^2 + \frac{c}{a} = \bigg(\frac{b}{2a}\bigg)^2.

$$

Trækker vi $\frac{c}{a}$ over på den anden side

$$

    \bigg(x + \frac{b}{2a}\bigg)^2 = \bigg(\frac{b}{2a}\bigg)^2 - \frac{c}{a},

$$

så kan vi omskrive højresiden til

$$

    \bigg(\frac{b}{2a}\bigg)^2 - \frac{c}{a} = \frac{b^2}{4a^2} - \frac{c}{a} = \frac{b^2}{4a^2} - \frac{4ac}{4a^2} = \frac{b^2 - 4ac}{4a^2}

$$

og få

$$

    \bigg(x + \frac{b}{2a}\bigg)^2 = \frac{b^2 - 4ac}{4a^2}.
    
$$

Tag nu kvadratroden på begge sider. Vi skal huske, at vi får $\pm$ foran kvadratroden, se {prf:ref}`simpelligningligegrad<simpelligningligegrad>`:

$$

    x + \frac{b}{2a} = \pm \sqrt{\frac{b^2 - 4ac}{4a^2}}

$$

Vi kan igen omskrive udtrykket på højresiden:

$$

    \pm \sqrt{\frac{b^2 - 4ac}{4a^2}} = \pm \frac{\sqrt{b^2 - 4ac}}{\sqrt{4a^2}} = \frac{\pm \sqrt{b^2 - 4ac}}{2a}

$$

Indsætter vi dette i udtrykket fra før og trækker leddet $\frac{b}{2a}$ over på højresiden, så har vi

$$

    x = \frac{\pm \sqrt{b^2 - 4ac}}{2a}-\frac{b}{2a}

$$

og en lille omskrivning giver resultatet fra sætningen

$$

    x = \frac{-b\pm \sqrt{d}}{2a},

$$

med $d=b^2 - 4ac$. 

```

</p>

</details>

Diskriminanten opstår i beviset, når vi når til trinnet

$$

    \bigg(x + \frac{b}{2a}\bigg)^2 = \frac{b^2 - 4ac}{4a^2},

$$

for det næste trin er at tage kvadratroden på begge sider af lighedstegnet. Vi ved, at vi ikke kan tage en lige rod af et negativt tal, og derfor bliver udtrykket i tælleren især interessant.


```{prf:sætning}
:label: diskriminanten

Betragt andengradsligningen $ax^2 + bx + c = 0$ med diskriminant $d = b^2 - 4ac$. Hvis

* $d > 0$, så har andengradsligningen to reelle rødder.
* $d = 0$, så har andengradsligningen én reel rod.
* $d < 0$, så har andengradsligningen nul reelle rødder.

```

<details style = "margin-block-end: 1em">

<summary>Bevis</summary>

<p>

Vi vil betragte tre tilfælde af løsningsformlen for andengradsligninger for at konkludere resultatet i sætningen.

```{prf:bevis}
:class: text

Løsningenformlen fra {prf:ref}`loesningandengrad<loesningandengrad>` lød

$$

    x = \frac{-b\pm \sqrt{d}}{2a}

$$

Vi starter med at vise resultatet for $d<0$ (nul rødder): Antag $d<0$. Af {prf:ref}`ligeoguligeroedder<ligeoguligeroedder>` fra {ref}`Kapitel 1.7<roedder>` ved vi, at hvis radikanden er negativ, så findes roden ikke. Ergo har vi, at 

$$

    \frac{-b\pm \sqrt{d}}{2a}

$$

ikke kan regnes, da $\sqrt{d}$ ikke kan regnes. Dermed nul rødder.

Vi viser nu resultatet for $d>0$ (to rødder): Antag $d>0$. Da har vi, at brøken

$$

    \frac{-b\pm \sqrt{d}}{2a}

$$

vil have to forskellige værdier for $+$´et og $-$´et. Dermed to rødder.

Afslutningsvis har vi resultatet for $d=0$ (én rod): Antag $d=0$. Da har vi, at brøken giver

$$

    \frac{-b\pm \sqrt{d}}{2a} = \frac{-b\pm 0}{2a} = \frac{-b}{2a}

$$

da $\sqrt{d} = 0$, og af dette kan vi se, at vi kun får én løsning for $x$.

```
</p>

</details>

```{exercise}
:class: dropdown
 
Kig på diskriminanten $d = b^2 - 4ac$. Kan du sige noget om, hvornår følgende gælder:

* $d > 0$?
* $d = 0$?
* $d < 0$?

```

```{prf:eksempel}

Lad os løse andengradsligningen

$$

    2x^2 - 6x - 8 = 0.
    
$$

Vi kan se, at vi har en ordnet andengradsligning og vi kan derfor direkte benytte løsningsformlen fra {prf:ref}`loesningandengrad<loesningandengrad>`, hvor

$$

    a = 2 \qquad b = -6 \qquad c = -8

$$

Indsætter vi disse værdier, så kan vi se, at vi får en positiv diskriminant, hvilket, vi ved fra {prf:ref}`diskriminanten<diskriminanten>`, giver, at vores ligning har to løsninger:

$$
\begin{align*}
    x   &= \frac{-(-6) \pm \sqrt{(-6)^2 - 4\cdot 2 \cdot (-8)}}{2\cdot 2} \\    
        &= \frac{6 \pm \sqrt{36 + 64}}{4} \\
        &= \frac{6 \pm \sqrt{100}}{4} \\
        &= \frac{6 \pm 10}{4} 
\end{align*}
$$ 

Dermed får vi to løsninger, nemlig

$$
    
    x = 4 \vee x = -1.
    
$$

```

## Opgaver

```{prf:opgave}

Bestem grundmængderne for ligningerne og løs dem efterfølgende:

&nbsp; &nbsp; a) $3x^2 + 3x - 18 = 0$ \
&nbsp; &nbsp; b) $\frac{1}{2}x^2 - \frac{1}{2}x - 1 = 0$ \
&nbsp; &nbsp; c) $8x^2 + 36x + 16 = 0$ \
&nbsp; &nbsp; c) $2x^2 - \frac{2}{3} x - \frac{4}{9} = 0$ 

```

```{prf:opgave}

Bestem koefficienterne $a$ og $b$ og konstanten $c$ i ligningerne og løs dem efterfølgende:

&nbsp; &nbsp; a) $x^2 - 9 = 0$ \
&nbsp; &nbsp; b) $2x^2 - 2 = 0$ \
&nbsp; &nbsp; c) $x^2 = 0$ \
&nbsp; &nbsp; c) $2x^2 - 2x = 0$ 

```

```{prf:opgave}

Bestem grundmængderne for ligningerne og løs dem efterfølgende:

&nbsp; &nbsp; a) $4x^2 + 10x + 4 = 8 - 5x$ \
&nbsp; &nbsp; b) $x^2 + \frac{3}{2}x = - 1 + \frac{1}{2} x^2$ \
&nbsp; &nbsp; c) $2(5x^2 + 20x) + 5 = -\frac{24x+10}{2}$ \
&nbsp; &nbsp; c) $4(x^2 - 8) - 2x = -2(x - 2)$ 

```

```{prf:opgave}

Bestem grundmængderne for ligningerne og løs dem efterfølgende:

&nbsp; &nbsp; a) $\frac{3x}{2+x} = \frac{2}{2-x} - 1$ \
&nbsp; &nbsp; b) $x+\frac{1}{x} = \frac{2}{x}$ \
&nbsp; &nbsp; c) $\frac{2}{x^2} + 3 - \frac{2}{x} = 7$ \
&nbsp; &nbsp; c) $\frac{x^2 - 2x + 8}{x^2 + 2x - 4} = \frac{2x + 8}{x+4}$ 

```

```{prf:opgave}

Bestem grundmængderne for ligningerne og løs dem efterfølgende:

&nbsp; &nbsp; a) $\frac{2x-4}{x} = \frac{x + 10}{2}$ \
&nbsp; &nbsp; b) $4-2x(x-1)= -\frac{2x^2 - 4x}{2}$ \
&nbsp; &nbsp; c) $\frac{2}{x+2} - \frac{3}{1-x} = -2$ \
&nbsp; &nbsp; c) $3(x-2)-2= \frac{3x}{2x+4} - \frac{2x}{x+2} + \frac{4-2x}{x+2}$ 

```