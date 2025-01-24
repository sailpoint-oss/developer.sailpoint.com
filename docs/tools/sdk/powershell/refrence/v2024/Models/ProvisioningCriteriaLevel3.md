---
id: provisioning-criteria-level3
title: ProvisioningCriteriaLevel3
pagination_label: ProvisioningCriteriaLevel3
sidebar_label: ProvisioningCriteriaLevel3
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningCriteriaLevel3'] 
slug: /tools/sdk/powershell/v2024/models/provisioning-criteria-level3
tags: ['SDK', 'Software Development Kit', 'ProvisioningCriteriaLevel3']
---


# ProvisioningCriteriaLevel3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** |  Pointer to [**ProvisioningCriteriaOperation**](provisioning-criteria-operation) |  | [optional] 
**Attribute** |  Pointer to **String** | Name of the Account attribute to be tested. If **operation** is one of EQUALS, NOT_EQUALS, CONTAINS, or HAS, this field is required. Otherwise, specifying it is an error. | [optional] 
**Value** |  Pointer to **String** | String value to test the Account attribute w/r/t the specified operation. If the operation is one of EQUALS, NOT_EQUALS, or CONTAINS, this field is required. Otherwise, specifying it is an error. If the Attribute is not String-typed, it will be converted to the appropriate type. | [optional] 
**Children** |  Pointer to **String** | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningCriteriaLevel3 = Initialize-PSSailpoint.V2024ProvisioningCriteriaLevel3  -Operation null `
 -Attribute email `
 -Value carlee.cert1c9f9b6fd@mailinator.com `
 -Children null
```

- Convert the resource to JSON
```powershell
$ProvisioningCriteriaLevel3 | ConvertTo-JSON
```


[[Back to top]](#) 

