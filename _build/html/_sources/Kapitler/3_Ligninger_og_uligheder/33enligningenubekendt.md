# En ligning med en ubekendt

I folkeskolen lærte du at løse en ligning med en ubekendt. I næste kapitel skal du lære at løse to ligninger med to ubekendte. 

Når vi snakker om ligninger, så er vi vant til, at den ubekendte er $x$. I bund og grund kan den ubekendte tage mange former og behøver ikke være $x$. Det kommer an på konteksten, for mange gange kan det give mening, at det er et bestemt bogstav, der bruges som den ubekendte. For eksempel, hvis en rektangel har arealet 16 og længde 3, så kan vi hurtigt bestemme, at bredden er 6. Vi kender jo arealformlen for et rektangel $A=lb$, fra folkeskolen. Så det, som vi faktisk gør, er, at vi opstiller ligningen

$$

    3b = 16,

$$

hvor den ubekendte er $b$. Det giver god mening, for det er jo det bogstav, som vi normalt bruger i arealformlen. 

I dette kapitel vil vi dog holde os til $x$, og så bare huske på, at den ubekendte kunne være ethvert bogstav. 

## Simple ligninger

Et eksempel på én ligning med én ubekendt kunne være

$$

    3(2x+12)=18+3x.

$$

Som du kunne læse i forrige afsnit, så skal vi, når vi løser en ligning, finde det $x$, der opfylder, at det der ender med at stå på venstresiden af lighedstegnet, bliver det samme som det, der ender med at stå på højresiden. Derfor vil løsningen her være $x=-6$, da

$$
\begin{align*}
    &3(2\cdot (-6) + 12) = 3\cdot 0 = 0\\
    &18+3\cdot (-6) = 18 + (-18) = 0.  
\end{align*}
$$

Det er en god idé, at du ved, hvad der foregår, når du løser en ligning. Derfor er det en god øvelse at løse ligningerne i trin og så forklare, hvad der sker i de forskellige trin.

```{prf:eksempel}
:label: enligningenubekendteks1

Lad os løse ligningen:

$$

    2(x-8)+4x-12=2-3(2-4x)

$$

Først skal vi bestemme grundmængden. Eftersom, der hverken er brøker eller rødder i ligningen, så ser vi, at $G=\mathbb{R}$.

Ligningen ser forholdsvis kompliceret ud, men vi kan reducere den til noget, som er nemmere at have med at gøre. Det gør vi ved først at ordne ligningen. Det betyder, at vi regner parenteserne ud og samler alt, der har med $x$ at gøre på den ene side og resten på den anden side af lighedstegnet. En god huskeregel er at samle $x$'erne på den side af lighedstegnet, hvor der er flest af dem.

$$
\begin{align*}
&                &  2(x-8)+4x-12 &= 2-3(2-4x)     &   &\text{Udregn parenteserne} \\
&\Leftrightarrow &  2x-16+4x-12 &= 2-6+12x        &   &\text{Reducér begge sider} \\
&\Leftrightarrow &  6x-28 &= -4+12x               &   &\text{Saml $x$'erne på højresiden} \\
&\Leftrightarrow &  \cancel{6x}-28\cancel{-6x} &= -4+12x-6x &   &\text{Saml resten på venstresiden} \\
&\Leftrightarrow &  -28+4  &= \cancel{-4}+12x-6x\cancel{+4} &  &\text{Reducér begge sider} \\
&\Leftrightarrow &  -24 &= 6x                     &   &\text{Dividér med 6 på begge sider} \\
&\Leftrightarrow &  \frac{-24}{6} &= \frac{\cancel{6}x}{\cancel{6}} &   &\text{Regn brøken på venstresiden} \\
&\Leftrightarrow &  -4 &= x
\end{align*}
$$

Det er altid en god idé at lave en kontrol. Lad os indsætte $x=-4$ i vores oprindelige ligningsudtryk:

$$
\begin{align*}
& 2(-4-8)+4\cdot(-4)-12 & -24 - 16 - 12 = -52 \\
& 2-3(2-4\cdot(-4))=2-3(2+16) = -52
\end{align*}
$$

Løsningen giver, at venstre- og højresiden af ligningen er identiske.
```

