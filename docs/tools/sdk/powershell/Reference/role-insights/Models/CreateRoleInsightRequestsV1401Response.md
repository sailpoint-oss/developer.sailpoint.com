---
id: create-role-insight-requests-v1401-response
title: CreateRoleInsightRequestsV1401Response
pagination_label: CreateRoleInsightRequestsV1401Response
sidebar_label: CreateRoleInsightRequestsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateRoleInsightRequestsV1401Response', 'CreateRoleInsightRequestsV1401Response'] 
slug: /tools/sdk/powershell/roleinsights/models/create-role-insight-requests-v1401-response
tags: ['SDK', 'Software Development Kit', 'CreateRoleInsightRequestsV1401Response', 'CreateRoleInsightRequestsV1401Response']
---


# CreateRoleInsightRequestsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateRoleInsightRequestsV1401Response = Initialize-CreateRoleInsightRequestsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$CreateRoleInsightRequestsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

