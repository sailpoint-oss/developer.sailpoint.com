---
id: v2024-account-activity-document
title: AccountActivityDocument
pagination_label: AccountActivityDocument
sidebar_label: AccountActivityDocument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountActivityDocument', 'V2024AccountActivityDocument'] 
slug: /tools/sdk/powershell/v2024/models/account-activity-document
tags: ['SDK', 'Software Development Kit', 'AccountActivityDocument', 'V2024AccountActivityDocument']
---


# AccountActivityDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** |  | [required]
**Name** |  **String** |  | [required]
**Type** |  [**DocumentType**](document-type) |  | [required]
**Action** |  Pointer to **String** | Type of action performed in the activity. | [optional] 
**Created** |  Pointer to **System.DateTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Modified** |  Pointer to **System.DateTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Stage** |  Pointer to **String** | Activity's current stage. | [optional] 
**Origin** |  Pointer to **String** | Activity's origin. | [optional] 
**Status** |  Pointer to **String** | Activity's current status. | [optional] 
**Requester** |  Pointer to [**AccountSource**](account-source) |  | [optional] 
**Recipient** |  Pointer to [**AccountSource**](account-source) |  | [optional] 
**TrackingNumber** |  Pointer to **String** | Account activity's tracking number. | [optional] 
**Errors** |  Pointer to **[]String** | Errors provided by the source while completing account actions. | [optional] 
**Warnings** |  Pointer to **[]String** | Warnings provided by the source while completing account actions. | [optional] 
**Approvals** |  Pointer to [**[]Approval1**](approval1) | Approvals performed on an item during activity. | [optional] 
**OriginalRequests** |  Pointer to [**[]OriginalRequest**](original-request) | Original actions that triggered all individual source actions related to the account action. | [optional] 
**ExpansionItems** |  Pointer to [**[]ExpansionItem**](expansion-item) | Controls that translated the attribute requests into actual provisioning actions on the source. | [optional] 
**AccountRequests** |  Pointer to [**[]AccountRequest**](account-request) | Account data for each individual source action triggered by the original requests. | [optional] 
**Sources** |  Pointer to **String** | Sources involved in the account activity. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountActivityDocument = Initialize-PSSailpoint.V2024AccountActivityDocument  -Id 2c91808375d8e80a0175e1f88a575222 `
 -Name john.doe `
 -Type null `
 -Action Identity Refresh. `
 -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Stage Completed `
 -Origin null `
 -Status Complete `
 -Requester null `
 -Recipient null `
 -TrackingNumber 61aad0c9e8134eca89e76a35e0cabe3f `
 -Errors null `
 -Warnings null `
 -Approvals null `
 -OriginalRequests null `
 -ExpansionItems null `
 -AccountRequests null `
 -Sources smartsheet-test, airtable-v4, IdentityNow
```

- Convert the resource to JSON
```powershell
$AccountActivityDocument | ConvertTo-JSON
```


[[Back to top]](#) 