Når vi løser en ligning, som vi lige gjorde i {prf:ref}`enligningenubekendteks1<enligningenubekendteks1>`, så udnytter vi, at "en regneoperator har en modsat regneoperator": Forestil dig, at $a$ er et eller andet tal:

* Det modsatte af at lægge $a$ til er at trække $a$ fra og omvendt.

* Det modsatte af at gange med $a$ er at dividere med $a$ og omvendt.

* Det modsatte af at tage $a$ i $n$'te potens er at tage den $n$'te rod og omvendt.

```{exercise}
:class: dropdown
 
Gå tilbage til {prf:ref}`enligningenubekendteks1<enligningenubekendteks1>`. 

Forklar ved brug af modsatte regneoperationer, hvad der sker i følgende trin:

$$
\begin{align*}
& & &\ \ \,\vdots & &\\
&\text{Trin 3} & &\Leftrightarrow & \cancel{6x}-28\cancel{-6x} &= -4+12x-6x \\
&\text{Trin 4} & &\Leftrightarrow & -28+4  &= \cancel{-4}+12x-6x\cancel{+4} \\
& & &\ \ \,\vdots & &\\
&\text{Trin 6} & &\Leftrightarrow & \frac{-24}{6} &= \frac{\cancel{6}x}{\cancel{6}}
\end{align*}
$$

```

Ligningen fra {prf:ref}`enligningenubekendteks1<enligningenubekendteks1>` kaldes en simpel ligning, og kan reduceres ned til formen

$$

    ax+b=c.

$$

Simple ligninger har formen som førstegradsligninger og senere vil vi beskæftige os med højere ordens ligninger. Vi vil især gå i dybden med andengradsligninger. Grunden til, at vi kalder dette en førstegradsligning, skyldes, at $x$ kan skrives som $x=x^1$. 

Kan vi reducere ligninger ned på denne form, så har vi en sætning for, hvordan løsningen vil være givet:

```{prf:sætning} Løsningsformlen for førstegradsligninger
:label: loesningfoerstegrad

Givet er en ligning på formen

$$

    ax+b=0,

$$

hvor $a\neq 0$. Da er løsningen til ligningen givet ved 

$$

    x = -\frac{b}{a}.

$$

```

<details style = "margin-block-end: 1em">

<summary>Bevis</summary>

<p>

Vi beviser sætningen ved at bruge de elementære operationer beskrevet i {ref}`Kapitel 3.1<lighedogligevaegt>`.

```{prf:bevis}
:class: text

Antag $a\neq 0$ og at vi har en ligning på formen

$$

    ax+b=0.
    
$$

Vi løser ligningen ved brug af de elementære operationer:

$$
\begin{align*}
&                &  ax+b &= 0     \\
&\Leftrightarrow &  ax &= -b    \\         
&\Leftrightarrow &  x &= -\frac{b}{a} &   & 
\end{align*}
$$

Sidste trin giver resultatet fra sætningen.

```
</p>

</details>

```{exercise}
:class: dropdown
 
I beviset for {prf:ref}`loesningfoerstegrad<loesningfoerstegrad>` er trinene for løsningen af ligningen "grove". Lav samtlige løsningstrin og skriv, hvad du gør og kom frem til samme resultat.

```

```{exercise}
:class: dropdown
 
Hvorfor er det vigtigt, at $a\neq 0$ i {prf:ref}`loesningfoerstegrad<loesningfoerstegrad>`?

<details>
<summary>Hint</summary>
<p>

Hvad sker der, hvis $a=0$ i ligningen $ax+b=0$?

</p>
</details>

```

```{prf:korollar} 
:label: loesningfoerstegrad2

Givet er en ligning på formen

$$

    ax+b=c,

$$

hvor $a\neq 0$. Da er løsningen til ligningen givet ved 

$$

    x = \frac{c-b}{a}.

$$

```

<details style = "margin-block-end: 1em">

<summary>Bevis</summary>

<p>

Korollaret er et resultat af {prf:ref}`loesningfoerstegrad<loesningfoerstegrad>`, hvor vi vælger $b$ på en bestemt måde.
 
