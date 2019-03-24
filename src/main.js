let buttonLogOut = document.getElementById('logOut');
let buttonLogOutWeb = document.getElementById('logOutWeb');
const userImage = document.getElementById("userImage");
const userNameP= document.getElementById("userNameP");
const userEmailP= document.getElementById("userEmailP");


let uid = null;
let user = firebase.auth().onAuthStateChanged

firebase.auth().onAuthStateChanged((user)=> {
  if (user) {
    localStorage.setItem('user', JSON.stringify(user))
    // User is signed in.
    if(user.photoURL === null){
      uid = user.uid;
      userImage.innerHTML = `<img class="circle"src="../imágenes/computer.png"></img>`
      userNameP.innerHTML = `<p id="userNameP" href="#!"><i class="material-icons">account_circle</i> &nbsp ${user.displayName}</p></li>`
      userEmailP.innerHTML = `<p id="userEmailP" href="#!"><i class="material-icons">email</i> &nbsp ${user.email}</p></li>`
    }else{
      uid = user.uid;
      userImage.innerHTML = `<img class="circle"src="${user.photoURL}"></img>`
      userNameP.innerHTML = `<p id="userNameP" href="#!"><i class="material-icons">account_circle</i> &nbsp ${user.displayName}</p></li>`
      userEmailP.innerHTML = `<p id="userEmailP" href="#!"><i class="material-icons">email</i> &nbsp ${user.email}</p></li>`
      console.log(userImage)
    }
    
  } else {
    console.log('no hay usuario')
    
    uid = null;
    if(location.pathname === "/src/" || location.pathname === '/src/main.html'){
      window.location.replace("index.html")
      //  console.log('ruta') 
     }
     if(location.pathname === "/CDMX007-social-network/src/" || location.pathname ==="/CDMX007-social-network/src/main.html"){
      window.location.replace("/CDMX007-social-network/src/index.html")
      }
  }
});

const logOut=()=>{
  console.log('asmd')
  firebase.auth().signOut();
}

buttonLogOut.addEventListener('click',logOut);
buttonLogOutWeb.addEventListener('click',logOut);


document.addEventListener('DOMContentLoaded', ()=> {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  });

