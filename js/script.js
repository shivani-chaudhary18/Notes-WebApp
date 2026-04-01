document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const course = params.get('course');
  const category = params.get('category');
  const courseNameElem = document.getElementById('courseName');
  const categoryNameElem = document.getElementById('categoryName');
  const semesterYearListElem = document.getElementById('semesterYearList');
  const syllabusBtn = document.getElementById('syllabusBtn');

  // Set the course and category names on the page
  courseNameElem.textContent = course;
  categoryNameElem.textContent = category ? category : '';

  // Define semesters/years based on courses and categories
  const courseOptions = {
      BCA: {
          semesters: [1, 2, 3, 4, 5, 6]
      },
      BBA: {
          semesters: [1, 2, 3, 4, 5, 6]
      },
      BJMC: {
          semesters: [1, 2, 3, 4, 5, 6]
      },
      MIB: {
          semesters: [1, 2, 3, 4]
      },
      BSc: {
          Microbiology: {
              years: [1, 2, 3]
          },
          Biotechnology: {
              years: [1, 2, 3]
          }
      },
      MSc: {
          Microbiology: {
              semesters: [1, 2, 3, 4] // Changed to semesters
          },
          Biotechnology: {
              semesters: [1, 2, 3, 4] // Changed to semesters
          }
      }
  };

  let selectedOptions = [];

  // Set selectedOptions based on course and category
  if (course === 'BSc') {
      if (category) {
          selectedOptions = courseOptions[course][category]?.years || [];
      }
  } else if (course === 'MSc') {
      if (category) {
          selectedOptions = courseOptions[course][category]?.semesters || [];
      }
  } else {
      selectedOptions = courseOptions[course]?.semesters || [];
  }

  // Create buttons for each semester or year
  selectedOptions.forEach(option => {
      const button = document.createElement("button");
      // Fixing MSc Microbiology/Biotechnology label issue
      button.textContent =
          (course === 'BSc') ? `Year ${option}` :
          (course === 'MSc' && (category === 'Microbiology' || category === 'Biotechnology')) ? `Semester ${option}` :
          `Semester ${option}`;
      button.onclick = function () {
          window.location.href = `subjects.html?course=${course}&category=${category}&${(course === 'BSc') ? 'year' : 'semester'}=${option}`;
      };
      semesterYearListElem.appendChild(button);
  });

  if (selectedOptions.length === 0) {
      semesterYearListElem.innerHTML = `<p>No options available for this course.</p>`;
  }

  // Syllabus Button Functionality
  syllabusBtn.addEventListener('click', function () {
      let syllabusFile = '';

      // Determine the syllabus file based on the course and category
      if (course === 'BCA') {
          syllabusFile = '/resources/syllabus/BCA.pdf';
      } else if (course === 'BBA') {
          syllabusFile = '/resources/syllabus/BBA.pdf';
      } else if (course === 'BJMC') {
          syllabusFile = '/resources/syllabus/BJMC.pdf';
      } else if (course === 'MIB') {
          syllabusFile = '/resources/syllabus/MIB.pdf';
      } else if (course === 'BSc') {
          if (category === 'Microbiology') {
              syllabusFile = '/resources/syllabus/BSc_Microbiology.pdf';
          } else if (category === 'Biotechnology') {
              syllabusFile = '/resources/syllabus/BSc_Biotechnology.pdf';
          }
      } else if (course === 'MSc') {
          if (category === 'Microbiology') {
              syllabusFile = '/resources/syllabus/MSc_Microbiology.pdf';
          } else if (category === 'Biotechnology') {
              syllabusFile = '/resources/syllabus/MSc_Biotechnology.pdf';
          }
      }

      // Open the syllabus PDF in a new tab
      if (syllabusFile) {
          window.open(syllabusFile, '_blank');
      } else {
          alert("Syllabus not available for this course.");
      }
  });
});

 // ---------------------------------
  // Add new functionality below here
  // ---------------------------------

  // Adding Units and Previous Year Question Papers Button
  const paramsForUnits = new URLSearchParams(window.location.search);
  const semesterYear = paramsForUnits.get("semester") || paramsForUnits.get("year");
  const unitsContainer = document.getElementById("unitsContainer");

  if (semesterYear) {
      const unitCount = 5; // Example: 5 units per subject
      for (let i = 1; i <= unitCount; i++) {
          const unitBtn = document.createElement("button");
          unitBtn.textContent = `Unit ${i}`;
          unitBtn.classList.add("unit-btn");
          unitBtn.onclick = function () {
              const unitFile = `/resources/units/${course}_${semesterYear}_Unit${i}.pdf`;
              window.open(unitFile, '_blank');
          };
          unitsContainer.appendChild(unitBtn);
      }

      // Add Previous Year Question Paper Button
      const previousYearBtn = document.createElement("button");
      previousYearBtn.textContent = "Previous Year Question Papers";
      previousYearBtn.classList.add("prev-year-btn");
      previousYearBtn.onclick = function () {
          const questionPaperFile = `/resources/previous_year/${course}_${semesterYear}_Previous_Year.pdf`;
          window.open(questionPaperFile, '_blank');
      };
      unitsContainer.appendChild(previousYearBtn);
  }

