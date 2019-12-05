  
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
                "icon" : 'FavoriteStarFill',
                "color" : availableColorPropsMapping.getColors('red'),
                "fontSize": null,
            };

        } else if (findMe === 'Contribute') {
            propsMap = {
                "friendlyLabel" : 'Contribute',
                "permission" : 'deleteListItems',
                "icon" : 'EditSolid12',
                "color" : availableColorPropsMapping.getColors('yellow'),
                "fontSize": null,
            };
            
        } else if (findMe === 'Read') {
            propsMap = {
                "friendlyLabel" : 'Read',
                "permission" : 'viewListItems',
                "icon" : 'RedEye',
                "color" : availableColorPropsMapping.getColors('green'),
                "fontSize": 24,
             };
            
        } else if (findMe === 'Edit') {
            propsMap = {
                "friendlyLabel" : 'Edit',
                "permission" : 'manageLists',
                "icon" : 'TriangleSolid',
                "color" : availableColorPropsMapping.getColors('blue'),
                "fontSize": null,
            };
            
        } else if (findMe === 'Design') {
            propsMap = {
                "friendlyLabel" : 'Design',
                "permission" : 'addAndCustomizePages',
                "icon" : 'Design',
                "color" : availableColorPropsMapping.getColors('pink'),
                "fontSize": null,
            };
            
        } else if (findMe === 'Approve') {
            propsMap = {
                "friendlyLabel" : 'Approve',
                "permission" : 'approveItems',
                "icon" : 'LockSolid',
                "color" : availableColorPropsMapping.getColors('purple'),
                "fontSize": null,
             };
            
        }

        //console.log('Props Mapping for: ' + findMe );
        //console.log( propsMap );        
        return propsMap;

    }   

  }

  export let availablePermissionsMapping = new PermissionsMapping();

