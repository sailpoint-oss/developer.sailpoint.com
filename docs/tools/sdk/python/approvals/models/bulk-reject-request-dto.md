# BulkRejectRequestDTO

# BulkRejectRequestDTO

BulkRejectRequestDTO is the input struct that represents the request body required to facilitate a bulk reject action for a set of generic approval requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_ids** | **[]str** | Array of Approval IDs to be bulk rejected | [optional] 
**comment** | **str** | Optional comment to include with the bulk reject request | [optional] 
\}

## Example

```python
from sailpoint.approvals.models.bulk_reject_request_dto import BulkRejectRequestDTO

bulk_reject_request_dto = BulkRejectRequestDTO(
approval_ids=["38453251-6be2-5f8f-df93-5ce19e295837","38453251-6be2-5f8f-df93-5ce19e295838"],
comment='Bulk reject by admin'
)

```
[[Back to top]](#) 

