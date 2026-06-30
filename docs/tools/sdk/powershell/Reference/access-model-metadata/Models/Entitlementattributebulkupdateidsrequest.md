---
id: entitlementattributebulkupdateidsrequest
title: Entitlementattributebulkupdateidsrequest
pagination_label: Entitlementattributebulkupdateidsrequest
sidebar_label: Entitlementattributebulkupdateidsrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementattributebulkupdateidsrequest', 'Entitlementattributebulkupdateidsrequest'] 
slug: /tools/sdk/powershell/accessmodelmetadata/models/entitlementattributebulkupdateidsrequest
tags: ['SDK', 'Software Development Kit', 'Entitlementattributebulkupdateidsrequest', 'Entitlementattributebulkupdateidsrequest']
---


# Entitlementattributebulkupdateidsrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entitlements** | **[]String** | List of entitlement IDs to update. | [optional] 
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | Operation to perform on the attributes in the bulk update request. | [optional] 
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** | [**[]BulkupdateammkeyvalueInner**](bulkupdateammkeyvalue-inner) | The metadata to be updated, including attribute and values. | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlementattributebulkupdateidsrequest = Initialize-Entitlementattributebulkupdateidsrequest  -Entitlements ["2c9180867817ac4d017817c491119a20","2c9180867817ac4d017817c491119a21"] `
 -Operation add `
 -ReplaceScope attribute `
 -Values [{"attribute":"iscFederalClassifications","values":["topSecret"]}]
```

- Convert the resource to JSON
```powershell
$Entitlementattributebulkupdateidsrequest | ConvertTo-JSON
```


[[Back to top]](#) 

