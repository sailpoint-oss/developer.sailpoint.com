# Intelmachineidentityowners

# Intelmachineidentityowners

Owner references. primaryIdentity is null when no primary owner is set. Primary and secondary owner ids are both considered for derived.isOrphaned evaluation. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_identity** | [**Intelmachineentityref**](intelmachineentityref) | Primary human owner of the machine identity when assigned. | [required]
**secondary_identities** | [**[]Intelmachineentityref**](intelmachineentityref) | Secondary human owners associated with the machine identity. | [required]
\}

## Example

```python
from sailpoint.intelligence.models.intelmachineidentityowners import Intelmachineidentityowners

intelmachineidentityowners = Intelmachineidentityowners(
primary_identity=sailpoint.intelligence.models.intelmachineentityref.Intelmachineentityref(
                    type = 'IDENTITY', 
                    id = 'ef38f94347e94562b5bb8424a56397d8', 
                    name = 'Example User', 
                    email = 'user@example.com', ),
secondary_identities=[
                    sailpoint.intelligence.models.intelmachineentityref.Intelmachineentityref(
                        type = 'IDENTITY', 
                        id = 'ef38f94347e94562b5bb8424a56397d8', 
                        name = 'Example User', 
                        email = 'user@example.com', )
                    ]
)

```
[[Back to top]](#) 

