# Grundlæggende begreber

Når vi arbejder med sandsynlighedsteori, så bruger vi nogle bestemte termer og begreber, som vi vil introducere i dette kapitel. Vi vil gøre dette ved at tage udgangspunkt i et *stokastisk eksperiment*. At et eksperiment er *stokastisk*, betyder blot, at det, vi får ud på den anden side af eksperimentet, er tilfældigt. Et godt eksempel på et stokastisk eksperiment er et terningekast. 

## Udfald og udfaldsrum

Kaster vi en almindelig seks-sidet terning, så ved vi på forhånd godt, hvad vi potentielt kan ende ud med at få, når terningen er slået. Det, som terningen vil vise, kalder vi for eksperimentets *udfald*. En seks-sidet terning har udfaldene $\{\text{1'er},\text{2'er},\text{3'er},\text{4'er},\text{5'er},\text{6'er}\}$, og dette kalder vi for terningens *udfaldsrum*. Denne benævner vi oftest med $U$:

$$

    U = \{\text{1'er},\text{2'er},\text{3'er},\text{4'er},\text{5'er},\text{6'er}\}.

$$

I termer af mængdeteorien kan vi se, at et udfaldsrum er en mængde, og elementerne i udfaldsrummet er eksperiments udfald. Et terningekast er et stokastisk eksperiment, da vi kan tillægge hvert udfald en sandsynlighed. For en fair terning ved vi, at sandsynligheden for hvert udfald er $\frac{1}{6}$. Dette skriver vi som

