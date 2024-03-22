---
id: password-info-query-dto
title: PasswordInfoQueryDTO
pagination_label: PasswordInfoQueryDTO
sidebar_label: PasswordInfoQueryDTO
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PasswordInfoQueryDTO'] 
slug: /tools/sdk/powershell/beta/models/password-info-query-dto
tags: ['SDK', 'Software Development Kit', 'PasswordInfoQueryDTO']
---


# PasswordInfoQueryDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserName** |  Pointer to **String** | The login name of the user | [optional] 
**SourceName** |  Pointer to **String** | The display name of the source | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordInfoQueryDTO = Initialize-PSSailpointBetaPasswordInfoQueryDTO  -UserName Abby.Smith `
 -SourceName My-AD
```

- Convert the resource to JSON
```powershell
$PasswordInfoQueryDTO | ConvertTo-JSON
```


[[Back to top]](#) 

