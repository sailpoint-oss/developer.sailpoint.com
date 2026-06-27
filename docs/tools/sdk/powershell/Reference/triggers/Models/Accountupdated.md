---
id: accountupdated
title: Accountupdated
pagination_label: Accountupdated
sidebar_label: Accountupdated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountupdated', 'Accountupdated'] 
slug: /tools/sdk/powershell/triggers/models/accountupdated
tags: ['SDK', 'Software Development Kit', 'Accountupdated', 'Accountupdated']
---


# Accountupdated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarEvent** | [**AccountupdatedEvent**](accountupdated-event) |  | [required]
**Source** | [**Accountsourcereference**](accountsourcereference) |  | [required]
**Account** | [**Accountv2**](accountv2) |  | [required]
**Identity** | [**Identityreference2**](identityreference2) |  | [required]
**AccountChangeTypes** | **[]String** | The types of changes that occurred to the account. | [required]
**SingleValueAttributeChanges** | [**[]AccountupdatedSingleValueAttributeChangesInner**](accountupdated-single-value-attribute-changes-inner) | Details about the single-value attribute changes that occurred to the account. | [required]
**MultiValueAttributeChanges** | [**[]AccountupdatedMultiValueAttributeChangesInner**](accountupdated-multi-value-attribute-changes-inner) | Details about the multi-value attribute changes that occurred to the account. | [required]
**EntitlementChanges** | [**[]AccountupdatedEntitlementChangesInner**](accountupdated-entitlement-changes-inner) | Details about the entitlement changes that occurred to the account. | [required]

## Examples

- Prepare the resource
```powershell
$Accountupdated = Initialize-Accountupdated  -VarEvent null `
 -Source null `
 -Account null `
 -Identity null `
 -AccountChangeTypes null `
 -SingleValueAttributeChanges null `
 -MultiValueAttributeChanges null `
 -EntitlementChanges null
```

- Convert the resource to JSON
```powershell
$Accountupdated | ConvertTo-JSON
```


[[Back to top]](#) 

