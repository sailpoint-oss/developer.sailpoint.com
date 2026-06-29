---
id: identityprofileexportedobject
title: Identityprofileexportedobject
pagination_label: Identityprofileexportedobject
sidebar_label: Identityprofileexportedobject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identityprofileexportedobject', 'Identityprofileexportedobject'] 
slug: /tools/sdk/python/identity-profiles/models/identityprofileexportedobject
tags: ['SDK', 'Software Development Kit', 'Identityprofileexportedobject', 'Identityprofileexportedobject']
---

# Identityprofileexportedobject

Identity profile exported object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **int** | Version or object from the target service. | [optional] 
**var_self** | [**IdentityprofileexportedobjectSelf**](identityprofileexportedobject-self) |  | [optional] 
**object** | [**Identityprofile**](identityprofile) |  | [optional] 
}

## Example

```python
from sailpoint.identity_profiles.models.identityprofileexportedobject import Identityprofileexportedobject

identityprofileexportedobject = Identityprofileexportedobject(
version=1,
var_self=sailpoint.identity_profiles.models.identityprofileexportedobject_self.identityprofileexportedobject_self(
                    type = 'SOURCE', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'HR Active Directory', ),
object=
)

```
[[Back to top]](#) 

