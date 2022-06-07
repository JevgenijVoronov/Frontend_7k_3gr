// objekts no CV lapas datiem saīsinātā versijā

const VardsUzvards = {
  firstName: "Daina",
  lastName: "Siliņa",
  linkedIn: "linkedin.com/in/dainasilina",
  eMail: "daina.silina[at]gmail.com",

  workExperience: [
    "Since September 2021, Editor, the National Encyclopedia of Latvia, Riga, Latvia",
    "Summers of 2021, 2020 and 2019, Project Manager, Ars Electronica Festival, Linz, Austria",
    "2001-2019, From Assistant Manager to Senior Project Manager, Producer and Curator, RIXC Center for New Media Culture, Riga, Latvia",
  ],

  education: [
    "2005 - 2007, Latvian Academy of Culture, Master of Arts - MA, Theory of Culture",
    "2001 - 2005, Latvian Academy of Culture, Bachelor of Arts - BA, International Cultural Relations Latvia-Poland",
    "1999 - 2011, University of Latvia, Bachelor's degree studies (not finished), Computer Science",
  ],

  skills: ["Attention to detail", "Management skills", "Problem solving"],

  languages: ["Latvian", "English", "Polish", "German", "Italian", "French"],

  interests: ["European cinema", "Languages", "New media art"],
};

// to test display
console.log(VardsUzvards.firstName + " " + VardsUzvards.lastName);
console.log(VardsUzvards.linkedIn);
console.log(VardsUzvards.eMail);

console.log(VardsUzvards.workExperience);
console.log(VardsUzvards.education);
console.log(VardsUzvards.skills);
console.log(VardsUzvards.languages);
console.log(VardsUzvards.interests);
