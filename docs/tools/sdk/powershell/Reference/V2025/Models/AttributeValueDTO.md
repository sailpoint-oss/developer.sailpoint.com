---
id: v2025-attribute-value-dto
title: AttributeValueDTO
pagination_label: AttributeValueDTO
sidebar_label: AttributeValueDTO
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeValueDTO', 'V2025AttributeValueDTO'] 
slug: /tools/sdk/powershell/v2025/models/attribute-value-dto
tags: ['SDK', 'Software Development Kit', 'AttributeValueDTO', 'V2025AttributeValueDTO']
---


# AttributeValueDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | Technical name of the Attribute value. This is unique and cannot be changed after creation. | [optional] 
**Name** | **String** | The display name of the Attribute value. | [optional] 
**Status** | **String** | The status of the Attribute value. | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeValueDTO = Initialize-PSSailpoint.V2025AttributeValueDTO  -Value public `
 -Name Public `
 -Status active
```

- Convert the resource to JSON
```powershell
$AttributeValueDTO | ConvertTo-JSON
```


[[Back to top]](#) 

