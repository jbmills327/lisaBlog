angular.module("MyApp")
  .controller("MainCtrl", mainController);

mainController.$inject = ["$http", "lisafactory"];


function mainController($http, lisafactory) {

  var main = this;

  main.greeting = "This is a test";
  main.blogId = "";
  main.id = "";
  main.newBlogs = [];
  main.singleBlog = {};
  main.category = ["Life", "Chickens", "Faith", "Food"];
  main.showAddBlog = true;
  main.showEdit = true;
  main.removeTheBlog = "";
  main.search = "";

  main.addBlog = function() {
    lisafactory.createBlog(main.newBlog)
      .then(function(err, returnData) {
        if (err) {
          console.log("This is the error", err);
        } else {
          console.log("This is the return data", returnData);
        }
        main.newBlog = {};
      });
  }

  main.getBlog = function(category) {
    lisafactory.getBlog(category)
      .then(function(returnData) {
        if (returnData.data.length) {
          console.log("This is the returnData", returnData.data);
          main.newBlogs = returnData.data;
        } else {
          main.singleBlog = returnData.data;
        }
      }).catch(function(err) {
        console.log("This is the error", err);
      });

    main.blogId = "";
  }

  main.getBlog();

  main.editBlog = function() {
    lisafactory.editBlog(main.singleBlog)
      .then(function(err, returnData) {
        if (err) {
          console.log("This is the error", err);
        } else {
          console.log("This is the returnData", returnData);
        }
      })
  }

  main.removeBlogs = function(id) {
    lisafactory.deleteBlog(id)
      .then(function(err, retrunData) {
        if (err) {
          console.log("This is the error", err);
        } else {
          console.log("This is the returnData", returnData);
        }
      })
    main.removeTheBlog = "";
  }

  main.showThatBlog = function() {
    main.showAddBlog = !main.showAddBlog;
  }

  main.showThatEdit = function() {
    main.showEdit = !main.showEdit;
  }

  main.setId = function(objId) {
    main.id = objId;
    console.log("This is the main.id", main.id);
  }

  main.creatorFinder = function(name) {
    console.log(name);
    main.search = name;
    console.log(main.search);
  }

  main.clearSearch = function() {
    main.search = "";
  }
}


// This is the jquery for the slide menu

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
  // document.body.style.backgroundColor = "white";
}

// End the slide menu jquery

// This should allow for page breaks in the text area
// This is not ready yet
// var txtBox = $('#myTextArea');
// txtBox.keydown(function(e) {
//   var that = this;
//   setTimeout(function() {
//     $(".blogBody").html(that.value.replace(/\n/g, "<br/>"));
//   }, 10);
// });