---
id: reviewable-entitlement-account-owner
title: ReviewableEntitlementAccountOwner
pagination_label: ReviewableEntitlementAccountOwner
sidebar_label: ReviewableEntitlementAccountOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReviewableEntitlementAccountOwner'] 
slug: /tools/sdk/powershell/v3/models/reviewable-entitlement-account-owner
tags: ['SDK', 'Software Development Kit', 'ReviewableEntitlementAccountOwner']
---


# ReviewableEntitlementAccountOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The id associated with the machine account owner | [optional] 
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | An enumeration of the types of Owner supported within the IdentityNow infrastructure. | [optional] 
**DisplayName** |  Pointer to **String** | The machine account owner's display name | [optional] 

## Examples

- Prepare the resource
```powershell
$ReviewableEntitlementAccountOwner = Initialize-PSSailpoint.V3ReviewableEntitlementAccountOwner  -Id 2c9180857182305e0171993737eb29e8 `
 -Type IDENTITY `
 -DisplayName Alison Ferguson
```

- Convert the resource to JSON
```powershell
$ReviewableEntitlementAccountOwner | ConvertTo-JSON
```


[[Back to top]](#) 

