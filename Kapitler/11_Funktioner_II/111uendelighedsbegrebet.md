# Uendelighedsbegrebet

Du har helt sikkert hørt om “uendelighed” på et eller andet tidspunkt. Men hvordan definerer vi det matematisk? Og hvordan bruger vi det i matematikken?

I dag har vi udviklet en masse teori, der gør uendelighedsbegrebet i mange henseender anvendeligt og differentialregningen er blot en af dem. 

## Zenons paradoks

Oldtidens kulturer havde forskellige idéer om, hvad uendelighedsbegrebet dækkede over. Dengang betragtede man begrebet med en mere filosofisk tilgang. Den første matematiske opfattelse af uendelighedsbegrebet kom fra den græske filosof og matematiker Zenon, der er kendt for sine tankeeksperimenter. Især er han kendt for tankeeksperimentet “Achilleus og skildpadden”. Det var egentlig ikke var meningen at komme med en pointe omkring uendelig, men eksperimentet er alligevel god til at illustrere det abstrakte ved et uendelighedsbegreb.

Eksperimentet består af to deltagere Achilleus og en skildpadde, der skal løbe mod hinanden. Men for at det bliver et fair race, så får skildpadden 100 m forspring. Dernæst forløber racet som følger

* Trin 1: Achilleus løber op til det punkt, hvor skildpadden startede, mens skildpadden løber videre

* Trin 2: Achilleus løber nu op til det punkt, hvor skildpadden var nået til ved Trin 1, mens skildpadden er nået endnu videre.

* Trin 3: Achilleus løber igen op til det punk, hvor skildpadden var nået til ved Trin 2, mens skildpadden er nået endnu videre.

* Trin 4: Achilleus løber igen op til det punk, hvor skildpadden var nået til ved Trin 2, mens skildpadden er nået endnu videre.

Og så videre...


```{figure} Zeno_Achilles_Paradox.png
---
scale: 35 %
align: center
---
```

Tankeeksperimentet viser her, at Achilleus aldrig overhaler skildpadden uanset, hvor man trin vi kommer ned. Dette tankeeksperiment blev i mange år anset som et paradoks, da vi jo ved, at selvfølgelig kan man overhale en skildpadde i et løb, men rent matematisk kunne dette ikke bevises med den oldtidiske matematik. Det var først med introduktionen af grænseværdier, at den kendte matematiker Augustin-Louis Cauchy i 1821 kunne vise, at Archilleus faktisk overhaler skildpadden.

## Uendelighed

Der findes ikke en unik størrelse, der kan tillægges uendelig. Forskelligere anskuelser leder til forskellige definitioner af, hvad uendelig er. 

Den uendelighed, som vi kommer til at beskæftige os med, er det “tal”, som vores tallinje ender ved,
grænsen. Vores tallinje går fra -infty til +infty. Men, infty er ikke et tal i klassisk forstand. For os er det mere et begreb. Derfor giver det ikke mening at bruge infty som et hvilket som helst tal. Vi kan fx ikke skrive $2+\infty$ eller $\infty-\infty$. Vi kan heller ikke skrive $f(\infty)$. Det er her, hvor grænseværdibegrebet bliver anvendeligt og det vil vi introducere i de kommende kapitler.


## Forskellige størrelser uendelig

Snakker vi uendelighed i mæmgdeteorien, så er det muligt at snakke om størrelsesordenen på uendelighederne. 

Tæller vi antallet af elementer i de naturlige tal, $\mathbb{N}$, så får vi uendeligheden, der betegnes $\aleph_0$ og udtales *aleph-0*. Husker vi tilbage til kapitlet om mængdeteori, så kalder vi den funktion, der tæller antallet af elementer i en mængde for "kardinaliteten". Vi skriver

$$

    \# \mathbb{N} = \aleph_0 

$$

Tæller vi antallet af elementer i de reelle tal, $\mathbb{R}$, så får vi uendeligheden, der betegnes $\mathfrak{c}$. Denne uendelighed kaldes *kontinuum*. Enhver inddeling, ethvert interval, af de reelle tal, vil have $\mathfrak{c}$ elementer. Mængden af tal mellem 0 og 1, intervallet $[0,1]$, indeholder et kontinuum antal elementer. Vi skriver

$$ 

    \# [0,1] = \mathfrak{c}

$$

Hvilken uendelighed er så størst? Prøver vi, at tælle elementer selv, så kan vi godt danne os et indtryk af, hvor stor uendeligheden af tallene 1, 2, 3, 4 osv. er. Tæller vi elementer mellem 0 og 1, så løber vi ret hurtigt ind i problemer - for hvordan tæller vi dem? 0,01, 0,02, 0,03…, men hvad med 0,001 og 0,0011 og 0,0012? Hvad med 0,0001? Som du kan se, så er det jo faktisk umuligt at tælle tallene mellem 0 og 1. Derfor er det også indlysende, at der må være flere elementer i denne mængde end i de naturlige tal, $\mathbb{N}$. Netop denne forskel har også ført til forskellige typer uendeligheder. $\aleph_0$, antallet af elementer i $\mathbb{N}$, kaldes en *tællelig* uendelighed. $\mathfrak{c}$, kontinuum, kaldes en *overtællelig* uendelighed og årsagen er oplagt.