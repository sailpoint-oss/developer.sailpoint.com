# Errormessagedto

# Errormessagedto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | The locale for the message text, a BCP 47 language tag. | [optional] 
**locale_origin** | **Localeorigin** |  | [optional] 
**text** | **str** | Actual text of the error message in the indicated locale. | [optional] 
\}

## Example

```python
from sailpoint.prompt_insights.models.errormessagedto import Errormessagedto

errormessagedto = Errormessagedto(
locale='en-US',
locale_origin='DEFAULT',
text='The request was syntactically correct but its content is semantically invalid.'
)

```
[[Back to top]](#) 

