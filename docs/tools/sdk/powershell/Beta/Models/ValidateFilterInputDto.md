---
id: validate-filter-input-dto
title: ValidateFilterInputDto
pagination_label: ValidateFilterInputDto
sidebar_label: ValidateFilterInputDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ValidateFilterInputDto'] 
slug: /tools/sdk/powershell/beta/models/validate-filter-input-dto
tags: ['SDK', 'Software Development Kit', 'ValidateFilterInputDto']
---


# ValidateFilterInputDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** |  [**SystemCollectionsHashtable**](system-collections-hashtable) | Mock input to evaluate filter expression against. | 
**VarFilter** |  **String** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | 

## Examples

- Prepare the resource
```powershell
$ValidateFilterInputDto = Initialize-PSSailpointBetaValidateFilterInputDto  -VarInput {identityId&#x3D;201327fda1c44704ac01181e963d463c} `
 -VarFilter $[?($.identityId &#x3D;&#x3D; &quot;201327fda1c44704ac01181e963d463c&quot;)]
```

- Convert the resource to JSON
```powershell
$ValidateFilterInputDto | ConvertTo-JSON
```


[[Back to top]](#) 

