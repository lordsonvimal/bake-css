Bake is a halfcooked SCSS guideline + library of css utilities for modern browsers.
Cook it yourselves.

### What?
Bake is a guideline for css utilities.
Define utility classes and use it in your html.

Ingredients for cooking maintainable, scalable, performant styles are provided by Bake.

### Why?
A lot of projects still uses preprocessors like scss but without any guidelines or rules.
When the project grew and became complex, there were lot of duplicate styles named differently and
nobody removes unused style when removing a html segment.

Some projects use approx `600 kb` of minified styles not including font and icon set

Although we can use postcss plugins like (purge css) to remove unused css, it is cumbersome to have lot of unused css in codebase.

Solution: Use guidelines / utilities like Bake, Tailwind css or a design system.
Bake focusses on reducing the size of css and shares some of the work to html.

### How?
- Standardize everything.
- Naming - Have class names upto 6 characters
- Build components - Compose smaller components as much as possible

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

