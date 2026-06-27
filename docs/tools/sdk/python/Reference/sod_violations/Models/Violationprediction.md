---
id: violationprediction
title: Violationprediction
pagination_label: Violationprediction
sidebar_label: Violationprediction
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Violationprediction', 'Violationprediction'] 
slug: /tools/sdk/python/sod-violations/models/violationprediction
tags: ['SDK', 'Software Development Kit', 'Violationprediction', 'Violationprediction']
---

# Violationprediction

An object containing a listing of the SOD violation reasons detected by this check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**violation_contexts** | [**[]Violationcontext**](violationcontext) | List of Violation Contexts | [optional] 
}

## Example

```python
from sailpoint.sod_violations.models.violationprediction import Violationprediction

violationprediction = Violationprediction(
violation_contexts=[
                    sailpoint.sod_violations.models.violationcontext.violationcontext(
                        policy = sailpoint.sod_violations.models.violationcontext_policy.violationcontext_policy(
                            type = 'ENTITLEMENT', ), 
                        conflicting_access_criteria = sailpoint.sod_violations.models.exceptionaccesscriteria.exceptionaccesscriteria(
                            left_criteria = sailpoint.sod_violations.models.exceptioncriteria.exceptioncriteria(
                                criteria_list = [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","existing":true},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","existing":false}], ), 
                            right_criteria = sailpoint.sod_violations.models.exceptioncriteria.exceptioncriteria(
                                criteria_list = [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","existing":true},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","existing":false}], ), ), )
                    ]
)

```
[[Back to top]](#) 

