var qu = {
    arr: [],
    create: function ( len ) {
        for ( var i = 0; i < len; i++ ) {
            this.arr.push( i );
        }
    },
    root: function ( p1 ) {
        //if position and it's value are not same then you have not reached the root
        //value is the root of the current position
        //if value of position 2 is 5. that means root of position 2 is position 5
        //value of position 5 is 6 & value of position is 6. that means root of position 2 & 5 is position 6
        while ( this.arr[ p1 ] !== p1 ) {
            p1 = this.arr[ p1 ];
        }
        return p1;
    },
    isConnected: function ( p1, p2 ) {
        return this.root( p1 ) === this.root( p2 );
    },
    union: function ( p1, p2 ) {
        var r1 = this.root( p1 ),
            r2 = this.root( p2 );

        if ( r1 === r2 ) {
            return;
        }

        //set the value of p1 (root position) to root of p2
        this.arr[ r1 ] = r2;
    }
};

console.log( "creating an array" );
qu.create( 20 );
console.log( "creating an union between 3 & 12" );
qu.union( 3, 12 );
console.log( "creating an union between 10 & 16" );
qu.union( 10, 16 );
console.log( "creating an union between 4 & 13" );
qu.union( 4, 13 );
console.log( "creating an union between 12 & 2" );
qu.union( 12, 2 );
console.log( "creating an union between 2 & 11" );
qu.union( 2, 11 );
console.log( "creating an union between 11 & 4" );
qu.union( 11, 4 );

console.log( "is 3 connected to 4", qu.isConnected( 3, 4 ) );
console.log( "is 3 connected to 9", qu.isConnected( 3, 9 ) );

console.log( "printing the array", qu.arr );
console.log( "exiting...." );