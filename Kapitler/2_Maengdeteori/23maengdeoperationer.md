# Mængdeoperationer

Ligesom vi har regneoperationer for tal, som du jo nu ved kan inddeles i talmængderne), så har vi også "regneoperationer" for samlinger af tal eller andre elementer, nemlig mængdeoperationer. Vi skal lære følgende mængdeoperationer at kende:

* Fællesmængde

* Foreningsmængde

* Differensmængde

* Komplimentær mængde

Vi vil i det følgende, for at forklare mængdeoperationerne, tage udgangspunkt i det samme eksempel. Derfor introducerer vi her to mængder, som vil være gennemgående i forklaringerne af mængdeoperationerne:

$$

    A = \{a_1 , a_2 , a_3 , a_4 , a_5 \}\ \text{og}\ B = \{a_1 , a_2 , b_1 , b_2 \}

$$

````{prf:eksempel} Fællesmængde $\cap$

```{figure} cap.png
:width: 50%
```

Som begrebet allerede indikerer, så handler fællesmængden om at finde mængden af det, som to eller flere mængder har tilfælles. Så hvilke elementer har $A$ og $B$ tilfælles?

$$

    A \cap B = \{ a_1, a_2 \}

$$

Vi siger $A$ *snit* $B$ eller *fællesmængden mellem* $A$ og $B$. Vi kan se, at elementerne $a1,a2 \in A$ og $a1,a2 \in B$, og derfor har de disse tilfælles.

````

````{prf:eksempel} Foreningsmængde $\cup$

```{figure} cup.png
:width: 50%
```

Denne mængdeoperation bruger vi, når vi skal samle to eller flere mængder. Så hvad får vi, når vi forener $A$ og $B$?

$$

    A \cup B = \{ a_1 , a_2 , a_3 , a_4 , a_5 , b_1 , b_2 \}

$$

Vi siger enten $A$ *forenet med* $B$ eller *unionen mellem* $A$ og $B$. Vi får altså samlet alle elementerne fra de to mængder til én mængde.

````

````{prf:eksempel} Differensmængde $\setminus$

```{figure} setminus.png
:width: 50%
```

Differensmængde er en operation, der agerer lidt ligesom minus. Har vi to eller flere mængder med elementer tilfælles, så kan vi fjerne disse:

$$

    A \setminus B = \{ a_3 , a_4 , a_5 \} \ \text{og} \ B\setminus A = \{ b_1 , b_2 \}

$$

Vi siger $A$ *fratrukket* $B$ og omvendt.

````

````{prf:eksempel} Komplimentær mængde $A^\mathsf{c}$

```{figure} complement.png
:width: 40%
```

Har vi en mængde $A$, så kan vi måske forestille os, at den ligger i et eller andet rum. Da vil komplimentærmængden bestå af alt det, som $A$ er omringet af, det vil sige resten af rummet.

````

## Opgaver

```{prf:opgave} 

Givet er to mængder:

$$
\begin{align*}
A &= \{ 10 , 20 , 30 , 40 , 50 \} \\
B &= \{ 20 , 40 , 60 , 80 , 100 \}
\end{align*}
$$

&nbsp; &nbsp; a) Bestem fællesmængden $A\cap B$ \
&nbsp; &nbsp; b) Bestem foreningsmængden $A\cup B$ \
&nbsp; &nbsp; c) Bestem differensmængderne $A \setminus B$ og $B \setminus A$

```

```{prf:opgave} 

Givet er to mængder:

$$
\begin{align*}
X &= \{ x_1 , x_2 , x_3 , y_1 \} \\
Y &= \{ x_1 , x_2 , x_3 , y_1 , y_2 \}
\end{align*}
$$

&nbsp; &nbsp; a) Bestem fællesmængden $X\cap Y$ \
&nbsp; &nbsp; b) Bestem foreningsmængden $X\cup Y$ \
&nbsp; &nbsp; c) Bestem differensmængderne $X \setminus Y$ og $Y \setminus X$

```

```{prf:opgave} 

Givet er to mængder:

$$
\begin{align*}
A &= \{ a , b , c , d\} \\
B &= \{ a , c , e , f , g \}
\end{align*}
$$

&nbsp; &nbsp; a) Bestem fællesmængden $A\cap B$ \
&nbsp; &nbsp; b) Bestem foreningsmængden $A\cup B$ \
&nbsp; &nbsp; c) Bestem differensmængderne $A \setminus B$ og $B \setminus A$

```

