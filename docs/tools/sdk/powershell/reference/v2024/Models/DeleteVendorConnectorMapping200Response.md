---
id: v2024-delete-vendor-connector-mapping200-response
title: DeleteVendorConnectorMapping200Response
pagination_label: DeleteVendorConnectorMapping200Response
sidebar_label: DeleteVendorConnectorMapping200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DeleteVendorConnectorMapping200Response'] 
slug: /tools/sdk/powershell/v2024/models/delete-vendor-connector-mapping200-response
tags: ['SDK', 'Software Development Kit', 'DeleteVendorConnectorMapping200Response']
---


# DeleteVendorConnectorMapping200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** |  Pointer to **Int32** | The number of vendor connector mappings successfully deleted. | [optional] 

## Examples

- Prepare the resource
```powershell
$DeleteVendorConnectorMapping200Response = Initialize-PSSailpoint.V2024DeleteVendorConnectorMapping200Response  -Count 1
```

- Convert the resource to JSON
```powershell
$DeleteVendorConnectorMapping200Response | ConvertTo-JSON
```


[[Back to top]](#) 

