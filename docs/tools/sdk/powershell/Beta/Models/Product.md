---
id: product
title: Product
pagination_label: Product
sidebar_label: Product
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Product'] 
slug: /tools/sdk/powershell/beta/models/product
tags: ['SDK', 'Software Development Kit', 'Product']
---


# Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProductName** |  Pointer to **String** | Name of the Product | [optional] 
**Url** |  Pointer to **String** | URL of the Product | [optional] 
**ProductTenantId** |  Pointer to **String** | An identifier for a specific product-tenant combination | [optional] 
**ProductRegion** |  Pointer to **String** | Product region | [optional] 
**ProductRight** |  Pointer to **String** | Right needed for the Product | [optional] 
**ApiUrl** |  Pointer to **String** | API URL of the Product | [optional] 
**Licenses** |  Pointer to [**[]License**](license) |  | [optional] 
**Attributes** |  Pointer to [map[string] **Any**] | Additional attributes for a product | [optional] 
**Zone** |  Pointer to **String** | Zone | [optional] 
**Status** |  Pointer to **String** | Status of the product | [optional] 
**StatusDateTime** |  Pointer to **System.DateTime** | Status datetime | [optional] 
**Reason** |  Pointer to **String** | If there&#39;s a tenant provisioning failure then reason will have the description of error | [optional] 
**Notes** |  Pointer to **String** | Product could have additional notes added during tenant provisioning. | [optional] 
**DateCreated** |  Pointer to **System.DateTime** | Date when the product was created | [optional] 
**LastUpdated** |  Pointer to **System.DateTime** | Date when the product was last updated | [optional] 
**OrgType** |  Pointer to  **Enum** [  "development",    "staging",    "production",    "test",    "partner",    "training",    "demonstration",    "sandbox",    "null" ] | Type of org | [optional] 

## Examples

- Prepare the resource
```powershell
$Product = Initialize-BetaProduct  -ProductName idn `
 -Url https://tenant-name.identitynow.com `
 -ProductTenantId tenant#product `
 -ProductRegion us-east-1 `
 -ProductRight idn:ui:view `
 -ApiUrl https://tenant-name.api.identitynow.com `
 -Licenses null `
 -Attributes {domain=https://tenant-name.identitynow.com, maxRegisteredUsers=250} `
 -Zone Deployment zone for the Product `
 -Status active `
 -StatusDateTime 2020-05-19T13:49:37.385Z `
 -Reason Reason `
 -Notes Example notes `
 -DateCreated 2020-05-19T13:49:37.385Z `
 -LastUpdated 2020-05-19T13:49:37.385Z `
 -OrgType test
```

- Convert the resource to JSON
```powershell
$Product | ConvertTo-JSON
```


[[Back to top]](#) 

