# Kombinationer og permutationer

Additions- og multiplikationsprincippet hjælper os med at tælle antallet af måder at vælge eller kombinere elementer på, fokuserer kombinationer og permutationer på antallet af forskellige måder, vi kan arrangere en gruppe elementer på.


## Permutationer

Permutationer handler om at finde alle de mulige måder at sætte en sekvens af elementer i en bestemt rækkefølge. Det centrale her er, at rækkefølgen af sekvensen er kritisk. Forskellige sekvenser af de samme elementer betragtes altså som forskellige permutationer. 

Antallet af permutationer af $n$ elementer, hvor alle objekterne bruges, er $n!$. For eksempel, hvis der er fire forskellige bøger, og du ønsker at arrangere dem på en hylde, er der $4! = 24$ mulige måder at gøre dette på. Når vi placerer bøgerne på hylden, foretager vi fire valg. Ved det første valg er der fire muligheder, ved det andet valg er der tre muligheder, ved det tredje er der to muligheder, og ved det sidste er det kun en valgmulighed. Dette følger multiplikationsprincippet og vi får derfor 

$$

    4! = 4\cdot 3\cdot 2\cdot 1 = 24.

$$

Lad os for god ordens skyld opskrive disse permutationer. Lad de fire bøger være benævnt med elementerne fra mængden $\{A,B,C,D\}$:

$$
\begin{matrix}
ABCD, & ABDC, & ACBD, & ACDB, & ADBC, & ADCB, \\
BACD, & BADC, & BCAD, & BCDA, & BDAC, & BDCA, \\
CABD, & CADB, & CBAD, & CBDA, & CDAB, & CDBA, \\
DABC, & DACB, & DBAC, & DBCA, & DCAB, & DCBA 
\end{matrix}
$$

Resultatet sammensættes i følgende korollar:

```{prf:korollar}
:label: nnpermutationer

Lad $M$ være en mængde med $n$ distinkte elementer. Antallet af forskellige måder at ordne $n$ elementer på, er

$$
    P(n,n) = n!,
$$

hvor $P(\,\cdot\, ,\,\cdot\,)$ er funktionen, der tæller antallet af permutationer.

```

Som du måske har bemærket af {prf:ref}`nnpermutationer`, så ordner vi alle elementerne i mængden $A$. Vi kan også kigge på kun at ordne en del af dem. Går vi tilbage til eksemplet med de fire bøger og kun vælger at stille to af dem på hylden, så får vi igen fra multiplikationsprincippet $4\cdot 3 = 12$ mulige sekvenser. Argumentationen følger den samme fra tidligere. Ved første valg har vi fire muligheder og ved andet valg tre muligheder. Bruger vi samme notation som tidligere, kan vi opskrive disse permutationer:

$$
\begin{matrix}
AB, & AC, & AD, & BA, & BC, & BD, \\
CA, & CB, & CD, & DA, & DB, & DC  
\end{matrix}
$$

Vi har også en sætning, der generaliserer dette.

```{prf:sætning}
:label: nrpermutationer

Lad $M$ være en mængde med $n$ distinkte elementer. Antallet af forskellige måder at ordne $r$ af de $n$ elementer på, hvor $r\leq n$,  er

$$
    P(n,r) = \frac{n!}{(n-r)!},
$$

hvor $P(\,\cdot\, ,\,\cdot\,)$ er funktionen, der tæller antallet af permutationer.

```

```{exercise}
:class: dropdown

Kan du ved hjælp af {prf:ref}`nrpermutationer` bevise {prf:ref}`nnpermutationer`?
    
```

```{prf:eksempel}
:label: kode

Forestil dig en lås med en sikkerhedskode, der kræver, at man indtaster en sekvens af fire forskellige cifre fra 0 til 9. Dette er et klassisk eksempel på permutationer, fordi hver unik sekvens af cifre kan låse eller åbne låsen, og rækkefølgen af cifrene er afgørende. 

Antallet af forskellige måder, hvorpå du kan indstille koden til låsen, når du skal vælge fire forskellige cifre fra 10 mulige (0-9), og rækkefølgen af cifrene er afgørende, kan findes ved:

$$

    P(10,4) = \frac{10!}{(10-4)!} = \frac{10!}{6!} = 5.040.

$$

Der er altså 5.040 forskellige måder at arrangere de fire cifre på, hvilket betyder, at der er 5.040 mulige sikkerhedskoder for denne lås. 

Sandsynligheden for at knække denne kode i første forsøg er derfor 

$$

    \mathbb{P}(A) = \frac{1}{5.040} \approx 0{,}000198,

$$

hvor $A$ betegner hændelsen, at vi knækker koden i første forsøg. Vi betragter jo netop kun ét gunstigt udfald ud af 5.040 mulige.

```


