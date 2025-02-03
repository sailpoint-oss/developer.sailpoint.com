---
id: v2024-multi-policy-request
title: MultiPolicyRequest
pagination_label: MultiPolicyRequest
sidebar_label: MultiPolicyRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiPolicyRequest', 'V2024MultiPolicyRequest'] 
slug: /tools/sdk/powershell/v2024/models/multi-policy-request
tags: ['SDK', 'Software Development Kit', 'MultiPolicyRequest', 'V2024MultiPolicyRequest']
---


# MultiPolicyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FilteredPolicyList** | **[]String** | Multi-policy report will be run for this list of ids | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiPolicyRequest = Initialize-PSSailpoint.V2024MultiPolicyRequest  -FilteredPolicyList null
```

- Convert the resource to JSON
```powershell
$MultiPolicyRequest | ConvertTo-JSON
```


[[Back to top]](#) 

