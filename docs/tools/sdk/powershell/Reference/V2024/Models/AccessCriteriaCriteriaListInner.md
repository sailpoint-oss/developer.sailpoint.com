---
id: v2024-access-criteria-criteria-list-inner
title: AccessCriteriaCriteriaListInner
pagination_label: AccessCriteriaCriteriaListInner
sidebar_label: AccessCriteriaCriteriaListInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessCriteriaCriteriaListInner', 'V2024AccessCriteriaCriteriaListInner'] 
slug: /tools/sdk/powershell/v2024/models/access-criteria-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'AccessCriteriaCriteriaListInner', 'V2024AccessCriteriaCriteriaListInner']
---


# AccessCriteriaCriteriaListInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ENTITLEMENT" ] | Type of the propery to which this reference applies to | [optional] 
**Id** | **String** | ID of the object to which this reference applies to | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies to | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessCriteriaCriteriaListInner = Initialize-V2024AccessCriteriaCriteriaListInner  -Type ENTITLEMENT `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Administrator
```

- Convert the resource to JSON
```powershell
$AccessCriteriaCriteriaListInner | ConvertTo-JSON
```


[[Back to top]](#) 

