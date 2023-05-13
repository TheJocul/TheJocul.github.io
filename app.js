// document.getElementById('loginButton').addEventListener('click', function() {
//     this.classList.add('active-btn');
//     document.getElementById('signupButton').classList.remove('active-btn');
//     document.getElementById('username').style.display = 'none';
//     document.getElementById('confirmLoginButton').style.display = 'block';
//     document.getElementById('confirmSignupButton').style.display = 'none';
// });

// document.getElementById('signupButton').addEventListener('click', function() {
//     this.classList.add('active-btn');
//     document.getElementById('loginButton').classList.remove('active-btn');
//     document.getElementById('username').style.display = 'block';
//     document.getElementById('confirmSignupButton').style.display = 'block';
//     document.getElementById('confirmLoginButton').style.display = 'none';
// });

// // Eveniment pentru butonul de login
// document.getElementById('confirmLoginButton').addEventListener('click', function() {
//     this.classList.add('active-btn');
//     document.getElementById('confirmSignupButton').classList.remove('active-btn');
//     document.getElementById('username').style.display = 'none';
    
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;

//     firebase.auth().signInWithEmailAndPassword(email, password)
//         .then((user) => {
//             // Logare cu succes, redirectionează către pagina cu reguli
//             window.location.href = 'rules.html';
//         })
//         .catch((error) => {
//             // În cazul unei erori, afișează mesajul de eroare
//             alert(error.message);
//         });
// });

// // Eveniment pentru butonul de înregistrare
// document.getElementById('confirmSignupButton').addEventListener('click', function() {
//     this.classList.add('active-btn');
//     document.getElementById('confirmLoginButton').classList.remove('active-btn');
//     document.getElementById('username').style.display = 'block';
    
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;

//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // Înregistrarea a reușit. Adăugăm "username"-ul și "hasGame" în baza de date.
//       var username = document.getElementById('username').value;
//       firebase.firestore().collection('users').doc(userCredential.user.uid).set({
//         username: username,
//         hasGame: false  // Sau false, în funcție de cum vrei să înceapă jocul
//       })
//       .then(() => {
//         alert('Înregistrarea a reușit!');
//       });
//     })
//     .catch((error) => {
//       // A apărut o eroare.
//       alert('A apărut o eroare: ' + error.message);
//     });
  
// });

// Eveniment pentru butonul de login
document.getElementById('loginButton').addEventListener('click', function() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Logare cu succes, redirectionează către pagina cu reguli
        window.location.href = 'rules.html';
      })
      .catch((error) => {
        // În cazul unei erori, afișează mesajul de eroare
        alert(error.message);
      });
  });
  
// Eveniment pentru butonul de înregistrare
document.getElementById('signupButton').addEventListener('click', function() {
    document.getElementById('username').style.display = 'block';
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Înregistrarea a reușit. Adăugăm "username"-ul și "hasGame" în baza de date.
      var username = document.getElementById('username').value;
      firebase.firestore().collection('users').doc(userCredential.user.uid).set({
        username: username,
        hasGame: true  // Sau false, în funcție de cum vrei să înceapă jocul
      })
      .then(() => {
        alert('Înregistrarea a reușit!');
      });
    })
    .catch((error) => {
      // A apărut o eroare.
      alert('A apărut o eroare: ' + error.message);
    });
  
  
});
