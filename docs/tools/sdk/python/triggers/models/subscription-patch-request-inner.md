# SubscriptionPatchRequestInner

# SubscriptionPatchRequestInner

A JSONPatch Operation as defined by [RFC 6902 - JSON Patch](https://tools.ietf.org/html/rfc6902)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** |  **Enum** [  'add',    'remove',    'replace',    'move',    'copy' ] | The operation to be performed | [required]
**path** | **str** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**value** | [**SubscriptionPatchRequestInnerValue**](subscription-patch-request-inner-value) |  | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.subscription_patch_request_inner import SubscriptionPatchRequestInner

subscription_patch_request_inner = SubscriptionPatchRequestInner(
op='replace',
path='/description',
value=New description
)

```
[[Back to top]](#) 

