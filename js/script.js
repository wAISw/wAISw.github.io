// Mixing jQuery and Node.js code in the same file? Yes please!

$(function () {


  var projectList = [
    {
      img: "./img/ticketsList.png",
      url: "./ticketsList/index.html",
      name: "ticketsList"
    },
    {
      img: "./img/resume.png",
      url: "https://resume-ca6de.firebaseapp.com/",
      name: "resume example"
    }

  ];
  var ul = $('.flipster ul');


  projectList.map(function (el) {

    var li = $('<li>' + '<img src="' + el.img + '" />' + '<a href="' + el.url + '">' + el.name + '</a>' + '</li>');

    li.appendTo(ul);

  });

  // Initialize the flipster plugin.

  $('.flipster').flipster({
    style: 'carousel',
    autoplay: true
  });

});