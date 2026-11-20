# ImportEntitlementsBySourceV1Request

# ImportEntitlementsBySourceV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**csv_file** | **bytearray** | The CSV file containing the source entitlements to aggregate. | [optional] 
\}

## Example

```python
from sailpoint.entitlements.models.import_entitlements_by_source_v1_request import ImportEntitlementsBySourceV1Request

import_entitlements_by_source_v1_request = ImportEntitlementsBySourceV1Request(
csv_file=bytes(b'blah')
)

```
[[Back to top]](#) 

