---
id: sed
title: Sed
pagination_label: Sed
sidebar_label: Sed
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Sed'] 
slug: /tools/sdk/powershell/beta/models/sed
tags: ['SDK', 'Software Development Kit', 'Sed']
---


# Sed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | name of the entitlement | [optional] 
**ApprovedBy** |  Pointer to **String** | entitlement approved by | [optional] 
**ApprovedType** |  Pointer to **String** | entitlement approved type | [optional] 
**ApprovedWhen** |  Pointer to **System.DateTime** | entitlement approved then | [optional] 
**Attribute** |  Pointer to **String** | entitlement attribute | [optional] 
**Description** |  Pointer to **String** | description of entitlement | [optional] 
**DisplayName** |  Pointer to **String** | entitlement display name | [optional] 
**Id** |  Pointer to **String** | sed id | [optional] 
**SourceId** |  Pointer to **String** | entitlement source id | [optional] 
**SourceName** |  Pointer to **String** | entitlement source name | [optional] 
**Status** |  Pointer to **String** | entitlement status | [optional] 
**SuggestedDescription** |  Pointer to **String** | llm suggested entitlement description | [optional] 
**Type** |  Pointer to **String** | entitlement type | [optional] 
**Value** |  Pointer to **String** | entitlement value | [optional] 

## Examples

- Prepare the resource
```powershell
$Sed = Initialize-BetaSed  -Name BatchInvoiceProcessing `
 -ApprovedBy 2c918086-76de-afbf-0176-f6d28f65565a `
 -ApprovedType admin `
 -ApprovedWhen null `
 -Attribute Role `
 -Description This entitlement allows automated processing of invoices in batches on a scheduled basis to streamline accounts payable procedures. `
 -DisplayName AWS-Cloud-Billing `
 -Id ead281ee-12a9-40ac-9534-36b5d7d65d53 `
 -SourceId 103f567b93ee49b991c40f9412f87643 `
 -SourceName IDN Salesforce `
 -Status suggested `
 -SuggestedDescription This entitlement allows automated processing of invoices in batches on a scheduled basis to streamline accounts payable `
 -Type group `
 -Value group
```

- Convert the resource to JSON
```powershell
$Sed | ConvertTo-JSON
```


[[Back to top]](#) 

