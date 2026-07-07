---
id: attributemappings-all-of-target
title: AttributemappingsAllOfTarget
pagination_label: AttributemappingsAllOfTarget
sidebar_label: AttributemappingsAllOfTarget
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributemappingsAllOfTarget', 'AttributemappingsAllOfTarget'] 
slug: /tools/sdk/powershell/machineaccountmappings/models/attributemappings-all-of-target
tags: ['SDK', 'Software Development Kit', 'AttributemappingsAllOfTarget', 'AttributemappingsAllOfTarget']
---


# AttributemappingsAllOfTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCOUNT",    "IDENTITY",    "OWNER_ACCOUNT",    "OWNER_IDENTITY" ] | The type of target entity | [optional] 
**AttributeName** | **String** | Name of the targeted attribute | [optional] 
**SourceId** | **String** | The ID of Source | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributemappingsAllOfTarget = Initialize-AttributemappingsAllOfTarget  -Type IDENTITY `
 -AttributeName businessApplication `
 -SourceId 2c9180835d2e5168015d32f890ca1581
```

- Convert the resource to JSON
```powershell
$AttributemappingsAllOfTarget | ConvertTo-JSON
```


[[Back to top]](#) 

