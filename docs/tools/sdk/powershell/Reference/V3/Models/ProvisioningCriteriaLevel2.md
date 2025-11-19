---
id: provisioning-criteria-level2
title: ProvisioningCriteriaLevel2
pagination_label: ProvisioningCriteriaLevel2
sidebar_label: ProvisioningCriteriaLevel2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningCriteriaLevel2', 'ProvisioningCriteriaLevel2'] 
slug: /tools/sdk/powershell/v3/models/provisioning-criteria-level2
tags: ['SDK', 'Software Development Kit', 'ProvisioningCriteriaLevel2', 'ProvisioningCriteriaLevel2']
---


# ProvisioningCriteriaLevel2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | [**ProvisioningCriteriaOperation**](provisioning-criteria-operation) |  | [optional] 
**Attribute** | **String** | Name of the account attribute to be tested. If **operation** is one of `EQUALS`, `NOT_EQUALS`, `CONTAINS`, or `HAS`, this field is required. Otherwise, specifying it results in an error. | [optional] 
**Value** | **String** | String value to test the account attribute w/r/t the specified operation. If the operation is one of `EQUALS`, `NOT_EQUALS`, or `CONTAINS`, this field is required. Otherwise, specifying it results in an error. If the attribute is not string-typed, the API will convert it to the appropriate type. | [optional] 
**Children** | [**[]ProvisioningCriteriaLevel3**](provisioning-criteria-level3) | Array of child criteria. This field is required if the operation is `AND` or `OR`. Otherwise, it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningCriteriaLevel2 = Initialize-ProvisioningCriteriaLevel2  -Operation null `
 -Attribute email `
 -Value carlee.cert1c9f9b6fd@mailinator.com `
 -Children null
```

- Convert the resource to JSON
```powershell
$ProvisioningCriteriaLevel2 | ConvertTo-JSON
```


[[Back to top]](#) 