```{prf:bevis}
:class: text

Lad $b=\tilde{b} - c$ i {prf:ref}`loesningfoerstegrad<loesningfoerstegrad>`, og brug resultatet. 

```
</p>

</details>

```{exercise}
:class: dropdown
 
Fuldend beviset for {prf:ref}`loesningfoerstegrad2<loesningfoerstegrad2>` ved rent faktisk at gøre det, der bliver skrevet i beviset for korollaret. Kan du endda selv ved hjælp af de elementære operationer komme frem til resultatet i korollaret?

```

### Simple ligninger med brøker

Har vi ligninger der indeholder brøker, så skal vi være opmærksomme, som vi også så i {ref}`Kapitel 3.2<grundmaengder>`. Det behøver vi dog ikke nødvendigvis at være, hvis ikke $x$'et står i nævneren. For eksempel 

$$

    \frac{2x}{3} - 1 = -5

$$

har grundmængden $G=\mathbb{R}$. Vi kan også se, at dette er en førstegradsligning, da

$$
\begin{align*}
&                   &           \frac{2x}{3} - 1 &= -5 \\
&\Leftrightarrow    &           \frac{2}{3}x - 1 &= -5.
\end{align*}
$$

Vi kan "hive" $x$'et ned foran brøken, da vi har en brøkregneregel, der giver os dette. Det betyder, at vi kan bruge {prf:ref}`loesningfoerstegrad2<loesningfoerstegrad2>` til at finde løsningen:

$$

    x = \frac{-5-(-1)}{\frac{2}{3}} = \frac{-4}{\frac{2}{3}} = \frac{-4\cdot 3}{2} = \frac{-12}{2} = -6.

$$

```{exercise}
:class: dropdown
 
Løs $\frac{2x}{3} - 1 = -5$ ved at isolere $x$ i ligningen på sædvanligvis. Får du også $x=-6$, som {prf:ref}`loesningfoerstegrad<loesningfoerstegrad>` foreslår?

```

```{prf:eksempel}
:label: simpelligningmedbroek1

Lad os løse ligningen:

$$

    5x + 1 - \frac{(2 - x)(2x - 10)}{3} = \frac{2x^2}{3}

$$

Først bestemmer vi grundmængden. Eftersom vi ikke har $x$ i nævneren, så må $G=\mathbb{R}$. Vi løser dernæst ligningen

$$
\begin{align*}
&                &  5x + 1 - \frac{(2 - x)(2x - 10)}{3} &= \frac{2x^2}{3}     &   &\text{Udregn parenteserne} \\
&\Leftrightarrow &  5x + 1 - \frac{4x-20-2x^2+10x}{3} &= \frac{2x^2}{3}     &   &\text{Reducér tælleren} \\
&\Leftrightarrow &  5x + 1 - \frac{-2x^2+14x-20}{3} &= \frac{2x^2}{3}     &   &\text{Gang med 3 på begge sider} \\
&\Leftrightarrow &  3\bigg(5x + 1 - \frac{-2x^2+14x-20}{3}\bigg) &= \frac{2x^2}{\cancel{3}}\cdot\cancel{3}     &   &\text{Gang 3 ind i parentes} \\
&\Leftrightarrow &  15x + 3 - (-2x^2+14x-20) &= 2x^2     &   &\text{Reducér venstresiden} \\ 
&\Leftrightarrow &  2x^2 + x + 23 &= 2x^2     &   &\text{Træk $2x^2$ fra på begge sider} \\
&\Leftrightarrow &  \cancel{2x^2} + x + 23 \cancel{-2x^2} &= \cancel{2x^2} \cancel{-2x^2} &   &\text{Reducér begge sider} \\  
&\Leftrightarrow &  x + 23 &= 0 &   &\text{Træk 23 fra på begge sider} \\  
&\Leftrightarrow &  x \cancel{+23} \cancel{-23} &= 0 - 23   &   &\text{Reducér begge sider} \\  
&\Leftrightarrow &  x &= - 23   &   & \\  
\end{align*}
$$

Vi laver vores kontrol. Indsæt $x= - 23$ i vores oprindelige ligningsudtryk. Vi regner først venstresiden:

$$
\begin{align*}
5\cdot(-23) + 1 - \frac{(2-(-23))(2\cdot(-23)-10)}{3} &= -115 + 1 - \frac{25\cdot (-56)}{3} \\ 
    &= -115 + 1 - \frac{-1400}{3} \\
    &= \frac{-115\cdot 3}{3} + \frac{1\cdot 3}{3} - \frac{-1400}{3} \\
    &= \frac{-345+3-(-1400)}{3} \\
    &= \frac{1058}{3} \\
\end{align*}
$$

Vi regner dernæst højresiden:

$$\frac{2\cdot(-23)^2}{3} = \frac{2\cdot 529}{3} = \frac{1058}{3}$$

Løsningen giver, at venstre- og højresiden af ligningen er identiske.
```

