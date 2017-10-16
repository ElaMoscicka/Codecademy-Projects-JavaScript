//declaring types of events
const getAllEvents = () => {
  return ['Marathon', 'Triathlon', 'Decathlon'];
}

 
//selects an event at random from an array of events
const getRandomEvent = () => {
  const allEvents = getAllEvents();
  const event = 
  allEvents[Math.floor(Math.random() * allEvents.length)];
  return event;
};

//returns a list of the activities, based on the event selected
const getEventActivities = event => {
  const allEvents = getAllEvents();
  event=
  allEvents['Marathon', 'Triathlon', 'Decathlon'];

  if (!allEvents.includes(event)) {
    return null; 
  }
  
  let activities;
  if (event === 'Marathon') {
    activities = ['Running'];
  } 
  if (event === 'Triathlon') {
    activities = ['Running', 'Cycling', 'Swimming']; 
  } 
  if (event === 'Decathlon') {
    activities = ['Running', 'Hurdles', 'Javelin throw', 'Discus Throw', 'Shot put', 'High Jump'];
  }
  return activities.join(', ')
};

//returns the number of days to train, based on the event selected
const getDaysToTrain = event => {
  const allEvents = getAllEvents();
  if (!allEvents.includes(event)) {
    return null; 
  }
 	const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };
  return eventTrainingTimes[event];
};

//calling the program
const getEventMessage = ()=>{
const myEvent = getRandomEvent();

console.log('Your event is a ' + myEvent + '. Your event activities consist of ' + getEventActivities(myEvent) + '. You have ' + getDaysToTrain(myEvent) +  ' days to train.');
}


//starting program
getEventMessage();
