//Dulce Elizabeth Caldino DeNovellis
/* Looping a Triangle
Write a loop that displays the following triangle within a console window:
#
##
###
####
#####
######
#######
 */

let i1;
let i2;
let symbol;
for (let i1 = 1; i1 <= 8; i1++) 
{
    for (let i2 = 1; i2 < i1; i2++) 
    {
        symbol = symbol + ('#');
    }
    console.log(symbol);
    symbol = ' ';
}

