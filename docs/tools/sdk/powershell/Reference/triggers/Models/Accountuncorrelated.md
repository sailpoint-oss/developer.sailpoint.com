---
id: accountuncorrelated
title: Accountuncorrelated
pagination_label: Accountuncorrelated
sidebar_label: Accountuncorrelated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountuncorrelated', 'Accountuncorrelated'] 
slug: /tools/sdk/powershell/triggers/models/accountuncorrelated
tags: ['SDK', 'Software Development Kit', 'Accountuncorrelated', 'Accountuncorrelated']
---


# Accountuncorrelated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**AccountuncorrelatedIdentity**](accountuncorrelated-identity) |  | [required]
**Source** | [**AccountuncorrelatedSource**](accountuncorrelated-source) |  | [required]
**Account** | [**AccountuncorrelatedAccount**](accountuncorrelated-account) |  | [required]
**EntitlementCount** | **Int32** | The number of entitlements associated with this account. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accountuncorrelated = Initialize-Accountuncorrelated  -Identity null `
 -Source null `
 -Account null `
 -EntitlementCount 0
```

- Convert the resource to JSON
```powershell
$Accountuncorrelated | ConvertTo-JSON
```


[[Back to top]](#) 

