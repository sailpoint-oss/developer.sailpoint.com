---
id: v2025-process-identities-request
title: ProcessIdentitiesRequest
pagination_label: ProcessIdentitiesRequest
sidebar_label: ProcessIdentitiesRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProcessIdentitiesRequest', 'V2025ProcessIdentitiesRequest'] 
slug: /tools/sdk/powershell/v2025/models/process-identities-request
tags: ['SDK', 'Software Development Kit', 'ProcessIdentitiesRequest', 'V2025ProcessIdentitiesRequest']
---


# ProcessIdentitiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityIds** | **[]String** | List of up to 250 identity IDs to process. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProcessIdentitiesRequest = Initialize-V2025ProcessIdentitiesRequest  -IdentityIds null
```

- Convert the resource to JSON
```powershell
$ProcessIdentitiesRequest | ConvertTo-JSON
```


[[Back to top]](#) 

