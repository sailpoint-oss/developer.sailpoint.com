# Argument

# Argument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the name of the argument | [required]
**description** | **str** | the description of the argument | [optional] 
**type** | **str** | the programmatic type of the argument | [optional] 
\}

## Example

```python
from sailpoint.connector_rule_management.models.argument import Argument

argument = Argument(
name='firstName',
description='the first name of the identity',
type='String'
)

```
[[Back to top]](#) 

