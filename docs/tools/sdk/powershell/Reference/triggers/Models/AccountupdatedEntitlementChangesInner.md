---
id: accountupdated-entitlement-changes-inner
title: AccountupdatedEntitlementChangesInner
pagination_label: AccountupdatedEntitlementChangesInner
sidebar_label: AccountupdatedEntitlementChangesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountupdatedEntitlementChangesInner', 'AccountupdatedEntitlementChangesInner'] 
slug: /tools/sdk/powershell/triggers/models/accountupdated-entitlement-changes-inner
tags: ['SDK', 'Software Development Kit', 'AccountupdatedEntitlementChangesInner', 'AccountupdatedEntitlementChangesInner']
---


# AccountupdatedEntitlementChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **String** | The name of the entitlement attribute that was changed. | [required]
**Added** | [**[]AccountupdatedEntitlementChangesInnerAddedInner**](accountupdated-entitlement-changes-inner-added-inner) | The entitlements that were added. | [required]
**Removed** | [**[]AccountupdatedEntitlementChangesInnerAddedInner**](accountupdated-entitlement-changes-inner-added-inner) | The entitlements that were removed. | [required]

## Examples

- Prepare the resource
```powershell
$AccountupdatedEntitlementChangesInner = Initialize-AccountupdatedEntitlementChangesInner  -AttributeName roles `
 -Added [{"id":"2c9180835d2e5168015d32f890ca1581","name":"Admin","owner":{"id":"2c9180835d2e5168015d32f890ca1581","name":"Owner Name","type":"Primary"},"value":"Admin"},{"id":"2c9180835d2e5168015d32f890ca1582","name":"User","owner":{"id":"2c9180835d2e5168015d32f890ca1582","name":"Owner Name 2","type":"Secondary"},"value":"User"}] `
 -Removed [{"id":"2c9180835d2e5168015d32f890ca1583","name":"Group","owner":{"id":"2c9180835d2e5168015d32f890ca1583","name":"Owner Name 3","type":"Primary"},"value":"Group"}]
```

- Convert the resource to JSON
```powershell
$AccountupdatedEntitlementChangesInner | ConvertTo-JSON
```


[[Back to top]](#) 

