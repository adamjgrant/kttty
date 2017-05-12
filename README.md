[Codeship Status](https://codeship.com/projects/57989/status?branch=master) 

# Setup

- Run `make` and pray.

# Create a new post

- `bundle` first.
- `thor jekyll:new The title of the new post`

# Create a comic

- Wrap your frames in a `.frames` div
- Make each frame with `.frame`
  - Style frames with the addition of `.[color]` where [color] is a rainbow color
- Make bubbles with `.bubble`
  - Align bubbles with
    - `.right`
    - `.bottom`
    - `.middle`
    - `.center`
  - Use `.machine` for robotic characters.

## Extra graphics

### iPhone frame

- Add `.frame-iphone` to your `.iframe` class
- Inside `.frame-iphone`, wrap your bubbles with `.iphone`
- Use either `.bubble` or `.bubble.right`

### Frame textures

- For the dotted pattern of pulp comics, use `.pulp`
  - For color, use `.[color]` where `[color]` is red, orange, yellow, green, blue, violet, or inverted.
- For stripes, use `.stripe`
  - For fine stripes, add `.fine`
  - For coarse stripes, add `.coarse`
  - For colored stripes, use `.[color]` where `[color]` is red, orange, yellow, green, blue, or violet.

# Adding meta information

In your post add the line

    <div data-img="foo"></div>

Where foo is the .png image of the comic hosted at http://cdn.everything.io/kttty/

Do not include the image extension. So the above example would resolve this:

    <meta property="og:image" content="http://cdn.everything.io/kttty/foo.png">

