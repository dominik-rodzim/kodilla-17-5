var os = require('os');
var colors = require('colors');
var time = require('./timeFormatting');

colors.setTheme({
  system: 'rainbow',
  release: 'red',
  cpu: 'cyan',
  uptime: 'grey',
  username: 'green',
});

function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var timeStructure = time.timeFormatting(uptime);
    var userInfo = os.userInfo();
    console.log('System: '.system, type);
    console.log('Release: '.release, release);
    console.log('CPU: '.cpu, cpu);
    console.log('Uptime: '.uptime, timeStructure.hour, ':', timeStructure.minute, ':', timeStructure.second);
    console.log('Username: '.username, userInfo.username);
    console.log('Home dir: ', userInfo.homedir);
}

exports.print = getOSinfo;