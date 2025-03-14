---
id: v2024-list-deploys200-response
title: ListDeploys200Response
pagination_label: ListDeploys200Response
sidebar_label: ListDeploys200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListDeploys200Response', 'V2024ListDeploys200Response'] 
slug: /tools/sdk/powershell/v2024/models/list-deploys200-response
tags: ['SDK', 'Software Development Kit', 'ListDeploys200Response', 'V2024ListDeploys200Response']
---


# ListDeploys200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]DeployResponse**](deploy-response) | list of deployments | [optional] 

## Examples

- Prepare the resource
```powershell
$ListDeploys200Response = Initialize-PSSailpoint.V2024ListDeploys200Response  -Items null
```

- Convert the resource to JSON
```powershell
$ListDeploys200Response | ConvertTo-JSON
```


[[Back to top]](#) 