```{prf:eksempel}
:label: simpelligningmedbroek2

Lad os løse ligningen:

$$

    \frac{5}{2x + 1} - \frac{1}{2x - 4} = \frac{9}{12x + 6}

$$

Først bestemmer vi grundmængden. Vi har tre brøker med $x$ i nævneren, hvilket potentielt betyder, at vi kan have tre $x$-værdier, der kan give 0 i nævnerne. Betragt først

$$

    2x+1 = 0,

$$

der løses af $x=-\frac{1}{2}$. Betragt dernæst

$$

    2x-4 = 0,

$$

der løses af $x=2$. Betragt afslutningsvis 

$$

    12x + 6 = 0,

$$

der også løses af $x=-\frac{1}{2}$. Det betyder, at grundmængden er givet ved

$$

    G = \bigg\{ x \in \mathbb{R} \mid x \neq -\frac{1}{2} \vee x\neq 2 \bigg\}.

$$

Vi løser dernæst ligningen. Vi gennemgår dette eksempel lidt mere i detaljen, da det kan være ret kompliceret at reducere denne ligning til en simpel ligning:

$$

    \frac{5}{2x + 1} - \frac{1}{2x - 4} = \frac{9}{12x + 6}

$$

Vi starter med at finde fællesnævner på venstresiden:

$$

    \Leftrightarrow \quad  \frac{5(2x-4)-(2x+1)}{(2x + 1)(2x-4)} = \frac{9}{12x + 6}

$$

Vi kan dernæst faktorisere 6 ud i nævneren på højresiden:

$$

    \Leftrightarrow \quad \frac{5(2x-4)-(2x+1)}{(2x + 1)(2x-4)} = \frac{9}{6(2x + 1)}

$$

Bemærk, at vi også har $2x+1$ i nævneren på venstresiden, så hvis vi forlænger brøken på højresiden med $2x-4$, og samtidig forlænger med 6 på venstresiden, så har vi også skabt fællesnævner henover lighedstegnet:

$$

    \Leftrightarrow \quad \frac{6(5(2x-4)-(2x+1))}{6(2x+1)(2x-4)} = \frac{9(2x-4)}{6(2x+1)(2x-4)}

$$

Ganger vi nu med $6(2x+1)(2x-4)$ på begge sider, så fjerner vi brøken på begge sider, da nævneren netop går ud med det, som vi ganger med:

$$

    \Leftrightarrow \quad 6(5(2x-4)-(2x+1)) = 9(2x-4)

$$

Vi har nu en simpel ligning og løser den på sædvanligvis:

$$
\begin{align*}
&                   &   6(5(2x-4)-(2x+1)) &= 9(2x-4) &  &\text{Udregn parenteserne på begge sider}\\
&\Leftrightarrow    &   48x-126 &= 18x-36            &  &\text{Saml x'erne på venstresiden}\\
&\Leftrightarrow    &   48x-126-18x &= \cancel{18x}-36\cancel{-18x} &   &\text{Saml resten på højresiden}\\
&\Leftrightarrow    &   48x\cancel{-126}-18x\cancel{+126}&= -36+126 &   &\text{Reducér begge sider}\\
&\Leftrightarrow    &   30x &= 90 &   &\text{Dividér med 30 på begge sider}\\
&\Leftrightarrow    &   \frac{\cancel{30}x}{\cancel{30}} &= \frac{90}{30} &   &\text{Regn brøken på højresiden}\\
&\Leftrightarrow    &   x &= 3 &   & \\
\end{align*}
$$

Vi laver vores kontrol. Indsæt $x = 3$ i vores oprindelige ligningsudtryk. Vi regner først venstresiden:

$$
\begin{align*}
\frac{5}{2\cdot 3 + 1} - \frac{1}{2 \cdot 3 - 4} &= \frac{5}{7}-\frac{1}{2} \\
    &= \frac{5\cdot 2 - 1\cdot 7}{7\cdot 2} \\
    &= \frac{10-7}{14} \\
    &= \frac{3}{14}
\end{align*}
$$

Vi regner dernæst højresiden:

$$\frac{9}{12\cdot 3 + 6} = \frac{9}{42} = \frac{9:3}{42:3} = \frac{3}{14}$$

Løsningen giver, at venstre- og højresiden af ligningen er identiske.
```

