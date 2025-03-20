// Your code here
function createEmployeeRecord(employeeArray) {
    return {
       firstName: employeeArray[0],
       familyName: employeeArray[1],
       title: employeeArray[2],
       payPerHour: employeeArray[3],
       timeInEvents: [],
       timeOutEvents: []
    };
 }
 
 function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord);
 }
 
 function createTimeInEvent(employeeRecord, dateTime) {
    const [date, hour] = dateTime.split(" ");
    employeeRecord.timeInEvents.push({
       type: "TimeIn",
       hour: parseInt(hour, 10),
       date: date
    });
    return employeeRecord;
 }
 
 function createTimeOutEvent(employeeRecord, dateTime) {
    const [date, hour] = dateTime.split(" ");
    employeeRecord.timeOutEvents.push({
       type: "TimeOut",
       hour: parseInt(hour, 10),
       date: date
    });
    return employeeRecord;
 }
 
 function hoursWorkedOnDate(employeeRecord, date) {
    const timeIn = employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOut = employeeRecord.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
 }
 
 
 function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    return hoursWorked * employeeRecord.payPerHour;
 }
 
 function allWagesFor(employeeRecord) {
    return employeeRecord.timeInEvents.reduce((total, timeInEvent) => {
       return total + wagesEarnedOnDate(employeeRecord, timeInEvent.date);
    }, 0);
 }
 
 function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, employeeRecord) => {
       return total + allWagesFor(employeeRecord);
    }, 0);
 }
 
 
 
 
 
 