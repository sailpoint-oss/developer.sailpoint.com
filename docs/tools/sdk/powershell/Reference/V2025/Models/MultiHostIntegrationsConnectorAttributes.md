---
id: v2025-multi-host-integrations-connector-attributes
title: MultiHostIntegrationsConnectorAttributes
pagination_label: MultiHostIntegrationsConnectorAttributes
sidebar_label: MultiHostIntegrationsConnectorAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrationsConnectorAttributes', 'V2025MultiHostIntegrationsConnectorAttributes'] 
slug: /tools/sdk/powershell/v2025/models/multi-host-integrations-connector-attributes
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsConnectorAttributes', 'V2025MultiHostIntegrationsConnectorAttributes']
---


# MultiHostIntegrationsConnectorAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxAllowedSources** | **Int32** | Maximum sources allowed count of a Multi-Host Integration | [optional] 
**LastSourceUploadCount** | **Int32** | Last upload sources count of a Multi-Host Integration | [optional] 
**ConnectorFileUploadHistory** | [**MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistory**](multi-host-integrations-connector-attributes-connector-file-upload-history) |  | [optional] 
**MultihostStatus** |  **Enum** [  "ready",    "processing",    "fileUploadInProgress",    "sourceCreationInProgress",    "aggregationGroupingInProgress",    "aggregationScheduleInProgress",    "deleteInProgress",    "deleteFailed" ] | Multi-Host integration status. | [optional] 
**ShowAccountSchema** | **Boolean** | Show account schema | [optional] [default to $true]
**ShowEntitlementSchema** | **Boolean** | Show entitlement schema | [optional] [default to $true]
**MultiHostAttributes** | [**MultiHostIntegrationsConnectorAttributesMultiHostAttributes**](multi-host-integrations-connector-attributes-multi-host-attributes) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsConnectorAttributes = Initialize-PSSailpoint.V2025MultiHostIntegrationsConnectorAttributes  -MaxAllowedSources 250 `
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

