let img

function setup() {
  createCanvas(1000, 1000, WEBGL);
  img = loadImage('cutout_selfie.jpg');
}

function draw() {
  background(220);

  /*
    //import image for tracing
    push();
    translate(-500, -500, 0);
    image(img, 0, 0);
    pop();
  */

  //hair_highlight
  push();
  translate(-width / 2, -height / 2, 0);
  fill('rgba(122,91,78,1)');
  noStroke();
  beginShape();
  curveVertex(255, 519);
  curveVertex(224, 543);
  curveVertex(235, 513);
  curveVertex(213, 514);
  curveVertex(224, 500);
  curveVertex(204, 501);
  curveVertex(221, 481);
  curveVertex(211, 485);
  curveVertex(224, 452);
  curveVertex(197, 473);
  curveVertex(213, 441);
  curveVertex(198, 444);
  curveVertex(213, 424);
  curveVertex(190, 425);
  curveVertex(207, 401);
  curveVertex(191, 401);
  curveVertex(204, 370);
  curveVertex(181, 388);
  curveVertex(167, 361);
  curveVertex(183, 352);
  curveVertex(203, 342);
  curveVertex(212, 310);
  curveVertex(219, 251);
  curveVertex(243, 192);
  curveVertex(272, 148);
  curveVertex(301, 112);
  curveVertex(340, 79);
  curveVertex(386, 51);
  curveVertex(449, 24);
  curveVertex(497, 24);
  curveVertex(553, 29);
  curveVertex(611, 59);
  curveVertex(647, 87);
  curveVertex(686, 122);
  curveVertex(731, 188);
  curveVertex(758, 250);
  curveVertex(779, 298);
  curveVertex(784, 362);
  curveVertex(782, 422);
  curveVertex(786, 461);
  curveVertex(773, 464);
  curveVertex(777, 485);
  curveVertex(794, 519);
  curveVertex(767, 510);
  curveVertex(780, 538);
  curveVertex(757, 528);
  curveVertex(768, 554);
  curveVertex(734, 534);
  curveVertex(724, 578);
  curveVertex(714, 607);
  curveVertex(697, 644);
  curveVertex(684, 672);
  curveVertex(651, 683);
  curveVertex(318, 677);
  curveVertex(283, 572);
  curveVertex(286, 528);
  endShape(CLOSE);
  pop();



  //neck
  push();
  translate(-width / 2, -height / 2, 0);
  fill('rgba(189,145,121, 1)');
  noStroke();
  beginShape();
  curveVertex(502, 973);
  curveVertex(654, 911);
  curveVertex(733, 776);
  curveVertex(675, 698);
  curveVertex(635, 667);
  curveVertex(635, 594);
  curveVertex(352, 580);
  curveVertex(352, 652);
  curveVertex(291, 678);
  curveVertex(235, 742);
  curveVertex(296, 838);
  curveVertex(376, 931);
  curveVertex(494, 992);
  endShape(CLOSE);
  pop();


  //head blockout
  push();
  translate(-width / 2, -height / 2, 0);
  fill('rgba(189,145,121, 1)');
  noStroke();
  beginShape();
  curveVertex(348, 593);
  curveVertex(323, 548);
  curveVertex(300, 433);
  curveVertex(302, 335);
  curveVertex(366, 286);
  curveVertex(446, 213);
  curveVertex(532, 171);
  curveVertex(635, 140);
  curveVertex(671, 236);
  curveVertex(679, 334);
  curveVertex(704, 433);
  curveVertex(694, 541);
  curveVertex(661, 620);
  curveVertex(331, 609);
  curveVertex(328, 545);
  endShape(CLOSE);
  pop();

  //shading1
  push();
  translate(-width / 2, -height / 2, 0);
  fill('rgba(141,102,80, 1)');
  noStroke();
  beginShape();
  curveVertex(308, 694);
  curveVertex(312, 715);
  curveVertex(331, 740);
  curveVertex(348, 769);
  curveVertex(371, 790);
  curveVertex(397, 815);
  curveVertex(427, 834);
  curveVertex(453, 850);
  curveVertex(443, 874);
  curveVertex(473, 901);
  curveVertex(511, 911);
  curveVertex(540, 911);
  curveVertex(540, 943);
  curveVertex(453, 964);
  curveVertex(284, 807);
  curveVertex(281, 674);
  curveVertex(306, 674);
  endShape(CLOSE);
  pop();

  //shading2
  push();
  translate(-width / 2, -height / 2, 0);
  fill('rgba(141,102,80, 1)');
  noStroke();
  beginShape();
  curveVertex(484, 704);
  curveVertex(311, 428);
  curveVertex(318, 401);
  curveVertex(332, 378);
  curveVertex(353, 367);
  curveVertex(376, 357);
  curveVertex(383, 369);
  curveVertex(379, 379);
  curveVertex(403, 382);
  curveVertex(426, 382);
  curveVertex(443, 363);
  curveVertex(463, 344);
  curveVertex(470, 324);
  curveVertex(481, 324);
  curveVertex(483, 340);
  curveVertex(486, 360);
  curveVertex(486, 376);
  curveVertex(492, 406);
  curveVertex(497, 428);
  curveVertex(493, 446);
  curveVertex(474, 452);
  curveVertex(456, 455);
  curveVertex(443, 476);
  curveVertex(449, 489);
  curveVertex(476, 489);
  curveVertex(483, 511);
  curveVertex(483, 532);
  curveVertex(465, 535);
  curveVertex(435, 535);
  curveVertex(411, 528);
  curveVertex(398, 543);
  curveVertex(401, 558);
  curveVertex(452, 580);
  curveVertex(474, 576);
  curveVertex(501, 579);
  curveVertex(503, 587);
  curveVertex(484, 595);
  curveVertex(480, 610);
  curveVertex(482, 631);
  curveVertex(515, 646);
  curveVertex(515, 655);
  curveVertex(490, 659);
  curveVertex(478, 672);
  curveVertex(457, 672);
  curveVertex(423, 669);
  curveVertex(376, 622);
  curveVertex(376, 628);
  curveVertex(420, 675);
  curveVertex(438, 684);
  curveVertex(463, 698);
  curveVertex(484, 705);
  curveVertex(485, 730);
  curveVertex(475, 748);
  curveVertex(475, 778);
  curveVertex(494, 787);
  curveVertex(513, 793);
  curveVertex(526, 798);
  curveVertex(538, 797);
  curveVertex(541, 813);
  curveVertex(545, 829);
  curveVertex(551, 842);
  curveVertex(570, 849);
  curveVertex(588, 860);
  curveVertex(599, 873);
  curveVertex(625, 858);
  curveVertex(644, 834);
  curveVertex(658, 811);
  curveVertex(671, 787);
  curveVertex(681, 743);
  curveVertex(681, 719);
  curveVertex(671, 693);
  curveVertex(644, 670);
  curveVertex(641, 620);
  curveVertex(665, 570);
  curveVertex(690, 497);
  curveVertex(683, 357);
  curveVertex(657, 274);
  curveVertex(648, 182);
  curveVertex(641, 153);
  curveVertex(582, 150);
  curveVertex(534, 183);
  curveVertex(506, 223);
  curveVertex(457, 243);
  curveVertex(422, 271);
  curveVertex(379, 301);
  curveVertex(336, 331);
  curveVertex(311, 361);
  curveVertex(311, 420);
  curveVertex(313, 431);
  endShape(CLOSE);
  pop();

  //shirt1
  push();
  translate(-width / 2, -height / 2, 0);
  fill(44);
  noStroke();
  beginShape();
  vertex(3, 799);
  vertex(86, 762);
  vertex(139, 741);
  vertex(192, 724);
  vertex(243, 696);
  vertex(304, 671);
  vertex(304, 726);
  vertex(324, 760);
  vertex(346, 793);
  vertex(361, 821);
  vertex(381, 851);
  vertex(425, 884);
  vertex(470, 918);
  vertex(496, 932);
  vertex(504, 1000);
  vertex(2, 997);
  vertex(3, 797);
  endShape(CLOSE);
  pop();

  //shirt2
  push();
  translate(-width / 2, -height / 2, 0);
  fill(44);
  noStroke();
  beginShape();
  curveVertex(489, 934);
  curveVertex(526, 920);
  curveVertex(562, 902);
  curveVertex(604, 878);
  curveVertex(637, 844);
  curveVertex(659, 795);
  curveVertex(676, 741);
  curveVertex(676, 695);
  curveVertex(795, 764);
  curveVertex(878, 810);
  curveVertex(946, 852);
  curveVertex(988, 919);
  curveVertex(999, 940);
  curveVertex(997, 993);
  curveVertex(485, 996);
  curveVertex(485, 926);
  curveVertex(506, 932);
  endShape(CLOSE);
  pop();

  //hair 
  push();
  translate(-width / 2, -height / 2, 0);
  fill('rgba(43,43,45, 1)');
  noStroke();
  beginShape();
  curveVertex(358, 672);
  curveVertex(304, 678);
  curveVertex(283, 640);
  curveVertex(280, 592);
  curveVertex(277, 558);
  curveVertex(259, 544);
  curveVertex(259, 537);
  curveVertex(251, 528);
  curveVertex(227, 544);
  curveVertex(238, 518);
  curveVertex(227, 525);
  curveVertex(228, 508);
  curveVertex(215, 520);
  curveVertex(227, 489);
  curveVertex(212, 504);
  curveVertex(232, 459);
  curveVertex(214, 468);
  curveVertex(238, 428);
  curveVertex(216, 419);
  curveVertex(231, 408);
  curveVertex(216, 407);
  curveVertex(235, 388);
  curveVertex(231, 359);
  curveVertex(221, 368);
  curveVertex(221, 348);
  curveVertex(223, 318);
  curveVertex(230, 281);
  curveVertex(238, 248);
  curveVertex(253, 224);
  curveVertex(258, 244);
  curveVertex(268, 211);
  curveVertex(279, 211);
  curveVertex(287, 166);
  curveVertex(296, 157);
  curveVertex(300, 143);
  curveVertex(316, 133);
  curveVertex(328, 117);
  curveVertex(341, 116);
  curveVertex(359, 89);
  curveVertex(381, 78);
  curveVertex(385, 85);
  curveVertex(422, 58);
  curveVertex(443, 53);
  curveVertex(450, 59);
  curveVertex(479, 49);
  curveVertex(524, 49);
  curveVertex(525, 62);
  curveVertex(537, 58);
  curveVertex(538, 72);
  curveVertex(550, 66);
  curveVertex(552, 75);
  curveVertex(566, 75);
  curveVertex(568, 82);
  curveVertex(585, 91);
  curveVertex(613, 101);
  curveVertex(642, 113);
  curveVertex(656, 118);
  curveVertex(638, 96);
  curveVertex(665, 106);
  curveVertex(678, 131);
  curveVertex(688, 144);
  curveVertex(703, 163);
  curveVertex(710, 183);
  curveVertex(720, 204);
  curveVertex(736, 229);
  curveVertex(751, 261);
  curveVertex(762, 293);
  curveVertex(767, 321);
  curveVertex(776, 361);
  curveVertex(774, 387);
  curveVertex(770, 417);
  curveVertex(770, 438);
  curveVertex(766, 471);
  curveVertex(775, 502);
  curveVertex(767, 501);
  curveVertex(773, 514);
  curveVertex(764, 513);
  curveVertex(764, 535);
  curveVertex(737, 517);
  curveVertex(732, 551);
  curveVertex(719, 576);
  curveVertex(706, 608);
  curveVertex(696, 629);
  curveVertex(668, 664);
  curveVertex(642, 677);
  curveVertex(634, 671);
  curveVertex(637, 614);
  curveVertex(662, 560);
  curveVertex(674, 525);
  curveVertex(678, 495);
  curveVertex(680, 470);
  curveVertex(676, 424);
  curveVertex(668, 390);
  curveVertex(658, 350);
  curveVertex(647, 305);
  curveVertex(642, 273);
  curveVertex(638, 244);
  curveVertex(638, 213);
  curveVertex(629, 184);
  curveVertex(629, 168);
  curveVertex(610, 166);
  curveVertex(584, 171);
  curveVertex(567, 178);
  curveVertex(556, 183);
  curveVertex(557, 200);
  curveVertex(533, 219);
  curveVertex(509, 236);
  curveVertex(489, 245);
  curveVertex(459, 261);
  curveVertex(444, 270);
  curveVertex(429, 284);
  curveVertex(408, 295);
  curveVertex(372, 315);
  curveVertex(347, 337);
  curveVertex(337, 354);
  curveVertex(325, 358);
  curveVertex(315, 407);
  curveVertex(315, 447);
  curveVertex(318, 484);
  curveVertex(318, 507);
  curveVertex(326, 538);
  curveVertex(338, 571);
  curveVertex(351, 597);
  curveVertex(353, 623);
  curveVertex(353, 653);
  curveVertex(352, 670);
  curveVertex(311, 674);
  endShape(CLOSE);
  pop();

  //eyebrow
  push();
  translate(-width / 2, -height / 2, 0);
  fill('rgba(64,52,50,1)');
  noStroke();
  beginShape();
  curveVertex(549, 287);
  curveVertex(559, 277);
  curveVertex(590, 274);
  curveVertex(606, 273);
  curveVertex(622, 261);
  curveVertex(630, 275);
  curveVertex(633, 295);
  curveVertex(619, 287);
  curveVertex(611, 287);
  curveVertex(616, 297);
  curveVertex(590, 291);
  curveVertex(576, 295);
  curveVertex(548, 286);
  curveVertex(554, 273);
  curveVertex(580, 273);
  endShape(CLOSE);
  pop();

  //eye1
  push();
  translate(-width / 2, -height / 2, 0);
  fill('rgba(55,46,45,1)');
  noStroke();
  beginShape();
  curveVertex(361, 344);
  curveVertex(376, 331);
  curveVertex(407, 329);
  curveVertex(428, 338);
  curveVertex(419, 342);
  curveVertex(420, 352);
  curveVertex(400, 357);
  curveVertex(385, 351);
  curveVertex(380, 342);
  curveVertex(362, 346);
  curveVertex(359, 343);
  endShape(CLOSE);
  pop();

  //eye2
  push();
  translate(-width / 2, -height / 2, 0);
  fill('rgba(55,46,45,1)');
  noStroke();
  beginShape();
  curveVertex(553, 346);
  curveVertex(545, 352);
  curveVertex(542, 340);
  curveVertex(559, 331);
  curveVertex(572, 328);
  curveVertex(597, 330);
  curveVertex(613, 336);
  curveVertex(621, 342);
  curveVertex(620, 350);
  curveVertex(611, 343);
  curveVertex(596, 342);
  curveVertex(583, 357);
  curveVertex(568, 350);
  curveVertex(553, 343);
  curveVertex(560, 340);
  endShape(CLOSE);
  pop();

  //head_detail01
  push();
  translate(-width / 2, -height / 2, 0);
  fill('rgba(171,124,105,1)');
  noStroke();
  beginShape();
  curveVertex(560, 401);
  curveVertex(583, 405);
  curveVertex(596, 388);
  curveVertex(616, 387);
  curveVertex(642, 412);
  curveVertex(648, 430);
  curveVertex(643, 449);
  curveVertex(630, 461);
  curveVertex(605, 469);
  curveVertex(585, 455);
  curveVertex(580, 449);
  curveVertex(568, 423);
  curveVertex(555, 403);
  curveVertex(567, 398);
  endShape(CLOSE);
  pop();

  //head_detail02
  push();
  translate(-width / 2, -height / 2, 0);
  fill('rgba(70,48,42,1)');
  noStroke();
  beginShape();
  vertex(504, 476);
  vertex(514, 463);
  vertex(526, 479);
  vertex(507, 481);
  endShape(CLOSE);
  pop();

  //head_detail03
  push();
  translate(-width / 2, -height / 2, 0);
  fill('rgba(171,124,105,1)');
  noStroke();
  beginShape();
  vertex(511, 265);
  vertex(525, 261);
  vertex(523, 279);
  endShape(CLOSE);
  pop();

  //head_detail04
  push();
  translate(-width / 2, -height / 2, 0);
  fill('rgba(162,113,98,1)');
  noStroke();
  beginShape();
  curveVertex(415, 428);
  curveVertex(421, 446);
  curveVertex(424, 466);
  curveVertex(397, 475);
  curveVertex(400, 456);
  curveVertex(386, 460);
  curveVertex(408, 430);
  curveVertex(410, 424);
  endShape(CLOSE);
  pop();

  //mouth01
  push();
  translate(-width / 2, -height / 2, 0);
  fill('rgba(57,40,37,1)');
  noStroke();
  beginShape();
  vertex(415, 553);
  vertex(421, 546);
  vertex(451, 570);
  vertex(433, 566);
  endShape(CLOSE);
  pop();

  //mouth02
  push();
  translate(-width / 2, -height / 2, 0);
  fill('rgba(57,40,37,1)');
  noStroke();
  beginShape();
  vertex(553, 540);
  vertex(552, 553);
  vertex(555, 564);
  vertex(576, 549);
  vertex(576, 537);
  endShape(CLOSE);
  pop();

  //mouth03
  push();
  translate(-width / 2, -height / 2, 0);
  fill('rgba(179,160,147,1)');
  noStroke();
  beginShape();

  vertex(451, 550);
  vertex(483, 550);
  vertex(500, 564);
  vertex(489, 573);
  vertex(464, 570);
  endShape(CLOSE);
  pop();

  //mouth04
  push();
  translate(-width / 2, -height / 2, 0);
  fill('rgba(179,160,147,1)');
  noStroke();
  beginShape();
  vertex(501, 560);
  vertex(510, 550);
  vertex(524, 554);
  vertex(518, 570);
  endShape(CLOSE);
  pop();


  //shirt_highlight
  push();
  translate(-width / 2, -height / 2, 0);
  fill(77);
  noStroke();
  beginShape();
  curveVertex(2, 795);
  curveVertex(26, 784);
  curveVertex(56, 774);
  curveVertex(90, 762);
  curveVertex(118, 751);
  curveVertex(141, 740);
  curveVertex(172, 725);
  curveVertex(198, 716);
  curveVertex(239, 700);
  curveVertex(265, 683);
  curveVertex(283, 678);
  curveVertex(308, 669);
  curveVertex(301, 691);
  curveVertex(296, 711);
  curveVertex(284, 708);
  curveVertex(283, 689);
  curveVertex(274, 700);
  curveVertex(273, 714);
  curveVertex(259, 734);
  curveVertex(248, 720);
  curveVertex(248, 711);
  curveVertex(241, 723);
  curveVertex(228, 716);
  curveVertex(214, 733);
  curveVertex(199, 747);
  curveVertex(183, 747);
  curveVertex(167, 747);
  curveVertex(134, 755);
  curveVertex(107, 768);
  curveVertex(80, 779);
  curveVertex(76, 787);
  curveVertex(62, 788);
  curveVertex(76, 806);
  curveVertex(64, 806);
  curveVertex(49, 806);
  curveVertex(35, 811);
  curveVertex(25, 824);
  curveVertex(18, 819);
  curveVertex(3, 823);
  curveVertex(3, 810);
  curveVertex(5, 799);
  endShape(CLOSE);
  pop();

  //shirt_highlight02
  push();
  translate(-width / 2, -height / 2, 0);
  fill(77);
  noStroke();
  beginShape();
  curveVertex(675, 702);
  curveVertex(684, 725);
  curveVertex(685, 709);
  curveVertex(709, 727);
  curveVertex(710, 721);
  curveVertex(749, 750);
  curveVertex(770, 756);
  curveVertex(783, 777);
  curveVertex(797, 774);
  curveVertex(807, 796);
  curveVertex(831, 796);
  curveVertex(831, 814);
  curveVertex(860, 814);
  curveVertex(882, 828);
  curveVertex(893, 844);
  curveVertex(904, 861);
  curveVertex(920, 862);
  curveVertex(919, 873);
  curveVertex(928, 877);
  curveVertex(905, 886);
  curveVertex(941, 894);
  curveVertex(947, 884);
  curveVertex(957, 900);
  curveVertex(957, 930);
  curveVertex(943, 940);
  curveVertex(955, 950);
  curveVertex(952, 980);
  curveVertex(964, 956);
  curveVertex(975, 981);
  curveVertex(982, 994);
  curveVertex(1002, 994);
  curveVertex(1003, 947);
  curveVertex(966, 877);
  curveVertex(937, 843);
  curveVertex(895, 820);
  curveVertex(861, 801);
  curveVertex(834, 787);
  curveVertex(800, 772);
  curveVertex(769, 751);
  curveVertex(747, 739);
  curveVertex(705, 714);
  curveVertex(683, 704);
  curveVertex(656, 688);
  endShape(CLOSE);
  pop();


  //3d decor

  //pivot cube
  translate(0, 100, 0);
  rotateY(frameCount * -0.01);
  noFill();
  noStroke();
  box(50);
  stroke(255);
  strokeWeight(.5);

  //red sphere
  push();
  translate(180, -360, 315);
  rotateX(frameCount * -0.05);
  rotateY(frameCount * -0.05);
  fill('rgba(255,0,0,.5)')
  sphere(40);
  pop();

  //blue cube
  push();
  translate(180, -360, -315);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  fill('rgba(0,0,255,.5)')
  box(50);
  pop();

  //green cone
  push();
  translate(-360, -360, 0);
  rotateX(frameCount * -0.05);
  rotateY(frameCount * -0.05);
  fill('rgba(0,255,0,.5)')
  cone(40, 70);
  pop();

  //magenta
  push();
  translate(-180, -360, -315);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  fill('rgba(255,0,255,.5)')
  cylinder(20, 50);
  pop();

  //teal plane
  push();
  translate(-180, -360, 315);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  fill('rgba(0,255,255,.5)')
  plane(50, 50);
  pop();

  //yellow donut
  push();
  translate(360, -360, 0);
  rotateX(frameCount * -0.05);
  rotateY(frameCount * -0.05);
  fill('rgba(255,255,0,.5)')
  torus(30, 15);
  pop();
}

//get curve vertex locations
function mousePressed() {
  console.log('curveVertex(' + mouseX + ',' + mouseY + ');');

  //get vertex locations
  //function mousePressed() {
  //console.log('vertex(' + mouseX + ',' + mouseY + ');');
}