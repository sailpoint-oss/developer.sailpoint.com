---
id: attrsyncsourceconfig
title: Attrsyncsourceconfig
pagination_label: Attrsyncsourceconfig
sidebar_label: Attrsyncsourceconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Attrsyncsourceconfig', 'Attrsyncsourceconfig'] 
slug: /tools/sdk/python/sources/models/attrsyncsourceconfig
tags: ['SDK', 'Software Development Kit', 'Attrsyncsourceconfig', 'Attrsyncsourceconfig']
---

# Attrsyncsourceconfig

Specification of attribute sync configuration for a source

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**Attrsyncsource**](attrsyncsource) |  | [required]
**attributes** | [**[]Attrsyncsourceattributeconfig**](attrsyncsourceattributeconfig) | Attribute synchronization configuration for specific identity attributes in the context of a source | [required]
}

## Example

```python
from sailpoint.sources.models.attrsyncsourceconfig import Attrsyncsourceconfig

attrsyncsourceconfig = Attrsyncsourceconfig(
source=sailpoint.sources.models.attr_sync_source.Attr Sync Source(
                    type = 'SOURCE', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'HR Active Directory', ),
attributes=[{"name":"email","displayName":"Email","enabled":true,"target":"mail"},{"name":"firstname","displayName":"First Name","enabled":false,"target":"givenName"}]
)

```
[[Back to top]](#) 

