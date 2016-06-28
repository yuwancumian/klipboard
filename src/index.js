#!/usr/bin/env node
import cfg from '../config'
import fs from 'fs'
import path from 'path'
import clip from 'cliparoo'
import chalk from 'chalk'

function copy(){
    let snip
    let item = process.argv[2]
    if (!process.argv[2] || process.argv[2] === "") {
        console.log('Sorry, a filename must be assigned!')
        return
    }
    if (process.argv[2] === 'ls'){
        console.log('ls') 
        return 
    }
    if (cfg[item] === undefined) {
        console.log( "Sorry, " + item + " was not uncached ...")
        return 
    }
    
    if (!!process.argv[3]){
        let item = process.argv[2]
        let snip = process.argv[3]
        let config = path.resolve(__dirname,'../config.json')
        
        cfg[item] = snip
        fs.writeFile(config,JSON.stringify(cfg,null,4),function(err){
            if (err) throw err
            console.log(item +' was cached!')
        })
    }
    clip(cfg[item],function(err){
        if (err) throw err
        console.log(chalk.green('copied'))
    });
}

export default copy()