(simpleligningermedhoejereordensled)=
### Simple ligninger med højere ordens led

Som vi har set, så var simple ligninger nogle, der kunne reduceres ned på formen af førstegradsligninger

$$

    ax+b=0.

$$

Men vi kan også have simple ligninger, der har formen

$$

    ax^n + b = 0.

$$ 

Disse typer ligninger kalder vi *simple ligninger med højere ordens led*. Det kunne for eksempel være $x^4 = 16$, som også er en fjerdegradsligning, $2x^3 = 18$, som også er en tredjegradsligning eller $x^2 + 4 = 8$, som også er en andengradsligning. Når vi snakker om ordenen eller graden, så er det den højeste eksponent, der bestemmer, hvad graden af ligningen er. Vi kan nemlig også have ligninger med flere led med forskellige grader. For eksempel

$$

    2x^2 + 4x - 8 = 0

$$

er en andengradsligning, da den højeste eksponent er 2, men dette er ikke en simpel ligning, da den ikke kan reduceres til formen fra før. Det skyldes, at vi her har leddet $4x$. Men hvis ligningen kun var

$$

    2x^2 - 8 = 0,

$$

så var vi i tilfældet med en simpel ligning af anden grad eller anden orden. 

```{prf:eksempel}
:label: simpelligninguligegrad

Lad os løse ligningen:

$$

    x^3 - 1 = 124

$$

Først bestemmer vi grundmængden. Eftersom vi ikke har rødder eller brøker i vores oprindelige ligningsudtryk, så må $G=\mathbb{R}$. Vi løser dernæst ligningen

$$
\begin{align*}
&                &  x^3 - 1 &= 124     &   &\text{Læg 1 til på begge sider} \\
&\Leftrightarrow &  x^3 \cancel{-1} \cancel{+1} &= 124 + 1      &   &\text{Reducér begge sider} \\
&\Leftrightarrow &  x^3 &= 125               &   &\text{Tag $\sqrt[3]{\ }$ på begge sider} \\
&\Leftrightarrow &  \sqrt[\cancel{3}]{x^{\cancel{3}}} &= \sqrt[3]{125} &   &\text{Reducér begge sider} \\
&\Leftrightarrow &  x &= 5                    &   & 
\end{align*}
$$

Vi laver vores kontrol. Indsæt $x=5$ i vores oprindelige ligningsudtryk:

$$
\begin{align*}
& 5^3 - 1 = 125 - 1 = 124
\end{align*}
$$

Løsningen giver, at venstre- og højresiden af ligningen er identiske.
```

