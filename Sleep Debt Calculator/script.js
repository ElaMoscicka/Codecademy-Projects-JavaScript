//checking how many hours of sleep user got each night of the week
const getSleepHours = day => {
  switch(day){
    case 'Monday':
      return 8;
    case 'Tuesday':
      return 7;
    case 'Wednesday':
      return 8;
    case 'Thursday':
      return 9;
    case 'Friday':
      return 6;
    case 'Saturday':
      return 10;
    case 'Sunday':
      return 8;
  }
};

//getting total sleep hours that user actually slept for whole week
const getActualSleepHours = () =>{
  return getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');
}

//getting ideal sleep hours per day that user prefers, multiplying them by 7 as we need to count all days
const getIdealSleepHours = () =>{
  let idealHours = 8;
  return idealHours*7;
}

//calculating sleep debt
const calculateSleepDebt = () =>{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  
  //output the result to the user, with hours, by comparing actualSleepHours and idealSleepHours
  if(actualSleepHours === idealSleepHours){
    console.log('You have got ' + actualSleepHours + ' hours of sleep this week, it is a perfect amount.');
  }
 if(actualSleepHours > idealSleepHours){
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than you needed this week.');
  }
  if(actualSleepHours< idealSleepHours){
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest.');
}
}

//start the program
calculateSleepDebt();
