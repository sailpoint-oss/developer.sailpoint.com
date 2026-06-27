---
id: get-role-mining-sessions-v1401-response
title: GetRoleMiningSessionsV1401Response
pagination_label: GetRoleMiningSessionsV1401Response
sidebar_label: GetRoleMiningSessionsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetRoleMiningSessionsV1401Response', 'GetRoleMiningSessionsV1401Response'] 
slug: /tools/sdk/powershell/iairolemining/models/get-role-mining-sessions-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetRoleMiningSessionsV1401Response', 'GetRoleMiningSessionsV1401Response']
---


# GetRoleMiningSessionsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetRoleMiningSessionsV1401Response = Initialize-GetRoleMiningSessionsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetRoleMiningSessionsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

