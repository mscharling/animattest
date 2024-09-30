# Intervaller

Intervaller er også en samling af tal mellem to ydre punkter. Det betyder faktisk, at intervaller er mængder på vores tallinje. 

Nedenfor har vi det, som vi kalder *begrænset* intervaller:

| Interval                  | Intervalnotation      | Ulighednotation   | Navn                  |
| ---------------------     | --------------------- | ----------------- | --------------------- |
| ![](int1_beg.png)         | $[a,b]$               | $a \leq x \leq b$ | Lukket                |
| ![](int2_beg.png)         | $]a,b]$               | $a < x \leq b$    | Halvåbent             |
| ![](int3_beg.png)         | $[a,b[$               | $a \leq x < b$    | Halvåbent             |
| ![](int4_beg.png)         | $]a,b[$               | $a < x < b$       | Åbent                 |

Nedenfor har vi det, som vi kalder *ubegrænset* intervaller:

| Interval                  | Intervalnotation      | Ulighednotation   |
| ---------------------     | --------------------- | ----------------- | 
| ![](int1_ubeg.png)        | $[a,+\infty[$         | $x \geq a$        | 
| ![](int2_ubeg.png)        | $]a,+\infty[$         | $x > a$           |
| ![](int3_ubeg.png)        | $]-\infty,b]$         | $x \leq b$        |
| ![](int4_ubeg.png)        | $]-\infty,b[$         | $x < b$           |


```{prf:eksempel}
:label: inteksempel1

Et eksempel med et interval. 

```

```{prf:eksempel}
:label: inteksempel2

Et andet eksempel med et interval og elementer. 

```

Eftersom intervaller er mængder, så kan vi anvende mængdeoperationer på intervallerne. 

````{prf:eksempel}

```{figure} inteksempel.png
:width: 100%
```

$$

    A = [-2,4]\ \text{og}\ B=[2,10]

$$

Fællesmængde: 

$$

    A\cap B = [2,4] 

$$

Foreningsmængde:

$$

    A\cup B = [-2,10]  
    
$$

Differensmængder:

$$

    A \setminus B = [-2,2[ \quad \text{og}\quad B \setminus A =\ ]4,10]

$$

````

## Opgaver

```{prf:opgave} 

Tegn en tallinje fra -10 til 10. Markér følgende intervaller:

1. &nbsp; $[-3,0[$ 
2. &nbsp; $[0,5]$ 
3. &nbsp; $[6,+\infty[$

Angiv intervallerne på ulighedsnotation og afgør hvilket slags interval, du har med at gøre.

```

```{prf:opgave} 

Afgør om tallene er elementer i intervallerne:

$$1,\quad 0,\quad -1,\quad \frac{3}{2},\quad \frac{10}{3},\quad \pi,\quad 9,\quad 12$$

1. &nbsp; $[0,2]$ 
2. &nbsp; $]-1,12]$ 
3. &nbsp; $[1,4[$ 
4. &nbsp; $[3,12[$

Brug $\in$-notationen som i {prf:ref}`inteksempel2`

```

````{prf:opgave} 

Opskriv mængderne på intervalform. Bestem fællesmængde, foreningsmængde og differensmængder:

1. &nbsp; 
```{figure} intopga.png
:width: 60%
```

2. &nbsp; 
```{figure} intopgb.png
:width: 60%
```

3. &nbsp; 
```{figure} intopgc.png
:width: 60%
```

4. &nbsp; 
```{figure} intopgd.png
:width: 60%
```

````