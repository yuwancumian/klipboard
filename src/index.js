#!/usr/bin/env node
import cfg from '../config'
import fs from 'fs'

function copy(){
    let snip
    let item = process.argv[2]
    if (!process.argv[2] || process.argv[2] === "") {
        console.log('Sorry, a filename must be assigned!')
        return
    }
    if (!!process.argv[3]){
        let item = process.argv[2]
        let snip = process.argv[3]
        cfg[item] = snip
        fs.writeFile('config.json',JSON.stringify(cfg,null,4),function(err){
            if (err) throw err;
            console.log(item +' was cached!');
        })
    }
}

export default copy();
