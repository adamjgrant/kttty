(function() {
  var $frame, $height, $paper, $width, $wobble, paper, _i, _j, _len, _len1, _ref, _ref1;

  $width = 350;

  $height = 300;

  $wobble = 3;

  _ref = document.querySelectorAll('.frame');
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    $frame = _ref[_i];
    paper = Raphael($frame, $width, $height);
    paper.setViewBox(0, 0, $width, $height, true);
    paper.setSize('100%', '100%');
    $paper = paper.drawnRect(5, 5, $width - 10, $height - 10, $wobble);
    $paper.attr({
      stroke: "#333",
      "stroke-width": 3
    });
  }

  _ref1 = document.querySelectorAll('.frame > svg');
  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
    $paper = _ref1[_j];
    $paper.setAttribute("preserveAspectRatio", "none");
  }

}).call(this);
