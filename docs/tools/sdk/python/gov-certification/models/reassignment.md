# Reassignment

# Reassignment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reassigned_from** | [**CertificationReference**](certification-reference) |  | [optional] 
**comment** | **str** | Comments from the previous reviewer. | [optional] 
**reassignment_trails** | [**[]ReassignmentTrail**](reassignment-trail) | The reassignmentTrail | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.reassignment import Reassignment

reassignment = Reassignment(
reassigned_from=sailpoint.gov_certification.models.certification_reference.CertificationReference(
                    certification_id = '7589a83c-ec4b-4f13-8ce5-6c1a5ef0756d', 
                    certification_display_name = 'Manager Access for Michael Michaels', 
                    reviewer = sailpoint.gov_certification.models.certification_reviewer.CertificationReviewer(
                        id = '0fbe863c063c4c88a35fd7f17e8a3df5', 
                        type = 'IDENTITY', 
                        name = 'William Wilson', 
                        email = 'William.Wilson@email.com', ), ),
comment='Please review',
reassignment_trails=[
                    sailpoint.gov_certification.models.reassignment_trail.ReassignmentTrail(
                        previous_reviewer = sailpoint.gov_certification.models.reassignment_trail_reviewer.ReassignmentTrailReviewer(
                            id = '0fbe863c063c4c88a35fd7f17e8a3df5', 
                            name = 'William Wilson', ), 
                        new_reviewer = sailpoint.gov_certification.models.reassignment_trail_reviewer.ReassignmentTrailReviewer(
                            id = '0fbe863c063c4c88a35fd7f17e8a3df5', 
                            name = 'William Wilson', ), 
                        reassignment_type = 'AUTOMATIC_REASSIGNMENT', )
                    ]
)

```
[[Back to top]](#) 

