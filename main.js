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
       console.log(data);
         translation.value = data.responseData.translatedText;
       });
      }
    }