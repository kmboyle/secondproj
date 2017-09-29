$(document).ready(function() {
    
    $(document).on("click", "#sign-up", handleAgentSignUp);
    $(document).on("click", "#sign-in", handleAgentSignIn);
  
    
  
    // A function to handle what happens when the form is submitted to create a new Agent
    function handleAgentSignUp(event) {
      event.preventDefault();
      var nameInput = $("#username");
      var passInput = $("#password");
      var nameInput2 = $("#username").val().trim();
      var passInput2=$("#password").val().trim();
      // Don't do anything if the name fields hasn't been filled out
      if (!nameInput||!passInput){//.val().trim().trim()) {
        return;
      }
      console.log(nameInput.val().trim());
      // Calling the uploadAgent function and passing in the value of the name input
      uploadAgent({
        username: nameInput2,
        password: passInput2
      });
    }
  
    function handleAgentSignIn(agentData) {
        event.preventDefault();
        var nameInput = $("#username");
        var passInput = $("#password");
        var nameInput2 = $("#username").val().trim();
        var passInput2=$("#password").val().trim();
        if (!nameInput||!passInput){//.val().trim().trim()) {
          return;
        }
        // Calling the checkAgent function
        console.log(nameInput2);
        checkAgent({
          username: nameInput2,
          //,
          password: passInput2
           // .val()
           // .trim()
        });
      }

    // A function for creating an agent.
    function uploadAgent(agentData) {
      $.post("/api/agent/", agentData)
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
      $.get("/api/agent/username", agentData)
        .then(function(response){
            if (response){
              console.log(response);
                //window.location.href="/questions/"
            }
            else {
                alert("acct error");
            }
        });
    }
   
      
          $( window ).on( "load", function() {
            console.log("okay");
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
      
              if (city==='berlin'){
                  $.ajax({
                      method: "PUT",
                      url: "/api/agent/berlin",
                    })
                    .done(function(response) {
                        if (response){
                            console.log(response);
                            alert("success! now keep searching");
                        }
                        else{
                            alert('err');
                        }
                      //window.location.href = "/questions";
                    });
              }
      
              else if (city==='istanbul'){
                  $.ajax({
                      method: "PUT",
                      url: "/api/agent/istanbul",
                    })
                    .done(function(response) {
                        if (response){
                            console.log(response);
                            alert("success! now keep searching");
                        }
                        else{
                            alert('err');
                        }
                      //window.location.href = "/questions";
                    });
              }
              else if (city==='moscow'){
                  $.ajax({
                      method: "PUT",
                      url: "/api/agent/moscow",
                    })
                    .done(function(response) {
                        if (response){
                            console.log(response);
                            alert("success! now keep searching");
                        }
                        else{
                            alert('err');
                        }
                      //window.location.href = "/questions";
                    });
              }
              else if (city==='prague'){
                  $.ajax({
                      method: "PUT",
                      url: "/api/agent/prague",
                    })
                    .done(function(response) {
                        if (response){
                            console.log(response);
                            alert("success! now keep searching");
                        }
                        else{
                            alert('err');
                        }
                      //window.location.href = "/questions";
                    });
              }
              else if (city==='rome'){
                  $.ajax({
                      method: "PUT",
                      url: "/api/agent/rome",
                    })
                    .done(function(response) {
                        if (response){
                            console.log(response);
                            alert("success! now keep searching");
                        }
                        else{
                            alert('err');
                        }
                      //window.location.href = "/questions";
                    });
              }
              else if (city==='warsaw'){
                  $.ajax({
                      method: "PUT",
                      url: "/api/agent/warsaw",
                    })
                    .done(function(response) {
                        if (response){
                            console.log(response);
                            alert("success! now keep searching");
                        }
                        else{
                            alert('err');
                        }
                      //window.location.href = "/questions";
                    });
              }
              else{
                  console.log("p");
              }
            })
          })