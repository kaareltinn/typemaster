require('./hello');
define(['./Master'], (Master) => {
  var master = new Master('react')
  console.log(master.skill)
});
