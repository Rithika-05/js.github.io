// Primitive Value Types
function StudentGrades() {
    let mathGrade = 85;
    let scienceGrade = mathGrade;
    mathGrade = 90;
    console.log(`Student Grades: Math = ${mathGrade}, Science = ${scienceGrade}`);
  }
  
  StudentGrades();
  // Output: Student Grades: Math = 90, Science = 85
  
  // Reference Types
  function TeacherInfo() {
    let teacher1 = {
      name: "Ms. Johnson",
      subject: "English"
    };
    let teacher2 = teacher1;
    teacher1.subject = "History";
    console.log(`Teacher Info: teacher1.subject = ${teacher1.subject}, teacher2.subject = ${teacher2.subject}`);
  }
  
  TeacherInfo();
  