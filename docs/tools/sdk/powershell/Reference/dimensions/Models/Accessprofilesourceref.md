---
id: accessprofilesourceref
title: Accessprofilesourceref
pagination_label: Accessprofilesourceref
sidebar_label: Accessprofilesourceref
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessprofilesourceref', 'Accessprofilesourceref'] 
slug: /tools/sdk/powershell/dimensions/models/accessprofilesourceref
tags: ['SDK', 'Software Development Kit', 'Accessprofilesourceref', 'Accessprofilesourceref']
---


# Accessprofilesourceref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the source the access profile is associated with. | [optional] 
**Type** |  **Enum** [  "SOURCE" ] | Source's DTO type. | [optional] 
**Name** | **String** | Source name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessprofilesourceref = Initialize-Accessprofilesourceref  -Id 2c91809773dee3610173fdb0b6061ef4 `
 -Type SOURCE `
 -Name ODS-AD-SOURCE
```

- Convert the resource to JSON
```powershell
$Accessprofilesourceref | ConvertTo-JSON
```


[[Back to top]](#) 

