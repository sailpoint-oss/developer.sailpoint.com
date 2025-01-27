---
id: beta-multi-host-integrations-connector-attributes
title: MultiHostIntegrationsConnectorAttributes
pagination_label: MultiHostIntegrationsConnectorAttributes
sidebar_label: MultiHostIntegrationsConnectorAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrationsConnectorAttributes'] 
slug: /tools/sdk/powershell/beta/models/multi-host-integrations-connector-attributes
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsConnectorAttributes']
---


# MultiHostIntegrationsConnectorAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxAllowedSources** |  Pointer to **Int32** | Maximum sources allowed count of a Multi-Host Integration | [optional] 
**LastSourceUploadCount** |  Pointer to **Int32** | Last upload sources count of a Multi-Host Integration | [optional] 
**ConnectorFileUploadHistory** |  Pointer to [**MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistory**](multi-host-integrations-connector-attributes-connector-file-upload-history) |  | [optional] 
**MultihostStatus** |  Pointer to  **Enum** [  "ready",    "processing",    "fileUploadInProgress",    "sourceCreationInProgress",    "aggregationGroupingInProgress",    "aggregationScheduleInProgress",    "deleteInProgress",    "deleteFailed" ] | Multi-Host integration status. | [optional] 
**ShowAccountSchema** |  Pointer to **Boolean** | Show account schema | [optional] [default to $true]
**ShowEntitlementSchema** |  Pointer to **Boolean** | Show entitlement schema | [optional] [default to $true]
**MultiHostAttributes** |  Pointer to [**MultiHostIntegrationsConnectorAttributesMultiHostAttributes**](multi-host-integrations-connector-attributes-multi-host-attributes) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsConnectorAttributes = Initialize-PSSailpoint.BetaMultiHostIntegrationsConnectorAttributes  -MaxAllowedSources 250 `
 -LastSourceUploadCount 40 `
 -ConnectorFileUploadHistory null `
 -MultihostStatus ready `
 -ShowAccountSchema true `
 -ShowEntitlementSchema true `
 -MultiHostAttributes null
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsConnectorAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

