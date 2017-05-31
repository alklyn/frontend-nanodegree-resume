/*
This is empty on purpose! Your code to build the resume will go here.
*/
var forMattedName = HTMLheaderName.replace('%data%', 'Alpheus Masanga');
var forMattedRole = HTMLheaderRole.replace('%data%', 'Full Stack Web Developer');

var header = $('#header');
header.prepend(forMattedRole);
header.prepend(forMattedName);


var bio = {
    'name': 'Alpheus Masanga',
    'role': 'Full Stack Web Developer',
    'contacts': {
        'mobile': '+263772131313',
        'email': 'mr_sexy@acme.com',
        'location': 'Harare',
    },
    'welcomeMessage': 'Hello',
    'skills': ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'Linux'],
    'biopic': ['https://scontent.fjnb3-1.fna.fbcdn.net/v/t1.0-9/23551_316884118685_4135470_n.jpg?oh=e51fc0a15a4b9365f60f8959f4745e29&oe=59E242EE'],
    'display': function(){
        //Do something
    },

};
