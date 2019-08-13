/**
 * File System Module pt2
 */

const fs = require('fs');

// create a folder
fs.mkdir('tutorial', (err) => {
    if (err)
        console.log(err)
    else {
        console.log('created foler successfully');
    }
});


fs.mkdir('tutorial', (err) => {
    if (err)
        console.log(err)
    else {
        fs.writeFile('./tutorial/example.txt', '123', (err) => {
            if (err)
                console.log(err);
            else {
                console.log('successfully created file');
            }
        });
    }
});

fs.unlink('./tutorial/example.txt', (err)=>{
    if(err)
        console.log(err);
    else {
        fs.rmdir('tutorial', (err)=>{
            if(err)
                console.log(err);
            else {
                console.log('deleted folder');
            }
        });
    }
});

fs.readdir('example', (err, files)=>{
    if(err)
        console.log(err);
    else {
        for (let file of files) {
            fs.unlink('./example/'+file, (err)=>{
                if (err)
                    console.log(err);
                else {
                    console.log('successfully deleted file');
                }
            })
        }
    }
})
