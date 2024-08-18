console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {

  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  
  collection.push(album);
  
  return album;
}
console.log(addToCollection(myCollection, 'Abbey Road', 'The Beatles', 1969));
console.log(addToCollection(myCollection, 'Thriller', 'Michael Jackson', 1982));
console.log(addToCollection(myCollection, 'Back in Black', 'AC/DC', 1980));
console.log(addToCollection(myCollection, 'Nevermind', 'Nirvana', 1991));
console.log(addToCollection(myCollection, 'The Dark Side of the Moon', 'Pink Floyd', 1973));
console.log(addToCollection(myCollection, '21', 'Adele', 2011));

console.log(myCollection);

function showCollection(collection) {
  collection.forEach(album => {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  });
}

showCollection(myCollection);

function findByArtist(collection, artist) {

  let results = [];
  
  collection.forEach(album => {
    if (album.artist === artist) {
      results.push(album);
    }
  });
  
  return results;
}

console.log(findByArtist(myCollection, 'The Beatles')); 
console.log(findByArtist(myCollection, 'Nirvana')); 
console.log(findByArtist(myCollection, 'U2')); 

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
