$(document).ready(function() {
    
    var nameInput = $("#username");
    var passInput = $("#password");
    
    $(document).on("click", "#sign-up", handleAgentSignUp);
    $(document).on("click", "#sign-in", handleAgentSignIn);
  
    $( window ).on( "load", function() {

        
        console.log( "window loaded" );
    });    
  
    // A function to handle what happens when the form is submitted to create a new Author
    function handleAgentSignUp(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!nameInput.val().trim().trim()) {
        return;
      }
      // Calling the upsertAuthor function and passing in the value of the name input
      uploadAgent({
        username: nameInput
          .val()
          .trim(),
        password: passInput
          .val()
          .trim()
      });
    }
  
    function handleAgentSignIn(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!nameInput.val().trim().trim()) {
          return;
        }
        // Calling the upsertAuthor function and passing in the value of the name input
        checkAgent({
          username: nameInput
            .val()
            .trim(),
          password: passInput
            .val()
            .trim()
        });
      }

    // A function for creating an author. Calls getAuthors upon completion
    function uploadAgent(agentData) {
      $.post("/api/agent", agentData)
        .then(function(response){
            if (response){
                window.location.href="/questions/"
            }
            else {
                alert("acct error");
            }
        });
    }
    
    function checkAgent(agentData){
      $.get("/api/agent/:id", agentData)
        .then(function(response){
            if (response){
                window.location.href="/questions/"
            }
            else {
                alert("acct error");
            }
        });
    }
  
    // Function for retrieving authors and getting them ready to be rendered to the page
  
    // A function for rendering the list of authors to the page
    function renderAuthorList(rows) {
      authorList.children().not(":last").remove();
      authorContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        authorList.prepend(rows);
      }
      else {
        renderEmpty();
      }
    }
  
    // Function for handling what to render when there are no authors
    function renderEmpty() {
      var alertDiv = $("<div>");
      alertDiv.addClass("alert alert-danger");
      alertDiv.html("You must create an Author before you can create a Post.");
      authorContainer.append(alertDiv);
    }
  
    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
      var listItemData = $(this).parent("td").parent("tr").data("author");
      var id = listItemData.id;
      $.ajax({
        method: "DELETE",
        url: "/api/authors/" + id
      })
      .done(getAuthors);
    }
  });