---
id: manager-correlation-mapping
title: ManagerCorrelationMapping
pagination_label: ManagerCorrelationMapping
sidebar_label: ManagerCorrelationMapping
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ManagerCorrelationMapping'] 
slug: /tools/sdk/powershell/beta/models/manager-correlation-mapping
tags: ['SDK', 'Software Development Kit', 'ManagerCorrelationMapping']
---


# ManagerCorrelationMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountAttribute** |  Pointer to **String** | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager&#39;s identity. | [optional] 
**IdentityAttribute** |  Pointer to **String** | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagerCorrelationMapping = Initialize-PSSailpointBetaManagerCorrelationMapping  -AccountAttribute manager `
 -IdentityAttribute manager
```

- Convert the resource to JSON
```powershell
$ManagerCorrelationMapping | ConvertTo-JSON
```


[[Back to top]](#) 

