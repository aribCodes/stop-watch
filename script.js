var hoursDisplay = document.getElementById("hours");
var minsDisplay = document.getElementById("mins");
var secsDisplay = document.getElementById("secs");
var msDisplay = document.getElementById("ms");
msCount = 0;
secsCount = 0;
minsCount = 0;
hoursCount = 0;

// the above condition is set to decrease the distance between initial seconds and milliseconds 
if(minsCount == 0)
{
    msDisplay.style.marginLeft = "0";
    secsDisplay.style.width = "14vw";
}

// initially hiding hours and mins
hoursDisplay.style.display = "none";
minsDisplay.style.display = "none";
var myInterval;

function startWatch(){
    document.getElementById("start_btn").disabled = true;

    myInterval = setInterval(() => {
        
        if(msCount == 99)
        {
            msCount = 0;
            secsCount = secsCount + 1;

            // the above condition is set to decrease the distance between initial seconds and milliseconds 
            if(secsCount == 1)
            {
                msDisplay.style.marginLeft = "5vw";
                secsDisplay.style.width = "20vw";
            }

            if(secsCount < 10)
            {
                secsDisplay.innerHTML = `0${secsCount}<span>s</span>`;
            }
            else{
                secsDisplay.innerHTML = `${secsCount}<span>s</span>`;
            }
            
        }
        else if(secsCount == 60)
        {
            secsCount = 0;

            // displaying the minutes 
            minsDisplay.style.display = "block";

            minsCount = minsCount + 1;
            secsDisplay.innerHTML = `0${secsCount}<span>s</span>`;
            minsDisplay.innerHTML = `${minsCount}<span>m</span>`;
        }
        else if(minsCount == 60)
        {
            minsCount = 0;
            hoursCount = hoursCount + 1;

            // displaying the minutes 
            hoursDisplay.style.display = "block";
            
            minsDisplay.innerHTML = `0${minsCount}<span>m</span>`;
            hoursDisplay.innerHTML = `${hoursCount}<span>m</span>`;
        }
        else{
            msCount = msCount + 1; 
            msDisplay.innerText = msCount;
        }
    },10)
    
}
function stopWatch(){
    clearInterval(myInterval);
    document.getElementById("start_btn").disabled = false;
}
function resetWatch(){
    msDisplay.style.marginLeft = "0";
    secsDisplay.style.width = "14vw";

    clearInterval(myInterval);
    document.getElementById("start_btn").disabled = false;

    secsCount = 0;
    msCount = 0;
    hoursDisplay.style.display = "none";
    minsDisplay.style.display = "none";
    secsDisplay.innerHTML = "0<span>s</span>";
    msDisplay.innerText = "00";
}