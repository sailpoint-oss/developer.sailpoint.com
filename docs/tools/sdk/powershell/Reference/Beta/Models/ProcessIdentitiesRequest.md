---
id: beta-process-identities-request
title: ProcessIdentitiesRequest
pagination_label: ProcessIdentitiesRequest
sidebar_label: ProcessIdentitiesRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProcessIdentitiesRequest', 'BetaProcessIdentitiesRequest'] 
slug: /tools/sdk/powershell/beta/models/process-identities-request
tags: ['SDK', 'Software Development Kit', 'ProcessIdentitiesRequest', 'BetaProcessIdentitiesRequest']
---


# ProcessIdentitiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityIds** | **[]String** | List of up to 250 identity IDs to process. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProcessIdentitiesRequest = Initialize-PSSailpoint.BetaProcessIdentitiesRequest  -IdentityIds null
```

- Convert the resource to JSON
```powershell
$ProcessIdentitiesRequest | ConvertTo-JSON
```


[[Back to top]](#) 

