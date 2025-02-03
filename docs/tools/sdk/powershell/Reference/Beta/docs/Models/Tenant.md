---
id: beta-tenant
title: Tenant
pagination_label: Tenant
sidebar_label: Tenant
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Tenant', 'BetaTenant'] 
slug: /tools/sdk/powershell/beta/models/tenant
tags: ['SDK', 'Software Development Kit', 'Tenant', 'BetaTenant']
---


# Tenant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The unique identifier for the Tenant | [optional] [readonly] 
**Name** |  Pointer to **String** | Abbreviated name of the Tenant | [optional] 
**FullName** |  Pointer to **String** | Human-readable name of the Tenant | [optional] 
**Pod** |  Pointer to **String** | Deployment pod for the Tenant | [optional] 
**Region** |  Pointer to **String** | Deployment region for the Tenant | [optional] 
**Description** |  Pointer to **String** | Description of the Tenant | [optional] 
**Products** |  Pointer to [**[]Product**](product) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Tenant = Initialize-PSSailpoint.BetaTenant  -Id 2c91808568c529c60168cca6f90c1324 `
 -Name acme `
 -FullName Acme, Inc `
 -Pod example-pod `
 -Region us-east-1 `
 -Description Description of the Tenant `
 -Products null
```

- Convert the resource to JSON
```powershell
$Tenant | ConvertTo-JSON
```


[[Back to top]](#) 

