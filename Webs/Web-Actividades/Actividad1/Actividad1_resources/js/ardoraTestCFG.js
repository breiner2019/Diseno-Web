//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=2;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Exelente trabajo!"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts="Debes esstudiar mas"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWN0aXZpZGFkMQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Que significan las siglas HTML?","¿Que se emplea para la escritura del lenguaje HTML?","¿Cual es la extension de los documentos HTML?"];
var answers1=["MUh5cGVyVGV4dCBNYXJrdXAgTGFuZ3VhZ2U","MEh5cGVyVGV4dCBNYWtlIExhbmd1YWdl","MEhpZ2hUZXh0IE1ha2UgTGFuZ3VhZ2U","MEh5cGVyVGV4dCBNYXJrdXAgTGVjdHVyZQ"];
var answers2=["MUV0aXF1ZXRhcw","MFJlZmVyZW5jaWFz","ME1ldGEgZGF0b3M","MEVsZW1lbnRvcw"];
var answers3=["MS5odG0gbyAuaHRtbA","MC5odG14IG8gLmh0bWw","MC5obXRsIG8gaHRt","MC5odGxtIG8gLmh0bWw"];
var ans=[answers1,answers2,answers3];
var err=["Respuesta incorreecta","Respuesta Incorrecta","Respuesta Incorrecta"];
var ima=["","",""];
var mp4=["","",""];
var ogv=["","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Actividad1_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
