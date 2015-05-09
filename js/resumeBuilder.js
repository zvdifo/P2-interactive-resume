//bio build
var bio = {
	"name":"ShanYu",
	"role":"Web Developer",
	"contacts":{
		"email":"xiaoxinquwenwen@163.com",
		"github":"zvdifo",
		"location":"China",
		"mobile":"12345678"
	},
	"biopic":"images/mee.jpg",
	"welcomeMessage":"Hi,welcome to my interactive resume!I am on my Udacity Front-End Nanodegree.I am looking for a job as a web developer.Check my projects and if you're interested, contact me soon!",
	"skills":["HTML", "CSS", "JavaScript", "Python", "Java"],
	"display": function(){
		var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedHeaderRole); 
		var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedHeaderName);
		   
		var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedbioPic);
		var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedwelcomeMessage);
		
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
		$("#topContacts").append(formattedContacts);
		$('#footerContacts').append(formattedContacts);
		
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills){
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill])) ;
		}
	}	
};

bio.display();


var work = {
	"jobs": [{
        "employer": "Campus TV station",
        "title": "journalism",
        "location": "China",
        "dates": "2012 - 2014",
        "description": ""
    },{
		"employer": "Wuhan Tv station",
        "title": "journalism",
        "location": "China",
        "dates": "2014 July - October",
        "description": "I worked three months in wuhan TV station.It's a nice experience during which I learned a lot"	
	}],
	
	"display": function(){
		for (job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);	
		}
	}
};

work.display();

var projects = {
	"projects": [
		{
			"title": "recipes",
			"date": "2014-03-01",
			"description": "This repository contains recipes for some foods I like.",
			"images": ['images/recipes.jpg', 'images/hello-world.jpg']
		}, {
			"title": "Portfolio",
			"date": "2014-04-20",
			"description": "This is my first project of Udacity,I learned a lot about HTML and CSS!",
			"images": ['images/hello-world.jpg', 'images/resume.png']
		}
		],
	"display": function(){
		for (project in projects.projects){
			$("#projects").append(HTMLprojectStart);
			
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].date);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			
			if (projects.projects[project].images.length > 0){
				for (image in projects.projects[project].images){
					var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImages);
				}
			}
		}	
	}
};

projects.display();


var education = {     
	"schools":[     
	{         
		"schoolName":"Central China Normal University", 
		"degree":"bachelor",
		"location":"wuhan,hubei,China" , 
		"dates":"2012-2015",
		"majors":["journalism","French"]
	}
	],
	"onlineCourses":[
	{
		"title":"6.001 introduction to programming in Python",
		"school":"MIT",
		"dates":2014,
		"url":""
	},
	{
		"title":"Front-End Nanodegree",
		"school":"Udacity",
		"dates":2015,
		"url":""
	}
	],
	"display": function(){
		for ( school in education.schools) {
                $("#education").append(HTMLschoolStart);
				
                var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].schoolName);
                var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                var formattedNameDegree = formattedschoolName + formattedschoolDegree;
                $(".education-entry:last").append(formattedNameDegree);
                var formattedschoolDates= HTMLschoolDates.replace("%data%", education.schools[school].dates);
                $(".education-entry:last").append(formattedschoolDates);
                var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                $(".education-entry:last").append(formattedschoolLocation);	
				
				for ( major in education.schools[school].majors ){
                    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                    $(".education-entry:last").append(formattedschoolMajor);

                } 		
		}
		
		 if ( education.onlineCourses.length > 0){
            $("#education").append(HTMLonlineClasses);
			
            for (course in education.onlineCourses) {

                $("#education").append(HTMLschoolStart);
                var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                var formattedonlineSchol = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                var formattedtitleschool = formattedonlineTitle+formattedonlineSchol
                $(".education-entry:last").append(formattedtitleschool);
                var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                $(".education-entry:last").append(formattedonlineDates);
                var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                $(".education-entry:last").append(formattedonlineURL);
            }
        }
	}	
};

education.display();


$('#mapDiv').append(googleMap);


