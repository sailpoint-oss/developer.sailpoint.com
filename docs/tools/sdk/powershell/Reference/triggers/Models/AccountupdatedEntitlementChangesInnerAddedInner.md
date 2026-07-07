---
id: accountupdated-entitlement-changes-inner-added-inner
title: AccountupdatedEntitlementChangesInnerAddedInner
pagination_label: AccountupdatedEntitlementChangesInnerAddedInner
sidebar_label: AccountupdatedEntitlementChangesInnerAddedInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountupdatedEntitlementChangesInnerAddedInner', 'AccountupdatedEntitlementChangesInnerAddedInner'] 
slug: /tools/sdk/powershell/triggers/models/accountupdated-entitlement-changes-inner-added-inner
tags: ['SDK', 'Software Development Kit', 'AccountupdatedEntitlementChangesInnerAddedInner', 'AccountupdatedEntitlementChangesInnerAddedInner']
---


# AccountupdatedEntitlementChangesInnerAddedInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique identifier of the entitlement. | [optional] 
**Name** | **String** | The name of the entitlement. | [optional] 
**Owner** | [**AccountupdatedEntitlementChangesInnerAddedInnerOwner**](accountupdated-entitlement-changes-inner-added-inner-owner) |  | [optional] 
**Value** | **String** | The value of the entitlement. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountupdatedEntitlementChangesInnerAddedInner = Initialize-AccountupdatedEntitlementChangesInnerAddedInner  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Name Admin `
 -Owner null `
 -Value Admin
```

- Convert the resource to JSON
```powershell
$AccountupdatedEntitlementChangesInnerAddedInner | ConvertTo-JSON
```


[[Back to top]](#) 

