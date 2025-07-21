---
id: v2024-access-request-item
title: AccessRequestItem
pagination_label: AccessRequestItem
sidebar_label: AccessRequestItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestItem', 'V2024AccessRequestItem'] 
slug: /tools/sdk/powershell/v2024/models/access-request-item
tags: ['SDK', 'Software Development Kit', 'AccessRequestItem', 'V2024AccessRequestItem']
---


# AccessRequestItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | The type of the item being requested. | [required]
**Id** | **String** | ID of Role, Access Profile or Entitlement being requested. | [required]
**Comment** | **String** | Comment provided by requester. * Comment is required when the request is of type Revoke Access.  | [optional] 
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities and /access-request-status. | [optional] 
**RemoveDate** | **System.DateTime** | The date and time the role or access profile or entitlement is no longer assigned to the specified identity. Also known as the expiration date. * Specify a date-time in the future. * The current SLA for the deprovisioning is 24 hours. * This date-time can be used to change the duration of an existing access item assignment for the specified identity. A GRANT_ACCESS request can extend duration or even remove an expiration date, and either a  GRANT_ACCESS or REVOKE_ACCESS request can reduce duration or add an expiration date where one has not previously been present. You can change the expiration date in requests for yourself or others you are authorized to request for.  | [optional] 
**AssignmentId** | **String** | The assignmentId for a specific role assignment on the identity. This id is used to revoke that specific roleAssignment on that identity. * For use with REVOKE_ACCESS requests for roles for identities with multiple accounts on a single source.  | [optional] 
**NativeIdentity** | **String** | The unique identifier for an account on the identity, designated as the account ID attribute in the source's account schema. This is used to revoke a specific attributeAssignment on the identity. * For use with REVOKE_ACCESS requests for entitlements for identities with multiple accounts on a single source.  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestItem = Initialize-V2024AccessRequestItem  -Type ACCESS_PROFILE `
 -Id 2c9180835d2e5168015d32f890ca1581 `
 -Comment Requesting access profile for John Doe `
 -ClientMetadata {requestedAppName=test-app, requestedAppId=2c91808f7892918f0178b78da4a305a1} `
 -RemoveDate 2020-07-11T21:23:15Z `
 -AssignmentId ee48a191c00d49bf9264eb0a4fc3a9fc `
 -NativeIdentity CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN
```

- Convert the resource to JSON
```powershell
$AccessRequestItem | ConvertTo-JSON
```


[[Back to top]](#) 

