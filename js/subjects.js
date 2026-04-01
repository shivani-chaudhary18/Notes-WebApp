document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const course = params.get('course'); // Get the course from URL parameters
    const category = params.get('category'); // Get the category (e.g., Microbiology/Biotechnology) from URL parameters
    const semester = params.get('semester'); // Get the semester (for non-BSc courses) from URL parameters
    const year = params.get('year'); // Get the year (for BSc) from URL parameters
    const semesterNameElem = document.getElementById('semesterName');
    const subjectListElem = document.getElementById('subjectList');
    const backToBtn = document.getElementById('backToBtn');

    // Subjects list for various courses
    const subjects = {
        BCA: {
            1: ['Mathematics-I', 'Programming Principles & Algorithm', 'Computer Fundamentals & Office Automation', 'Principles of Management', 'Business Communication', 'Environmental Studies (Qualifying Paper)',],
            2: ['Mathematics-II', 'C-Programming', 'Organizational Behavior', 'Digital Electronics and Computer Organization', 'Financial Accounting and Management'],
            3: ['Object-Oriented Programming Using C++', 'Data Structures Using C & C++', 'Computer Architecture & Assembly Language', 'Business Economics', 'Elements of Statistics'],
            4: ['Computer Graphics & Multimedia Application', 'Operating System', 'Software Engineering', 'Optimization Techniques', 'Mathematics-III'],
            5: ['Introduction to DBMS', 'Java Programming and Dynamic Webpage Design', 'Computer Network', 'Numerical Methods'],
            6: ['Computer Network Security', 'Information Systems: Analysis, Design & Implementation', 'E-Commerce', 'Knowledge Management']
        },
        BBA: {
            1: ['Principles of Management', 'Financial Accounting', 'Business Economics', 'Business Communication', 'Environmental Studies'],
            2: ['Business Law', 'Organizational Behaviour', 'Marketing Management', 'Quantitative Techniques for Business', 'Principles of Microeconomics'],
            3: ['Human Resource Management', 'Business Statistics', 'Financial Management', 'Business Mathematics', 'E-Commerce'],
            4: ['Production and Operations Management', 'Consumer Behaviour', 'Corporate Accounting', 'Strategic Management', 'Business Environment'],
            5: ['International Business', 'Project Management', 'Marketing Research', 'Taxation Laws', 'Investment Management'],
            6: ['Entrepreneurship Development', 'Retail Management', 'Financial Planning and Analysis', 'Corporate Governance', 'Business Ethics']
        },
        BJMC: {
            1: ['Introduction to Journalism', 'Communication Theories', 'Newspaper and Magazine Journalism', 'Press Laws and Ethics', 'Introduction to Computers and Media'],
            2: ['Radio and Television Journalism', 'Public Relations', 'Advertising and Marketing', 'Development Communication', 'Fundamentals of Photography'],
            3: ['Journalism and Society', 'Communication Research', 'Writing for Media', 'Digital Media and Social Media', 'Broadcast Journalism'],
            4: ['Mass Media and Culture', 'Media Management', 'Journalism Ethics and Law', 'Media and Politics', 'Film Studies'],
            5: ['Radio, Television, and Online Journalism', 'International Journalism', 'Investigative Journalism', 'Documentary Production', 'Public Speaking and Presentation Skills'],
            6: ['Media Planning and Media Laws', 'Digital Journalism', 'Writing for New Media', 'Media Research Project', 'Internship and Report Writing']
        },
        MIB: {
            1: ['Principles of Management', 'Managerial Economics', 'Organizational Behaviour', 'Financial Accounting', 'Business Communication', 'Business Environment'],
            2: ['International Business', 'Marketing Management', 'Human Resource Management', 'Financial Management', 'Quantitative Techniques for Business', 'Research Methodology'],
            3: ['International Marketing', 'International Trade and Finance', 'Strategic Management', 'Export Management', 'International Legal Environment', 'Global Supply Chain Management'],
            4: ['Cross-Cultural Management', 'Global Economics', 'International Business Law', 'International Finance', 'Entrepreneurship and Innovation', 'International Business Strategy']
        },
        MSc: {
            Microbiology: {
                1: ['Microbial Diversity', 'Biochemistry', 'Cell Biology', 'Microbial Genetics'],
                2: ['Microbial Biotechnology', 'Immunology', 'Virology', 'Medical Microbiology'],
                3: ['Industrial Microbiology', 'Food Microbiology', 'Environmental Microbiology', 'Molecular Microbiology'],
                4: ['Forensic Microbiology', 'Clinical Microbiology', 'Bioinformatics in Microbiology', 'Advanced Immunology']
            },
            Biotechnology: {
                1: ['Molecular Biology', 'Biochemistry', 'Microbial Biotechnology', 'Cell Biology'],
                2: ['Recombinant DNA Technology', 'Immunology', 'Plant Biotechnology', 'Animal Biotechnology'],
                3: ['Industrial Biotechnology', 'Medical Biotechnology', 'Agricultural Biotechnology', 'Environmental Biotechnology'],
                4: ['Food Biotechnology', 'Pharmaceutical Biotechnology', 'Forensic Biotechnology', 'Nanobiotechnology']
            }
        },
        BSc: {
            Microbiology: {
                1: ['Fundamentals of Microbiology', 'Microbial Diversity', 'Microbial Physiology', 'Microbial Genetics'],
                2: ['Medical Microbiology', 'Industrial Microbiology', 'Agricultural Microbiology', 'Environmental Microbiology'],
                3: ['Medical Bacteriology', 'Medical Virology', 'Medical Parasitology', 'Medical Mycology']
            },
            Biotechnology: {
                1: ['Molecular Biology', 'Biochemistry', 'Microbial Biotechnology', 'Cell Biology'],
                2: ['Plant Biotechnology', 'Animal Biotechnology', 'Recombinant DNA Technology', 'Immunology'],
                3: ['Industrial Biotechnology', 'Medical Biotechnology', 'Agricultural Biotechnology', 'Environmental Biotechnology']
            }
        }
    };

    // Function to display subjects for BSc courses (Microbiology and Biotechnology) with year-based structure
    function displayBScSubjects(courseCategory, year) {
        if (courseCategory && year && subjects['BSc'][courseCategory][year]) {
            semesterNameElem.textContent = `${courseCategory} - Year ${year}`;
            subjectListElem.innerHTML = "";
            subjects['BSc'][courseCategory][year].forEach(subject => {
                const subjectButton = document.createElement("button");
                subjectButton.textContent = subject;
                subjectButton.classList.add('subject-btn');
                subjectButton.onclick = function () {
                    window.location.href = `subjectDetails.html?subject=${encodeURIComponent(subject)}`;
                };
                subjectListElem.appendChild(subjectButton);
            });
        } else {
            subjectListElem.innerHTML = "<p>No subjects found for this course/year.</p>";
        }
    }

    // Function to display subjects for MSc courses (Microbiology and Biotechnology) with semester-based structure
    function displayMScSubjects(courseCategory, semester) {
        if (courseCategory && semester && subjects['MSc'][courseCategory][semester]) {
            semesterNameElem.textContent = `${courseCategory} - Semester ${semester}`;
            subjectListElem.innerHTML = "";
            subjects['MSc'][courseCategory][semester].forEach(subject => {
                const subjectButton = document.createElement("button");
                subjectButton.textContent = subject;
                subjectButton.classList.add('subject-btn');
                subjectButton.onclick = function () {
                    window.location.href = `subjectDetails.html?subject=${encodeURIComponent(subject)}`;
                };
                subjectListElem.appendChild(subjectButton);
            });
        } else {
            subjectListElem.innerHTML = "<p>No subjects found for this course/semester.</p>";
        }
    }

    // Function to display subjects for other semester-based courses (BCA, BBA, BJMC, MIB)
    function displaySemesterSubjects(course, semester) {
        if (course && semester && subjects[course] && subjects[course][semester]) {
            semesterNameElem.textContent = `${course} - Semester ${semester}`;
            subjectListElem.innerHTML = "";
            subjects[course][semester].forEach(subject => {
                const subjectButton = document.createElement("button");
                subjectButton.textContent = subject;
                subjectButton.classList.add('subject-btn');
                subjectButton.onclick = function () {
                    window.location.href = `subjectDetails.html?subject=${encodeURIComponent(subject)}`;
                };
                subjectListElem.appendChild(subjectButton);
            });
        } else {
            subjectListElem.innerHTML = "<p>No subjects found for this course/semester.</p>";
        }
    }

    // Main logic to handle BSc, MSc, and other courses
    if (course === 'BSc') {
        if (category && year) {
            displayBScSubjects(category, year);
        } else {
            subjectListElem.innerHTML = "<p>Please select a valid category and year for BSc.</p>";
        }
    } else if (course === 'MSc') {
        if (category && semester) {
            displayMScSubjects(category, semester);
        } else {
            subjectListElem.innerHTML = "<p>Please select a valid category and semester for MSc.</p>";
        }
    } else if (['BCA', 'BBA', 'BJMC', 'MIB'].includes(course)) {
        if (semester) {
            displaySemesterSubjects(course, semester);
        } else {
            subjectListElem.innerHTML = "<p>Please select a valid semester for this course.</p>";
        }
    } else {
        subjectListElem.innerHTML = "<p>Invalid course selected.</p>";
    }

    // Back to previous page
    if (backToBtn) {
        backToBtn.addEventListener("click", function () {
            window.history.back();
        });
    }
});
