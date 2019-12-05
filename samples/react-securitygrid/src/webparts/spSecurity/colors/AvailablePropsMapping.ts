  
  //import * as strings from 'PivotTilesWebPartStrings';
  import {
    IPropertyPaneDropdownOption
  } from '@microsoft/sp-webpart-base';

  import { availablePermissionsMapping } from './AvailablePermissionMapping';

  export class PropsMapping {

    public doNothing: IPropertyPaneDropdownOption = <IPropertyPaneDropdownOption>
        {   index: 0,   key: 'None', text: "None"  };
    
    public custom: IPropertyPaneDropdownOption = <IPropertyPaneDropdownOption>
        {   index: 0,   key: 'Custom', text: "Custom"  };

    public fullContRead: IPropertyPaneDropdownOption = <IPropertyPaneDropdownOption>
        {   index: 0,   key: 'FullContRead', text: "2010 defaults - Full, Contr, Read"  };

    public fullEditContRead: IPropertyPaneDropdownOption = <IPropertyPaneDropdownOption>
        {   index: 1,   key: 'FullEditContRead', text: "2013 defaults - Full, Edit, Contr, Read"  };

    public approvalSite: IPropertyPaneDropdownOption = <IPropertyPaneDropdownOption>
        {   index: 1,   key: 'ApprovalSite', text: "Approval Site - 2013 + Approval"  };
        
    public defaultLevels: IPropertyPaneDropdownOption = <IPropertyPaneDropdownOption>
        {   index: 1,   key: 'DefaultLevels', text: "Default levels - Approval + Design"  };

    public getProperties (findMe) :any {
        let propsMap = {};
        //NOTE:
        //This should be the default list structure for the webpart.
        // Be sure these values match the default set in the webpart.manifest.json - needs to be done by hand.
        if (findMe === 'FullContRead') {
            propsMap = {
                "selectedPermissions" : [
                    availablePermissionsMapping.getPermissionLevel('FullControl'),
                    availablePermissionsMapping.getPermissionLevel('Contribute'),
                    availablePermissionsMapping.getPermissionLevel('Read'),
                ]
            
            };

        } else if (findMe === 'FullEditContRead') {
            propsMap = {
                "selectedPermissions" : [
                    availablePermissionsMapping.getPermissionLevel('FullControl'),
                    availablePermissionsMapping.getPermissionLevel('Edit'),
                    availablePermissionsMapping.getPermissionLevel('Contribute'),
                    availablePermissionsMapping.getPermissionLevel('Read'),
                ]
            };
            
        } else if (findMe === 'ApprovalSite') {
            propsMap = {
                "selectedPermissions" : [
                    availablePermissionsMapping.getPermissionLevel('FullControl'),
                    availablePermissionsMapping.getPermissionLevel('Edit'),
                    availablePermissionsMapping.getPermissionLevel('Approve'),
                    availablePermissionsMapping.getPermissionLevel('Contribute'),
                    availablePermissionsMapping.getPermissionLevel('Read'),
                ]
             };
            
        } else if (findMe === 'DefaultLevels') {
            propsMap = {
                "selectedPermissions" : [
                    availablePermissionsMapping.getPermissionLevel('FullControl'),
                    availablePermissionsMapping.getPermissionLevel('Design'),
                    availablePermissionsMapping.getPermissionLevel('Edit'),
                    availablePermissionsMapping.getPermissionLevel('Approve'),
                    availablePermissionsMapping.getPermissionLevel('Contribute'),
                    availablePermissionsMapping.getPermissionLevel('Read'),
                ]
             };
            
        }

        console.log('Props Mapping for: ' + findMe );
        console.log( propsMap );        
        return propsMap;

    }   

  }

  export let availablePropsMapping = new PropsMapping();

