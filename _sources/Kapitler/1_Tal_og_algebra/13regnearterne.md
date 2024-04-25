(regnearterne)=
# Regnearterne

Du kender dem allerede. Vi har fire grundlæggende regnearter eller regneoperationer, nemlig

1. Addition (+)
   
2. Subtraktion (-)
   
3. Multiplikation (·)
	
4. Division (:)

Men faktisk kan vi danne alle regnearterne ud fra addition. Subtraktion er jo egentlig bare addition med negative tal, multiplikation er jo egentlig bare addition med det samme tal flere gange og division er jo egentlig bare subtraktion af det samme tal flere gange, hvor subtraktionen igen er addition med negative tal. 
De forskellige regnearter giver resultater, som vi har døbt forskellige navne. De kommer også til at være nyttige at kunne.

Resultatet af

* et additionsstykke kaldes en *sum*,
  
* et subtraktionsstykke kaldes en *differens*,
  
* et multiplikationsstykke kaldes et *produkt* og
  
* et divisionsstykke kaldes en *kvotient*.

## Regnearternes hiearki
Arbejder vi med avanceret matematiske regneudtryk, så er det vigtigt, at man kan finde ud af at opdele et regneudtryk i mindre bidder og i hvilken bid, man skal starte. Kigger vi f.eks. på udtrykket

$$

    2 \cdot 7 + 4^2 - 8 + (3-9)\cdot 3 - \frac{1}{2},

$$

så kan det godt ved første øjekast virke lidt uoverskueligt. Derfor starter vi med at dele regnestykket op i led:

$$

    \underline{2 \cdot 7} + \underline{4^2} - \underline{8} + \underline{(3-9)\cdot 3} - \underline{\frac{1}{2}}

$$

Leddene skilles fra hinanden ved et + og et -, men som du nok også har set, så får vi ikke led, hvis +’et eller -’et indgår i en parentes, da selve parentesen indgår i gangestykket. Vi har i ovenstående regneudtryk fem led, som vi skal holde styr på. Når vi betragter leddene, så er det vigtigt, at vi husker regnearternes hierarki.

```{figure} regnehierarki.png
---
scale: 50 %
align: center
---
```

Går vi tilbage og kigger på regneudtrykket, så kan vi regne hvert led for sig med regnearternes hierarki i mente.

$$

     2 \cdot 7 + 4^2 - 8 + (3-9)\cdot 3 - \frac{1}{2} = 14 + 16 - 8 + \underline{(-6)\cdot 3} - \frac{1}{2} = 14+16+(-18) = \frac{7}{2} = 3{,}5 

$$

Det er vigtigt, at vi husker regnearternes hierarki, da vi kan ende ud med noget, der ikke er rigtigt. Se for eksempel forskellen på

$$

    5 \cdot 6 - 2 = 30 - 2 = 28

$$

$$

    5 \cdot (6-2) = 5 \cdot 4 = 20

$$

eller

$$

    4 \cdot 2^3 = 4 \cdot 8 = 32

$$

$$

    (4\cdot 2)^3 = 8^3 = 512

$$

Vi regner altid først parenteser, dernæst potenser eller rødder, dernæst gange og division og til sidst plus eller minus. 

## Regnearternes egenskaber
Regnearterne har egenskaber, der er bestemt ud fra nogle love. Vi kommer til at beskæftige os med den kommutative lov, associative lov og distributive lov.

### Kommutativitet
Vi siger, at en regneart eller regneoperator er kommutativ, hvis det opfylder den kommutative lov. Loven fortæller, at en regneoperator vil give samme resultat uanset elementernes placering omkring regneoperatoren:

$$

    a \circ b = b \circ a

$$

Her forestiller vi os, at $a$ og $b$ er vilkårlige tal og, at vi kan skrive en eller anden regneoperator, som vi kender inde i $\circ$-symbolet. Hvilke regneoperatorer kender vi, der opfylder denne lov? Det gør $+$ og $\cdot$ operatorerne jo! Vi kan selv prøve:

```{prf:eksempel} $+$ og $\cdot$ er kommutative
:label: plus-og-gange-er-kommutative

Lad $a=2$ og $b=4$ og lad os sætte $+$ og $\cdot$ ind i cirklen og se, at påstanden om kommutativitet passer:
    
$$
        
    2 + 4 = 6
        
$$
    
$$
    
    4 + 2 = 6
    
$$

ergo må $2+4=4+2$, og 
    
$$
    
    2 \cdot 4 = 8
    
$$
    
$$
    
    4 \cdot 2 = 8
    
$$
    
ergo må $2\cdot 4 = 4 \cdot 2$. Du kan selv prøve med andre tal og lade dig overbevise, at disse regneoperatorer er kommutative.
```

```{prf:eksempel} $-$ er ikke kommutativ
:label: minus-er-ikke-kommutativ
    
Vi kan faktisk vise, at $-$ ikke er en kommutativ regneoperator. Vi behøver faktisk kun at komme med et eksempel på at vise dette. Lad os fortsætte med de samme tal fra {prf:ref}`plus-og-gange-er-kommutative<plus-og-gange-er-kommutative>`:
    
$$
    
    2 - 4 = -2
    
$$
    
$$
    
    4 - 2 = 2
    
$$

eftersom $-2 \neq 2$, så er $2-4\neq 4-2$, hvilket viser, at $-$ ikke er kommutativ.
    
```

