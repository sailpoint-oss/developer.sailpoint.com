---
id: v2025-account-activity-searched-item
title: AccountActivitySearchedItem
pagination_label: AccountActivitySearchedItem
sidebar_label: AccountActivitySearchedItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountActivitySearchedItem', 'V2025AccountActivitySearchedItem'] 
slug: /tools/sdk/powershell/v2025/models/account-activity-searched-item
tags: ['SDK', 'Software Development Kit', 'AccountActivitySearchedItem', 'V2025AccountActivitySearchedItem']
---


# AccountActivitySearchedItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of account activity. | [optional] 
**Action** | **String** | Type of action performed in the activity. | [optional] 
**Created** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Modified** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Synced** | **String** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**Stage** | **String** | Activity's current stage. | [optional] 
**Status** | **String** | Activity's current status. | [optional] 
**Requester** | [**ActivityIdentity**](activity-identity) |  | [optional] 
**Recipient** | [**ActivityIdentity**](activity-identity) |  | [optional] 
**TrackingNumber** | **String** | Account activity's tracking number. | [optional] 
**Errors** | **[]String** | Errors provided by the source while completing account actions. | [optional] 
**Warnings** | **[]String** | Warnings provided by the source while completing account actions. | [optional] 
**Approvals** | [**[]Approval1**](approval1) | Approvals performed on an item during activity. | [optional] 
**OriginalRequests** | [**[]OriginalRequest**](original-request) | Original actions that triggered all individual source actions related to the account action. | [optional] 
**ExpansionItems** | [**[]ExpansionItem**](expansion-item) | Controls that translated the attribute requests into actual provisioning actions on the source. | [optional] 
**AccountRequests** | [**[]AccountRequest**](account-request) | Account data for each individual source action triggered by the original requests. | [optional] 
**Sources** | **String** | Sources involved in the account activity. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountActivitySearchedItem = Initialize-V2025AccountActivitySearchedItem  -Id 2c91808375d8e80a0175e1f88a575222 `
 -Action Identity Refresh. `
 -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Synced 2018-06-25T20:22:28.104Z `
 -Stage Completed `
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
$AccountActivitySearchedItem | ConvertTo-JSON
```


[[Back to top]](#) 

