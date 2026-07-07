---
id: list-entitlement-connections-v1412-response
title: ListEntitlementConnectionsV1412Response
pagination_label: ListEntitlementConnectionsV1412Response
sidebar_label: ListEntitlementConnectionsV1412Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListEntitlementConnectionsV1412Response', 'ListEntitlementConnectionsV1412Response'] 
slug: /tools/sdk/powershell/entitlementconnections/models/list-entitlement-connections-v1412-response
tags: ['SDK', 'Software Development Kit', 'ListEntitlementConnectionsV1412Response', 'ListEntitlementConnectionsV1412Response']
---


# ListEntitlementConnectionsV1412Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListEntitlementConnectionsV1412Response = Initialize-ListEntitlementConnectionsV1412Response  -Message  API/Feature not enabled for your organization.
```

- Convert the resource to JSON
```powershell
$ListEntitlementConnectionsV1412Response | ConvertTo-JSON
```


[[Back to top]](#) 

