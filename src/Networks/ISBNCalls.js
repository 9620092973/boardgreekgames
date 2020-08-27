import axios from 'axios';
import index from '../Constants/index'

export function isbnVideoScanner(data,type){
	// this function will send the data to the api 
	const URL = 'api/game/barcode/';
	const config = {
        url : URL,
        method : 'POST',
		data : {
            'Scanner_data':data,
            'Scanner_type':type,
        },
    };
    console.log("Scanner",config) 
    return(
        index(config)
    )
}

export function FetchIsbn(data){
	// this function will send the data to the api 
	const URL = 'api/game/barcode/';
	const config = {
        url : URL,
        method : 'GET',
		params : {
            'Scanner_data':data,
          
        },
    };
    console.log("ScannerGET",config) 
    return(
        index(config)
    )
}
