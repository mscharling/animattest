# To ligninger med to ubekendte
Du kan også komme ud for at skulle løse to ligninger med to ubekendte. Vi udvider nu vores sidste kapitel med en ny ligning og en ny variabel, som vi oftest vil kalde $y$. Et eksempel på to ligninger med to ubekendte kunne være:

$$
\begin{align*}
&\text{I:}  &   &2x + 7 = 3 - y \\
&\text{II:} &   &2y + x = 4
\end{align*}
$$

Vi kan godt lide at "navngive" vores to ligninger, så vi nemmere kan referere til, hvilken vi arbejder med. Det bliver især relevant, når vi skal introducere de metoder, som vi kan bruge for at løse flere ligninger med flere ubekendte.

I dette kapitel vil vi kun beskæftige os med lineære ligningssystemer af to ligninger. Det betyder, at de to ligninger med to variable vil kun indeholde led af første grad. Altså, begge vores ligninger vil være af den simple form, som vi kiggede på i sidste kapitel.

Generelt når vi arbejder med ligningssystemer, så vil vi gerne have, at der er lige mange ubekendte, som der er ligninger. Omvendt, så vil vi også gerne have, at der er ligeså mange ligninger, som der er ubekendte. I vores tilfælde med to ligninger med to ubekendte, så ville vi ikke kunne løse én ligning med to ubekendte. 

Vi vil i dette kapitel introducere metoderne:

* Indsættelsesmetoden (kaldes også substitutionsmetoden)
* Lige store koefficienters metode
* Determinantmetoden
* Gauss-elimination

## Indsættelsesmetoden
Indsættelsesmetoden er en meget vigtig metode, som du bør øve så meget, at den kommer til at ligge på rygraden. Idéen med metoden er, at isolere for en af de ubekendte i den ene ligning og så indsætte det udtryk i den anden ligning. 

Lad os kigge på et eksempel:

```{prf:eksempel}
Vi skal isolere $x$ og $y$ i ligningerne:

$$
\begin{align*}
&\text{I:} & x+2y &= 4 \\
&\text{II:} & 2x-3y &= 15
\end{align*}
$$



```


## Lige store koefficienters metode
Lige store koefficienters metode går ud på, som navnet indikerer, at få koefficienterne for en af de to ubekendte i de to ligninger til at blive lige store, og så på den måde sætte ligningerne lig hinanden.

## Determinantmetoden
Determinantmetoden er en lidt mere kompliceret udgave af lige store koefficienters metode. Her stiller vi ligningerne op i en bestemt orden og rækkefølge. 

## Gauss-elimination

En helt fjerde metode, der især anvendes inden for lineær algebra, er Gauss-eliminations algoritmen. Den er især anvendelig for større ligningssystemer. Forestil dig at skulle bruge substitutionsmetoden for fem ligninger med fem ubekendte - det ville blive ret så uoverskueligt! 

Den overordnede idé med denne metode er, at man kan samle koefficienterne for de forskellige variable i en matrix og reducere den til det, der kaldes en reduceret trappeform og direkte aflæse ligningssystemets løsning. Det gøres ved at bruge ligningerne på hinanden ved at trække dem fra hinanden, lægge dem til hinanden eller gange et tal på ligningen. Vi vil ikke gå matematikken i dybden, men blot blive bekendt med metoden.

````{panels}
:container: container-fluid 
:column: col-lg-6 col-md-6 col-sm-6 col-xs-12 
:card: shadow-none border-0 bg-primary

```{figure} matrix.png
:width: 100%
:name: matrix

En matrix. \
I stedet for alle $a$'erne, så kan du forestille dig, at der står tal.
```

---

```{figure} reducedmatrix.png
:width: 85%
:name: reducedmatrix

En reduceret trappe-matrix. \
En sådan matrix har 0'erne i den øvre højre del og nedre venstre del. Der er kun tal i diagonalen.
```

````

Billederne ovenfor viser matricer med tre rækker og tre kolonner. Det kalder vi en $3\times 3$-matrix. Du kommer kun til at arbejde med $2\times 2$-matricer, da vi kun i dette kapitel kigger på to ligniner med to ubekendte. 

Ligesom, da vi introducere operationerne i {ref}`Kapitel 3.1<lighedogligevaegt>`, vil vi i dette afsnit indføre og bruge følgende elementære operationer:

* Du må bytte rundt på to ligninger.
  
* Du må gange alle led i en ligning med et tal, der er forskelligt fra nul.
  
* Du må addere et multiplum af en ligning til en anden eller trække det fra. 

Lad os introducere algoritmen med et eksempel:
````{prf:eksempel}
Vi skal løse følgende ligninger:

$$
\begin{align*}
&\text{I:} & 3x+2y &= 9 \\
&\text{II:} & 4x+2y &= 2
\end{align*}
$$


```{figure} gausselimination.png
:width: 20%
:name: gausselimination
```

Samler vi koefficienterne og konstanterne i en matrix, så får vi:

$$
\left[
\begin{array}{rr|r}
3   &   2   &   9  \\
4   &   2   &   2 \\
\end{array}
\right]
$$

For at få denne matrix på reduceret trappeform, så skal vi have 1’ere i diagonalen og 0’ere øverst til højre og nederst til venstre i matricen. Det vil sige, at vi skal bruge de elementære operationer til at få

$$
\left[
\begin{array}{rr|r}
3   &   2   &   9  \\
4   &   2   &   2 \\
\end{array}
\right]
\longrightarrow
\left[
\begin{array}{rr|r}
1   &   0   &   ?  \\
0   &   1   &   ? \\
\end{array}
\right]
$$

