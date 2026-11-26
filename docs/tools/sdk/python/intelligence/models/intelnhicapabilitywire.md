# Intelnhicapabilitywire

# Intelnhicapabilitywire

A capability linked to a non-human identity, such as an MCP server, tool, or skill.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of the linked capability. | [required]
**name** | **str** | Display name of the capability. Empty string when the name is not available. | [required]
**type** |  **Enum** [  'MCP',    'TOOL',    'SKILL' ] | Kind of capability. | [required]
**source_name** | **str** | Name of the source where the capability was discovered. Empty string when not available. | [required]
\}

## Example

```python
from sailpoint.intelligence.models.intelnhicapabilitywire import Intelnhicapabilitywire

intelnhicapabilitywire = Intelnhicapabilitywire(
id='7c2a9e14-6b3f-4d18-9a27-0e5f8c1b4d63',
name='example inventory tool',
type='TOOL',
source_name='Example Source'
)

```
[[Back to top]](#) 

