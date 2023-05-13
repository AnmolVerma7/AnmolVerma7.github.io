String.prototype.replaceAt=function(index, replacement) {
    let left;
    let right;
  
    if(this.substr(0,index) == undefined){
      left = "";
    }
    else
    {
      left = this.substr(0,index);
    }
  
    if(this.substr(index + replacement.length) == undefined ){
      right="";
    }
    else{
      right = this.substr(index + replacement.length);
    }
    return left + replacement + right;
  }
  
  const splitflapDiv = document.getElementById('splitflap');
  
  const texts = [
    "Anmol Verma", "Amol Verm", "Aml Vam",  "Anol Ver", "mol era", "ml vma",
    "Amol vera",  "ol vem", "Al Vra", "nmo Vrma", "Anmol Verma",
  ];
  
  let curIndex = -1;
  
  let curText;
  let curEndText;
  
  const nbJumpIterations = 4;
  let curDoneIterations = 0;
  
  
  setTimeout(changeText,1000);
  
  
  function changeText(){
    let beforeText;
    let afterText;
  
    console.log(curIndex);
    if(curIndex >= 0){
      beforeText = texts[curIndex];
      if(curIndex == texts.length-1){
        afterText = texts[0];
      }
      else{
        afterText = texts[curIndex+1];
      }
    }
    else
    {
      beforeText = splitflapDiv.innerText;
      afterText = texts[0];
    }
    updateIndex();
    transitionText(beforeText, afterText);
  }
  
  
  function transitionText(startText, endText){
    console.log("Start text : "+startText);
    console.log("End text : "+endText);
  
    curText = startText;
    if(endText.length < curText.length){
      let diff = curText.length-endText.length;
      curEndText = endText+" ".repeat(diff);
    }
    else
    {
      curEndText = endText;
    }
    transitionTextTick();
  }
  
  function transitionTextTick(){
    let endLength;
    let startLength;
  
    // console.log(curText+" length : "+curText.length);
    // console.log(curEndText+" length : "+curEndText.length);
    
    if(curText.length == null){
      startLength=0;
    }
    else
    {
      startLength = curText.length;
    }
    if(curEndText.length == null){
      endLength=0;
    }
    else
    {
      endLength = curEndText.length;
    }
    var longestLength = (startLength >= endLength ? startLength : endLength);
  
    for (var i = 0; i < longestLength; i++) {
      let curCharCode = curText.charCodeAt(i);
  
      if(curCharCode == undefined || isNaN(curCharCode))
      {
        curCharCode = String.fromCharCode(32);
        curText = curText.replaceAt(i,curCharCode);
      }
      else
      {
        if(curText.charAt(i)!=curEndText.charAt(i)){
          if(curCharCode >= 126 || curCharCode < 32)
          {          
            curCharCode = 32;
          }
          else{
            curCharCode ++;
          }
          curText = curText.replaceAt(i,String.fromCharCode(curCharCode));
        }
      }    
    }
  
    if(curDoneIterations >= nbJumpIterations || curText.trim().localeCompare(curEndText.trim()) == 0 ){
      document.getElementById("splitflap").innerText=curText;
  
      if(curText.trim().localeCompare(curEndText.trim()) != 0)
      {
        setTimeout(transitionTextTick, 60);
      }
      else
      {
        setTimeout(changeText,1500);
      }
      curDoneIterations = 0;
    }
    else
    {
      curDoneIterations++;
      transitionTextTick();
    }
  }
  
  function updateIndex(){
    if(curIndex < texts.length-1)
    {
      curIndex++;
    }
    else
    {
      curIndex = 0;
    }
  }