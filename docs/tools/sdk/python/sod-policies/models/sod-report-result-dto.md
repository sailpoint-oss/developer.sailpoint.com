# SodReportResultDto

# SodReportResultDto

SOD policy violation report result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'REPORT_RESULT' ] | SOD policy violation report result DTO type. | [optional] 
**id** | **str** | SOD policy violation report result ID. | [optional] 
**name** | **str** | Human-readable name of the SOD policy violation report result. | [optional] 
\}

## Example

```python
from sailpoint.sod_policies.models.sod_report_result_dto import SodReportResultDto

sod_report_result_dto = SodReportResultDto(
type='REPORT_RESULT',
id='2c9180835d191a86015d28455b4b232a',
name='SOD Policy 1 Violation'
)

```
[[Back to top]](#) 

