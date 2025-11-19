---
id: v2025-password-info-query-dto
title: PasswordInfoQueryDTO
pagination_label: PasswordInfoQueryDTO
sidebar_label: PasswordInfoQueryDTO
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordInfoQueryDTO', 'V2025PasswordInfoQueryDTO'] 
slug: /tools/sdk/powershell/v2025/models/password-info-query-dto
tags: ['SDK', 'Software Development Kit', 'PasswordInfoQueryDTO', 'V2025PasswordInfoQueryDTO']
---


# PasswordInfoQueryDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserName** | **String** | The login name of the user | [optional] 
**SourceName** | **String** | The display name of the source | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordInfoQueryDTO = Initialize-V2025PasswordInfoQueryDTO  -UserName Abby.Smith `
 -SourceName My-AD
```

- Convert the resource to JSON
```powershell
$PasswordInfoQueryDTO | ConvertTo-JSON
```


[[Back to top]](#) 

