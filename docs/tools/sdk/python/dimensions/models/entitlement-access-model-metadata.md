# EntitlementAccessModelMetadata

# EntitlementAccessModelMetadata

Additional data to classify the entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**[]AccessModelMetadata**](access-model-metadata) |  | [optional] 
\}

## Example

```python
from sailpoint.dimensions.models.entitlement_access_model_metadata import EntitlementAccessModelMetadata

entitlement_access_model_metadata = EntitlementAccessModelMetadata(
attributes=[
                    sailpoint.dimensions.models.access_model_metadata.Access Model Metadata(
                        key = 'iscCsp', 
                        name = 'CSP', 
                        multiselect = True, 
                        status = 'active', 
                        type = 'governance', 
                        object_types = ["general"], 
                        description = 'Indicates the type of deployment environment of an access item.', 
                        values = [
                            sailpoint.dimensions.models.access_model_metadata_values_inner.AccessModelMetadata_values_inner(
                                value = 'development', 
                                name = 'Development', 
                                status = 'active', )
                            ], )
                    ]
)

```
[[Back to top]](#) 

