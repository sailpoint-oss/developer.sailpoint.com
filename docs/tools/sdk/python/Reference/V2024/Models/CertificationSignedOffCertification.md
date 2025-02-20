---
id: v2024-certification-signed-off-certification
title: CertificationSignedOffCertification
pagination_label: CertificationSignedOffCertification
sidebar_label: CertificationSignedOffCertification
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CertificationSignedOffCertification', 'V2024CertificationSignedOffCertification'] 
slug: /tools/sdk/python/v2024/models/certification-signed-off-certification
tags: ['SDK', 'Software Development Kit', 'CertificationSignedOffCertification', 'V2024CertificationSignedOffCertification']
---

# CertificationSignedOffCertification

The certification campaign that was signed off on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique ID of the certification. | [required]
**name** | **str** | The name of the certification. | [required]
**created** | **datetime** | The date and time the certification was created. | [required]
**modified** | **datetime** | The date and time the certification was last modified. | [optional] 
**campaign_ref** | [**CampaignReference**](campaign-reference) |  | [required]
**phase** | [**CertificationPhase**](certification-phase) |  | [required]
**due** | **datetime** | The due date of the certification. | [required]
**signed** | **datetime** | The date the reviewer signed off on the certification. | [required]
**reviewer** | [**Reviewer1**](reviewer1) |  | [required]
**reassignment** | [**Reassignment1**](reassignment1) |  | [optional] 
**has_errors** | **bool** | Indicates it the certification has any errors. | [required]
**error_message** | **str** | A message indicating what the error is. | [optional] 
**completed** | **bool** | Indicates if all certification decisions have been made. | [required]
**decisions_made** | **int** | The number of approve/revoke/acknowledge decisions that have been made by the reviewer. | [required]
**decisions_total** | **int** | The total number of approve/revoke/acknowledge decisions for the certification. | [required]
**entities_completed** | **int** | The number of entities (identities, access profiles, roles, etc.) for which all decisions have been made and are complete. | [required]
**entities_total** | **int** | The total number of entities (identities, access profiles, roles, etc.) in the certification, both complete and incomplete. | [required]
}

## Example

```python
from sailpoint.v2024.models.certification_signed_off_certification import CertificationSignedOffCertification

certification_signed_off_certification = CertificationSignedOffCertification(
id='2c91808576f886190176f88caf0d0067',
name='Manager Access Review for Alice Baker',
created='2020-02-16T03:04:45.815Z',
modified='2020-02-16T03:06:45.815Z',
campaign_ref=sailpoint.v2024.models.campaign_reference.CampaignReference(
                    id = 'ef38f94347e94562b5bb8424a56397d8', 
                    name = 'Campaign Name', 
                    type = 'CAMPAIGN', 
                    campaign_type = 'MANAGER', 
                    description = 'A description of the campaign', 
                    correlated_status = 'CORRELATED', 
                    mandatory_comment_requirement = 'NO_DECISIONS', ),
phase='ACTIVE',
due='2018-10-19T13:49:37.385Z',
signed='2018-10-19T13:49:37.385Z',
reviewer=sailpoint.v2024.models.reviewer_1.Reviewer_1(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', 
                    email = 'reviewer@test.com', ),
reassignment=sailpoint.v2024.models.reassignment_1.Reassignment_1(
                    from = sailpoint.v2024.models.certification_reference_1.CertificationReference_1(), 
                    comment = 'Please review', ),
has_errors=False,
error_message='The certification has an error',
completed=False,
decisions_made=20,
decisions_total=40,
entities_completed=5,
entities_total=10
)

```
[[Back to top]](#) 

