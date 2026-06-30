---
id: multihostintegrations-manager-correlation-mapping
title: MultihostintegrationsManagerCorrelationMapping
pagination_label: MultihostintegrationsManagerCorrelationMapping
sidebar_label: MultihostintegrationsManagerCorrelationMapping
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultihostintegrationsManagerCorrelationMapping', 'MultihostintegrationsManagerCorrelationMapping'] 
slug: /tools/sdk/powershell/multihostintegration/models/multihostintegrations-manager-correlation-mapping
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsManagerCorrelationMapping', 'MultihostintegrationsManagerCorrelationMapping']
---


# MultihostintegrationsManagerCorrelationMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountAttributeName** | **String** | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager's identity. | [optional] 
**IdentityAttributeName** | **String** | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultihostintegrationsManagerCorrelationMapping = Initialize-MultihostintegrationsManagerCorrelationMapping  -AccountAttributeName manager `
 -IdentityAttributeName manager
```

- Convert the resource to JSON
```powershell
$MultihostintegrationsManagerCorrelationMapping | ConvertTo-JSON
```


[[Back to top]](#) 

