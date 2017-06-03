/*
This is empty on purpose! Your code to build the resume will go here.
*/


var bio = {
    name: 'Alpheus Masanga',
    role: 'Full Stack Web Developer',
    contacts: {
        'mobile': '+263772131313',
        'email': 'mr_sexy@acme.com',
        'location': 'Harare',
    },
    welcomeMessage: 'Hello',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'Linux'],
    biopic: 'https://scontent.fjnb3-1.fna.fbcdn.net/v/t1.0-9/23551_316884118685_4135470_n.jpg?oh=e51fc0a15a4b9365f60f8959f4745e29&oe=59E242EE',

    display: function(){
        // Do something
    }
};


var education = {
    schools: [
        {
            name: 'acme university',
            location: 'Harare',
            degree: 'Stuff',
            majors: 'Computer stuff',
            dates: '2000/01/03-2004/01/02',
            url: 'acme.ac.zw'
        }
    ],

    onlineCourses: [
        {
            title: 'Intoduction To Git And Github',
            school: 'Udacity',
            dates: '2015-2015',
            url: 'udacity.com'
        },

        {
            title: 'Intoduction To Programming NanoDegree',
            school: 'Udacity',
            dates: '2015-2016',
            url: 'udacity.com'
        },

        {
            title: 'Fullstack Development NanoDegree',
            school: 'Udacity',
            dates: '2015-2016',
            url: 'udacity.com'
        }
    ],

    display: function(){
        // Do something
    }
};


var work = {
    jobs: [
        {
            employer: 'Telone Private Limited',
            title: 'Telecommunications Technician',
            location: 'Bulawayo Zimbabwe',
            dates: '1999/01/01-2008/09/30',
            description: "Installation, maintanance & monitoring of network"
            url: 'telone.co.zw'
        },

        {
            employer: 'United Nations World Food Programme',
            title: 'Telecommunications Associate',
            location: 'Harare Zimbabwe',
            dates: '2008/10/01-in progress',
            description: "Installation, maintanance & monitoring of network"
            url: 'wfp.org'
        },
    ],

    display: function(){
        // Do something
    }
};


// interface between the model(s) & the view(s)
var octopus = {
    init: function() {
        viewHeader.render();
    },

    getName: function() {
        return bio.name;
    },

    getRole: function() {
        return bio.role;
    },

    getEducation: function() {
        return education.schools;
    },

    getOnlineCourses: function() {
        return education.onlineCourses;
    },

};


var viewHeader = {
    render: function() {
        var name = HTMLheaderName.replace('%data%', octopus.getName());
        var role = HTMLheaderRole.replace('%data%', octopus.getRole());
        var header = $('#header');
        header.prepend(role);
        header.prepend(name);
    }
};


var viewEducation = {
    render: function() {

    }
}

octopus.init();
