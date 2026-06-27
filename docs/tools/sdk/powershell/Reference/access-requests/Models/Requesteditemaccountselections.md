---
id: requesteditemaccountselections
title: Requesteditemaccountselections
pagination_label: Requesteditemaccountselections
sidebar_label: Requesteditemaccountselections
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Requesteditemaccountselections', 'Requesteditemaccountselections'] 
slug: /tools/sdk/powershell/accessrequests/models/requesteditemaccountselections
tags: ['SDK', 'Software Development Kit', 'Requesteditemaccountselections', 'Requesteditemaccountselections']
---


# Requesteditemaccountselections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | **String** | The description for this requested item | [optional] 
**AccountsSelectionBlocked** | **Boolean** | This field indicates if account selections are not allowed for this requested item. * If true, this field indicates that account selections will not be available for this item and user combination. In this case, no account selections should be provided in the access request for this item and user combination, irrespective of whether the user has single or multiple accounts on a source. * An example is where a user is requesting an access profile that is already assigned to one of their accounts.  | [optional] [default to $false]
**AccountsSelectionBlockedReason** | **String** | If account selections are not allowed for an item, this field will denote the reason. | [optional] 
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | The type of the item being requested. | [optional] 
**Id** | **String** | The id of the requested item | [optional] 
**Name** | **String** | The name of the requested item | [optional] 
**Sources** | [**[]Sourceaccountselections**](sourceaccountselections) | The details for the sources and accounts for the requested item and identity combination | [optional] 

## Examples

- Prepare the resource
```powershell
$Requesteditemaccountselections = Initialize-Requesteditemaccountselections  -Description An access profile for the admins `
 -AccountsSelectionBlocked false `
 -AccountsSelectionBlockedReason ACCESS_PROFILE_ALREADY_ASSIGNED_TO_AN_ACCOUNT `
 -Type ACCESS_PROFILE `
 -Id 720fd239701344aea76c93ba91376aec `
 -Name Test Access Profile `
 -Sources null
```

- Convert the resource to JSON
```powershell
$Requesteditemaccountselections | ConvertTo-JSON
```


[[Back to top]](#) 

