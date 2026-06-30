---
id: bulkcancelaccessrequest
title: Bulkcancelaccessrequest
pagination_label: Bulkcancelaccessrequest
sidebar_label: Bulkcancelaccessrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Bulkcancelaccessrequest', 'Bulkcancelaccessrequest'] 
slug: /tools/sdk/powershell/accessrequests/models/bulkcancelaccessrequest
tags: ['SDK', 'Software Development Kit', 'Bulkcancelaccessrequest', 'Bulkcancelaccessrequest']
---


# Bulkcancelaccessrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestIds** | **[]String** | List of access requests ids to cancel the pending requests | [required]
**Comment** | **String** | Reason for cancelling the pending access request. | [required]

## Examples

- Prepare the resource
```powershell
$Bulkcancelaccessrequest = Initialize-Bulkcancelaccessrequest  -AccessRequestIds ["2c9180835d2e5168015d32f890ca1581","2c9180835d2e5168015d32f890ca1582"] `
 -Comment I requested this role by mistake.
```

- Convert the resource to JSON
```powershell
$Bulkcancelaccessrequest | ConvertTo-JSON
```


[[Back to top]](#) 

