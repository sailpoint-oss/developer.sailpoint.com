# SendAccountVerificationRequest

# SendAccountVerificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_name** | **str** | The source name where identity account password should be reset | [optional] 
**via** |  **Enum** [  'EMAIL_WORK',    'EMAIL_PERSONAL',    'LINK_WORK',    'LINK_PERSONAL' ] | The method to send notification | [required]
\}

## Example

```python
from sailpoint.identities.models.send_account_verification_request import SendAccountVerificationRequest

send_account_verification_request = SendAccountVerificationRequest(
source_name='Active Directory Source',
via='EMAIL_WORK'
)

```
[[Back to top]](#) 

