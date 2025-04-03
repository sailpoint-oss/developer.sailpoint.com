---
id: v2025-certification
title: Certification
pagination_label: Certification
sidebar_label: Certification
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Certification', 'V2025Certification'] 
slug: /tools/sdk/python/v2025/models/certification
tags: ['SDK', 'Software Development Kit', 'Certification', 'V2025Certification']
---

# Certification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | id of the certification | [optional] 
**name** | **str** | name of the certification | [optional] 
**campaign** | [**CampaignReference**](campaign-reference) |  | [optional] 
**completed** | **bool** | Have all decisions been made? | [optional] 
**identities_completed** | **int** | The number of identities for whom all decisions have been made and are complete. | [optional] 
**identities_total** | **int** | The total number of identities in the Certification, both complete and incomplete. | [optional] 
**created** | **datetime** | created date | [optional] 
**modified** | **datetime** | modified date | [optional] 
**decisions_made** | **int** | The number of approve/revoke/acknowledge decisions that have been made. | [optional] 
**decisions_total** | **int** | The total number of approve/revoke/acknowledge decisions. | [optional] 
**due** | **datetime** | The due date of the certification. | [optional] 
**signed** | **datetime** | The date the reviewer signed off on the Certification. | [optional] 
**reviewer** | [**Reviewer**](reviewer) |  | [optional] 
**reassignment** | [**Reassignment**](reassignment) |  | [optional] 
**has_errors** | **bool** | Identifies if the certification has an error | [optional] 
**error_message** | **str** | Description of the certification error | [optional] 
**phase** | [**CertificationPhase**](certification-phase) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.certification import Certification

certification = Certification(
id='2c9180835d2e5168015d32f890ca1581',
name='Source Owner Access Review for Employees [source]',
campaign=sailpoint.v2025.models.campaign_reference.CampaignReference(
                    id = 'ef38f94347e94562b5bb8424a56397d8', 
                    name = 'Campaign Name', 
                    type = 'CAMPAIGN', 
                    campaign_type = 'MANAGER', 
                    description = 'A description of the campaign', 
                    correlated_status = 'CORRELATED', 
                    mandatory_comment_requirement = 'NO_DECISIONS', ),
completed=True,
identities_completed=5,
identities_total=10,
created='2018-06-25T20:22:28.104Z',
modified='2018-06-25T20:22:28.104Z',
decisions_made=20,
decisions_total=40,
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
                    from = sailpoint.v2025.models.certification_reference.CertificationReference(
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
phase='ACTIVE'
)

```
[[Back to top]](#) 

