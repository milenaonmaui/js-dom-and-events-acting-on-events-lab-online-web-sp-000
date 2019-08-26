function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation(){
  return $('input').val()
}

function addNewElementAsLi(){
  const newItem = retrieveEmployeeInformation()
  $('.employee-list').append("<li>" +newItem + "</li")
}
function addNewLiOnClick(){
  
}
preventRefreshOnSubmit()
