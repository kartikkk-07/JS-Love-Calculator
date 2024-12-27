function calculateLove(){

    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    
    if(name1==="" || name2 ===""){  
        alert("Please enter both names.");
    } else{
        const lovePercentage = Math.floor(Math.random() * 50) + 50;
        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2} 's Love Percentage: ${lovePercentage}`;

        if(lovePercentage < 60){
            result.innerHTML += "<br> Not a Great Match. Keep Looking!"
        } else if(lovePercentage >= 60 && lovePercentage < 80){
            result.innerHTML += "<br> There is potential. Give it a try!"
        } else{
            result.innerHTML += "<br> Great Match! Love is in the Air!"
        }
    }
}
let btn = document.querySelector("button");
btn.addEventListener("click", calculateLove);
