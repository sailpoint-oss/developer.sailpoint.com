---
id: v2024-certification-signed-off
title: CertificationSignedOff
pagination_label: CertificationSignedOff
sidebar_label: CertificationSignedOff
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CertificationSignedOff', 'V2024CertificationSignedOff'] 
slug: /tools/sdk/python/v2024/models/certification-signed-off
tags: ['SDK', 'Software Development Kit', 'CertificationSignedOff', 'V2024CertificationSignedOff']
---

# CertificationSignedOff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certification** | [**CertificationSignedOffCertification**](certification-signed-off-certification) |  | [required]
}

## Example

```python
from sailpoint.v2024.models.certification_signed_off import CertificationSignedOff

certification_signed_off = CertificationSignedOff(
certification=sailpoint.v2024.models.certification_signed_off_certification.CertificationSignedOff_certification(
                    id = '2c91808576f886190176f88caf0d0067', 
                    name = 'Manager Access Review for Alice Baker', 
                    created = '2020-02-16T03:04:45.815Z', 
                    modified = '2020-02-16T03:06:45.815Z', )
)

```
[[Back to top]](#) 

