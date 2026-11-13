# CertificationSignedOff

# CertificationSignedOff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certification** | [**CertificationSignedOffCertification**](certification-signed-off-certification) |  | [required]
\}

## Example

```python
from sailpoint.triggers.models.certification_signed_off import CertificationSignedOff

certification_signed_off = CertificationSignedOff(
certification=sailpoint.triggers.models.certification_signed_off_certification.CertificationSignedOff_certification(
                    id = '2c91808576f886190176f88caf0d0067', 
                    name = 'Manager Access Review for Alice Baker', 
                    created = '2020-02-16T03:04:45.815Z', 
                    modified = '2020-02-16T03:06:45.815Z', )
)

```
[[Back to top]](#) 

