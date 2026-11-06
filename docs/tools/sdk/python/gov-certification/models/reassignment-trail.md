# ReassignmentTrail

# ReassignmentTrail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previous_reviewer** | [**ReassignmentTrailReviewer**](reassignment-trail-reviewer) |  | [optional] 
**new_reviewer** | [**ReassignmentTrailReviewer**](reassignment-trail-reviewer) |  | [optional] 
**reassignment_type** |  **Enum** [  'AUTOMATIC_REASSIGNMENT',    'MANUAL_REASSIGNMENT',    'SELF_REVIEW_DELEGATION' ] | The type of reassignment. | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.reassignment_trail import ReassignmentTrail

reassignment_trail = ReassignmentTrail(
previous_reviewer=sailpoint.gov_certification.models.reassignment_trail_reviewer.ReassignmentTrailReviewer(
                    id = '0fbe863c063c4c88a35fd7f17e8a3df5', 
                    name = 'William Wilson', ),
new_reviewer=sailpoint.gov_certification.models.reassignment_trail_reviewer.ReassignmentTrailReviewer(
                    id = '0fbe863c063c4c88a35fd7f17e8a3df5', 
                    name = 'William Wilson', ),
reassignment_type='AUTOMATIC_REASSIGNMENT'
)

```
[[Back to top]](#) 

