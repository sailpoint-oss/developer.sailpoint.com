---
id: v2024-process-identities-request
title: ProcessIdentitiesRequest
pagination_label: ProcessIdentitiesRequest
sidebar_label: ProcessIdentitiesRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProcessIdentitiesRequest', 'V2024ProcessIdentitiesRequest'] 
slug: /tools/sdk/powershell/v2024/models/process-identities-request
tags: ['SDK', 'Software Development Kit', 'ProcessIdentitiesRequest', 'V2024ProcessIdentitiesRequest']
---


# ProcessIdentitiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityIds** | **[]String** | List of up to 250 identity IDs to process. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProcessIdentitiesRequest = Initialize-V2024ProcessIdentitiesRequest  -IdentityIds null
```

- Convert the resource to JSON
```powershell
$ProcessIdentitiesRequest | ConvertTo-JSON
```


[[Back to top]](#) 

