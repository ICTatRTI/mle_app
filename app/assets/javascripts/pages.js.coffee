# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/


$ ->
	$("#login-button").click ->
		$.ajax '/sessions',
            type: 'POST'
            data: { email: $("#email").val() ,password: $("#password").val()  }
            error: (jqXHR, textStatus, errorThrown) ->
                console.log "Response: " + textStatus
                $("#login-message").show()
                $("#login-message").append("Invalid username or password")
            success: (data, textStatus, jqXHR) ->
                console.log "Logged in"   
                $("#login-modal").modal("hide")


        









    


