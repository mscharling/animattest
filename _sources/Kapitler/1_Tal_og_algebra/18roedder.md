(roedder)=
# Rødder

Ligesom minus er det modsatte af plus, division er det modsatte af multiplikation, så er rødder det modsatte af potenser. 

```{figure} rod.png
---
scale: 50 %
align: center
---
```

En rod består af en *radikand* og en *rodeksponent*. $\sqrt[n]{\ }$ kaldes den $n$'te rod. Eftersom rødder er det modsatte af potenser, så kan vi formulere, hvad vi mener med en rod ved hjælp af potenser:

```{prf:definition} Rødder
:label: roedder

Lad $a$ være et vilkårligt tal. Hvis $b$ opfylder

$$

    \sqrt[n]{a} = b \ \text{når}\ b^n = a,

$$

så kalder vi $b$ den $n$'te rod af $a$. 

```

Sagt med ord, så er radikanden det tal, som vi får ved at opløfte roden til rodeksponenten. For eksempel

$$

    \sqrt[3]{8} = 2\ \text{fordi}\ 2^3 = 8.

$$

Ligesom potenser, så har vi også regneregler for rødder:

```{prf:regneregler} Rødder

$$

    \sqrt[n]{a^p} = a^{\frac{p}{n}}
    \tag{R0}\label{r0}

$$

$$

    \sqrt[n]{a} \cdot \sqrt[n]{b} = \sqrt[n]{ab}
    \tag{R1}\label{r1}

$$

$$

    \frac{\sqrt[n]{a}}{\sqrt[n]{b}} = \sqrt[n]{\frac{a}{b}}
    \tag{R2}\label{r2}

$$

```

Rødder er faktisk bare potenser med brøker som eksponenter. Det er netop det, som Regneregel $\eqref{r0}$ giver os. Idéen er, at 

$$

    \sqrt[n]{a^n} = a

$$

fordi

$$

    \sqrt[n]{a^n} = a^{\frac{n}{n}} = a^1 = a.

$$

Så, hvis en potens under rodtegnet med samme eksponent som rodeksponenten, så vil roden blot være potensens grundtal. For eksempel $\sqrt{4^2} = 4$, da $4^2 = 16$ og $\sqrt{16} = 4$. 

Regneregel $\eqref{r1}$ siger, at hvis to rødder ganges med hinanden og de har samme rodeksponenter, så kan vi gange radikanderne og beholde rodeksponenten. Beviset minder meget om det, som vi så for Regneregel $\text{P2}$ i {ref}`Kapitel 1.6<potenser>`:

$$

    \sqrt[n]{a} \cdot \sqrt[n]{b} \stackrel{\text{$\eqref{r0}$}}{=} a^{\frac{1}{n}} \cdot b^{\frac{1}{n}} = (ab)^{\frac{1}{n}} \stackrel{\text{$\eqref{r0}$}}{=} \sqrt[n]{ab}

$$

Regneregel $\eqref{r2}$ er hel anolog med $\eqref{r1}$, men i stedet med gange er det division. Beviset minder derfor også meget om $\eqref{r1}$:

$$

    \frac{\sqrt[n]{a}}{\sqrt[n]{b}} \stackrel{\text{$\eqref{r0}$}}{=} \frac{a^{\frac{1}{n}}}{b^{\frac{1}{n}}} = \bigg(\frac{a}{b}\bigg)^{\frac{1}{n}} \stackrel{\text{$\eqref{r0}$}}{=} \sqrt[n]{\frac{a}{b}}

$$

Potensregnereglerne, som vi har brugt her, beviste vi i {ref}`Kapitel 1.6<potenser>`.

```{prf:eksempel} Kvadratrødder og kubikrødder
:label: reksempel1

Hvis rodeksponenten er 2, så kalder vi roden for *kvadratroden*. Vi skriver ikke 2-tallet i rodeksponenten, da det i $\sqrt{\ }$ implicit ligger, at rodeksponenten er 2. 

$$

    \sqrt{64} = 8,\ \text{da}\ 8^2 = 64.

$$

Hvis rodeksponenten er 3, så kalder vi roden for *kubikroden*. 

$$

    \sqrt[3]{216} = 6,\ \text{da}\ 6^3 = 216.

$$

```

