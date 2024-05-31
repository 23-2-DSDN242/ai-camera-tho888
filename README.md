[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ex6pWDJu)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15066727&assignment_repo_type=AssignmentRepo)
## Creative Coding 2: Custom Pixel

All images produced are original pictures taken in April, 2022. These images were processed through a framework to generate custom masks that highlight the graffiti/street art by applying different effects to different layers.

The foreground — indicated by white sections in the masks — highlight the graffiti which is run through code to move the pixels around, warping the masked sections in the output image. I modified code from this [pixel filter example](https://github.com/23-2-DSDN242/mddn-242-data-mapping-dribnet/blob/8102140af8a1de2b7ac0ee6fc219f80a70329b7f/sketch.js) to help achieve this.


The background — indicated by empty space in the masks — draws a new layer and fills the other section with pointillism similar to the original codebase. I also used code from this [layering example](https://github.com/23-2-DSDN242/mddn-242-data-mapping-dribnet/blob/32fecc77baeb2e1003ebf161a2750a58ba550bae/sketch.js) to help separate the layers so that one is drawn on top of the other.