---
id: v2025-user-level-summary-dto
title: UserLevelSummaryDTO
pagination_label: UserLevelSummaryDTO
sidebar_label: UserLevelSummaryDTO
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UserLevelSummaryDTO', 'V2025UserLevelSummaryDTO'] 
slug: /tools/sdk/powershell/v2025/models/user-level-summary-dto
tags: ['SDK', 'Software Development Kit', 'UserLevelSummaryDTO', 'V2025UserLevelSummaryDTO']
---


# UserLevelSummaryDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique identifier of the UserLevel. | [optional] 
**Name** | **String** | The human-readable name of the UserLevel. | [optional] 
**Description** | **String** | A human-readable description of the UserLevel. | [optional] 
**LegacyGroup** | **String** | The legacy group associated with the UserLevel, used for backward compatibility for the UserLevel id. | [optional] 
**RightSets** | [**[]RightSetDTO**](right-set-dto) | List of RightSets associated with the UserLevel. | [optional] 
**Custom** | **Boolean** | Indicates whether the UserLevel is custom. | [optional] [default to $true]
**AdminAssignable** | **Boolean** | Indicates whether the UserLevel is admin-assignable. | [optional] [default to $true]
**TranslatedName** | **String** | The translated name of the UserLevel. | [optional] 
**TranslatedGrant** | **String** | The translated grant message for the UserLevel. | [optional] 
**TranslatedRemove** | **String** | The translated remove message for the UserLevel. | [optional] 
**Owner** | [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
**Status** |  **Enum** [  "ACTIVE",    "DRAFT" ] | The status of the UserLevel. | [optional] 
**Created** | **System.DateTime** | The creation timestamp of the UserLevel. | [optional] 
**Modified** | **System.DateTime** | The last modification timestamp of the UserLevel. | [optional] 
**AssociatedIdentitiesCount** | **Int32** | The count of associated identities for the UserLevel. | [optional] 

## Examples

- Prepare the resource
```powershell
$UserLevelSummaryDTO = Initialize-V2025UserLevelSummaryDTO  -Id beb02a57-010f-4c29-a6d2-fae9628bda73 `
 -Name Custom User Level Name `
 -Description This is a description of the CustomUserLevel. `
 -LegacyGroup ORG_ADMIN `
 -RightSets null `
 -Custom true `
 -AdminAssignable true `
 -TranslatedName Translated Custom User Level Name `
 -TranslatedGrant Grant Message `
 -TranslatedRemove Remove Message `
 -Owner null `
 -Status Active `
 -Created 2023-01-01T12:00Z `
 -Modified 2023-01-02T12:00Z `
 -AssociatedIdentitiesCount 10
```

- Convert the resource to JSON
```powershell
$UserLevelSummaryDTO | ConvertTo-JSON
```


[[Back to top]](#) 

