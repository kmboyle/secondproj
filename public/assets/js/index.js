$(document).ready(function() {
    
    var nameInput = $("#username");
    var passInput = $("#password");
    
    $(document).on("click", "#sign-up", handleAgentSignUp);
    $(document).on("click", "#sign-in", handleAgentSignIn);
  
    
  
    // A function to handle what happens when the form is submitted to create a new Agent
    function handleAgentSignUp(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!nameInput.val().trim().trim()) {
        return;
      }
      // Calling the uploadAgent function and passing in the value of the name input
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
        // Calling the checkAgent function
        checkAgent({
          username: nameInput
            .val()
            .trim()//,
          //password: passInput
           // .val()
           // .trim()
        });
      }

    // A function for creating an agent.
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