import './ResultTime.css';

const ResultTime =(props)=> {
 /**The component 'ResultTime' is meant to display the time retrieved from the Django-
  * powered database. For reasons best known to Django, the time it sends to the front
  * end is 1 hour behind the local time. So in a bid to update the time,  I had to take 
  * the whole time string which initial appears like this: 22-05-25T17:05... and format it 
  * in a user-friendly manner and update the time to suit the local time.
  */
  const timeSplit = props.time.split('').join("");
  const date = timeSplit.slice(0, 10);
  const hourOfDayInString = timeSplit.slice(11, 13);
  const hourOfDay =  (parseInt(hourOfDayInString) +1) % 24;
  const correctHourOfDayInString =hourOfDay.toString();
  const restTimeOfDay = timeSplit.slice(13, 16);  
  const timeOfDay = correctHourOfDayInString + restTimeOfDay;
  return (
    <div className="result-time">
      <div className="result-time__month">{date}</div>
      <div className="result-time__timeOfDay">{timeOfDay}</div>
    </div>
  );
}

export default ResultTime;
