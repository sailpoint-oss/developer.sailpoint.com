---
id: get-multi-host-integrations-list-v1429-response
title: GetMultiHostIntegrationsListV1429Response
pagination_label: GetMultiHostIntegrationsListV1429Response
sidebar_label: GetMultiHostIntegrationsListV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetMultiHostIntegrationsListV1429Response', 'GetMultiHostIntegrationsListV1429Response'] 
slug: /tools/sdk/powershell/multihostintegration/models/get-multi-host-integrations-list-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetMultiHostIntegrationsListV1429Response', 'GetMultiHostIntegrationsListV1429Response']
---


# GetMultiHostIntegrationsListV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetMultiHostIntegrationsListV1429Response = Initialize-GetMultiHostIntegrationsListV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetMultiHostIntegrationsListV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

