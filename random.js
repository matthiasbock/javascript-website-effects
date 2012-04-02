/* Originally found on http://www.naden.de/blog/zufallszahlen-in-javascript-mit-mathrandom */

function getRandom( min, max ) {
        if( min > max ) {
                return( -1 );
        }
        if( min == max ) {
                return( min );
        }
 
        return( min + parseInt( Math.random() * ( max-min+1 ) ) );
}

