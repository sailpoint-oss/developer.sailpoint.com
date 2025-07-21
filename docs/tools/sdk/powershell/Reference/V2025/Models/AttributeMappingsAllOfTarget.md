---
id: v2025-attribute-mappings-all-of-target
title: AttributeMappingsAllOfTarget
pagination_label: AttributeMappingsAllOfTarget
sidebar_label: AttributeMappingsAllOfTarget
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeMappingsAllOfTarget', 'V2025AttributeMappingsAllOfTarget'] 
slug: /tools/sdk/powershell/v2025/models/attribute-mappings-all-of-target
tags: ['SDK', 'Software Development Kit', 'AttributeMappingsAllOfTarget', 'V2025AttributeMappingsAllOfTarget']
---


# AttributeMappingsAllOfTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | The type of target entity | [optional] 
**AttributeName** | **String** | Name of the targeted attribute | [optional] 
**SourceId** | **String** | The ID of Source | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeMappingsAllOfTarget = Initialize-V2025AttributeMappingsAllOfTarget  -Type IDENTITY `
 -AttributeName businessApplication `
 -SourceId 2c9180835d2e5168015d32f890ca1581
```

- Convert the resource to JSON
```powershell
$AttributeMappingsAllOfTarget | ConvertTo-JSON
```


[[Back to top]](#) 

