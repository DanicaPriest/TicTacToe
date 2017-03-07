var freeSpaces = 9;
var gameNum = 0;
var player1Score = 0;
var player2Score = 0;
var player1Arr =[];
var player2Arr =[];
var twoPlayer = false;
var onePlayer = false;
var player1Cross = false;
var player1Turn = true;
var xName = "Left Shark";
var oName = "Lumpy Space Princess";
var player1Name = oName;
var player2Name = xName;
var easyGame = false;
var mediumGame = false;
var hardGame = false;
var spaces = ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9'];
var hS;
var cross = "http://i.imgur.com/rMsGafK.gif";
var naught = "https://media.giphy.com/media/eQc0a2uGQhhw4/giphy.gif";

/* settings modals jquery*/

 $(document).ready(function(){
      var boolArr = [true, false];  
   var ranNum = Math.floor(Math.random() * 2);
  player1Turn = boolArr[ranNum]; $("#playerOptions").modal({backdrop: "static"});
   
    });

$("#twoPlayer").click(function(){
 twoPlayer = true;
 onePlayer = false; $("#playerNames").modal({backdrop:"static"});
});
$("#onePlayer").click(function(){
 onePlayer = true;
  twoPlayer= false;
  $("#playerName").modal({backdrop:"static"});
});
$("#back1").click(function(){
  $("#playerOptions").modal({backdrop: "static"});
});
$("#back2").click(function(){
  $("#playerOptions").modal({backdrop: "static"});
});
$("#next1").click(function(){
  if("cross" == $("input[name=xos]:checked").val()){
    player1Cross = true;
    player1Name = xName;
    player2Name = oName;
  }
  else{
    player1Cross = false;
    player1Name = xName;
    player2Name = oName;
  }
 
  
  $("#xSelection").modal({backdrop: "static"});
});
$("#next2").click(function(){
  
   if("crosses" == $("input[name=xos1]:checked").val()){
    player1Cross = true;
  player1Name = xName;
    
  
  
   $("#xSelection").modal({backdrop:"static"})
  $("#oTitle").html("Pick Computer O:");
    $("#xTitle").html("Pick Your X:")
    
  }
  else{
    player1Cross = false;
    player1Name = xName;
    $("#xSelection").modal({backdrop:"static"});
       $("#xTitle").html("Pick Computer X:");
       $("#oTitle").html("Pick Your O:")
       
  
  }
});
$("#easy").click(function(){
  easyGame= true;
  hardGame = false;
  mediumGame = false;
  $("#playerName button").css("border", "2px outset rgba(225, 225, 225, 0.5)")
  $("#easy").css("border", "3px solid black")
});
$("#medium").click(function(){
  mediumGame = true;
  hardGame = false;
  easyGame = false;
  $("#playerName button").css("border", "2px outset rgba(225, 225, 225, 0.5)")
  $("#medium").css("border", "3px solid black")
});
$("#hard").click(function(){
  hardGame = true;
  easyGame = false;
  mediumGame = false;
  $("#playerName button").css("border", "2px outset rgba(225, 225, 225, 0.5)")
  $("#hard").css("border", "3px solid black")
})
$("#leftShark").click(function(){  xName = "Left Shark";
$("#xSelection img").css("border", "none"); document.body.style.setProperty("--cross-image", "url(https://media.giphy.com/media/3o85xBH1NjrRfa8kPm/giphy.gif)"); $("#leftShark").css("border","2px solid black")
});
$("#plain").click(function(){
 xName = "Team X"; document.body.style.setProperty("--cross-image", "url(http://www.andreaformann.com/images/close.png)");
  $("#xSelection img").css("border", "none")
  $("#plain").css("border","2px solid black")
});
$("#pinkX").click(function(){
 xName = "Cotton Candy"; document.body.style.setProperty("--cross-image", "url(https://media.giphy.com/media/znmIFim3gj45O/giphy.gif)");
  $("#xSelection img").css("border", "none")
  $("#pinkX").css("border","2px solid black")
});
$("#xmen").click(function(){
 xName = "Wolverine"; document.body.style.setProperty("--cross-image", "url(http://orig07.deviantart.net/46ba/f/2015/358/4/5/x_men_s_wolverine__transparent_background__by_camo_flauge-d9lckx0.png)");
  $("#xSelection img").css("border", "none")
  $("#xmen").css("border","2px solid black")
});
$("#wood").click(function(){
 xName = "Wood X"; document.body.style.setProperty("--cross-image", "url(http://3.bp.blogspot.com/-Wg4J4-gniks/Tk__HO6-C-I/AAAAAAAACJo/7iUStni3fFE/s1600/1Capital-Letter-X-Wood.png)");
  $("#xSelection img").css("border", "none")
  $("#wood").css("border","2px solid black")
});
$("#redPaint").click(function(){
 xName = 'Red Paint'; document.body.style.setProperty("--cross-image", "url(http://www.freeiconspng.com/uploads/x-png-18.png)");
  $("#xSelection img").css("border", "none")
  $("#redPaint").css("border","2px solid black")
});
$("#galaxy").click(function(){
 xName = "Flashback X"; document.body.style.setProperty("--cross-image", "url(https://68.media.tumblr.com/2dec4c9d70611c0d2d3de56abfa7825b/tumblr_nr8j1mfFdn1uxtzn8o1_500.gif)");
  $("#xSelection img").css("border", "none")
  $("#galaxy").css("border","2px solid black")
});$("#opal").click(function(){
 xName= 'Opal'; document.body.style.setProperty("--cross-image", "url(https://s-media-cache-ak0.pinimg.com/originals/ca/1c/98/ca1c989c4fc914c9e41b62092cbbab28.gif)");
  $("#xSelection img").css("border", "none")
  $("#opal").css("border","2px solid black")
});$("#tiger").click(function(){
 xName= 'Tiger'; document.body.style.setProperty("--cross-image", "url(http://data.whicdn.com/images/70919111/superthumb.png)");
  $("#xSelection img").css("border", "none")
  $("#tiger").css("border","2px solid black")
});
$("#water").click(function(){
 xName = 'Water'; document.body.style.setProperty("--cross-image", "url(https://redlipslie.files.wordpress.com/2015/09/tumblr_n3n7sgxk1g1r0feozo1_500.gif)");
  $("#xSelection img").css("border", "none")
  $("#water").css("border","2px solid black")
});$("#everything").click(function(){
 xName = 'All the Xs'; document.body.style.setProperty("--cross-image", "url(http://lascuolaopensource.xyz/XYZ/img/x.gif)");
  $("#xSelection img").css("border", "none")
  $("#everything").css("border","2px solid black")
});
$("#lava").click(function(){
 xName = 'Lava Lamp'; document.body.style.setProperty("--cross-image","url(https://s-media-cache-ak0.pinimg.com/originals/a3/36/19/a33619bd93e4d6294ee0b993fc957192.gif)");
  $("#xSelection img").css("border", "none")
  $("#lava").css("border","2px solid black")
})
$("#snow").click(function(){
 xName = 'Guitars'; document.body.style.setProperty("--cross-image", "url(http://www.clker.com/cliparts/B/o/o/9/4/c/fender-cross-hi.png)");
  $("#xSelection img").css("border", "none")
  $("#snow").css("border","2px solid black")
});$("#bmo").click(function(){
 xName = "BMO"; document.body.style.setProperty("--cross-image", "url(http://static.tumblr.com/688c267d7b2064aec09c7a07404abe4e/mxwml2c/3tpn1j5r5/tumblr_static_bmo.gif)");
  $("#xSelection img").css("border", "none")
  $("#bmo").css("border","2px solid black")
});$("#flowers").click(function(){
 xName= 'Flowers'; document.body.style.setProperty("--cross-image", "url(http://static.tumblr.com/9d24fab2d935c253b2685b7a2845c27d/wwt9wry/ZOwneunj9/tumblr_static_ek7c3gxhxx4wokkgskwgcoc0s.gif)");
  $("#xSelection img").css("border", "none")
  $("#flowers").css("border","2px solid black")
});
$("#sword").click(function(){
 xName = 'Swords'; document.body.style.setProperty("--cross-image", "url(http://www.clker.com/cliparts/J/R/z/Y/h/6/cross-swords-hi.png)")
  $("#xSelection img").css("border", "none")
  $("#sword").css("border","2px solid black")
});
$("#flash").click(function(){
 xName ='Disco X'; document.body.style.setProperty("--cross-image", "url(http://www.walkaboutcrafts.com/freegifts/alphabetimages/x.gif)")
  $("#xSelection img").css("border", "none")
  $("#flash").css("border","2px solid black")
});$("#gold").click(function(){
 xName = 'Gold'; document.body.style.setProperty("--cross-image", "url(http://etc.usf.edu/presentations/extras/letters/theme_alphabets/20/34/x-400.png)")
  $("#xSelection img").css("border", "none")
  $("#gold").css("border","2px solid black")
});$("#candy").click(function(){xName = 'Smiles';
  document.body.style.setProperty("--cross-image", "url(http://www.gifmania.co.uk/Animated-Letters-Animated-Gifs/Animated-Emoticons-Letters/Alphabet-Colorful-Emoticons/colorful-emoticon-x-capital-letter-18124.gif)")
  $("#xSelection img").css("border", "none")
  $("#candy").css("border","2px solid black")
});$("#fancy").click(function(){
 xName = 'Fancy Pants'; document.body.style.setProperty("--cross-image", "url(http://www.gifmania.co.uk/Animated-Letters-Animated-Gifs/Animated-Gothic-Letters/Decorated-Alphabet/decorated-x-letter-16528.gif)")
  $("#xSelection img").css("border", "none")
  $("#fancy").css("border","2px solid black")
});
$("#paint").click(function(){
 xName = 'Paint Melt'; document.body.style.setProperty("--cross-image", "url(http://handmadefont.com/wp-content/uploads/2015/07/PaintMelt-font-letter-X.png)")
  $("#xSelection img").css("border", "none")
  $("#paint").css("border","2px solid black")
});
$("#lilac").click(function(){
 xName = 'Lilac'; document.body.style.setProperty("--cross-image", "url(http://handmadefont.com/wp-content/uploads/2013/10/Lilac-font-letter-X.png)")
  $("#xSelection img").css("border", "none")
  $("#lilac").css("border","2px solid black")
});
$("#tea").click(function(){
 xName = 'Tea'; document.body.style.setProperty("--cross-image", "url(http://handmadefont.com/wp-content/uploads/2016/05/teacups-font-letter-X.png)")
  $("#xSelection img").css("border", "none")
  $("#tea").css("border","2px solid black")
});
$("#ice").click(function(){
 xName = 'Icicle'; document.body.style.setProperty("--cross-image", "url(https://etc.usf.edu/presentations/extras/letters/theme_alphabets/18/34/X-150.png)")
  $("#xSelection img").css("border", "none")
  $("#ice").css("border","2px solid black")
});
$("#purple").click(function(){
 xName = 'Purple Sky'; document.body.style.setProperty("--cross-image", "url(http://www.odonto.com.br/favicon.ico)")
  $("#xSelection img").css("border", "none")
  $("#purple").css("border","2px solid black")
});
$("#spacex").click(function(){
 xName = 'Space'; document.body.style.setProperty("--cross-image", "url(https://s-media-cache-ak0.pinimg.com/originals/59/e8/6e/59e86e8eaab1281de17175ac74f0d476.png)")
  $("#xSelection img").css("border", "none")
  $("#spacex").css("border","2px solid black")
});
$("#skull").click(function(){
 xName = 'Pirate'; document.body.style.setProperty("--cross-image", "url(https://img.clipartfest.com/2c94891e857be009427d5664e0506dc9_skull-crossbones-clothing-baby-skull-and-crossbones-clipart_400-400.png)")
  $("#xSelection img").css("border", "none")
  $("#skull").css("border","2px solid black")
});
$("#jellyb").click(function(){
 xName = 'Jelly Bean X'; document.body.style.setProperty("--cross-image", "url(http://2.bp.blogspot.com/-5eAMS56EhUE/Tn6aCc8uUyI/AAAAAAAAADc/PX3kvM_J28g/s320/png-JB-Capital-Letter-X.png)")
  $("#xSelection img").css("border", "none")
  $("#jellyb").css("border","2px solid black")
});
$("#back3").click(function(){if(twoPlayer){
  $("#playerNames").modal({backdrop: "static"});}
                             else{
                         $("#playerName").modal({backdrop: "static"});}      
                             
});
$("#next3").click(function(){
  $("#oSelection").modal({backdrop: "static"});
});
$("#lsp").click(function(){
 oName = 'Lumpy Space Princess'; document.body.style.setProperty("--naught-image", "url(https://media.giphy.com/media/P7De1qUo7Z25W/giphy.gif)")
  $("#oSelection img").css("border", "none")
  $("#lsp").css("border","2px solid black")
});
$("#plaino").click(function(){
 oName = 'Team O'; document.body.style.setProperty("--naught-image", "url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/600px-Letter_o.svg.png)")
  $("#oSelection img").css("border", "none")
  $("#plaino").css("border","2px solid black")
});
$("#load").click(function(){
 oName = "Loading"; document.body.style.setProperty("--naught-image", "url(http://www.starship42.com/load.gif)")
  $("#oSelection img").css("border", "none")
  $("#load").css("border","2px solid black")
});
$("#xmas").click(function(){
 oName = 'Candy Cane'; document.body.style.setProperty("--naught-image", "url(http://2.bp.blogspot.com/-oxVtX_ndV_Q/Trli3nSlbKI/AAAAAAAACBw/Bz5rf6FLdik/s1600/CAPITAL-LETTER-O.png)")
  $("#oSelection img").css("border", "none")
  $("#xmas").css("border","2px solid black")
});

