---
id: managercorrelationmapping
title: Managercorrelationmapping
pagination_label: Managercorrelationmapping
sidebar_label: Managercorrelationmapping
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Managercorrelationmapping', 'Managercorrelationmapping'] 
slug: /tools/sdk/powershell/sources/models/managercorrelationmapping
tags: ['SDK', 'Software Development Kit', 'Managercorrelationmapping', 'Managercorrelationmapping']
---


# Managercorrelationmapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountAttributeName** | **String** | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager's identity. | [optional] 
**IdentityAttributeName** | **String** | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [optional] 

## Examples

- Prepare the resource
```powershell
$Managercorrelationmapping = Initialize-Managercorrelationmapping  -AccountAttributeName manager `
 -IdentityAttributeName manager
```

- Convert the resource to JSON
```powershell
$Managercorrelationmapping | ConvertTo-JSON
```


[[Back to top]](#) 

