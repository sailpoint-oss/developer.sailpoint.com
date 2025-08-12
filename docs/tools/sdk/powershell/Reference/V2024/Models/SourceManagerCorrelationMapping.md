---
id: v2024-source-manager-correlation-mapping
title: SourceManagerCorrelationMapping
pagination_label: SourceManagerCorrelationMapping
sidebar_label: SourceManagerCorrelationMapping
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceManagerCorrelationMapping', 'V2024SourceManagerCorrelationMapping'] 
slug: /tools/sdk/powershell/v2024/models/source-manager-correlation-mapping
tags: ['SDK', 'Software Development Kit', 'SourceManagerCorrelationMapping', 'V2024SourceManagerCorrelationMapping']
---


# SourceManagerCorrelationMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountAttributeName** | **String** | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager's identity. | [optional] 
**IdentityAttributeName** | **String** | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceManagerCorrelationMapping = Initialize-V2024SourceManagerCorrelationMapping  -AccountAttributeName manager `
 -IdentityAttributeName manager
```

- Convert the resource to JSON
```powershell
$SourceManagerCorrelationMapping | ConvertTo-JSON
```


[[Back to top]](#) 

