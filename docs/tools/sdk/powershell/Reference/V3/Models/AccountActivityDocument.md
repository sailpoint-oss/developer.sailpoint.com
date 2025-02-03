---
id: account-activity-document
title: AccountActivityDocument
pagination_label: AccountActivityDocument
sidebar_label: AccountActivityDocument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountActivityDocument', 'AccountActivityDocument'] 
slug: /tools/sdk/powershell/v3/models/account-activity-document
tags: ['SDK', 'Software Development Kit', 'AccountActivityDocument', 'AccountActivityDocument']
---


# AccountActivityDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** |  | [required]
**Name** | **String** |  | [required]
**Type** | [**DocumentType**](document-type) |  | [required]
**Action** | **String** | Type of action performed in the activity. | [optional] 
**Created** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Modified** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Stage** | **String** | Activity's current stage. | [optional] 
**Origin** | **String** | Activity's origin. | [optional] 
**Status** | **String** | Activity's current status. | [optional] 
**Requester** | [**AccountSource**](account-source) |  | [optional] 
**Recipient** | [**AccountSource**](account-source) |  | [optional] 
**TrackingNumber** | **String** | Account activity's tracking number. | [optional] 
**Errors** | **[]String** | Errors provided by the source while completing account actions. | [optional] 
**Warnings** | **[]String** | Warnings provided by the source while completing account actions. | [optional] 
**Approvals** | [**[]Approval**](approval) | Approvals performed on an item during activity. | [optional] 
**OriginalRequests** | [**[]OriginalRequest**](original-request) | Original actions that triggered all individual source actions related to the account action. | [optional] 
**ExpansionItems** | [**[]ExpansionItem**](expansion-item) | Controls that translated the attribute requests into actual provisioning actions on the source. | [optional] 
**AccountRequests** | [**[]AccountRequest**](account-request) | Account data for each individual source action triggered by the original requests. | [optional] 
**Sources** | **String** | Sources involved in the account activity. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountActivityDocument = Initialize-PSSailpoint.V3AccountActivityDocument  -Id 2c91808375d8e80a0175e1f88a575222 `
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

