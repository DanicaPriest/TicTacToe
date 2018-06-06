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
var cross = "https://lh3.googleusercontent.com/igBfRlekYUkB0-Dul9BLTCYWbOrcV_SndMQFNdI3OAFQkLxp-UlFaDT1_VFJmhlMiZ9Y6oweT3X_4J8aoRVx4BqZ74B5J6A9tbcCEEIFpCHJYm5CaKio84142Ac6SC6fKOZU7o80uqgstHEGXqbR46OTyJhbzz8LAZIbt-roZ5sa6zLi3UTPXu1Li6A_lLEN8AmtILn5qyhOeIqA3KAJwI5lKW2xJWa7-36Yuj17QBb2f6ZlRJ0VWSA9H7AUf25b6zWGP-1pnlIffVKhasV73t2ZGjiPsZc6xOitcWcs1hGNgZEXRxtshLDD2MSj4z72Q6RPiWY-I_EAH93GbUfDtKdd_f4vDtwNsAl5m828dnSuqOYpwNnGS8eVEtRrKGMylI5V0Zd_eafjkhmY5bMVU0MM58eJHyoy2xaoAlSegWJYHjkwd0mNreXjue5iIkgFPBtYGJYX4KUrZRbK8NSNDMgqFBUFUwFdNGP5tr57Oc46O8eZIeRy9UvL0j9lTAgpPgu6_BdIPyMblCJwtFNUHL-3Ht8lNCJpxhj4UMvZOR8h7S_7_ELZ490VJIIr78AeWKL8Vb8tmDxTJ5eASLGCm-2INudDtwzGhWUtIUt3HAAs1IxWwq0KGoA4nslssgANabt_xsGUAnq8JJtJbcglwCg4EwpVRK9RBg=w113-h120-no";
var naught = "https://lh3.googleusercontent.com/FSKuv-KhyhK7JSaL7CyFU5KdSPfgscLC036A49mbtjvHDGk06KX2aoR8AEqioEL06czsKRINBeV_o4fqxs8sl6o2kfTJFC3ZnLEXJ0DljRRwD7IiNPNBT0bB79jSQuGcw4lX2Prm4h_L8jrxydyyOo11ARhWCdsFtKONsK8rL7OGEf4BEXF7-Su1WSEKL-Uof3CykivPMnFckBhrot953o0EyBF88GhvT1l1uA6MnHTsXerLt02TwfxwnmeTT2TxOo-bZzg6jT07HetM_nAMbeCBU1FCEE7GiJdOZXRn0kNm47EknJjKHgJ1UGufHoaqAT5yKiNpYkEWoV8wcrlI2tjP2v-0s18D61bCk5V3Vn3TTYH2ZgyKLBvCbxv_5IL5Y7bqdDzI4lDPquaCbMCYPb-5_vjOFRHn-PNXhadF3CXtQduGfahb6OWrHBsxsmjN7yUQ50s70pKxzoDc4LDoV47qa-Y66sYuNFj83lk00UJSSoCM_Epsul57XryqXNWT09ASHo6tAiPFT7r5BFSQApM7K_EPyLirvfyNeo9LMIuJZm4R-4_YwvOr8z3QOpAdBxamWIT5CEjF58dTghFW_kMmpWsFFk_2eBaYIbD_ruGGfKSPkZmXh4KY3h4bpvgd4yi3iVw3h_NgPCmp4U7_hLbS-9p3wQefcg=w200-h173-no";

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
$("#xSelection img").css("border", "none"); document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/xM5Jb4DFpZt48NvATNtITkReOVvdeWmoA6DqrdbbAjV_0WJyFG9Gy0oolo0p7e7rtgnJCRcfTI_2CtAPc18DD5VLsTORBIptqPdg7A69nTmFB-6GdiSSK3i6zCWWKw4CSqRkkdZRt2dvR4wFl7jBKj0AbV9VNQWiDwZlLAEjtEKDjdH5bDAxxwl1Y-cLdoSH-fiHtNJGD_NoilBvdwexb14Q67-pk5IqP2s0viguG6bM9ooCKrIep8YUZ_P7fdNAs0znt_Rx-4fYyVeR5IyZ-JwNF6XlkaCWYdNz_OmbwtWCFrTPgP_iGssShirnzY9aJQ6Fl4Ywv5T9Mx-Lo1-CH8HKN7q9xphVsqkBZpns7idCnVhGuXzrp4aGY5H_y-1DDLvRmJhiJa-FguUMxbDA8Jp0ZLaY3XInO7sw-hBF4bCNlimN6imOwe2PD0yJjjkAO9WOHxEJmUW3PymJ49lGy5Pla6pRqNZZ3dXrRX3dn7AfWJXIJp9KAioWeVPumEBQhsRO3NJdAzkow6DvyMo2CAhXhO4LVdBI_6WafL_g2bNJn5YRco0RC3xVCuhhA_xfpLPu7pmo3OfVbklJu2h69n7mNUR6ziE7mQyfujgs=s300-no)"); $("#leftShark").css("border","2px solid black")
});
$("#plain").click(function(){
 xName = "Team X"; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/igBfRlekYUkB0-Dul9BLTCYWbOrcV_SndMQFNdI3OAFQkLxp-UlFaDT1_VFJmhlMiZ9Y6oweT3X_4J8aoRVx4BqZ74B5J6A9tbcCEEIFpCHJYm5CaKio84142Ac6SC6fKOZU7o80uqgstHEGXqbR46OTyJhbzz8LAZIbt-roZ5sa6zLi3UTPXu1Li6A_lLEN8AmtILn5qyhOeIqA3KAJwI5lKW2xJWa7-36Yuj17QBb2f6ZlRJ0VWSA9H7AUf25b6zWGP-1pnlIffVKhasV73t2ZGjiPsZc6xOitcWcs1hGNgZEXRxtshLDD2MSj4z72Q6RPiWY-I_EAH93GbUfDtKdd_f4vDtwNsAl5m828dnSuqOYpwNnGS8eVEtRrKGMylI5V0Zd_eafjkhmY5bMVU0MM58eJHyoy2xaoAlSegWJYHjkwd0mNreXjue5iIkgFPBtYGJYX4KUrZRbK8NSNDMgqFBUFUwFdNGP5tr57Oc46O8eZIeRy9UvL0j9lTAgpPgu6_BdIPyMblCJwtFNUHL-3Ht8lNCJpxhj4UMvZOR8h7S_7_ELZ490VJIIr78AeWKL8Vb8tmDxTJ5eASLGCm-2INudDtwzGhWUtIUt3HAAs1IxWwq0KGoA4nslssgANabt_xsGUAnq8JJtJbcglwCg4EwpVRK9RBg=w113-h120-no)");
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
 xName = "Wood X"; document.body.style.setProperty("--cross-image", "url(https://3.bp.blogspot.com/-Wg4J4-gniks/Tk__HO6-C-I/AAAAAAAACJo/7iUStni3fFE/s1600/1Capital-Letter-X-Wood.png)");
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
 xName = "BMO"; document.body.style.setProperty("--cross-image", "url(https://static.tumblr.com/688c267d7b2064aec09c7a07404abe4e/mxwml2c/3tpn1j5r5/tumblr_static_bmo.gif)");
  $("#xSelection img").css("border", "none")
  $("#bmo").css("border","2px solid black")
});$("#flowers").click(function(){
 xName= 'Flowers'; document.body.style.setProperty("--cross-image", "url(https://static.tumblr.com/9d24fab2d935c253b2685b7a2845c27d/wwt9wry/ZOwneunj9/tumblr_static_ek7c3gxhxx4wokkgskwgcoc0s.gif)");
  $("#xSelection img").css("border", "none")
  $("#flowers").css("border","2px solid black")
});
$("#sword").click(function(){
 xName = 'Swords'; document.body.style.setProperty("--cross-image", "url(http://www.clker.com/cliparts/J/R/z/Y/h/6/cross-swords-hi.png)")
  $("#xSelection img").css("border", "none")
  $("#sword").css("border","2px solid black")
});
$("#flash").click(function(){
 xName ='Baguette'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/EzjilaApwAOLQZYGwIJk01QBH0A-lTeQMFIHbw-oeCCY7UqZAU_78c03mGfhiP3urmiHWLk4dbxm0wH2ZGfyA6M8LJ9X0T9CtNcrlQmHRsO62sB-nW_oSIxtmuDa3shnwBs3-w9dVdlOYHJkAlYllGXZyFz_brZGF1szOh20-w_4d0yzdtIl9ap4WaaDU5gGJ67ZMehueAcz9VLusmR4Ah6NipQ7YvoY3OCyWShZjqMlBHCC1F6k_EAYSNZ-wiPlrsjGSwEOM15ZAUPOCGLTT3DdRxErK3BPuwoIeRHrmVrYUG1iS7IPD0DzMFd0g6VjgYNAIIKhb1Nk_UeC8U3rhYd1vs2PDa3NMlx3ZM-cUexHQeoNeEeKRjj5Jx0Pgf06NMY4kRAcqa_r349UCdBBRdzmm9R-tNkzsPtxu-zf4X8GldargXe1UDv7cbL8yBVzvKe3rVJfTWSmeU6fwco7HtHnLXLFZ0hr-cR4b0vNiPWnFmSeg3VL_Zchwqo9LsyF1GhYpsHzDAH5rv9EB569zB3pq2a_Ncr1R84slFmh7lmvOSDVkjP8Vb4bx68_bNfk7uPoyMPnRxPb8785TPT2sUdUTryALD6SttpdWTiS=s250-k-no)")
  $("#xSelection img").css("border", "none")
  $("#flash").css("border","2px solid black")
});$("#gold").click(function(){
 xName = 'Gold'; document.body.style.setProperty("--cross-image", "url(http://etc.usf.edu/presentations/extras/letters/theme_alphabets/20/34/x-400.png)")
  $("#xSelection img").css("border", "none")
  $("#gold").css("border","2px solid black")
});$("#candy").click(function(){xName = 'Say no to Drugs ';
  document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/nc6YKjiIfThwnNF1FboLG1j3h_yHvuphkOxIb10bJGuQgD_DHD9tnHrWX4MEAyJ2QcmTOgqoXrmXOO6T_9UPMHiubcBj7bwfnezGJVrAwrNlTQT3_VQ-C--cwXj1LUaUbWxz-OdYT3d8nlzppx6eLirur-FrezD0PZ5NvI4Y4WbM9-h7KItglPDigRVCJVB45xpOSV4utt_XncMAlf2Sfewp5OerE4eZcHOEzNaOHR6Zp5j5WiXEN-5np9apqXeebotuxOaBcm-0xsawdj4sgbvskTYh94n5tetEVO6P9Q_YGfxvsyLaFNv5V4NJ7pxvgNLwmhoeZRJVSfMfnoxVOleY0gxgpkozjHTfdyJjejZJFXKvmhQxaa9zKxvMEkyrAEbDsMNurYuSK3Toh7JCc4nP2KSaCqd0xIaozlE4cLW7w6IhqNRvuX6tOZ9xsobN5Oytz9RRNqJ2NMb9OnoWW6Pp3N8ZjWpb5RGwl62r-T-LCCCW3j2Hahtn-C-W-0An46MzEsY6FlDx7CAItHyC7uHy0WqzjKETpy2udsxyaqj2nYbZeDYCX0Z2gXD4Q5Y4qVhJd4hQxJ-xauhi1MDiKTFYWdfG1gweYAz3JigQ=s250-k-no)")
  $("#xSelection img").css("border", "none")
  $("#candy").css("border","2px solid black")
});$("#fancy").click(function(){
 xName = 'Xmas'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/MpuNXDS1xKTmps0ZfKcYiJCmN0LiJ5HsdhP2w_n-4_Pi1YxU0pK8FjxXW9Ml-Af7V4_EzuOALddO1Hnkm3OHEAr36It_6LAEV8vaY0A5g_-FFh2mK3BWAoh80MvR3BaGm-81ITuwl6SzTShtceD2VqFFRTnyN1DlBCvrXGU6-r1AnB7QIU4w_oQaga1C-FFVjlgBAM8NwNkSEm78c3I3U409IE0pLkScvqO0AagR-pATWg7CA0cXYCF0p7G2lH25Fsanjvs46dJGVeHzcARYPeP_qJiGKW-2aSa3CsAKVX7PFKuf0o2PbtBMHz3nDPcuzmrYhkZcY6twvL8KnO8eGesCmYcw_6eliJpA1wCvP35OWZgV4NZJhDQDv0Vf0uDTt7vkll9nkMcJJaCl4rXXfsrHvqACTBcx81FZQXMI7NmKGPow0vSz4Fx8HocXh_PPFtQe6DemBZT3u4mgs57ZA2xApL-1s3h7qceVCgOXgiWwUcWIW164FXQPba0xI8epbArhv1PVC4HG3XJHrvBl-4CVgYD1zudJgRtT1v5fha3BeFFTruPq4sDHaf5fQc-1eh-vd7PX7q5cCxdKAduiLEl2IxhQpWLtupBCFRjE=s595-no)")
  $("#xSelection img").css("border", "none")
  $("#fancy").css("border","2px solid black")
});
$("#paint").click(function(){
 xName = 'Fall'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/rGZWVFKeQMS4WbBXddQsCj3thhJYzsBJH25SAmJlYqQaWURmGFVoVzDsJ7ly3oC4BSNtSIGjlQo_zVQlVHSDv7yHwzeBIeZuZg3BcItqjL2RlHGI7PGx7cccc9iv6HpKvJsgONLvnkzslxWOkeywatxwrSBadYMc2aPxTY75zTvzG2OF6Mv6ka_-KcvGYG5j-98bwMHUT_VoP7H6B1iCpW6zd44zDMKuwgEXZ1rQEVHiCqdDd0xSHjB6kllKYDenCJQobcW8tQDMiE8C8phpHcBMPCBlHCCt2LOWYi8eXvKvRlghuoEmuZ9Kqg9qOi6dyBBdormInJKND9bwmCy8FCIUfH7VwoxXd7FBRBUmEo-XxOABY9CKp2ffDUfMUS0Jlev7Rd3LZLjrg3IYbKmiQdnr6gZCdFFkgpSLNUN-tPAWDQT7_yQTTXViyfIcoaPcMal44XoKsTKoeJDY4aY8spZ35tvD2ZMJvyVEtdwGVenJ7CSY6JaRhMQuTLOPmzV--vTFY62C9uUST0JLhz6goNyQd12iVocr-pK0V6VsAD0246UyVs2LN6xbWjYaolx1TDw_neeZiHfxHma3jnsmzZynuPeWyrTMGGJwT_Eu=s595-no)")
  $("#xSelection img").css("border", "none")
  $("#paint").css("border","2px solid black")
});
$("#lilac").click(function(){
 xName = 'Soapy'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/XECKntQvauVmUz0fzs3tyOfgq602QaNFUuJMxiVzvSef6JEtUeS4a-W_loGORCNNDfPFZXK-zp5LyBBONJlOeYtelBh_ckkwPtsnfA54KRjlB2ejLCD0BlqQANw-OICsAz6ucd--cPOeVTE7TviM0NW_JDmd3yKaJ2sQghfSj7k2mZ_yBzvDXY6aGEJ22ZhxBK3CI8_Ln9y0KaXPVigoiM-7tqEhVg6fB0lqucpwZFSv95Dm0olu5a1RMGTe3_o9RprrQrIlgUX2GzV1Waww9IBpFkXb1NYGRTzn8RWDZBxDTFuKTLWzmwkyAIFsPcIj2uRjx6Dfg1x1sXAAY-DKKDO-r-jVWe3mIP9NX-QWX_oPC_-5afTuGlziqrUUQbCH97CAlZj_wcfD6zhuWU1shFeQmMSyc9RQqLx-yDPCBxHg-F9Ds28KAt3OX-BRXGWFo9oWffqAsVSpWDK3QSwXzORjxclR8OwN202OGBLfcEAPAvSuqfcx-4VUWL2ZNg3BBqDlim3mTlbDvxBHs1noV4PZBtXujjgXAjqJmFxQIym-GXucirl3duXGL7diiR8CuvlopAyJM9pmswmoVOTkCUYVVScNzAiiNAuO2mel=s595-no)")
  $("#xSelection img").css("border", "none")
  $("#lilac").css("border","2px solid black")
});
$("#tea").click(function(){
 xName = 'Fuzzy'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/6UMq_bGxPnyFPZlubk_acLtQS-S6JRBXGcFjiiw2Pwg3Op1Wc5MGqJIbPW2SIJtiAELlx5MShDny8DzchQKy9zb5SQYYDl08ipWWxwe_DWEkD8MEcOunTPw2sVNYDf8KL0RptaxlgU6P1_WS4Gi25CSOP05q29BrWMH-MvvsHndXLzBymUl2axF-UvCdHPrtkOCy4MTPV1sTsT4gxRQRjNbZPzVdAwolA7HB6hWuYYtdb18pc8sOio1fXO_LRr4paKhfk9qY4eiu1wyIJJrrfmVcyKgyFVBNU2cF8ZrCowakF5loa96wZ1TCUXY7-inNFC_tMtbFhbRV_xcfmg5gopLtVFfayVohpdpOUOsnLZcp4Yx5DyXnxZP5AMgTmVLOErx6sjA2HZvsBo7AfvfLXrcdYbenFgeNP_yBcoBs2RZDqwlgLbA6PrcDUMmA5XhL8_vTU0CnI9jhGuiPS6-gyWo68jPKqQh_zJao-tIDoctS7ksy2i0ijOw860WsTn8LbkSDi1hLd0klLFKbHAVa4NN_cfxBv9enisDnrdfrrqPGPPSOT6eymsYnEOg7Q8Vdct_hHXUi1F7E1WYTmu12zcHRIrzDS6GWSlZhkJ5e=s250-k-no)")
  $("#xSelection img").css("border", "none")
  $("#tea").css("border","2px solid black")
});
$("#ice").click(function(){
 xName = 'Icicle'; document.body.style.setProperty("--cross-image", "url(https://etc.usf.edu/presentations/extras/letters/theme_alphabets/18/34/X-150.png)")
  $("#xSelection img").css("border", "none")
  $("#ice").css("border","2px solid black")
});
$("#purple").click(function(){
 xName = 'Chili'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/wSgq0OhHZ15Zu0yHEh0OsR5nIKS4CHAR4MKt4mZTp_EzKLmxs58Vknsbkb3H6ML8EODQG23Rr3Zdhb2t1tkdbeShWitsfXONTIlWV-TY7HBb2C6c8pBhHupx4-0Dkpomd2k5c6COhRUtpLz4fCi5KPzWGQkXAs9stGTE1vYd7mFaij_oEyci5Gf4jbtLjMEzppjJLRCXKMbb8lbeOrCADcXSWcMSMczaJKphkehOsC7YaLdxppiCtQJAaZ-smJgIgydli7fyuItvByCPEIhKcEewK4MjR_0b-KCTxtbUNHzy31_CUZNIWtqVvM-1cXUa5ZCghdDQHdQm_6mc1T9ZenK0QJtyNjKwt5psbZwA_PLtTvNEPmw7uWZw8i40sdH4CsrotAvc9w4-baNQnRn0DyYfN0UwLGn0Kx_yG86BTwrugrDDkmM5j857ivs2hiLXw9XR29xzb_uIucVZVOiT_XOao_sAwuvnOpRRR5TuagXjBeAu_fk9NEJkOCJWvxT7YqHhnHOhSgCVOs83u7A8icEYS7Qkk_yTttcw0ugKtADLQbVLye_37HA1vUy1DViNa5kW8ozPuMbROEcC5qf6qASvzDYUe6e5mdnEaCe6=s595-no)")
  $("#xSelection img").css("border", "none")
  $("#purple").css("border","2px solid black")
});
$("#spacex").click(function(){
 xName = 'Space'; document.body.style.setProperty("--cross-image", "url(https://s-media-cache-ak0.pinimg.com/originals/59/e8/6e/59e86e8eaab1281de17175ac74f0d476.png)")
  $("#xSelection img").css("border", "none")
  $("#spacex").css("border","2px solid black")
});
$("#skull").click(function(){
 xName = 'Pirate'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/8J4HGTF_efeAvwKeUogXDHYsN7BkI_6WKcUTYZF7tztEKrQjJoszuGq4ui7G3qBecMT1BwlQ1ECeB0T5KP9ODYPt2p3TmeMDB906pw2Y2pcuAfHh47ldHrLDZ-hYIOPIbwDe2qV8uF_utEGXCXdSfwSbzPR-jnKsvK3epzGLy6TU6jZib2nHfTqFZJhQNOyAFSp5mWOAzkbm0UbNWHCRQePiwm2HtJkALH2d5N4eP1d7BERMk22A1EfG0s6rkOdnf-v1-5oEFyQowEXbjSrLmP5Qa6gT19wQJyBSN3nMA75APx6fSbm8XIvc-C_M2HIWD7ryvi1fhsGe5SZFoS8Lv_u_2txYCezLpBOU0iVfi_pQiWv5KixMf-aJ2fNN3UGc4bqfRaw5iX8ENhX66wvrjHJ0bXqirENU36YOsE4yrbppO4OEEliAfXVL5leYITB9eNd-mmHqntJhdB9RujgaqySsJHWpNPr49F6axWpXlMnHym6xnPWskHElBlQqI8h2EkSfVU7p9CRyQYldu52nfHLlR_rMz9kh_ApJDsPOhdWq5S9hPW5rQaHktPDSGoV59OtHl6LDIM1sEhKR3HLuni4RWO2LAKhMGubcqBlW=s250-k-no)")
  $("#xSelection img").css("border", "none")
  $("#skull").css("border","2px solid black")
});
$("#jellyb").click(function(){
 xName = 'Jelly Bean X'; document.body.style.setProperty("--cross-image", "url(https://2.bp.blogspot.com/-5eAMS56EhUE/Tn6aCc8uUyI/AAAAAAAAADc/PX3kvM_J28g/s320/png-JB-Capital-Letter-X.png)")
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
 oName = 'Candy Cane'; document.body.style.setProperty("--naught-image", "url(https://2.bp.blogspot.com/-oxVtX_ndV_Q/Trli3nSlbKI/AAAAAAAACBw/Bz5rf6FLdik/s1600/CAPITAL-LETTER-O.png)")
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
 oName = "The One Ring"; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/FSKuv-KhyhK7JSaL7CyFU5KdSPfgscLC036A49mbtjvHDGk06KX2aoR8AEqioEL06czsKRINBeV_o4fqxs8sl6o2kfTJFC3ZnLEXJ0DljRRwD7IiNPNBT0bB79jSQuGcw4lX2Prm4h_L8jrxydyyOo11ARhWCdsFtKONsK8rL7OGEf4BEXF7-Su1WSEKL-Uof3CykivPMnFckBhrot953o0EyBF88GhvT1l1uA6MnHTsXerLt02TwfxwnmeTT2TxOo-bZzg6jT07HetM_nAMbeCBU1FCEE7GiJdOZXRn0kNm47EknJjKHgJ1UGufHoaqAT5yKiNpYkEWoV8wcrlI2tjP2v-0s18D61bCk5V3Vn3TTYH2ZgyKLBvCbxv_5IL5Y7bqdDzI4lDPquaCbMCYPb-5_vjOFRHn-PNXhadF3CXtQduGfahb6OWrHBsxsmjN7yUQ50s70pKxzoDc4LDoV47qa-Y66sYuNFj83lk00UJSSoCM_Epsul57XryqXNWT09ASHo6tAiPFT7r5BFSQApM7K_EPyLirvfyNeo9LMIuJZm4R-4_YwvOr8z3QOpAdBxamWIT5CEjF58dTghFW_kMmpWsFFk_2eBaYIbD_ruGGfKSPkZmXh4KY3h4bpvgd4yi3iVw3h_NgPCmp4U7_hLbS-9p3wQefcg=w200-h173-no)")
  $("#oSelection img").css("border", "none")
  $("#lotr").css("border","2px solid black")$("#orb").click(function(){
 oName = 'Blob'; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/G_ICOO5XjIAAdzxw5_xcaXnGQHUfs9ugq2B5aXidiuj4ScI-4x8zWQcfphwY8yTQYImLsLwLICynnW6LXGPS66eT7OeVv-gF3drUYdTzY271vpmrsF7do4jQD5M9TID3V8I7nJtWYW3M--rfZNSZzrVoLOEkygMtxo2NXksCxjgfuV8efNPm05HxLsTVOsmaaUltQgI30tziP7PVCJDp2D-LxhrdF4pvUGpaberuZU8MOZj_eOEQGUnOw5qhZkxEQ4hELgoDGNxgpE8mG-OmtXJIT3VYP3xqIIdeWy_RS9p8bOpw7k1c7wAQjHeKWHMY1SApehVruGVxb7636SL2KXUI6qbmyQ9P0PiUToCmLPSWBMNta_WRy_ZVrzrrwFEcrseNZEFAPHH1fqfmm2GOtSsrx6n1FrhDpQArdphxGOapQYdaJMCKvP1zEwh4Y_Ug9W-z39f40gc9rPfMXUy7_lczCc8bSexEKZxVPNLIkH4BHvqeu0OvG0ZflQXu5MJuCvePiwPcvrWJ7bsEMyKRz8GdmjYGH8iWrR72WKamnjanHTDAPM00Y9X9r5dAXRlIVtMxjIfcn43qe276w0wNhyHOXRl0nvaR-3hFWbLX=s595-no)")
});

  $("#oSelection img").css("border", "none")
  $("#orb").css("border","2px solid black")
});
$("#donut").click(function(){
 oName = 'Donuts'; document.body.style.setProperty("--naught-image", "url(https://33.media.tumblr.com/007d4c735f373784f1f72084fc8f1d73/tumblr_n085t5GHHj1s6294bo1_400.gif)")
  $("#oSelection img").css("border", "none")
  $("#donut").css("border","2px solid black")
});
$("#record").click(function(){
 oName = 'Record'; document.body.style.setProperty("--naught-image", "url(http://www.50thirdand3rd.com/wp-content/uploads/2014/08/photo.png)")
  $("#oSelection img").css("border", "none")
  $("#record").css("border","2px solid black")
});
$("#woodo").click(function(){
 oName = "Wood O"; document.body.style.setProperty("--naught-image", "url(https://1.bp.blogspot.com/-wQoPsgPVS7U/Tk_8IfV8lpI/AAAAAAAACJE/DryLcVByPTk/s320/1Capital-Letter-O-Wood.png)")
  $("#oSelection img").css("border", "none")
  $("#woodo").css("border","2px solid black")
});
$("#shield").click(function(){
 oName = 'Shield'; document.body.style.setProperty("--naught-image", "url(http://www.freepngimg.com/thumb/shield/20-old-shield-png-image-picture-download-thumb.png)")
  $("#oSelection img").css("border", "none")
  $("#shield").css("border","2px solid black")
});$("#space").click(function(){ oName = 'Gondola'
  document.body.style.setProperty("--naught-image", "url(https://upload.wikimedia.org/wikipedia/en/4/40/O_logo.png)")
  $("#oSelection img").css("border", "none")
  $("#space").css("border","2px solid black")
});$("#happy").click(function(){oName = 'Tea Party'
  document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/LdU3q11JlVNXOXUtAIrdOGanlkl-r9TqWsgfCJtt8ZdYl5fN7Xf2zfu490bqH3KlyfSft_ZOprMA3fwCUtgGbt_kAZwLVvcmw3REaLxr8KvzrDBXWdvwtDR1pbI2UWlX5PwfFr60_qRLObkppc8cGOlQDRMACd185iwoMBY5xfna-nH5HUTX1a2cqfqgNaBHI2e0d8bLXmEMWyg6W1XH09az1PVEIQLu-ztzMsMk5J8zmSUlcT1_XaLr7HKy9fIB7FOwlWs98vAnaNWh10NN7-Pq_E71QgYnAMVKhW0MYyLTqTwgknifMFNNuwUNOclpcjES8EMbcqzk6-kmBdUzk5TTn03bZVP66NV4dFDToPbHB_mYVVF0CmsZrsxZxabPc-a-gwtqXGY6gPpnvPfuwTO1I3awX_xKAKqLL5BF0rVNDBVFysADJ3yaghPp6CM59SAIgP2a4naRAzZIfWpfCYqmQEdE_kJQYrWIgju-C1FWMNh6dGueBmYX929S7clpEdZgNxlDUeATRvraHVG9JqVuhxgGnIK-HrOgOylJg4eLD9nm68Pieeoazgo-6q_z_UEHQD3K0fMGDN0EjAPZj9-7a2xVf_YM83OSTpD-=s595-no)")
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
 oName = 'Merica'; document.body.style.setProperty("--naught-image", "url(https://2.bp.blogspot.com/-pw-wogEnbTw/U25btTCea_I/AAAAAAACco0/-exmHgQLX50/s1600/GE-CAPITAL-LETTER-O.png)")
  $("#oSelection img").css("border", "none")
  $("#usa").css("border","2px solid black")
});$("#obama").click(function(){oName = "Obama";
  document.body.style.setProperty("--naught-image", "url(http://vignette2.wikia.nocookie.net/logopedia/images/9/98/Obama_O.png/revision/latest?cb=20100724092050)")
  $("#oSelection img").css("border", "none")
  $("#obama").css("border","2px solid black")
});$("#hands").click(function(){oName = 'Orchid';
  document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/Fm48KyzdOyqUXhKA5lMvXfB73_7aYgGfuzrrH3VL6Qdoh_mehhk0XiSxrLZcQcOZgP5tnymR4szNNvKyo4i8HhRMVmle6lM-Bu9-PcKYU7-XMuiyowi-dbiIVYHJ3rfsQBpZ6modu8C77IB9utjP20CqzRwcIiPQMWv1bccXXEuvovNg3SiQOxdjj-GwemQotqbljNQmdmtaiuZVmlFv5b_8l3uzvMhXJpqkTdbDEbn-O46rZSLdpGMSAFdVKvWLkTzY1MtQzwUsIcvDmnQgOCN9hI-rnZTG-MRyO6f1Tl_vx6i1mpRBVZbjz0dwwUVQdCt7sKy5zTXz_G0FPWEEXdgVbziFLh5pxdxhsIGxFKvcw2gb0ds7Y1KPaMJ_TCurWpOFcfcQbsYV2FC_TdWt5zdd6ThHx_imqyoIp01GvcmUjkgqUnlIlMx_Ew-05sI_YQdUrdyNUsnLc4-Xi__ef1I-dGGr2V0uMwTc4BTCkbCeqUiK6Ji_15f9nGt311PeRjQQGzRlKdk7oEho8-2rlcfm0embWVdB9ZxVuqLfxcXLEF9OaaQv-DvxbHCjnYTi6TrLTOa6c0fRJ58xjiPPUaUOex3118qOM-J0YFBd=s595-no)")
  $("#oSelection img").css("border", "none")
  $("#hands").css("border","2px solid black")
});
$("#roses").click(function(){oName = 'Roses';
  document.body.style.setProperty("--naught-image", "url(https://3.bp.blogspot.com/-8lS1YthduYw/TntZGFaZccI/AAAAAAAADqk/nSlrMJDpRx4/s1600/CAPITAL-LETTER-O.png)")
  $("#oSelection img").css("border", "none")
  $("#roses").css("border","2px solid black")
});
$("#jelly").click(function(){oName = 'Jelly Bean';
  document.body.style.setProperty("--naught-image", "url(https://3.bp.blogspot.com/-XElM35ERl-I/Tn6ZupWXEhI/AAAAAAAAAC4/hexEpV2YTvM/s320/png-JB-Capital-Letter-O.png)")
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
 oName = 'Fairy Land'; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/QDXrV8dZ5RM5Uh6CyA60ryhcMHcpNLTeoFhS15VDrLuFwtyr0EZLJUZrUKmskUdDWrLF_I6t5eiqrfuib25kQaWhuzXsXdkMfOTwg1-WZCMdqGq9eH62ggUABcr48orSMGJbIcJjgkk_Ihrkb6aEq0NYxAX_QJWZXGpgotMKWtJ8zVBFnNtMmUd-MefLVIQCC7r7q650chhYkHzYX7tQ0ypWuhnCvGoP6NdNYEw8fzwvpSSpT3wAUgmTcRGu2Oijx_Vuixl9bYf5n6ArbUXPZHd7hxnl9DvdwgsvLEZyHkklJ_5tF43QGXSAGDK2y2jA2e_lP82XDNhxvDknlkht9VdJDRha067lF-CjfB5oDA2mMGBkKEmK2NGtFR2-C8sfOm5Mt9Y6rI_fIeLUBXioTht-Jy1dQoLtkQ6NFGMglaRYYc_6pk40bDhfy1wn_oIyARlBrqE4RpcC-KDLx9RsA7HQG4oT4k24F9FLJyuGAnZ9u9OeKY9iKCJtFC19Td0ytnXS3BOMun-ultIcuOBZi298hjCSKnNKbE_9Vm-Aposqas4bH8Ri4nI6Mn19_TpDLHqKbw9OsGFq2Kp_SO5Kz1xIfGkYpnei8t76pbu8=s595-no)")
  $("#oSelection img").css("border", "none")
  $("#pepper").css("border","2px solid black")
});
$("#bagel").click(function(){
 oName = 'Bagel'; document.body.style.setProperty("--naught-image", "url(http://icongal.com/gallery/image/18621/donut.png)")
  $("#oSelection img").css("border", "none")
  $("#bagel").css("border","2px solid black")
});
$("#eye").click(function(){
 oName = 'Duct Tape'; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/U1SRtZzus4Vt6ssSyxzPhhn5zwvhCcns1eqeB9w7_F0VmzvxbyVmlS_JGkELt0dglNl6inn4SAacr37uEnF7-4RjKUYBJyrJp4P5oY5B47SuATTypWV6D4LICuuaLQax9yQYmyHk-jQJf0gmRckwNzusCpCznnAFDz93O9fnerASBk2ns0iYsOuarvz2teE4ehl5wSva5WR5pF8dpDrZUSnC0Uw_J7Pkl2F9KHXfGg1DhZJQJERE3GEn7HSl4TGCV9oeExkZHI6WureurLOgN-S6n3drLGHUtx3mddipdN83W3TBcteJ_Gx_4Ozk3eZcKWsCspixD9gt12YbStRbUEGKMWauHOH4tymD3guNrWojqbJM_HS7CZAxGcAM_P0BMxq_LTtHh1FXYjZgtA_MseZzdR_3PwuO3tHpH7svSNgJ4wJnSeagJzHbaXL9AFWNG7alvQAwNwSLWYLb5ISx_aQn1a-oNN3f7Fb2-ZzIhZgLDvOt4zDN8-u5A5DANEo8rn-Ov5JnsnMI5mZKmNCGUwD81K-qlLcztVR5wqa7GQiHFpplkqyMRXjltZxEOr4Cg-Jw_mwEkHuytsMahYxnbo2BUbWI6PngjPUhk2El=s595-no)")
  $("#oSelection img").css("border", "none")
  $("#eye").css("border","2px solid black")
});
$("#onion").click(function(){
 oName = 'Fuzz O'; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/J1Z5LD3ucACLRuigBSHUJhffH9MAqng3oaoxp9LQ_JpnJ_nz2v1LXOxgJL0U8G8-u0zSwNmnNYQpuJ0aDYqvg3CunvKIwzf9NizptCZCfceTU9Agq0ABpqXEOJLKgpgA3-EgW6AXTpqEo1lBCS5rJIV4ei9SAHnd4dhbsytDm-Bmtjx6EVUEoZJkJJR2Wq9lKDTFwrZxMHdSFNbSZu0HGao1geT8jJ0bD3iy6j4H0QEkoFHVQO71JybwQHbL2K0AvO9mYFhJbXJ7cVNNFTUr9Yo4mOP2X2yx1xPxW_Xvmh8xWARHBXscloRhcnq7FN6uN-s9ctPsLIft5DXqdojkX8num0rZrv2D_a52MlfGMgVGvNBh0PwO5x_KJOYNTPBtZxa5X3Hx368O6fxgQakSJNa__Qg07gkH9qGKeC0m3GnIOyAjDyYjpxi8WNiIu2az9IqEYtyl7lMOJRZU4IEWLaEWTyS9yzde00nNB5R4ctyHXvKCfZdj-zOeyDR_Y_He42XA8fA7Wzagt4fs4vX0x7tHcQxUZAku-6HWeHWd7Bv7vq6rcZ_ssqduzq8h2vG3enW0Udxjt4G9ZA-_b5be_OWa6uGEPl_ZnwBzoT3E=s595-no)")
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
