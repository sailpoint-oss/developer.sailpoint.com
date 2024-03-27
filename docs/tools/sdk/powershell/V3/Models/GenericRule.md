---
id: generic-rule
title: GenericRule
pagination_label: GenericRule
sidebar_label: GenericRule
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'GenericRule'] 
slug: /tools/sdk/powershell/v3/models/generic-rule
tags: ['SDK', 'Software Development Kit', 'GenericRule']
---


# GenericRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | This is the name of the Generic rule that needs to be invoked by the transform | 
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] 

## Examples

- Prepare the resource
```powershell
$GenericRule = Initialize-PSSailpointGenericRule  -Name Generic Calculation Rule `
 -RequiresPeriodicRefresh false
```

- Convert the resource to JSON
```powershell
$GenericRule | ConvertTo-JSON
```


[[Back to top]](#) 