$("#blob").click(function(){
 oName = 'Totoro'; document.body.style.setProperty("--naught-image", "url(http://rs1131.pbsrc.com/albums/m560/ieatyouyumm/loversatnight.gif~c200)")
  $("#oSelection img").css("border", "none")
  $("#blob").css("border","2px solid black")
});

$("#rose").click(function(){
 oName = 'Peony'; document.body.style.setProperty("--naught-image", "url(https://4.bp.blogspot.com/-P6SkuiWNn58/V00qW7I5bvI/AAAAAAABfdg/yCe_uz3S65kq0K4MagI4DKe2md1E8M7LACLcB/s200/peony-flower-animation-gif-clr.gif)")
  $("#oSelection img").css("border", "none")
  $("#rose").css("border","2px solid black")
});

$("#lotr").click(function(){
 oName = "The One Ring"; document.body.style.setProperty("--naught-image", "url(http://vignette1.wikia.nocookie.net/lotr/images/1/1d/One_ring_transparent.png/revision/latest?cb=20120830130253)")
  $("#oSelection img").css("border", "none")
  $("#lotr").css("border","2px solid black")
});
$("#orb").click(function(){
 oName = 'Blob'; document.body.style.setProperty("--naught-image", "url(https://d1v8u1ev1s9e4n.cloudfront.net/54e691a15ccacf270e4ae7d0)")
  $("#oSelection img").css("border", "none")
  $("#orb").css("border","2px solid black")
});
$("#donut").click(function(){
 oName = 'Donuts'; document.body.style.setProperty("--naught-image", "url(http://33.media.tumblr.com/007d4c735f373784f1f72084fc8f1d73/tumblr_n085t5GHHj1s6294bo1_400.gif)")
  $("#oSelection img").css("border", "none")
  $("#donut").css("border","2px solid black")
});
$("#record").click(function(){
 oName = 'Record'; document.body.style.setProperty("--naught-image", "url(http://www.50thirdand3rd.com/wp-content/uploads/2014/08/photo.png)")
  $("#oSelection img").css("border", "none")
  $("#record").css("border","2px solid black")
});
$("#woodo").click(function(){
 oName = "Wood O"; document.body.style.setProperty("--naught-image", "url(http://1.bp.blogspot.com/-wQoPsgPVS7U/Tk_8IfV8lpI/AAAAAAAACJE/DryLcVByPTk/s320/1Capital-Letter-O-Wood.png)")
  $("#oSelection img").css("border", "none")
  $("#woodo").css("border","2px solid black")
});
$("#shield").click(function(){
 oName = 'Shield'; document.body.style.setProperty("--naught-image", "url(http://www.freepngimg.com/thumb/shield/20-old-shield-png-image-picture-download-thumb.png)")
  $("#oSelection img").css("border", "none")
  $("#shield").css("border","2px solid black")
});$("#space").click(function(){ oName = 'Gondola'
  document.body.style.setProperty("--naught-image", "url(https://www.cirquedusoleil.com/las-vegas/assets/img/shows/o_logo.png)")
  $("#oSelection img").css("border", "none")
  $("#space").css("border","2px solid black")
});$("#happy").click(function(){oName = 'Sesame Street'
  document.body.style.setProperty("--naught-image", "url(http://www.gifmania.co.uk/Animated-Letters-Animated-Gifs/Animated-Alphabet/Letters-O/o-letter15-27209.gif)")
  $("#oSelection img").css("border", "none")
  $("#happy").css("border","2px solid black")
});$("#stars").click(function(){oName =  'Stars'
  document.body.style.setProperty("--naught-image", "url(http://etc.usf.edu/presentations/extras/letters/theme_alphabets/23/25/O-300.png)")
  $("#oSelection img").css("border", "none")
  $("#stars").css("border","2px solid black")
});$("#glitter").click(function(){ oName = 'Pentagram'
  document.body.style.setProperty("--naught-image", "url(https://68.media.tumblr.com/213d75c22e19a52fd46db4d23b10788f/tumblr_nxysjeiIbZ1ubiseso1_500.gif)")
  $("#oSelection img").css("border", "none")
  $("#glitter").css("border","2px solid black")
});
$("#fall").click(function(){
 oName =  'Fall'; document.body.style.setProperty("--naught-image", "url(http://etc.usf.edu/presentations/extras/letters/theme_alphabets/09/25/O-400.png)")
  $("#oSelection img").css("border", "none")
  $("#fall").css("border","2px solid black")
});
$("#usa").click(function(){
 oName = 'Merica'; document.body.style.setProperty("--naught-image", "url(http://2.bp.blogspot.com/-pw-wogEnbTw/U25btTCea_I/AAAAAAACco0/-exmHgQLX50/s1600/GE-CAPITAL-LETTER-O.png)")
  $("#oSelection img").css("border", "none")
  $("#usa").css("border","2px solid black")
});$("#obama").click(function(){oName = "Obama";
  document.body.style.setProperty("--naught-image", "url(http://vignette2.wikia.nocookie.net/logopedia/images/9/98/Obama_O.png/revision/latest?cb=20100724092050)")
  $("#oSelection img").css("border", "none")
  $("#obama").css("border","2px solid black")
});$("#hands").click(function(){oName = 'Rainbow';
  document.body.style.setProperty("--naught-image", "url(http://www.okclipart.com/img14/gslevdlxnnnbmbjamkgz.png)")
  $("#oSelection img").css("border", "none")
  $("#hands").css("border","2px solid black")
});
$("#roses").click(function(){oName = 'Roses';
  document.body.style.setProperty("--naught-image", "url(http://3.bp.blogspot.com/-8lS1YthduYw/TntZGFaZccI/AAAAAAAADqk/nSlrMJDpRx4/s1600/CAPITAL-LETTER-O.png)")
  $("#oSelection img").css("border", "none")
  $("#roses").css("border","2px solid black")
});
$("#jelly").click(function(){oName = 'Jelly Bean';
  document.body.style.setProperty("--naught-image", "url(http://3.bp.blogspot.com/-XElM35ERl-I/Tn6ZupWXEhI/AAAAAAAAAC4/hexEpV2YTvM/s320/png-JB-Capital-Letter-O.png)")
  $("#oSelection img").css("border", "none")
  $("#jelly").css("border","2px solid black")
});
$("#sail").click(function(){oName = 'Lifesaver';
  document.body.style.setProperty("--naught-image", "url(http://images.clipartpanda.com/lifesaver-clipart-lifesaver-clip-art1.png)")
  $("#oSelection img").css("border", "none")
  $("#sail").css("border","2px solid black")
});
$("#lifesaver").click(function(){oName = 'Candy';
  document.body.style.setProperty("--naught-image", "url(http://www.life-savers.com/www/img/bg_objects/hard_candies_right_small.png)")
  $("#oSelection img").css("border", "none")
  $("#lifesaver").css("border","2px solid black")
});
$("#pepper").click(function(){
 oName = 'Pepper'; document.body.style.setProperty("--naught-image", "url(http://handmadefont.com/wp-content/uploads/2014/06/redpaprika-font-letter-O-200x200.png)")
  $("#oSelection img").css("border", "none")
  $("#pepper").css("border","2px solid black")
});
$("#bagel").click(function(){
 oName = 'Bagel'; document.body.style.setProperty("--naught-image", "url(http://icongal.com/gallery/image/18621/donut.png)")
  $("#oSelection img").css("border", "none")
  $("#bagel").css("border","2px solid black")
});
$("#eye").click(function(){
 oName = 'Eye'; document.body.style.setProperty("--naught-image", "url(http://img14.deviantart.net/a1e5/i/2015/109/e/3/blue_eye3_saved_as_png_to_preserve_transparency_by_shadowprince14-d8qbhft.png)")
  $("#oSelection img").css("border", "none")
  $("#eye").css("border","2px solid black")
});
$("#onion").click(function(){
 oName = 'Onion'; document.body.style.setProperty("--naught-image", "url(http://handmadefont.com/wp-content/uploads/2013/09/Onions-font-letter-O.png)")
  $("#oSelection img").css("border", "none")
  $("#onion").css("border","2px solid black")
});
$("#back4").click(function(){
                  $("#xSelection").modal({backdrop: "static"})
                  })
