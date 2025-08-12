---
id: access-criteria-request-criteria-list-inner
title: AccessCriteriaRequestCriteriaListInner
pagination_label: AccessCriteriaRequestCriteriaListInner
sidebar_label: AccessCriteriaRequestCriteriaListInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessCriteriaRequestCriteriaListInner', 'AccessCriteriaRequestCriteriaListInner'] 
slug: /tools/sdk/powershell/v3/models/access-criteria-request-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'AccessCriteriaRequestCriteriaListInner', 'AccessCriteriaRequestCriteriaListInner']
---


# AccessCriteriaRequestCriteriaListInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ENTITLEMENT" ] | Type of the property to which this reference applies to | [optional] 
**Id** | **String** | ID of the object to which this reference applies to | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessCriteriaRequestCriteriaListInner = Initialize-AccessCriteriaRequestCriteriaListInner  -Type ENTITLEMENT `
 -Id 2c91808568c529c60168cca6f90c1313
```

- Convert the resource to JSON
```powershell
$AccessCriteriaRequestCriteriaListInner | ConvertTo-JSON
```


[[Back to top]](#) 

