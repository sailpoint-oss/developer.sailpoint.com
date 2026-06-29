---
id: identityprofileexportedobject-self
title: IdentityprofileexportedobjectSelf
pagination_label: IdentityprofileexportedobjectSelf
sidebar_label: IdentityprofileexportedobjectSelf
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityprofileexportedobjectSelf', 'IdentityprofileexportedobjectSelf'] 
slug: /tools/sdk/powershell/identityprofiles/models/identityprofileexportedobject-self
tags: ['SDK', 'Software Development Kit', 'IdentityprofileexportedobjectSelf', 'IdentityprofileexportedobjectSelf']
---


# IdentityprofileexportedobjectSelf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ACCESS_REQUEST_CONFIG",    "ATTR_SYNC_SOURCE_CONFIG",    "AUTH_ORG",    "CAMPAIGN_FILTER",    "FORM_DEFINITION",    "GOVERNANCE_GROUP",    "IDENTITY_OBJECT_CONFIG",    "IDENTITY_PROFILE",    "LIFECYCLE_STATE",    "NOTIFICATION_TEMPLATE",    "PASSWORD_POLICY",    "PASSWORD_SYNC_GROUP",    "PUBLIC_IDENTITIES_CONFIG",    "ROLE",    "RULE",    "SEGMENT",    "SERVICE_DESK_INTEGRATION",    "SOD_POLICY",    "SOURCE",    "TAG",    "TRANSFORM",    "TRIGGER_SUBSCRIPTION",    "WORKFLOW" ] | Exported object's DTO type. | [optional] 
**Id** | **String** | Exported object's ID. | [optional] 
**Name** | **String** | Exported object's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityprofileexportedobjectSelf = Initialize-IdentityprofileexportedobjectSelf  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$IdentityprofileexportedobjectSelf | ConvertTo-JSON
```


[[Back to top]](#) 

