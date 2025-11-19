---
id: v2025-scope
title: Scope
pagination_label: Scope
sidebar_label: Scope
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Scope', 'V2025Scope'] 
slug: /tools/sdk/python/v2025/models/scope
tags: ['SDK', 'Software Development Kit', 'Scope', 'V2025Scope']
---

# Scope

This defines what access the segment is giving

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | [**ScopeType**](scope-type) |  | [optional] 
**visibility** | [**ScopeVisibilityType**](scope-visibility-type) |  | [optional] 
**scope_filter** | [**VisibilityCriteria**](visibility-criteria) |  | [optional] 
**scope_selection** | [**[]Ref**](ref) | List of Identities that are assigned to the segment | [optional] 
}

## Example

```python
from sailpoint.v2025.models.scope import Scope

scope = Scope(
scope='ALL',
visibility='ALL',
scope_filter=sailpoint.v2025.models.visibility_criteria.Visibility Criteria(
                    expression = sailpoint.v2025.models.expression.Expression(
                        operator = 'EQUALS', 
                        attribute = 'location', 
                        value = sailpoint.v2025.models.value.Value(
                            type = 'STRING', ), 
                        children = [], ), ),
scope_selection=[{type=IDENTITY, id=29cb6c061da843ea8be4b3125f248f2a}, {type=IDENTITY, id=f7b1b8a35fed4fd4ad2982014e137e19}]
)

```
[[Back to top]](#) 

