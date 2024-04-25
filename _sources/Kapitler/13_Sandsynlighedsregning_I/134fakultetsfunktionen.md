# Fakultetsfunktionen

Inden vi skal til introducere kombinationer og permutationer, så får vi brug for en vigtig funktion nemlig *fakultetsfunktionen*. Denne er defineret ved:

$$

    n! = n\cdot (n-1) \cdot (n-2) \cdots 3 \cdot 2 \cdot 1, \qquad n\in\mathbb{N}.

$$ (fakultetsfunktion)

For eksempel er $6! = 6\cdot 5\cdot 4\cdot 3\cdot 2\cdot 1 = 720$.

Fakultetsfunktionen tager kun de naturlige tal og nul som input. Du kan ikke inputte negative tal eller decimaltal. Der findes dog en generaliseret formel for fakultetsfunktionen, som bruger den såkaldte Gammafunktion, der godt kan håndtere decimaltal. 

Derudover gælder der også, at 

$$

    n! = n (n-1)!

$$ (fakultetsidentitet)

```{exercise}
:class: dropdown

Kan du vise, at $n! = n (n-1)!$?

<details>
<summary>Hint</summary>
<p>

Hvad er $(n-1)!$ lig med? Husk hvordan fakultetsfunktionen er defineret.

</p>
</details>

```

Omformulerer vi {eq}`fakultetsidentitet` til

$$

    (n-1)! = \frac{n!}{n},

$$

så kan denne bruges til at vise, at $0! = 1$. Det kan umiddelbart virke kontraintuitivt, at $0!$ skulle give 1, men lad os vise dette:

$$

    0! = (1-1)! = \frac{1!}{1} = \frac{1}{1} = 1.

$$

Fakultetsfunktionen er en meget hurtigt voksende funktion. Det vil vi også se, når vi skal snakke om kombinationer og permutationer. Der skal ikke mange elementer til førend, at antallet af kombinationer og/eller permutationer stikker helt af.

| $n$                     | $\qquad n!$                    |
| ----------------------- | ----------------------- |
| $0$                     | $\qquad 1$                     | 
| $1$                     | $\qquad 1$                     | 
| $2$                     | $\qquad 2$                     | 
| $3$                     | $\qquad 6$                     | 
| $4$                     | $\qquad 24$                    | 
| $5$                     | $\qquad 120$                   | 
| $6$                     | $\qquad 720$                   | 
| $7$                     | $\qquad 5.040$                 | 
| $8$                     | $\qquad 40.320$                | 
| $9$                     | $\qquad 362.880$               | 
| $10$                    | $\qquad 3.628.800$             | 

## Opgaver

```{prf:opgave}

1. &nbsp; 

```