---
id: beta-identity-profile-exported-object
title: IdentityProfileExportedObject
pagination_label: IdentityProfileExportedObject
sidebar_label: IdentityProfileExportedObject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityProfileExportedObject', 'BetaIdentityProfileExportedObject'] 
slug: /tools/sdk/python/beta/models/identity-profile-exported-object
tags: ['SDK', 'Software Development Kit', 'IdentityProfileExportedObject', 'BetaIdentityProfileExportedObject']
---

# IdentityProfileExportedObject

Identity Profile exported object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **int** | Version or object from the target service. | [optional] 
**var_self** | [**SelfImportExportDto**](self-import-export-dto) |  | [optional] 
**object** | [**IdentityProfile1**](identity-profile1) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.identity_profile_exported_object import IdentityProfileExportedObject

identity_profile_exported_object = IdentityProfileExportedObject(
version=1,
var_self=sailpoint.beta.models.self_import_export_dto.SelfImportExportDto(
                    type = 'SOURCE', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'HR Active Directory', ),
object=
)

```
[[Back to top]](#) 

