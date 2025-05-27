---
id: beta-access-request-item
title: AccessRequestItem
pagination_label: AccessRequestItem
sidebar_label: AccessRequestItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestItem', 'BetaAccessRequestItem'] 
slug: /tools/sdk/powershell/beta/models/access-request-item
tags: ['SDK', 'Software Development Kit', 'AccessRequestItem', 'BetaAccessRequestItem']
---


# AccessRequestItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | The type of the item being requested. | [required]
**Id** | **String** | ID of Role, Access Profile or Entitlement being requested. | [required]
**Comment** | **String** | Comment provided by requester. * Comment is required when the request is of type Revoke Access.  | [optional] 
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities and /access-request-status. | [optional] 
**RemoveDate** | **System.DateTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. Also known as the expiration date. * Specify a date in the future. * The current SLA for the deprovisioning is 24 hours. * This date can be modified to either extend or decrease the duration of access item assignments for the specified identity. You can change the expiration date for requests for yourself or direct reports, but you cannot remove an expiration date on an already approved item. If the access request has not been approved, you can cancel it and submit a new one without the expiration. If it has already been approved, then you have to revoke the access and then re-request without the expiration.  | [optional] 
**AssignmentId** | **String** | The assignmentId for a specific role assignment on the identity. This id is used to revoke that specific roleAssignment on that identity. * For use with REVOKE_ACCESS requests for roles for identities with multiple accounts on a single source.  | [optional] 
**NativeIdentity** | **String** | The unique identifier for an account on the identity, designated as the account ID attribute in the source's account schema. This is used to revoke a specific attributeAssignment on the identity. * For use with REVOKE_ACCESS requests for entitlements for identities with multiple accounts on a single source.  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestItem = Initialize-BetaAccessRequestItem  -Type ACCESS_PROFILE `
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

