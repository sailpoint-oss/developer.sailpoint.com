---
id: beta-certification-signed-off-certification
title: CertificationSignedOffCertification
pagination_label: CertificationSignedOffCertification
sidebar_label: CertificationSignedOffCertification
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CertificationSignedOffCertification', 'BetaCertificationSignedOffCertification'] 
slug: /tools/sdk/python/beta/models/certification-signed-off-certification
tags: ['SDK', 'Software Development Kit', 'CertificationSignedOffCertification', 'BetaCertificationSignedOffCertification']
---

# CertificationSignedOffCertification

Certification campaign that was signed off on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Certification's unique ID. | [required]
**name** | **str** | Certification's name. | [required]
**created** | **datetime** | Date and time when the certification was created. | [required]
**modified** | **datetime** | Date and time when the certification was last modified. | [optional] 
**campaign_ref** | [**CampaignReference**](campaign-reference) |  | [required]
**phase** | [**CertificationPhase**](certification-phase) |  | [required]
**due** | **datetime** | Date and time when the certification is due. | [required]
**signed** | **datetime** | Date and time when the reviewer signed off on the certification. | [required]
**reviewer** | [**Reviewer**](reviewer) |  | [required]
**reassignment** | [**Reassignment**](reassignment) |  | [optional] 
**has_errors** | **bool** | Indicates whether the certification has any errors. | [required]
**error_message** | **str** | Message indicating what the error is. | [optional] 
**completed** | **bool** | Indicates whether all certification decisions have been made. | [required]
**decisions_made** | **int** | Number of approve/revoke/acknowledge decisions the reviewer has made. | [required]
**decisions_total** | **int** | Total number of approve/revoke/acknowledge decisions for the certification. | [required]
**entities_completed** | **int** | Number of entities (identities, access profiles, roles, etc.) that are complete and all decisions have been made for. | [required]
**entities_total** | **int** | Total number of entities (identities, access profiles, roles, etc.) in the certification, both complete and incomplete. | [required]
}

## Example

```python
from sailpoint.beta.models.certification_signed_off_certification import CertificationSignedOffCertification

certification_signed_off_certification = CertificationSignedOffCertification(
id='2c91808576f886190176f88caf0d0067',
name='Manager Access Review for Alice Baker',
created='2020-02-16T03:04:45.815Z',
modified='2020-02-16T03:06:45.815Z',
campaign_ref=sailpoint.beta.models.campaign_reference.Campaign Reference(
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
reviewer=sailpoint.beta.models.reviewer.Reviewer(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', 
                    email = 'reviewer@test.com', ),
reassignment=sailpoint.beta.models.reassignment.Reassignment(
                    from = sailpoint.beta.models.certification_reference.Certification Reference(), 
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

