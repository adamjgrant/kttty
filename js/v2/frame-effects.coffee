---
---

$width = 350
$height = 300
$wobble = 3

for $frame in document.querySelectorAll '.frame'
  paper = Raphael $frame, $width, $height
  paper.setViewBox(0, 0, $width, $height, true)
  paper.setSize('100%', '100%')
  $paper = paper.drawnRect(5, 5, $width-10, $height-10, $wobble)
  $paper.attr({stroke: "#333", "stroke-width": 3})

for $paper in document.querySelectorAll '.frame > svg'
  $paper.setAttribute("preserveAspectRatio", "none")

