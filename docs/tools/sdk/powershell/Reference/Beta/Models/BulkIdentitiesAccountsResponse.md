---
id: beta-bulk-identities-accounts-response
title: BulkIdentitiesAccountsResponse
pagination_label: BulkIdentitiesAccountsResponse
sidebar_label: BulkIdentitiesAccountsResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BulkIdentitiesAccountsResponse', 'BetaBulkIdentitiesAccountsResponse'] 
slug: /tools/sdk/powershell/beta/models/bulk-identities-accounts-response
tags: ['SDK', 'Software Development Kit', 'BulkIdentitiesAccountsResponse', 'BetaBulkIdentitiesAccountsResponse']
---


# BulkIdentitiesAccountsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identifier of bulk request item. | [optional] 
**StatusCode** | **Int32** | Response status value. | [optional] 
**Message** | **String** | Status containing additional context information about failures. | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkIdentitiesAccountsResponse = Initialize-PSSailpoint.BetaBulkIdentitiesAccountsResponse  -Id 2c9180858082150f0180893dbaf553fe `
 -StatusCode 404 `
 -Message Referenced identity "2c9180858082150f0180893dbaf553fe" was not found.
```

- Convert the resource to JSON
```powershell
$BulkIdentitiesAccountsResponse | ConvertTo-JSON
```


[[Back to top]](#) 

