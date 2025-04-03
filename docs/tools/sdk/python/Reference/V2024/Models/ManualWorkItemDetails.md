---
id: v2024-manual-work-item-details
title: ManualWorkItemDetails
pagination_label: ManualWorkItemDetails
sidebar_label: ManualWorkItemDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManualWorkItemDetails', 'V2024ManualWorkItemDetails'] 
slug: /tools/sdk/go/v2024/models/manual-work-item-details
tags: ['SDK', 'Software Development Kit', 'ManualWorkItemDetails', 'V2024ManualWorkItemDetails']
---

# ManualWorkItemDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Forwarded** | Pointer to **bool** | True if the request for this item was forwarded from one owner to another. | [optional] [default to false]
**OriginalOwner** | Pointer to [**NullableManualWorkItemDetailsOriginalOwner**](manual-work-item-details-original-owner) |  | [optional] 
**CurrentOwner** | Pointer to [**NullableManualWorkItemDetailsCurrentOwner**](manual-work-item-details-current-owner) |  | [optional] 
**Modified** | Pointer to **SailPointTime** | Time at which item was modified. | [optional] 
**Status** | Pointer to [**ManualWorkItemState**](manual-work-item-state) |  | [optional] 
**ForwardHistory** | Pointer to [**[]ApprovalForwardHistory**](approval-forward-history) | The history of approval forward action. | [optional] 

## Methods

### NewManualWorkItemDetails

`func NewManualWorkItemDetails() *ManualWorkItemDetails`

NewManualWorkItemDetails instantiates a new ManualWorkItemDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManualWorkItemDetailsWithDefaults

`func NewManualWorkItemDetailsWithDefaults() *ManualWorkItemDetails`

NewManualWorkItemDetailsWithDefaults instantiates a new ManualWorkItemDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetForwarded

`func (o *ManualWorkItemDetails) GetForwarded() bool`

GetForwarded returns the Forwarded field if non-nil, zero value otherwise.

### GetForwardedOk

`func (o *ManualWorkItemDetails) GetForwardedOk() (*bool, bool)`

GetForwardedOk returns a tuple with the Forwarded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForwarded

`func (o *ManualWorkItemDetails) SetForwarded(v bool)`

SetForwarded sets Forwarded field to given value.

### HasForwarded

`func (o *ManualWorkItemDetails) HasForwarded() bool`

HasForwarded returns a boolean if a field has been set.

### GetOriginalOwner

`func (o *ManualWorkItemDetails) GetOriginalOwner() ManualWorkItemDetailsOriginalOwner`

GetOriginalOwner returns the OriginalOwner field if non-nil, zero value otherwise.

### GetOriginalOwnerOk

`func (o *ManualWorkItemDetails) GetOriginalOwnerOk() (*ManualWorkItemDetailsOriginalOwner, bool)`

GetOriginalOwnerOk returns a tuple with the OriginalOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalOwner

`func (o *ManualWorkItemDetails) SetOriginalOwner(v ManualWorkItemDetailsOriginalOwner)`

SetOriginalOwner sets OriginalOwner field to given value.

### HasOriginalOwner

`func (o *ManualWorkItemDetails) HasOriginalOwner() bool`

HasOriginalOwner returns a boolean if a field has been set.

### SetOriginalOwnerNil

`func (o *ManualWorkItemDetails) SetOriginalOwnerNil(b bool)`

 SetOriginalOwnerNil sets the value for OriginalOwner to be an explicit nil

### UnsetOriginalOwner
`func (o *ManualWorkItemDetails) UnsetOriginalOwner()`

UnsetOriginalOwner ensures that no value is present for OriginalOwner, not even an explicit nil
### GetCurrentOwner

`func (o *ManualWorkItemDetails) GetCurrentOwner() ManualWorkItemDetailsCurrentOwner`

GetCurrentOwner returns the CurrentOwner field if non-nil, zero value otherwise.

### GetCurrentOwnerOk

`func (o *ManualWorkItemDetails) GetCurrentOwnerOk() (*ManualWorkItemDetailsCurrentOwner, bool)`

GetCurrentOwnerOk returns a tuple with the CurrentOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentOwner

`func (o *ManualWorkItemDetails) SetCurrentOwner(v ManualWorkItemDetailsCurrentOwner)`

SetCurrentOwner sets CurrentOwner field to given value.

### HasCurrentOwner

`func (o *ManualWorkItemDetails) HasCurrentOwner() bool`

HasCurrentOwner returns a boolean if a field has been set.

### SetCurrentOwnerNil

`func (o *ManualWorkItemDetails) SetCurrentOwnerNil(b bool)`

 SetCurrentOwnerNil sets the value for CurrentOwner to be an explicit nil

### UnsetCurrentOwner
`func (o *ManualWorkItemDetails) UnsetCurrentOwner()`

UnsetCurrentOwner ensures that no value is present for CurrentOwner, not even an explicit nil
### GetModified

`func (o *ManualWorkItemDetails) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *ManualWorkItemDetails) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *ManualWorkItemDetails) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *ManualWorkItemDetails) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetStatus

`func (o *ManualWorkItemDetails) GetStatus() ManualWorkItemState`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ManualWorkItemDetails) GetStatusOk() (*ManualWorkItemState, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ManualWorkItemDetails) SetStatus(v ManualWorkItemState)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ManualWorkItemDetails) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetForwardHistory

`func (o *ManualWorkItemDetails) GetForwardHistory() []ApprovalForwardHistory`

GetForwardHistory returns the ForwardHistory field if non-nil, zero value otherwise.

### GetForwardHistoryOk

`func (o *ManualWorkItemDetails) GetForwardHistoryOk() (*[]ApprovalForwardHistory, bool)`

GetForwardHistoryOk returns a tuple with the ForwardHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForwardHistory

`func (o *ManualWorkItemDetails) SetForwardHistory(v []ApprovalForwardHistory)`

SetForwardHistory sets ForwardHistory field to given value.

### HasForwardHistory

`func (o *ManualWorkItemDetails) HasForwardHistory() bool`

HasForwardHistory returns a boolean if a field has been set.

### SetForwardHistoryNil

`func (o *ManualWorkItemDetails) SetForwardHistoryNil(b bool)`

 SetForwardHistoryNil sets the value for ForwardHistory to be an explicit nil

### UnsetForwardHistory
`func (o *ManualWorkItemDetails) UnsetForwardHistory()`

UnsetForwardHistory ensures that no value is present for ForwardHistory, not even an explicit nil

