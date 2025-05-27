---
id: v2025-entity-created-by-dto
title: EntityCreatedByDTO
pagination_label: EntityCreatedByDTO
sidebar_label: EntityCreatedByDTO
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntityCreatedByDTO', 'V2025EntityCreatedByDTO'] 
slug: /tools/sdk/powershell/v2025/models/entity-created-by-dto
tags: ['SDK', 'Software Development Kit', 'EntityCreatedByDTO', 'V2025EntityCreatedByDTO']
---


# EntityCreatedByDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the creator | [optional] 
**DisplayName** | **String** | The display name of the creator | [optional] 

## Examples

- Prepare the resource
```powershell
$EntityCreatedByDTO = Initialize-V2025EntityCreatedByDTO  -Id 2c918090761a5aac0176215c46a62d58 `
 -DisplayName Ashley.Pierce
```

- Convert the resource to JSON
```powershell
$EntityCreatedByDTO | ConvertTo-JSON
```


[[Back to top]](#) 

