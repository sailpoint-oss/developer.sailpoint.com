---
id: v2024-get-reference-identity-attribute
title: GetReferenceIdentityAttribute
pagination_label: GetReferenceIdentityAttribute
sidebar_label: GetReferenceIdentityAttribute
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetReferenceIdentityAttribute', 'V2024GetReferenceIdentityAttribute'] 
slug: /tools/sdk/powershell/v2024/models/get-reference-identity-attribute
tags: ['SDK', 'Software Development Kit', 'GetReferenceIdentityAttribute', 'V2024GetReferenceIdentityAttribute']
---


# GetReferenceIdentityAttribute

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
$GetReferenceIdentityAttribute = Initialize-PSSailpoint.V2024GetReferenceIdentityAttribute  -Name Cloud Services Deployment Utility `
 -Operation getReferenceIdentityAttribute `
 -Uid 2c91808570313110017040b06f344ec9 `
 -RequiresPeriodicRefresh false
```

- Convert the resource to JSON
```powershell
$GetReferenceIdentityAttribute | ConvertTo-JSON
```


[[Back to top]](#) 

