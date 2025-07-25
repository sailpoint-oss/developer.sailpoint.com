---
id: v2025-certification-dto
title: CertificationDto
pagination_label: CertificationDto
sidebar_label: CertificationDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CertificationDto', 'V2025CertificationDto'] 
slug: /tools/sdk/python/v2025/models/certification-dto
tags: ['SDK', 'Software Development Kit', 'CertificationDto', 'V2025CertificationDto']
---

# CertificationDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_ref** | [**CampaignReference**](campaign-reference) |  | [required]
**phase** | [**CertificationPhase**](certification-phase) |  | [required]
**due** | **datetime** | The due date of the certification. | [required]
**signed** | **datetime** | The date the reviewer signed off on the certification. | [required]
**reviewer** | [**Reviewer**](reviewer) |  | [required]
**reassignment** | [**Reassignment**](reassignment) |  | [optional] 
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
from sailpoint.v2025.models.certification_dto import CertificationDto

certification_dto = CertificationDto(
campaign_ref=sailpoint.v2025.models.campaign_reference.Campaign Reference(
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
reviewer=sailpoint.v2025.models.reviewer.Reviewer(
                    id = 'ef38f94347e94562b5bb8424a56397d8', 
                    name = 'Reviewer Name', 
                    email = 'reviewer@test.com', 
                    type = 'IDENTITY', 
                    created = '2018-06-25T20:22:28.104Z', 
                    modified = '2018-06-25T20:22:28.104Z', ),
reassignment=sailpoint.v2025.models.reassignment.Reassignment(
                    from = sailpoint.v2025.models.certification_reference.Certification Reference(
                        id = 'ef38f94347e94562b5bb8424a56397d8', 
                        name = 'Certification Name', 
                        type = 'CERTIFICATION', 
                        reviewer = sailpoint.v2025.models.reviewer.Reviewer(
                            id = 'ef38f94347e94562b5bb8424a56397d8', 
                            name = 'Reviewer Name', 
                            email = 'reviewer@test.com', 
                            type = 'IDENTITY', 
                            created = '2018-06-25T20:22:28.104Z', 
                            modified = '2018-06-25T20:22:28.104Z', ), ), 
                    comment = 'Reassigned for a reason', ),
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

