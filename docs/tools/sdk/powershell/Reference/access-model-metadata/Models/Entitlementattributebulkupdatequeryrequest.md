---
id: entitlementattributebulkupdatequeryrequest
title: Entitlementattributebulkupdatequeryrequest
pagination_label: Entitlementattributebulkupdatequeryrequest
sidebar_label: Entitlementattributebulkupdatequeryrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementattributebulkupdatequeryrequest', 'Entitlementattributebulkupdatequeryrequest'] 
slug: /tools/sdk/powershell/accessmodelmetadata/models/entitlementattributebulkupdatequeryrequest
tags: ['SDK', 'Software Development Kit', 'Entitlementattributebulkupdatequeryrequest', 'Entitlementattributebulkupdatequeryrequest']
---


# Entitlementattributebulkupdatequeryrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | [**Search**](search) |  | [optional] 
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | Operation to perform on the attributes in the bulk update request. | [optional] 
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** | [**[]BulkupdateammkeyvalueInner**](bulkupdateammkeyvalue-inner) | The metadata to be updated, including attribute and values. | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlementattributebulkupdatequeryrequest = Initialize-Entitlementattributebulkupdatequeryrequest  -Query null `
 -Operation add `
 -ReplaceScope attribute `
 -Values [{"attribute":"iscFederalClassifications","values":["topSecret"]}]
```

- Convert the resource to JSON
```powershell
$Entitlementattributebulkupdatequeryrequest | ConvertTo-JSON
```


[[Back to top]](#) 

