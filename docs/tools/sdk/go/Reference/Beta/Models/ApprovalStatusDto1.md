---
id: beta-approval-status-dto1
title: ApprovalStatusDto1
pagination_label: ApprovalStatusDto1
sidebar_label: ApprovalStatusDto1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalStatusDto1', 'BetaApprovalStatusDto1'] 
slug: /tools/sdk/go/beta/models/approval-status-dto1
tags: ['SDK', 'Software Development Kit', 'ApprovalStatusDto1', 'BetaApprovalStatusDto1']
---

# ApprovalStatusDto1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Forwarded** | Pointer to **bool** | True if the request for this item was forwarded from one owner to another. | [optional] [default to false]
**OriginalOwner** | Pointer to [**ApprovalStatusDtoOriginalOwner**](approval-status-dto-original-owner) |  | [optional] 
**CurrentOwner** | Pointer to [**ApprovalStatusDtoCurrentOwner**](approval-status-dto-current-owner) |  | [optional] 
**Modified** | Pointer to **NullableTime** | Time at which item was modified. | [optional] 
**Status** | Pointer to [**ManualWorkItemState**](manual-work-item-state) |  | [optional] 
**Scheme** | Pointer to [**ApprovalScheme**](approval-scheme) |  | [optional] 
**ErrorMessages** | Pointer to [**[]ErrorMessageDto1**](error-message-dto1) | If the request failed, includes any error messages that were generated. | [optional] 
**Comment** | Pointer to **NullableString** | Comment, if any, provided by the approver. | [optional] 
**RemoveDate** | Pointer to **NullableTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 

## Methods

### NewApprovalStatusDto1

`func NewApprovalStatusDto1() *ApprovalStatusDto1`

NewApprovalStatusDto1 instantiates a new ApprovalStatusDto1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalStatusDto1WithDefaults

`func NewApprovalStatusDto1WithDefaults() *ApprovalStatusDto1`

NewApprovalStatusDto1WithDefaults instantiates a new ApprovalStatusDto1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetForwarded

`func (o *ApprovalStatusDto1) GetForwarded() bool`

GetForwarded returns the Forwarded field if non-nil, zero value otherwise.

### GetForwardedOk

`func (o *ApprovalStatusDto1) GetForwardedOk() (*bool, bool)`

GetForwardedOk returns a tuple with the Forwarded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForwarded

`func (o *ApprovalStatusDto1) SetForwarded(v bool)`

SetForwarded sets Forwarded field to given value.

### HasForwarded

`func (o *ApprovalStatusDto1) HasForwarded() bool`

HasForwarded returns a boolean if a field has been set.

### GetOriginalOwner

`func (o *ApprovalStatusDto1) GetOriginalOwner() ApprovalStatusDtoOriginalOwner`

GetOriginalOwner returns the OriginalOwner field if non-nil, zero value otherwise.

### GetOriginalOwnerOk

`func (o *ApprovalStatusDto1) GetOriginalOwnerOk() (*ApprovalStatusDtoOriginalOwner, bool)`

GetOriginalOwnerOk returns a tuple with the OriginalOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalOwner

`func (o *ApprovalStatusDto1) SetOriginalOwner(v ApprovalStatusDtoOriginalOwner)`

SetOriginalOwner sets OriginalOwner field to given value.

### HasOriginalOwner

`func (o *ApprovalStatusDto1) HasOriginalOwner() bool`

HasOriginalOwner returns a boolean if a field has been set.

### GetCurrentOwner

`func (o *ApprovalStatusDto1) GetCurrentOwner() ApprovalStatusDtoCurrentOwner`

GetCurrentOwner returns the CurrentOwner field if non-nil, zero value otherwise.

### GetCurrentOwnerOk

`func (o *ApprovalStatusDto1) GetCurrentOwnerOk() (*ApprovalStatusDtoCurrentOwner, bool)`

GetCurrentOwnerOk returns a tuple with the CurrentOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentOwner

`func (o *ApprovalStatusDto1) SetCurrentOwner(v ApprovalStatusDtoCurrentOwner)`

SetCurrentOwner sets CurrentOwner field to given value.

### HasCurrentOwner

`func (o *ApprovalStatusDto1) HasCurrentOwner() bool`

HasCurrentOwner returns a boolean if a field has been set.

### GetModified

`func (o *ApprovalStatusDto1) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *ApprovalStatusDto1) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *ApprovalStatusDto1) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *ApprovalStatusDto1) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *ApprovalStatusDto1) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *ApprovalStatusDto1) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetStatus

`func (o *ApprovalStatusDto1) GetStatus() ManualWorkItemState`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ApprovalStatusDto1) GetStatusOk() (*ManualWorkItemState, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ApprovalStatusDto1) SetStatus(v ManualWorkItemState)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ApprovalStatusDto1) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetScheme

`func (o *ApprovalStatusDto1) GetScheme() ApprovalScheme`

GetScheme returns the Scheme field if non-nil, zero value otherwise.

### GetSchemeOk

`func (o *ApprovalStatusDto1) GetSchemeOk() (*ApprovalScheme, bool)`

GetSchemeOk returns a tuple with the Scheme field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheme

`func (o *ApprovalStatusDto1) SetScheme(v ApprovalScheme)`

SetScheme sets Scheme field to given value.

### HasScheme

`func (o *ApprovalStatusDto1) HasScheme() bool`

HasScheme returns a boolean if a field has been set.

### GetErrorMessages

`func (o *ApprovalStatusDto1) GetErrorMessages() []ErrorMessageDto1`

GetErrorMessages returns the ErrorMessages field if non-nil, zero value otherwise.

### GetErrorMessagesOk

`func (o *ApprovalStatusDto1) GetErrorMessagesOk() (*[]ErrorMessageDto1, bool)`

GetErrorMessagesOk returns a tuple with the ErrorMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessages

`func (o *ApprovalStatusDto1) SetErrorMessages(v []ErrorMessageDto1)`

SetErrorMessages sets ErrorMessages field to given value.

### HasErrorMessages

`func (o *ApprovalStatusDto1) HasErrorMessages() bool`

HasErrorMessages returns a boolean if a field has been set.

### SetErrorMessagesNil

`func (o *ApprovalStatusDto1) SetErrorMessagesNil(b bool)`

 SetErrorMessagesNil sets the value for ErrorMessages to be an explicit nil

### UnsetErrorMessages
`func (o *ApprovalStatusDto1) UnsetErrorMessages()`

UnsetErrorMessages ensures that no value is present for ErrorMessages, not even an explicit nil
### GetComment

`func (o *ApprovalStatusDto1) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ApprovalStatusDto1) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ApprovalStatusDto1) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *ApprovalStatusDto1) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *ApprovalStatusDto1) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *ApprovalStatusDto1) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetRemoveDate

`func (o *ApprovalStatusDto1) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *ApprovalStatusDto1) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *ApprovalStatusDto1) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *ApprovalStatusDto1) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *ApprovalStatusDto1) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *ApprovalStatusDto1) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil

