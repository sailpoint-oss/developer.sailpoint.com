---
id: identityprofile-all-of-owner
title: IdentityprofileAllOfOwner
pagination_label: IdentityprofileAllOfOwner
sidebar_label: IdentityprofileAllOfOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityprofileAllOfOwner', 'IdentityprofileAllOfOwner'] 
slug: /tools/sdk/powershell/identityprofiles/models/identityprofile-all-of-owner
tags: ['SDK', 'Software Development Kit', 'IdentityprofileAllOfOwner', 'IdentityprofileAllOfOwner']
---


# IdentityprofileAllOfOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Owner's object type. | [optional] 
**Id** | **String** | Owner's ID. | [optional] 
**Name** | **String** | Owner's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityprofileAllOfOwner = Initialize-IdentityprofileAllOfOwner  -Type IDENTITY `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$IdentityprofileAllOfOwner | ConvertTo-JSON
```


[[Back to top]](#) 