```{prf:eksempel}
:label: simpelligningligegrad

Lad os løse ligningen:

$$

    4x^2 + 12 = 268

$$

Først bestemmer vi grundmængden. Eftersom vi ikke har rødder eller brøker i vores oprindelige ligningsudtryk, så må $G=\mathbb{R}$. Vi løser dernæst ligningen

$$
\begin{align*}
&                &  4x^2 + 12 &= 268     &   &\text{Træk 12 fra på begge sider} \\
&\Leftrightarrow &  4x^2 \cancel{+12} \cancel{-12} &= 268 - 12      &   &\text{Reducér begge sider} \\
&\Leftrightarrow &  4x^2 &= 256               &   &\text{Dvidér med 4 på begge sider} \\
&\Leftrightarrow &  \frac{\cancel{4}x^2}{\cancel{4}} &= \frac{256}{4} & &\text{Reducér begge sider} \\
&\Leftrightarrow &  x^2 &= 64           &   &\text{Tag $\sqrt{\ }$ på begge sider} \\
&\Leftrightarrow &  \sqrt{x^{\cancel{2}}} &= \pm \sqrt{64} &   &\text{Reducér begge sider} \\
&\Leftrightarrow &  x &= \pm 8                    &   & 
\end{align*}
$$

Bemærk, at vi har to løsninger, nemlig $x=8$ eller $x=-8$. Det skyldes, at når vi har en lige eksponent, så vil både et tal og det modsatte tal give samme potens. Lad os lave vores kontrol med begge løsninger og overbevise, at dette gælder generelt.

Indsæt $x=8$ i vores oprindelige ligningsudtryk:

$$
\begin{align*}
& 4\cdot 8^2 + 12 = 4\cdot 64 + 12 = 256 + 12 = 268
\end{align*}
$$

Indsæt nu $x=-8$ i vores oprindelige ligningsudtryk:

$$
\begin{align*}
& 4\cdot (-8)^2 + 12 = 4\cdot 64 + 12 = 256 + 12 = 268
\end{align*}
$$

Løsningerne giver, at venstre- og højresiden af ligningen er identiske.
```

Som du måske kan aflede af de to eksempler, så sker der noget med antallet af løsninger, når graden er lige eller ulige. 

* Hvis graden er lige og $\frac{c-b}{a}>0$, så har vi, ligesom {prf:ref}`simpelligningligegrad<simpelligningligegrad>`, to reelle løsninger givet ved

$$

    x = \pm \sqrt[n]{\frac{c-b}{a}}.

$$

* Hvis graden er ulige, så har vi, ligesom {prf:ref}`simpelligninguligegrad<simpelligninguligegrad>`, en reel løsning givet ved

$$

    x = \sqrt[n]{\frac{c-b}{a}}.

$$

```{exercise}
:class: dropdown
 
Lav tre eksempler på simple ligninger med højere ordens led af lige grad og overbevis dig selv om, at første punkt ovenfor er sand ved at bruge løsningsformlen.

```

### Simple ligninger med rødder

Vi kan også møde ligninger på formen

$$

    a\sqrt[n]{x} + b = 0.

$$

Husk, når vi arbejder med de lige rødder i ligninger, så skal radikanden være positiv, som vi også diskuterede i {ref}`Kapitel 3.2<grundmaengder>`. 

```{prf:eksempel}
:label: simpelligninguligerod

Lad os løse ligningen:

$$

    \sqrt[3]{x} - 7 = -10

$$

Først bestemmer vi grundmængden. Eftersom vi har med en ulige rod at gøre, så må $G=\mathbb{R}$. Vi løser dernæst ligningen

$$
\begin{align*}
&                &  \sqrt[3]{x} - 7 &= -10     &   &\text{Læg 7 til på begge sider} \\
&\Leftrightarrow &  \sqrt[3]{x} \cancel{-7} \cancel{+7} &= -10 + 7     &   &\text{Reducér begge sider} \\
&\Leftrightarrow &  \sqrt[3]{x} &= -3              &   &\text{Tag $(\ )^3$ på begge sider} \\
&\Leftrightarrow &  (\sqrt[\cancel{3}]{x})^{\cancel{3}} &= (-3)^3 &   &\text{Reducér begge sider} \\
&\Leftrightarrow &  x &= -27                    &   & 
\end{align*}
$$

Vi laver vores kontrol. Indsæt $x=-27$ i vores oprindelige ligningsudtryk:

$$
\begin{align*}
& \sqrt[3]{-27} - 7 = -3 - 7 = - 10
\end{align*}
$$

Løsningen giver, at venstre- og højresiden af ligningen er identiske.
```

