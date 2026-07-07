---
id: accountupdated-entitlement-changes-inner-added-inner-owner
title: AccountupdatedEntitlementChangesInnerAddedInnerOwner
pagination_label: AccountupdatedEntitlementChangesInnerAddedInnerOwner
sidebar_label: AccountupdatedEntitlementChangesInnerAddedInnerOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountupdatedEntitlementChangesInnerAddedInnerOwner', 'AccountupdatedEntitlementChangesInnerAddedInnerOwner'] 
slug: /tools/sdk/powershell/triggers/models/accountupdated-entitlement-changes-inner-added-inner-owner
tags: ['SDK', 'Software Development Kit', 'AccountupdatedEntitlementChangesInnerAddedInnerOwner', 'AccountupdatedEntitlementChangesInnerAddedInnerOwner']
---


# AccountupdatedEntitlementChangesInnerAddedInnerOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique identifier of the owner. | [optional] 
**Name** | **String** | The name of the owner. | [optional] 
**Type** | **String** | The type of the owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountupdatedEntitlementChangesInnerAddedInnerOwner = Initialize-AccountupdatedEntitlementChangesInnerAddedInnerOwner  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Name Owner Name `
 -Type Primary
```

- Convert the resource to JSON
```powershell
$AccountupdatedEntitlementChangesInnerAddedInnerOwner | ConvertTo-JSON
```


[[Back to top]](#) 

