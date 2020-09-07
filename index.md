## Welcome to Jon's first GitHub Page

Hello World, and welcome to my first github page. I might seems pretty techie sometimes but I'm actually more of an artist... maybe about 65% artist 35% tech? I've only dabbled a little with code and actually haven't done web stuff since the old days of pasting themes into myspace boxes. 

So why am I making a website? Well I just started grad school and I've gotta make a blog for class and this is a coding class and I heard that github is a good place to share code so... why not figure out how to make a blog on github! I barely know how to use github besides the fact that I've been linked here before to download stuff. Well one of my strengths is being able to figure stuff out so here I am and here is the start to my blog!

### Creative Coding Week 1

During my first class in graduate school at NYU in the Intergrated Digital Media student I learned about p5js and how to use it for the first time. During the lecture and exploring the resources, I learned about 3D objects and how I had to use WEBGL, it was pretty cool, at the same time I also learned about animation in p5js. This is what I played around with and ended up with by the end of class:

![firstcode](https://raw.githubusercontent.com/phanman71/jons_github/week01/Screen%20Shot%202020-09-06%20at%209.02.55%20PM.png)

For the first homework assignment I decided to go with the selfie. I figured that good starting point would be to sketch a selfie and figure out basic shapes to make myself. I then decided that it would make more sense to just take a real selfie to base it off of, leveraging what I know I decided to get a simple version of myself by running some photoshop filters. 

![photoshop](https://raw.githubusercontent.com/phanman71/jons_github/week01/Screen%20Shot%202020-09-06%20at%209.01.01%20PM.png)

I later figured out that I could import an image into p5js after some research to trace over. I found out that the coordinate system in webgl starts in the middle which means a negative value is needed, which then meant that I couldn't use the mouse over function I learned in class. Thankfully I found out about the translate function which let me shift things -width/2, -height/2 to get things going with less guess work.


```markdown
//get curve vertex locations
function mousePressed() {
  console.log('curveVertex(' + mouseX + ',' + mouseY + ');');
```

Things got a little pickly with so much translating so I also learned about the push and pop fuctions in the reference library whcih is a workflow I think works pretty nicely. I started with simple shapes but it got tedious with not so super outcomes, so I figured that I should try to do it like how I would in photoshop with curves and vertex points, luckily there was the begin shape function. It worked pretty good at first, I tried just drawing my shirt but for some reason the vertex didnt work very well whenever I made shapes that included anything that went positive x and then positive y like a backwards L, some sort of cross over would happen. Luckily I found out about curveVertex which gave me more control. Even so the process was super tedious so I came up with an awesome idea to turn the console mouse position to write the code for me. 

![hexagon](https://raw.githubusercontent.com/phanman71/jons_github/week01/Screen%20Shot%202020-09-06%20at%209.11.44%20PM.png)

https://www.quora.com/How-can-you-find-the-coordinates-in-a-hexagon

After I figured that out, the rest was cake... more like layering cake that is! All I had to do then was click around and trace my simplified photoshop selfie. I found out that for simple or small shapes, I ended up using the regular vertex points. I decided that I wanted to decorate my drawing with some 3D shapes to get used to the coordinates but also since I went through all the trouble of using WEBGL. I created an invisible shape near the origin to rotate in the Y which I used to help visualize the pivot which I threw in a bunch of other shapes rotating around my head, at first I had 4 but that wasnt enough and then I had 8 but that got too cluttered so i figured out the coordinates with some simple math from google.

[week_01 code in github](https://github.com/phanman71/jons_github/blob/week01/Jon_01_selfie/sketch.js)

[week_01 code in p5 js](https://editor.p5js.org/phanman/sketches/Hdo3V8C0X)

The last part of the puzzle was to figure out how to use post up my work on a blog, I went with github so I had to learn the interface and all that, what a repository is, how to make a website using it, how to embbed my code, throw in pictures, ect... which took a lot more time that I thought but here it is!

<iframe style="width: 1000px; height: 1000px; overflow: hidden;"  scrolling="no" frameborder="0"
src="https://editor.p5js.org/phanman/embed/bmr3uVzmw">
</iframe>



