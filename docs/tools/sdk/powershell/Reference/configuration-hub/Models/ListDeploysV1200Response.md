---
id: list-deploys-v1200-response
title: ListDeploysV1200Response
pagination_label: ListDeploysV1200Response
sidebar_label: ListDeploysV1200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListDeploysV1200Response', 'ListDeploysV1200Response'] 
slug: /tools/sdk/powershell/configurationhub/models/list-deploys-v1200-response
tags: ['SDK', 'Software Development Kit', 'ListDeploysV1200Response', 'ListDeploysV1200Response']
---


# ListDeploysV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]Deployresponse**](deployresponse) | list of deployments | [optional] 

## Examples

- Prepare the resource
```powershell
$ListDeploysV1200Response = Initialize-ListDeploysV1200Response  -Items null
```

- Convert the resource to JSON
```powershell
$ListDeploysV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

