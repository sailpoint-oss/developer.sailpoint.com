---
id: list-entitlement-connections-v1401-response
title: ListEntitlementConnectionsV1401Response
pagination_label: ListEntitlementConnectionsV1401Response
sidebar_label: ListEntitlementConnectionsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListEntitlementConnectionsV1401Response', 'ListEntitlementConnectionsV1401Response'] 
slug: /tools/sdk/powershell/entitlementconnections/models/list-entitlement-connections-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListEntitlementConnectionsV1401Response', 'ListEntitlementConnectionsV1401Response']
---


# ListEntitlementConnectionsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListEntitlementConnectionsV1401Response = Initialize-ListEntitlementConnectionsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListEntitlementConnectionsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

