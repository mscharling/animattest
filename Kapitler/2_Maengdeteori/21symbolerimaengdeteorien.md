# Elementære mængdesymboler 
Vi skal nu til at lære de symboler, som vi bruger i mængdeteorien, at kende. Du vil komme til at møde dem i senere kapitler.

## Mængden $\{\ \}$
Når vi opskriver en mængde, så omklamre vi den med tuborg-parenteser { } (eller curly brackets, som de hedder på engelsk).

Før nævnte vi nogle legetøjselementer, nemlig LEGO, Playmobil, Pokémon og Schleich. Lad os for nemhedensskyld kalde legetøjsmængden for $L$, så kan vi skrive mængden som

$$

    L = \{ \text{LEGO, Playmobil, Pokémon, Schleich} \}

$$

Dog behøver legetøjsmængden ikke kun være bestående af de nævnte eksempler, det kunne ligeså være andre. Derfor vil vi gerne kunne angive elementer i en mængde mere generelt. For eksempel kunne vi sige at symbolet $\ell$ var et eller andet slags legetøj og så kunne vi sige, at $\ell_1$ var LEGO, $\ell_2$ Playmobil, osv. (eller andet slags legetøj) og så ville vi kunne skrive legetøjsmængden som

$$

    L = \{\ell_1, \ell_2, \ell_3, \ell_4\}

$$

Denne mængde kan vi også indeksere med i, så ville vi kunne skrive $L= \{ \ell_i, i=1,...,4 \}$. Vi siger, at vi har *ndekseret* vores elementer. Dette kan vi gøre for alle slags mængder og vi kan derfor bruge notationen helt generelt.

Oftest vil vi angive vores mængder med store bogstaver og så en angivelse af mængden med elementerne angivet ved samme bogstav, bare som lille. For eksempel

$$

    A = \{a_1, a_2, a_3, a_4\}

$$

```{figure} legetoejsmaengde1.gif
---
scale: 100 %
align: center
---
```

## Element i $\in$
Du har nu mødt begrebet element. Men hvis du fortsat er i tvivl, så bruger vi ordet element, om objekterne i mængden.

Vi har også et symbol for at sige om et element er i mængden. Her bruger vi $\in$, som betyder "element i". Vi bruger det på følgende måde:

$$

    \text{LEGO} \in L

$$

Her står, at $\text{LEGO}$ er et element i legetøjsmængden $L$. Har vi mængden $A=\{ a_1,a_2,a_3,a_4 \}$, så skriver vi, at $a_1,a_2,a_3,a_4 \in A$. Hvis vi forestiller os en anden mængde $B$, med elementerne

$$

    B = \{a_1,a_2,a_3,a_4,b_1,b_2\},

$$

så kan vi se, at $b_1,b_2 \in B$, men $b_1,b_2 \notin A$, altså $b_1$ og $b_2$ er ikke elementer i $A$. På samme tid kan vi også se, at alle $A$’s elementer er i $B$. Netop dette leder os til det sidste symbol.

```{figure} legetoejsmaengde2.gif
---
scale: 100 %
align: center
---
```

## Delmængde af $\subseteq$
Har man to eller flere mængder, der har elementer tilfælles, så kan der være tale om en delmængde. Lad os sige, at vi har to personer, der hedder Bo og Lis, og deres legetøjsmængder lyder således:

$$

    L_{\text{Bo}} = \{ \text{LEGO, Playmobil, Pokémon, Schleich} \}

$$

$$

    L_{\text{Lis}} = \{ \text{LEGO, Playmobil, Pokémon, Schleich, YuHiOh, Barbie} \}

$$

Her kan vi se, at Lis har mere forskelligt legetøj end Bo, da $\text{YuGiOh,Barbie} \in L_{\text{Lis}}$, men $\text{YuGiOh,Barbie} \notin L_{\text{Bo}}.$ Vi kan på samme tid også se, at alt legetøj, som Bo har, det har Lis også. Bos legetøj er så at sige inkluderet i Lis’ legetøj. Vi siger, at Bos legetøjsmængde er en *delmængde* af Lis’ legetøjsmængde og vi skriver

$$

    L_{\text{Bo}} \subseteq L_{\text{Lis}},

$$

hvor $\subseteq$ betyder *delmængde af*.

Før generaliserede vi det mere matematisk med mængderne $A$ og $B$:

$$

    A = \{a_1, a_2, a_3, a_4 \}

$$

$$

    B = \{a_1, a_2, a_3, a_4, b_1, b_2 \}

$$

Her ser vi igen, at $A\subseteq B$.

Vi bruger altså $\subseteq$ til at beskrive mængder, der ligger i mængder, og vi bruger $\in$ til at beskrive elementerne i en mængde.