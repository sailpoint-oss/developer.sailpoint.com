# ManualWorkItemDetails

# ManualWorkItemDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Forwarded** | **Boolean** | True if the request for this item was forwarded from one owner to another. | [optional] [default to $false]
**OriginalOwner** | [**ManualWorkItemDetailsOriginalOwner**](manual-work-item-details-original-owner) |  | [optional] 
**CurrentOwner** | [**ManualWorkItemDetailsCurrentOwner**](manual-work-item-details-current-owner) |  | [optional] 
**Modified** | **System.DateTime** | Time at which item was modified. | [optional] 
**Status** | **ManualWorkItemState** |  | [optional] 
**ForwardHistory** | [**[]ApprovalForwardHistory**](approval-forward-history) | The history of approval forward action. | [optional] 

## Examples

- Prepare the resource
```powershell
$ManualWorkItemDetails = Initialize-ManualWorkItemDetails  -Forwarded true `
 -OriginalOwner null `
 -CurrentOwner null `
 -Modified 2019-08-23T18:52:57.398Z `
 -Status null `
 -ForwardHistory null
```

- Convert the resource to JSON
```powershell
$ManualWorkItemDetails | ConvertTo-JSON
```


[[Back to top]](#) 

