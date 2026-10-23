# Intelnonhumanidentityownershipitem

# Intelnonhumanidentityownershipitem

Owned non-human identity summary row (aggregate slices and child route).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identity Security Cloud identifier for the owned non-human identity. | [required]
**display_name** | **str** | Preferred display name for the owned non-human identity. | [required]
**source** | [**Intelmachinesourcewire**](intelmachinesourcewire) | Source of the owned non-human identity. | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.intelnonhumanidentityownershipitem import Intelnonhumanidentityownershipitem

intelnonhumanidentityownershipitem = Intelnonhumanidentityownershipitem(
id='2c91808874ff91550175097daaec161e',
display_name='Example AI Agent',
source=sailpoint.intelligence.models.intelmachinesourcewire.Intelmachinesourcewire(
                    id = '60de165099e649cb828553a5e8510fc4', 
                    name = 'Example Directory', 
                    type = 'DelimitedFile', )
)

```
[[Back to top]](#) 

