---
id: reviewableentitlement
title: Reviewableentitlement
pagination_label: Reviewableentitlement
sidebar_label: Reviewableentitlement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reviewableentitlement', 'Reviewableentitlement'] 
slug: /tools/sdk/powershell/certifications/models/reviewableentitlement
tags: ['SDK', 'Software Development Kit', 'Reviewableentitlement', 'Reviewableentitlement']
---


# Reviewableentitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The id for the entitlement | [optional] 
**Name** | **String** | The name of the entitlement | [optional] 
**Description** | **String** | Information about the entitlement | [optional] 
**Privileged** | **Boolean** | Indicates if the entitlement is a privileged entitlement | [optional] [default to $false]
**Owner** | [**Identityreferencewithnameandemail**](identityreferencewithnameandemail) |  | [optional] 
**AttributeName** | **String** | The name of the attribute on the source | [optional] 
**AttributeValue** | **String** | The value of the attribute on the source | [optional] 
**SourceSchemaObjectType** | **String** | The schema object type on the source used to represent the entitlement and its attributes | [optional] 
**SourceName** | **String** | The name of the source for which this entitlement belongs | [optional] 
**SourceType** | **String** | The type of the source for which the entitlement belongs | [optional] 
**SourceId** | **String** | The ID of the source for which the entitlement belongs | [optional] 
**HasPermissions** | **Boolean** | Indicates if the entitlement has permissions | [optional] [default to $false]
**IsPermission** | **Boolean** | Indicates if the entitlement is a representation of an account permission | [optional] [default to $false]
**Revocable** | **Boolean** | Indicates whether the entitlement can be revoked | [optional] [default to $false]
**CloudGoverned** | **Boolean** | True if the entitlement is cloud governed | [optional] [default to $false]
**ContainsDataAccess** | **Boolean** | True if the entitlement has DAS data | [optional] [default to $false]
**DataAccess** | [**Dataaccess**](dataaccess) |  | [optional] 
**Account** | [**ReviewableentitlementAccount**](reviewableentitlement-account) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Reviewableentitlement = Initialize-Reviewableentitlement  -Id 2c918085718230600171993742c63558 `
 -Name CN=entitlement.bbb7c650 `
 -Description Gives read/write access to the company database `
 -Privileged false `
 -Owner null `
 -AttributeName memberOf `
 -AttributeValue CN=entitlement.bbb7c650 `
 -SourceSchemaObjectType groups `
 -SourceName ODS-AD-Source `
 -SourceType Active Directory - Direct `
 -SourceId 78ca6be511cb41fbb86dba2fcca7780c `
 -HasPermissions false `
 -IsPermission false `
 -Revocable true `
 -CloudGoverned false `
 -ContainsDataAccess true `
 -DataAccess null `
 -Account null
```

- Convert the resource to JSON
```powershell
$Reviewableentitlement | ConvertTo-JSON
```


[[Back to top]](#) 

