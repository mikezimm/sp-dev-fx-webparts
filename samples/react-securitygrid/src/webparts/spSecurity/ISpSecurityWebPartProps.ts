import { SPSiteUser } from "../SPSecurityService";
import { SPPermission } from "@microsoft/sp-page-context";
import { IColor } from "office-ui-fabric-react/lib/Color";
export interface ISelectedPermission {
  permission: string;
  color: IColor;
  friendlyLabel?: string;
  icon?: string;
  fontSize?: number;
}


export interface ISpSecurityWebPartProps {
  users: SPSiteUser[];
  permission: string; // used if only one permission selected
  selectedPermissions: ISelectedPermission[];// used if multiple  permissions selected
  showHiddenLists: boolean;
  showCatalogs: boolean;
  letUserSelectPermission: boolean;
  letUserSelectUsers: boolean;
  letUserSelectLists: boolean;
  includeAdminSelectedLists: boolean; // true to inlude them, false to excluder
  adminSelectedLists: string[];
  listTitleColumnWidth: number;
  showEmail: boolean; //0 show name, 1 show email
  showSecurityGroups: boolean; // show PrincipalType=4
  showUsers: boolean; // show PrincipalType=1

  propScheme: string; // select property scheme - intially for colored permissions

}
