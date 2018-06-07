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
var cross = "https://i.imgur.com/rMsGafK.gif";
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
$("#xSelection img").css("border", "none"); document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/xM5Jb4DFpZt48NvATNtITkReOVvdeWmoA6DqrdbbAjV_0WJyFG9Gy0oolo0p7e7rtgnJCRcfTI_2CtAPc18DD5VLsTORBIptqPdg7A69nTmFB-6GdiSSK3i6zCWWKw4CSqRkkdZRt2dvR4wFl7jBKj0AbV9VNQWiDwZlLAEjtEKDjdH5bDAxxwl1Y-cLdoSH-fiHtNJGD_NoilBvdwexb14Q67-pk5IqP2s0viguG6bM9ooCKrIep8YUZ_P7fdNAs0znt_Rx-4fYyVeR5IyZ-JwNF6XlkaCWYdNz_OmbwtWCFrTPgP_iGssShirnzY9aJQ6Fl4Ywv5T9Mx-Lo1-CH8HKN7q9xphVsqkBZpns7idCnVhGuXzrp4aGY5H_y-1DDLvRmJhiJa-FguUMxbDA8Jp0ZLaY3XInO7sw-hBF4bCNlimN6imOwe2PD0yJjjkAO9WOHxEJmUW3PymJ49lGy5Pla6pRqNZZ3dXrRX3dn7AfWJXIJp9KAioWeVPumEBQhsRO3NJdAzkow6DvyMo2CAhXhO4LVdBI_6WafL_g2bNJn5YRco0RC3xVCuhhA_xfpLPu7pmo3OfVbklJu2h69n7mNUR6ziE7mQyfujgs=s300-no)"); $("#leftShark").css("border","2px solid black")
});
$("#plain").click(function(){
 xName = "Team X"; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/igBfRlekYUkB0-Dul9BLTCYWbOrcV_SndMQFNdI3OAFQkLxp-UlFaDT1_VFJmhlMiZ9Y6oweT3X_4J8aoRVx4BqZ74B5J6A9tbcCEEIFpCHJYm5CaKio84142Ac6SC6fKOZU7o80uqgstHEGXqbR46OTyJhbzz8LAZIbt-roZ5sa6zLi3UTPXu1Li6A_lLEN8AmtILn5qyhOeIqA3KAJwI5lKW2xJWa7-36Yuj17QBb2f6ZlRJ0VWSA9H7AUf25b6zWGP-1pnlIffVKhasV73t2ZGjiPsZc6xOitcWcs1hGNgZEXRxtshLDD2MSj4z72Q6RPiWY-I_EAH93GbUfDtKdd_f4vDtwNsAl5m828dnSuqOYpwNnGS8eVEtRrKGMylI5V0Zd_eafjkhmY5bMVU0MM58eJHyoy2xaoAlSegWJYHjkwd0mNreXjue5iIkgFPBtYGJYX4KUrZRbK8NSNDMgqFBUFUwFdNGP5tr57Oc46O8eZIeRy9UvL0j9lTAgpPgu6_BdIPyMblCJwtFNUHL-3Ht8lNCJpxhj4UMvZOR8h7S_7_ELZ490VJIIr78AeWKL8Vb8tmDxTJ5eASLGCm-2INudDtwzGhWUtIUt3HAAs1IxWwq0KGoA4nslssgANabt_xsGUAnq8JJtJbcglwCg4EwpVRK9RBg=w113-h120-no)");
  $("#xSelection img").css("border", "none")
  $("#plain").css("border","2px solid black")
});
$("#pinkX").click(function(){
 xName = "Cotton Candy"; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/hvjfUv5jG35_But83sgzRYniNKvIlTUmHRFpdF38XK_n0ApR7uic3JmVB_Akjn8_5qceRtLAR2p-IB7mXQpUdiu8SI32xKLssDjfXT8zoIn7wynFAtVgce-AQjHCK8mWdQXJPttk7R_qaj_KVtMkgjFobcTDR5Fg0NxZhYebWtIAM23Ff0n9Rcevo7NSuPjC-1zBNmLA9YpRJv16ymL13SU_Ye9QWBYzb1YsPQUJYmH1X9jZq7RXGBoIqSvXi1S0EHeH_uRm5OgHPpBZ010VjWOe6AnYmtZlpqPlj5y-zYbeF-4-MxLg2L0_XZETNz_n6lPi4NJlYk50AgNSXlfO8l94VrPNrGO0G3j2O-AkI_Pb4ax08iSiURsia5CjGjq8uI8w-iG5uYCRd-FBZCvXDkunmmwsQnhAUclgOLlvfdeLO4YaFc3KYzWENimt8MhaqbrKZVsnJGceKKlgNuhrsdY9DMmsgCChWxo39dVRjTZtymU5PNyIRjbilzF44gpqFPXC8F7kB5JVFpQObwt3AGDTuLqTZUl8ZPcy9IN2CJn3wI5b-rEDhrao4WCEaIIZtVGNMd10zh1a0AUeweBgj2uEFdQvPasqvKutjAGdkTt46Pf7zyfTRiU7ugLcQL1Xf2YPWLKucOr1PsQFLf2cOHeWtJMvy-R91g=s250-no)");
  $("#xSelection img").css("border", "none")
  $("#pinkX").css("border","2px solid black")
});
$("#xmen").click(function(){
 xName = "Wolverine"; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/2ePXCZENq7logXzqG9vOWnvyc65KpEmDoO5a7v28-9K9PkpHsE1Efuu5WxdZJf05xFO_AMg4Ipxix4aPHUetTU9Zkbx_o_wPo2jL0yBh1HqmyORgxxpWjtF48_iaqNMMBO_0tp0I9OQ5k1eeK-G_l0bk2y_AIh7b14bwJ5a8ou_44BMmmUmWsHTTk-HPyvFtHR4x4dW2JrPmkjTfg09BXHelcymLiiu-e8ulMmEmT60TNfpF8hd_IQibmsSyObQR-tpMVVNeQhecbtFzvmft6RnbE-D0onQRy1gTOr870SLTagSUSCmboxiUIJ2RdMVQ98lqp8DYQTNKqqCDdBLng2YDA4-9HZiJX8YGC3IjTgsSUh8Sn4AHOncNF9oDWtv6dCF9_aAIRvQNFr4pDzH0OXVSCtyCvFZih15663BHRNeHpx7XOW-u15T0heV5fosF9wjshizMWioSftw6IbfuPWX2TYUZgBBZ5E0DuhgC-yUOFkV8ZbOceAILTFU_EQuQtiWAR-Qp68iTDRc1TTpIs3PbHk3R8pPwoz2mSjTB22D6Vs14N2TcoEahvWQlBq88fJe7xRaVomo1KkH2tVaeqWwX75PhgG3aCjFqGPoh5r7ptzsBKbSVaqYU_xBbrhe5-_ZKjhF2DBd_5e_rxzF9Q-onBRPmCR4hLA=w320-h430-no)");
  $("#xSelection img").css("border", "none")
  $("#xmen").css("border","2px solid black")
});
$("#wood").click(function(){
 xName = "Wood X"; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/i0-RRnjDkjTueZRnTgiIK9BbgmcDXxmUylZR9RtMvM01WerOmHL7ut_qn2_tKpXVpcegLWInCvMJFFs38lwwP0Pw2f8DskRh0qFP4L4_ZYG0vc8f_8i4F1W5ctff4p2NvYr2cld_edwKXnKEOXUI-5IMc_W0-V4nWFG23mrOJPqU6B5GaXIgmBPDeVr75zlZWi_7STWYQ6NgPON92XxrnGqhILrSYQqeC47sQrMwXtj2j62hC2mtcXVOVs2J5iZiBvskOgOXuvKHBhkvnM3xdvTJn09ObQBVGT2FKvF_84MQ1ieGwPlRwe0_LvNksEE7uAtCPS32mICQwTqxl1XR4nm4wqV0CgOKA3e0ulmUIAJV68X9QZQ3M8Nnx0obvgPaPlJdoouj60WlkHuBU7vMznw1oJtbmVVpqRUBT0PjDvVpo0OKii1lA8c0EMcWHN-S8toZMZDVqdRJyG8XSnUcRFOAJmbU1n1U23MIljx0IjAEo59jI56dHHw-z8p15f1gAgoYvBbJLjI-TTxdM-woZ92BR5StXycivrOTtFmRN3L0x6XlBAs6_4g3q6uy6ePP0Cmbp_vrepbn7aMI7VCA9r9iQZgEszSKr6e4f8kIgIg1k6L8_xjkkaI1iR3SEYOVV-bcUhBhpJiL40FPGapODoy6hnXPHd27VA=s616-no)");
  $("#xSelection img").css("border", "none")
  $("#wood").css("border","2px solid black")
});
$("#redPaint").click(function(){
 xName = 'Red Paint'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/Ng8-4UcvOjxCwE9ehh4ok_MYB_bc0pZdSqZbBb0Z8jqmM4PQIWpoh3_I15Wz-xs7Wn9GHAM0kdpGtXFhzDVB7gJIUumJSlnhHk5x2GHh1wbsj_DDmR5qA3N55PY4gWGBTLop1iX34QYaHoSqGNxA6oWGVgVPCceXysg3TnPRvkrS_D_x2O3x9fC8U5n0teDTI6ATxnTpiWpf7_sKMeR1CNH-4OW6B5hl6t7qWhp_nNymDOrzhquA4SYHhL6CoWBnGHHgeBKk3iTEFWGn3XSFrltWhSGk-Jtqh2N4uQPkaQhD5OxHBmwNBexlBxdr6ZRLx3H25OjaBujPaXRQfh3kGydYGtFyQRgHLSB8zsoqHnf-IzaaNa4YTvI6GL2l_fl5qbao8SPNHRmk2vl0x-4jrvJ6r6n4VkqjqjepmGeqK54yQhwOAYYcxeu5HeIqQYQZsHyrWsFF7yJbJlGzAFNMOcU-AG7J56_Z7CLfQBF2wNS8L0-qoXsYsCIXocxeBLU5-4Cv6k3OJhcbwo1bQiqpt2sqfum9U5Z02S6DEwcNbzrG453dFdKJn8iWWRzGVAvjkW2uU2BRjEJqj1JCL8DrdfpbgGI5i4TKF3OhB7K8PPo3mg171U_kBz-vAcLlD1zO4fsky-VKNPQ_BOR96I1VTsA1iIsOu9RsvA=w272-h256-no)");
  $("#xSelection img").css("border", "none")
  $("#redPaint").css("border","2px solid black")
});
$("#galaxy").click(function(){
 xName = "Flashback X"; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/yHj3Lzn3kPrkskP0o1Iq1NAUofatJLmrVMtIej8eJp7XPjzP1K6bzDmaJNJwD7_-jpY-2dcORAxwe95Tts1lIFXRdHW-Lpa1ZvZILQxb-3US6TVlkrufPoCQCCqdAjCuLF_UcIOuXt5yjtPYXen8I5JmWZGYQpd6zybEyHRKtg79R1YTj76mAuXKd9nS8xMLCF833K_AR8UTRcFQ-XN5JS4RxoZ_IeaC4RCm2WMl1gzJNQW-JSZf8Xb5i9DYD4k0YiRZBUzdU4uz7M6YqOP3NqPa5MrUbaHRF5iH981PtNiahw2i7Et9uT2YZcZ8Yfto71BNBvo-XjShAzAMI3CT45acrj2dhYGucZ-KL5b440hDZ-XqYQZEIta4qjnPya6FoxYpkVCUFwrLLobGvmno-mpP1JyufONKKt9nP79d8UAk9EXaKnlnye2tfocxbWAr_hYiWLMJU7rDCMND7ihNb5EOW6wkLCos8vbRSlNTZxQJbVUy1Yb3YIWvEk7VPa0yzqijp2dKjuKJvSpCOaFLz35L3Mo2cZiPqn8-xKrOmVFJPMkxgUpeGj-Zht1bvs0veQ4yVtu5-TfAiFD46vD0B9-PsQIFlq3pBWkkYc31dJxR4O8lmxTpGAXFp28qP8qHQtE0-4cxjSkGFsBkjo7lOOXpIk5Owo4Ziw=s500-no)");
  $("#xSelection img").css("border", "none")
  $("#galaxy").css("border","2px solid black")
});$("#opal").click(function(){
 xName= 'Opal'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/hKCPDCCqFjL2OFkR06qalwFbRDebQ6-ZhneHNvbw5d4mcctSTrWtBLeSgF1OW0CAvWGpZbx46oqYaFS1bogNur_wy7EE0HU6a9ui-lI6AYjMn3i1kl4Xj77j4nY4C2P0qN_bNwbw4k4kWEgNHbmLHks_ha8LQDHJPdCvcmYXiXRYj4mZmAtPRPOkkPPr2NlrvGzl9A3Gzaaoa4uCZvd-kLmJL7Xeci3UWMC_Xyv0I6xm9fKftzjO4AqJ7PggsVPvjHhxsZ0x2j0HxznNt8wNRGOlAqrHReqwOaevp3Uc9UxI3YL0zA8unimcetJ_37Kc2ngI_W8tZSrgXvBoPyKuIN1l0E6T2OHOOb9COd2XgEJpruX9SBzXUaVn9bffXR3RPv1kE08Xw1JIPlI9bBKkJRc-iTSbvTWeSNWE_okzL0C79kxbwVsr9zM5HGfOjuXS6Frh3LF-kEumjq8iZITjiMfNp92ZL-RLIcrjMeehe7BsLhU05U_b-tJ0eWqFvp46SKXAOtoldaWYEYgbyNA3QZLMEcq8LIksRXJQz8HCIHIpqfAyixAWPWoxkCrkkQsl4K11Rep7x-BYdCEjAMMjtRpc2i5GHj39_hqLDbO9MtdWouQXDHuQE8Mz-9BcUoHlMQIM2dggnWjloGcpxs99ZnYltqBqpCU_JA=s499-no)");
  $("#xSelection img").css("border", "none")
  $("#opal").css("border","2px solid black")
});$("#tiger").click(function(){
 xName= 'Tiger'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/CI-ET2PK8oMzuFVYa0wG2MQjxyjU-dQrtQoZQd0GQjqxTfJiU5kn2UBPoowmzv7y4L7DN6QNZPU5OvhtZWJnM6ezJfKPT7l7uoStpZP3kWYXmcq8d-fbMEPnuCVrgW-24G77UuV9YE30Xk6OsO4nToxCJ8072Olb9uPCzI0n0gqVt7Af6RLTza1rk6CXInyM_6OfVph2kl8P22no-3EsRcONKohXHANDrMh0541DgAamz3_MwgyhP1wwJHC-B5l2NpP--S4iaEECnB4u-m7qFEeHD09D9Aw4SR2ef-N7f3ZbjQE0UBwRvtK1bXli09zC5qXrEqHI7ZhPOouPe0d2jTXoxDekmhBbI3px4GmilqaeJgA7gBtk2FCFJiuNRpMOh8YVXUdA2gyr2YHiAbDR-fdfTeiw_oSMdo5-SbHUOmdVnFcz7U5e2tkxCHgcUwqWNdFmSDybWa6gZpK2qPD0KDMhAGbogLlXG1sT4Mny8fl7XwnPQzpy81EFIzU5inmIivn2ukr02_30WzIFk9tihDfoGbtE32BXPnxQM8nBHZrAH8DYS9mXY8rd-8iX_ufgB-f6-9WbELYNuehd4Rm-64CBo5WrXcDDf165FFpvpZ4DUfmEGnIY629_qYlOjU_UlFLzqobzu_eRuo10YugLjkAQGgbJgAAMdw=w300-h250-no)");
  $("#xSelection img").css("border", "none")
  $("#tiger").css("border","2px solid black")
});
$("#water").click(function(){
 xName = 'Water'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/JTHs-L8QYx3JVMoabcR-2GPa1I1yFREtJkmYCqQk4YJoOHPGkkbLl8M5G1Ldb6xX8PjYga_KW8CFJoJ1hinWl0tErBVy_K0vW-io-WA_l9ZUsHYbxXBauGPehxkUzs36TyD2F7dQZz8E3q9kLugOVRQTWo2-hCn1QkrgesvkdjhsIWkF9_qrplezcib8u7oduDVFU9BXkLgXrdEYRugSTvvto9Nqt8kXH_tJ3xu1pIcFaQpYR01e_NEH5ZS3CE2iHRHudKKWaL8iBmLKPw2Fh0d5Sa5FmJfqz1TWlpThru6SdBqzvj0ann9nv8RqvKRW_1zOidPOcBCW0_LwN-LTloDo0YnC99ctGWtypXv2Zb3pHrr9pbSizzb5IVCmgz6JHh_hiowy9Hw6fLkAUwHKyLUWPD17DHU_Wypx4EpaSKXer2Jn8Dk_0wJkmZmJGGUe4e6ZYe3qvSpYs1H7GG_zrzHR_wAWC0yStg6ZX7NBwCzlFODrFai8xEJxIiyjcCfNLDKIVwuS1pQllqM2p68qq9nEcfgfyB21NM5kl6-mQ3S5vUHQiZozDgcjEEoeeoyzuZS0Vlu_Nbs4cQAUkQxq8M8zloqUDi-CzmWk8ovZQm8WVd_GJWq1jvE-SgIWSmGf-zIYJoifbv2L5PK_jLf2ek_YiLjObW5R7w=w314-h289-no)");
  $("#xSelection img").css("border", "none")
  $("#water").css("border","2px solid black")
});$("#everything").click(function(){
 xName = 'All the Xs'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/OoCxRLsnGiK6KioUsuQEorOm9vI285JeVEvEJIpPprvbc2N8CAU0-9COeKnt6pXAgrc8Xpo2thdZEKuxhZKrShhYc99-6sUHOLJKcjd_XA6SEqbLcGn9Cvk_tKUPNtQeBzrtcg9Ype4Wn1-oWCzDM87EfBS0gmmIexiSVlKE8ypHOn9N30eAtX0ayxScRbK_EwN5Ja91ZL99jzEHF1VumQXKN4CZuc2eDIRugzPx5D35G_SD0TzkdPIlkDMalVc7RZvGqht8sr6kdl4w1TNDyixJ5MiwmIRPp_YraWV7Fg3ppTr9Iis9UNGOqoU4aGqi_mW5_gMzl6nmkAAvs5Bl7hseN9iSAcgubhEXZay586ZSYwROy11tXy2PmFyNIdPwwnzxEKlOHvgLYVqf5_x3dledWaNkBiHJpMMsR89rrg-HlczedhOYI6ErqsRr4SmoxvqdpsCHA1MPHtXt54CpwsPbnN1EN-U6joBTFsKpuuCTpRLvm6eM0CsOdShhawnSEHlKeG3wvd6wZQHq8II9O1WdDdNd08K6gk4P6G9grHZTfctHAKXrGVEGy-FkMRbHRYdN0q8El-tpFXcCXAjGyEVhtb0MrwFiiICnQjijHRFTIlTqaEopJLkeVe4p2lWz5qIKkRcm9SqhnIYqGSdG_pqwF1YvYqnzdQ=w405-h400-no)");
  $("#xSelection img").css("border", "none")
  $("#everything").css("border","2px solid black")
});
$("#lava").click(function(){
 xName = 'Lava Lamp'; document.body.style.setProperty("--cross-image","url(https://lh3.googleusercontent.com/Zi0H1DALDDlIlEegNS-RqoYMW_RvlmWAjpIoGA5IFSA3zlPwia2ebIjGnuiwNMjS6aMTwUAzLhYjsRepwh4gzKj_Is0saGpVFu7RPw1M-JpOywdHFuCjwdn3lmbtI1vP-rj-9mVSuCef4MuK8UNr8suh1MOxBRFa7xFgtTQkN-CpYCCVgS2huQYQtk7bSalBtrwIz_uieN3G-oEK7vMl-ST4-qh6Y8H1SQRlyUs_Lz4jBRJ1IPw4oE_HLvco_RpuDrl1LkHbtE760NkVs4VJuAQ8bSv_PwF1sXANvt_l9-Bg5Ch3fDt9JXODl2EA61M_OtVXi72ogjeYHEjjfnbD1Lu9OUYTHuQIRl1BK1AD6ZnxPTm_HM2lIq1e4uFti8QJchSav7lrfYYcMt-M4qIfKruZ7Hrw9S-ywznxEs0EJ9-5xZpY7mBOEdI4PvM39GkbINeeaBOEZZJsAfQynYXx02sA0QHpqHPAFLmOUCmOC5VvH6KUG8sL3DqZVMF6qcYoV4pwDgCDx_DSWieQ4yaLOPGUtml8ZUBGk08KgXZeD989NKdMZR2ySzekv1ZaRWZ2WFk8XPWX61zDbKc9cghr7hhqxlOBiwWs4D6NiNPhR9hIzSkmbrmX0i0B5gZLFjO3_fT3T276q8iRuvR04s400164pPWd13JRwA=w296-h300-no)");
  $("#xSelection img").css("border", "none")
  $("#lava").css("border","2px solid black")
})
$("#snow").click(function(){
 xName = 'Guitars'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/YOmI0Q5IkEZScupwFQgkBuyfV_G6EXM5hntajq42ss-Jp40QLXsUjMpxLAFVZ5QJZEoxf2_Tncokyd5QVL3pmGMQL5B2BJb_evvTd0q46WiOWYzDHyEyAt7_Wk-SGNJckhuwHaMhF1hcKHAX6nKGU9gnKGXvHKWarme58SRtajVGzWG0qMW06zMcEFiHa1QG-thUvb2PePcHqUt2qftCBeiQMMQSwlepnBLMWrHXY5EeXnhijcjU32Qny3sNZnFcJcM39FA4qnuznb7hEZugeG9mwvEYO3_CFwH41UllvicoJwarmRkIklTv_i04xuOQYPBJpfFaHWl36CSfxeb939c7_3oLA3CjL14LJK7GoAyo8lX4wOGvPgMaz6PG2jcSuZVezxP32mDtpAHKnqtPMUlrpV4RFCCPtnT0X-TeOwNLGwmPYqX4DSZgRUZr---sW5VUwcN9lsQIywScGUKP-PkQ09268jmQwWKoauK9iPeEgiulJx5QvKXj3ZtCdG05n2DGA7J_-iW-EYexrkvVWtUdAsmfs3IS3b64oZeCdFNjzACv_4MDt8cX-DzroWdT4ZA-u-vn5XrgnIu-yDfXk4Q53OTcjDWJwGUgudwbuRxj9h21lP2R35hmTNVz1xybDNGWPjYBLGB8_oLerc68Yk0BeiycPGc6TA=w324-h297-no)");
  $("#xSelection img").css("border", "none")
  $("#snow").css("border","2px solid black")
});$("#bmo").click(function(){
 xName = "BMO"; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/7-oPRCvrBRBoZeYewf65ewnQbr0IvYJV-KnusjpebDrUd318YtdkdqlfzHZTGjXL6k0kHsCPE-3gi0tawy0BBXYg071WfQCA1xnBqQZLEdFnBcBn8p1JMCadvzE7QBMf7xWsL7830tsS-YS8tKTgFfBIAwFEMs2qu-RG669PVJST-0TKvYY90QrreMOeKSgUqE9SHETGVM2eo_xlUqcuNzJHkfrNczI69uwnAV4rPE53Cu1eI-KCTZsdhiTnErUfrmemezjKcInEa_yVlAvT5B3FlzEgP5fa0aaN2lodkd5ecNkc1__mknJdA5ghVFGC3OZfm038oanbO1ndtRqL9YVQkWJmgNzW6MA6n6HgQLoh1xs-0gj-KxLHDOsgDXRkLCqzsCVUhFsO7m1ULiEs5_8B-a4wtpk51I2Pjabw-HG5133rtfMVmST7U9PLZSHU0eDYlQibNetgzQKVJKC5qPkvmRkmCo5mTk5pVkCXCVC17fLByMe2WJZuHxVIhq3Wa2ObWbB_ytLS0s6I1kXFchmPsY4LamaiDcCJijB06jnkJsg8ue5l0_prD1UjtgtxmZ5-ke1F64m2lvThAc2mV5fcAEHQO--U8kt9sl1NRMg6vg2gSdj4qPJdeYZ8Rlp_8KAhTk0gNYr_jbn2ERoR3rta8NwlENv66Q=w500-h471-no)");
  $("#xSelection img").css("border", "none")
  $("#bmo").css("border","2px solid black")
});$("#flowers").click(function(){
 xName= 'Flowers'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/AG6xwYfkXh2wu6f-513RqHWfkPlb556Px7Hq0cJ4TSMVaULJwV2mRMT6vAipM0cJR0wPPOqUNGKAeoiBLXnEOLZiv1rEQpsLhae6mcsOjM0X30vK-gl6-GX7cDyySnzHxRvZmYPSjFXezUNOD5Elx-YXe439z0TQCAwTrh7e4KMCXdvwnP3g5-Qj64CA63pWKpLJ_sYOAEnR7dIln62AtP35NAWN_XDYSAqQEEAfFtn8PB97qwlJyUt9tZsXUDpwHOPSwnKJDDPAYfBte4UWd-h6LLP-en1uiGQiqCPeFomfjnHj7vlOYum3ImAUCZrRtb3cBu7d75vgiKxPFz2uVFwuwN18fQN9GJy2HS85klyyWY-tPNx3wYdirj8Eg8WJNpYAIVdipginAyr_4hDeNrhr9ESP7kpuz6-qrM3xzOZRJO5bzPRda9Bg_SrQVDTFAv0XqZN6wFqVpLtfHKmfuUeckb0sMGYGPEG-hPeg1aaB2kElUYuyZvz6I-b21NUFrqooBDNre0geGFbK8aXoRZxi7_AxsXLqxv9bVtcV4C5ZTTR8V1wVQmL8y-Y_nZHIuDtkvCp1SCs-iqI1t8nCho8_UAQp-asZ7yuQVeiwCwZHWD_2dqfsWB1Sos-8OafbZMviIZ5KjZEzpronIBFbBIk-rJMCFXlKsw=s500-no)");
  $("#xSelection img").css("border", "none")
  $("#flowers").css("border","2px solid black")
});
$("#sword").click(function(){
 xName = 'Swords'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/nh5oLTHJUJ-xKYjqFz3DGkH8EscSQvDIx7S5xCvYVhM8DMh2-xvs7FPcH1fLUKidAbJ7GtheovH-P0AOstos29XZx00H5RJ4qdSxWuyIF4LqVJlw3fyAmXSB-ZHHjF1Ga-kBBEgAVCNa9kccAMzHusG_BSMfaM8KbD4d93OXBBAvA5WVyaZ4higIdPSkF9rrgmNrouDICdTf39hAnty80sqmjBvQh_5Knjty_c1_MpfspdlwHT74SaqlcKs0U_0rHIBsq_-f_1bGeQNgIrQ7uxX3ZGRDt_LTsBfSL5JwUGmT9lLhELRv20MoiPAOcT4YsvoG9DC_86jQze-WSAbvnzn8Gt7MVL6uQuau6knkODZ6Os3eeG_j5xwmQCVf75LUwHqJQSD7jaI7WxRsqPsi0b4T8hpOPGW9oPI375GkQREejuEQUjYxASqBpf0GqMXWtQmM9BDNOpwDpjO81SOiYdN1kGm05ba1IUzMP3gZUoGettdeDXNXcfMKbIiafAA2wMH1IG8625YThS5H96WhyGk5dy2n68nQq1zTIibI15YwunCsZsznzi_0ze7aH_RcHPj3d7hChBvAeTuEWm4uK8-S5Px1LLE_OEFCy29WW8mD_Cmu4GJb9ykYX9kSK5XjBcbMZF36WOyM8_P7Y-_PJ1Nr7Zd9XN7fCw=w301-h300-no)")
  $("#xSelection img").css("border", "none")
  $("#sword").css("border","2px solid black")
});
$("#flash").click(function(){
 xName ='Baguette'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/EzjilaApwAOLQZYGwIJk01QBH0A-lTeQMFIHbw-oeCCY7UqZAU_78c03mGfhiP3urmiHWLk4dbxm0wH2ZGfyA6M8LJ9X0T9CtNcrlQmHRsO62sB-nW_oSIxtmuDa3shnwBs3-w9dVdlOYHJkAlYllGXZyFz_brZGF1szOh20-w_4d0yzdtIl9ap4WaaDU5gGJ67ZMehueAcz9VLusmR4Ah6NipQ7YvoY3OCyWShZjqMlBHCC1F6k_EAYSNZ-wiPlrsjGSwEOM15ZAUPOCGLTT3DdRxErK3BPuwoIeRHrmVrYUG1iS7IPD0DzMFd0g6VjgYNAIIKhb1Nk_UeC8U3rhYd1vs2PDa3NMlx3ZM-cUexHQeoNeEeKRjj5Jx0Pgf06NMY4kRAcqa_r349UCdBBRdzmm9R-tNkzsPtxu-zf4X8GldargXe1UDv7cbL8yBVzvKe3rVJfTWSmeU6fwco7HtHnLXLFZ0hr-cR4b0vNiPWnFmSeg3VL_Zchwqo9LsyF1GhYpsHzDAH5rv9EB569zB3pq2a_Ncr1R84slFmh7lmvOSDVkjP8Vb4bx68_bNfk7uPoyMPnRxPb8785TPT2sUdUTryALD6SttpdWTiS=s250-k-no)")
  $("#xSelection img").css("border", "none")
  $("#flash").css("border","2px solid black")
});$("#gold").click(function(){
 xName = 'Gold'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/vuilXtg6Fpex_-ZiJqs-xc1gjVoqBSReVOVdGCKKTvx1uDAlWqIn0kjDRNOPEzSOQfa6mzEM-RnOsR663yaSkV5-Qi_8bGs-cYKxUaKTUhpFantpq-f44p9RqC5SavLqO1juR0z6g8TSnFO6UxoldtxBHyOV1ze0jOHuKnRTF1-dy_XFmGwXIM-DbhTYF5pTLZ81ipz1eVVlbwZ4XcZexEa3AqHo1QPF5mTZjqU1SomALvNbPPkpKIr6AdgjeQi2Uo_6VNO0gT0w33k82UKGEdncE9hBLeICq1rBtgiILPAa2M6ce5sBUdhvIWKdFTUdTidATTK7x0cdILgJcf957KjlepBgLHYi6hx2nJ95axQHS-70lS0a_C32e-J8HjzppE0s1vpOpn3q0ySPdum0519BVeSWFMr6cmAc7FB9vT9Ft3GMc99u90GPW521qGRZWRDgmCEMj-279BH6TNZ9aAy267Ab5XjKbVddK6RYEjTiln6WvaohDYHbDoROtbtA2Hyw1UmcKWpl9zXhwizP17Nr8Z32DUuR5QBkv_oZH_Fzz2DoMTk6r3nQrGKew98C6bV6kTYVBJMjN8oOYItAdV6SGSxoIWaf_jj5vweA51nROiJDPSX3eIfrqcJtaPhy-i4vUWURGYLHaBlYNjpuEx-EePcycfk2tQ=w508-h481-no)")
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
 xName = 'Icicle'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/v0MzBnHxZvMvpU5rwrSNgyUxnBg39CIFnCCYe1amoIbsefB9x0RoUZp9-ptWrZb0ZMsJFlXFYYImPAbBntmTIye_c7kRuy48WsWONw0emwZgWt4QIwCzvj6oamUryvArAkWyRCLfg56VVDJ9qyZNIFejuednm5L4-tlMpTpmCHbeD2RTDgsfeEyx3pa_L5V5hiRxmJUhZCdPDm1F6NXZOFr8x_jcVw6mTY6vRwTQ8xgwRRZsmJpgD-jrZf1BDyYdIBt4oAYpK8fsvpdx7IhfFcNfZjEUn2QOO5aCgaUMaH3HRFRunfCCwK2wT3fqfWuNp14jRXiyztBnnqx-7RUs3FuGNa_7Mvgawdb049cYt-IO8m6ro7Lbe4GlFzed1IMvaQapTrcZ4EeCCn93npZysm7mVGThO50DpOIg0lYWweA_ecQBCpLrAh0Ba1XAE1l3VVEq1IafRPdXf3EOqw90kVuGv4_Zin88GmGKHdSM_ReVapNEavI4272t6M4FnF-yw9BrdSInsI7HfFXitlPAcj-izM69jGekRkbq5a0kwQz6m3zS_rAy1jwHZ9vfIJ7IoIRAyAeT9KAMfSPGr4okS2AFvJD_YfaUe80MbslvNHbEFXnkd8ecRHxoZGSTWIliuX23Rd8dcT7i7Np7BaFd43qs0ugZc9vodQ=w170-h176-no)")
  $("#xSelection img").css("border", "none")
  $("#ice").css("border","2px solid black")
});
$("#purple").click(function(){
 xName = 'Chili'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/wSgq0OhHZ15Zu0yHEh0OsR5nIKS4CHAR4MKt4mZTp_EzKLmxs58Vknsbkb3H6ML8EODQG23Rr3Zdhb2t1tkdbeShWitsfXONTIlWV-TY7HBb2C6c8pBhHupx4-0Dkpomd2k5c6COhRUtpLz4fCi5KPzWGQkXAs9stGTE1vYd7mFaij_oEyci5Gf4jbtLjMEzppjJLRCXKMbb8lbeOrCADcXSWcMSMczaJKphkehOsC7YaLdxppiCtQJAaZ-smJgIgydli7fyuItvByCPEIhKcEewK4MjR_0b-KCTxtbUNHzy31_CUZNIWtqVvM-1cXUa5ZCghdDQHdQm_6mc1T9ZenK0QJtyNjKwt5psbZwA_PLtTvNEPmw7uWZw8i40sdH4CsrotAvc9w4-baNQnRn0DyYfN0UwLGn0Kx_yG86BTwrugrDDkmM5j857ivs2hiLXw9XR29xzb_uIucVZVOiT_XOao_sAwuvnOpRRR5TuagXjBeAu_fk9NEJkOCJWvxT7YqHhnHOhSgCVOs83u7A8icEYS7Qkk_yTttcw0ugKtADLQbVLye_37HA1vUy1DViNa5kW8ozPuMbROEcC5qf6qASvzDYUe6e5mdnEaCe6=s595-no)")
  $("#xSelection img").css("border", "none")
  $("#purple").css("border","2px solid black")
});
$("#spacex").click(function(){
 xName = 'Space'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/62U_-fcLe9ix3OJakNDwBY5f2VJd1ESOgE79KcZEd0luAis-w4aZI2K4C9MWdym1kPPbPKcjmCVe_drRjV_ef4L4NExJYsbEnahJr-tNR6aWQLDsUjtTGwWrULEOmskmQMbf5LLw4kphZaATFpEgcxsKJWg37euPlImtXZ9yIHRdMjWrmTKnDkeFGWaXZgfDldaZaKaO4oZruGsKxSj4j_mDE9rAL_B2etKOIVImjEiGoN689AYqHTZGVhqZC9xICDR0XzNIaZ_lF9ez-ZUb-s16wD9zaXF_AgvgnDosTIf3AgP7FI2rN_QehaGu-QH5jydpojCU6HSSTtSQY8rP161LhcWlKNdHhrWaB0le4TXNb9xL-xYKqw4FBnKxxSRvYg5vEZ3hgGvRPFlIkSk8DltgHcuAx3c1bXZLcigCThUDRszgQtaWLUZ-cRWL11T4WifFyeaJlnh6S-QeqMCeRINZdkeHZRsPxO0QC-C9kMWBKKQpR_QzvCzedo-LoxtqEYm1Rmbq-MJ4zhvcYLsFRRwb0roSENID9TdtXnsM0nEQoaGgKTDkhiwnpUL4C24OE8KTLkSeQ5Zy_kicmCxWOXyC0kCZv3MG5aXGNNhx7WJVUXBtd94nKOL9SsLibK8zCVd-nHgRSmD4XDJ99kJTqnhYecNd0DyrvQ=s616-no)")
  $("#xSelection img").css("border", "none")
  $("#spacex").css("border","2px solid black")
});
$("#skull").click(function(){
 xName = 'Pirate'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/8J4HGTF_efeAvwKeUogXDHYsN7BkI_6WKcUTYZF7tztEKrQjJoszuGq4ui7G3qBecMT1BwlQ1ECeB0T5KP9ODYPt2p3TmeMDB906pw2Y2pcuAfHh47ldHrLDZ-hYIOPIbwDe2qV8uF_utEGXCXdSfwSbzPR-jnKsvK3epzGLy6TU6jZib2nHfTqFZJhQNOyAFSp5mWOAzkbm0UbNWHCRQePiwm2HtJkALH2d5N4eP1d7BERMk22A1EfG0s6rkOdnf-v1-5oEFyQowEXbjSrLmP5Qa6gT19wQJyBSN3nMA75APx6fSbm8XIvc-C_M2HIWD7ryvi1fhsGe5SZFoS8Lv_u_2txYCezLpBOU0iVfi_pQiWv5KixMf-aJ2fNN3UGc4bqfRaw5iX8ENhX66wvrjHJ0bXqirENU36YOsE4yrbppO4OEEliAfXVL5leYITB9eNd-mmHqntJhdB9RujgaqySsJHWpNPr49F6axWpXlMnHym6xnPWskHElBlQqI8h2EkSfVU7p9CRyQYldu52nfHLlR_rMz9kh_ApJDsPOhdWq5S9hPW5rQaHktPDSGoV59OtHl6LDIM1sEhKR3HLuni4RWO2LAKhMGubcqBlW=s250-k-no)")
  $("#xSelection img").css("border", "none")
  $("#skull").css("border","2px solid black")
});
$("#jellyb").click(function(){
 xName = 'Jelly Bean X'; document.body.style.setProperty("--cross-image", "url(https://lh3.googleusercontent.com/pBwdhMIvrVjJi-sQr8wP-mBwxB6hoGcQ0uyQjgR9PVi5oRd5UvlT2B2kSv1WUDpZ_jNDydkXo96Ar9N-Pet8qZXg85TiJwucBgY66PkgdajvA4fsYa6JMnXmmKlNG12Zhd0SX5Q1ypFNYJlT3NRtZrye7K0c3GcmjsYI0mbJHs3o5-iJyZZmdlaTVTcdvdxalJY4PUCJD-7vy47BENY9nIRgwOQLJWGAGRMwTE1ZQq8mV95q11iocfhzfN5Q33HTJUEjfzd0B1i58HczQS3ljgenYgWG3ek0QSvNXtmewNx1uHb3OpN2sJJmI58V7gBZ1lI7reIbLnmE0aoyYAzz12XtAkgNdo6ZtcaBcrps_wz99p3GVuGCRRsL3o1neD-4HTkAxRsu4R_jCrmssntxdRUEJsuiT8d69jJiJdGS3fMpJtubYTBtdpI4r9sEV-tUvBV3wN-iEXn9LC0mNy4X_NzNMhQcv5rBTp5Sy-BseTpKrxezIoK6oXDFLo3tW_Po10u27eGEe0ykQ9K_vnVPVD5rhx6C0G06hMEW522tmHhLnpwUJoenjTaSJZUStyBVVwhO-ddR0iSJFVuMoy4UQcIwsoNhdgt0mHmN1F7HCqtjw8QDEPavulr2D5bLqEkHD8jWVNrXn6E9IH2Z5Q6hbIInrkRHNtEgrw=w320-h301-no)")
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
 oName = 'Lumpy Space Princess'; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/eNMe6J3H5LZQwRIGbW6EpxKBxvcu5tt5LeuKGp-o3nW4dfsncRzdGR5fdxjl-3UNTAcI7MJeFt2v2YyjLdc3I_BVBQPMDVlLgrj6ymggNaCtPLSU24cb-0lxpSDEGEKhGinF5AcyAUjNAvOaqS3IkHBwwq1OgmJVvW514NxANMha4v-IbBWRk2EAiODJBSbqJ3Ua_tZCMkCakS0o0Z7gziWi7yfvla2UkBni8OttQMJ9k-2TUSrGpWFIhF50swque_IahiNmiORYhWfl615kjuPjnS-ozMHFpNIEngrM945AwqU6EyZLpUhHqQlstYm7Q0j1rKHXhqyX_z7DE9T0P4Z5tBtyHPjB73dE5Fek8vk-Zu6OYsmJAk6xoIkHfqLdiTT5ntFnsQHAP5wartjDJ4eMFR6ZPvIld5SALFSt3w8BaEPC-bpaYZ0LDVPQo1Ow2tKYMURXc12cJMndNnGsj3NoYGcs5wb9Qk1vdLNAbc0FGEGeQnmDMaD2i4Ra1xW10olM3Yb2mK4xBvUb--HHJBBhlZKxVfwwQWze2wBaaqsUscBYsWXWpBmjG5JU3l4QJ1ELSCY5LDGWFtTmO9o0s5GC3GVniqgd152hlMHCkYqCdwynM3EoVlS3-CLAZLtD9JteQF5XgjakzuS0QXVkeaLvtx1_j8ALsg=s480-no)")
  $("#oSelection img").css("border", "none")
  $("#lsp").css("border","2px solid black")
});
$("#plaino").click(function(){
 oName = 'Team O'; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/3sYfqMW-JulLOzEcudqTjMZxjHGe8Bm77vxS01UX-k1hfGg7YN40VMIn6rYGdsulo0pxI7sRoPEf1bUEE_1kUO9GHdZ2QTEw3djAowGIkhqkkoiOCUHuc2XlpYH7hnmsu5Zq5LrhRA5cpvaaSWx6aFI3Rl-jZyt-QXRbFTuvwk4dOfX6Aei37mtFOEFEubRJzkh3FRQv1yuiMwi6nIMkvkv4LqcpZscJ99bxRfO5286mz2FIiAW7prZks_qASV8qQ1J9AzAEqlc3uNDOarlP1W3nkILJ8J5J_kHhmS4Q-A2Ymub-2OyTIa5CSg8ZlaiSzftEtUfmvd0LXGmtpHSW4L4e5tPNV7lSGzD1snjIEhY-RkhHw2RnjBqF6t0xScMi5TufRGGgOmd1pPouo_3431wmCO-uqacDN7tYRSBwS2UfhDd4gULHfpwfxu8RA4eXU8ruzVWJb1n8xuRT2D4YXStfaC9WSD_tP7pO_-alh0f2y7fJlzrqjQAlp1iEiVjwxbFrgQ2vJR2RT6cEMWFzvChwJP7XU5KgLhZmzdzNV0qutA7oKIy03o3yRoeIwYsUIPWqITxQ7Y0FobOJYm5UaIFoa3pjJRVrEpN4ggJ4BNipGfN1XqQBXpfVO_X7Xy0I_Mstr8wiydsP5xmQSffnz8X-u8DY2zznZQ=s600-no)")
  $("#oSelection img").css("border", "none")
  $("#plaino").css("border","2px solid black")
});
$("#load").click(function(){
 oName = "Loading"; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/pbErzXPUcDFSdjYO0Da8PsGGZfq3pfU4aO-2m1kUJx-gWHkntjuW2DMDbdv8c6l37LBqMlUeGwiX-pbS6t-HZBTadyB5V4bs-yK_oA-rBCBwI9inpq7QmhIMI54ZmMHVDAFA6QJ0caVoRrlmP-JNzCtqchl3RtV3BDequFJTPVKhQtGKFI7HZGDB1mWwNjBVa_oWseLKjgv1os1nmFT8FZwW60EzYjkgNZ9dEqBywME0QNSsf93EI4CP8BuJz4wc0z5KpQmJuOkgPuVFWhr8wvibm9nqnFGEgHoe-ET3r5TpMU-5WcAefXNnOD4MPY20E3CN1TJxR_0qPyoLBLzZslnW8b-cKo4hLrenCBcGJGU8PtGBohlZdkBMTkNPeAFOzOt4wfXIL4BxAJNqBUy5e690R5y8DvNLwtWDr8rdZBV46sC8bsOZmiw2hYZZBkdO8bv_NElewa9tmq1YhVXgL1Kw4m63Tj8J7jco0obtrvOPdL9Cms95NPr4Z4YQjbMZ4xGFuvbOn-8Ft6MR6c6YWMna7TCiiWJVwEN3ghr6BAW0sgEO3Alvc6uPdvV52FX55zLCl4gsuNUgn4IMJ9XIzBq9rWrQTrie74e8e2iksYjCdRFOzkDDFVwPR2ggMtMPCVWJLAjOua2T1_2tqkuO0NO_JhjajA03Hg=s200-no)")
  $("#oSelection img").css("border", "none")
  $("#load").css("border","2px solid black")
});
$("#xmas").click(function(){
 oName = 'Candy Cane'; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/6ehEHfvqf1yqN68SF2MTHYBxh534uQ58CEVL4oebe-rk4Ah_CRxhUNcCmoPcbUMxHh-fSYLeE6vR28RxKfY7qva1mQjCpPzrb80sS2gxw71JRzzVxHhqJAea0aAlzGQ6CWWninplhPHtnHzaKeJegVTZuyxmZbzgcwple64LzJc426r79WqTn3GX17bWpPGkX1L4WhPcZahUFrQlf0mpqqGSXKIwKRK2TH5RBGZj47cGJYuTfuY6ndG3XtcWVr8ChCFQFf6BZyPRIaMXPjtj7scGftqDmow69JLbABmqFhfsUi7un9sKpUupaCFqB4eDHeRXF0oqbLHGc6H21GHuCZjmmWd9W8PJPGuyz97UY1q6luXgfAmTkmbVTnIUH9_XWestQ0qjwGGjVFVnajgqKKyeHIetCWvrAn4_T6shbfw7hCfWikx-c1RsgXMBbahX6pWaWAgB6-LyZZebzZA4oLu_ToWnaJL39kSik13flbDx2eDIgJGQUB6Ep__mTyrISWj5uM3_1SztaD2J2Ml8bb5MVJkbhmXZSuliO719btXSgrFOrAJn7g16ohNU51u1D4FYSjU5sKCJIRRCUS5pKQOujrLGqa2uMxqGzbrBvAkpdcfGPnA7HT05IsQcEtK34RsGC3AhayJULt66NYMperCx-RTebYDBYw=s300-no)")
  $("#oSelection img").css("border", "none")
  $("#xmas").css("border","2px solid black")
});

