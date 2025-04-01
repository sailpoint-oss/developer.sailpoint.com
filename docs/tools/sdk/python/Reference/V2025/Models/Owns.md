---
id: v2025-owns
title: Owns
pagination_label: Owns
sidebar_label: Owns
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Owns', 'V2025Owns'] 
slug: /tools/sdk/python/v2025/models/owns
tags: ['SDK', 'Software Development Kit', 'Owns', 'V2025Owns']
---

# Owns


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sources** | [**[]Reference**](reference) |  | [optional] 
**entitlements** | [**[]Reference**](reference) |  | [optional] 
**access_profiles** | [**[]Reference**](reference) |  | [optional] 
**roles** | [**[]Reference**](reference) |  | [optional] 
**apps** | [**[]Reference**](reference) |  | [optional] 
**governance_groups** | [**[]Reference**](reference) |  | [optional] 
**fallback_approver** | **bool** |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.owns import Owns

owns = Owns(
sources=[
                    sailpoint.v2025.models.reference.Reference(
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'John Doe', )
                    ],
entitlements=[
                    sailpoint.v2025.models.reference.Reference(
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'John Doe', )
                    ],
access_profiles=[
                    sailpoint.v2025.models.reference.Reference(
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'John Doe', )
                    ],
roles=[
                    sailpoint.v2025.models.reference.Reference(
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'John Doe', )
                    ],
apps=[
                    sailpoint.v2025.models.reference.Reference(
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'John Doe', )
                    ],
governance_groups=[
                    sailpoint.v2025.models.reference.Reference(
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'John Doe', )
                    ],
fallback_approver=False
)

```
[[Back to top]](#) 

