---
id: beta-identities-accounts-bulk-request
title: IdentitiesAccountsBulkRequest
pagination_label: IdentitiesAccountsBulkRequest
sidebar_label: IdentitiesAccountsBulkRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentitiesAccountsBulkRequest', 'BetaIdentitiesAccountsBulkRequest'] 
slug: /tools/sdk/powershell/beta/models/identities-accounts-bulk-request
tags: ['SDK', 'Software Development Kit', 'IdentitiesAccountsBulkRequest', 'BetaIdentitiesAccountsBulkRequest']
---


# IdentitiesAccountsBulkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityIds** | **[]String** | The ids of the identities for which enable/disable accounts. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentitiesAccountsBulkRequest = Initialize-BetaIdentitiesAccountsBulkRequest  -IdentityIds [2c91808384203c2d018437e631158308, 2c9180858082150f0180893dbaf553fe]
```

- Convert the resource to JSON
```powershell
$IdentitiesAccountsBulkRequest | ConvertTo-JSON
```


[[Back to top]](#) 