$("#blob").click(function(){
 oName = 'Totoro'; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/9dMZ_LYDgXBFliSyqKyo5_QcEn17Xs9-tUff8H74sX_sXFaSjfShhpzrq1IBaI7IvQnUqH3JWihyS44XHdofCRZEbQjDZtjXgbuMT76r_T1wfFUnzaTfZsLxLl9AZsA8ogdr7zHBxsR2pkiKU3xuXukxeEc6Va18AOnJnZTyzsf0Q2dh_9Sg_0GbnYl1JR8pML6LKwYAvlUHORIPfS5zhRIUdxLPNs8JjlDr9z_BBdgAm-v-Njo4Lr0C9c3zNfqUdoyu3J53FVDwiymyjliadAoytAC5LQ5y9Dw0nGc-zuDfGWi4FN0C7B1wfH9koMTZ1JV5QXWUNWKXqj4AkPqOIvWY5_vIS_a5oWNrb3XikWJMoRyC3m1ZkpL_P8sb_V3XahCMj1mXUymIPdtmtZTNkv8WxLjVOrMxt0qjfgQZp-lWBgo8BvpA5SqEMQxA8myzO2FF-lvbe70ziDOXS9_KUaA2kMpt7C77ad_yiPgIsWj9rP77NxlbqTXt5aLVW7vDNErtSAdLZfHbd5KuIf1X2AyryEUi7sedrkp_tWeNssZ0VGQLNDQ9NsPpdX7R99yeSN7TParzZ50sZ_wlP3Po9hHOkliudvLkcPLDs_ydpJWdtJ1QEsiLnWTYF87MC1GtHNGQ3U59hV28UEJqiMYiNGA1ixtNqmJx4w=s200-no)")
  $("#oSelection img").css("border", "none")
  $("#blob").css("border","2px solid black")
});

