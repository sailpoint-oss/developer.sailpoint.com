---
id: reviewableentitlement-account-owner
title: ReviewableentitlementAccountOwner
pagination_label: ReviewableentitlementAccountOwner
sidebar_label: ReviewableentitlementAccountOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReviewableentitlementAccountOwner', 'ReviewableentitlementAccountOwner'] 
slug: /tools/sdk/powershell/certifications/models/reviewableentitlement-account-owner
tags: ['SDK', 'Software Development Kit', 'ReviewableentitlementAccountOwner', 'ReviewableentitlementAccountOwner']
---


# ReviewableentitlementAccountOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The id associated with the machine account owner | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | An enumeration of the types of Owner supported within the IdentityNow infrastructure. | [optional] 
**DisplayName** | **String** | The machine account owner's display name | [optional] 

## Examples

- Prepare the resource
```powershell
$ReviewableentitlementAccountOwner = Initialize-ReviewableentitlementAccountOwner  -Id 2c9180857182305e0171993737eb29e8 `
 -Type IDENTITY `
 -DisplayName Alison Ferguson
```

- Convert the resource to JSON
```powershell
$ReviewableentitlementAccountOwner | ConvertTo-JSON
```


[[Back to top]](#) 

