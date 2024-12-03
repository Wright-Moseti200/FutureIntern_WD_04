let el = document.querySelector("input");
let values = "";

function input(value)
{
    values += value;
    el.value = values;
}
 

 
function equals()
{
    if (el.value == "")
    {
        alert("Enter values");
    }
    else
    {
        let expressions = eval(el.value);
        el.value = "";
        el.value = expressions;
     }
}
 
function clr()
{
    el.value = values = "";
}