$(document).ready(function() {
  
    $( window ).on( "load", function() {
        var uuid=window.location.pathname;
        var uuid= uuid.toString();

        var citiesByUuid =["/9a5d03d6-6e04-49df-aaa3-0d1313b13676",
                   "/c24f71c6-90fb-4d81-b271-432cbe161b17",
                   "/921f0551-354a-4758-8823-33edac508687",
                   "/2758a3a3-b741-4f7b-bc46-0b3b79d2b793",
                   "/1feeacc3-b0e4-40dc-ad38-908aa14e1db4",
                   "/163318ea-5835-46b8-8b19-7c69807b1263"];
        var citiesByName = ["berlin","istanbul","moscow",
                            "prague","rome","warsaw"];
        var loc = citiesByUuid.indexOf(uuid);
        console.log(citiesByName[loc]);
        city = citiesByName[loc];

        function updatePost(neep) {
            $.ajax({
              method: "PUT",
              url: "/api/agent/",
              neep:{
                  value: true
              }
            })
            .done(function(response) {
                if (response){
                    alert("success! now keep searching");
                }
                else{
                    alert('err');
                }
              //window.location.href = "/questions";
            });
          }
        updatePost(city);
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