---
id: rolelistfilterdto
title: Rolelistfilterdto
pagination_label: Rolelistfilterdto
sidebar_label: Rolelistfilterdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Rolelistfilterdto', 'Rolelistfilterdto'] 
slug: /tools/sdk/python/roles/models/rolelistfilterdto
tags: ['SDK', 'Software Development Kit', 'Rolelistfilterdto', 'Rolelistfilterdto']
---

# Rolelistfilterdto

AMMFilterValues

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **str** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results) Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq* | [optional] 
**amm_key_values** | [**[]RolelistfilterdtoAmmKeyValuesInner**](rolelistfilterdto-amm-key-values-inner) |  | [optional] 
}

## Example

```python
from sailpoint.roles.models.rolelistfilterdto import Rolelistfilterdto

rolelistfilterdto = Rolelistfilterdto(
filters='dimensional eq false',
amm_key_values=[{"attribute":"iscFederalClassifications","values":["secret"]}]
)

```
[[Back to top]](#) 

