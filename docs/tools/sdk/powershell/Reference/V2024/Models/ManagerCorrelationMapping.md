---
id: v2024-manager-correlation-mapping
title: ManagerCorrelationMapping
pagination_label: ManagerCorrelationMapping
sidebar_label: ManagerCorrelationMapping
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagerCorrelationMapping', 'V2024ManagerCorrelationMapping'] 
slug: /tools/sdk/powershell/v2024/models/manager-correlation-mapping
tags: ['SDK', 'Software Development Kit', 'ManagerCorrelationMapping', 'V2024ManagerCorrelationMapping']
---


# ManagerCorrelationMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountAttributeName** | **String** | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager's identity. | [optional] 
**IdentityAttributeName** | **String** | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagerCorrelationMapping = Initialize-PSSailpoint.V2024ManagerCorrelationMapping  -AccountAttributeName manager `
 -IdentityAttributeName manager
```

- Convert the resource to JSON
```powershell
$ManagerCorrelationMapping | ConvertTo-JSON
```


[[Back to top]](#) 

