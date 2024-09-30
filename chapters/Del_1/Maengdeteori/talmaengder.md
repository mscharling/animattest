(talmaengder)=
# Talmængder

I Kapitel 1 lærte vi en masse om tal og approksimationer. Men snakken er ikke færdig endnu. I mængdeteorien inddeler vi tallene i det, som vi kalder *talmængder*. Inddelingen af tal skyldes både talhistorie, men også fælles egenskaber ved tallene. 

Inden vi går mere teoretisk til værks, så gennemgår vi en historie, som kunne have været motivation til udviklingen af disse inddelinger. 

## En fortælling om tallenes udvikling
I gamle dage havde man i princippet kun brug for de naturlige tal

$$

    1,2,3,4,5,...

$$

til at besvare spørgsmål såsom ”Hvor mange heste har du?” eller ”Hvor mange børn har du?”. Men en tallinje med kun de naturlige tal ville blot være en samling af punkter, der ligger med ækvidistante afstande til hinanden.

```{figure} historie_udv1.gif
---
scale: 100 %
align: center
---
```

Det er altså ikke engang en tallinje, for med de tal, som de kendte dengang, var der altså ikke tal imellem, som vi har i dag. De tal, der blandt andet ligger mellem de naturlige tal, er nemlig brøkerne, kommatal.

Eftersom samfundene udviklede sig, så havde man også brug for at kunne besvare mere sofistikerede spørgsmål. Det var blandt andet ”Hvor mange hektar land ejer du?” og ”Kan jeg købe en del af dit land?”, men i det hele taget gjaldt det især finansielle transaktioner. Hvordan skulle en familie fordele 10 kr. ligeligt imellem sine tre børn?

Til disse spørgsmål rækker de naturlige tal ikke længere. Derfor blev brøkerne

$$

    \frac{1}{8}, \frac{1}{5}, \frac{1}{4}, \frac{1}{2}, \frac{2}{3}, \frac{3}{4},...

$$

introduceret og disse udfyldte nu hullerne mellem de naturlige tal (troede man midlertidigt).

```{figure} historie_udv2.gif
---
scale: 100 %
align: center
---
```
Men undertiden blev samfundene også klar over, at der var andre spørgsmål, som man ikke kunne besvare med disse tal. Hvordan skulle man angive, at man ingen penge havde? Eller at man skylder penge? Sådanne spørgsmål blev motivationen bag indførelsen af tallet $0$ og de negative tal. For hvis ikke, at disse tal var blevet indført, hvordan skulle man så kunne løse ligningerne

$$

    x+4=3 \ \text{eller}\ x+4=4

$$

I dag ved vi jo, at løsningen til $x+4=3$ er $x=−1$ og at løsningen til $x+4=4$ er $x=0$, men hvor skulle tallet $−1$ ligge på tallinjen?

Man opstillede derfor kriterier, som disse tal skulle opfylde, nemlig Definition af tallet nul og negative tal. (REF) Men du får dem lige igen

````{panels}

**Tallet 0**

Lad os sige, at $a$ er et vilkårligt tal, så så er

$$

    a+0 = a

$$

$$

    a-a = 0

$$

---

**Negative tal**

Lad os sige, at $a$ og $b$ er vilkårlige tal og at $b>a$, så gælder der

$$

    a+(-a) = 0

$$

$$

    a+(-b) < 0

$$

````
```{exercise}
:class: dropdown

Kan du forklare ligningerne (kriterierne) for tallet nul og de negative tal?

```

Vores tallinje fortsætter nu i begge retninger.

```{figure} historie_udv3.gif
---
scale: 100 %
align: center
---
```

Historien stopper imidlertid her, men det viser sig faktisk, at der stadig er huller i vores tallinje. Vi mangler nemlig tallene som ikke kan skrives som brøker. Det gælder for eksempel $\pi$ og $\sqrt{2}$.

Udviklingen af tallene og tallinjen hjælper os faktisk videre med inddelingen af tallene. For hver motivation har faktisk fået en inddeling. Lad os tage hul på talmængderne.

 ## Naturlige tal
De naturlige tal er dem, som vi tæller på vores fingre. Derfor kaldes de også tælletallene. Det var dem, som vores historie startede med. Vi benævner samlingen af disse tal med N. Det vil sige, at N er mængden af de naturlige tal og vi kan også angive den på listeform:

$$

    \mathbb{N} = \{1,2,3,4,5,...\}

$$

De tre punktummer indikerer, at den bliver ved i en uendelighed.

## Heltal
De hele tal var udvidelsen af de naturlige tal med tallet 0 og de negative tal. Mængden af hele tal består derfor både af de naturlige tal og deres modsatte tal. Tallet 2 og −2 er modsatte tal og er indeholdt i heltallene. Vi benævner samlingen af heltallene med Z (efter det tyske ”Zahl”, der betyder tal). Vi kan også angive denne på listeform:

$$

    \mathbb{Z}= \{...,−3,−2,−1,0,1,2,3,...\}

$$
De hele tal er altså en mængde, der går fra minus uendelig til plus uendelig, hvilket igen er indikeret med de tre punktummer.

### Lige og ulige tal
I de hele tal har vi også en anden interessant inddeling, nemlig de lige og ulige tal. De lige tal er for eksempel tallene $4$, $8$ og $−12$, og de ulige tal for eksempel tallene $5$, $23$ og $−41$.

```{prf:definition} Lige og ulige tal
:label: ligeoguligetal

Et tal siges at være *lige*, hvis det kan skrives på formen

$$

    2\cdot n

$$

og et tal siges at være *ulige*, hvis det kan skrives på formen

$$

    2 \cdot n - 1,

$$

hvor $n$ er et eller andet heltal.

```

