  
  //import * as strings from 'PivotTilesWebPartStrings';
  import {
    IPropertyPaneDropdownOption
  } from '@microsoft/sp-webpart-base';

  import { availableColorPropsMapping } from './AvailableColorMapping';

  export class PermissionsMapping {

    public getPermissionLevel (findMe) :any {
        let propsMap = {};
        //NOTE:
        //This should be the default list structure for the webpart.
        // Be sure these values match the default set in the webpart.manifest.json - needs to be done by hand.
        if (findMe === 'FullControl') {
            propsMap = {
                "friendlyLabel" : 'Full Control',
                "permission" : 'manageWeb',
                "shape" : 'star',
                "color" : availableColorPropsMapping.getColors('red'),
            };

        } else if (findMe === 'Contribute') {
            propsMap = {
                "friendlyLabel" : 'Contribute',
                "permission" : 'deleteListItems',
                "shape" : 'square',
                "color" : availableColorPropsMapping.getColors('yellow'),
            };
            
        } else if (findMe === 'Read') {
            propsMap = {
                "friendlyLabel" : 'Read',
                "permission" : 'viewListItems',
                "shape" : 'triangle',
                "color" : availableColorPropsMapping.getColors('green'),
             };
            
        } else if (findMe === 'Edit') {
            propsMap = {
                "friendlyLabel" : 'Edit',
                "permission" : 'manageLists',
                "shape" : 'star',
                "color" : availableColorPropsMapping.getColors('blue'),
            };
            
        } else if (findMe === 'Design') {
            propsMap = {
                "friendlyLabel" : 'Design',
                "permission" : 'addAndCustomizePages',
                "shape" : 'star',
                "color" : availableColorPropsMapping.getColors('pink'),
            };
            
        } else if (findMe === 'Approve') {
            propsMap = {
                "friendlyLabel" : 'Approve',
                "permission" : 'approveItems',
                "color" : availableColorPropsMapping.getColors('purple'),
             };
            
        }

        //console.log('Props Mapping for: ' + findMe );
        //console.log( propsMap );        
        return propsMap;

    }   

  }

  export let availablePermissionsMapping = new PermissionsMapping();

