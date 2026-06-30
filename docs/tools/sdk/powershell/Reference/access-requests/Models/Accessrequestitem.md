---
id: accessrequestitem
title: Accessrequestitem
pagination_label: Accessrequestitem
sidebar_label: Accessrequestitem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestitem', 'Accessrequestitem'] 
slug: /tools/sdk/powershell/accessrequests/models/accessrequestitem
tags: ['SDK', 'Software Development Kit', 'Accessrequestitem', 'Accessrequestitem']
---


# Accessrequestitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | The type of the item being requested. | [required]
**Id** | **String** | ID of Role, Access Profile or Entitlement being requested. | [required]
**Comment** | **String** | Comment provided by requester. * Comment is required when the request is of type Revoke Access.  | [optional] 
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities and /access-request-status. | [optional] 
**StartDate** | **System.DateTime** | The date and time the role or access profile or entitlement is/will be provisioned to the specified identity. Also known as the sunrise date. * Specify a date-time in the future. * This date-time can be used to indicate date-time when access item will be provisioned on the identity account. A GRANT_ACCESS request can use startDate to specify when to schedule provisioning of access item for an identity/account & a MODIFY_ACCESS request can use startDate to change the provisioning date-time of already assigned access item. But REVOKE_ACCESS request can not have startDate field. You can change the sunrise date in requests for yourself or others you are authorized to request for. * If the startDate is in the past, then the provisioning will be processed as soon as possible, but no guarantees can be made about when the provisioning will occur. If the startDate is in the future, then the provisioning will be scheduled to occur on that date and time. If no startDate is provided, then the provisioning will be processed as soon as possible.  | [optional] 
**RemoveDate** | **System.DateTime** | The date and time the role or access profile or entitlement is no longer assigned to the specified identity. Also known as the expiration date. * Specify a date-time in the future. * The current SLA for the deprovisioning is 24 hours. * This date-time can be used to change the duration of an existing access item assignment for the specified identity. A GRANT_ACCESS request can extend duration or even remove an expiration date, and either a  GRANT_ACCESS or REVOKE_ACCESS request can reduce duration or add an expiration date where one has not previously been present. You can change the expiration date in requests for yourself or others you are authorized to request for.  | [optional] 
**AssignmentId** | **String** | The assignmentId for a specific role assignment on the identity. This id is used to revoke that specific roleAssignment on that identity. * For use with REVOKE_ACCESS requests for roles for identities with multiple accounts on a single source.  | [optional] 
**NativeIdentity** | **String** | The unique identifier for an account on the identity, designated as the account ID attribute in the source's account schema. This is used to revoke a specific attributeAssignment on the identity. * For use with REVOKE_ACCESS requests for entitlements for identities with multiple accounts on a single source.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessrequestitem = Initialize-Accessrequestitem  -Type ACCESS_PROFILE `
 -Id 2c9180835d2e5168015d32f890ca1581 `
 -Comment Requesting access profile for John Doe `
 -ClientMetadata {"requestedAppName":"test-app","requestedAppId":"2c91808f7892918f0178b78da4a305a1"} `
 -StartDate 2020-06-12T21:22:23Z `
 -RemoveDate 2020-07-11T21:23:15Z `
 -AssignmentId ee48a191c00d49bf9264eb0a4fc3a9fc `
 -NativeIdentity CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN
```

- Convert the resource to JSON
```powershell
$Accessrequestitem | ConvertTo-JSON
```


[[Back to top]](#) 

