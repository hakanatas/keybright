Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Explore
 @hakanatas
Sign out
1
0 19 kivancguckiran/keybright
forked from philippedubost/keybright
 Code  Pull requests 0  Projects 0  Wiki  Insights
You’re editing a file in a project you don’t have write access to. Submitting a change to this file will write it to a new branch in your fork hakanatas/keybright, so you can send a pull request.
keybright/js/scenes/ 
Keyboard.js
  or cancel
    
 
1
    /*
2
    Keybright:  https://github.com/philippedubost/keybright
3
    ---------------------------------
4
    This portion is a template behavior for the Keyboard
5
    It is using the variables keyboardX, keyboardY, keyboardSX, keyboardSY set during Calibration phase.
6
    */  
7
    (function() {
8
    //refers to the folder /img/courierNew/ containing all letters images
9
    var _FONT = "courierNew";
10
    var soundType = new Howl({urls: ['../../sound/key1.ogg']});
11
    var soundSpace = new Howl({urls: ['../../sound/space1.ogg']});
12
​
13
    // Matter aliases
14
    var Engine = Matter.Engine,
15
    World = Matter.World,
16
    Bodies = Matter.Bodies,
17
    Body = Matter.Body,
18
    Composite = Matter.Composite,
19
    Composites = Matter.Composites,
20
    Common = Matter.Common,
21
    Constraint = Matter.Constraint,
22
    RenderPixi = Matter.RenderPixi,
23
    Events = Matter.Events,
24
    Bounds = Matter.Bounds,
25
    Vector = Matter.Vector,
26
    Vertices = Matter.Vertices,
27
    MouseConstraint = Matter.MouseConstraint,
28
    Mouse = Matter.Mouse,
29
    Query = Matter.Query;
30
​
31
    var Keyboard = {};
32
​
33
    var _engine,
34
    _gui,
35
    _inspector,
36
    _sceneName,
37
    _mouseConstraint,
38
    _sceneEvents = [],
39
    _useInspector = window.location.hash.indexOf('-inspect') !== -1,
40
    _isMobile = /(ipad|iphone|ipod|android)/gi.test(navigator.userAgent);
41
​
42
    var keywords =  ['TEF', 'HAKAN', 'KORKMA'];
43
    var shootings = ['GELECEK','ATAS',  'SONMEZ'];
44
    var sequence = [];
45
    var max_sequence = keywords.reduce(function (a, b) { return a.length > b.length ? a : b; }).length;
46
    var time = 1500;
47
​
48
    var checkSequence = function(key) {
49
        var result = -1;
@hakanatas
Propose file change

Update Keyboard.js

Add an optional extended description…
 
 
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About
Press h to open a hovercard with more details.
