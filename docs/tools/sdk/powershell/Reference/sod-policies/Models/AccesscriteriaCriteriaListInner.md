---
id: accesscriteria-criteria-list-inner
title: AccesscriteriaCriteriaListInner
pagination_label: AccesscriteriaCriteriaListInner
sidebar_label: AccesscriteriaCriteriaListInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccesscriteriaCriteriaListInner', 'AccesscriteriaCriteriaListInner'] 
slug: /tools/sdk/powershell/sodpolicies/models/accesscriteria-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'AccesscriteriaCriteriaListInner', 'AccesscriteriaCriteriaListInner']
---


# AccesscriteriaCriteriaListInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ENTITLEMENT" ] | Type of the propery to which this reference applies to | [optional] 
**Id** | **String** | ID of the object to which this reference applies to | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies to | [optional] 

## Examples

- Prepare the resource
```powershell
$AccesscriteriaCriteriaListInner = Initialize-AccesscriteriaCriteriaListInner  -Type ENTITLEMENT `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Administrator
```

- Convert the resource to JSON
```powershell
$AccesscriteriaCriteriaListInner | ConvertTo-JSON
```


[[Back to top]](#) 

