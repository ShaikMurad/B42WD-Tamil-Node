const os = require("os");

// 1KB = 1024 bytes
// 1MB = 1024 kb
// 1GB = 1024 MB

console.log(
  `Free memory in ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)},GB`
);

console.log(
  "total memory in GB:",
  (os.totalmem() / 1024 / 1024 / 1024).toFixed(2),
  "GB"
);
console.log("Version", os.version());
console.log("CPU", os.cpus());
