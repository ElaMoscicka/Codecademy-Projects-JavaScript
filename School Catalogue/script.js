class School{
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name(){
   return this._name;
  }
  
  get level(){
    return this._level;
  }
  
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  
  set numberOfstudents(newNumberOfStudents){
    if (typeof newNumberOfStudents === 'number'){
      this._numberOfstudents = newNumberOfStudents;
    }
    else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
      return 'Invalid input: numberOfStudents must be set to a Number.';
    }
  }
  
  quickFacts(){
   console.log(`${this.name} educates ${this.numberOfStudents}, typically between the ages of ${this.level}.`); 
  } 
    
 static pickSubstituteTeacher(substituteTeachers){
   let randomTeacher = Math.floor(substituteTeachers.length * Math.random() - 1);
return substituteTeachers[randomTeacher];
 }  
}

class PrimarySchool extends School{
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy  = pickupPolicy;
  } 
  
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class HighSchool extends School{
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  
  get sportsTeams(){
    return this._sportsTeams;
  }
}

console.log(HighSchool.sportsTeams);

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);


const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);
