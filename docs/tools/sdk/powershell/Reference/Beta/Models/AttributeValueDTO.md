---
id: beta-attribute-value-dto
title: AttributeValueDTO
pagination_label: AttributeValueDTO
sidebar_label: AttributeValueDTO
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeValueDTO', 'BetaAttributeValueDTO'] 
slug: /tools/sdk/powershell/beta/models/attribute-value-dto
tags: ['SDK', 'Software Development Kit', 'AttributeValueDTO', 'BetaAttributeValueDTO']
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
$AttributeValueDTO = Initialize-PSSailpoint.BetaAttributeValueDTO  -Value public `
 -Name Public `
 -Status active
```

- Convert the resource to JSON
```powershell
$AttributeValueDTO | ConvertTo-JSON
```


[[Back to top]](#) 

