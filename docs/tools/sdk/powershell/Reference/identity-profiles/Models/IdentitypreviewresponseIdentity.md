---
id: identitypreviewresponse-identity
title: IdentitypreviewresponseIdentity
pagination_label: IdentitypreviewresponseIdentity
sidebar_label: IdentitypreviewresponseIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentitypreviewresponseIdentity', 'IdentitypreviewresponseIdentity'] 
slug: /tools/sdk/powershell/identityprofiles/models/identitypreviewresponse-identity
tags: ['SDK', 'Software Development Kit', 'IdentitypreviewresponseIdentity', 'IdentitypreviewresponseIdentity']
---


# IdentitypreviewresponseIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Identity's DTO type. | [optional] 
**Id** | **String** | Identity ID. | [optional] 
**Name** | **String** | Identity's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentitypreviewresponseIdentity = Initialize-IdentitypreviewresponseIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$IdentitypreviewresponseIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

