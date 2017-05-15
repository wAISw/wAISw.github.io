// Mixing jQuery and Node.js code in the same file? Yes please!

$(function () {

  var projectList = [
    {
      img: "./img/ticketsList.png",
      url: "./ticketsList/index.html",
      name: "ticketsList",
      description: "A simple list with a filter. Mobile friendly. Stack: React + Redux, axios."
    },
    {
      img: "./img/resume.png",
      url: "https://resume-ca6de.firebaseapp.com/",
      name: "resume example",
      description: "Example of a portfolio site with React + Redux + React-animations."
    }

  ];
  var ul = $('.flipster ul');


  projectList.map(function (el) {

    var li = $('<li>' + '<a href="' + el.url + '">' + '<img src="' + el.img + '" /><span>' + el.name + '</span></a><div class="description">' + el.description + '</div>' + '</li>');

    li.appendTo(ul);

  });

  // Initialize the flipster plugin.

  $('.flipster').flipster({
    style: 'carousel',
    autoplay: true
  });

});