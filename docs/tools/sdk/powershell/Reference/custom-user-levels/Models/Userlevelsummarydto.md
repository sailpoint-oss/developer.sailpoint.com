---
id: userlevelsummarydto
title: Userlevelsummarydto
pagination_label: Userlevelsummarydto
sidebar_label: Userlevelsummarydto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Userlevelsummarydto', 'Userlevelsummarydto'] 
slug: /tools/sdk/powershell/customuserlevels/models/userlevelsummarydto
tags: ['SDK', 'Software Development Kit', 'Userlevelsummarydto', 'Userlevelsummarydto']
---


# Userlevelsummarydto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique identifier of the UserLevel. | [optional] 
**Name** | **String** | The human-readable name of the UserLevel. | [optional] 
**Description** | **String** | A human-readable description of the UserLevel. | [optional] 
**LegacyGroup** | **String** | The legacy group associated with the UserLevel, used for backward compatibility for the UserLevel id. | [optional] 
**RightSets** | [**[]Rightsetdto**](rightsetdto) | List of RightSets associated with the UserLevel. | [optional] 
**Custom** | **Boolean** | Indicates whether the UserLevel is custom. | [optional] [default to $true]
**AdminAssignable** | **Boolean** | Indicates whether the UserLevel is admin-assignable. | [optional] [default to $true]
**TranslatedName** | **String** | The translated name of the UserLevel. | [optional] 
**TranslatedGrant** | **String** | The translated grant message for the UserLevel. | [optional] 
**TranslatedRemove** | **String** | The translated remove message for the UserLevel. | [optional] 
**Owner** | [**Publicidentity**](publicidentity) |  | [optional] 
**Status** |  **Enum** [  "ACTIVE",    "DRAFT" ] | The status of the UserLevel. | [optional] 
**Created** | **System.DateTime** | The creation timestamp of the UserLevel. | [optional] 
**Modified** | **System.DateTime** | The last modification timestamp of the UserLevel. | [optional] 
**AssociatedIdentitiesCount** | **Int32** | The count of associated identities for the UserLevel. | [optional] 

## Examples

- Prepare the resource
```powershell
$Userlevelsummarydto = Initialize-Userlevelsummarydto  -Id beb02a57-010f-4c29-a6d2-fae9628bda73 `
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
$Userlevelsummarydto | ConvertTo-JSON
```


[[Back to top]](#) 