## Kombinationer
Det centrale ved permutationer var, at rækkefølgen af sekvensen var vigtig. For kombinationer er denne *redundant*. Kombinationer bruges til at bestemme antallet af forskellige måder at vælge elementer fra en mængde uden at bekymre sig om, i hvilken rækkefølge de vælges. 

For permutationerne af alle fire bøger fik vi 24 måder at ordne bøgerne på. Alle disse vil være den samme kombination, da rækkefølgen for $ABCD$ og $BACD$ er lige gyldig. For permutationer af to bøger ud af de fire endte vi med 12 måder at ordne bøgerne på. Disse vil udgøre seks kombinationer, da rækkefølgen for $AB$ og $BA$ er lige gyldig, og disse er derfor den samme kombination. Vi kan også opskrive disse:

$$
\begin{matrix}
AB, & AC, & AD, & BC, & BD, & CD \\
\end{matrix}
$$

Også antallet af kombinationer kan generaliseres:

```{prf:sætning}
:label: nrpermutationer

Lad $M$ være en mængde med $n$ distinkte elementer. Antallet af forskellige måder at udtage $r$ af de $n$ elementer på, hvor $r\leq n$,  er

$$
    K(n,r) = \frac{n!}{r!(n-r)!},
$$

hvor $K(\,\cdot\, ,\,\cdot\,)$ er funktionen, der tæller antallet af kombinationer.

```

Udtager vi $r$ elementer fra en mængde af $n$ elementer, hvor $r\leq n$, så kalder vi udtagningen en kombination, hvis rækkefølgen er redundant, og en permutation, hvis rækkefølgen er vigtig. 

Antallet af kombinationer $K(n,r)$ kaldes også *binomialkoefficienten*. Nogle lærebøger skrive denne som $\binom{n}{r}$, der skal læses som "$n$ udvælg $r$". Vi vil dog bruge notationen $K(n,r)$ for binomialkoefficienten og vi vil genbesøge denne i
{numref}`binomialfordelingen`. 

```{prf:eksempel}
:label: lotto

Et klassisk eksempel på brugen af kombinationer, er når vi spiller Lotto. En Lotto-kupon består af i alt 10 rækker, der hver rummer tallene 1 til 36. På en almindelig række udvælges syv tal. 

Vi vil undersøge sandsynligheden for at få syv vindertal, når vi kun spiller én række. Udfaldsrummet for dette spil er altså samtlige kombinationer af syv af de 36 tal. Antallet af udfald i udfaldsrummet er:

$$

    K(36,7) = \frac{36!}{7!(36-7)!} = \frac{36!}{7!29!} = 8.347.680.

$$

Når vi kun spiller én række, så vil der kun være én måde at få syv vindertal på. Lad dette spil være benævnt med hændelsen A, da er sandsynligheden for $A$:

$$

    \mathbb{P}(A) = \frac{1}{8.347.680} \approx 0{,}00000012.

$$

Vi har ét gunstigt udfald og holder det op mod de 8.347.680 mulige udfald. Det giver en sandsynlighed på 0,00000012 eller 0,000012 %. 

Sandsynligheden for at få vindertal bliver dog større jo færre vindertal, vi kigger på. Lad os undersøge sandsynligheden for at få tre vindertal...

```

```{prf:eksempel}
:label: klasseudvaelg

Forestil dig, at din matematiklærer skal vælge tre studerende fra din klasse på 15 elever til at repræsentere klassen i en matematikkonkurrence. Antallet af forskellige grupper af studerende, der kan dannes, er beregnet ved 

$$

    K(15,3) = \frac{15!}{3!(15-3)!} = \frac{15!}{3!12!} = 455. 

$$

Dette viser antallet af unikke grupper, hvor rækkefølgen af studerende i hver gruppe ikke betyder noget.

For at beregne sandsynligheden for, at du bliver udtrukket, skal de resterende to studerende vælges fra de tilbageværende 14 studerende. Det kan gøres på

$$

    K(14,2) = \frac{14!}{2!12!} = 91,

$$

91 forskellige måder, når du allerede er valgt. Sandsynligheden for, at du bliver valgt, er derfor antallet af gunstige udfald (hvor du er inkluderet) divideret med det samlede antal mulige udfald. Lad denne hændelse være benævnt med $A$:

$$

    \mathbb{P}(A) = \frac{K(14,2)}{K(15,3)} = \frac{91}{455} \approx 0{,}2.

$$

Dette viser, at sandsynligheden for, at du bliver udvalgt til at være en del af gruppen, er ca. 0,2 eller 20 %.

```

### Pascals trekant

...


## Opgaver

...