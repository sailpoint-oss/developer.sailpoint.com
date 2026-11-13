# SearchFormDefinitionsByTenantV1400Response

# SearchFormDefinitionsByTenantV1400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail_code** | **str** |  | [optional] 
**messages** | [**[]ErrorMessage**](error-message) |  | [optional] 
**status_code** | **int** |  | [optional] 
**tracking_id** | **str** |  | [optional] 
\}

## Example

```python
from sailpoint.custom_forms.models.search_form_definitions_by_tenant_v1400_response import SearchFormDefinitionsByTenantV1400Response

search_form_definitions_by_tenant_v1400_response = SearchFormDefinitionsByTenantV1400Response(
detail_code='',
messages=[
                    sailpoint.custom_forms.models.error_message_is_the_standard_api_error_response_message_type/.ErrorMessage is the standard API error response message type.(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'This is an error', )
                    ],
status_code=56,
tracking_id=''
)

```
[[Back to top]](#) 

