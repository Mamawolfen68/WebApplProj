 //36 pts - Use JavaScript to change the text color to white (in the index.html file from our previous assignments).//
//36 pts - Use JavaScript to draw a black border around the header, nav, main, and footer (in the index.html file from our previous assignments).//


//these functions change the main text to white and back when the buttons are clicked//
    function changeColor() {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        const main = document.querySelector('main');
        const footer = document.querySelector('footer');
        
        //changes font color//
        header.style.color = "#FFFFFF";
        nav.style.color = "#FFFFFF";
        main.style.color = "#FFFFFF";
        footer.style.color = "#FFFFFF"
      
        //this iterates through if there's multiple links (assuming I add some later)
        var links = document.getElementsByTagName("a");
        for(var i=0;i<links.length;i++)
        {
            if(links[i].href)
            {
                links[i].style.color = "#FFFFFF";  
            }
        }  


        }

    function changeColorBack() {

        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        const main = document.querySelector('main');
        const footer = document.querySelector('footer');

        //changes font color//
        header.style.color = "#1c1c70";
        nav.style.color = "#1c1c70";
        main.style.color = "#1c1c70";
        footer.style.color = "#1c1c70"
        
         //this iterates through if there's multiple links (assuming I add some later)
         var links = document.getElementsByTagName("a");
         for(var i=0;i<links.length;i++)
         {
             if(links[i].href)
             {
                 links[i].style.color = "#1c1c70";  
             }
         }  

        //Am leaving this here in case I figure out how to use the function//
        //let myTextColor = document.getElementById("myTextColor");//
        //myTextColor.style.color = "#1c1c70";//
        }

    function drawBlackBorder(){
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        const main = document.querySelector('main');
        const footer = document.querySelector('footer');

        // Set a black border for all elements //
        header.style.border = "1px solid black";
        nav.style.border = "1px solid black";
        main.style.border = "1px solid black";
        footer.style.border = "1px solid black";
        }

    function changeBorderBack(){
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        const main = document.querySelector('main');
        const footer = document.querySelector('footer');
    
        // Set a 0 pixel border for all elements //
        header.style.border = "0px";
        nav.style.border = "0px";
        main.style.border = "0px";
        footer.style.border = "0px";
        }
    

    