```{prf:eksempel}
:label: simpelligningligerod

Lad os løse ligningen:

$$

    2\sqrt[4]{x} + 1 = 2

$$

Først bestemmer vi grundmængden. Eftersom vi har med en lige rod at gøre, så må $G=\{x\in\mathbb{R}\mid x\geq 0\}$. Vi løser dernæst ligningen

$$
\begin{align*}
&                &  2\sqrt[4]{x} + 1 &= 2     &   &\text{Træk 1 fra på begge sider} \\
&\Leftrightarrow &  2\sqrt[4]{x} \cancel{+1} \cancel{-1} &= 2 - 1    &   &\text{Reducér begge sider} \\
&\Leftrightarrow &  2\sqrt[4]{x} &= 1              &   &\text{Dividér med 2 på begge sider} \\
&\Leftrightarrow &  \frac{\cancel{2}\sqrt[4]{x}}{\cancel{2}} &= \frac{1}{2}     &   &\text{Reducér begge sider} \\
&\Leftrightarrow &  \sqrt[4]{x} &= \frac{1}{2}     &   &\text{Tag $(\ )^4$ på begge sider} \\
&\Leftrightarrow &  (\sqrt[\cancel{4}]{x})^{\cancel{4}} &= \bigg(\frac{1}{2} \bigg)^4   &   &\text{Reducér begge sider} \\ 
&\Leftrightarrow &  x &= \frac{1}{16}
\end{align*}
$$

Vi laver vores kontrol. Indsæt $x=\frac{1}{16}$ i vores oprindelige ligningsudtryk:

$$
\begin{align*}
& 2\sqrt[4]{\frac{1}{16}} + 1 = 2\cdot\frac{\sqrt[4]{1}}{\sqrt[4]{16}} + 1 = \cancel{2}\cdot\frac{1}{\cancel{2}} + 1 = 1+1 = 2 
\end{align*}
$$

Løsningen giver, at venstre- og højresiden af ligningen er identiske.
```

Er du blevet sikker nok i din ligningsløsning, så behøver du ikke nedskrive alle trin. Der findes også en tommelfinger regel, der siger, at hvis du skal fjerne et element på den ene side af lighedstegnet, så kan du blot "trække" elementet henover lighedstegnet og ændre "fortegnet". 


## Opgaver

```{prf:opgave}

Bestem grundmængderne for ligningerne og løs dem efterfølgende:

&nbsp; &nbsp; a) $2 - 4(x + 2) = 3(-x - 8) + 2x$ \
&nbsp; &nbsp; b) $-5x + 2(4 + 5x) = -x + 2$ \
&nbsp; &nbsp; c) $2(x + 3) - 8(2 - 2x) = 2$ \
&nbsp; &nbsp; c) $x + 3 + 2(3x + 8) - 3x = 3(4x + 11) - 4(x - 1)$ 

```

```{prf:opgave}

Givet er en ligning, der er løst forkert. Nedenfor kan du se de fire trin, der er lavet for at løse den.

$$
\begin{align*}
&                               &   -(4-x) + 2(4 + 5x) &= 12x - 4 - (-14 - 2x)  &       & \\
&\stackrel{?}{\Leftrightarrow}  &   4+x+8+10x &= 12x-4+14-2x                    &       &\text{Trin 1}\\
&\stackrel{?}{\Leftrightarrow}  &   12+11x &= 10x+18                            &       &\text{Trin 2}\\
&\stackrel{?}{\Leftrightarrow}  &   21x &= 8                                    &       &\text{Trin 3}\\
&\stackrel{?}{\Leftrightarrow}  &   x &= \frac{21}{8}                           &       &\text{Trin 4}
\end{align*}
$$

&nbsp; &nbsp; a) Undersøg hvert trin, find fejlene og beskriv dem. \
&nbsp; &nbsp; b) Ret fejlene, så du finder den rigtige løsning til ligningen.

```