```{prf:eksempel} 
:label: reksempel2

Arealet af en gammel CD (uden hul) er $A = 50{,}24\ \text{cm}^2$.

<center> <font size="+40"> 💿 </font> </center>️

Bestem radien for CD'en. 

Vi ved at arealet af en cirkel er givet ved $A = \pi r^2$, så vi kan indsætte vores kendte værdier i formlen og løse for $r$. Lad os også bruge approksimationen $\pi \approx 3{,}14$. 

$$
\begin{align*}
&   &   50{,}24\ \text{cm}^2 &= 3{,}14r^2 \\
&\Leftrightarrow &  \frac{50{,}24\ \text{cm}^2}{3{,}14} &= r^2 \\
&\Leftrightarrow &  16\ \text{cm}^2 &= r^2 \\
&\Leftrightarrow &  \sqrt{16\ \text{cm}^2} &= \sqrt{r^2} \\
&\Leftrightarrow &  4\ \text{cm} &= r
\end{align*}
$$

Eftersom vi brugte en approksimation for $\pi$, så vil vores resultat også være en approksimation. Vi konkluderer, at en CD med det angivne areal er $r\approx 4\ \text{cm}$.

```

Da vi kiggede på potenser i {ref}`Kapitel 1.6<potenser>`, havde vi et resultat med negative grundtal. Vi kan også finde roden af et negativt tal, hvis rodeksponenten er ulige. For eksempel

$$

    \sqrt[3]{-27} = -3\ \text{da}\ (-3)^3 = -27,

$$

hvilket du selv kan kontrollere er korrekt med andre eksempler. Men, hvad hvis rodeksponenten er lige? Som vi så i beviset for {prf:ref}`Sætning 1.6<negativegrundtalthm>`, så er $(-1)^2 = 1$ og ligeledes $(-1)^4 = 1$ osv. Vi kan altså ikke danne negative potenser, hvis eksponenten er lige. Så, at kigge på 

$$

    \sqrt{-9}

$$

giver ikke mening. Vi havner ved en blindgyde

$$

    \sqrt{-9} = \sqrt{-1\cdot 9} \stackrel{\text{$\eqref{r1}$}}{=} \sqrt{-1}\cdot\sqrt{9} = \sqrt{-1}\cdot 3,

$$

for vi kan ikke regne $\sqrt{-1}$. Kvadratroden, og andre rødder med lige rodeksponenter, findes ikke, hvis radikanden er negativ. 

```{prf:korollar}
:label: ligeoguligeroedder

Betragt roden $\sqrt[n]{-a}$, hvor $-a$ er et negativt tal. Da gælder følgende udsagn:

* Hvis $n$ er et lige tal, så findes roden ikke.
* Hvis $n$ er et ulige tal, så findes roden.

```

<details style = "margin-block-end: 1em">

<summary>Bevis</summary>

<p>

Vi beviser korollaret ved at bruge, hvordan rødder er defineret, samt {prf:ref}`negativegrundtalthm<negativegrundtalthm>`.

```{prf:bevis}
:class: text

Antag $-a$ er negativ. Da har vi fra {prf:ref}`roedder<roedder>`, at $\sqrt[n]{-a}=b$, hvis $b^n = -a$. Fra {prf:ref}`negativegrundtalthm<negativegrundtalthm>` ved vi, at det er kun for $n$ ulige, at potensen $b^n$ kan være negativ. Det betyder, at hvis $n$ er lige, så kan vi aldrig have, at $b^n$ er negativ. Dermed kan vi ikke regne $\sqrt[n]{-a}$ for lige $n$, og derfor må den lige rod ikke være et reelt tal. 

```
</p>

</details>

