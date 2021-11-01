//Class for Bear Management
function Bear()
{
    //Moving the bear with that much difference
    this.dBear = 100;
    //Accessing the bear using DOM
    this.htmlElement = document.getElementById("bear");
    //Getting the id of the element using htmlElement variable
    this.id = this.htmlElement.id;
    //
    this.x = this.htmlElement.offsetLeft;
    this.y = this.htmlElement.offsetTop;
    //Function for moving the bear
    this.move = function(xDir, yDir) 
    {
        this.fitBounds();
        this.x += this.dBear * xDir;
        this.y += this.dBear * yDir;
        this.display(); 
    };
    this.display = function() 
    { 
        this.fitBounds();
        this.htmlElement.style.left = this.x + "px"; 
        this.htmlElement.style.top = this.y + "px"; 
        this.htmlElement.style.display = "block";
        
    };
    this.fitBounds = function() 
    {
        let parent = this.htmlElement.parentElement; 
        let iw = this.htmlElement.offsetWidth;
        let ih = this.htmlElement.offsetHeight;
        let l = parent.offsetLeft;
        let t = parent.offsetTop;
        let w = parent.offsetWidth;
        let h = parent.offsetHeight;
        if (this.x < 0) 
            this.x = 0;
        if (this.x > w - iw) 
            this.x = w - iw; 
        if (this.y < 0) 
            this.y = 0;
        if (this.y > h - ih) 
            this.y = h - ih;
    };
    this.setSpeed = function(val)
    {
        this.dBear = val;
    }
}
function restart()
{
    rest = true;
    bees.length = 0;
    document.getElementById("hits").textContent = 0;
    document.getElementById("duration").textContent = 0;
    clearTimeout(updateTimer);
    document.getElementById("bear").style.left=0+"px";
    document.getElementById("bear").style.top=0+"px";
    start();
}
//For starting the game
function start() 
{
    //creating bear
    bear = new Bear();
    //Creating bear when the keys are pressed
    document.addEventListener("keydown", moveBear, false);
    document.getElementById("BearSpeed").addEventListener("change",(e)=>{
        val = e.target.value;
        bear.setSpeed(val);
    });
    bees = new Array();
    //create bees
    makeBees(); 
    updateBees();
    var check = 1;
    document.addEventListener("keydown",()=>{
        if(check==1){
            lastStingTime = new Date();
            check =0;
        }
    });
    if(rest ==true)
    {
        document.getElementById("bear").nextElementSibling.remove();
    }
} 
// Handle keyboad events // to move the bear 
function moveBear(e) 
{
    //Creating constants for codes of the keys
    const KEYUP = 38; 
    const KEYDOWN = 40; 
    const KEYLEFT = 37; 
    const KEYRIGHT = 39;
    //If we press right key moving the bear
    if (e.keyCode == KEYRIGHT) 
    {
        bear.move(1, 0)
    } 
    //If we press left key moving the bear
    if (e.keyCode == KEYLEFT) 
    {
        bear.move(-1, 0)
    }
    //If we press up key moving the bear
    if (e.keyCode == KEYUP) 
    {
        bear.move(0, -1)
    }
    //If we press down key moving the bear
    if (e.keyCode == KEYDOWN) 
    {
        bear.move(0, 1)
    }
}
class Bee { 
    constructor(beeNumber) 
    {
        //the HTML element corresponding to the IMG of the bee
        this.htmlElement = createBeeImg(beeNumber); //iits HTML ID
        this.id = this.htmlElement.id;
        //the left position (x)
        this.x = this.htmlElement.offsetLeft; //the top position (y)
        this.y = this.htmlElement.offsetTop;

        this.move = function(dx, dy) 
        { //move the bees by dx, dy 
            this.x += dx;
            this.y += dy;
            this.display();
        };
        this.display = function() 
        {
            //adjust position of bee and display it 
            this.fitBounds();
            //add this to adjust to bounds 
            this.htmlElement.style.left = this.x + "px"; 
            this.htmlElement.style.top = this.y + "px"; 
            this.htmlElement.style.display = "block";
        };
        this.fitBounds = function() 
        {
        //check and make sure the bees stays in the board space
            let parent = this.htmlElement.parentElement; 
            let iw = this.htmlElement.offsetWidth;
            let ih = this.htmlElement.offsetHeight;
            let l = parent.offsetLeft;
            let t = parent.offsetTop;
            let w = parent.offsetWidth; 
            let h = parent.offsetHeight; 
            if (this.x < 0)
                this.x = 0;
            if (this.x > w - iw) 
                this.x = w - iw;
            if (this.y < 0) 
                this.y = 0;
            if (this.y > h - ih)
                this.y = h - ih; 
        };
    }
}
function createBeeImg(wNum) 
{
    //get dimension and position of board div
    let boardDiv = document.getElementById("board"); 
    let boardDivW = boardDiv.offsetWidth;
    let boardDivH = boardDiv.offsetHeight; 
    let boardDivX = boardDiv.offsetLeft; 
    let boardDivY = boardDiv.offsetTop; //create the IMG element
    let img = document.createElement("img"); 
    img.setAttribute("src", "images/bee.gif"); 
    img.setAttribute("width", "100");
    img.setAttribute("alt", "A bee!");
    img.setAttribute("id", "bee" + wNum); 
    img.setAttribute("class", "bee"); 
    //set class of html tag img 
    //add the IMG element to the DOM as a child of the board div 
    img.style.position = "absolute";
    boardDiv.appendChild(img); 
    //set initial position
    let x = getRandomInt(boardDivW);
    let y = getRandomInt(boardDivH); 
    img.style.left = (boardDivX + x) + "px"; 
    img.style.top = (y) + "px";
    //return the img object
    return img;
}

