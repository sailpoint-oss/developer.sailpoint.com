# LifecycleCommentAuthorReference

# LifecycleCommentAuthorReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'WORKGROUP',    'API_TOKEN',    'SYSTEM' ] | Author category for the comment. | [optional] 
**id** | **str** | Identifier of the comment author. | [optional] 
**name** | **str** | Display name of the comment author. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities_lifecycle_actions.models.lifecycle_comment_author_reference import LifecycleCommentAuthorReference

lifecycle_comment_author_reference = LifecycleCommentAuthorReference(
type='IDENTITY',
id='2c9180858082150f0180893dbaf44201',
name='Pat Manager'
)

```
[[Back to top]](#) 

