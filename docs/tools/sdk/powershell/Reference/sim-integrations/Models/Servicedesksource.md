---
id: servicedesksource
title: Servicedesksource
pagination_label: Servicedesksource
sidebar_label: Servicedesksource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Servicedesksource', 'Servicedesksource'] 
slug: /tools/sdk/powershell/simintegrations/models/servicedesksource
tags: ['SDK', 'Software Development Kit', 'Servicedesksource', 'Servicedesksource']
---


# Servicedesksource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOURCE" ] | DTO type of source for service desk integration template. | [optional] 
**Id** | **String** | ID of source for service desk integration template. | [optional] 
**Name** | **String** | Human-readable name of source for service desk integration template. | [optional] 

## Examples

- Prepare the resource
```powershell
$Servicedesksource = Initialize-Servicedesksource  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$Servicedesksource | ConvertTo-JSON
```


[[Back to top]](#) 

