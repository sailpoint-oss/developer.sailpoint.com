---
id: v2024-identity-cert-decision-summary
title: IdentityCertDecisionSummary
pagination_label: IdentityCertDecisionSummary
sidebar_label: IdentityCertDecisionSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityCertDecisionSummary', 'V2024IdentityCertDecisionSummary'] 
slug: /tools/sdk/python/v2024/models/identity-cert-decision-summary
tags: ['SDK', 'Software Development Kit', 'IdentityCertDecisionSummary', 'V2024IdentityCertDecisionSummary']
---

# IdentityCertDecisionSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlement_decisions_made** | **int** | Number of entitlement decisions that have been made | [optional] 
**access_profile_decisions_made** | **int** | Number of access profile decisions that have been made | [optional] 
**role_decisions_made** | **int** | Number of role decisions that have been made | [optional] 
**account_decisions_made** | **int** | Number of account decisions that have been made | [optional] 
**entitlement_decisions_total** | **int** | The total number of entitlement decisions on the certification, both complete and incomplete | [optional] 
**access_profile_decisions_total** | **int** | The total number of access profile decisions on the certification, both complete and incomplete | [optional] 
**role_decisions_total** | **int** | The total number of role decisions on the certification, both complete and incomplete | [optional] 
**account_decisions_total** | **int** | The total number of account decisions on the certification, both complete and incomplete | [optional] 
**entitlements_approved** | **int** | The number of entitlement decisions that have been made which were approved | [optional] 
**entitlements_revoked** | **int** | The number of entitlement decisions that have been made which were revoked | [optional] 
**access_profiles_approved** | **int** | The number of access profile decisions that have been made which were approved | [optional] 
**access_profiles_revoked** | **int** | The number of access profile decisions that have been made which were revoked | [optional] 
**roles_approved** | **int** | The number of role decisions that have been made which were approved | [optional] 
**roles_revoked** | **int** | The number of role decisions that have been made which were revoked | [optional] 
**accounts_approved** | **int** | The number of account decisions that have been made which were approved | [optional] 
**accounts_revoked** | **int** | The number of account decisions that have been made which were revoked | [optional] 
}

## Example

```python
from sailpoint.v2024.models.identity_cert_decision_summary import IdentityCertDecisionSummary

identity_cert_decision_summary = IdentityCertDecisionSummary(
entitlement_decisions_made=3,
access_profile_decisions_made=5,
role_decisions_made=2,
account_decisions_made=4,
entitlement_decisions_total=6,
access_profile_decisions_total=10,
role_decisions_total=4,
account_decisions_total=8,
entitlements_approved=2,
entitlements_revoked=1,
access_profiles_approved=3,
access_profiles_revoked=2,
roles_approved=2,
roles_revoked=0,
accounts_approved=1,
accounts_revoked=3
)

```
[[Back to top]](#) 

