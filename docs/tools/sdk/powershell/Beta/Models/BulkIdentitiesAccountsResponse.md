---
id: bulk-identities-accounts-response
title: BulkIdentitiesAccountsResponse
pagination_label: BulkIdentitiesAccountsResponse
sidebar_label: BulkIdentitiesAccountsResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'BulkIdentitiesAccountsResponse'] 
slug: /tools/sdk/powershell/beta/models/bulk-identities-accounts-response
tags: ['SDK', 'Software Development Kit', 'BulkIdentitiesAccountsResponse']
---


# BulkIdentitiesAccountsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Identifier of bulk request item. | [optional] 
**StatusCode** |  Pointer to **Int32** | Response status value. | [optional] 
**Message** |  Pointer to **String** | Status containing additional context information about failures. | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkIdentitiesAccountsResponse = Initialize-PSSailpointBetaBulkIdentitiesAccountsResponse  -Id 2c9180858082150f0180893dbaf553fe `
 -StatusCode 404 `
 -Message Referenced identity &quot;2c9180858082150f0180893dbaf553fe&quot; was not found.
```

- Convert the resource to JSON
```powershell
$BulkIdentitiesAccountsResponse | ConvertTo-JSON
```


[[Back to top]](#) 

