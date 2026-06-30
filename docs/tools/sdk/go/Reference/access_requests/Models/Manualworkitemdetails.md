---
id: v1-manualworkitemdetails
title: Manualworkitemdetails
pagination_label: Manualworkitemdetails
sidebar_label: Manualworkitemdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Manualworkitemdetails', 'V1Manualworkitemdetails'] 
slug: /tools/sdk/go/accessrequests/models/manualworkitemdetails
tags: ['SDK', 'Software Development Kit', 'Manualworkitemdetails', 'V1Manualworkitemdetails']
---

# Manualworkitemdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Forwarded** | Pointer to **bool** | True if the request for this item was forwarded from one owner to another. | [optional] [default to false]
**OriginalOwner** | Pointer to [**NullableManualworkitemdetailsOriginalOwner**](manualworkitemdetails-original-owner) |  | [optional] 
**CurrentOwner** | Pointer to [**NullableManualworkitemdetailsCurrentOwner**](manualworkitemdetails-current-owner) |  | [optional] 
**Modified** | Pointer to **SailPointTime** | Time at which item was modified. | [optional] 
**Status** | Pointer to [**Manualworkitemstate**](manualworkitemstate) |  | [optional] 
**ForwardHistory** | Pointer to [**[]Approvalforwardhistory**](approvalforwardhistory) | The history of approval forward action. | [optional] 

## Methods

### NewManualworkitemdetails

`func NewManualworkitemdetails() *Manualworkitemdetails`

NewManualworkitemdetails instantiates a new Manualworkitemdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManualworkitemdetailsWithDefaults

`func NewManualworkitemdetailsWithDefaults() *Manualworkitemdetails`

NewManualworkitemdetailsWithDefaults instantiates a new Manualworkitemdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetForwarded

`func (o *Manualworkitemdetails) GetForwarded() bool`

GetForwarded returns the Forwarded field if non-nil, zero value otherwise.

### GetForwardedOk

`func (o *Manualworkitemdetails) GetForwardedOk() (*bool, bool)`

GetForwardedOk returns a tuple with the Forwarded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForwarded

`func (o *Manualworkitemdetails) SetForwarded(v bool)`

SetForwarded sets Forwarded field to given value.

### HasForwarded

`func (o *Manualworkitemdetails) HasForwarded() bool`

HasForwarded returns a boolean if a field has been set.

### GetOriginalOwner

`func (o *Manualworkitemdetails) GetOriginalOwner() ManualworkitemdetailsOriginalOwner`

GetOriginalOwner returns the OriginalOwner field if non-nil, zero value otherwise.

### GetOriginalOwnerOk

`func (o *Manualworkitemdetails) GetOriginalOwnerOk() (*ManualworkitemdetailsOriginalOwner, bool)`

GetOriginalOwnerOk returns a tuple with the OriginalOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalOwner

`func (o *Manualworkitemdetails) SetOriginalOwner(v ManualworkitemdetailsOriginalOwner)`

SetOriginalOwner sets OriginalOwner field to given value.

### HasOriginalOwner

`func (o *Manualworkitemdetails) HasOriginalOwner() bool`

HasOriginalOwner returns a boolean if a field has been set.

### SetOriginalOwnerNil

`func (o *Manualworkitemdetails) SetOriginalOwnerNil(b bool)`

 SetOriginalOwnerNil sets the value for OriginalOwner to be an explicit nil

### UnsetOriginalOwner
`func (o *Manualworkitemdetails) UnsetOriginalOwner()`

UnsetOriginalOwner ensures that no value is present for OriginalOwner, not even an explicit nil
### GetCurrentOwner

`func (o *Manualworkitemdetails) GetCurrentOwner() ManualworkitemdetailsCurrentOwner`

GetCurrentOwner returns the CurrentOwner field if non-nil, zero value otherwise.

### GetCurrentOwnerOk

`func (o *Manualworkitemdetails) GetCurrentOwnerOk() (*ManualworkitemdetailsCurrentOwner, bool)`

GetCurrentOwnerOk returns a tuple with the CurrentOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentOwner

`func (o *Manualworkitemdetails) SetCurrentOwner(v ManualworkitemdetailsCurrentOwner)`

SetCurrentOwner sets CurrentOwner field to given value.

### HasCurrentOwner

`func (o *Manualworkitemdetails) HasCurrentOwner() bool`

HasCurrentOwner returns a boolean if a field has been set.

### SetCurrentOwnerNil

`func (o *Manualworkitemdetails) SetCurrentOwnerNil(b bool)`

 SetCurrentOwnerNil sets the value for CurrentOwner to be an explicit nil

### UnsetCurrentOwner
`func (o *Manualworkitemdetails) UnsetCurrentOwner()`

UnsetCurrentOwner ensures that no value is present for CurrentOwner, not even an explicit nil
### GetModified

`func (o *Manualworkitemdetails) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Manualworkitemdetails) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Manualworkitemdetails) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Manualworkitemdetails) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetStatus

`func (o *Manualworkitemdetails) GetStatus() Manualworkitemstate`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Manualworkitemdetails) GetStatusOk() (*Manualworkitemstate, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Manualworkitemdetails) SetStatus(v Manualworkitemstate)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Manualworkitemdetails) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetForwardHistory

`func (o *Manualworkitemdetails) GetForwardHistory() []Approvalforwardhistory`

GetForwardHistory returns the ForwardHistory field if non-nil, zero value otherwise.

### GetForwardHistoryOk

`func (o *Manualworkitemdetails) GetForwardHistoryOk() (*[]Approvalforwardhistory, bool)`

GetForwardHistoryOk returns a tuple with the ForwardHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForwardHistory

`func (o *Manualworkitemdetails) SetForwardHistory(v []Approvalforwardhistory)`

SetForwardHistory sets ForwardHistory field to given value.

### HasForwardHistory

`func (o *Manualworkitemdetails) HasForwardHistory() bool`

HasForwardHistory returns a boolean if a field has been set.

### SetForwardHistoryNil

`func (o *Manualworkitemdetails) SetForwardHistoryNil(b bool)`

 SetForwardHistoryNil sets the value for ForwardHistory to be an explicit nil

### UnsetForwardHistory
`func (o *Manualworkitemdetails) UnsetForwardHistory()`

UnsetForwardHistory ensures that no value is present for ForwardHistory, not even an explicit nil

