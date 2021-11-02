//Class for Bear Management
function Bear()
{
    //Moving the bear with that much difference
    this.dBear = 100;
    //Accessing the bear using DOM
    this.htmlElement = document.getElementById("bear");
    //Getting the id of the element using htmlElement variable
    this.id = this.htmlElement.id;
    //For getting the offset left and top values of the bear image
    this.x = this.htmlElement.offsetLeft;
    this.y = this.htmlElement.offsetTop;
    //Function for moving the bear
    this.move = function(xDir, yDir) 
    {
        //Calling fitBounds so that bear doesn't go out of the playing area
        this.fitBounds();
        //Changing the position of the bear by x an y position
        this.x += this.dBear * xDir;
        this.y += this.dBear * yDir;
        //Displaying the image of the bear after moving
        this.display(); 
    };
    //Function for displaying the bear after moving the bear
    this.display = function() 
    { 
        //Calling fitBounds so that bear doesn't go out of the playing area
        this.fitBounds();
        //Setting the left and top properties of the image
        this.htmlElement.style.left = this.x + "px"; 
        this.htmlElement.style.top = this.y + "px"; 
        //Chnaging display to block so that image can be displayed
        this.htmlElement.style.display = "block";
    };
    //Function for bounding image of the bear in playing area
    this.fitBounds = function() 
    {
        //Getting the parent element of the image which is the board div
        let parent = this.htmlElement.parentElement; 
        //Getting the offset width and height of the bear image
        let iw = this.htmlElement.offsetWidth;
        let ih = this.htmlElement.offsetHeight;
        //Getting the offset left and top of the board div
        let l = parent.offsetLeft;
        let t = parent.offsetTop;
        //Getting the offset width and height of the board div
        let w = parent.offsetWidth;
        let h = parent.offsetHeight;
        //If value of offset left of bear image is less than 0 then assigning the value as 0
        if (this.x < 0) 
            this.x = 0;
        //If value of offset left of bear image is greater than the board width then assigning the value
        if (this.x > w - iw) 
            this.x = w - iw; 
        //If value of offset top of bear image is less than 0 then assigning the value as 0
        if (this.y < 0) 
            this.y = 0;
        //If value of offset top of bear image is greater than the board height then assigning the value
        if (this.y > h - ih) 
            this.y = h - ih;
    };
    //Function for setting the speed of the bear
    this.setSpeed = function(val)
    {
        //Changing the value of bear variable
        this.dBear = val;
    }
}
//Function to move the bear
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
//Class for Bee Management
class Bee
{ 
    //Constructor of the class in which number of bees is passed as agrument
    constructor(beeNumber) 
    {
        //Calling the create image function to create specific number of bees
        this.htmlElement = createBeeImg(beeNumber);
        //Getting the id of the html element created for the bees
        this.id = this.htmlElement.id;
        //Getting the left postion of the image
        this.x = this.htmlElement.offsetLeft; 
        //Getting the top position of the image
        this.y = this.htmlElement.offsetTop;
        //Function for moving the bees by certain distance
        this.move = function(dx, dy) 
        { 
            //Moving the bees by adding into left and top values
            this.x += dx;
            this.y += dy;
            //Displaying the bees after moving
            this.display();
        };
        //Function for displaying the bees
        this.display = function() 
        {
            //Adjusting the position so that bees does not go out of playing area
            this.fitBounds();
            //Seeting the image of the bees
            this.htmlElement.style.left = this.x + "px"; 
            this.htmlElement.style.top = this.y + "px"; 
            this.htmlElement.style.display = "block";
        };
        //Function for bounding image of the bees in playing area
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
    }
}
//Function for creating the bees image and returning it
function createBeeImg(wNum) 
{
    //First we are getitng the dimensions of the board div which is the playing area
    let boardDiv = document.getElementById("board"); 
    let boardDivW = boardDiv.offsetWidth;
    let boardDivH = boardDiv.offsetHeight; 
    let boardDivX = boardDiv.offsetLeft; 
    let boardDivY = boardDiv.offsetTop; 
    //Creating the image element for the bees
    let img = document.createElement("img"); 
    //Setting the attribute : Source for the source of the image
    img.setAttribute("src", "images/bee.gif"); 
    //Setting the attribute : Width for the width of the image
    img.setAttribute("width", "100");
    //Setting the attribute : Atl for the Alt text of the image if it is not present
    img.setAttribute("alt", "A bee!");
    //Setting the attribute : id for the id of the image with the number
    img.setAttribute("id", "bee" + wNum); 
    //Setting the attribute : class for the CSS of the image
    img.setAttribute("class", "bee"); 
    //Setting the image position as absolute
    img.style.position = "absolute";
    //Adding the bee image to the board div which is the playing the area
    boardDiv.appendChild(img); 
    //Setting the initial positions of the bee by generating the random values
    let x = getRandomInt(boardDivW);
    let y = getRandomInt(boardDivH); 
    //Setting the left and top properties of the image
    img.style.left = (boardDivX + x) + "px"; 
    img.style.top = (y) + "px";
    //After this returning the image object
    return img;
}
//Funciton for making the bees
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
//Function for generating the random number between 0 and the max value
function getRandomInt(max)
{
    //Retuning the randomly generated number between 0 and max value
    return Math.random()*max;
}
//Function for moving the bees
function moveBees() 
{
    //Getting the value of the speed of the bees from the input
    let speed = document.getElementById("speedBees").value;
    //Moving all the bees in the array to random position
    for (let i = 0; i < bees.length; i++) 
    {
        //Generating the random values according to the speed
        let dx = getRandomInt(2 * speed) - speed;
        let dy = getRandomInt(2 * speed) - speed;
        //And moving all the bees to that position 
        bees[i].move(dx, dy);
        //Checking if the image of the bee hits bear or not
        isHit(bees[i], bear); 
    }
}
//Function for updating the bees constantly
function updateBees() 
{ 
    //Moving the bees contantly each time the function is called
    moveBees();
    //Getting the score of the user in game
    let score = document.getElementById("hits").textContent;
    //Getting the refreshing period time according to the user input
    let period = document.getElementById("periodTimer").value;
    //Modifying the updateTimer according to period and calling the same function again and again
    updateTimer = setTimeout('updateBees()', period);
    //If the score reaches 1000 then clearing the time so that same function is not called
    if(score==1000)
    {
        clearTimeout(updateTimer);
        //Giving the alert if the game is over
        alert("Game Over");
    }
}
//Function for score and the longest duration
function isHit(defender, offender)
{
    //Checking if the two images overlap or not
    if (overlap(defender, offender)) 
    { 
        //If it overlaps then getting the score and Incrementing it by one
        let score = hits.innerHTML;
        score = Number(score) + 1; 
        //Updating the score
        hits.innerHTML = score;
        //Now, Calculating the longest duration
        let newStingTime = new Date();
        //Getting new duration by subtracting the newDuration with the last time images overlaped
        let thisDuration = newStingTime - lastStingTime;
        //If this is a number
        if(isNaN(thisDuration) == false)
        {
            lastStingTime = newStingTime;
            //Then getting the longest duration from HTML content
            let longestDuration = Number(duration.innerHTML);
            //If the longest duration is 0 then setting the current duration as longest duration
            if (longestDuration === 0) 
            {
                longestDuration = thisDuration;
            } 
            //Else checking if the last longest duration is less than this duration
            //If yes then taking the longest duration as this duration
            else 
            {
                if (longestDuration < thisDuration) longestDuration = thisDuration;
            }
            //Updating the Duration in the score board
            document.getElementById("duration").innerHTML = longestDuration;
        }
    } 
}
//Function for checking whether images overlaped or not
function overlap(element1, element2) 
{
    //Taking the elements and their positions using DOM API
    //Getting the values of the first element
    left1 = element1.htmlElement.offsetLeft;
    top1 = element1.htmlElement.offsetTop;
    right1 = element1.htmlElement.offsetLeft + element1.htmlElement.offsetWidth; 
    bottom1 = element1.htmlElement.offsetTop + element1.htmlElement.offsetHeight; 
    //Getting the values of the second element
    left2 = element2.htmlElement.offsetLeft; //e2x
    top2 = element2.htmlElement.offsetTop; //e2y
    right2 = element2.htmlElement.offsetLeft + element2.htmlElement.offsetWidth; 
    bottom2 = element2.htmlElement.offsetTop + element2.htmlElement.offsetHeight; 
    //Calculating the intersection of two elements
    x_intersect = Math.max(0, Math.min(right1, right2) - Math.max(left1, left2)); 
    y_intersect = Math.max(0, Math.min(bottom1, bottom2) - Math.max(top1, top2)); 
    intersectArea = x_intersect * y_intersect;
    //If the itersection is 0 or nill it means it doesn't hit
    if (intersectArea == 0 || isNaN(intersectArea)) 
    { 
        //So, returning 0 if it is not intersecting
        return false;
    }
    //Else, returning true
    return true; 
}
//Fucntion for Restarting the Game
function restart()
{
    //Making restart variable as true
    rest = true;
    //Making the length of array of bees to 0 so that there will be no bees
    bees.length = 0;
    //Making the hits to be 0 which is default for new game
    document.getElementById("hits").textContent = 0;
    //Making the duration to be 0 which is default for new game
    document.getElementById("duration").textContent = 0;
    //Stoping the timer so that previous game stops
    clearTimeout(updateTimer);
    //Changing the position of the bear image to default position
    document.getElementById("bear").style.left=0+"px";
    document.getElementById("bear").style.top=0+"px";
    //Starting the game again
    start();
}
//For starting the game
function start() 
{
    //Creating Bear
    bear = new Bear();
    //Moving bear when the keys are pressed
    document.addEventListener("keydown", moveBear, false);
    //Event Handler for setting the speed of the bear
    //If the value changes in the input field then we are getting the value and calling the function for setting the speed
    document.getElementById("BearSpeed").addEventListener("change",(e)=>{
        val = e.target.value;
        bear.setSpeed(val);
    });
    //Declaring the bees array
    bees = new Array();
    //Creating bees using make bees function
    makeBees();
    //Updating the bees
    updateBees();
    //Check variable is used as temporary variable so that lastSting time will be initialised only once
    var check = 1;
    //So, when the key is pressed and value of check is 1 then only lastStingTime will be initialised
    //Else it wont get initialised
    document.addEventListener("keydown",()=>{
        if(check==1){
            lastStingTime = new Date();
            //Changing the value of check so that lastStingTime will not be initialised again
            check =0;
        }
    });
    //And if we are restarting the game then here I am removing the bee present 
    if(rest ==true)
    {
        document.getElementById("bear").nextElementSibling.remove();
    }
}