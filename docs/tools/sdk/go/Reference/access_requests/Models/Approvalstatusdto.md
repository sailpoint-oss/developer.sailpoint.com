---
id: v1-approvalstatusdto
title: Approvalstatusdto
pagination_label: Approvalstatusdto
sidebar_label: Approvalstatusdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalstatusdto', 'V1Approvalstatusdto'] 
slug: /tools/sdk/go/accessrequests/models/approvalstatusdto
tags: ['SDK', 'Software Development Kit', 'Approvalstatusdto', 'V1Approvalstatusdto']
---

# Approvalstatusdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Forwarded** | Pointer to **bool** | True if the request for this item was forwarded from one owner to another. | [optional] [default to false]
**OriginalOwner** | Pointer to [**ApprovalstatusdtoOriginalOwner**](approvalstatusdto-original-owner) |  | [optional] 
**CurrentOwner** | Pointer to [**ApprovalstatusdtoCurrentOwner**](approvalstatusdto-current-owner) |  | [optional] 
**Modified** | Pointer to **NullableTime** | Time at which item was modified. | [optional] 
**Status** | Pointer to [**Manualworkitemstate**](manualworkitemstate) |  | [optional] 
**Scheme** | Pointer to [**Approvalscheme**](approvalscheme) |  | [optional] 
**ErrorMessages** | Pointer to [**[]Errormessagedto**](errormessagedto) | If the request failed, includes any error messages that were generated. | [optional] 
**Comment** | Pointer to **NullableString** | Comment, if any, provided by the approver. | [optional] 
**RemoveDate** | Pointer to **NullableTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 

## Methods

### NewApprovalstatusdto

`func NewApprovalstatusdto() *Approvalstatusdto`

NewApprovalstatusdto instantiates a new Approvalstatusdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalstatusdtoWithDefaults

`func NewApprovalstatusdtoWithDefaults() *Approvalstatusdto`

NewApprovalstatusdtoWithDefaults instantiates a new Approvalstatusdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetForwarded

`func (o *Approvalstatusdto) GetForwarded() bool`

GetForwarded returns the Forwarded field if non-nil, zero value otherwise.

### GetForwardedOk

`func (o *Approvalstatusdto) GetForwardedOk() (*bool, bool)`

GetForwardedOk returns a tuple with the Forwarded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForwarded

`func (o *Approvalstatusdto) SetForwarded(v bool)`

SetForwarded sets Forwarded field to given value.

### HasForwarded

`func (o *Approvalstatusdto) HasForwarded() bool`

HasForwarded returns a boolean if a field has been set.

### GetOriginalOwner

`func (o *Approvalstatusdto) GetOriginalOwner() ApprovalstatusdtoOriginalOwner`

GetOriginalOwner returns the OriginalOwner field if non-nil, zero value otherwise.

### GetOriginalOwnerOk

`func (o *Approvalstatusdto) GetOriginalOwnerOk() (*ApprovalstatusdtoOriginalOwner, bool)`

GetOriginalOwnerOk returns a tuple with the OriginalOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalOwner

`func (o *Approvalstatusdto) SetOriginalOwner(v ApprovalstatusdtoOriginalOwner)`

SetOriginalOwner sets OriginalOwner field to given value.

### HasOriginalOwner

`func (o *Approvalstatusdto) HasOriginalOwner() bool`

HasOriginalOwner returns a boolean if a field has been set.

### GetCurrentOwner

`func (o *Approvalstatusdto) GetCurrentOwner() ApprovalstatusdtoCurrentOwner`

GetCurrentOwner returns the CurrentOwner field if non-nil, zero value otherwise.

### GetCurrentOwnerOk

`func (o *Approvalstatusdto) GetCurrentOwnerOk() (*ApprovalstatusdtoCurrentOwner, bool)`

GetCurrentOwnerOk returns a tuple with the CurrentOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentOwner

`func (o *Approvalstatusdto) SetCurrentOwner(v ApprovalstatusdtoCurrentOwner)`

SetCurrentOwner sets CurrentOwner field to given value.

### HasCurrentOwner

`func (o *Approvalstatusdto) HasCurrentOwner() bool`

HasCurrentOwner returns a boolean if a field has been set.

### GetModified

`func (o *Approvalstatusdto) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Approvalstatusdto) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Approvalstatusdto) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Approvalstatusdto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *Approvalstatusdto) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Approvalstatusdto) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetStatus

`func (o *Approvalstatusdto) GetStatus() Manualworkitemstate`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Approvalstatusdto) GetStatusOk() (*Manualworkitemstate, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Approvalstatusdto) SetStatus(v Manualworkitemstate)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Approvalstatusdto) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetScheme

`func (o *Approvalstatusdto) GetScheme() Approvalscheme`

GetScheme returns the Scheme field if non-nil, zero value otherwise.

### GetSchemeOk

`func (o *Approvalstatusdto) GetSchemeOk() (*Approvalscheme, bool)`

GetSchemeOk returns a tuple with the Scheme field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheme

`func (o *Approvalstatusdto) SetScheme(v Approvalscheme)`

SetScheme sets Scheme field to given value.

### HasScheme

`func (o *Approvalstatusdto) HasScheme() bool`

HasScheme returns a boolean if a field has been set.

### GetErrorMessages

`func (o *Approvalstatusdto) GetErrorMessages() []Errormessagedto`

GetErrorMessages returns the ErrorMessages field if non-nil, zero value otherwise.

### GetErrorMessagesOk

`func (o *Approvalstatusdto) GetErrorMessagesOk() (*[]Errormessagedto, bool)`

GetErrorMessagesOk returns a tuple with the ErrorMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessages

`func (o *Approvalstatusdto) SetErrorMessages(v []Errormessagedto)`

SetErrorMessages sets ErrorMessages field to given value.

### HasErrorMessages

`func (o *Approvalstatusdto) HasErrorMessages() bool`

HasErrorMessages returns a boolean if a field has been set.

### SetErrorMessagesNil

`func (o *Approvalstatusdto) SetErrorMessagesNil(b bool)`

 SetErrorMessagesNil sets the value for ErrorMessages to be an explicit nil

### UnsetErrorMessages
`func (o *Approvalstatusdto) UnsetErrorMessages()`

UnsetErrorMessages ensures that no value is present for ErrorMessages, not even an explicit nil
### GetComment

`func (o *Approvalstatusdto) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Approvalstatusdto) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Approvalstatusdto) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Approvalstatusdto) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *Approvalstatusdto) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *Approvalstatusdto) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetRemoveDate

`func (o *Approvalstatusdto) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *Approvalstatusdto) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *Approvalstatusdto) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *Approvalstatusdto) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *Approvalstatusdto) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *Approvalstatusdto) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil

