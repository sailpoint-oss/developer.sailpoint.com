# SourceCode

# SourceCode

SourceCode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | the version of the code | [required]
**script** | **str** | The code | [required]
\}

## Example

```python
from sailpoint.connector_rule_management.models.source_code import SourceCode

source_code = SourceCode(
version='1.0',
script='return "Mr. " + firstName;'
)

```
[[Back to top]](#) 

