---
id: entity-created-by-dto
title: EntityCreatedByDTO
pagination_label: EntityCreatedByDTO
sidebar_label: EntityCreatedByDTO
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'EntityCreatedByDTO'] 
slug: /tools/sdk/powershell/beta/models/entity-created-by-dto
tags: ['SDK', 'Software Development Kit', 'EntityCreatedByDTO']
---


# EntityCreatedByDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | ID of the creator | [optional] 
**DisplayName** |  Pointer to **String** | The display name of the creator | [optional] 

## Examples

- Prepare the resource
```powershell
$EntityCreatedByDTO = Initialize-BetaEntityCreatedByDTO  -Id 2c918090761a5aac0176215c46a62d58 `
 -DisplayName Ashley.Pierce
```

- Convert the resource to JSON
```powershell
$EntityCreatedByDTO | ConvertTo-JSON
```


[[Back to top]](#) 