```{exercise}
:class: dropdown

Vis, hvorfor $9$ er et ulige tal.

<details>
<summary>Hint</summary>
<p>

Find det $n$ fra Definition ref, der opfylder, at $2\cdot n - 1= 9$. Er $n$ et heltal?

</p>
</details>

```

## Rationale tal
Brøker og kommatal med endeligt antal decimaler eller system i decimalerne tilhører de rationale tal. Faktisk er det netop med brøker, vi definerer de rationale tal ved. Alle tal, der kan skrives som en brøk, er et rationalt tal. Derfor er $4$ også et rationalt tal, da det kan skrives som $\frac{4}{1}$. De rationale tal benævner vi med $\mathbb{Q}$. Denne mængde af tal kan ikke på samme måde opskrives som $\mathbb{N}$ og $\mathbb{Z}$. I stedet skriver vi

$$

    \mathbb{Q} = \bigg\{ \frac{p}{q} \mid p,q\in \mathbb{Z}, q\neq 0 \bigg\}

$$

hvilket umiddelbart ser meget avanceret ud. Det, der blot står, er, at de rationale tal er mængden af tal, der kan skrives som brøk, hvor tallet i tælleren og nævneren er et heltal, men nævnertallet må ikke være $0$.

## Reelle tal

Som nævnt tidligere, så udfylder de rationale tal ikke alle hullerne på tallinjen - vi mangler nemlig de irrationale tal. De irrationale tal er de tal, der ikke kan skrives som brøker med heltal i tæller og nævner. Det vil sige, at irrationale tal er altså tal, der har uendeligt mange decimaler, der ikke har et system i sig. Vi har ikke noget symbol for de irrationale tal, men som eksempel kan vi nævne $\pi$, $\sqrt{2}$ og $e$ (Eulers tal), der alle er irrationale.

Vi slutter talmængderne af med de reelle tal. De reelle tal er en samling af de rationale og irrationale tal. De reelle tal vil derfor også udfylde alle hullerne i tallinjen. Hvis du tegner en tallinje, så tegner du faktisk på samme tid de reelle tal. De reelle tal er samlingen af alle de tal, som du kan komme i tanke om og vi benævner de reelle tal med $\mathbb{R}$.

## Talmængdernes indbyrdes forhold
Som du måske allerede har bemærket, så har disse mængder noget tilfælles. Kigger vi på heltallene $\mathbb{Z}$, så kan vi se, at alle de naturlige tal $\mathbb{N} også indgår i mængden af hele tal. Vi siger, at de naturlige tal er en delmængde af heltallene. Det skrives

$$

    \mathbb{N}\subseteq \mathbb{Z}

$$

og betyder, at alle de naturlige tal også er heltal.

På samme måde, så kan alle heltallene skrives som brøker, og derfor er alle heltal også rationale tal. Vi skriver derfor $\mathbb{Z}\subseteq \mathbb{Q}$. Så mangler vi blot de reelle tal $\mathbb{R}$. Dog var $\mathbb{R}$ mængden af alle tal, som vi kan komme i tanke om, og derfor må alle rationale tal også være reelle tal, ergo $\mathbb{Q}\subseteq\mathbb{R}$. Med diagram kan vi illustrere det på følgende måde:

```{figure} talmaengderihinanden.gif
---
scale: 100 %
align: center
---
```

````{prf:eksempel} Fire forskellige tal

```{panels}

**Tallet 2**

Tallet 2 er et naturligt tal, og derfor kan vi skrive

$$

    2\in\mathbb{N}.

$$

De naturlige tal er alle positive hele tal og derfor

$$

    2\in\mathbb{Z}.

$$

Alle hele tal kan skrives som brøker. For eksempel kan vi skrive $2=\frac{2}{1}$, så

$$

    2\in\mathbb{Q}.

$$

De reelle tal indeholder alle tal, som vi kan komme i tanke om, så vi har også

$$

    2\in\mathbb{R}.

$$

---

**Tallet 0**

Tallet 0 er ikke et naturligt tal, så

$$

    0\notin\mathbb{N}.

$$

For at vi kunne udvide til de negative tal, så skulle vi har tallet 0, derfor er det oplagt at

$$

    0\in\mathbb{Z}.

$$

Vi kan dividere 0 med alt, hvilket blot altid giver 0, derfor har vi

$$

    0\in\mathbb{Q}.

$$

Ligesom tallet 2, er det oplagt, at

$$

    0\in\mathbb{R}.

$$

---

**Tallet $-\frac{1}{3}$**

Tallet $-\frac{1}{3}$ er ikke noget, som vi kan tælle på fingrene og derfor

$$

    -\frac{1}{3}\notin \mathbb{N}.

$$

Det er klart, at brøken heller ikke er et heltal, da $-\frac{1}{3}\approx -0{,}33$ og derfor

$$

    -\frac{1}{3}\notin \mathbb{Z}.

$$

Til gengæld kan vi direkte se, at det er en brøk og derfor er det per definition et rationalt tal

$$

    -\frac{1}{3}\in\mathbb{Q}.

$$

De reelle tal samler alle de rationale og irrationale tal og derfor har vi også

$$

    -\frac{1}{3}\in\mathbb{R}.

$$

---

**Tallet $\pi$**

Vi har allerede fået etableret fra tidligere, at tallet $\pi$ er af en helt anden natur end de naturlige tal $\mathbb{N}$, de hele tal $\mathbb{Z}$ og de rationale tal $\mathbb{Q}$. Derfor kan vi kun finde tallet $\pi$ i mængden af reelle tal $\mathbb{R}$. De reelle tal er samlingen af rationale og irrationale tal, og eftersom $\pi$ er irrationalt, så har vi kun, at 

$$

    \pi \in \mathbb{R}.

$$
```   

````



 