For så svarer det til, at vi har ét $x$ og nul $y$ i første ligning og omvendt nul $x$ og ét $y$ i anden ligning. Til højre for den lodrette bar vil løsningerne komme til at stå. Baren agerer vores lighedstegn fra ligningerne. 

```{figure} gausselimination_reduced.png
:width: 20%
:name: gausselimination_reduced
```

De elementære operationer er vores rækkeoperationer, og dem skal vi bruge nu for at reducere matricen til trappeform. Vi vil betegne den øverste række med $R_1$ og den nederste række med $R_2$, som egentlig blot svarer til ligning I og II henholdsvis. 

$$
\left[
\begin{array}{rr|r}
3   &   2   &   9  \\
4   &   2   &   2 \\
\end{array}
\right]
$$

Vi starter med at skabe 0’erne. Det kan vi gøre ved at trække $R_2$ fra $R_1$, da $2-2=0$:

$$
\left[
\begin{array}{rr|r}
3   &   2   &   9  \\
4   &   2   &   2 \\
\end{array}
\right]
\begin{array}{l}
\, -R_2  \\ \ 
\end{array}
\ 
\longrightarrow
\ 
\left[
\begin{array}{rr|r}
-1   &   0   &   7  \\
4  &   2   &   2 \\
\end{array}
\right]
$$

For at få vores nedre venstre 0, så kan vi lægge $4R_1$ til $R_2$, da $4+(-1\cdot 4) = 4-4 =0$:

$$
\left[
\begin{array}{rr|r}
-1   &   0   &   7  \\
4  &   2   &   2 \\
\end{array}
\right]
\begin{array}{l}
\  \\ \,+4R_1 
\end{array}
\ 
\longrightarrow
\ 
\left[
\begin{array}{rr|r}
-1   &   0   &   7  \\
0  &   2   &   30 \\
\end{array}
\right]
$$

For at få skabt 1 i øverste række ganger vi i gennem med -1 og for at få skabt 1 i nederste række ganger vi i gennem med $\frac{1}{2}$:

$$
\left[
\begin{array}{rr|r}
-1   &   0   &   7  \\
0  &   2   &   30 \\
\end{array}
\right]
\begin{array}{l}
\, \cdot(-1)  \\ \, \cdot(\frac{1}{2}) 
\end{array}
\ 
\longrightarrow
\ 
\left[
\begin{array}{rr|r}
1   &   0   &   -7  \\
0  &   1   &   15 \\
\end{array}
\right]
$$

Af den reduceret trappematrix kan vi aflæse, at løsningen til vores to ligninger er 

$$

    x = -7 \wedge y = 15

$$
````

Bemærk, at denne metode kræver, at du først opstiller ligningerne, således du kolonnevis har de forskellige variabler med deres tilhørende koefficient på den ene side af lighedstegnet og på den anden side har samlet alle konstanterne. 



## Opgaver

```{prf:opgave} 

Givet er ligningssystemet:

$$
\begin{align*}
&\text{I:} & 3x + 3y &= 12 \\
&\text{II:} & 2x + 3y &= 6
\end{align*}
$$

&nbsp; &nbsp; a) Opstil matricen, der samler koefficienterne og konstanterne fra ligningssystemet. \
&nbsp; &nbsp; b) Løs ligningssystemet ved at reducere matricen fra a) til en matrix på reduceret trappeform. 
    
```

```{prf:opgave} 

Givet er ligningssystemet:

$$
\begin{align*}
&\text{I:} & x+3y &= 1 \\
&\text{II:} & 2y &= 2-x
\end{align*}
$$

&nbsp; &nbsp; a) Opstil matricen, der samler koefficienterne og konstanterne fra ligningssystemet. \
&nbsp; &nbsp; b) Løs ligningssystemet ved at reducere matricen fra a) til en matrix på reduceret trappeform. 
    
```

```{prf:opgave} 

Givet er ligningssystemet:

$$
\begin{align*}
&\text{I:} & 3x-y &= 3-2(x+y) \\
&\text{II:} & 2x+2y-2 &= 0
\end{align*}
$$

&nbsp; &nbsp; a) Opstil matricen, der samler koefficienterne og konstanterne fra ligningssystemet. \
&nbsp; &nbsp; b) Løs ligningssystemet ved at reducere matricen fra a) til en matrix på reduceret trappeform. 
    
```

```{prf:opgave} 

Givet er ligningssystemet:

$$
\begin{align*}
&\text{I:} & -2(2x-y) &= 3 \\
&\text{II:} & -(2y-2x) &= -1
\end{align*}
$$

&nbsp; &nbsp; a) Opstil matricen, der samler koefficienterne og konstanterne fra ligningssystemet. \
&nbsp; &nbsp; b) Løs ligningssystemet ved at reducere matricen fra a) til en matrix på reduceret trappeform. 
    
```

```{prf:opgave} 

Givet er ligningssystemet:

$$
\begin{align*}
&\text{I:} & -x+y+4z &= 1 \\
&\text{II:} & 2x+2y-z &= -4 \\
&\text{III:} & x+4y-2z &= 2
\end{align*}
$$

&nbsp; &nbsp; a) Opstil matricen, der samler koefficienterne og konstanterne fra ligningssystemet. \
&nbsp; &nbsp; b) Løs ligningssystemet ved at reducere matricen fra a) til en matrix på reduceret trappeform. 
    
```