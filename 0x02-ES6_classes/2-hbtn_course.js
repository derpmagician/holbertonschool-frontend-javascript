export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a String');
    if (typeof length !== 'number') throw TypeError('Length must be a number')
    if (!Array.isArray(students) && students.every((i) => typeof i !== 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;

  }

  get name() {
    return this._name;
  }

  get length() {
    return this.length;
  }

  get students() {
    return this.students;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('name must be a String');
    this._name = newName;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') throw TypeError('length must be a Number');
    this._length = newLength;
  }

  set students(newStudents) {
    if (!Array.isArray(Students) && Students.every((i) => typeof i !== 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
