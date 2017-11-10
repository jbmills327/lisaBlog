angular.module("MyApp")
  .factory('lisafactory', lisafactory);

lisafactory.$inject = ['$http'];


function lisafactory($http) {

  return {
    createBlog: function(blogData) {
      return $http.post("/api/blog", blogData);
    },
    getBlog: function(category) {
      category = category ? "/" + category : " ";
      return $http.get("/api/blog" + category);
    },
    editBlog: function(editData) {
      return $http.put("/api/blog", editData);
    },
    deleteBlog: function(id) {
      id = id ? "/" + id : " ";
      return $http.delete("/api/blog" + id)
    }
  }

}
