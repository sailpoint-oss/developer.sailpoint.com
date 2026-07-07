---
id: taggedobjectdto
title: Taggedobjectdto
pagination_label: Taggedobjectdto
sidebar_label: Taggedobjectdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Taggedobjectdto', 'Taggedobjectdto'] 
slug: /tools/sdk/powershell/taggedobjects/models/taggedobjectdto
tags: ['SDK', 'Software Development Kit', 'Taggedobjectdto', 'Taggedobjectdto']
---


# Taggedobjectdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCESS_PROFILE",    "APPLICATION",    "CAMPAIGN",    "ENTITLEMENT",    "IDENTITY",    "ROLE",    "SOD_POLICY",    "SOURCE" ] | DTO type | [optional] 
**Id** | **String** | ID of the object this reference applies to | [optional] 
**Name** | **String** | Human-readable display name of the object this reference applies to | [optional] 

## Examples

- Prepare the resource
```powershell
$Taggedobjectdto = Initialize-Taggedobjectdto  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$Taggedobjectdto | ConvertTo-JSON
```


[[Back to top]](#) 

