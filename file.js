const fs = require("fs");

const quote = "No beauty shines brighter than that of a good heart 😊";

// awesome.html

// fs.writeFile("./awesome.html", quote, (err) => {
//   console.log("Completed writing!!!");
// });

const quote2 = "Live more, worry less😊😊";

// Create the below files with quote2 as the content

// Task - 1

// /backup/
//text-1.html
//text-2.html
//text-3.html
//.....
//text-10.html

// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//     console.log("Completed writing!!!");
//   });
// }

// Task 2

// node file.js 30 -> 30 files to be created | text-1.html ... text-30.html

const [, , noOfFiles] = process.argv;
console.log(noOfFiles);

// genFiles(noOfFiles);

// Early return
function genFiles(noOfFiles) {
  if (noOfFiles > 100) {
    console.log("Maximum number  reached!!! 🤗🤗☠️");
    return; // Stops function
  }

  for (let i = 1; i <= noOfFiles; i++) {
    fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
      console.log("Completed writing!!!");
    });
  }
}

// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("❌", err);
//     // throw -> Error create
//   } else {
//     console.log(data);
//   }
// });

const quote3 = "Dream without fear, love without limits 🧡";

fs.appendFile("./fun.html", "\n" + quote3, (err) => {
  console.log("Completed writing!!!");
});

fs.unlink("./delete-me.css", (err) => {
  console.log("Completed deleting!!!");
});
