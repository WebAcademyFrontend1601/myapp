var hyperlink = 'https://publickchat.firebaseio.com/';
var myDataRef = new Firebase(hyperlink);
var news;
      $('#messageInput').keypress(function (e) {

        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          name.disabled = false;
          myDataRef.push({name: name, text: text});//надіслали
          $('#messageInput').val('');//обнулили
                  // console.log(news);

        }
      });
      myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        // console.dir(message);
        displayChatMessage(message.name, message.text);
        console.log(typeof(message.name));
      });
      function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
        // console.log(news);
      };
/////////////////////////////


button.onclick = give;

$('a.create').click(give);

give = function(){
  var send;
  send = document.querySelector('#room');
  console.log(send.value);
  news = hyperlink.concat(send.value);
  console.log(news);
  myDataRef = new Firebase(news);
  // console.log(myDataRef);
  var roomDiv = document.querySelector('#roomDiv');
  roomDiv.innerHTML += '<a class="create" href="#">'+ send.value+ '</a></br>';
  $('#room').val('');


  myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });
      function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
        // console.log(news);

      };
};