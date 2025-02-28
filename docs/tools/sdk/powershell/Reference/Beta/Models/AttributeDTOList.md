---
id: beta-attribute-dto-list
title: AttributeDTOList
pagination_label: AttributeDTOList
sidebar_label: AttributeDTOList
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeDTOList', 'BetaAttributeDTOList'] 
slug: /tools/sdk/powershell/beta/models/attribute-dto-list
tags: ['SDK', 'Software Development Kit', 'AttributeDTOList', 'BetaAttributeDTOList']
---


# AttributeDTOList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | [**[]AttributeDTO**](attribute-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeDTOList = Initialize-PSSailpoint.BetaAttributeDTOList  -Attributes [{key=iscPrivacy, name=Privacy, multiselect=false, status=active, type=governance, objectTypes=[all], description=Specifies the level of privacy associated with an access item., values=[{value=public, name=Public, status=active}]}]
```

- Convert the resource to JSON
```powershell
$AttributeDTOList | ConvertTo-JSON
```


[[Back to top]](#) 

