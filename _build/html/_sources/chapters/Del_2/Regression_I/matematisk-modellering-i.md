# Matematisk modellering I

En disciplin, der foretages i mange sammenhænge, er matematisk modellering. Som vi også introducerede dette emne med, så handler matematisk modellering om at bruge den data, som du har tilgængelig, til at sige noget prædiktivt. Det kan både være at komme med bud på, hvordan din data kunne udvikle sig uden for det område, som du har observeret. For eksempel, hvordan udvikler befolkningen sig de næste par år? Det kan også være noget, der er afledt af den model, som du har estimeret. For eksempel, hvilke faktorer der har størst indflydelse på udviklingen, eller hvordan din model vil reagere, hvis visse parametre ændres. Dette gør det muligt at forstå sammenhænge, forsøge at forudsige fremtidige tendenser og træffe mere informerede beslutninger baseret på modellens resultater.

Så skal du lave en matematisk model, så kan det være sundt at have overvejet følgende elementer.

## Undersøg din data

Hvordan ser din data ud? Det er vigtigt, at du forstår dit data, inden du laver en model. Det kan derfor være sundt, at du laver deskriptiv statistisk på dit data, både din forklarende variabel ($x$) og din responsvariabel ($y$).

Har du fået en god fornemmelse for, hvordan dine variabler ser ud individuelt, så er det tid til at kigge på, hvordan de opfører sig i forhold til hinanden. Ser vi en tydelig sammenhæng? Er de korrelerede? Det er oftest ikke nok kun at beregne korrelationskoefficienten for at kunne vurdere en god model. For eksempel, en positiv korrelation kan sagtens opstå for data, der udvikler sig eksponentielt. Her har vi brug for at se dataets udvikling visuelt. Undersøgelser i et scatterplot kan være meget indsigtsfulde. Måske, du også har brug for at prøve at plotte dine datapunkter i et enkelt- og/eller dobbeltlogaritmisk koordinatsystem.

## Håndtering af outliers og manglende værdier

I din diskriptive statistik vil du også se, hvis du mangler data eller har outliers. Disse observationer skal håndteres. I de fleste sammenhænge ignoreres hele datapunktet. Der findes dog andre måder at håndtere dem på. Prøv at overveje følgende:

* Hvad ville det betyde for vores matematiske model, at der er en outlier?
* Hvad ville det betyde for vores matematiske model, at der er områder i vores data, der mangler observationer?

For at håndtere manglende værdier kunne vi erstatte dem med gennemsnittet for vores data. På den måde ændrer vi ikke i den deskriptive statistisk. Ville vi kunne erstatte dem med 0? Ikke nødvendigvis! At mangle en værdi er ikke det samme som værdien 0. Hvis der stod 0, så ville det tælle med i den deskriptive statistik. Det er helt klart nogle ting, du skal overveje.

## Find den bedst passende model

Vi har nu fået en forståelse af data, og kan på baggrund af den indsigt give et bud på hvilken model, der kunne være oplagt.

Ser vi en lineær tendens i et almindeligt scatterplot, så kan en simpel lineær regressionsmodel være et godt bud på en model. Er den lineære tendens synlig i et enkeltlogaritmisk koordinatsystem, så er en eksponentiel model et godt bud. Hvis det er i et dobbeltlogaritmisk koordinatsystem, så en potens model.

## Evaluér modellen med forklaringsgraden og residualerne

Som et led i at finde en passende model, skal residualerne vurderes. Opfører de sig pænt?

* Er de så små som mulige? Har du brugt mindste kvadraters metode for at finde modellen?
* Er de tilfældigt spredt omkrind $x$-aksen? Indeholder de et mønster?
* Har de konstant varians? Ser du en tragt-form i dine residualer?

Residualerne siger rigtig meget om din model, og du kan derfor ikke komme udenom at skulle kigge på dem.

Et andet tal, som du også bør have med i din evaluering af modellen, er forklaringsgraden. Er den tæt på 1, er det et udtryk for, at din model fanger al udviklingen i din data. Er den tæt på 0, er det et udtryk for, at din model ikke forklarer udviklingen i din data.

## Vurdér modellens prædiktive værdi

Afslutningsvis, bør du vurdere, om modellen giver mening og overveje, hvad dens begrænsninger er. Det er en sund øvelse at forstå, hvad din model kan. Din model bør selvfølgelig være dit bedste bud på en model for dit data. Men, giver den også mening over tid? Hvad hvis du indsamlede mere data, ville det så stadig være den samme model, du havde gået med? Kan du komme i tanke om begrænsninger ved din model? Hvis du bruger en lineær model, giver det så mening, at din data skulle udvikle sig lineært? 

Det er sådanne overvejelser, der er med til at vurdere modellens prædiktive værdi. Det kan være en svær øvelse, men meget indsigtsfuld!
