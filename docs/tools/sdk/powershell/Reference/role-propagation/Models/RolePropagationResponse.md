---
id: role-propagation-response
title: RolePropagationResponse
pagination_label: RolePropagationResponse
sidebar_label: RolePropagationResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RolePropagationResponse', 'RolePropagationResponse'] 
slug: /tools/sdk/powershell/rolepropagation/models/role-propagation-response
tags: ['SDK', 'Software Development Kit', 'RolePropagationResponse', 'RolePropagationResponse']
---


# RolePropagationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RolePropagationId** | **String** | Id of the Role Propagation process triggered. | [optional] 

## Examples

- Prepare the resource
```powershell
$RolePropagationResponse = Initialize-RolePropagationResponse  -RolePropagationId 47b9fb02-e12e-42ba-8bfe-1860d78c88eb
```

- Convert the resource to JSON
```powershell
$RolePropagationResponse | ConvertTo-JSON
```


[[Back to top]](#) 

