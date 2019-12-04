  
  //import * as strings from 'PivotTilesWebPartStrings';
  /*
  import {
    IPropertyPaneDropdownOption
  } from '@microsoft/sp-webpart-base';
  */

  export class ColorPropsMapping {

    public getColors (findMe) :any {
        let propsMap = {};

        //NOTE:
        //This should be the default list structure for the webpart.
        // Be sure these values match the default set in the webpart.manifest.json - needs to be done by hand.
 
        if (findMe === 'red') {
            propsMap = {
                    "a": 100,
                    "b": 0,
                    "g": 0,
                    "h": 0,
                    "hex": 'ff0000',
                    "r": 255,
                    "s": 100,
                    "str": '#ff0000',
                    "v": 100,
            };

        } else if (findMe === 'yellow') {
            propsMap = {
                    "a": 100,
                    "b": 0,
                    "g": 250,
                    "h": 58.940298507462686,
                    "hex": 'fffa00',
                    "r": 255,
                    "s": 100,
                    "str": '#fffa00',
                    "v": 100,
            };
            
        } else if (findMe === 'green') {
            propsMap = {
                    "a": 100,
                    "b": 14,
                    "g": 225,
                    "h": 123.23880597014924,
                    "hex": '00ff0e',
                    "r": 0,
                    "s": 100,
                    "str": '#00ff0e',
                    "v": 100,
            };
            
        } else if (findMe === 'purple') {
            propsMap = {
                    "a": 100,
                    "b": 255,
                    "g": 0,
                    "h": 273.2686567164179,
                    "hex": '"8d00ff"',
                    "r": 141,
                    "s": 100,
                    "str": '#"8d00ff"',
                    "v": 100,
            };
            
        }
        //console.log('Prop Mapping for: ' + findMe );
        //console.log( propsMap );        
        return propsMap;

    }   

  }

  export let availableColorPropsMapping = new ColorPropsMapping();

