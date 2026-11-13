# Certification

# Certification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_ref** | [**CampaignReference**](campaign-reference) |  | [required]
**phase** | **CertificationPhase** |  | [required]
**review_progress** | **CertificationReviewProgress** |  | [optional] 
**due_date** | **datetime** | The due date of the certification. | [required]
**date_signed** | **datetime** | The date the reviewer signed off on the certification. Omitted until the certification is signed off. | [optional] 
**date_finished** | **datetime** | The date the certification was finished. | [optional] 
**reviewer** | [**CertificationReviewer**](certification-reviewer) |  | [required]
**reassignment** | [**Reassignment**](reassignment) |  | [optional] 
**completed** | **bool** | Indicates if all certification decisions have been made. | [required]
**decisions_made** | **int** | The number of approve/revoke/acknowledge decisions that have been made by the reviewer. | [required]
**decisions_total** | **int** | The total number of approve/revoke/acknowledge decisions for the certification. | [required]
**completed_subjects** | **int** | The number of subjects (identities, access profiles, roles, etc.) for which all decisions have been made and are complete. | [required]
**total_subjects** | **int** | The total number of subjects (identities, access profiles, roles, etc.) in the certification, both complete and incomplete. | [required]
**id** | **str** | The certificationId | [optional] 
**name** | **str** | The name of the certification | [optional] 
**created** | **datetime** | The date the certification was created | [optional] 
**modified** | **datetime** | The date the certification was last modified | [optional] 
**reauth_required** | **bool** | Indicates whether any review items within this certification requires reauthentication before sign-off or completion | [optional] [default to False]
\}

## Example

```python
from sailpoint.gov_certification.models.certification import Certification

certification = Certification(
campaign_ref=sailpoint.gov_certification.models.campaign_reference.CampaignReference(
                    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8', 
                    name = 'Campaign Name', 
                    description = 'A description of the campaign', 
                    type = 'IDENTITY', 
                    mandatory_comment_requirement = 'ALL_DECISIONS', 
                    recommendations_enabled = False, 
                    reviewer = sailpoint.gov_certification.models.campaign_reference_reviewer.CampaignReference_reviewer(), 
                    generation_type = 'CAMPAIGN_FILTER', ),
phase='ACTIVE',
review_progress='SIGNED',
due_date='2018-10-19T13:49:37.385Z',
date_signed='2018-10-19T13:49:37.385Z',
date_finished='2018-10-19T14:49:37.385Z',
reviewer=sailpoint.gov_certification.models.certification_reviewer.CertificationReviewer(
                    id = '0fbe863c063c4c88a35fd7f17e8a3df5', 
                    type = 'IDENTITY', 
                    name = 'William Wilson', 
                    email = 'William.Wilson@email.com', ),
reassignment=sailpoint.gov_certification.models.reassignment.Reassignment(
                    reassigned_from = sailpoint.gov_certification.models.certification_reference.CertificationReference(
                        certification_id = '7589a83c-ec4b-4f13-8ce5-6c1a5ef0756d', 
                        certification_display_name = 'Manager Access for Michael Michaels', 
                        reviewer = sailpoint.gov_certification.models.certification_reviewer.CertificationReviewer(
                            id = '0fbe863c063c4c88a35fd7f17e8a3df5', 
                            type = 'IDENTITY', 
                            name = 'William Wilson', 
                            email = 'William.Wilson@email.com', ), ), 
                    comment = 'Please review', 
                    reassignment_trails = [
                        sailpoint.gov_certification.models.reassignment_trail.ReassignmentTrail(
                            previous_reviewer = sailpoint.gov_certification.models.reassignment_trail_reviewer.ReassignmentTrailReviewer(
                                id = '0fbe863c063c4c88a35fd7f17e8a3df5', 
                                name = 'William Wilson', ), 
                            new_reviewer = sailpoint.gov_certification.models.reassignment_trail_reviewer.ReassignmentTrailReviewer(
                                id = '0fbe863c063c4c88a35fd7f17e8a3df5', 
                                name = 'William Wilson', ), 
                            reassignment_type = 'AUTOMATIC_REASSIGNMENT', )
                        ], ),
completed=False,
decisions_made=20,
decisions_total=40,
completed_subjects=5,
total_subjects=10,
id='ef38f943-47e9-4562-b5bb-8424a56397d8',
name='Quarterly Access Review - Q4 2018',
created='2018-10-18T13:49:37.385Z',
modified='2018-10-19T12:49:37.385Z',
reauth_required=False
)

```
[[Back to top]](#) 