$("#twoPlayerStart").click(function(){
  if (onePlayer){
    if($("#oneplayername").val()== ""){if (player1Cross){player1Name = xName;}else{
 player1Name = oName}}
                                       else{player1Name = $("#oneplayername").val();}
  player2Name = "Computer";
    $("#player1Score").html( player1Name + ": " + player1Score);
  $("#player2Score").html( player2Name + ": " + player2Score);}
  
    else{
   if($("#player1name").val()== ""){if (player1Cross){player1Name = xName;}else{
 player1Name = oName;}}else{player1Name =  $("#player1name").val();}
  if($("#player2name").val()== ""){if (player1Cross){player2Name = oName;}else{
 player2Name = xName;}}else{player2Name = $("#player2name").val();}
    $("#player1Score").html( player1Name + ": " + player1Score);
  $("#player2Score").html( player2Name + ": " + player2Score);}
    if (player1Turn){
  $("#playerTurn").html( player1Name +"'s Turn")
}
  else{
  $("#playerTurn").html( player2Name +"'s Turn");
    if(onePlayer){
      if(easyGame){easyComputer()}
      else if (mediumGame){mediumComputer()}
      else{hardComputer()}
  }}
                      })
 $("#restart").click(function(){
      $("#xTitle").html("Pick Your X:");
   $("#oTitle").html("Pick Your O:");
   $("#playerOptions").modal({backdrop: "static"});
   gameOver();
   gameNum= 0;
   player1Score = 0;
   player2Score = 0;
   document.getElementById("gameNum").innerHTML = "Games Played: " + gameNum;
   $("#xSelection img").css("border", "none");
   
 });
