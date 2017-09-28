$(document).ready(function() {
  
    $( window ).on( "load", function() {

        
            $.post("/api/agent/:uuid", "berlin: true")
              .then(function(response){
                  if (response){
                      window.location.href="/questions/"
                  }
                  else {
                      alert("acct error");
                  }
              });
          
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
  });