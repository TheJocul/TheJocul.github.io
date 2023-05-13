document.addEventListener('DOMContentLoaded', function() {
    var tableBody = document.getElementById('historyTable').getElementsByTagName('tbody')[0];

    firebase.firestore().collection('days').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var date = doc.id;
            var data = doc.data();
      
            var giverId = data.giverId;
            var receiverId = data.receiverId;

            var usersRef = firebase.firestore().collection('users');
          
            usersRef.doc(giverId).get().then((giverDoc) => {
                usersRef.doc(receiverId).get().then((receiverDoc) => {
                    var row = tableBody.insertRow();
                    var cellDate = row.insertCell(0);
                    var cellGiver = row.insertCell(1);
                    var cellReceiver = row.insertCell(2);
      
                    cellDate.innerHTML = date;
                    cellGiver.innerHTML = giverDoc.data().username;
                    cellReceiver.innerHTML = receiverDoc.data().username;
                });
            });
        });
    });
});
