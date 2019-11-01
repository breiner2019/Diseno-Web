//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Exelente trabajo!"; messageTime=""; messageError="Incorrecto"; messageErrorG="Incorrecto"; messageAttempts="Debes estudiar"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWN0aXZpZGFkMg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["cA", "UGFycmFmb3M"],["YQ", "RW5sYWNl"],["aW1n", "SW1hZ2VuZXM"],["dWw", "TGlzdGEgZGVzb2RlbmFkYQ"],["b2w", "TGlzdGEgb3JkZW5hZGE"],["Ii4i", "Q2xhc2U"],["IiMi", "SWQ"],["YQ", "RW5sYWNl"]];
var c=[[1,8],[1,6],[3,8],[2,16],[2,14],[3,5],[3,2],[1,6]];
var con1=["p","a","img","ul","ol","\".\"","\"#\""];
var con2=["Parrafos","Imagenes","Lista ordenada","Clase","Id","Enlace","Lista desodenada"];
var sel1=""; join1=[]; join2=[];
