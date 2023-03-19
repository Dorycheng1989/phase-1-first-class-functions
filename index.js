function receivesAFunction (callback) {
    return callback();
  }

  function returnsANamedFunction() {
      function diel () {alert('ALLAN')};
      return diel;
  }

  function returnsAnAnonymousFunction() {
      return function () {};
  }