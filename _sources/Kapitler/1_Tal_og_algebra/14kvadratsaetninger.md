# Kvadratsætninger
Inden vi skal til kvadratsætningerne, så er det vigtigt, at vi har styr på, hvordan vi ganger to parenteser sammen. For hvordan ganger vi parentesen sammen nedenfor?

$$

    (a+b)(c+d)

$$

Heldigvis har vi en meget god huskeregel om, at vi kan gange på kryds:

```{figure} k0.gif
---
scale: 100 %
align: center
---
```

Det kan vi samle i første sætning:

```{prf:sætning} 
:label: k0

Lad $a$, $b$, $c$ og $d$ være vilkårlige tal, da gælder følgende identitet:

$$

    (a+b)(c+d) = ab + ac + bc + bd 
    \tag{K0} 

$$

```
<details open style = "margin-block-end: 1em">

<summary>Bevis</summary>

<p> 

Vi vil i beviset for sætningen bruge en kombination af regnearternes hierarki og den distributive lov.

```{prf:bevis} 

Vi skal vise, at 

$$

    (a+b)(c+d)=ac+ad+bc+bd.

$$

Kigger vi på venstre-siden af lighedstegnet, så kunne vi lade $x=a+b$. Det kan vi gøre, eftersom den sum alligevel står i en parentes og derfor ifølge regnehierarkiet skal regnes først. Da kan vi skrive udtrykket

$$

    x(c+d)

$$

Denne metode kaldes ”at substituere”, og det er absolut ikke sidste gang, at du kommer til at møde den. Eftersom vi har kombinationen af $+$ og $\cdot$, så kan vi bruge den distributive lov

$$

    x(c+d) = xc+xd

$$

Tilbagesubstituér nu $x=a+b$ i udtrykket ovenfor:

$$

    (a+b)c+(a+b)d

$$

Igen kan vi bruge den distributive lov:

$$

    \underbrace{(a+b)c}_{=ac+bc} + \underbrace{(a+b)d}_{=ad+bd} = ac + bc + ad + bd

$$

Rykker vi rundt på leddene (hvilket vi kan gøre, da $+$ er kommutativt) og læser op gennem lighederne, så får vi netop den lighed, der er givet i sætningen.
```

</p>

</details>


Det er en rigtig god idé, at sætte sig godt ind i beviset ovenfor, da det viser brugen af substitution, som du kommer til at bruge senere. Så, hvis ikke du forstod beviset første gang, så læs det igen.

```{exercise}
:class: dropdown

Kan du vise, at $(a-b)(c-d)=ac-ad-bc+bd$? 

<details>
<summary>Hint</summary>
<p>

Tag udgangspunkt i beviset for {prf:ref}`k0<k0>`, brug din viden omkring, hvordan man regner med negative tal og brug den distributive lov.

</p>
</details>

```

## Tre vigtige formler

{prf:ref}`k0<k0>` har tre såkaldte specialtilfælde, som vi kender som kvadratsætningerne. Når vi siger kvadrat, så menes der 2’er potens og vi vil se, at kvadratsætningerne kan illustreres som arealer (af kvadrater) og ligeledes bevises geometrisk. 

```{prf:sætning} 1. kvadratsætning
:label: k1

Lad $a$ og $b$ være vilkårlige tal, da gælder følgende identitet:

$$

    (a+b)^2 = a^2 + b^2 + 2ab
    \tag{K1} 

$$

```

<details style = "margin-block-end: 1em;">

<summary>Bevis</summary>

<p> 

Vi vil bevise ligheden ved brug af geometri. Vi ved, hvordan vi finder arealer af firkanter og det vil vi bruge her.

````{prf:bevis}
:class: text

Ligheden kan vises ved følgende nedbrydning af kvadratet med sidelængden $a+b$:

```{figure} sqthm1.gif
---
scale: 50 %
align: center
---
```

Kvadratet på den to-leddet sum kan nedbrydes i mindre firkanter og når disse lægges sammen, så fås netop 1. kvadratsætning.

````

</p>

</details>

```{figure} 1kvadratthm.png
---
scale: 75 %
align: center
---
Visualisering af 1. kvadratsætning

```

{prf:ref}`Første kvadratsætning<k1>` lyder som følgende: 

*<center>Kvadratet på en to-leddet sum er summen af kvadratet på første led, kvadratet på andet led og det dobbelte produkt af de to led.</center>*

```{prf:sætning} 2. kvadratsætning
:label: k2

Lad $a$ og $b$ være vilkårlige tal, da gælder følgende identitet:

$$

    (a-b)^2 = a^2 + b^2 - 2ab
    \tag{K2} 

$$

```

