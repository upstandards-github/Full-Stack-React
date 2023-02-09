CSS Flexbox Layout Module
-----------------------------
Before the Flexbox Layout module, there were four layout modes:

    1.Block, for sections in a webpage
    2.Inline, for text
    3.Table, for two-dimensional table data
    4.Positioned, for explicit position of an element

Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex (expand) to fill additional space or shrink to fit into smaller spaces. 

The flex container becomes flexible by setting the display property to flex:

The flex container properties are:

    flex-direction
            row: Items are placed the same as the text direction.
            row-reverse: Items are placed opposite to the text direction.
            column: Items are placed top to bottom.
            column-reverse: Items are placed bottom to top.

    flex-wrap
        nowrap: Every item is fit to a single line.
        wrap: Items wrap around to additional lines.
        wrap-reverse: Items wrap around to additional lines in reverse.

    flex-flow : it have direction and wrap

    justify-content
        flex-start: Items align to the left side of the container.
        flex-end: Items align to the right side of the container.
        center: Items align at the center of the container.
        space-between: Items display with equal spacing between them.
        space-around: Items display with equal spacing around them.

    align-items
        flex-start: Items align to the top of the container.
        flex-end: Items align to the bottom of the container.
        center: Items align at the vertical center of the container.
        baseline: Items display at the baseline of the container.
        stretch: Items are stretched to fit the container.

    align-content
        flex-start: Lines are packed at the top of the container.
        flex-end: Lines are packed at the bottom of the container.
        center: Lines are packed at the vertical center of the container.
        space-between: Lines display with equal spacing between them.
        space-around: Lines display with equal spacing around them.
        stretch: Lines are stretched to fit the container.

        https://flexboxfroggy.com/