---
id: entitlementbulkupdaterequest
title: Entitlementbulkupdaterequest
pagination_label: Entitlementbulkupdaterequest
sidebar_label: Entitlementbulkupdaterequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementbulkupdaterequest', 'Entitlementbulkupdaterequest'] 
slug: /tools/sdk/powershell/entitlements/models/entitlementbulkupdaterequest
tags: ['SDK', 'Software Development Kit', 'Entitlementbulkupdaterequest', 'Entitlementbulkupdaterequest']
---


# Entitlementbulkupdaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementIds** | **[]String** | List of entitlement ids to update | [required]
**JsonPatch** | [**[]Jsonpatchoperation**](jsonpatchoperation) |  | [required]

## Examples

- Prepare the resource
```powershell
$Entitlementbulkupdaterequest = Initialize-Entitlementbulkupdaterequest  -EntitlementIds ["2c91808a7624751a01762f19d665220d","2c91808a7624751a01762f19d67c220e","2c91808a7624751a01762f19d692220f"] `
 -JsonPatch [{"op":"replace","path":"/requestable","value":false},{"op":"replace","path":"/privilegeOverride/level","value":"HIGH"}]
```

- Convert the resource to JSON
```powershell
$Entitlementbulkupdaterequest | ConvertTo-JSON
```


[[Back to top]](#) 

