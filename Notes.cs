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

Media Query
--------------

desktop > 1200px
tablet > 900px
mobile > 600px

The @media rule, introduced in CSS2, made it possible to define different style rules for different media types.

A media query consists of a media type and can contain one or more expressions, which resolve to either true or false.

@media not|only mediatype and (expressions) {
  CSS-Code;
}

You can also have different stylesheets for different media:

<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">


CSS Grid
--------------

The grid CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration.

This property is a shorthand for the following CSS properties:

    grid-template-columns
    grid-template-rows
    grid-auto-rows
    column-gap
    row-gap
    gap: row column
    grid-template-areas
    grid-area

Transition and Transforms
---------------------------

With the CSS transform property you can use the following 2D transformation methods:

translate(): The translate() method moves an element from its current position (according to the parameters given for the X-axis and the Y-axis).
    transform: translate(50px, 100px);
rotate(): The rotate() method rotates an element clockwise or counter-clockwise according to a given degree.
    transform: rotate(20deg);
    transform: rotate(-20deg);
scaleX(): The scaleX() method increases or decreases the width of an element
scaleY(): The scaleY() method increases or decreases the height of an element.
scale(): The scale() method increases or decreases the size of an element (according to the parameters given for the width and height).
    transform: scale(2, 3); 
    above code will increases the element to be two times of its original width, and three times of its original height
    transform: scale(0.5, 0.5);
    above code will decreases the <div> element to be half of its original width and height
skewX():The skewX() method skews an element along the X-axis by the given angle.
    transform: skewX(20deg);
skewY(): The skewY() method skews an element along the Y-axis by the given angle
    transform: skewY(20deg);
skew():
    The skew() method skews an element along the X and Y-axis by the given angles.
    skews the element 20 degrees along the X-axis, and 10 degrees along the Y-axis
    transform: skew(20deg, 10deg);
matrix(): The matrix() method combines all the 2D transform methods into one.
    matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())

    transform: matrix(1, -0.3, 0, 1, 0, 0);

CSS Transitions
-----------------

CSS transitions allows you to change property values smoothly, over a given duration.


To create a transition effect, you must specify two things:

    the CSS property you want to add an effect to
    the duration of the effect

    transition
    transition-delay:
        The transition-delay property specifies a delay (in seconds) for the transition effect.
        transition-delay: 1s;
    transition-duration: 	Specifies how many seconds or milliseconds a transition effect takes to complete

    transition-property: it can be css property
    transition-timing-function: ease | linear | ease-in | ease-out | ease-in-out

    The transition-timing-function property specifies the speed curve of the transition effect.


    div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s; //increase width after 2sec
}

div:hover {
  width: 300px; 
}

transition: width 2s, height 4s; // increase width and heigh both in dif duration

Transition + Transformation
-----------------------------
  transition: width 2s, height 2s, transform 2s;
    div:hover {
        transform: rotate(180deg);
    }

  transition-property: width;
  transition-duration: 2s;
  transition-timing-function: linear;
  transition-delay: 1s;

CSS Animations
------------------

CSS allows animation of HTML elements without using JavaScript or Flash!

    @keyframes
    animation-name : name of animation in keyframes
    animation-duration: duration to complete the animation
    animation-delay: delay the animation
    animation-iteration-count: it will loop the animation as per count
    animation-direction: it specifies animation direction , normal | reverse | alternate | alternate-reverse
    animation-timing-function: specifies the speed curve of the animation.
    animation


When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times.

To get an animation to work, you must bind the animation to an element.

The following example binds the "example" animation to the  element.

  div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 3;
}

@keyframes example {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}
   
With combining every element of animation

    div {
    width: 100px;
    height: 100px;
    background-color: red;
    position: relative;
    animation-name: example;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-delay: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    }

    @keyframes example {
    0%   {background-color:red; left:0px; top:0px;}
    25%  {background-color:yellow; left:200px; top:0px;}
    50%  {background-color:blue; left:200px; top:200px;}
    75%  {background-color:green; left:0px; top:200px;}
    100% {background-color:red; left:0px; top:0px;}
    }
