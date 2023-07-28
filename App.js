window.onload=()=>
{
    const button=document.querySelector('#bt');
    button.addEventListener('click',calbmi);
}
function calbmi()
{
    const height=document.querySelector('#height').value;
    const weight=document.querySelector('#weight').value;
    const Result=document.querySelector('#Result');
    if(!height|| height<=0 || isNaN(height))
    {
        Result.innerText="Please provide a valid Height";
        return;
    }
    else if(!weight || weight<=0 || isNaN(weight))
    {
        Result.innerText="Please provide a valid Weight";
        return;
    }
    else 
    {
        let bmi = (weight / ((height * height)/ 10000)).toFixed(2);
        if (bmi < 18.5) 
        {
            Result.innerHTML =`Under Weight : <span>${bmi}</span>`;
        }
        else if (bmi >= 18.5 && bmi < 24.9)
        {
            Result.innerHTML = `Normal : <span>${bmi}</span>`;
        }
        else if(bmi>=25 && bmi<29.9)
        {
            Result.innerHTML =`Over Weight : <span>${bmi}</span>`;
        }
        else 
        {
            Result.innerHTML =`Obesity: <span>${bmi}</span>`;
        }
    }
}