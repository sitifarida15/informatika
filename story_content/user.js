function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6X1UeNDHkhD":
        Script1();
        break;
  }
}

function Script1()
{
  var audio=document.getElementById('bySongku');
audio.src="musikku.mp3"
audio.load();
audio.play();
audio.volume=0.3;
}
