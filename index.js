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
document.body.addEventListener("click", addNewLiOnClick); 
function addNewLiOnClick(){
  addNewElementAsLi();
  $('input').val("");
}
preventRefreshOnSubmit()