$("#rose").click(function(){
 oName = 'Peony'; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/WIGVdVRYkA56G-AcQFwLxMQ-tHXKo8XOotRF25VoLNzYQi1jwHCGfGIaDP4HkzlY8IZhZ2rDcL3fQ6UR5cWpGpOWxfZvqnYK9UDsUs_U4Fuh0JV9NB-k_xAXytx_UIqpU880Awwj6DkrNqq3K7A_wWKfscuV3dOWr6cGme7Gh3-s6xZ0_BwgpfTHMvAi5py2hwDZd50Q-WCr2Sl0ZZnOH5iI3XsZqAHXZBAdN9xIrznIVsbvxwJREB0SpT1jOaf6blLQm3TIlfKwyDoVid8U-szmZQZ5z1t9Vuf56PaFV_epUnGvAl2DDW3ZsOyq0sd3QJtIleAC_M6roCLGyNJSNv_XUsyU8YzH8LYszW1atNX5AFP9UFEiIhnlm-Lyvt552KiqzEwnNewf5Zi_zbtHMIqQsMkwYuuAUQ-VmzwjwfB4gOOAnI6GioM6HrvIc0n7VweFQaCL7U-V56Xm9jS1Y0T0HrxeL6M3BgxnjnfK15nEQvTn2Mg2b-Pxj0ykqs23wCVNfwMARXhWSQhm2EMrScaaOvsZLyVrYADBT_wjbqUD4Lq2B3--PVOVFzgWQnaQBR7WNpIO6KPl6l6F9ZwTFR-DXduHWsR-eKJxJLaecWyBlQIykF173HajgrUJXtOhuCJoOh39fVLsJjPVlxcMCzFonfAsqgjHJw=w200-h199-no)")
  $("#oSelection img").css("border", "none")
  $("#rose").css("border","2px solid black")
});

