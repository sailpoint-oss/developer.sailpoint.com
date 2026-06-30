---
id: get-multi-host-integrations-list-v1401-response
title: GetMultiHostIntegrationsListV1401Response
pagination_label: GetMultiHostIntegrationsListV1401Response
sidebar_label: GetMultiHostIntegrationsListV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetMultiHostIntegrationsListV1401Response', 'GetMultiHostIntegrationsListV1401Response'] 
slug: /tools/sdk/powershell/multihostintegration/models/get-multi-host-integrations-list-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetMultiHostIntegrationsListV1401Response', 'GetMultiHostIntegrationsListV1401Response']
---


# GetMultiHostIntegrationsListV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetMultiHostIntegrationsListV1401Response = Initialize-GetMultiHostIntegrationsListV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetMultiHostIntegrationsListV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

