---
id: get-connector-v1401-response
title: GetConnectorV1401Response
pagination_label: GetConnectorV1401Response
sidebar_label: GetConnectorV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetConnectorV1401Response', 'GetConnectorV1401Response'] 
slug: /tools/sdk/powershell/connectors/models/get-connector-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetConnectorV1401Response', 'GetConnectorV1401Response']
---


# GetConnectorV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetConnectorV1401Response = Initialize-GetConnectorV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetConnectorV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

