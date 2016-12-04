var uf = {
	arr: [],
	create: function( len ){
		for( var i = 0; i < len; i++ ){
			this.arr.push( i );
		}
	},
	isConnected: function( p1, p2 ){
		return this.arr[ p1 ] === this.arr[ p2 ];
	},
	union: function( p1, p2 ){
		var v1 = this.arr[ p1 ],
			v2 = this.arr[ p2 ],
			i = 0;
			len = this.arr.length;

		if( v1 === v2 ){
			return;
		}

		for ( ; i < len; i++ ){
			if( this.arr[ i ] === v1 ){
				this.arr[ i ] = v2;
			}
		}
	}
};

console.log( "creating an array" );
uf.create( 20 );
console.log( "creating an union between 3 & 12" );
uf.union( 3, 12 ),
console.log( "creating an union between 10 & 16" );
uf.union( 10, 16 );
console.log( "creating an union between 4 & 13" );
uf.union( 4, 13 );
console.log( "creating an union between 12 & 2" );
uf.union( 12, 2 );
console.log( "creating an union between 2 & 11" );
uf.union( 2, 11 );
console.log( "creating an union between 11 & 4" );
uf.union( 11, 4 );

console.log( "is 3 connected to 4", uf.isConnected( 3, 4 ) );
console.log( "is 3 connected to 9", uf.isConnected( 3, 9 ) );

console.log( "printing the array", uf.arr );
console.log( "exiting...." );