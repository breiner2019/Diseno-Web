//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=2;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
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
var timeOnMessage=5; messageOk="¡Exelente Trabajo! (Vuelve a la pagina de actividades)"; messageTime=""; messageError="Debes estudiar "; messageErrorG="Debes estudiar "; messageAttempts="Debes estudiar (Vuelve a la pagina de actividades)"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWN0aXZpZGFkNA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Que significan las siglas CSS?","¿Que carcteristicas brinda CSS?","¿Con cual etiqueta se referencia el CSS en el HTML?"];
var answers1=["MUNhc2NhZGluZyBTdHlsZSBTaGVldHM","MENhc2NhZGluZyBTdHlsZSBTaG9vdHM","MENhc2NhZCBTdHlsZSBTaGVldHM","MENhc2NhZGluZyAgU2hlZXRzIFNpY2s"];
var answers2=["MUNhcmFjdGVyaXN0aWNhcyBWaXN1YWxlcw","MENhcmFjdGVyaXN0aWNhcyBFc3RydWN0dXJhbGVz","MENhcmFjdGVyaXN0aWNhcyBTaXN0ZW1hdGljYXM","MENhcmFjdGVyaXN0aWNhcyBEaXJpZ2VuY2lhbGVz"];
var answers3=["MSJTdHlsZXNoZWV0Ig","MCJTdGVseXNoZWV0Ig","MCJTdHlsZXNob290Ig","MCJTdHlsb3NoZWF0Ig"];
var ans=[answers1,answers2,answers3];
var err=["Respuesta Incorrecta","Respuesta Incorrecta","Respuesta incorrecta"];
var ima=["","",""];
var mp4=["","",""];
var ogv=["","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Actividad4_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
