# Intelnhicapabilities

# Intelnhicapabilities

Linked MCP servers, tools, and skills for a non-human identity. When the list loads successfully, `mcp`, `tool`, and `skill` are present. When it could not be loaded, those properties are omitted and only `message` and `reason` are returned. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mcp** | [**Intelnhicapabilitybucket**](intelnhicapabilitybucket) | Linked MCP servers for this identity. | [optional] 
**tool** | [**Intelnhicapabilitybucket**](intelnhicapabilitybucket) | Linked tools for this identity. | [optional] 
**skill** | [**Intelnhicapabilitybucket**](intelnhicapabilitybucket) | Linked skills for this identity. | [optional] 
**message** | **str** | Set when linked capabilities could not be loaded. The `mcp`, `tool`, and `skill` properties are omitted; only `message` and `reason` are present. | [optional] 
**reason** | **Intelenrichmentfailurereason** |  | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.intelnhicapabilities import Intelnhicapabilities

intelnhicapabilities = Intelnhicapabilities(
mcp=sailpoint.intelligence.models.intelnhicapabilitybucket.Intelnhicapabilitybucket(
                    items = [
                        sailpoint.intelligence.models.intelnhicapabilitywire.Intelnhicapabilitywire(
                            id = '7c2a9e14-6b3f-4d18-9a27-0e5f8c1b4d63', 
                            name = 'example inventory tool', 
                            type = 'TOOL', 
                            source_name = 'Example Source', )
                        ], 
                    total_count = 2, 
                    next = 'https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/2c91808874ff91550175097daaec161e/capabilities?type=tool&limit=10&offset=10&count=true', ),
tool=sailpoint.intelligence.models.intelnhicapabilitybucket.Intelnhicapabilitybucket(
                    items = [
                        sailpoint.intelligence.models.intelnhicapabilitywire.Intelnhicapabilitywire(
                            id = '7c2a9e14-6b3f-4d18-9a27-0e5f8c1b4d63', 
                            name = 'example inventory tool', 
                            type = 'TOOL', 
                            source_name = 'Example Source', )
                        ], 
                    total_count = 2, 
                    next = 'https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/2c91808874ff91550175097daaec161e/capabilities?type=tool&limit=10&offset=10&count=true', ),
skill=sailpoint.intelligence.models.intelnhicapabilitybucket.Intelnhicapabilitybucket(
                    items = [
                        sailpoint.intelligence.models.intelnhicapabilitywire.Intelnhicapabilitywire(
                            id = '7c2a9e14-6b3f-4d18-9a27-0e5f8c1b4d63', 
                            name = 'example inventory tool', 
                            type = 'TOOL', 
                            source_name = 'Example Source', )
                        ], 
                    total_count = 2, 
                    next = 'https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/2c91808874ff91550175097daaec161e/capabilities?type=tool&limit=10&offset=10&count=true', ),
message='Data temporarily unavailable. Please try again later.',
reason='UPSTREAM_UNAVAILABLE'
)

```
[[Back to top]](#) 