Matematik handler også nogle gange om at antage ting, der ikke nødvendigvis giver mening. Antager man, at $\sqrt{-1}$ er et tal, så leder dette til teorien om *komplekse tal*.

```{prf:eksempel} 
:label: reksempel3

Vi reducerer udtrykket

$$

    2\sqrt[3]{\frac{\sqrt{256a^3}}{2b^3}}.

$$

Vi starter med at reducere brøken under den kubikroden:

$$

    \frac{\sqrt{256a^3}}{2b^3} \stackrel{\text{$\eqref{r1}$}}{=} \frac{\sqrt{256}\cdot\sqrt{a^3}}{2b^3} = \frac{16\sqrt{a^3}}{2b^2} = \frac{8\sqrt{a^3}}{b^3} \stackrel{\text{$\eqref{r0}$}}{=} \frac{4a^{\frac{3}{2}}}{b^3}.

$$

Vi går tilbage og indsætter brøken i det oprindelige udtryk og reducerer:

$$
\begin{align*}
    2\sqrt[3]{\frac{8a^{\frac{3}{2}}}{b^3}} &\stackrel{\text{$\eqref{r2}$}}{=} 2\frac{\sqrt[3]{8a^{\frac{3}{2}}}}{\sqrt[3]{b^3}} \\ 
    &\stackrel{\text{$\eqref{r1}$}}{=} 2\frac{\sqrt[3]{8}\cdot\sqrt[3]{a^{\frac{3}{2}}}}{\sqrt[3]{b^3}} \\
    &= 2\frac{2\sqrt[3]{a^{\frac{3}{2}}}}{b} \\
    &\stackrel{\text{$\eqref{r0}$}}{=} \frac{4(a^{\frac{3}{2}})^{\frac{1}{3}}}{b} \\
    &= \frac{4a^{\frac{3}{2}\cdot\frac{1}{3}}}{b} \\
    &= \frac{4a^{\frac{1}{2}}}{b} \\
    &\stackrel{\text{$\eqref{r0}$}}{=} \frac{4\sqrt{a}}{b}
\end{align*}
$$

Afslutningsvis kan vi konkludere, at det oprindelige udtryk kan reduceres til:

$$

    2\sqrt[3]{\frac{\sqrt{256a^3}}{2b^3}} = \frac{4\sqrt{a}}{b}

$$

```



## Opgaver

```{prf:opgave}

Omskriv rødderne til potenser:

&nbsp; &nbsp; a) $\sqrt{a^4}$ \
&nbsp; &nbsp; b) $\sqrt[3]{a^2}$ \
&nbsp; &nbsp; c) $\sqrt{a^2 b}$ \
&nbsp; &nbsp; d) $\sqrt[5]{a^5 b^5}$

```

```{prf:opgave}

Reducer følgende udtryk og forklar undervejs hvilke regneregler, du bruger:

&nbsp; &nbsp; a) $\sqrt{\sqrt{a^3}}$ \
&nbsp; &nbsp; b) $a\sqrt[3]{a^2}$ \
&nbsp; &nbsp; c) $a+b\sqrt{ab^2}$ \
&nbsp; &nbsp; d) $2b+\sqrt{4a^2}-a$ 

```

```{prf:opgave}

Reducer følgende udtryk og forklar undervejs hvilke regneregler, du bruger:

&nbsp; &nbsp; a) $\frac{a\sqrt{b^2}}{\sqrt{16a^3}}$ \
&nbsp; &nbsp; b) $2\sqrt[3]{b^2(a+b)}\cdot\sqrt{a^3}$ \
&nbsp; &nbsp; c) $\sqrt[3]{\frac{27a^5}{\sqrt{a}}}$

```

```{prf:opgave}

En globus har et rumfang på $V=11\ \text{cm}^3$

<center> <font size="+40"> 🌐 </font> </center>️

&nbsp; &nbsp; a) Bestem globussens diameter. \
&nbsp; &nbsp; b) Angiv globussens rumfang i liter $L$.

```


