---
id: provisioning-criteria-level2
title: ProvisioningCriteriaLevel2
pagination_label: ProvisioningCriteriaLevel2
sidebar_label: ProvisioningCriteriaLevel2
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ProvisioningCriteriaLevel2'] 
slug: /tools/sdk/powershell/beta/models/provisioning-criteria-level2
tags: ['SDK', 'Software Development Kit', 'ProvisioningCriteriaLevel2']
---


# ProvisioningCriteriaLevel2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** |  Pointer to [**ProvisioningCriteriaOperation**](provisioning-criteria-operation) |  | [optional] 
**Attribute** |  Pointer to **String** | Name of the Account attribute to be tested. If **operation** is one of EQUALS, NOT_EQUALS, CONTAINS, or HAS, this field is required. Otherwise, specifying it is an error. | [optional] 
**Value** |  Pointer to **String** | String value to test the Account attribute w/r/t the specified operation. If the operation is one of EQUALS, NOT_EQUALS, or CONTAINS, this field is required. Otherwise, specifying it is an error. If the Attribute is not String-typed, it will be converted to the appropriate type. | [optional] 
**Children** |  Pointer to [**[]ProvisioningCriteriaLevel3**](provisioning-criteria-level3) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningCriteriaLevel2 = Initialize-BetaProvisioningCriteriaLevel2  -Operation null `
 -Attribute email `
 -Value carlee.cert1c9f9b6fd@mailinator.com `
 -Children null
```

- Convert the resource to JSON
```powershell
$ProvisioningCriteriaLevel2 | ConvertTo-JSON
```


[[Back to top]](#) 

