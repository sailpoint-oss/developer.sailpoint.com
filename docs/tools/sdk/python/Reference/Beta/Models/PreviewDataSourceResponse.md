---
id: beta-preview-data-source-response
title: PreviewDataSourceResponse
pagination_label: PreviewDataSourceResponse
sidebar_label: PreviewDataSourceResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PreviewDataSourceResponse', 'BetaPreviewDataSourceResponse'] 
slug: /tools/sdk/python/beta/models/preview-data-source-response
tags: ['SDK', 'Software Development Kit', 'PreviewDataSourceResponse', 'BetaPreviewDataSourceResponse']
---

# PreviewDataSourceResponse

PreviewDataSourceResponse is the response sent by `/form-definitions/{formDefinitionID}/data-source` endpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**[]FormElementDataSourceConfigOptions**](form-element-data-source-config-options) | Results holds a list of FormElementDataSourceConfigOptions items | [optional] 
}

## Example

```python
from sailpoint.beta.models.preview_data_source_response import PreviewDataSourceResponse

preview_data_source_response = PreviewDataSourceResponse(
results={"results":[{"label":"Alfred 255e71dfc6e","subLabel":"Alfred.255e71dfc6e@testmail.identitysoon.com","value":"2c918084821847c5018227ced2e16676"},{"label":"Alize eba9d4cd27da","subLabel":"Alize.eba9d4cd27da@testmail.identitysoon.com","value":"2c918084821847c5018227ced2f1667c"},{"label":"Antonina 01f69c3ea","subLabel":"Antonina.01f69c3ea@testmail.identitysoon.com","value":"2c918084821847c5018227ced2f9667e"},{"label":"Ardella 21e78ce155","subLabel":"Ardella.21e78ce155@testmail.identitysoon.com","value":"2c918084821847c5018227ced2e6667a"},{"label":"Arnaldo d8582b6e17","subLabel":"Arnaldo.d8582b6e17@testmail.identitysoon.com","value":"2c918084821847c5018227ced3426686"},{"label":"Aurelia admin24828","subLabel":"Aurelia.admin24828@testmail.identitysoon.com","value":"2c918084821847c5018227ced2e16674"},{"label":"Barbara 72ca418fdd","subLabel":"Barbara.72ca418fdd@testmail.identitysoon.com","value":"2c918084821847c5018227ced2fb6680"},{"label":"Barbara ee1a2436ee","subLabel":"Barbara.ee1a2436ee@testmail.identitysoon.com","value":"2c918084821847c5018227ced2e56678"},{"label":"Baylee 652d72432f3","subLabel":"Baylee.652d72432f3@testmail.identitysoon.com","value":"2c91808582184782018227ced28b6aee"},{"label":"Brock e76b56ae4d49","subLabel":"Brock.e76b56ae4d49@testmail.identitysoon.com","value":"2c91808582184782018227ced28b6aef"}]}
)

```
[[Back to top]](#) 

