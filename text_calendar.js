function printCalendar(year, month) {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const date = new Date(year, month - 1, 1);
    let calendar = `    ${date.toLocaleString('default', { month: 'long' })} ${year}\n`;
    calendar += days.join(' ') + '\n';
  
    // Get the first day of the month and the total number of days
    const firstDay = date.getDay();
    const daysInMonth = new Date(year, month, 0).getDate();
  
    // Print empty spaces for the first row before the 1st
    let row = '   '.repeat(firstDay);
  
    for (let day = 1; day <= daysInMonth; day++) {
      row += day.toString().padStart(2, ' ') + ' ';
      if ((firstDay + day) % 7 === 0 || day === daysInMonth) {
        calendar += row.trimEnd() + '\n';
        row = '';
      }
    }
  
    console.log(calendar);
  }
  

  module.exports = {
   printCalendar: printCalendar,
 };
  