function getRandomInt(max)
{
    return Math.random()*max;
}
function makeBees() 
{
    //get number of bees specified by the user
    let nbBees = document.getElementById("nbBees").value;
    nbBees = Number(nbBees); //try converting the content of the input to a number 
    if (isNaN(nbBees)) 
    { 
        //check that the input field contains a valid number
        window.alert("Invalid number of bees");
        return; 
    }
    //create bees
    let i = 1;
    while (i <= nbBees) 
    {
        var num = i;
        if(bees.length<nbBees)
        {
            var bee = new Bee(num); 
            //create object and its IMG element 
            bee.display(); //display the bee
            bees.push(bee); //add the bee object to the bees array        }
        }
        i++;
        if(bees.length>nbBees)
        { 
            alert("Hello");
            break;
        }
        if(bees.length==nbBees)
        {
            break;
        }
    }
}
function moveBees() 
{
    //get speed input field value
    let speed = document.getElementById("speedBees").value;
    //move each bee to a random location
    for (let i = 0; i < bees.length; i++) 
    {
        let dx = getRandomInt(2 * speed) - speed; 
        let dy = getRandomInt(2 * speed) - speed; 
        bees[i].move(dx, dy);
        isHit(bees[i], bear); 
    } 
}
function updateBees() 
{ // update loop for game //move the bees randomly
    moveBees();
    //use a fixed update period
    let score = document.getElementById("hits").textContent;
    let period = document.getElementById("periodTimer").value;
    //modify this to control refresh period //update the timer for the next move
    updateTimer = setTimeout('updateBees()', period);
    if(score==1000)
    {
        clearTimeout(updateTimer);
        alert("Game Over");
    }
}
function isHit(defender, offender)
{
    if (overlap(defender, offender)) 
    { 
        //check if the two image overlap
        let score = hits.innerHTML;
        score = Number(score) + 1; 
        //increment the score 
        hits.innerHTML = score; //display the new score
        //calculate longest duration
        let newStingTime = new Date();
        let thisDuration = newStingTime - lastStingTime;
        if(isNaN(thisDuration) == false)
        {
            lastStingTime = newStingTime;
            let longestDuration = Number(duration.innerHTML);
            if (longestDuration === 0) 
            {
                longestDuration = thisDuration;
            } 
            else 
            {
                if (longestDuration < thisDuration) longestDuration = thisDuration;
            }
            document.getElementById("duration").innerHTML = longestDuration;
        }
        
    } 
}

function overlap(element1, element2) 
{
    //consider the two rectangles wrapping the two elements
    //rectangle of the first element
    left1 = element1.htmlElement.offsetLeft;
    top1 = element1.htmlElement.offsetTop;
    right1 = element1.htmlElement.offsetLeft + element1.htmlElement.offsetWidth; 
    bottom1 = element1.htmlElement.offsetTop + element1.htmlElement.offsetHeight; 
    //rectangle of the second element
    left2 = element2.htmlElement.offsetLeft; //e2x
    top2 = element2.htmlElement.offsetTop; //e2y
    right2 = element2.htmlElement.offsetLeft + element2.htmlElement.offsetWidth; 
    bottom2 = element2.htmlElement.offsetTop + element2.htmlElement.offsetHeight; 
    //calculate the intersection of the two rectangles
    x_intersect = Math.max(0, Math.min(right1, right2) - Math.max(left1, left2)); 
    y_intersect = Math.max(0, Math.min(bottom1, bottom2) - Math.max(top1, top2)); 
    intersectArea = x_intersect * y_intersect;
    //if intersection is nil no hit
    if (intersectArea == 0 || isNaN(intersectArea)) 
    { 
        return false;
    }
    return true; 
}