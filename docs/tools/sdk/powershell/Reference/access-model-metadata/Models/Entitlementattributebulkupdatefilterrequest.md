---
id: entitlementattributebulkupdatefilterrequest
title: Entitlementattributebulkupdatefilterrequest
pagination_label: Entitlementattributebulkupdatefilterrequest
sidebar_label: Entitlementattributebulkupdatefilterrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementattributebulkupdatefilterrequest', 'Entitlementattributebulkupdatefilterrequest'] 
slug: /tools/sdk/powershell/accessmodelmetadata/models/entitlementattributebulkupdatefilterrequest
tags: ['SDK', 'Software Development Kit', 'Entitlementattributebulkupdatefilterrequest', 'Entitlementattributebulkupdatefilterrequest']
---


# Entitlementattributebulkupdatefilterrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | **String** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results) Filtering is supported for the following fields and operators:  **id**: *eq* | [optional] 
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | Operation to perform on the attributes in the bulk update request. | [optional] 
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** | [**[]BulkupdateammkeyvalueInner**](bulkupdateammkeyvalue-inner) | The metadata to be updated, including attribute and values. | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlementattributebulkupdatefilterrequest = Initialize-Entitlementattributebulkupdatefilterrequest  -Filters id eq 2c9180867817ac4d017817c491119a20 `
 -Operation add `
 -ReplaceScope attribute `
 -Values [{"attribute":"iscFederalClassifications","values":["topSecret"]}]
```

- Convert the resource to JSON
```powershell
$Entitlementattributebulkupdatefilterrequest | ConvertTo-JSON
```


[[Back to top]](#) 

