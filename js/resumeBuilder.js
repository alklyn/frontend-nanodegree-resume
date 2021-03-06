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
    },
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
            description: "Installation, maintanance & monitoring of network",
            url: "telone.co.zw"
        },

        {
            employer: "United Nations World Food Programme",
            title: "Telecommunications Associate",
            location: "Harare Zimbabwe",
            dates: "2008-in progress",
            description: "My roles included the installation, maintanance & monitoring of Telecommunications infrastructure. Management of the telephone billing system.",
            url: "wfp.org"
        },
        {
            employer: "United Nations World Food Programme",
            title: "Telecommunications Associate",
            location: "Monrovia Liberia",
            dates: "2015-2015",
            description: "Installation of web based billing, transport requisition & document tracking system.",
            url: "wfp.org"
        },
        {
            employer: "United Nations World Food Programme",
            title: "Telecommunications Associate",
            location: "Niamey Niger",
            dates: "2015-2015",
            description: "Installation of web based billing, transport requisition & document tracking system.",
            url: "wfp.org"
        }
    ],

    display: function(){
        // Do something
    },

    locationizer: function(){
        //Create an array of all the locations that I have worked
        locations = [];
        this.jobs.forEach(function(job) {
            locations.push(job.location);
        });
        return locations
    }
};


var projects = {
    projects: [
        {
            title: "Movie website",
            dates: "2016-2016",
            description: "A Movie Trailer Website where users can see my favorite movies and watch the trailers.",
            images: ["images/movie_website_00.png", "images/movie_website_01.png", "images/movie_website_02.png"]
        },
        {
            title: "Item Catalog",
            dates: "2017-2017",
            description: "A simple web based catalog app..",
            images: ["images/catalog00.png", "images/catalog01.png", "images/catalog02.png"]
        },
    ],

    display: function(){
        // Do something
    }
};


// interface between the model(s) & the view(s)
var octopus = {
    init: function() {
        viewHeader.render(false);
        viewMain.render();
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
    },

    getLocatons: function() {
        return work.locationizer();
    }
};


var viewHeader = {
    render: function(internationalize) {
        var contactMe = $("#footerContacts");

        var name = octopus.getName();
        if(internationalize){
            name = this.inName(name);
        }
        var formattedName = HTMLheaderName.replace('%data%', name);

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
        header.prepend(formattedName);

        var mySkills = octopus.getSkills();
        // console.log(mySkills);

        skills = "";

        if(mySkills.length > 0){
            header.append(HTMLskillsStart);
            var skillsElem = $("#skills");

            mySkills.forEach(function(skill) {
                skillsElem.append(HTMLskills.replace('%data%', skill));
            });
        }
        header.append(pic);
    },

    inName: function() {
        //Internationalize the name.
        var name = octopus.getName();
        var nameArr = name.split(" ");
        console.log(nameArr);
        nameArr[0] = this.capitalize(nameArr[0]);
        nameArr[1] = nameArr[1].toUpperCase();
        return nameArr[0] + ' ' + nameArr[1];
    },

    capitalize: function(myStr) {
        // Capitalize the 1st letter of a string
        return myStr.charAt(0).toUpperCase() + myStr.slice(1).toLowerCase();
    }
};


var viewMain = {
    render: function() {
        var main = $("#main");
        main.append(internationalizeButton);
    }
};


var viewWork = {
    render: function() {
        // console.log(HTMLworkEmployer);
        var workExperience = $('#workExperience');
        var work = octopus.getJobs();

        work.forEach(function(job) {
            var employer = HTMLworkEmployer.replace('%data%', job.employer);
            var title = HTMLworkTitle.replace('%data%', job.title);
            var description = HTMLworkDescription.replace('%data%', job.description);
            var dates = HTMLworkDates.replace('%data%', job.dates);
            var location = HTMLlocation.replace('%data%', job.location);

            workExperience.append(HTMLworkStart);
            // $(".work-entry").eq(i).append(employer + title + dates + description + location);

            // Does the exact same thing as the code above
            $(".work-entry:last").append(employer + title + dates + description + location);
            // console.log('i = ' + i);
            // console.log($(".work-entry").eq(i));
        });
    },
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
        var projectsDiv = $('#projects');
        var myProjects = octopus.getProjects();

        myProjects.forEach(function(project, i) {
            var title = HTMLprojectTitle.replace('%data%', project.title);
            var dates = HTMLprojectDates.replace('%data%', project.dates);
            var description = HTMLprojectDescription.replace('%data%', project.description);

            var formattedImages = [];
            project.images.forEach(function(image) {
                formattedImages.push(HTMLprojectImage.replace('%data%', image));
            });
            projectsDiv.append(HTMLprojectStart);
            $(".project-entry").eq(i).append(title + dates + description + formattedImages);
        });

    }
};


octopus.init();
// console.log(octopus.getLocatons());
