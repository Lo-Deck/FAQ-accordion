
const clickOnTitle = document.querySelectorAll('h2');

const sectionP = document.querySelectorAll('section p');

//console.log(sectionP);

//console.log(clickOnTitle);


/*Set properties */

for(let i = 1; i < clickOnTitle.length; i++)
{
    sectionP[i].hidden = true;
    clickOnTitle[i].style.setProperty('background', 'url(./images/icon-plus.svg)');
    clickOnTitle[i].style.setProperty('background-repeat', 'no-repeat');
    clickOnTitle[i].style.setProperty('background-position', 'center right');
}


/*Mouse Event */

for(let i = 0; i < clickOnTitle.length; i++)
{
    clickOnTitle[i].addEventListener( 'click', function()
    {
        if(sectionP[i].hidden === true)
        {
            sectionP[i].hidden = false;
            clickOnTitle[i].style.setProperty('background', 'url(./images/icon-minus.svg)');
            clickOnTitle[i].style.setProperty('background-repeat', 'no-repeat');
            clickOnTitle[i].style.setProperty('background-position', 'center right');
        }
        else
        {
            sectionP[i].hidden = true;
            clickOnTitle[i].style.setProperty('background', 'url(./images/icon-plus.svg)');
            clickOnTitle[i].style.setProperty('background-repeat', 'no-repeat');
            clickOnTitle[i].style.setProperty('background-position', 'center right');
        }
    });

}


/*Keyboard Event*/

for(let i = 0; i < clickOnTitle.length; i++)
{
    clickOnTitle[i].addEventListener('keydown', (event) => 
    {
        if(event.key === 'Enter')
        { 
           if(sectionP[i].hidden === true)
           {
               sectionP[i].hidden = false;
               clickOnTitle[i].style.setProperty('background', 'url(./images/icon-minus.svg)');
               clickOnTitle[i].style.setProperty('background-repeat', 'no-repeat');
               clickOnTitle[i].style.setProperty('background-position', 'center right');
           }
           else
           {
               sectionP[i].hidden = true;
               clickOnTitle[i].style.setProperty('background', 'url(./images/icon-plus.svg)');
               clickOnTitle[i].style.setProperty('background-repeat', 'no-repeat');
               clickOnTitle[i].style.setProperty('background-position', 'center right');
           }
        }   
    });
}
