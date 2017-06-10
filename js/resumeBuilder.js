/*
This is empty on purpose! Your code to build the resume will go here.
*/


var bio = {
    name: "Alpheus Masanga",
    role: "Full Stack Web Developer",
    contacts: {
        "mobile": "+263772131313",
        "email": "alklyn@gmail.com",
        "github": "https://github.com/alklyn",
        "location": "Harare",
    },
    welcomeMessage: "Hello",
    skills: ["HTML", "CSS", "JavaScript", "Python", "Flask", "Linux"],
    biopic: "https://scontent.fjnb3-1.fna.fbcdn.net/v/t1.0-9/23551_316884118685_4135470_n.jpg?oh=e51fc0a15a4b9365f60f8959f4745e29&oe=59E242EE",

    display: function(){
        // Do something
    }
};


var education = {
    "schools": [
        {
            "name": "acme university",
            "location": "Harare",
            "degree": "Stuff",
            "majors": ["Computer stuff", "Telecommunications"],
            "dates": "2000-2004",
            "url": "acme.ac.zw"
        }
    ],

    "onlineCourses": [
        {
            "title": "Intoduction To Git And Github",
            "school": "Udacity",
            "dates": "2015-2015",
            "url": "udacity.com"
        },

        {
            "title": "Intoduction To Programming NanoDegree",
            "school": "Udacity",
            "dates": "2015-2016",
            "url": "udacity.com"
        },

        {
            "title": "Fullstack Development NanoDegree",
            "school": "Udacity",
            "dates": "2015-2016",
            "url": "udacity.com"
        }
    ],

    "display": function(){
        // Do something
    }
};


var work = {
    jobs: [
        {
            employer: "Telone Private Limited",
            title: "Telecommunications Technician",
            location: "Bulawayo Zimbabwe",
            dates: "1999-2008",
            description: "My roles included the installation, maintanance & monitoring of Telecommunications infrastructure. Management of the telephone billing system.",
            url: "telone.co.zw"
        },

        {
            employer: "United Nations World Food Programme",
            title: "Telecommunications Associate",
            location: "Harare Zimbabwe",
            dates: "2008-in progress",
            description: "Installation, maintanance & monitoring of network",
            url: "wfp.org"
        },
    ],

    display: function(){
        // Do something
    }
};


var projects = {
    projects: [
        {
            title: "Movie website",
            dates: "2016-2016",
            description: "A Movie Trailer Website where users can see my favorite movies and watch the trailers.",
            images: ["images/movie_website_00.png", "images/movie_website_01.png", "images/movie_website_02.png"]
        }
    ],

    display: function(){
        // Do something
    }
};


// interface between the model(s) & the view(s)
var octopus = {
    init: function() {
        viewHeader.render();
        viewWork.render();
        viewEducation.render();
        viewProjects.render();
    },

    getSchools: function() {
        return education.schools;
    },

    getOnlineCourses: function() {
        return education.onlineCourses;
    },

    getJobs: function() {
        return work.jobs;
    },

    getProjects: function() {
        return projects.projects;
    },

    getName: function() {
        return bio.name;
    },

    getRole: function() {
        return bio.role;
    },

    getBioPic: function() {
        return bio.biopic;
    },

    getSkills: function() {
        return bio.skills;
    },

    getContacts: function() {
        return bio.contacts;
    }
};


var viewHeader = {
    render: function() {
        var contactMe = $("#footerContacts");

        var name = HTMLheaderName.replace('%data%', octopus.getName());
        var role = HTMLheaderRole.replace('%data%', octopus.getRole());
        var pic = HTMLbioPic.replace('%data%', octopus.getBioPic());
        // var role = HTMLheaderRole.replace('%data%', octopus.getRole());

        contacts = "";
        var myContactInfo = octopus.getContacts();
        mobile = HTMLmobile.replace('%data%', myContactInfo.mobile);
        email = HTMLemail.replace('%data%', myContactInfo.email);
        github = HTMLgithub.replace('%data%', myContactInfo.github);

        contacts += mobile;
        contacts += email;
        contacts += github;
        contactMe.append(contacts);

        var header = $('#header');
        header.prepend(role);
        header.prepend(name);

        var mySkills = octopus.getSkills();
        console.log(mySkills);

        skills = "";

        if(mySkills.length > 0){
            mySkills.forEach(function(skill) {
                skills += HTMLskills.replace('%data%', skill);
            });
            header.append(HTMLskillsStart);
            var skillsElem = $("#skills");
            skillsElem.append(skills);
            console.log(skillsElem);

        }
        header.append(pic);
    }
};


var viewWork = {
    render: function() {
        // console.log(HTMLworkEmployer);
        var workExperience = $('#workExperience');
        var work = octopus.getJobs();

        var employer = HTMLworkEmployer.replace('%data%', work[1].employer);
        var title = HTMLworkTitle.replace('%data%', work[1].title);
        var description = HTMLworkDescription.replace('%data%', work[1].description);
        var dates = HTMLworkDates.replace('%data%', work[1].dates);
        var location = HTMLlocation.replace('%data%', work[1].location);

        workExperience.append(HTMLworkStart);
        var workDiv = $(".work-entry");
        // console.log(workDiv);
        workDiv.append(employer + dates + title + description + location);
    }
}

var viewEducation = {
    render: function() {
        // console.log(HTMLworkEmployer);
        var education = $('#education');
        var schools = octopus.getSchools();

        var name = HTMLschoolName.replace('%data%', schools[0].name);
        var location = HTMLschoolLocation.replace('%data%', schools[0].location);

        var majors = '';
        schools[0].majors.forEach(function(major){
            majors += HTMLschoolMajor.replace('%data%', major);
        });


        var dates = HTMLschoolDates.replace('%data%', schools[0].dates);
        var degree = HTMLschoolDegree.replace('%data%', schools[0].degree);

        education.append(HTMLschoolStart + dates + name + location + degree + majors)
    }
}


var viewProjects = {
    render: function() {
        var projects = $('#projects');
        var myProjects = octopus.getProjects();

        var title = HTMLprojectTitle.replace('%data%', myProjects[0].title);
        var dates = HTMLprojectDates.replace('%data%', myProjects[0].dates);
        var description = HTMLprojectDescription.replace('%data%', myProjects[0].description);
        var image = HTMLprojectImage.replace('%data%', myProjects[0].images[0]);

        projects.append(HTMLprojectStart + title + description + image + dates);
        // console.log(projects);
    }
};


octopus.init();