<details style = "margin-block-end: 1em">

<summary>Bevis</summary>

<p> 

Vi vil bevise ligheden ved brug af geometri. Vi ved, hvordan vi finder arealer af firkanter og det vil vi bruge her.

````{prf:bevis}
:class: text

For at kunne bevise sætningen geometrisk, så vil vi antage, at sidelængden $a$ opfylder, at den er længere end $b$, det vil sige at $0<b<a$: 

```{figure} sqthm2.gif
---
scale: 50 %
align: center
---
```

Vi ser, at kvadratet med sidelængden $a$ kan nedbrydes og vi kan opstille følgende lighed:

$$

    a^2 = b^2 + (a-b)^2 + 2b(a-b)

$$

Hvis vi reducerer højresiden af ligheden, så får vi

$$

    b^2 + (a-b)^2 + 2b(a-b) = b^2 + (a-b)^2 + 2ab - 2b^2 = (a-b)^2 + 2ab - b^2

$$

Indsætter vi det reduceret udtryk fra før, så kan vi omrokere, så vi får det ønskede:

$$
\begin{align*}
& & a^2 &= (a-b)^2 + 2ab - b^2 & \\
&\Leftrightarrow & (a-b)^2 &= a^2 + b^2 - 2ab & 
\end{align*}
$$

````
</p>

</details>

```{figure} 2kvadratthm.png
---
scale: 75 %
align: center
---
Visualisering af 2. kvadratsætning

```

{prf:ref}`Anden kvadratsætning<k2>` lyder som følgende: 

*<center>Kvadratet på en to-leddet differens er summen af kvadratet på første led og kvadratet på andet led, fratrukket det dobbelte produkt af de to led.</center>*

```{prf:sætning} 3. kvadratsætning
:label: k3

Lad $a$ og $b$ være vilkårlige tal, da gælder følgende identitet:

$$

    (a+b)(a-b) = a^2 - b^2
    \tag{K3} 

$$

```

<details style = "margin-block-end: 1em">

<summary>Bevis</summary>

<p>

Vi vil bevise ligheden ved brug af geometri. Vi ved, hvordan vi finder arealer af firkanter og det vil vi bruge her.

````{prf:bevis}
:class: text

Ligesom {prf:ref}`2. kvadratsætning<k2>`, vil vi antage, at $0<b<a$, og da har vi:

```{figure} sqthm3.gif
---
scale: 50 %
align: center
---
```

Vi forestiller os, at vi rykker det opmarkerede kvadrat med sidelængderne $a-b$ og $b$, så den ryger i forlængelse med rektanglet med sidelængderne $a$ og $a-b$. Vi kan se, at arealerne er velbevarede, hvilket betyder, at ligheden fra sætningen må gælde.

````

</p>

</details>

```{figure} 3kvadratthm.png
---
scale: 75 %
align: center
---
Visualisering af 3. kvadratsætning

```

Tredje kvadratsætning lyder som følgende: 

*<center>Produktet af to tals sum og de samme to tals differens, er kvadratet på første led fratrukket kvadratet på andet led, siger tredje kvadratsætning.</center>*

```{exercise} Algebraisk visning af kvadratsætningerne
:class: dropdown

Gå tilbage til {prf:ref}`1.<k1>`, {prf:ref}`2.<k2>` og {prf:ref}`3. kvadratsætning<k3>` og brug din viden om, hvordan man ganger to parenteser sammen, til at reducere kvadratsætningerne og vise, at lighederne holder.

```


## Opgaver

```{prf:opgave}

Reducer følgende udtryk og forklar undervejs hvilke regneregler, du bruger:

&nbsp; &nbsp; a) $(a-b)(a+2b)-(a+2b)(2a-3b)$ \
&nbsp; &nbsp; b) $-(a-b)+(2a+b)(a+2b)-a^2$ \
&nbsp; &nbsp; c) $(a^2+b)(a+b)+a^3-2b$ \
&nbsp; &nbsp; d) $3a-(-a^2+(a-b)(2a+2b))$ 

```

```{prf:opgave}

Reducer følgende udtryk og forklar undervejs hvilke regneregler, du bruger:

&nbsp; &nbsp; a) $(a-b)^2 + a^2 - 3ab$ \
&nbsp; &nbsp; b) $(2a+b)^2+(2a-b)^2+ab$ \
&nbsp; &nbsp; c) $(4a+b)(4a-b)+(a+2b)^2$ \
&nbsp; &nbsp; d) $2(2a+4b)^2-2ab-(a-b)^2$ 

```