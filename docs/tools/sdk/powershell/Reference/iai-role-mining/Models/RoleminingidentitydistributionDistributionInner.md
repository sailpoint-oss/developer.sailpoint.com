---
id: roleminingidentitydistribution-distribution-inner
title: RoleminingidentitydistributionDistributionInner
pagination_label: RoleminingidentitydistributionDistributionInner
sidebar_label: RoleminingidentitydistributionDistributionInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleminingidentitydistributionDistributionInner', 'RoleminingidentitydistributionDistributionInner'] 
slug: /tools/sdk/powershell/iairolemining/models/roleminingidentitydistribution-distribution-inner
tags: ['SDK', 'Software Development Kit', 'RoleminingidentitydistributionDistributionInner', 'RoleminingidentitydistributionDistributionInner']
---


# RoleminingidentitydistributionDistributionInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeValue** | **String** | The attribute value that identities are grouped by | [optional] 
**Count** | **Int32** | The number of identities that have this attribute value | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleminingidentitydistributionDistributionInner = Initialize-RoleminingidentitydistributionDistributionInner  -AttributeValue NM Tier 3 `
 -Count 6
```

- Convert the resource to JSON
```powershell
$RoleminingidentitydistributionDistributionInner | ConvertTo-JSON
```


[[Back to top]](#) 

