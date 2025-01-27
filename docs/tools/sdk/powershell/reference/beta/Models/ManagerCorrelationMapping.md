---
id: manager-correlation-mapping
title: ManagerCorrelationMapping
pagination_label: ManagerCorrelationMapping
sidebar_label: ManagerCorrelationMapping
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagerCorrelationMapping'] 
slug: /tools/sdk/powershell/beta/models/manager-correlation-mapping
tags: ['SDK', 'Software Development Kit', 'ManagerCorrelationMapping']
---


# ManagerCorrelationMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountAttributeName** |  Pointer to **String** | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager's identity. | [optional] 
**IdentityAttributeName** |  Pointer to **String** | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagerCorrelationMapping = Initialize-PSSailpoint.BetaManagerCorrelationMapping  -AccountAttributeName manager `
 -IdentityAttributeName manager
```

- Convert the resource to JSON
```powershell
$ManagerCorrelationMapping | ConvertTo-JSON
```


[[Back to top]](#) 