```{prf:opgave}

Givet er en ligning, der er løst forkert. Nedenfor kan du se de fem trin, der er lavet for at løse den.

$$
\begin{align*}
&                               &   3(8-(3x+5))+5+3x &= 2x+10                   &       & \\
&\stackrel{?}{\Leftrightarrow}  &   3(8+3x-5)+5+3x &= 2x+10                     &       &\text{Trin 1}\\
&\stackrel{?}{\Leftrightarrow}  &   24+9x-15+5+3x &= 2x+10                      &       &\text{Trin 2}\\
&\stackrel{?}{\Leftrightarrow}  &   4+12x &= 2x+10                              &       &\text{Trin 3}\\
&\stackrel{?}{\Leftrightarrow}  &   14x &= 14                                   &       &\text{Trin 4}\\
&\stackrel{?}{\Leftrightarrow}  &   x &= 1                                      &       &\text{Trin 5}
\end{align*}
$$

&nbsp; &nbsp; a) Undersøg hvert trin, find fejlene og beskriv dem. \
&nbsp; &nbsp; b) Ret fejlene, så du finder den rigtige løsning til ligningen.

```

```{prf:opgave}

Bestem grundmængderne for ligningerne og løs dem efterfølgende:

&nbsp; &nbsp; a) $\frac{2x}{5} + 3 = 7$ \
&nbsp; &nbsp; b) $\frac{x}{2} + 1 = 5$ \
&nbsp; &nbsp; c) $-(\frac{1x}{3}-1) = \frac{1}{2}$ \
&nbsp; &nbsp; c) $2(5-\frac{x}{8}) = 11$ 

```

```{prf:opgave}

Bestem grundmængderne for ligningerne og løs dem efterfølgende:

&nbsp; &nbsp; a) $\frac{2x}{3}-2x-2(1-2x)=\frac{5x}{3}$ \
&nbsp; &nbsp; b) $10(\frac{x}{2} + 8 - (2x - 4) + 1) = 2(x-3)$ \
&nbsp; &nbsp; c) $-\frac{x}{2} + 3x = -7x - 23 + \frac{x}{2}(2x-4)-x^2$ \
&nbsp; &nbsp; c) $-\frac{10x}{3}-2(x-2)=-(2(-7-x)+\frac{6x}{9})$ 

```

```{prf:opgave}

Bestem grundmængderne for ligningerne og løs dem efterfølgende:

&nbsp; &nbsp; a) $\frac{1}{4x+4} = \frac{9+x}{4x+4}$ \
&nbsp; &nbsp; b) $\frac{11}{2-x} = \frac{1+x}{4-2x} - \frac{3-x}{-x+2}$ \
&nbsp; &nbsp; c) $\frac{x}{2x} + \frac{2}{x} = \frac{x-20}{3x} + \frac{9}{2}$ \
&nbsp; &nbsp; c) $-\frac{x}{2x+x}+13 = -2(\frac{1}{4x+2}-\frac{8}{8+16x})+12$ 

```

```{prf:opgave}

Bestem grundmængderne for ligningerne og løs dem efterfølgende:

&nbsp; &nbsp; a) $x^3 - 10 = -37$ \
&nbsp; &nbsp; b) $x^2 + \frac{9}{4} = \frac{5}{2}$ \
&nbsp; &nbsp; c) $1023 - x^10 = -1 $ \
&nbsp; &nbsp; c) $-686 = -2x^3$ 

```

```{prf:opgave}

Bestem grundmængderne for ligningerne og løs dem efterfølgende:

&nbsp; &nbsp; a) $x^3 - 10 = -37$ \
&nbsp; &nbsp; b) $x^2 + \frac{9}{4} = \frac{5}{2}$ \
&nbsp; &nbsp; c) $1023 - x^{10} = -1 $ \
&nbsp; &nbsp; c) $-686 = -2x^3$ 

```

```{prf:opgave}

Bestem grundmængderne for ligningerne og løs dem efterfølgende:

&nbsp; &nbsp; a) $\sqrt{x}+4 = 8$ \
&nbsp; &nbsp; b) $3\sqrt[3]{x} - 1 = 64$ \
&nbsp; &nbsp; c) $\sqrt[4]{16x} = 6$ \
&nbsp; &nbsp; c) $\sqrt{4x-24}=2$ 

```

```{prf:opgave}

Betragt ligningen:

$$ \sqrt{4x} = -2 $$

&nbsp; &nbsp; a) Bestem ligningens grundmængde. \
&nbsp; &nbsp; b) Reducer ligningen, så du får $\sqrt{x} = -1$. \
&nbsp; &nbsp; c) Ligningen kan ikke løses, men hvorfor? 

```