function win(arr){
  
  var matches = [/[1-3]/g, /[4-6]/g, /[7-9]/g,/[147]/g, /[258]/g,/[369]/g, /[159]/g, /[357]/g] ;
  var arr2 = arr.join(" ")
  for (var i=0; i< matches.length;i++ ){if (arr2.match(matches[i]) !== null && arr2.match(matches[i]).length ==3){
         
      return true;}}
  
      
      return false}
         

 
function gameOver(){
  freeSpaces = 9;
  gameNum++
  player1Arr = [];
  player2Arr = [];
   var x = document.getElementsByTagName("td");
var i;
for (i = 0; i < x.length; i++) {
    x[i].classList.remove("naught", "cross");
  
}
 document.getElementById("gameNum").innerHTML = "Games Played: " + gameNum;
  document.getElementById("player1Score").innerHTML = player1Name + ": " + player1Score;
  document.getElementById("player2Score").innerHTML = player2Name + ": " + player2Score;
  if(onePlayer && !player1Turn){
    if (easyGame){
    easyComputer()}
    else if (mediumGame){mediumComputer()}
    else{hardComputer()}
  }
};

function makeMove (val){
  
 if ("cross" == document.getElementById(val).className || "naught" == document.getElementById(val).className ){}else{
  if (player1Turn){
    if (player1Cross){
      document.getElementById(val).className ="cross"
      freeSpaces--;
      document.getElementById("playerTurn").innerHTML= player2Name +"'s Turn"
      player1Turn = false;
      player1Arr.push(val);
      
    }
    else {
      document.getElementById(val).className ="naught"
      freeSpaces--;
      document.getElementById("playerTurn").innerHTML= player2Name +"'s Turn";
      player1Turn = false;
      player1Arr.push(val); 
    }
  }
  else{
    if (player1Cross){document.getElementById(val).className ="naught";
               freeSpaces--;
         document.getElementById("playerTurn").innerHTML= player1Name +"'s Turn";
                player1Turn = true;      player2Arr.push(val);
                      
                  } else{
      document.getElementById(val).className ="cross";
      freeSpaces--;                       document.getElementById("playerTurn").innerHTML= player1Name +"'s Turn";
             player1Turn = true;       player2Arr.push(val);       
    }
  }}
  
  if (win(player1Arr)){
    $("#winTitle").html(player1Name + " Won!")
     $("#winPic").css('background-image', 'url(https://az616578.vo.msecnd.net/files/2015/06/27/635710393452911256-1033540640_200.gif)');
             $("#winModal").modal({backdrop: true});
    player1Score++
    player1Turn = false;
    gameOver()
  }
   else if (win(player2Arr)){
    $("#winTitle").html(player2Name + " Won!")
     $("#winPic").css('background-image', 'url(https://media2.giphy.com/media/l3q2R3KZC4G5j658s/200.gif)');
             $("#winModal").modal({backdrop: true});
    player2Score++
     player1Turn = true
    gameOver();
  }
  
  else if (freeSpaces == 0){
    $("#winTitle").html("It's a Tie")
     $("#winPic").css('background-image', 'url(http://media1.giphy.com/media/T7886I9hxE2RO/giphy.gif)');
             $("#winModal").modal({backdrop: true});
    gameOver()
  }
  else{
   if(onePlayer && !player1Turn){
     if(easyGame){
        easyComputer()}
     else if (mediumGame)
     {mediumComputer()} else{hardComputer()}
      }}
}
function easyComputer(){
  var played = player1Arr.concat(player2Arr);
  var free = [];
 for (var i = 0; i < spaces.length; i++) if(played.indexOf(spaces[i]) == -1){free.push(spaces[i])}
  var num= Math.floor(Math.random() * free.length);
  var rS = free[num];
  makeMove(rS)
  
}
function findWin (val){
  var free = [];
  var played = player1Arr.concat(player2Arr);
 for (var i = 0; i < spaces.length; i++) {if(played.indexOf(spaces[i]) == -1){free.push(spaces[i])}}
  console.log(free)
  for (var l = 0; l<free.length; l++){
   player2Arr.push(free[l])
    player1Arr.push(free[l])
    if (win(player2Arr)){
      val = free[l];
      player1Arr.pop(free[l])
      player2Arr.pop(free[l])
      return val
    }
   else if(win(player1Arr)){
     val = free[l];
      player1Arr.pop(free[l])
     player2Arr.pop(free[l])
   }
    else{
     player1Arr.pop(free[l])
       player2Arr.pop(free[l])
    }
      
  }
  
  return val
}
function hardComputer(){
  var played = player1Arr.concat(player2Arr);
  var corners = ['g1', 'g3', 'g7', 'g9'];
  var free = [];
 for (var i = 0; i < spaces.length; i++) {if(played.indexOf(spaces[i]) == -1){free.push(spaces[i])}}
  var freeCorners = [];
 for (var j = 0; j < corners.length; j++) if(played.indexOf(corners[j]) == -1){freeCorners.push(corners[j])}
  var hS = free[0];
  var center = false;
  for (var k = 0; k < player1Arr.length; k++){
      if (corners.indexOf(player1Arr[k])!== -1){center = true}}
  if (freeSpaces == 9){
   hS = corners[0]
  }
  else if (freeSpaces == 8){
 
    if (center){
      hS = 'g5'
    }
    else{
      hS = freeCorners[0]
    }
    
  }
  else if (freeSpaces == 7){
     hS = findWin(hS)
    if (player1Arr.indexOf('g5') !== -1 ){hS = 'g9'; }else if (player1Arr.indexOf('g4') !== -1 || player1Arr.indexOf('g7') !== -1){hS = 'g3'}else {hS = 'g7'}
  }
    else if (freeSpaces == 6){
       hS = findWin(hS)
      if (player1Arr.indexOf('g9') !== -1 && player1Arr.indexOf('g1') !== -1 || player1Arr.indexOf('g3') !== -1 && player1Arr.indexOf('g7') !== -1){ hS = 'g2'}
      else{
        hS = findWin(hS)
      }
    }
  else if (freeSpaces == 5){
    hS = findWin(hS)
    if
     (player1Arr.indexOf('g5') !== -1) { if ( player1Arr.indexOf('g3') !== -1 ){
        hS = 'g7'
      }
     else if (player1Arr.indexOf('g7') !== -1)     { hS = 'g3'}   }   
    else if
      (player1Arr.indexOf('g4') == -1 && player2Arr.indexOf('g7')){hS = 'g4'}
     
else if (player1Arr.indexOf('g2') !== -1 || player1Arr.indexOf('g3') !== -1 || player1Arr.indexOf('g6') !== -1){ hS = 'g9'}                                  
    else {
      hS = 'g3'
    }
    }
    else{
    hS = findWin(hS)
 
  }
      
    makeMove(hS)
  }
function mediumComputer(){
 var played = player2Arr.concat(player1Arr);
  var free = [];
 for (var i = 0; i < spaces.length; i++){ if(played.indexOf(spaces[i]) == -1){free.push(spaces[i])}}
  var wS = free[0];
  for (var j = 0; j<free.length; j++){
   player2Arr.push(free[j])
    player1Arr.push(free[j])
    if (win(player2Arr)){
      wS = free[j];
    }
   else if(win(player1Arr)){
     wS = free[j];
     
   }
    
   
     player1Arr.pop(free[j])
     player2Arr.pop(free[j])
   
  }
  
  makeMove(wS);
}