---
id: certificationsignedoff
title: Certificationsignedoff
pagination_label: Certificationsignedoff
sidebar_label: Certificationsignedoff
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Certificationsignedoff', 'Certificationsignedoff'] 
slug: /tools/sdk/python/triggers/models/certificationsignedoff
tags: ['SDK', 'Software Development Kit', 'Certificationsignedoff', 'Certificationsignedoff']
---

# Certificationsignedoff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certification** | [**CertificationsignedoffCertification**](certificationsignedoff-certification) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.certificationsignedoff import Certificationsignedoff

certificationsignedoff = Certificationsignedoff(
certification=sailpoint.triggers.models.certificationsignedoff_certification.certificationsignedoff_certification(
                    id = '2c91808576f886190176f88caf0d0067', 
                    name = 'Manager Access Review for Alice Baker', 
                    created = '2020-02-16T03:04:45.815Z', 
                    modified = '2020-02-16T03:06:45.815Z', )
)

```
[[Back to top]](#) 

