  
    //import * as strings from 'PivotTilesWebPartStrings';
  import {
    IPropertyPaneDropdownOption
  } from '@microsoft/sp-webpart-base';

  import { availablePropsMapping } from './AvailablePropsMapping';

  export class PropsMapping {
        
    /**
     * Get choices from public options at top of devListMapping... should be the single source
     * Pick the options you want visible in this scenario
     */

    public listChoices: IPropertyPaneDropdownOption[] = <IPropertyPaneDropdownOption[]>[
        availablePropsMapping.doNothing,
        availablePropsMapping.custom,
        availablePropsMapping.fullContRead,
        availablePropsMapping.fullEditContRead,
        availablePropsMapping.approvalSite,

    ];
  }

  export let corpPropsMapping = new PropsMapping();

