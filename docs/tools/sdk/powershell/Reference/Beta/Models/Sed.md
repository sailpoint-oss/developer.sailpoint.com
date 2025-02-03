---
id: beta-sed
title: Sed
pagination_label: Sed
sidebar_label: Sed
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sed', 'BetaSed'] 
slug: /tools/sdk/powershell/beta/models/sed
tags: ['SDK', 'Software Development Kit', 'Sed', 'BetaSed']
---


# Sed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | name of the entitlement | [optional] 
**ApprovedBy** | **String** | entitlement approved by | [optional] 
**ApprovedType** | **String** | entitlement approved type | [optional] 
**ApprovedWhen** | **System.DateTime** | entitlement approved then | [optional] 
**Attribute** | **String** | entitlement attribute | [optional] 
**Description** | **String** | description of entitlement | [optional] 
**DisplayName** | **String** | entitlement display name | [optional] 
**Id** | **String** | sed id | [optional] 
**SourceId** | **String** | entitlement source id | [optional] 
**SourceName** | **String** | entitlement source name | [optional] 
**Status** | **String** | entitlement status | [optional] 
**SuggestedDescription** | **String** | llm suggested entitlement description | [optional] 
**Type** | **String** | entitlement type | [optional] 
**Value** | **String** | entitlement value | [optional] 

## Examples

- Prepare the resource
```powershell
$Sed = Initialize-PSSailpoint.BetaSed  -Name BatchInvoiceProcessing `
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

