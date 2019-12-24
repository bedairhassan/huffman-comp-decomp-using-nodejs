var table = require('./table').table


// 10 101 11 
// TODO : display error if a character remains

let fun = (table,string)=>{

    let search = (string,table)=>{

        for (let i=0;i<table.length;i++){

            // console.log({
            //     i:i,
            //     string:string,
            //     tablecode:table[i].code,
            //     tableletter:table[i].letter
            // })

            if(string===table[i].code){

                string=''

                return {found:true,letter:table[i].letter};
            }

            
        }

        // console.log('\nwatchsearch is ',watchsearch)
        return {found:false}
    }

    let str =[]
    let decompressed = []

    // remove table where letter has length bigger than 1
    table = require('./tablerefine-help').excludebasedonlength(table)
    

    for (let i=0;i<string.length;i++){

        

        str.push(string[i])

        let searching = search(str.join(''),table)
        
        console.log({
            i : i,
            cycle : string[i],
            str : str.join(''),
            searching: searching
        })

        if (searching.found===true){
            decompressed.push(searching.letter)
            str=[]
        }

        

        
    }
    return decompressed
}

let str = '10 110 10'
str = require('./playground/removewhitespace').removewhitespace(str)
let decompressed = fun(table,str)
console.log('decompressed: ',decompressed)