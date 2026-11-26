# Intelnhirisksignalwire

# Intelnhirisksignalwire

One factor that contributes to the non-human identity risk level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Stable identifier for this factor. | [required]
**name** | **str** | Short title of the factor. | [required]
**description** | **str** | Why this factor affects risk. | [required]
**severity_value** |  **Enum** [  'LOW',    'MEDIUM',    'HIGH',    'CRITICAL' ] | Severity of this factor. Omitted when not available. | [optional] 
**last_received_at** | **datetime** | When this factor was last observed. | [required]
**status** | **str** | State of the factor. | [required]
\}

## Example

```python
from sailpoint.intelligence.models.intelnhirisksignalwire import Intelnhirisksignalwire

intelnhirisksignalwire = Intelnhirisksignalwire(
id='human_owner_confirmed',
name='No human owner confirmed',
description='No attributed owner means weak accountability for access and remediation.',
severity_value='CRITICAL',
last_received_at='2026-10-10T16:45:29Z',
status='active'
)

```
[[Back to top]](#) 

