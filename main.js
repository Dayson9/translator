iRender(app);

var input = app.querySelector("#in"), button = app.querySelector("button"), select = app.querySelectorAll(".select"), c = 0;

const switchLang = () =>{
let holder = to;
 to = from;
  from = holder;
 select[0].value = from;
select[1].value = to;
}

window.onload = function() {

for (var prop in countries) {
  if(c == 19){
    content+= `<option selected value="${prop}">${countries[prop]}</option>\n`;
      }else{
      content+= `<option value ="${prop}">${countries[prop]}</option>\n`;
    }
  c++;
}

select.forEach((el) => el.innerHTML = content);

from = select[0].value = "en-GB";
to = select[1].value = "yo-NE";

button.onclick = () =>{
translation.value = ".....";
let apiUrl = `https://api.mymemory.translated.net/get?q=${input.value}&langpair=${from}|${to}`;
     fetch(apiUrl).then(res => res.json()).then   (data => {
      let trans = data.responseData.translatedText;
        if(trans == null){
        translation.value = "*Invalid input*";
        }else if(trans == "NO QUERY SPECIFIED. EXAMPLE REQUEST: GET?Q=HELLO&LANGPAIR=EN|IT"){
        translation.value = "*Seems your input is empty*";
        }else{
        translation.value = trans;
        }
         
       });
      }
    }