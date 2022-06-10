import {franc, francAll} from 'franc';

import codes, {by639_1, by639_2T, by639_2B} from 'iso-language-codes'
try {

    const languageCode = franc(process.argv.slice(2)[0])
    if (languageCode == 'und'){
        throw('Invalid Language');
    }
    console.log(by639_2T[languageCode])
}catch (e){
    console.log(e)
}
