# CertificationStatusSummary

# CertificationStatusSummary

Status summary of active certifications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_certifications** | **int** | The number of active certifications | [optional] 
**overdue_certifications** | **int** | The number of certifications passed the due date | [optional] 
**maximum_days_overdue** | **int** | The maximum number of days past due the most overdue certification is | [optional] 
**minimum_days_left_to_complete** | **int** | The closest number of days to completion | [optional] 
**completed_decisions_for_active_certs** | **int** | The number of of decisions that have been made | [optional] 
**pending_decisions_for_active_certs** | **int** | The number of decisions that are pending | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.certification_status_summary import CertificationStatusSummary

certification_status_summary = CertificationStatusSummary(
active_certifications=20,
overdue_certifications=20,
maximum_days_overdue=20,
minimum_days_left_to_complete=20,
completed_decisions_for_active_certs=20,
pending_decisions_for_active_certs=20
)

```
[[Back to top]](#) 

