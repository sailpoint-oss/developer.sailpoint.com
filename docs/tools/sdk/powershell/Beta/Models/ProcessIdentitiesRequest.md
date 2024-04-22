---
id: process-identities-request
title: ProcessIdentitiesRequest
pagination_label: ProcessIdentitiesRequest
sidebar_label: ProcessIdentitiesRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ProcessIdentitiesRequest'] 
slug: /tools/sdk/powershell/beta/models/process-identities-request
tags: ['SDK', 'Software Development Kit', 'ProcessIdentitiesRequest']
---


# ProcessIdentitiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityIds** |  Pointer to **[]String** | List of up to 250 identity IDs to process. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProcessIdentitiesRequest = Initialize-BetaProcessIdentitiesRequest  -IdentityIds null
```

- Convert the resource to JSON
```powershell
$ProcessIdentitiesRequest | ConvertTo-JSON
```


[[Back to top]](#) 

