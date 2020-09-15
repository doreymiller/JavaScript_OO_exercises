const franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function (num) {
      return `${this.name} ${num}`;
    }.bind(this));
  },
};

console.log(franchise.allMovies());