$("#lotr").click(function(){
 oName = "The One Ring"; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/7ejb1f7U-70kQzuEBaRRqDBjPyTNlvHTalH1A4BbJ4aje7wIKrihpA1IMHyCsnlaGDpyFQxvcAQUzSNhghOqTeeOsP0KaHHmkiMb7vzer7KMkioZMFt4RRIx1FaUjiIm5XmzqK9dngyhhng69gD98ESXlaTuZcdi14Mn_NuR0L22SNk8hoC-YQzFY1OUcqbDFE97AKuQwxBVNdonLMU6tC7kqZE4fVts_BowB9DlR36gXUCxWYcd71ihORF2lZUY6vLyLpCuNw8kfc5dBM-NSDwd7o7PSQoGn0SS9jw-YtrYznbUae2TYF2CUUUCCmM7ADzfknfQcat-dIMIjzo_HV_Ud4HEh9wbJ6W55GRCyyGd4hU8479_mpBvmhvMpWjlspuuB3X7Um8zgx9khzgpZ5Qe9k0KWny0-9Jo6ZCP-FOeJ7HpMeJN2WgLMQwZ0_HRuGVbFChfue7DJAR_Z--XunJTqWF8vvoOSVDCg19MV6lUOrLj9seqsnRoyibHNZ6sB2RJUU2wOvJkJEq8PBSxcYarNcUR0M_Ck0c_Iz_gcT7_O6B5SymtmfrrgW9kUV5dsPJxHrawyp3K7CHhL9jdh1qy2GI7tzd3DTHKZnIk_zPXV8c01aY2GWp7EK2U2jBbLGyaDRglxj5ZAOlaWYzCUTxC4t4_Nczm8g=w200-h173-no)")
  $("#oSelection img").css("border", "none")
  $("#lotr").css("border","2px solid black")
});
$("#orb").click(function(){
 oName = 'Blob'; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/G_ICOO5XjIAAdzxw5_xcaXnGQHUfs9ugq2B5aXidiuj4ScI-4x8zWQcfphwY8yTQYImLsLwLICynnW6LXGPS66eT7OeVv-gF3drUYdTzY271vpmrsF7do4jQD5M9TID3V8I7nJtWYW3M--rfZNSZzrVoLOEkygMtxo2NXksCxjgfuV8efNPm05HxLsTVOsmaaUltQgI30tziP7PVCJDp2D-LxhrdF4pvUGpaberuZU8MOZj_eOEQGUnOw5qhZkxEQ4hELgoDGNxgpE8mG-OmtXJIT3VYP3xqIIdeWy_RS9p8bOpw7k1c7wAQjHeKWHMY1SApehVruGVxb7636SL2KXUI6qbmyQ9P0PiUToCmLPSWBMNta_WRy_ZVrzrrwFEcrseNZEFAPHH1fqfmm2GOtSsrx6n1FrhDpQArdphxGOapQYdaJMCKvP1zEwh4Y_Ug9W-z39f40gc9rPfMXUy7_lczCc8bSexEKZxVPNLIkH4BHvqeu0OvG0ZflQXu5MJuCvePiwPcvrWJ7bsEMyKRz8GdmjYGH8iWrR72WKamnjanHTDAPM00Y9X9r5dAXRlIVtMxjIfcn43qe276w0wNhyHOXRl0nvaR-3hFWbLX=s595-no)")
  $("#oSelection img").css("border", "none")
  $("#orb").css("border","2px solid black")
});
$("#donut").click(function(){
 oName = 'Donuts'; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/uEHlT_UXL_xu2d00VX0TKUeZDgkAkm4dhLiRcc0LxlO71aWEF4ZZtkHbBWsdwp0kVgt2VUhFMfWII2p9efDMaLe2MLWEiKa0u7t3CjHS7iZJwBhXtDeVFi0AAHvLUPh1uxDYo2BJCOxQ8MK64iRWc3RYGs5TS8Jk67i-Ib1vZu0rf_0swiRwDE6prTw138FaFVNu9fCD707qzoBJLGj_lVrlKv0WX1OXddrfpK547F3vrFa5jLOzNKNsGCcuTxsLidk8sx6o1eIirc_fpN8H2qk8IprvT2R1JbWo0df19xnbvmyCryC5uRgzv5ls52AtiUlRuxgDDOemtgOB0zntVUaU69KpuXRB2rzf9oQLyncO8mRZlueZcF91wCDGNm4ZJplYXGKVP8v09Xdjwjco-JvhJE3cBz_gCjk-3zDHCZlbZIzoDWVYuHiK15tfK_TJqM-DrRNuFNVNaGcqu6bQE39xp55QDnQl408C5UebRBFnDClrwWfQs0ZpEpFoQYmtb1NyS7cmTNYnJHTiKfphEG31C1TREQLSLwq_l88MdnVsoWXnyBWxwCdd3JfS8-wlOWmsXFUlvv-Qs9O55kjw2lmPk0G9Y3savJnGL_5cMJkSK7RXIUTbRH3QSWQlqcOyV1_JtsBbTqr11kNRtFAfzkJ2ojuW9YtxVg=s400-no)")
  $("#oSelection img").css("border", "none")
  $("#donut").css("border","2px solid black")
});
$("#record").click(function(){
 oName = 'Record'; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/NKgBI0vtenDvMMZ8Gl7KUD1FHjmXg7rWfHBetg9D7ViTM8GQGtFZXYJvSMBBUDPp1Z4MlGmXX7svSPOTn0vZztKFV8wgC9HucloJluKnkQInBPj0CnK9jI6e01OpfniDVV7wrjGHt0xhOzdfqqnKXt2to-y7D5nC24-k03uiKXKgI1D4iDWnV-7eAIEQs2UggoSZTuaDZEsFCn1oV8AfBr2MWCEj_UFedG_qG9WGbKPIi0W9XRprMPNajurR3bkNbN7-POV_33dY274wTtl3phX5pOIerpUwBqzrFp0wnqRbXqFt471sKyjkUGu4KzS9Etpcj_dIirxnudCkej1CnMw_ODLQcdm7OmcL24SNDmBQzzQ9X-PDWgcDgIzkPaKTlVyRZqPHd1vUjmYu4PMhlWwp4i8X1hm0RX2m7FcNDgZNDwhsUksdkLCS1RzDoccyIqyA2BqO2H4IdrcEfyZ6361JatkpKitcBjyzM4hUet6IcYrqSyeRPqz29J28lADI6gVXq3EDuKImLR30_nPp879e-K9bY_3EZuXgAwcospqemUuGFgNi3H5v0OKDHt7S24xF80lPZZRnBOAXjZXDIq4QFStF_P87FIyopT5oqJyLAo49fS39yBHy3NWpFP-ywvhCfRd2Kdvx0f-9piCqP-FxAE9x-ya1Ag=w395-h400-no)")
  $("#oSelection img").css("border", "none")
  $("#record").css("border","2px solid black")
});
$("#woodo").click(function(){
 oName = "Wood O"; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/L3KwzsbLrIjnrWXkvLnnDUfbxuSR9isukty2EcL3_qlqJG-b_opiKQM_2lkf_sQci7YyjpRwYtuxKhW2sp4sZ6IO8LMQyBEckv9RDKtW_CQI2kfWS6KcoFGHpzytuCpKmEk_GN5Clq2aXRR6lmnNCl89Ra2oQm1hpdr0FBqCy8AOLo7AN-ONSAQlsDyWw2GpC1nevtGa7ywYKXhOqdoJXyQAXwu56OTg9LQqpJ5nl60VAi7BsnJQwMU60naZ4TpFSimEcmMztcNaQfeioH7fVOcHGYR2x9BNFdlpAHo2f8RoXS2G7Jo6ytxqeIM4Eshbc7ZwS3En4mGb4dhrraMsRL8A3KpEELNxRgPJCZS68i_wWX2IppSWwaezLBpNfeZhfhwtTb5GLCgT_4oMFZeb0SEWpr8bVqxOACyHJV0t98aIJ_dw-okWjIqrecAPNlyy1n2uWUHyZXAuDeyJIsqSLjTBpPA1li0rnwEVVYklzUNDtpmSBoJNO9tXZPuSpiq3Jg1twmcwZTX0Fr286C7ud_D-BbTsUYNRi19o9GRfUnIyWKM1i6rSQSnPM1-np57-LGSHmXgnTKd0vSApSLZwoUx0t5gr4adOmkbA7MKj9qTMT1nTOFpfGBcCttw8IWWOnaSrg2x2lhu_aubkMeL0JVcn22rT8a3ZUw=s320-no)")
  $("#oSelection img").css("border", "none")
  $("#woodo").css("border","2px solid black")
});
$("#shield").click(function(){
 oName = 'Shield'; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/ZKndUUx2h7S7mo2bY0syuY3XVzgyAJXwyQWpBU6c6Hku2HfiT3sUasdvDDfNT6U9ZiJQFk18PXGCNqaWXHaVhKzjvfkV5zpLtoLuI53RDQ0rwURA5Ul6Z_tuI8nMY-GD7BdMVLiazbIQQ0SPfK2PHHpUwA2EvpXx85jdP08Pt83X6N0kpjy5b9WKk472LcWaEOCXfhyJe9lfJamjDIdgZ_P8F4xaScN-9wm8MjqGHVjg7-SExu0YtestXf5AcSLusHYNzX48uMcE_sdMqPcnBj2mjEeY2pUB2Z9bE9nBp27bjR28s3j8fTPZDJsFGKSdsq_z_mde8_QLBVaEuA1P_wH44Sx1tkYuPIvN4YKVGyPw3x6ZzHpq9I5sdNiAnsvlUs_6vkfKEu7QT46yozPMpjbs2ky9NS1P6XpZi4wW6eaZCGMwweJ0mt9taznkFiNeROjFP4L_T4iihpH74PRdj90s24SDbm4HJyclMjCk7Ock9iIG1XU4_ZE52MVyybUB7h3RaVf9ACqtIpf0lg2kw_p653znXJq3sYvuzZ40lOePnSd1vHvES8QP5CiphnLq8KMR__qjmtwFOKkoPXN5fvM51eVoPY3RQUeq6HqddRrwMT0h4YaQPjZ5gmSTdT8cee51n3tlb3umOGP_tJ19Q5uFEHYyWoHCKQ=s200-no)")
  $("#oSelection img").css("border", "none")
  $("#shield").css("border","2px solid black")
});$("#space").click(function(){ oName = 'Gondola'
  document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/GTzl3P8Il1r6E_ND7gdW9LIrwOkrREpaR-a5-mD_OTWkEb4zbcny53aLTse0-ARsUJcePLdursL1QjfGt_U4pu6OJFzFP72NnwOoXEaHo9IylwueTEiRUZcIr49fSspH7N8NaKqSR9ynyTtLnJVYS3h4BSO5d-nhmVWty4dlfUKkc1ER1KRBrFI-jeuoW-h_Edn1RjGvZvV0y6Ns_ytmxbGeB1M_1s0NqcYNpvROdmEcSGDpo3Fifd9tfJTuhmJsCLb7oFHqwpWJvQZ4dXz12mgLsERxddoe8qKT_pZVpIIVloX50g1JBcsPMSX_Q0lvrTOPqyFsPTFnsjL5h3lpHHxa9K6rqSSYDNLIOh25j5Z3d04j8MJfLHQvvYxNxf36BFDCTZCYNwOv1pYBn41Jp14P-qZzl_DppwirsuzrfpTLAzHB6qM4UTHmcfsJ5CyoumAkcfJYQdUzEaa8XCfqvL6aX-cRS-L-VYZD_HSz9BqlgeTT2PJXSpTNZNRz1mvM_4hxQnPkgUl9slw5e4pXsBSUr7QQrzUSuSpdMH9zbs9yPoz5lPlO5iUrVo9cBZbd-izLluudhJbZIddtBBWrLANXaXJ-ZzCfPEFPxbjsatQ9Xe0aOwin1tIAynYlG9kG8PWfnEARoJteuNJSL9kBWtalgtqJ0ko9Nw=w257-h274-no)")
  $("#oSelection img").css("border", "none")
  $("#space").css("border","2px solid black")
});$("#happy").click(function(){oName = 'Tea Party'
  document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/LdU3q11JlVNXOXUtAIrdOGanlkl-r9TqWsgfCJtt8ZdYl5fN7Xf2zfu490bqH3KlyfSft_ZOprMA3fwCUtgGbt_kAZwLVvcmw3REaLxr8KvzrDBXWdvwtDR1pbI2UWlX5PwfFr60_qRLObkppc8cGOlQDRMACd185iwoMBY5xfna-nH5HUTX1a2cqfqgNaBHI2e0d8bLXmEMWyg6W1XH09az1PVEIQLu-ztzMsMk5J8zmSUlcT1_XaLr7HKy9fIB7FOwlWs98vAnaNWh10NN7-Pq_E71QgYnAMVKhW0MYyLTqTwgknifMFNNuwUNOclpcjES8EMbcqzk6-kmBdUzk5TTn03bZVP66NV4dFDToPbHB_mYVVF0CmsZrsxZxabPc-a-gwtqXGY6gPpnvPfuwTO1I3awX_xKAKqLL5BF0rVNDBVFysADJ3yaghPp6CM59SAIgP2a4naRAzZIfWpfCYqmQEdE_kJQYrWIgju-C1FWMNh6dGueBmYX929S7clpEdZgNxlDUeATRvraHVG9JqVuhxgGnIK-HrOgOylJg4eLD9nm68Pieeoazgo-6q_z_UEHQD3K0fMGDN0EjAPZj9-7a2xVf_YM83OSTpD-=s595-no)")
  $("#oSelection img").css("border", "none")
  $("#happy").css("border","2px solid black")
});$("#stars").click(function(){oName =  'Stars'
  document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/xmxUXlpe3w-ezOcXnQ525e3PbyPfUrVSISP9w4E9yjfvflmXxXgag5xaqQlav2PT9T4D8gV7bnJ4fQd9AoYuEiBEUY8VLW8yFJXIF-sOGl4L9OFfgOHiR6yVFG-xOtHHTm3uQ5IvxqPWWDaJaWfEt5ulW8J45p_RKd_ruY6bLzSkNU67qPFv3tsB_N3OgXXuSn8C8jX4IVKejJrYLPaTU65UMilLhOF4eeiiu_7lRukWwIk6mxWHAbqv8U_vHRAhtgkLgO1QFQyaVy3Qtndjfe3nAB9q4ZOetLHp9JTum2KdBUryqortkJsRbL9M_km5qsLDKsxw7z2ezIhLdagw5fL0YtOEsHHTYSGbmyFP5kZwMO2k7EMqXUJAtkQ4nz9WSUQcTJT6YcXz_TXptorn4TAYmOrzadB3uKHJf12u5SKUTiK8_sMBi59CIXVHtbBj-RR-Uwt4PBOhXBwmWoA2CiWkudZE2dVIxpe0bjXoFw9QLtkigI_914igcqbEKFuuAQR2zHbktS0jMUP5jHJcbwvWcD5EVhLdLx47M_nn2OdEGDxpcTprPOdyg0hb9cyBknIOrkMh1vsKdSfQV6ePR9GOH7D1Q_8SQY9y717OUIg5troKgHoQY-fP4ybyzU8nWp5PCpI16QFXMymIiqXlFqxtYMtN3B3OPw=w312-h309-no)")
  $("#oSelection img").css("border", "none")
  $("#stars").css("border","2px solid black")
});$("#glitter").click(function(){ oName = 'Pentagram'
  document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/lurbBGWq1uIbvUWo1BXQhnlcGpcb3-sgXhsfN4-T-JiABwVe9lUiiTAeX0VYK4Yi-d0FT3c9LfMJYShrWDb0KbFSYNeXIWtoT5DS8XVVvtpp-aRdhSiunmo1ArJuKdcRCsvErTJUk6eNSIMjg5Qz-8LFQS85TC4YoIQFcVwah2tBkxFhCqCf2FsO_NzpCSYNXNqrQ3HKlXAClZpA8hUNUYzlmEpKDxVHKCfPBxj29GFWbWWASjlf-Je-0dKevvoRo3X2OiGEEdPma18lebQg5qBuQwPpGdM-ntQ6ay6ZxOAlev7fndelMnUxpTJIIREH0Dkog-8mc7tUtjuK9c8NUGTSFmCNVO4Ex-csdZOAAdOG0Wnvj98vncoqA7_jZyUVbFo5Y8l1IypczaXdYArBT0pVk9WNacOhXUDi5iPMPuc2X8rOgHZo_rits8Js1KFPfwS54oojZ863hSk7BfzBDVuhfqjNk_QdM_xEMKUfwEh0-OPj3LtwXYSnAVxO8ZuaTfSBBdF6r3Xzw32V27n0Pg9Ah7GD9Lq3eSuKUexu3YJICXXYTjng2XRNm4q2Kf6euE4opOfj9IWKWBpQWH-cL-QAZ3Cp3E-a_BKvGv-kLbFPza9DdmoT570Tow73W0vVPDit3uA3Q0NTIQ_81sAsLUfLEm3lqQNVqQ=s500-no)")
  $("#oSelection img").css("border", "none")
  $("#glitter").css("border","2px solid black")
});
$("#fall").click(function(){
 oName =  'Fall'; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/UOp89RUOqI_SZ04vYPIeNDrHzQG3jLIQLMSKWwUun1_ELoW3PjBTbfXndIlDXauwYYXRxKPGJHr_61OL7F9q4JdH90i5wNgtOTHPLA7NUrOhiyy0UAccFzq5f0jsHSW2CAFL5ShHvcedJ-QmZY-XaCCvxazwgLtpgysDuef98-I0S_W_z0QZfYc_oVs8kqWqnx1o1xM0po3mXWk6lzpxVASevt8IK_52sUHIDAQND4HIbOI26TnCxaXmOafxttvZqPAGBG-OZYoNUOXBLKk1sOilLosknb1UrcJoEw8Ff2QkRn3FQrpLKWfsoAybb7cQ02DIBDkZr8JbnUk_-kaf8fkpUh1Wlm1fH1MzDZh8NNQN5gRta9cg0cz56immB9bVFtlHrZyLmHpsaCff-DUFQFdUvqmJER982YzX5jGGuYmh6-VUTXW1mb78kQp-InSeeKAJ2aG2hrW-J0Rwm9iP1Ti3l1FRLEQPP_3O0PQGa-5Ks9qIu0KpkH0Q9zp492_UAR9jjM_L8r85g8n28mwOjUw4cyehb_FoL1ILLZp-AHzHTFftXJ1fXKCWKBoq2v6CGCm0Wpd30HIS4VdcdSiAG5QcMNn0iMy2gSgMHwnGuN_NobIzu9brwgdVT5V5wQcd47E6lMDOlKjqCeUcfhI1LPtV_9K7xzA2bQ=w493-h486-no)")
  $("#oSelection img").css("border", "none")
  $("#fall").css("border","2px solid black")
});
$("#usa").click(function(){
 oName = 'Merica'; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/Yocezxsy-KYtsh7oI9MVVhpToJokvPnmATsy1jmphHml7D4FNEwE69-bVKKLb_1yNEEAgiWYMYu__9ele-o3g3OIT6S1_bTsBgWvdJMEtyVaExhkC-LO-80z7Pwsammee4syUp0tTHgqz3WVTaJkYtvpGjON_-Zf7k3YtSzx_-KVBqh5Zmc2GzxXp0EQwcS0oVrwKEHvHT7YTe-fWxuDKZDtQFyybyT8pL4pC_Dl_I1XXzHtKYlY0QsT5tp7pzS8_KXanszZ78Ka6xhZiZ14AxKpX6Z6dsvqd5zo5ShIlfZURZjTB9OgHKpLoK8Z7BEVfZ6XO34YMUdnKnk70vypZ66adM8g5abWAt4Q9BQkvk2UK3EAAqmkfcrljAU26qdiz07pvq56nXGWiIsaOawEttyyXPfvcUTXqStZcptmuSefTRTkBfIOnyFAupGYq4j7Xe_pEHCiwosvUxE_RO1O1kNDIR1lE6N9ftP7GKPMaKsjy33jAG4qSZTkHrhWnwwdrqblvzqemTEQP2_B5xpnaHletkl4MpyT_2lsRMzsiJjO6PREhkIY9rMF-vt8C9UbbGcCuQfsG0xgcE8TvAMAjKDBBE6qz8DxhwBmbJbl7bodfS_bLqEj6BiSg-6MwyMv1R34STKDuKnkdIKA3bgm-Q9ybovhYHJXWw=s300-no)")
  $("#oSelection img").css("border", "none")
  $("#usa").css("border","2px solid black")
});$("#obama").click(function(){oName = "Obama";
  document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/wQpBAFVKoVNNgiO07TP8kcdcQv32oiGkqQt51mv0NF5eaZYw6v56k38nro3kJdnqQzzeFY6yqXDd_YE9qckWYiVC4fSEa9U53NhuCpmZfXK8IVYVF0gjVlV3eQqOKCOV9aoVhKnqL5OaxjTROBtfUjN5sX_vDxwDkfcK4ghxInhuIprn0meuqv6W_AdhQxk9qMnqbGcX8tJRq2trQH7tg1pFGD1XxP9Dc5545liZskRi_roweT31a5tVN0rNAP3g1g5R4tZ3GyTPgYtaWss43Y48tkJlD5aAdK6Z1DX-pvapBjoaSOi2IcdMW41-LDZKiHr4KNqrm1ShQ8N5mMTr7yeWr0q0xqqH42IEaQtGV1TTK76jTod5wUheBQ7HPOIGb-du1nPEI0IX3OCL-qHBy59XF_2tqqf_P8y5p_ieL8kdwLcM_XeeW07k5ZzDDWudHPNdX07Au7KvyxcPqEI4G7-MnCs8fWYbAwwnqyUv_ncH2j2izw0KKghk001MBCZbl-AFK--XKV6pBN-uljLizynyV1F1oK_VwrB3HcuEbYB91GuWewtK8yVaP8acgIMZO8Kg8m9WLa3G_JqofeXm_LP86GrH15YUgjziPM9V2tmLq27nbPqsUqgoV-z7TJsDDBFWS9WY741jvE6_JkFwJunGuxUSFgoB1A=s616-no)")
  $("#oSelection img").css("border", "none")
  $("#obama").css("border","2px solid black")
});$("#hands").click(function(){oName = 'Orchid';
  document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/Fm48KyzdOyqUXhKA5lMvXfB73_7aYgGfuzrrH3VL6Qdoh_mehhk0XiSxrLZcQcOZgP5tnymR4szNNvKyo4i8HhRMVmle6lM-Bu9-PcKYU7-XMuiyowi-dbiIVYHJ3rfsQBpZ6modu8C77IB9utjP20CqzRwcIiPQMWv1bccXXEuvovNg3SiQOxdjj-GwemQotqbljNQmdmtaiuZVmlFv5b_8l3uzvMhXJpqkTdbDEbn-O46rZSLdpGMSAFdVKvWLkTzY1MtQzwUsIcvDmnQgOCN9hI-rnZTG-MRyO6f1Tl_vx6i1mpRBVZbjz0dwwUVQdCt7sKy5zTXz_G0FPWEEXdgVbziFLh5pxdxhsIGxFKvcw2gb0ds7Y1KPaMJ_TCurWpOFcfcQbsYV2FC_TdWt5zdd6ThHx_imqyoIp01GvcmUjkgqUnlIlMx_Ew-05sI_YQdUrdyNUsnLc4-Xi__ef1I-dGGr2V0uMwTc4BTCkbCeqUiK6Ji_15f9nGt311PeRjQQGzRlKdk7oEho8-2rlcfm0embWVdB9ZxVuqLfxcXLEF9OaaQv-DvxbHCjnYTi6TrLTOa6c0fRJ58xjiPPUaUOex3118qOM-J0YFBd=s595-no)")
  $("#oSelection img").css("border", "none")
  $("#hands").css("border","2px solid black")
});
$("#roses").click(function(){oName = 'Roses';
  document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/hoRVcmmoJ-pK-Oj1Qd67eqn6BsAE173VmGESGcmV2EYuQpkAAQUmlBs8YavLCMhAh84-aIO8tzmpcKjzuTJtAZqvrR3jE2CU-9TOXzrSDWitkiqjJVHFUId5xQ-XDv-ZjHMGmmBxLG6pgEhYFx-8B3MDdu8HUsgOp5ELMwDaSStU3ALGqzXNiPfleQOxC10tOrc52Rmo9HCEq-43aXAOIkjMdCTYYfQLej2bZ-vOOF27EbShNaak_nez8j5AwEaLSdYl19oUsrClT51nbqCuK_17SCd37HTr5krjSoQ9P9_zIdgtAMCaM01xqB0VxBUD9-AzCgx-gJ9RdUUJvelFgEqGYENZk5hSOcqlwqDB57of69bGYrdcvyLN7rCoGsF-QTFIK0qfiKH7DHE07hAObgBDCNe_kfFSfhMPcMW6ROpyKaNgiLT5KqUtVmBy12L88O2TimRseEIe28vtvxdIHvSaptdgWGgadG4_oGe-8l_oZsLQAPIupbJZ8tL_BXJETjuN8HlbHPU2cHodBrq5vb1LkhcKQZf8qK3niHnETNvaQ7tKBLUZA2KLEcUJ11Osy4cr_ASc-pdcYA6s-roZt6sMlz-UCCJO7kKg8Uf7CycvWyTrXHpMHDLnCcH79Zt700dBSbumuYjhhUnHi8ZCitF_COLCRdddvQ=s300-no)")
  $("#oSelection img").css("border", "none")
  $("#roses").css("border","2px solid black")
});
$("#jelly").click(function(){oName = 'Jelly Bean';
  document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/Gycf538O7MAWlZq3TEjpmLE7GXXbXcwfrJ2lQ6ZVIInWEtXmGDTGYzXRg-rqKFgoELo_2OUh6Q8W1ggKsffbKcBlcfy_n_OqYZidW9maYUq76ASMF99MRnk6jEc0kD_UkCa3jurfzJLj3w0O7SI2VbxkYdlxvM3REKKDMZoOK_Mv2EwoKiZphvPOKX1CKO4Es994EM876RXZm4wVry7966sRTpQ-noYCMUtX0boEL8dNszQBOLyjw7nZagYQhPPq1t8Bq4IrY7j77UJqQwPXXzNlUM5GrXfICibf0ZMcwMRJJMV672O7cJJ2BqzRWSzje8_pCIWDw8EPv5eDXuCTFXf94oiyRCMrjKzd-g3MCjBKolhJ8a1uPFogH5ZZsWg7HQxwBL6P1aUhfY5bUE2HZ8YbALQxI8x4inVt75tW5CGQWcJHG7g6qk731NsxXXsQ86ij1aCDq6vC-qqrKiNp36clEKhnZdHgbNZsrA7Cp99O-Fi_5q4KkRDK7bGZC2Aj8dXcWAtkLWzOIffYTpqubbokzwXBeoyUy-d60vBU-dY5hVV3T28QS65VsjDOXF_b2jAwlagKu9OhDcmMDQkHYYzEIt31UrRWBCbVsVKoSkJvDIHzgFqMHxtGUxxZ-lBL22WlghlZcF6ObmxmzelcIwhOsIvQdgVisQ=w320-h301-no)")
  $("#oSelection img").css("border", "none")
  $("#jelly").css("border","2px solid black")
});
$("#sail").click(function(){oName = 'Lifesaver';
  document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/7tl58fgRwAjaZiOT1X21ci001CkfUTZXHetneutjQ2vOdyFvoS8JhCG7hiOihArrPymTu7JOL3Hhp9pq7dYWgELenwkb5mXdBAedBdaMziaU7oIMRUAjSdVsNinBxoQXbOtx2hjnLegfQKqzWESCY_AnZhjY7f2K-sfO5TmNVM9LiqhLGCHwXblZ6AMiJE917rs4rIYHBVGahQzq4CvHlacEdRHA_WXm-E8mOFuiliMprgwObtPBIr-OzpYauvDm8Xs77VYWHjCo8ZLfklH6-qzHKO2WNcI-bzuIFA3O-pydnHQHSfPng6QylSzKIuisa_Qc75Le8C-ZjshPraUGFOE-36P5sxStj0njQ_ZU06b7LEt7yvDdm2JlaWeBAwTLYw-fqa03vFOSJCU4w3C0mtr8UE3IZDLwamVX6NbxAiy9K-Dt0sqlb6hmxzGaFdRNCMNQMXr-364qlqTAORoxzVQiyXPOSitBrmNg5zLYJsj7HeSg9dQ1Q8sCBbenbVs1pV2FlfuDN0k6hRSvEytJzFBWj1pl-MP-3cfV7eBNxrZT7DIHcHWXdTm0Mq5V6op31Qe1CbjeGtcTLopquUcDRiKE4T6-clk6QX2y7O_82HvRTVMZcDlw4_EonMGDhgO6jun4-dN7C6b_cPsoKmKjuWjAO0VVZIGMDg=s304-no)")
  $("#oSelection img").css("border", "none")
  $("#sail").css("border","2px solid black")
});
$("#lifesaver").click(function(){oName = 'Candy';
  document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/sVv1-HRV5U8PIoZLN9cfep01-_y49OhEYoQdtaQx66lJiBundBSbbsLOdrEFDram1tdAbTobLLFf-a-6QPYDj3FUukU2krg2y_i7GM9L_MvLtbouR5302iX0VZ6Mj12ui-34pmSa5FmGKep0A-J-FbAxa2q7AYg8AylBOotfYzbaspg_FZ3V8jzMmVFo2bnEN9nxHhdGxMTG2cBIDDsLhNPuEf7FFIIGit3_fOxQ6b8RRbHvYDmOby332doIIBFCmr4s-1gfyG24y09MtgJ0ZOE6Twe1BNxUydpW76wRYRRw-3FL1EnO-KFzdMvnk_QzM6ip2loT1r2HHUUdffUmPgEMIeBUd-VOaeJy_XusZaXcpQP9Mwpjj6QSu3yGl8BwAYYD0FmlERsIQB9xxYWOOWsYzPjbXTohbEqf0YDDO8uxRKGmtc3VwXWsBmDlLe1EyxKf6i9AyVA_6W4X-WsdFsFvrHg6tBzOQB5djSXnqMJpfdWfCvIBzFROxPlSfOnVH5FMXFcKNT9MMYqmhZVbTjIXrLV3Dl9InMRqyt04iFNjl_LvNszn2oWXTnXLEJPMwTXN4Tfqlh7PmayJkhzSV1ZBORrFrW7DMkRMZpZMqBsCBzRVjZN0AIlC0_MaFUFC1Hlr0UCJ8Z5bRYh8hEI5Ik_-V83F4Irrew=w150-h156-no)")
  $("#oSelection img").css("border", "none")
  $("#lifesaver").css("border","2px solid black")
});
$("#pepper").click(function(){
 oName = 'Fairy Land'; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/QDXrV8dZ5RM5Uh6CyA60ryhcMHcpNLTeoFhS15VDrLuFwtyr0EZLJUZrUKmskUdDWrLF_I6t5eiqrfuib25kQaWhuzXsXdkMfOTwg1-WZCMdqGq9eH62ggUABcr48orSMGJbIcJjgkk_Ihrkb6aEq0NYxAX_QJWZXGpgotMKWtJ8zVBFnNtMmUd-MefLVIQCC7r7q650chhYkHzYX7tQ0ypWuhnCvGoP6NdNYEw8fzwvpSSpT3wAUgmTcRGu2Oijx_Vuixl9bYf5n6ArbUXPZHd7hxnl9DvdwgsvLEZyHkklJ_5tF43QGXSAGDK2y2jA2e_lP82XDNhxvDknlkht9VdJDRha067lF-CjfB5oDA2mMGBkKEmK2NGtFR2-C8sfOm5Mt9Y6rI_fIeLUBXioTht-Jy1dQoLtkQ6NFGMglaRYYc_6pk40bDhfy1wn_oIyARlBrqE4RpcC-KDLx9RsA7HQG4oT4k24F9FLJyuGAnZ9u9OeKY9iKCJtFC19Td0ytnXS3BOMun-ultIcuOBZi298hjCSKnNKbE_9Vm-Aposqas4bH8Ri4nI6Mn19_TpDLHqKbw9OsGFq2Kp_SO5Kz1xIfGkYpnei8t76pbu8=s595-no)")
  $("#oSelection img").css("border", "none")
  $("#pepper").css("border","2px solid black")
});
$("#bagel").click(function(){
 oName = 'Bagel'; document.body.style.setProperty("--naught-image", "url(https://lh3.googleusercontent.com/0t4IwslPaL9tRr_xgutCXqfphw99ZtkV8dMItLkLceiXfL_qH0NLg5u6YYggYDc3omjK4BxYeNEEGAa1qOXkQrLr9LnbPTuv0nj0lGx6vbED43Vh028PTozunYOevfMOxSmmpgmGIb7Z1KLaafBkoex-87osQ7rly2PQ1yKSQshCpz-kf13I-iMrRPcG9uJBUCivGMsiiU0gzg1HBp89yDLL3jZan8jk7biNf3SNqz7Ymd4KJtUOyBP4jNp75fPOdn5tec_afyKjJCdMVB7s7GMk1E72e1ID7u5Krm3jeFU1O5H2wrO8Jysb7EeAl2xILoqSA9PH9QVOFDqXlijCjv1ONaPygbWSSqgm7Yp50wI_vTyOUbPH0VA2c36VDQB5-WArAZ2sBB3UF9FzP1jMF4nNjY7ZEcc-a4VwY7JvdcsWVg4JyL-pBcLN_7s_CMN6Yv9JnIJ7jR3xlp74ymM4cg5B0LTTFUBqrvsJ3AUW9moHjWi4mMSQ8T5Z2zIX3VMPIXYfMHNGLBMyrGCQ3Rp1ZGsIXmTZdYIfKcJH4hRlD9u3DRHMqb-EI07GdrZpevZAFbgyW2jv_VRoS2MRlBdeVDJFbBp6QlZYLXWUOFGJjp--nJx1HPgFNe-_WvWhe6Q_jeoWK85IF6Mzb_p5RvODQn5VBGB017xS5Q=s311-no)")
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
