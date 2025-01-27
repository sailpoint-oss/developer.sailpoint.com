---
id: self-import-export-dto
title: SelfImportExportDto
pagination_label: SelfImportExportDto
sidebar_label: SelfImportExportDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SelfImportExportDto'] 
slug: /tools/sdk/powershell/beta/models/self-import-export-dto
tags: ['SDK', 'Software Development Kit', 'SelfImportExportDto']
---


# SelfImportExportDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "ACCESS_PROFILE",    "ACCESS_REQUEST_CONFIG",    "ATTR_SYNC_SOURCE_CONFIG",    "AUTH_ORG",    "CAMPAIGN_FILTER",    "FORM_DEFINITION",    "GOVERNANCE_GROUP",    "IDENTITY_OBJECT_CONFIG",    "IDENTITY_PROFILE",    "LIFECYCLE_STATE",    "NOTIFICATION_TEMPLATE",    "PASSWORD_POLICY",    "PASSWORD_SYNC_GROUP",    "PUBLIC_IDENTITIES_CONFIG",    "ROLE",    "RULE",    "SEGMENT",    "SERVICE_DESK_INTEGRATION",    "SOD_POLICY",    "SOURCE",    "TAG",    "TRANSFORM",    "TRIGGER_SUBSCRIPTION",    "WORKFLOW" ] | Imported/exported object's DTO type. Import is currently only possible with the IDENTITY_OBJECT_CONFIG, IDENTITY_PROFILE, RULE, SOURCE, TRANSFORM, and TRIGGER_SUBSCRIPTION object types. | [optional] 
**Id** |  Pointer to **String** | Imported/exported object's ID. | [optional] 
**Name** |  Pointer to **String** | Imported/exported object's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SelfImportExportDto = Initialize-PSSailpoint.BetaSelfImportExportDto  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$SelfImportExportDto | ConvertTo-JSON
```


[[Back to top]](#) 

