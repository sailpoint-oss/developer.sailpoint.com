---
id: beta-preview-data-source-response
title: PreviewDataSourceResponse
pagination_label: PreviewDataSourceResponse
sidebar_label: PreviewDataSourceResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PreviewDataSourceResponse', 'BetaPreviewDataSourceResponse'] 
slug: /tools/sdk/powershell/beta/models/preview-data-source-response
tags: ['SDK', 'Software Development Kit', 'PreviewDataSourceResponse', 'BetaPreviewDataSourceResponse']
---


# PreviewDataSourceResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Results** | [**[]FormElementDataSourceConfigOptions**](form-element-data-source-config-options) | Results holds a list of FormElementDataSourceConfigOptions items | [optional] 

## Examples

- Prepare the resource
```powershell
$PreviewDataSourceResponse = Initialize-PSSailpoint.BetaPreviewDataSourceResponse  -Results {&quot;results&quot;:[{&quot;label&quot;:&quot;Alfred 255e71dfc6e&quot;,&quot;subLabel&quot;:&quot;Alfred.255e71dfc6e@testmail.identitysoon.com&quot;,&quot;value&quot;:&quot;2c918084821847c5018227ced2e16676&quot;},{&quot;label&quot;:&quot;Alize eba9d4cd27da&quot;,&quot;subLabel&quot;:&quot;Alize.eba9d4cd27da@testmail.identitysoon.com&quot;,&quot;value&quot;:&quot;2c918084821847c5018227ced2f1667c&quot;},{&quot;label&quot;:&quot;Antonina 01f69c3ea&quot;,&quot;subLabel&quot;:&quot;Antonina.01f69c3ea@testmail.identitysoon.com&quot;,&quot;value&quot;:&quot;2c918084821847c5018227ced2f9667e&quot;},{&quot;label&quot;:&quot;Ardella 21e78ce155&quot;,&quot;subLabel&quot;:&quot;Ardella.21e78ce155@testmail.identitysoon.com&quot;,&quot;value&quot;:&quot;2c918084821847c5018227ced2e6667a&quot;},{&quot;label&quot;:&quot;Arnaldo d8582b6e17&quot;,&quot;subLabel&quot;:&quot;Arnaldo.d8582b6e17@testmail.identitysoon.com&quot;,&quot;value&quot;:&quot;2c918084821847c5018227ced3426686&quot;},{&quot;label&quot;:&quot;Aurelia admin24828&quot;,&quot;subLabel&quot;:&quot;Aurelia.admin24828@testmail.identitysoon.com&quot;,&quot;value&quot;:&quot;2c918084821847c5018227ced2e16674&quot;},{&quot;label&quot;:&quot;Barbara 72ca418fdd&quot;,&quot;subLabel&quot;:&quot;Barbara.72ca418fdd@testmail.identitysoon.com&quot;,&quot;value&quot;:&quot;2c918084821847c5018227ced2fb6680&quot;},{&quot;label&quot;:&quot;Barbara ee1a2436ee&quot;,&quot;subLabel&quot;:&quot;Barbara.ee1a2436ee@testmail.identitysoon.com&quot;,&quot;value&quot;:&quot;2c918084821847c5018227ced2e56678&quot;},{&quot;label&quot;:&quot;Baylee 652d72432f3&quot;,&quot;subLabel&quot;:&quot;Baylee.652d72432f3@testmail.identitysoon.com&quot;,&quot;value&quot;:&quot;2c91808582184782018227ced28b6aee&quot;},{&quot;label&quot;:&quot;Brock e76b56ae4d49&quot;,&quot;subLabel&quot;:&quot;Brock.e76b56ae4d49@testmail.identitysoon.com&quot;,&quot;value&quot;:&quot;2c91808582184782018227ced28b6aef&quot;}]}
```

- Convert the resource to JSON
```powershell
$PreviewDataSourceResponse | ConvertTo-JSON
```


[[Back to top]](#) 

