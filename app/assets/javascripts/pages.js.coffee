# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/


$ ->
	jQuery("#login-button").click ->
		jQuery.ajax '/sessions',
            type: 'POST'
            data: { email: $("#email").val() ,password: $("#password").val()  }
            error: (jqXHR, textStatus, errorThrown) ->
                console.log "Response: " + textStatus
                jQuery("#login-message").show()
                jQuery("#login-message").append("Invalid username or password")
            success: (data, textStatus, jqXHR) ->
                console.log "Logged in"   
                jQuery("#login-modal").modal("hide")
                window.location.replace(window.location.href);


        









    


