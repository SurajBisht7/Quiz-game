const question =[{
'ques' : 'Which of the following is a markup language?',
'a' : 'html',
'b' : 'CSS',
'c' : 'Javascript',
'd': 'PHP',
'correct' : "a",
},
{
'ques' : ' Which HTML tag is used to create a hyperlink?',
'a' : '<link>',
'b' : '<a>',
'c' : '<href>',
'd': '<hyperlink>',
'correct' : "b",
},
{
'ques' : ' Which of the following is NOT a JavaScript data type?',
'a' : 'Number',
'b' : 'Boolean',
'c' : 'float',
'd': 'Character',
'correct' : "d",
},{
'ques' : 'Which status code means “Not Found”?',
'a' : '200',
'b' : '404',
'c' : '500',
'd': '302',
'correct' : "b",
},
]

let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;
const quesbox = document.getElementById("quesbox");
const optionInputs = document.querySelectorAll('.options')
const loadquestion = ()=>{
  if(index === total){
     return endquiz()
  }
  reset();
  const data = question[index]
 
quesbox.innerText = `${index+1}) ${data.ques}` ;
optionInputs[0].nextElementSibling.innerText = data.a;
optionInputs[1].nextElementSibling.innerText = data.b;
optionInputs[2].nextElementSibling.innerText = data.c;
optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = ()=> {
    const data = question[index];
  const ans = getanswer()
  if(ans == data.correct){
        right++;
  }
  else{
    wrong++;
  }
  index++;
  loadquestion();
  return;
}
const getanswer=() =>{
  let answer;
  optionInputs.forEach((input) => {
    if(input.checked){
      answer = input.value;

    }
   
  })
  return answer;
}
const reset = ()=>{
  optionInputs.forEach(
    (input) => {
      input.checked = false;
    }
  )
}
const endquiz = ()=>{
  document.getElementById("box").innerHTML = `
  <h3>  Thank You for playing </h3>
  <h2> ${right}/ ${total} are correct</h2> `
}
 
loadquestion();