---
id: identity-profile-exported-object-self
title: IdentityProfileExportedObjectSelf
pagination_label: IdentityProfileExportedObjectSelf
sidebar_label: IdentityProfileExportedObjectSelf
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityProfileExportedObjectSelf'] 
slug: /tools/sdk/powershell/v3/models/identity-profile-exported-object-self
tags: ['SDK', 'Software Development Kit', 'IdentityProfileExportedObjectSelf']
---


# IdentityProfileExportedObjectSelf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "ACCESS_PROFILE",    "ACCESS_REQUEST_CONFIG",    "ATTR_SYNC_SOURCE_CONFIG",    "AUTH_ORG",    "CAMPAIGN_FILTER",    "FORM_DEFINITION",    "GOVERNANCE_GROUP",    "IDENTITY_OBJECT_CONFIG",    "IDENTITY_PROFILE",    "LIFECYCLE_STATE",    "NOTIFICATION_TEMPLATE",    "PASSWORD_POLICY",    "PASSWORD_SYNC_GROUP",    "PUBLIC_IDENTITIES_CONFIG",    "ROLE",    "RULE",    "SEGMENT",    "SERVICE_DESK_INTEGRATION",    "SOD_POLICY",    "SOURCE",    "TAG",    "TRANSFORM",    "TRIGGER_SUBSCRIPTION",    "WORKFLOW" ] | Exported object&#39;s DTO type. | [optional] 
**Id** |  Pointer to **String** | Exported object&#39;s ID. | [optional] 
**Name** |  Pointer to **String** | Exported object&#39;s display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityProfileExportedObjectSelf = Initialize-IdentityProfileExportedObjectSelf  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$IdentityProfileExportedObjectSelf | ConvertTo-JSON
```


[[Back to top]](#) 

