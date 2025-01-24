---
id: attribute-value-dto
title: AttributeValueDTO
pagination_label: AttributeValueDTO
sidebar_label: AttributeValueDTO
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeValueDTO'] 
slug: /tools/sdk/powershell/v2024/models/attribute-value-dto
tags: ['SDK', 'Software Development Kit', 'AttributeValueDTO']
---


# AttributeValueDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** |  Pointer to **String** | Technical name of the Attribute value. This is unique and cannot be changed after creation. | [optional] 
**Name** |  Pointer to **String** | The display name of the Attribute value. | [optional] 
**Status** |  Pointer to **String** | The status of the Attribute value. | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeValueDTO = Initialize-PSSailpoint.V2024AttributeValueDTO  -Value public `
 -Name Public `
 -Status active
```

- Convert the resource to JSON
```powershell
$AttributeValueDTO | ConvertTo-JSON
```


[[Back to top]](#) 

