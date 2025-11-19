---
id: v2024-validate-filter-input-dto
title: ValidateFilterInputDto
pagination_label: ValidateFilterInputDto
sidebar_label: ValidateFilterInputDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ValidateFilterInputDto', 'V2024ValidateFilterInputDto'] 
slug: /tools/sdk/powershell/v2024/models/validate-filter-input-dto
tags: ['SDK', 'Software Development Kit', 'ValidateFilterInputDto', 'V2024ValidateFilterInputDto']
---


# ValidateFilterInputDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Mock input to evaluate filter expression against. | [required]
**VarFilter** | **String** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [required]

## Examples

- Prepare the resource
```powershell
$ValidateFilterInputDto = Initialize-V2024ValidateFilterInputDto  -VarInput {identityId=201327fda1c44704ac01181e963d463c} `
 -VarFilter $[?($.identityId == "201327fda1c44704ac01181e963d463c")]
```

- Convert the resource to JSON
```powershell
$ValidateFilterInputDto | ConvertTo-JSON
```


[[Back to top]](#) 