$$

    \mathbb{P}(\text{en 1'er}) = \frac{1}{6}, \quad \mathbb{P}(\text{en 2'er}) = \frac{1}{6}, \quad \dots, \quad \mathbb{P}(\text{en 6'er}) = \frac{1}{6},

$$

hvor $\mathbb{P}$ står for *probability*, det engelske for sandsynlighed. Du kan læse sandsynligheden som en funktion $\mathbb{P}(\,\cdot\,)$, der som input tager et udfald og spytter en sandsynlighed ud.

## Hændelse

Betragter vi flere udfald i udfaldsrummet samtidigt, kigger vi på en såkaldt *hændelse*. Et eksempel på en hændelse ved kast med en terning kunne være mængden af udfald, der viser ulige tal. Disse udfald betegnes som hændelsens *gunstige udfald*. Her er der ikke længere tale om et enkelt udfald, men om flere udfald, der samlet udgør en hændelse. Denne hændelse vil være en delmængde af hele terningens udfaldsrum. Vi kan benævne hændelsen med

$$

    A = \{\text{1'er},\text{3'er},\text{5'er}\},

$$

og fra {numref}`Kapitel %s <maengdeteori_i>` kan vi se, at $A\subseteq U$. Vi kan også beregne sandsynligheden for at observere hændelsen ved brug af additionsprincippet, som vi introducerer senere:

$$

    \mathbb{P}(A) = \mathbb{P}(\{\text{1'er},\text{3'er},\text{5'er}\}) = \mathbb{P}(\text{1'er}) + \mathbb{P}(\text{3'er}) + \mathbb{P}(\text{5'er}) = \frac{3}{6} = \frac{1}{2}.

$$

Additionsprincippet kan altid bruges på en hændelse og vi kan derfor generalisere reglen. Lad os betragte et generelt eksperiment i et endeligt sandsynlighedsrum, hvilket blot betyder, at dets udfaldsrum $U$ er endeligt og til hvert udfald kan knyttes en sandsynlighed til. Vi betragter også en hændelse

$$

    A = \{a_1,a_2,\dots,a_k\},

$$

hvor det gælder, at $A\subseteq U$. Da kan sandsynligheden for hændelsen findes ved

$$
\begin{align}
    \mathbb{P}(A)=\mathbb{P}(a_1)+\mathbb{P}(a_2)+\cdots+\mathbb{P}(a_k).
\end{align}
$$



## Komplimentær hændelse

Når vi betragter en hændelse $A$ i udfaldsrummet $U$, så er der jo udfald tilbage i udfaldsrummet, som vi ikke betragter. Disse vil udgøre mængden *komplimentære hændelse*. Denne benævnes med $A^{\mathsf{C}}$, hvor $\mathsf{C}$ står for *compliment*, der er den engelske oversættelse. I andre lærebøger kan det være, at du vil støde på notationen $∁A$, $\overline{A}$ eller $A'$. Komplimentær mængden kan også skrives ved hjælp af mængdeoperationer, som vi stiftede bekendtskab med i {numref}`Kapitel %s<maengdeoperationer>`: 

$$

    A^{\mathsf{C}} = U\setminus A.

$$

For et udfaldsrum gælder altid, at det kan deles op i en hændelse og en komplimentær hændelse, og dermed:

$$

    U = A \cup A^{\mathsf{C}}.

$$

Et eksperiment med udfaldsrummet $U$ gælder altid, at $\mathbb{P}(U)=1$. Derfor gælder der også, at 

$$
\begin{align}
    \mathbb{P}(A) + \mathbb{P}(A^{\mathsf{C}})=1.
\end{align}
$$

Denne identitet bliver vigtig, når du skal til at lave opgaver. 

```{prf:eksempel}
:label: komplimentaerhaendelse

Et eksempel om komplimentære hændelser.


```

## To sandsynlighedsperspektiver

Der findes to primære måder at tænke om sandsynligheder på. Det læner sig lidt op af spørgsmålet "hvornår laver vi statistik og hvornår laver vi sandsynlighedsregning?". Prøv at tænk over nedenstående spørgsmål:

* Hvad er sandsynligheden for at slå en 6'er med en fair terning?
* Hvad er sandsynligheden for at det næste kort, du trækker op på hånden, er en hjerter?
* Hvad er sandsynligheden for at blive udtrukket til en stikprøve i lufthavnens kontrolsluse?
* Hvad er sandsynligheden for at komme til skade, når du spiller elitefodbold?

De to første punkter er sandsynligheder, som vi umiddelbart godt kan regne uden et statistisk eksperiment. For en fair terning ved vi, at alle udfald har sandsynlighed $\frac{1}{6}$. For et kortspil uden jokers er sandsynligheden for at trække en hjerter fra et frisk kortspil $\frac{1}{4}$. Spørgsmålet giver midlertidigt anledning til en beregning ved brug af betinget sandsynligheder, da vi ikke fra spørgsmålet ved, hvor mange kort du har på hånden i forvejen, samt hvor mange af dem er hjertere. 

De to nederste punkter er sandsynligheder, som vi ikke umiddelbart kan svare på uden et større eksperiment med dataindsamling. Det kan være, at lufthavnen har en specifik algoritme for stikprøveudtagelser, men den kender vi ikke på forhånd. Sandsynligheden for at komme til skade i elitefodbold indeholder mange faktorer, der kan påvirke denne. 

Det er oplagt, at spørgsmålene giver anledning til to forskellige perspektiver. Den ene, hvor vi kan gå teoretisk til værks med sandsynlighedsregningen, hvor den anden kræver, at vi bruger metoder fra statistikken til at approksimere sandsynlighederne. 

### A priori sandsynlighed
Sandsynligheder, der kan beregnes uden opstilling af eksperiment, kaldes for *a priori sandsynligheder* eller *teoretiske sandsynligheder*. A priori er latin og betyder *fra det tidligere*, hvilket i denne sammenhæng kan forstås som en sandsynlighed, der kan bestemmes uafhængigt af erfaring fra et eksperiment. Det er sådanne sandsynligheder vi berørte i ovenstående afsnit i spørgsmålene om terningen og kortspillet. Simple, symmetriske sandsynligheder, som disse, tager udgangspunkt i formlen

$$

    \text{sandsynlighed} = \frac{\text{antal gunstige udfald}}{\text{antal mulige udfald}}.

$$ (apriorissh)

For at regne disse sandsynligheder kræver det ofte, at vi laver nogle antagelser på forhånd. For eksempel skal det være en fair terning. Vi vil dog i senere kapitler stifte bekendtskab til mere sofistikerede formler, der baserer sig på antagelser omkring den underliggende sandsynlighedsfordeling for eksperimentet.

### Frekventiel sandsynlighed
Sandsynligheder, hvor vi tager udgangspunkt i gunstige udfald fra et eksperiment, kaldes for *frekventiel sandsynligheder* eller *eksperimentiel sandsynligheder*. Disse er bestemt med formlen

$$

    \text{sandsynlighed} = \frac{\text{hyppighed}}{\text{antal gentagelser}}.

$$

Vi kunne bruge denne formel til at estimere sandsynligheden for stikprøver i lufthavnen. Vi kunne over en uge indsamle data fra kontrolslusen og dermed bruge antal personer, der blev udtaget til stikprøve og holde op mod, hvor mange personer, der gik gennem kontrolslusen. 

Hvis ikke vi tror på, at sandsynligheden for at slå en 6'er er $\frac{1}{6}$, så kan vi også gå eksperimentiel til værks. Tager vi en terning og slår med den 100 gange og får 12 6'ere, så har vi estimeret sandsynligheden for at slå en 6'er til 

$$

    \frac{12}{100} = 0{,}12.

$$

Slår vi flere og flere gange, så burde sandsynligheden gerne nærme sig $\frac{1}{6}\approx 0,167$. Hvis ikke den gør det, så kan det skyldes, at terningen ikke er fair. At den frekventielle sandsynlighed nærmer sig den teoretiske sandsynlighed desto flere gentagelser man laver, er en naturlov, der kaldes *de store tals lov*. Denne vil vi vende tilbage til i senere kapitler. 

## Opgaver
