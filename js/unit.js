document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const subject = params.get("subject");
  const semesterNameElem = document.getElementById("semesterName");
  const subjectListElem = document.getElementById("subjectList");

  // Set the semester name dynamically based on the subject
  if (subject) {
    semesterNameElem.textContent = `Subject: ${subject}`;
  }

  // Define unit files for different subjects (You can expand this object with more subjects)
  const unitFiles = {
    "Mathematics-I": {
      units: [
        { name: "Unit 1", file: "resources/Mathematics-1/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Mathematics-1/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Mathematics-1/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Mathematics-1/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Mathematics-1/Unit5.pdf" }
      ],
      previousYearPapers: "resources/Mathematics-1/PreviousYearPapers.pdf",
      onlineLearning: "resources/Mathematics-1/OnlineLearning.pdf"
    },
    "Programming Principles & Algorithm": {
      units: [
        { name: "Unit 1", file: "resources/BCA/ProgrammingPrinciples/Unit1.pdf" },
        { name: "Unit 2", file: "resources/BCA/ProgrammingPrinciples/Unit2.pdf" },
        { name: "Unit 3", file: "resources/BCA/ProgrammingPrinciples/Unit3.pdf" },
        { name: "Unit 4", file: "resources/BCA/ProgrammingPrinciples/Unit4.pdf" },
        { name: "Unit 5", file: "resources/BCA/ProgrammingPrinciples/Unit5.pdf" },
        { name: "Unit 6", file: "resources/BCA/ProgrammingPrinciples/Unit6.pdf" }
      ],
      previousYearPapers: "resources/BCA/ProgrammingPrinciples/PreviousYearPapers.pdf",
      onlineLearning: "resources/BCA/ProgrammingPrinciples/OnlineLearning.pdf"
    },
    "Computer Fundamentals & Office Automation": {
      units: [
        { name: "Unit 1", file: "resources/BCA/ComputerFundamentals/Unit1.pdf" },
        { name: "Unit 2", file: "resources/BCA/ComputerFundamentals/Unit2.pdf" },
        { name: "Unit 3", file: "resources/BCA/ComputerFundamentals/Unit3.pdf" },
        { name: "Unit 4", file: "resources/BCA/ComputerFundamentals/Unit4.pdf" },
        { name: "Unit 5", file: "resources/BCA/ComputerFundamentals/Unit5.pdf" },
        { name: "Unit 6", file: "resources/BCA/ComputerFundamentals/Unit6.pdf" }
      ],
      previousYearPapers: "resources/BCA/ComputerFundamentals/PreviousYearPapers.pdf",
       onlineLearning: "resources/BCA/ComputerFundamentals/OnlineLearning.pdf"
    },
    "Principles of Management": {
      units: [
        { name: "Unit 1", file: "resources/BCA/PrinciplesOfManagement/Unit1.pdf" },
        { name: "Unit 2", file: "resources/BCA/PrinciplesOfManagement/Unit2.pdf" },
        { name: "Unit 3", file: "resources/BCA/PrinciplesOfManagement/Unit3.pdf" },
        { name: "Unit 4", file: "resources/BCA/PrinciplesOfManagement/Unit4.pdf" },
        { name: "Unit 5", file: "resources/BCA/PrinciplesOfManagement/Unit5.pdf" },
        { name: "Unit 6", file: "resources/BCA/PrinciplesOfManagement/Unit6.pdf" }
      ],
      previousYearPapers: "resources/BCA/PrinciplesOfManagement/PreviousYearPapers.pdf",
      onlineLearning: "resources/BCA/PrinciplesOfManagement/OnlineLearning.pdf"
    },
    "Business Communication": {
      units: [
        { name: "Unit 1", file: "resources/BCA/BusinessCommunication/Unit1.pdf" },
        { name: "Unit 2", file: "resources/BCA/BusinessCommunication/Unit2.pdf" },
        { name: "Unit 3", file: "resources/BCA/BusinessCommunication/Unit3.pdf" },
        { name: "Unit 4", file: "resources/BCA/BusinessCommunication/Unit4.pdf" },
        { name: "Unit 5", file: "resources/BCA/BusinessCommunication/Unit5.pdf" },
        { name: "Unit 6", file: "resources/BCA/BusinessCommunication/Unit6.pdf" }
      ],
      previousYearPapers: "resources/BCA/BusinessCommunication/PreviousYearPapers.pdf",
      onlineLearning: "resources/BCA/BusinessCommunication/OnlineLearning.pdf"
    },
    "Environmental Studies (Qualifying Paper)": {
      units: [
        { name: "Unit 1", file: "resources/BCA/EnvironmentalStudies/Unit1.pdf" },
        { name: "Unit 2", file: "resources/BCA/EnvironmentalStudies/Unit2.pdf" },
        { name: "Unit 3", file: "resources/BCA/EnvironmentalStudies/Unit3.pdf" },
        { name: "Unit 4", file: "resources/BCA/EnvironmentalStudies/Unit4.pdf" },
        { name: "Unit 5", file: "resources/BCA/EnvironmentalStudies/Unit5.pdf" },
        { name: "Unit 6", file: "resources/BCA/EnvironmentalStudies/Unit6.pdf" }
      ],
      previousYearPapers: "resources/BCA/EnvironmentalStudies/PreviousYearPapers.pdf",
      onlineLearning: "resources/BCA/EnvironmentalStudies/OnlineLearning.pdf"
    },
    "Mathematics-II": {
      units: [
        { name: "Unit 1", file: "resources/Mathematics-2/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Mathematics-2/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Mathematics-2/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Mathematics-2/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Mathematics-2/Unit5.pdf" },
        { name: "Unit 6", file: "resources/Mathematics-2/Unit6.pdf" }
      ],
      previousYearPapers: "resources/Mathematics-2/PreviousYearPapers.pdf",
      onlineLearning: "resources/Mathematics-2/OnlineLearning.pdf"
    },
    "C-Programming": {
      units: [
        { name: "Unit 1", file: "resources/C-Programming/Unit1.pdf" },
        { name: "Unit 2", file: "resources/C-Programming/Unit2.pdf" },
        { name: "Unit 3", file: "resources/C-Programming/Unit3.pdf" },
        { name: "Unit 4", file: "resources/C-Programming/Unit4.pdf" },
        { name: "Unit 5", file: "resources/C-Programming/Unit5.pdf" },
        { name: "Unit 6", file: "resources/C-Programming/Unit6.pdf" }
      ],
      previousYearPapers: "resources/C-Programming/PreviousYearPapers.pdf",
       onlineLearning: "resources/C-Programming/OnlineLearning.pdf"
    },
    "Organizational Behavior": {
      units: [
        { name: "Unit 1", file: "resources/Organizational-Behaviour/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Organizational-Behaviour/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Organizational-Behaviour/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Organizational-Behaviour/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Organizational-Behaviour/Unit5.pdf" }
      ],
      previousYearPapers: "resources/Organizational-Behaviour/PreviousYearPapers.pdf",
      onlineLearning: "resources/Organizational-Behaviour/OnlineLearning.pdf"
    },
    "Digital Electronics and Computer Organization": {
      units: [
        { name: "Unit 1", file: "resources/Digital-Electronics-Computer-Organization/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Digital-Electronics-Computer-Organization/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Digital-Electronics-Computer-Organization/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Digital-Electronics-Computer-Organization/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Digital-Electronics-Computer-Organization/Unit5.pdf" }
      ],
      previousYearPapers: "resources/Digital-Electronics-Computer-Organization/PreviousYearPapers.pdf",
       onlineLearning: "resources/Digital-Electronics-Computer-Organization/OnlineLearning.pdf"
    },
    "Financial Accounting and Management": {
      units: [
        { name: "Unit 1", file: "resources/Financial-Accounting-Management/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Financial-Accounting-Management/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Financial-Accounting-Management/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Financial-Accounting-Management/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Financial-Accounting-Management/Unit5.pdf" },
        { name: "Unit 6", file: "resources/Financial-Accounting-Management/Unit6.pdf" }
      ],
      previousYearPapers: "resources/Financial-Accounting-Management/PreviousYearPapers.pdf",
      onlineLearning: "resources/Financial-Accounting-Management/OnlineLearning.pdf"
    },
    "Object-Oriented Programming Using C++": {
      units: [
        { name: "Unit 1", file: "resources/OOP-C++/Unit1.pdf" },
        { name: "Unit 2", file: "resources/OOP-C++/Unit2.pdf" },
        { name: "Unit 3", file: "resources/OOP-C++/Unit3.pdf" },
        { name: "Unit 4", file: "resources/OOP-C++/Unit4.pdf" },
        { name: "Unit 5", file: "resources/OOP-C++/Unit5.pdf" }
      ],
      previousYearPapers: "resources/OOP-C++/PreviousYearPapers.pdf",
      onlineLearning: "resources/OOP-C++/OnlineLearning.pdf"
    },
    "Data Structures Using C & C++": {
      units: [
        { name: "Unit 1", file: "resources/Data-Structures-C-C++/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Data-Structures-C-C++/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Data-Structures-C-C++/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Data-Structures-C-C++/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Data-Structures-C-C++/Unit5.pdf" },
        { name: "Unit 6", file: "resources/Data-Structures-C-C++/Unit6.pdf" }
      ],
      previousYearPapers: "resources/Data-Structures-C-C++/PreviousYearPapers.pdf",
       onlineLearning: "resources/Data-Structures-C-C++/OnlineLearning.pdf"
    },
    "Computer Architecture & Assembly Language": {
      units: [
        { name: "Unit 1", file: "resources/Computer-Architecture-Assembly/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Computer-Architecture-Assembly/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Computer-Architecture-Assembly/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Computer-Architecture-Assembly/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Computer-Architecture-Assembly/Unit5.pdf" },
        { name: "Unit 6", file: "resources/Computer-Architecture-Assembly/Unit6.pdf" }
      ],
      previousYearPapers: "resources/Computer-Architecture-Assembly/PreviousYearPapers.pdf",
      onlineLearning: "resources/Computer-Architecture-Assembly/OnlineLearning.pdf"
    },
    "Business Economics": {
      units: [
        { name: "Unit 1", file: "resources/Business-Economics/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Business-Economics/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Business-Economics/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Business-Economics/Unit4.pdf" }
      ],
      previousYearPapers: "resources/Business-Economics/PreviousYearPapers.pdf",
      onlineLearning: "resources/Business-Economics/OnlineLearning.pdf"
    },
    "Elements of Statistics": {
      units: [
        { name: "Unit 1", file: "resources/Elements-of-Statistics/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Elements-of-Statistics/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Elements-of-Statistics/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Elements-of-Statistics/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Elements-of-Statistics/Unit5.pdf" },
        { name: "Unit 6", file: "resources/Elements-of-Statistics/Unit6.pdf" }
      ],
      previousYearPapers: "resources/Elements-of-Statistics/PreviousYearPapers.pdf",
      onlineLearning: "resources/Elements-of-Statistics/OnlineLearning.pdf"
    },
    "Computer Graphics & Multimedia Application": {
      units: [
        { name: "Unit 1", file: "resources/Computer-Graphics-Multimedia/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Computer-Graphics-Multimedia/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Computer-Graphics-Multimedia/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Computer-Graphics-Multimedia/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Computer-Graphics-Multimedia/Unit5.pdf" }
      ],
      previousYearPapers: "resources/Computer-Graphics-Multimedia/PreviousYearPapers.pdf",
      onlineLearning: "resources/Computer-Graphics-Multimedia/OnlineLearning.pdf"
    },
    "Operating System": {
      units: [
        { name: "Unit 1", file: "resources/Operating-System/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Operating-System/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Operating-System/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Operating-System/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Operating-System/Unit5.pdf" },
        { name: "Unit 6", file: "resources/Operating-System/Unit6.pdf" }
      ],
      previousYearPapers: "resources/Operating-System/PreviousYearPapers.pdf",
      onlineLearning: "resources/Operating-System/OnlineLearning.pdf"
    },
    "Software Engineering": {
      units: [
        { name: "Unit 1", file: "resources/Software-Engineering/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Software-Engineering/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Software-Engineering/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Software-Engineering/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Software-Engineering/Unit5.pdf" },
        { name: "Unit 6", file: "resources/Software-Engineering/Unit6.pdf" }
      ],
      previousYearPapers: "resources/Software-Engineering/PreviousYearPapers.pdf",
      onlineLearning: "resources/Software-Engineering/OnlineLearning.pdf"
    },
    "Optimization Techniques": {
      units: [
        { name: "Unit 1", file: "resources/Optimization-Techniques/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Optimization-Techniques/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Optimization-Techniques/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Optimization-Techniques/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Optimization-Techniques/Unit5.pdf" }
      ],
      previousYearPapers: "resources/Optimization-Techniques/PreviousYearPapers.pdf",
      onlineLearning: "resources/Optimization-Techniques/OnlineLearning.pdf"
    },
    "Mathematics-III": {
      units: [
        { name: "Unit 1", file: "resources/Mathematics-3/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Mathematics-3/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Mathematics-3/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Mathematics-3/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Mathematics-3/Unit5.pdf" },
        { name: "Unit 6", file: "resources/Mathematics-3/Unit6.pdf" }
      ],
      previousYearPapers: "resources/Mathematics-3/PreviousYearPapers.pdf",
       onlineLearning: "resources/Mathematics-3/OnlineLearning.pdf"
    },
    "Introduction to DBMS": {
      units: [
        { name: "Unit 1", file: "resources/DBMS/Unit1.pdf" },
        { name: "Unit 2", file: "resources/DBMS/Unit2.pdf" },
        { name: "Unit 3", file: "resources/DBMS/Unit3.pdf" },
        { name: "Unit 4", file: "resources/DBMS/Unit4.pdf" },
        { name: "Unit 5", file: "resources/DBMS/Unit5.pdf" },
        { name: "Unit 6", file: "resources/DBMS/Unit6.pdf" }
      ],
      previousYearPapers: "resources/DBMS/PreviousYearPapers.pdf",
      onlineLearning: "resources/DBMS/OnlineLearning.pdf"
    },
    "Java Programming and Dynamic Webpage Design": {
      units: [
        { name: "Unit 1", file: "resources/Java/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Java/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Java/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Java/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Java/Unit5.pdf" },
        { name: "Unit 6", file: "resources/Java/Unit6.pdf" }
      ],
      previousYearPapers: "resources/Java/PreviousYearPapers.pdf",
      onlineLearning: "resources/Java/OnlineLearning.pdf"
    },
    "Computer Network": {
      units: [
        { name: "Unit 1", file: "resources/Computer-Network/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Computer-Network/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Computer-Network/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Computer-Network/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Computer-Network/Unit5.pdf" }
      ],
      previousYearPapers: "resources/Computer-Network/PreviousYearPapers.pdf",
       onlineLearning: "resources/Computer-Network/OnlineLearning.pdf"
    },
    "Numerical Methods": {
      units: [
        { name: "Unit 1", file: "resources/Numerical-Methods/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Numerical-Methods/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Numerical-Methods/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Numerical-Methods/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Numerical-Methods/Unit5.pdf" }
      ],
      previousYearPapers: "resources/Numerical-Methods/PreviousYearPapers.pdf",
      onlineLearning: "resources/Numerical-Methods/OnlineLearning.pdf"
    },
    "Computer Network Security": {
      units: [
        { name: "Unit 1", file: "resources/Computer-Network-Security/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Computer-Network-Security/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Computer-Network-Security/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Computer-Network-Security/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Computer-Network-Security/Unit5.pdf" },
        { name: "Unit 6", file: "resources/Computer-Network-Security/Unit6.pdf" }
      ],
      previousYearPapers: "resources/Computer-Network-Security/PreviousYearPapers.pdf",
      onlineLearning: "resources/Computer-Network-Security/OnlineLearning.pdf"
    },
    "Information Systems: Analysis, Design & Implementation": {
      units: [
        { name: "Unit 1", file: "resources/Information-Systems/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Information-Systems/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Information-Systems/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Information-Systems/Unit4.pdf" },
        { name: "Unit 5", file: "resources/Information-Systems/Unit5.pdf" },
        { name: "Unit 6", file: "resources/Information-Systems/Unit6.pdf" }
      ],
      previousYearPapers: "resources/Information-Systems/PreviousYearPapers.pdf",
      onlineLearning: "resources/Information-Systems/OnlineLearning.pdf"
    },
    "E-Commerce": {
      units: [
        { name: "Unit 1", file: "resources/E-Commerce/Unit1.pdf" },
        { name: "Unit 2", file: "resources/E-Commerce/Unit2.pdf" },
        { name: "Unit 3", file: "resources/E-Commerce/Unit3.pdf" },
        { name: "Unit 4", file: "resources/E-Commerce/Unit4.pdf" },
        { name: "Unit 5", file: "resources/E-Commerce/Unit5.pdf" }
      ],
      previousYearPapers: "resources/E-Commerce/PreviousYearPapers.pdf",
      onlineLearning: "resources/E-Commerce/OnlineLearning.pdf"
    },
    "Knowledge Management": {
      units: [
        { name: "Unit 1", file: "resources/Knowledge-Management/Unit1.pdf" },
        { name: "Unit 2", file: "resources/Knowledge-Management/Unit2.pdf" },
        { name: "Unit 3", file: "resources/Knowledge-Management/Unit3.pdf" },
        { name: "Unit 4", file: "resources/Knowledge-Management/Unit4.pdf" }
      ],
      previousYearPapers: "resources/Knowledge-Management/PreviousYearPapers.pdf",
      onlineLearning: "resources/Knowledge-Management/OnlineLearning.pdf"
    }
    // Add other subjects similarly
  };


 // Dynamically create buttons for each unit
 const createUnitButtons = (units) => {
  units.forEach(unit => {
    const button = document.createElement("button");
    button.textContent = unit.name;
    button.addEventListener("click", () => {
      window.location.href = unit.file;
    });
    subjectListElem.appendChild(button);
  });
};

// Dynamically create buttons for resources
const createResourceButtons = (subjectResources) => {
  const resources = [
    { name: "Previous Year Papers", file: subjectResources.previousYearPapers },
    { name: "Online Learning", file: subjectResources.onlineLearning },
    {name: "Syllabus",file: "resources/syllabus/BCA.pdf"
  }
  ];

  resources.forEach(resource => {
    const button = document.createElement("button");
    button.textContent = resource.name;
    button.addEventListener("click", () => {
      window.location.href = resource.file;
    });
    subjectListElem.appendChild(button);
  });
};

// Check if the subject exists in unitFiles
if (subject && unitFiles[subject]) {
  const subjectResources = unitFiles[subject];
  createUnitButtons(subjectResources.units);
  createResourceButtons(subjectResources);
}
});