```{exercise}
:class: dropdown

Vis, at $:$ ikke er en kommutativ regneoperator.

<details>
<summary>Hint</summary>
<p>

Brug samme fremgangsmåde som i {prf:ref}`plus-og-gange-er-kommutative<plus-og-gange-er-kommutative>` og {prf:ref}`minus-er-ikke-kommutativ<minus-er-ikke-kommutativ>`.

</p>
</details>
    
```

### Associativitet
Vi siger, at en regneoperator er associativ, hvis det opfylder den associative lov. Har vi en regnerække med samme regneoperator, så siger loven, at det vil være ligegyldigt, hvor vi starter med at regne:

$$

    a \circ (b \circ c)=(a \circ b) \circ c

$$

Ligeledes er $a$, $b$ og $c$ vilkårlige tal og $\circ$-symbolet er pladsholderen for vores regneoperator.

```{exercise}
:class: dropdown

Vis, at $+$ og $\cdot$ er associative regneoperatorer.

<details>
<summary>Hint</summary>
<p>

Brug samme fremgangsmåde som i {prf:ref}`plus-og-gange-er-kommutative<plus-og-gange-er-kommutative>`.

</p>
</details>
    
```

```{exercise}
:class: dropdown

Vis, at $-$ og $:$ ikke er associative regneoperatorer.

<details>
<summary>Hint</summary>
<p>

Brug samme fremgangsmåde som i {prf:ref}`minus-er-ikke-kommutativ<minus-er-ikke-kommutativ>`.

</p>
</details>
    
```

### Distributivitet

Vi siger, at en kombination af to regneoperatorer er distributiv, hvis de opfylder den distributive lov. Loven siger

$$

    a  \circ (b \diamond c) = a \circ b \diamond a \circ c.

$$

Her er $a$, $b$ og $c$ igen vilkårlige tal og nu er $\circ$-symbolet pladsholder for den ene regneoperator og $\diamond$-symbolet er pladsholder for den anden regneoperator.

```{prf:eksempel} Gange ind i parentes
:label: gange-ind-i-parentes
    
Bruger vi kombinationen af $+$ eller $-$ og $\cdot$, så vil den opfylde den distributive lov. Lad os vise det for $a=2$, $b=5$ og $c=3$. Vi sætter selvfølgelig $\cdot$ ind på $\circ$-pladsen og $+$ eller $-$ ind på $\diamond$-pladsen:
    
$$
    
    2 \cdot (5 + 3) = 2 \cdot 8 = 16
    
$$

$$

    2 \cdot 5 + 2 \cdot 3 = 10 + 6 = 16

$$

ergo må $2 \cdot (5 + 3) = 2 \cdot 5 + 2 \cdot 3$, og

$$
    
    2 \cdot (5 - 3) = 2 \cdot 2 = 4
    
$$

$$

    2 \cdot 5 - 2 \cdot 3 = 10 - 6 = 4

$$

ergo må $2 \cdot (5 - 3) = 2 \cdot 5 - 2 \cdot 3$. 
    
```

Ligeledes kan vi bruge dette {prf:ref}`gange-ind-i-parentes<gange-ind-i-parentes>` til også at introducere begrebet *faktorisering*. Eftersom vi ganger tallet 2 på hvert led, så kan vi "hive det ud foran en parentes". Så hvis vi kigger på udtrykket

$$

    2 \cdot (5 + 3) = 2 \cdot 5 + 2 \cdot 3,

$$

og går til højre i ligheden, så ganger vi ind i parentesen, men går vi til venstre i ligheden, så faktoriserer vi tallet 2 ud foran en parentes. Dette kan du læse mere om i {ref}`Kapitel 1.5<faktoriseringogkvadratkomplettering>`.

```{exercise}
:class: dropdown

Vis, at en kombination af $+$ og $:$ ikke opfylder den distributive lov.

<details>
<summary>Hint</summary>
<p>

Brug fremgangsmåden som i {prf:ref}`gange-ind-i-parentes<gange-ind-i-parentes>`, hvor du bytter $\cdot$ ud med $:$.

</p>

</details>
    
```

```{prf:regneregler} Minus- og plusparenteser
:label: minus-og-plusparenteser
    
Det, som vi kommer til at møde allermest, er kombinationen af enten $+$ eller $-$ og $\cdot$, eftersom den opfylder den distributive lov ifølge {prf:ref}`gange-ind-i-parentes<gange-ind-i-parentes>`. Vi skal dog være opmærksomme på hvilket fortegn, der står foran tallet, som ganges ind i parentesen:

* Hvis det tal, der ganges ind i parentesen, er positivt, så ændres ingen af fortegnene på tallene i parentesen.

$$
\begin{align*}     
&a \cdot (b+c) = ab + ac    &   &a \cdot (-b - c) = -ab - ac \\
&a \cdot (b-c) = ab - ac    &   &a \cdot (-b + c) = -ab + ac     
\end{align*}
$$

* Hvis det tal, der ganges ind i parentesen, er negativt, så ændres alle fortegnene på tallene i parentesen.

$$
\begin{align*}    
&-a \cdot (b+c) = - ab - ac    &   &-a \cdot (-b - c) = ab + ac \\
&-a \cdot (b-c) = - ab + ac    &   &-a \cdot (-b + c) = ab - ac    
\end{align*}
$$

    
```