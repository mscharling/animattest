# Additions- og multiplikationsprincippet

To grundlæggende principper inden for kombinatorikken er additions- og multiplikationsprincippet. I kombinatorikken kigger man på, hvor mange måder et sæt af elementer fra forskellige mængder kan sættes sammen. Denne gren af matematikken er vigtig, når vi betragter a priori sandsynligheder.

Forestil dig, at du er ved at åbne en restaurant. På dit menukort vil du gerne have fem forretter, seks hovedretter og tre desserter. Hvor mange tre-retters menuer kan du så sammensætte? Det er et kombinatorisk spørgsmål. Det kan også omsættes til et vigtigt sandsynlighedsspørgsmål. Lad os sige, at du ved, at der er tre af kombinationerne, der tager længere tid at lave end resten. Hvad er sandsynligheden for, at dine gæster vælger en af disse kombinationer? Det er potentielt et spørgsmål om, hvor stor sandsynlighed er der for, at du vil opleve en meget stresset aften.

## Multiplikationsprincippet

Eksemplet ovenfor leder os til det første princip, nemlig *multiplikationsprincippet*. Nogle lærebøger kalder også dette princip for *både-og princippet*. Grunden til dette er, at multiplikationsprincippet svarer til at kigge på eksperimenter, hvor vi **både** betragter valg 1 **og** valg 2 **og** valg 3 osv. på samme tid. I dette eksempel kigger vi på sammensætning af en tre-retters menu, hvor vi for eksempel vælger Forret 2 og Hovedret 3 og Desert 1. Det kunne også have været Forret 1, Hovedret 3 og Desert 2. Faktisk kan vi skrive 90 tre-retters menuer op. For hver af de fem forretter kan vi vælge mellem seks hovedretter, og for hver af de seks hovedretter kan vi vælge mellem tre desserter. Det svarer til antallet af tre-retters kombinationer:

$$

    5 \cdot 6 \cdot 3 = 90.

$$

Vi kan også illustrere dette ved hjælp af et *tælletræ*. Det bliver dog et meget omfattende tælletræ med 90 *kanter*. Derfor vil vi simplificere eksemplet til to forretter, tre hovedretter og to desserter. Ifølge ovenstående argumentation vil vi i dette eksempel have $2\cdot3\cdot2 = 12$ tre-retters kombinationer. Tæller vi tælletræets endepunkter i {numref}`taelletrae`, så får vi også 12 tre-retters kombinationer.

```{figure} tælletræ.png
---
scale: 50 %
align: center
name: taelletrae
---
Tælletræ, der viser mulige måder at kombinere to foretter, tre hovedretter og to desserter.
```

Lad os generalisere dette. For en opgave eller proces, der består af $k$ trin, hvor første trin kan udføres på $n_1$ måder, det andet trin kan udføres på $n_2$ måder, og så videre, op til det $k$'te trin, der kan udføres på $n_k$ måder, så er det samlede antal måder, de $k$ trin kan udføres på givet ved produktet af antallet måder for hvert trin:

$$

    n_1 \cdot n_2 \cdots n_k.

$$ (multiplikationsprincippet)

I vores forsimplede eksempel med sammensætning af en tre-retters menu, har vi en opgave bestående af 3 trin. I første trin, valg af forret, har vi $n_1 = 2$ muligheder. I andet trin, valg af hovedret, har vi $n_2 = 3$ muligheder. I tredje, og sidste trin, valg af dessert, har vi $n_3 = 2$ muligheder. 


## Additionsprincippet

En anden fundamental vigtig regel inden for kombinatorikken er *additionsprincippet*. Modsætningen til multiplikationsprincippet, som anvendes når flere handlinger skal udføres sammen, beskæftiger additionsprincippet sig med situationer, hvor valgmulighederne står i *enten-eller* forhold til hinanden. Derfor kaldes dette princip også for enten-eller princippet. Her er valgene gensidigt udelukkende, hvilket betyder, at der kun kan vælges én mulighed blandt flere forskellige. Princippet anvendes for eksempel til at beregne antallet af mulige udfald, når vi vælger én mulighed fra en mængde eller fra adskilte mængder.

For eksempel, hvis du skal beslutte om at vælge en forret fra Menu A, som har tre forskellige retter, eller fra Menu B, som har to retter, så vil det samlede antal forskellige forretter, du kan vælge mellem, være summen af de to:

$$

    3 + 2 = 5.

$$

Dette kan også visualiseres gennem et tælletræ, hvor hver kant repræsenterer et valg fra hver menu. Hver ende af kanterne vil vise en unik kombination af valg, men her er de alle endepunkter, da hvert valg er uafhængigt og udelukker de andre.

```{figure} tælletræ2.png
---
scale: 50 %
align: center
name: taelletrae2
---
Tælletræ, der viser mulige måder at vælge forretter fra enten Menu A eller Menu B.
```

Vi kan også generalisere dette koncept. Hvis vi har $k$ gensidigt udelukkende kategorier af valg, hvor første kategori tilbyder $n_1$ muligheder, den anden kategori tilbyder $n_2$ muligheder, og så videre, op til den $k$'te kategori, der tilbyder $n_k$ muligheder, så er det samlede antal muligheder, vi kan vælge fra, givet ved summen af antallet af muligheder for hver kategori:

$$

    n_1 + n_2 + \cdots + n_k.

$$

I eksemplet med valget af forret fra to forskellige menuer har vi to kategorier af valg. I første kategori, valg fra Menu A, har vi $n_1 = 3$ muligheder. I anden kategori, valg fra Menu B, har vi $n_2 = 2$ muligheder. Dette resulterer i et totalt antal på $3+2 = 5$ forskellige forretter, vi kan vælge imellem. 

## Opgaver
