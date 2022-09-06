const form=document.getElementById('form');
const username = document.getElementById('username');


//1
form.addEventListener('submit', e => {
   if(! valid()){ e.preventDefault();}
   else{
    alert("Form Submitted Successfully!");
   }
   
});

//2
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

//3
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

//4
const valid = () => {
    const usernameValue = username.value.trim();
   
    exp1=/^([A-Z]){1}([A-Za-z]){3,15}$/;
    if(usernameValue=="")
    {
       setError(username,'Name cannot be empty'); 
       return false;
    }
    else if(exp1.test(usernameValue)==false)
    {
        setError(username,'Please give first letter in Capital and give name size between size 4 to 16');
        return false;
    }
    else
    {
        setSuccess(username);
    }


    
    //5
    //Gender check
    genderselect=document.getElementsByName("gender");
    genders=document.getElementById("genderid");
    if(genderselect[0].checked==false && genderselect[1].checked==false)
    {
        genders.innerHTML="Select your Gender";
        return false;
    }
    else
    {
        genders.innerHTML="";
    }

    //6
    //Hobby check
    hobbies=document.getElementsByName("hob");
    hobbyelement=document.getElementById("hobby");
    count=0;
    for(i=0;i<hobbies.length;i++)
    {
        if(hobbies[i].checked==true)
        {
            count++;
        }
    }
    if(count<2)
    {
        hobbyelement.innerHTML="Select atleast 2 Hobbies";
        return false;
    }
    else
    {
        hobbyelement.innerHTML="";
       
    }

    return true;
}