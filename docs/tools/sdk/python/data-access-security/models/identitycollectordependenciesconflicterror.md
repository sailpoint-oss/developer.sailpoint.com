# Identitycollectordependenciesconflicterror

# Identitycollectordependenciesconflicterror

Conflict response returned when an identity collector cannot be deleted because it is in use.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail_code** | **str** | Fine-grained error code providing more detail of the error. | [optional] 
**tracking_id** | **str** | Unique tracking id for the error. | [optional] 
**messages** | [**[]IdentitycollectordependenciesconflicterrorMessagesInner**](identitycollectordependenciesconflicterror-messages-inner) | Generic localized reason for error. | [optional] 
**dependencies** | [**[]Identitycollectordependency**](identitycollectordependency) | Dependent objects blocking deletion. At most three items are returned. | [optional] 
**extended_dependencies_count** | **int** | Number of additional dependent objects not included in `dependencies`. | [optional] 
\}

## Example

```python
from sailpoint.data_access_security.models.identitycollectordependenciesconflicterror import Identitycollectordependenciesconflicterror

identitycollectordependenciesconflicterror = Identitycollectordependenciesconflicterror(
detail_code='409 Conflict',
tracking_id='e7eab60924f64aa284175b9fa3309599',
messages=[
                    sailpoint.data_access_security.models.identitycollectordependenciesconflicterror_messages_inner.Identitycollectordependenciesconflicterror_messages_inner(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'Identity collector is in use and cannot be deleted.', )
                    ],
dependencies=[
                    sailpoint.data_access_security.models.identitycollectordependency.Identitycollectordependency(
                        name = 'Application - Finance SharePoint', 
                        type = 'WBX.WhiteOPS.ServerCore.BAM', 
                        type_display_name = 'Application', )
                    ],
extended_dependencies_count=2
)

```
[[Back to top]](#) 

