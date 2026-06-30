---
id: rolelistfilterdto
title: Rolelistfilterdto
pagination_label: Rolelistfilterdto
sidebar_label: Rolelistfilterdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Rolelistfilterdto', 'Rolelistfilterdto'] 
slug: /tools/sdk/powershell/roles/models/rolelistfilterdto
tags: ['SDK', 'Software Development Kit', 'Rolelistfilterdto', 'Rolelistfilterdto']
---


# Rolelistfilterdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | **String** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results) Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq* | [optional] 
**AmmKeyValues** | [**[]RolelistfilterdtoAmmKeyValuesInner**](rolelistfilterdto-amm-key-values-inner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Rolelistfilterdto = Initialize-Rolelistfilterdto  -Filters dimensional eq false `
 -AmmKeyValues [{"attribute":"iscFederalClassifications","values":["secret"]}]
```

- Convert the resource to JSON
```powershell
$Rolelistfilterdto | ConvertTo-JSON
```


[[Back to top]](#) 

