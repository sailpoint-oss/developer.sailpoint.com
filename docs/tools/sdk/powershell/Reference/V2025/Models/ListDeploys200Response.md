---
id: v2025-list-deploys200-response
title: ListDeploys200Response
pagination_label: ListDeploys200Response
sidebar_label: ListDeploys200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListDeploys200Response', 'V2025ListDeploys200Response'] 
slug: /tools/sdk/powershell/v2025/models/list-deploys200-response
tags: ['SDK', 'Software Development Kit', 'ListDeploys200Response', 'V2025ListDeploys200Response']
---


# ListDeploys200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]DeployResponse**](deploy-response) | list of deployments | [optional] 

## Examples

- Prepare the resource
```powershell
$ListDeploys200Response = Initialize-V2025ListDeploys200Response  -Items null
```

- Convert the resource to JSON
```powershell
$ListDeploys200Response | ConvertTo-JSON
```


[[Back to top]](#) 

