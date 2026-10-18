# Team photos

Place the photos in `public/team/` (create the folder).

`src/components/About.astro` has the markup and styles for a team block, but its
`team` array ships **empty** and therefore renders nothing. The names were not in
`aqtech-contenido.txt`, and inventing people on a page whose whole differentiator
is "hablás con quien construye" would be worse than leaving it out.

## To turn it on

Fill the array in `src/components/About.astro`:

```ts
const team: Member[] = [
  { name: "...", role: "...", photo: "/team/nombre.webp" },
  { name: "...", role: "...", photo: "/team/nombre2.webp" },
];
```

`photo` is optional. Without it the block falls back to a circle with the first
initial — usable, but a real photograph is the entire point of the section.

## Photo requirements

- **Format:** WebP, quality 80–85.
- **Dimensions:** 192×192 (2x of the 96×96 the markup declares), square.
- **Framing:** head and shoulders, face centered, eyes roughly one third from the
  top. The circle mask crops the corners.
- **Consistency:** both photos in the same light and against the same or a
  similar background. Two photos that obviously come from different places read
  as stock, which defeats the purpose.
- **Not required:** a studio. A window-lit phone photo of two identifiable people
  outperforms any stock portrait here.

## Role copy

Keep it plain and specific about what each person actually does — "Desarrollo y
producto" beats "CEO & Founder" for an audience deciding whether a real human
will answer them.
