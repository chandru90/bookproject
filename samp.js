var form =document.getElementById('addForm')
// var itemlist=document.getElementById('item')

form.addEventListener('submit', addItem)

function addItem(e)
{
    e.preventDefault();
    var username =document.getElementById('item').value ;
    var pass =document.getElementById('pass').value ;
    var emailid =document.getElementById('emailid').value ;
/*
    localStorage.setItem('username',username)
    localStorage.setItem('password',pass)
    localStorage.setItem('email',emailid)

 */
        const obj ={
            username, pass, emailid
        }
        localStorage.setItem(obj.emailid,JSON.stringify(obj))
        printelement(obj)


}
    function printelement(obj)
{
    const parentitem =document.getElementById('list-items')
    const childelement =document.createElement('li')
    childelement.textContent=obj.username + '-'+ obj.pass + '-' + obj.emailid
   const editbtnn=document.createElement('input')
   editbtnn.type ="button"
   editbtnn.value=' edit '

   editbtnn.onclick =()=>
   {
    localStorage.removeItem(obj.emailid)
    parentitem.removeChild(childelement)
    document.getElementById('item').value=obj.username
    document.getElementById('pass').value=obj.pass
    document.getElementById('email').value=obj.emailid
   }
    const deletebtn =document.createElement('input')
    deletebtn.type="button"
    deletebtn.value='delete'
    deletebtn.onclick=() =>
    {
        localStorage.removeItem(obj.emailid)
        parentitem.removeChild(childelement)
    }
   childelement.appendChild(editbtnn)
    childelement.appendChild(deletebtn)
   parentitem.appendChild(childelement)

}