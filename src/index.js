#!/usr/bin/env node
import cfg from '../config'
import fs from 'fs'
import path from 'path'
import clip from 'cliparoo'
import chalk from 'chalk'

function copy(){
    let item = process.argv[2]
    let snip = process.argv[3]
    if (!item || item === "") {
        console.log('Sorry, a filename must be assigned!')
        return
    }
    if (snip === 'ls'){
        console.log('ls') 
        return 
    }
    if (!snip && cfg[item] === undefined) {
        console.log( "Sorry, " + chalk.blue(item) + " was not uncached ...")
        return 
    }
    
    if (!!snip){
        let config = path.resolve(__dirname,'../config.json')
        
        cfg[item] = snip
        fs.writeFile(config,JSON.stringify(cfg,null,4),function(err){
            if (err) throw err
            console.log(item +' was cached!')
        })
    } else {
        clip(cfg[item],function(err){
            if (err) throw err
            console.log(chalk.gray('copied'))
        });
    }
    
}

export default copy()
