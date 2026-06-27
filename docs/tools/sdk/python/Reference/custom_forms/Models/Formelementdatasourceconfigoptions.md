---
id: formelementdatasourceconfigoptions
title: Formelementdatasourceconfigoptions
pagination_label: Formelementdatasourceconfigoptions
sidebar_label: Formelementdatasourceconfigoptions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Formelementdatasourceconfigoptions', 'Formelementdatasourceconfigoptions'] 
slug: /tools/sdk/python/custom-forms/models/formelementdatasourceconfigoptions
tags: ['SDK', 'Software Development Kit', 'Formelementdatasourceconfigoptions', 'Formelementdatasourceconfigoptions']
---

# Formelementdatasourceconfigoptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | Label is the main label to display to the user when selecting this option | [optional] 
**sub_label** | **str** | SubLabel is the sub label to display below the label in diminutive styling to help describe or identify this option | [optional] 
**value** | **str** | Value is the value to save as an entry when the user selects this option | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.formelementdatasourceconfigoptions import Formelementdatasourceconfigoptions

formelementdatasourceconfigoptions = Formelementdatasourceconfigoptions(
label='regression-test-access-request-07c55dd6-3056-430a-86b5-fccc395bb6c5',
sub_label='',
value='e96674448eba4ca1ba04eee999a8f3cd'
)

```
[[Back to top]](#) 

