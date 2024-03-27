---
id: entitlement-request-config
title: EntitlementRequestConfig
pagination_label: EntitlementRequestConfig
sidebar_label: EntitlementRequestConfig
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'EntitlementRequestConfig'] 
slug: /tools/sdk/powershell/beta/models/entitlement-request-config
tags: ['SDK', 'Software Development Kit', 'EntitlementRequestConfig']
---


# EntitlementRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestConfig** |  Pointer to [**EntitlementAccessRequestConfig**](entitlement-access-request-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementRequestConfig = Initialize-PSSailpointBetaEntitlementRequestConfig  -AccessRequestConfig null
```

- Convert the resource to JSON
```powershell
$EntitlementRequestConfig | ConvertTo-JSON
```


[[Back to top]](#) 

