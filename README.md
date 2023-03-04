# BAKE

Bake is a halfcooked SCSS guideline + library of css utilities for modern browsers.
Cook it yourselves.

## What?
Bake is a guideline for css utilities. Combination of ACSS (Atomic CSS), layout + component library and inline styles.

Ingredients for cooking maintainable, scalable, performant styles are provided by Bake.

## Why?
Styles are be very hard to maintain. Reusing styles are so hard to maintain that developers tend to use a library in products.

- A lot of projects still uses preprocessors like scss but without any guidelines or rules.
- When the project grew and became complex, there were lot of duplicate styles named differently and
nobody removes unused style when removing a html segment.
- Some projects use approx `600 kb` of minified styles not including font and icon set

Solution: Use guidelines / utilities like Bake, `Tailwind css` or a design system.

## How?
Bake defines classnames in following categories

- Single style
- Layout style
- Component

- Single style
Utilities like margin, padding, border, width, height, position are considered as single style.

Use these styles when it is needed in places apart from `components`.

These class names are defined as
- first letter of each word of the style name followed by value (full value if it is a number, first letter of each word, if it is a string)
  - .m0 { margin: 0px }
  - .ma { margin: auto }
- In case two styles have same first letters, casing of the letter differentiates the styles
  - .mw100 { min-width: 100% }
  - .Mw100 { max-width: 100% }
  - .hmc { height: min-content }
  - .hMc { height: max-content }

- Layout style
Styles used for layout can have meaningful names like `row` and `col`
When using flexbox, most properties are available as `Single style`

grid layout is a bit complex, involves a lot of combinations. Build grid system using a component system of your choice

- Component style
Composition of components are an art.

Build common components / templates with their behaviour

For any component, try to create a set of standards around it and build css accordingly.

Component styles usually are defined as layout styles + component specific style (colors, sometimes spaces, etc...)

Use the guideline to define your component classes.

## Guideline
- Standardize everything
- Naming
  - Recommended to have class names upto 6 characters. Organizations can decide naming conventions according to their needs
  - Resolve conflicts wisely and consistently
- Build components
  - Compose smaller reusable components
- Inline custom value properties
- Remove unused style
  - Track and report unused styles
  - Use tools like postcss to remove unused css
- CSS resets
  - Add global reset for html, body and all elements in body
  - Add reset for every component
- Typography
  - Don't use more than 2 font families and not more than 3 variations
  - Use em/rem units for fonts
  - Some font based component can use `rem`

## Drawbacks
Some common problems can be mitigated
- It takes time to grasp the defined grammar. Each dev prefers their own grammar
  - Once learned, devs will gain superpowers
- HTML can look cluttered and hard to understand the style of the class
  - Create document site similar to `font-awesome` or `material-icons`
  - Create editor plugin
- Doesn't cover all the cases
  - CSS is complex and evolving rapidly. Covering all the cases is nearly impossible.
  - The objective of bake is not to cover all the cases. It is to make people

## TODO
- Typography
- Responsiveness guideline
- Color system
- Animation
- Compare against OOCSS, BEM, SMACSS
