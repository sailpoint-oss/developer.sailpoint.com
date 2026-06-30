---
id: getreferenceidentityattribute
title: Getreferenceidentityattribute
pagination_label: Getreferenceidentityattribute
sidebar_label: Getreferenceidentityattribute
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Getreferenceidentityattribute', 'Getreferenceidentityattribute'] 
slug: /tools/sdk/powershell/transforms/models/getreferenceidentityattribute
tags: ['SDK', 'Software Development Kit', 'Getreferenceidentityattribute', 'Getreferenceidentityattribute']
---


# Getreferenceidentityattribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | This must always be set to ""Cloud Services Deployment Utility"" | [required]
**Operation** | **String** | The operation to perform `getReferenceIdentityAttribute` | [required]
**Uid** | **String** | This is the SailPoint User Name (uid) value of the identity whose attribute is desired  As a convenience feature, you can use the `manager` keyword to dynamically look up the user's manager and then get that manager's identity attribute.  | [required]
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] 

## Examples

- Prepare the resource
```powershell
$Getreferenceidentityattribute = Initialize-Getreferenceidentityattribute  -Name Cloud Services Deployment Utility `
 -Operation getReferenceIdentityAttribute `
 -Uid 2c91808570313110017040b06f344ec9 `
 -RequiresPeriodicRefresh false
```

- Convert the resource to JSON
```powershell
$Getreferenceidentityattribute | ConvertTo-JSON
```


[[Back to top]](#) 

