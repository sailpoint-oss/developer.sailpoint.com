---
id: create-identity-collector-v1200-response
title: CreateIdentityCollectorV1200Response
pagination_label: CreateIdentityCollectorV1200Response
sidebar_label: CreateIdentityCollectorV1200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateIdentityCollectorV1200Response', 'CreateIdentityCollectorV1200Response'] 
slug: /tools/sdk/powershell/dataaccesssecurity/models/create-identity-collector-v1200-response
tags: ['SDK', 'Software Development Kit', 'CreateIdentityCollectorV1200Response', 'CreateIdentityCollectorV1200Response']
---


# CreateIdentityCollectorV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Int64** | The unique identifier of the created identity collector. | [optional] 
**Name** | **String** | The display name of the created identity collector. | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateIdentityCollectorV1200Response = Initialize-CreateIdentityCollectorV1200Response  -Id 12345 `
 -Name Active Directory Identity Collector
```

- Convert the resource to JSON
```powershell
$CreateIdentityCollectorV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

